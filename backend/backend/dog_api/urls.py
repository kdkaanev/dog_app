from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DogPostViewSet

router = DefaultRouter()
router.register(r'dogs', DogPostViewSet)

urlpatterns = (
    path('', include(router.urls)),
)
