import asyncio
import unittest
import websockets


class MyTestCase(unittest.IsolatedAsyncioTestCase):
    async def test_something(self):
        update = None
        ws = await websockets.connect('ws://127.0.0.1:8000/chat/ws/chat/65843543/')
        # response = await ws.recv()
        self.assertEqual(update, 'fbsdifs')


if __name__ == '__main__':
    unittest.main()
