FROM python:3.12-slim

WORKDIR /app

ENV     PYTHONDONTWRITEBYTECODE 1
ENV     PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

COPY ./Pipfile ./Pipfile.lock /app/

RUN pip install pipenv && pipenv install --system --deploy

COPY . .
