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
from django.contrib.auth import login, logout, authenticate
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login, logout, authenticate

class DogPostViewSet(ModelViewSet):
    queryset = DogPost.objects.all().order_by('-date_posted')
    serializer_class = DogPostSerializer
    permission_classes = [AllowAny]#[IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_field = ['type', 'breed', 'last_seen_location']




class SignupView(APIView):
    permission_classes = [AllowAny]  # This allows anyone to access this endpoint

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        email = request.data.get("email")

        if not username or not password or not email:
            return Response({"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, password=password, email=email)
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

