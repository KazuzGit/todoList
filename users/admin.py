from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# Register your models here.


class CustomUserAdmin(UserAdmin):
    list_display = (
        'id',
        'username',
        'first_name',
        'last_name',
        'email',
        'is_staff',
    )
    search_fields = (
        'username',
        'email',
        'first_name',
        'last_name',
                
    )


admin.site.register(User, CustomUserAdmin)