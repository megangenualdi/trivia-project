# Generated by Django 4.0.4 on 2022-04-21 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trivia_app', '0007_alter_profile_player'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_text',
            field=models.TextField(blank=True, default='Tell something about yourself here...'),
        ),
    ]