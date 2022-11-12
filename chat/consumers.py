from channels.generic.websocket import AsyncWebsocketConsumer
import json


class ChatRoomConsumer(AsyncWebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'response': 'success'
        }))
