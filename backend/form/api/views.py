from django.contrib.auth import authenticate, get_user_model
from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from .permissions import AnonPermissionOnly

from Scoring import calcScore

class FormAPIView(APIView):
    #authentication_classes      = []
    permission_classes          = []
   
    def post(self, request, *args, **kwargs):
        data = request.data
        age = data.get("age")
        gender = data.get("gender")
        height = int(data.get("height"))*0.01
        weight = int(data.get("weight"))
        muscle_mass = int(data.get("muscle_mass"))
        body_fat = int(data.get("body_fat"))
        smoking = data.get("smoking")
        file_1 = data.get("file")

        BMI = round(weight / (height*height),2)
        Score = calcScore.Scoring([gender,height*100,weight,body_fat,muscle_mass])
        print(Score)
        return Response({"percentage" : BMI, "score" : Score}, status=200)

    
        
        
