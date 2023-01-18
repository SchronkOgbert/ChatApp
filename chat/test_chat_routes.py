from .test_helpers import *
import json
import unittest
import urllib3

http = urllib3.PoolManager()


class MyTestCase(unittest.TestCase):
    def test_get_room_code(self):
        csrf = get_csrf('test', 'test1234!')
        response = http.request('GET', '127.0.0.1:8000/chat/new_code/',
                                headers={'Content-Type': 'application/json', 'X-CSRFTOKEN': csrf}
                                )
        self.assertNotEqual(json.loads(response.data.decode())['code'], [])


if __name__ == '__main__':
    unittest.main()
