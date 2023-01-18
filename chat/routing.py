from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    # re_path(r'ws/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
    re_path(r'ws/socket-test/', consumers.ChatRoomConsumer.as_asgi()),
    re_path(r"chat/ws/chat/(?P<room_name>\w+)/(?P<user>\w+)/(?P<code>\w+)", consumers.ChatRoomConsumer.as_asgi())
]
