from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User, AbstractUser

# # Create your models here.
# class Player(AbstractUser):
#     image = models.CharField(max_length=300, default="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w")
#     profile_text = models.TextField(blank=True, default="Tell something about yourself here...")
#     #achievements
#     #results

#     def __str__(self):
#         return f"PLAYER: {self.username}"

class Profile(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE, related_name="profile", unique=True)
    image = models.CharField(max_length=300, default="https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w")
    profile_text = models.TextField(blank=True, default="Tell something about yourself here...")
    fact = models.TextField(blank=True, default="None")
    #achievements
    #results

    def __str__(self):
        return f"PLAYER: {self.player}"

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
    correct_answers = models.IntegerField(validators=[MaxValueValidator(10), MinValueValidator(0)])
    points = models.IntegerField(validators=[MaxValueValidator(1000), MinValueValidator(0)])

    def __str__(self): 
        return f"RESULT: {self.points}"