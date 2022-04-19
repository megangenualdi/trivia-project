# Generated by Django 4.0.4 on 2022-04-17 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trivia_app', '0002_remove_achievement_player_id_achievement_player_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='achievement',
            name='player_id',
            field=models.ManyToManyField(related_name='achievements', to='trivia_app.profile'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.CharField(default='https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w', max_length=300),
        ),
    ]