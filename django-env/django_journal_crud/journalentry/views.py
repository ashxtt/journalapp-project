from django.shortcuts import render
from django.http import HttpResponse

def index(resquest):
    return HttpResponse('<h1>Journal App</h1>')