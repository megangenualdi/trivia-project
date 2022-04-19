from rest_framework import serializers
from .models import *


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id","image", "profile_text", "achievements", "results"]

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ["id","player_id", "title", "image", "description"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ["id","player_id", "correct_answers", "points"]