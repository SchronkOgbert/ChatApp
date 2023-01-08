import hashlib
import random
import time

from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from chat.models import *


@require_http_methods(['GET'])
def available(request):
    username = request.GET['username']
    results = Chat.objects.all().filter(id__in=Chat2Users.objects.values('chat_id').
                                        filter(user_id=User.objects.get(username=username).id))
    return HttpResponse(json.dumps(list(results), cls=JSONEncoder))


def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})


@require_http_methods(['GET'])
def get_room_code(request):
    hashlib.sha1().update(str(random.randint(1, 100000) + time.time()).encode('utf-8'))
    code = hashlib.sha1().hexdigest()[:8]
    return HttpResponse(json.dumps({'code': code}))


@require_http_methods(['GET'])
def does_room_exist(request):
    code = request.GET['room']
    if not Chat.objects.filter(code=code).exists():
        return HttpResponseNotFound
    return HttpResponse(json.dumps({'number': Chat.objects.get(code=code).id}))
