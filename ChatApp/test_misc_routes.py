import json
import unittest
import urllib3

http = urllib3.PoolManager()


class UserTests(unittest.TestCase):
    def test_login_does_exist(self):
        params = json.dumps({
            'username': 'test',
            'password': 'test1234!'
        })
        response = http.request('POST', '127.0.0.1:8000/login/',
                                headers={'Content-Type': 'application/json'},
                                body=params)
        self.assertEqual(json.loads(response.data.decode())['success'], True)

    def test_login_does_not_exist(self):
        params = json.dumps({
            'username': 'test356874',
            'password': 'test1234!'
        })
        response = http.request('POST', '127.0.0.1:8000/login/',
                                headers={'Content-Type': 'application/json'},
                                body=params)
        self.assertEqual(json.loads(response.data.decode())['success'], False)

    def test_login_wrong_password(self):
        params = json.dumps({
            'username': 'test',
            'password': 'test123gfiysdju4!'
        })
        response = http.request('POST', '127.0.0.1:8000/login/',
                                headers={'Content-Type': 'application/json'},
                                body=params)
        self.assertEqual(json.loads(response.data.decode())['success'], False)

    def test_inactive_user(self):
        params = json.dumps({
            'username': 'test54763254732',
            'password': 'test1234!'
        })
        response = http.request('POST', '127.0.0.1:8000/login/',
                                headers={'Content-Type': 'application/json'},
                                body=params)
        self.assertEqual(json.loads(response.data.decode())['success'], False)


if __name__ == '__main__':
    unittest.main()
