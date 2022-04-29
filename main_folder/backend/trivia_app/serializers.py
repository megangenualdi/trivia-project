from rest_framework import serializers
from .models import *
from django.contrib.auth.hashers import make_password 


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id", "image", "profile_text", "achievements", "results", "total_score", "achievement_info", "player", "fact"]
    
    total_score = serializers.SerializerMethodField(read_only=True)
    achievement_info = serializers.SerializerMethodField(read_only=True)
    player = serializers.SlugRelatedField(read_only=True, slug_field="username")

    def get_total_score(self, instance):
        total_points = 0
        for result in instance.results.all():
            total_points = total_points + result.points
        return total_points
    
    def get_achievement_info(self, instance):
        data = []
        for achievement in instance.achievements.all():
            info = {
                "title": achievement.title,
                "image": achievement.image,
                "description": achievement.description
            }
            data.append(info)
        return data
    


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ["id","player_id", "title", "image", "description"]

class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ["id","player_id", "correct_answers", "points"]

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        optional_fields = ["profile"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)
