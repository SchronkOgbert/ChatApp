import json



from django.contrib.auth.models import User
from django.contrib import auth, messages
from django.http import HttpResponse
from django.shortcuts import render, redirect
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


@csrf_exempt
def register(request):
    if request.method != 'POST':
        raise PermissionError("Cannot access this endpoint")
    data = json.load(request)
    username = data['username']
    email = data['email']
    password = data['password']
    try:
        User.objects.create_user(username=username, email=email, password=password)
        response = {
            "success": True,
            "message": "Success",
            "token": get_token(request)
        }
    except Exception as e:
        response = {
            "success": False,
            "message": "Success"
                    }
    finally:
        return HttpResponse(json.dumps(response))








