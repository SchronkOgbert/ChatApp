import json
import unittest
import urllib3

http = urllib3.PoolManager()


class UserTests(unittest.TestCase):
    def test_token(self):
        response = http.request('GET', '127.0.0.1:8000/gettoken/')
        self.assertNotEqual(json.loads(response.data.decode())['token'], '')


if __name__ == '__main__':
    unittest.main()
