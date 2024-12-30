from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DogPostViewSet,SignupView

router = DefaultRouter()
router.register(r'dogs', DogPostViewSet)

urlpatterns = (
    path('', include(router.urls)),
    path('auth/signup/', SignupView.as_view(), name='signup'),
    #path('auth/login/', LoginView.as_view(), name='login'),
    #path('auth/logout/', LogoutView.as_view(), name='logout'),
)
