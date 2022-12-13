import json

from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.core import serializers

from chat.models import *


@require_http_methods(['GET'])
def available(request):
    username = request.GET['username']
    results = Chat.objects.all().filter(id__in=Chat2Users.objects.values('chat_id').
                                        filter(user_id=User.objects.get(username=username).id))
    return HttpResponse(json.dumps(list(results), cls=JSONEncoder))


def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})
