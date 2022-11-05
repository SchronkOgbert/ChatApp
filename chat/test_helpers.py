import json
import urllib3

http = urllib3.PoolManager()


def get_csrf(username, password):
    params = json.dumps({
        'username': username,
        'password': password
    })
    response = http.request('POST', '127.0.0.1:8000/login/',
                            headers={'Content-Type': 'application/json'},
                            body=params)
    return json.loads(response.data.decode())['token']
