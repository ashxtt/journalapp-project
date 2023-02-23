from django.urls import path
from .views import EntryView, EntryDetails, EntryPost


urlpatterns = [
    path('', EntryView.as_view(), name='journal'),
    path('entrys/', EntryPost.as_view(), name='entry_post'),
    path('<int:pk>', EntryDetails.as_view(), name='entry_detail')
]