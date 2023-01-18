from django.urls import path
from . import views

urlpatterns = [
    path('new_code/', views.get_room_code),
    path('find_room/', views.does_room_exist),
    path('<str:room_name>/', views.room, name='room'),  # IMPORTANT: this has to be the last
]
