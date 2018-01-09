from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from rester.models import User
from rester.serializer import UserSerializer


@api_view(['post'])
def get_users(request):
    params = request.data
    users = None
    if params.get('username') is not None and params.get('username') is not '':
        users = User.objects.filter(username=params['username'])
    else:
        users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response({'data': serializer.data}, status.HTTP_200_OK)
