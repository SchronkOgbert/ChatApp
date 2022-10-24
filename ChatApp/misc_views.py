import json

from bottle import unicode
from django.http import JsonResponse, HttpResponse
from django.middleware.csrf import get_token


def get_csrf(request):
    if request.method != 'GET':
        raise PermissionError("Cannot access this route")
    response = {
        "token": get_token(request)
    }
    print(type(json.dumps(response)))
    return HttpResponse(json.dumps(response))
