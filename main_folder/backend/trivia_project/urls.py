from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path("trivia_api/", include("trivia_app.urls"))
]
