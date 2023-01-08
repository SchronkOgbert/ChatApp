import datetime

from channels.generic.websocket import AsyncJsonWebsocketConsumer, WebsocketConsumer
from asgiref.sync import async_to_sync
from .models import *


class ChatRoomConsumer(WebsocketConsumer):
    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        code = self.scope["url_route"]["kwargs"]["code"]
        user =self.scope["url_route"]["kwargs"]["user"]
        self.room_group_name = "chat_%s" % self.room_name

        # either get the chat or try to create it
        obj, created = Chat.objects.get_or_create(code=code)

        # if a new chat was created, we want to also add some bindings, meaning who has access to the chat

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()
        self.send(text_data=json.dumps({'message': {'success': True}}))
        if not created:
            self.send(text_data=json.dumps({'message': f'{user} connected', 'user': 'System'}))

    def disconnect(self, close_code):
        # Leave room group
        # async_to_sync(self.channel_layer.group_discard)(
        #     self.room_group_name, self.channel_name
        # )
        # TODO: this is likely not needed
        pass

    # Receive message from WebSocket
    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json["message"]
        user = text_data_json["user"]

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name, {'user': user, "message": message}
        )

    # Receive message from room group
    # TODO: check if this is still needed
    # def chat_message(self, event):
    #     message = event["message"]
    #     user = event['user']
    #
    #     # Send message to WebSocket
    #     self.send(text_data=json.dumps({"message": message, 'user': user}))
