from .test_helpers import *
import json
import unittest
import urllib3

http = urllib3.PoolManager()


class MyTestCase(unittest.TestCase):
    def test_available_correct(self):
        csrf = get_csrf('test', 'test1234!')
        params = json.dumps({
            'username': 'test',
        })
        response = http.request('GET', '127.0.0.1:8000/chat/available/',
                                headers={'Content-Type': 'application/json', 'X-CSRFTOKEN': csrf},
                                body=params)
        self.assertEqual(json.loads(response.data.decode()),
                         ['{"name": test_test5, "pfp_link": ph}', '{"name": test_danie, "pfp_link": ph}'])

    def test_available_incorrect(self):
        csrf = get_csrf('test', 'test1234!')
        params = json.dumps({
            'username': 'test',
        })
        response = http.request('GET', '127.0.0.1:8000/chat/available/',
                                headers={'Content-Type': 'application/json', 'X-CSRFTOKEN': csrf},
                                body=params)
        self.assertNotEqual(json.loads(response.data.decode()),
                         ['{"name": test_test5, "pfp_link": ph}', '{"name": danie_weekendum, "pfp_link": ph}'])

    def test_available_none(self):
        csrf = get_csrf('test02', 'test1234!')
        params = json.dumps({
            'username': 'testtest',
        })
        response = http.request('GET', '127.0.0.1:8000/chat/available/',
                                headers={'Content-Type': 'application/json', 'X-CSRFTOKEN': csrf},
                                body=params)
        self.assertEqual(json.loads(response.data.decode()),
                         [])


if __name__ == '__main__':
    unittest.main()
