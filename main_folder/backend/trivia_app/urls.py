from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("profiles", ProfileViewSet, basename="profile")
router.register("achievements", AchievementViewSet, basename="achievement")
router.register("results", ResultViewSet, basename="result")
router.register("users", UserViewSet, basename="user") 

urlpatterns = [
    path("", include(router.urls)) ,
    path("login/", handle_login),
    path("logout/", handle_logout)
]
