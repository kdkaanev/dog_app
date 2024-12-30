from django.utils import timezone

from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


TYPE_CHOICES = (
    ('lost', 'lost'),
    ('found', 'found'),
)
STATUS_CHOICES = (
    ('pending', 'pending'),
    ('approved', 'approved'),
    ('rejected', 'rejected'),
)





class DogUser(models.Model):
    first_name = models.CharField(
        max_length=30,
        blank=True,
        null=True,

    )
    last_name = models.CharField(
        max_length=30,
        blank=True,
        null=True,
    )

    phone_number = models.CharField(
        max_length=9,
    )
    user = models.OneToOneField(
       User,
        on_delete=models.CASCADE,
    )

    @property
    def full_name(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        return self.first_name or self.last_name


class DogPost(models.Model):
    type = models.CharField(
        null=False,
        blank=False,
        choices=TYPE_CHOICES
    )
    name = models.CharField(
        null=True,
        blank=True,
        max_length=100,
    )
    breed = models.CharField(
        null=True,
        blank=True,
        max_length=100,
    )
    photo_url = models.URLField(
        null=True,
        blank=True,
    )
    description = models.TextField()
    last_seen_location = models.CharField(
        null=True,
        blank=True,
    )
    date_posted = models.DateTimeField(
        null=True,
        blank=True,
        auto_now_add=True,
    )
    user = models.ForeignKey(
        DogUser,
        on_delete=models.CASCADE,
        related_name='dog_posts',
    )

    def __str__(self):
        return f"{self.type.capitalize()} - {self.name or 'Unnamed'}"


class AdoptionApplication(models.Model):
    user = models.ForeignKey(
        DogUser,
        on_delete=models.CASCADE,
        related_name='adoption_applications',
    )
    dog = models.ForeignKey(
        DogPost,
        on_delete=models.CASCADE,
        related_name='adoption_applications',
    )
    status = models.CharField(
        null=False,
        blank=False,
        choices=STATUS_CHOICES,
    )
    message = models.TextField()


class Comment(models.Model):
    text = models.TextField()

    post = models.ForeignKey(
        DogPost,
        on_delete=models.CASCADE,
        related_name='comments',
    )
    user = models.ForeignKey(
        DogUser,
        on_delete=models.CASCADE,
        related_name='comments',
    )
    timestamp = models.DateTimeField()
