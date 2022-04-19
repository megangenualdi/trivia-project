from django.db import models
from django.db.models import IntegerField, Model
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Profile(models.Model):
    image = models.CharField(max_length=300, default="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w")
    profile_text = models.TextField(blank=True)
    #achievements
    #results

    def __str__(self):
        return f"PLAYER: {self.id}"

class Achievement(models.Model):
    player_id = models.ManyToManyField(Profile, related_name="achievements", blank=True)
    title = models.CharField(max_length=64, unique=True)
    image = models.CharField(max_length=200)
    description = models.TextField()
    #profile_set

    def __str__(self):
        return f"ACHIEVEMENT: {self.title}"

class Result(models.Model):
    player_id = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="results")
    correct_answers = models.IntegerField(validators=[MaxValueValidator(3), MinValueValidator(0)])
    points = models.IntegerField(validators=[MaxValueValidator(300), MinValueValidator(0)])

    def __str__(self): 
        return f"RESULT: {self.points}"