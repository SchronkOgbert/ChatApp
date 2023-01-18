import binascii
import os

from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from chat.models import *


def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})


@require_http_methods(['GET'])
def get_room_code(request):
    code = binascii.hexlify(os.urandom(4)).decode()
    new_chat = Chat(code=code)
    new_chat.save()
    return HttpResponse(json.dumps({'code': new_chat.code, 'id': new_chat.id}))


@require_http_methods(['GET'])
def does_room_exist(request):
    code = request.GET['room']
    if not Chat.objects.filter(code=code).exists():
        return HttpResponseNotFound()
    return HttpResponse(json.dumps({'number': Chat.objects.get(code=code).id}))
