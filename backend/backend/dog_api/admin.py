from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

# Register your models here.
UserModel = get_user_model()


class DogUserAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "email",
        'phone_number',
        "is_admin",

    )
    search_fields = ("username",)