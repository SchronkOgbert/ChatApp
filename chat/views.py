import json

from django.http import HttpResponse
from django.views.decorators.http import require_http_methods
from django.core import serializers

from chat.models import *


@require_http_methods(['GET'])
def available(request):
    data = json.load(request)
    username = data['username']
    results = Chat.objects.all().filter(id__in=Chat2Users.objects.values('chat_id').
                                        filter(user_id=User.objects.get(username=username).id))
    # print(serializers.serialize('json', list(results)))
    print(list(results))
    return HttpResponse(json.dumps(list(results), cls=JSONEncoder))
