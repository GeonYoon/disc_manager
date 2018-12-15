from django.contrib.auth import authenticate, get_user_model
from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings
from .permissions import AnonPermissionOnly

from Scoring import calcScore
from Scoring import exercise

class FormAPIView(APIView):
    #authentication_classes      = []
    permission_classes          = []
   
    def post(self, request, *args, **kwargs):
        data = request.data
        age = data.get("age")
        gender = data.get("gender")
        pain = data.get("pain")
        accident = data.get("accident") 
        height = int(data.get("height"))*0.01
        weight = int(data.get("weight"))
        muscle_mass = int(data.get("muscle_mass"))
        body_fat = int(data.get("body_fat"))
        smoking = data.get("smoking")
        file_1 = data.get("file")   


        BMI = round(weight / (height*height),2)
        Score = round(calcScore.Scoring([gender,height*100,weight,body_fat,muscle_mass]),2)
        advice = exercise.suggest_work_out(pain,accident,age,gender,height,weight,muscle_mass,body_fat,smoking)

        return Response({"percentage" : BMI, "score" : Score, "advice" : advice}, status=200)

    
        
        
