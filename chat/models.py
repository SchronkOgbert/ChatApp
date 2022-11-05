from django.contrib.auth.models import User
from django.db import models


class Chat(models.Model):
    pfp_link = models.CharField(max_length=2048)
    name = models.CharField(max_length=256)


class Group(models.Model):
    pfp_link = models.CharField(max_length=2048)
    name = models.CharField(max_length=256)


class Chat2Users(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)


class Message(models.Model):
    text = models.TextField()
    post_datetime = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    channel = models.ForeignKey(Chat, on_delete=models.CASCADE)
