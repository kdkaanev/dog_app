from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import DogPost, Comment
from .serializers import DogPostSerializer, CommentSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from django_filters.rest_framework import DjangoFilterBackend

from django.contrib.auth.models import User
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login, logout, authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import DogPost


class DogPostViewSet(ModelViewSet):
    permission_classes = [AllowAny]
    queryset = DogPost.objects.all().order_by('-date_posted')
    serializer_class = DogPostSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_field = ['type', 'breed', 'last_seen_location']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")

        User.objects.create_user(username=username, password=password, email=email)
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        login(request, user)
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)


def sign_out(request):
    logout(request)


class AdoptionView(APIView):
    permission_classes = [AllowAny]  # Only authenticated users can adopt

    def post(self, request):
        dog_post_id = request.data.get("dog_post_id")  # ID of the dog post the user wants to adopt

        if not dog_post_id:
            return Response({"error": "Dog post ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            dog_post = DogPost.objects.get(id=dog_post_id)
        except DogPost.DoesNotExist:
            return Response({"error": "Dog post not found"}, status=status.HTTP_404_NOT_FOUND)

        # Check if the dog is already adopted
        if dog_post.status == "adopted":
            return Response({"error": "This dog has already been adopted"}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the dog is found (and eligible for adoption)
        if dog_post.status != "found":
            return Response({"error": "You can only adopt found dogs"}, status=status.HTTP_400_BAD_REQUEST)

        # Mark the dog as adopted
        dog_post.status = "adopted"
        dog_post.save()

        return Response({"message": "Dog adopted successfully"}, status=status.HTTP_200_OK)


class CommentViewSet(ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Automatically assign the logged-in user and the related dog post
        dog_post = DogPost.objects.get(id=self.request.data['dog_post'])
        serializer.save(user=self.request.user, dog_post=dog_post)
