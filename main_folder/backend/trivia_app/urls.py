from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("profiles", ProfileViewSet, basename="profile")
router.register("achievements", AchievementViewSet, basename="achievement")
router.register("results", ResultViewSet, basename="result")

urlpatterns = [
    path("", include(router.urls)) 
]
