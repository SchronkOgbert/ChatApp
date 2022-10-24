import json

from django.contrib import auth
from django.http import HttpResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def login(request):
    if request.method != 'POST':
        raise PermissionError("Cannot access this endpoint")
    data = json.load(request)
    username = data['username']
    password = data['password']
    user = auth.authenticate(username=username, password=password)
    if user is not None:
        auth.login(request, user)
        response = {
            "success": True,
            "message": "Success",
            "token": get_token(request)
        }
    else:
        response = {
            "success": False,
            "message": "Invalid credentials",
            "token": None
        }
    return HttpResponse(json.dumps(response))



