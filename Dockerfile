FROM python

ENV PYTHONUNBUFFERED 1

ENV REDIS_URL=redis://redis:6379/0

RUN mkdir "/server"

ADD requirements.txt /server

WORKDIR /server

RUN pip install -r requirements.txt

EXPOSE 8000