import asyncio
import unittest
import websockets


def async_test(f):
    def wrapper(*args, **kwargs):
        coro = asyncio.coroutine(f)
        future = coro(*args, **kwargs)
        loop = asyncio.get_event_loop()
        loop.run_until_complete(future)
    return wrapper


class MyTestCase(unittest.TestCase):
    @async_test
    async def test_something(self):
        res = websockets.connect('127.0.0.1:8000/ws/chat/100001')
        self.assertEqual(res, 'fbsdifs')


if __name__ == '__main__':
    unittest.main()
