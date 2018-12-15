from django.contrib.auth import authenticate, get_user_model
from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from .permissions import AnonPermissionOnly


class FormAPIView(APIView):
    #authentication_classes      = []
    permission_classes          = []
   
    def post(self, request, *args, **kwargs):
        data = request.data
        age = data.get("age");
        blood_pressure = data.get("blood_pressure");

        returnval = int(age) + int(blood_pressure)
        
        return Response({"percentage" : returnval}, status=200)

    
        
        
