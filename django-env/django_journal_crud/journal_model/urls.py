from django.urls import path
from .views import Entry, EntryDetails

urlpatterns = [
    path('', Entry.as_view(), name='journal')
]