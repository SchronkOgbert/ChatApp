from django.contrib.auth.models import User
from django.db import models
import dataclasses, json


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        return str(o)


class ProfilePic(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pfp_link = models.CharField(max_length=2048)


class Chat(models.Model):
    code = models.CharField(max_length=8)

    def __str__(self):
        return f'{"{"}"name": {self.code}{"}"}'

    def __repr__(self):
        return str(self)


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
