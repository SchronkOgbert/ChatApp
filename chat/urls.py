from django.urls import path
from . import views

urlpatterns = [
    path('available/', views.available)
]