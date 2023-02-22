from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntrySerializer
from .models import Entry
from django.shortcuts import get_object_or_404
# Create your views here.

class Entry(APIView):
    def get(self, request):
        #Index Res
        print(request)
        entry = Entry.objects.all()
        data = EntrySerializer(entry, many=True).data
        return Response(data)
    
    def post(self, request):
        print(request.data)
        journal = EntrySerializer(data=request.data)
        if journal.is_valid():
            journal.save()
            return Response(journal.data, status=status.HTTP_201_CREATED)
        else:
            return Response(journal.errors, status=status.HTTP_400_BAD_REQUEST)



class EntryDetails(APIView):
    def get(self, request):
        print(request)
        entry = get_object_or_404(Entry, pk=pk)
        data = EntrySerializer(entry).data
        return Response(data)

    def put(self, request):
        print(request)

    def delete(self, request):
        print(request)