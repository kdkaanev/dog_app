from rest_framework import serializers
from .models import DogPost, DogUser


class DogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogPost
        fields = '__all__'
