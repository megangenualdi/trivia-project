# Generated by Django 4.0.4 on 2022-04-17 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trivia_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='achievement',
            name='player_id',
        ),
        migrations.AddField(
            model_name='achievement',
            name='player_id',
            field=models.ManyToManyField(to='trivia_app.profile'),
        ),
    ]