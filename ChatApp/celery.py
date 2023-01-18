import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ChatApp.settings')

app = Celery("ChatApp")

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()
