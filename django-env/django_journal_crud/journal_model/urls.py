from django.urls import path
from .views import EntryView, EntryDetails

urlpatterns = [
    path('', EntryView.as_view(), name='journal'),
    path('<int:pk>', EntryDetails.as_view(), name='entry_detail')
]