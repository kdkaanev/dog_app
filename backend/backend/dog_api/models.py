from datetime import timezone

from django.db import models


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
    username = models.CharField(
        max_length=30,
        unique=True,
    )
    email = models.EmailField(unique=True)
    phone_number = models.CharField(
        max_length=9,
    )
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.username


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
        null=False,
        blank=False,
    )
    description = models.TextField()
    last_seen_location = models.CharField(
        null=True,
        blank=True,
    )
    date_posted = models.DateTimeField(
        null=True,
        blank=True,
    )
    user = models.ForeignKey(
        DogUser,
        on_delete=models.CASCADE,
        related_name='dog_posts',
    )

    def __str__(self):
        return self.name


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
