import datetime
import json

from channels.generic.websocket import AsyncJsonWebsocketConsumer, WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import *


class ChatRoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        code = self.scope["url_route"]["kwargs"]["code"]
        user = self.scope["url_route"]["kwargs"]["user"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()
        self.send(text_data=json.dumps({'message': {'success': True}}))
        self.send(text_data=json.dumps({'message': f'{user} connected', 'user': 'System'}))

    # Receive message from WebSocket
    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        user = text_data_json["user"]

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {'type': 'forward_group_message',
                                   'data': json.dumps({'user': user, "message": message})}
        )

    def forward_group_message(self, event):
        self.send(text_data=event['data'])
