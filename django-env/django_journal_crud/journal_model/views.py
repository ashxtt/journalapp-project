from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import EntrySerializer
from .models import Entry
from django.shortcuts import get_object_or_404
# Create your views here.

class EntryView(APIView):
    def get(self, request):
        #Index Res
        print(request)
        entry = Entry.objects.all()
        data = EntrySerializer(entry, many=True).data
        return Response(data)
    
class EntryPost(APIView):    
    def post(self, request):
        print(request.data)
        journal = EntrySerializer(data=request.data)
        if journal.is_valid():
            journal.save()
            return Response(journal.data, status=status.HTTP_201_CREATED)
        else:
            return Response(journal.errors, status=status.HTTP_400_BAD_REQUEST)



class EntryDetails(APIView):
    def get(self, request, pk):
        print(request)
        entry = get_object_or_404(Entry, pk=pk)
        data = EntrySerializer(entry).data
        return Response(data)

    def put(self, request, pk):
        print(request)
        entry = get_object_or_404(Entry, pk=pk)
        updated = EntrySerializer(entry, data=request.data, partial=True)
        if updated.is_valid():
            updated.save()
            return Response(updated.data)
        else:
            return Response(updated.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        print(request)
        entry = get_object_or_404(Entry, pk=pk)
        entry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)