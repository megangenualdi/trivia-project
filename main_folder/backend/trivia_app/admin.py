from django.contrib import admin
from .models import Profile, Achievement, Result
# Register your models here.
admin.site.register([Profile, Achievement, Result])