from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet
from .models import DogPost
from .serializers import DogPostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend

class DogPostViewSet(ModelViewSet):
    queryset = DogPost.objects.all().order_by('-date_posted')
    serializer_class = DogPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend]
    filterset_field = ['type', 'breed', 'last_seen_location']
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
