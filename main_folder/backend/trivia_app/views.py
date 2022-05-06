from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .views_auth import *
from rest_framework import permissions
import requests

class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    http_method_names = ["get", "post", "put", "patch", "delete"]

    def perform_create(self, serializer):
        serializer.save(player=self.request.user)
        return super().perform_create(serializers)

class AchievementViewSet(ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

class ResultViewSet(ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return (permissions.AllowAny(),)
        return (permissions.IsAuthenticated(),)