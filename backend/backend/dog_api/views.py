from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import DogPost
from .serializers import DogPostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly,AllowAny
from django_filters.rest_framework import DjangoFilterBackend

from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login, logout, authenticate

class DogPostViewSet(ModelViewSet):
    queryset = DogPost.objects.all().order_by('-date_posted')
    serializer_class = DogPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
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
