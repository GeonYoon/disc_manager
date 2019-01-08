# from django.contrib.auth import authenticate, get_user_model
# from django.db.models import Q
# from rest_framework import generics, permissions
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework_jwt.settings import api_settings
from Scoring import calcScore
from Scoring import exercise

from form.models import Health
from rest_framework import generics, views
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)
from .permissions import IsOwnerOrReadOnly
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.response import Response

from .serializers import (
    FormCreateSerializer,
    # FormDetailSerializer,
    # FormUpdateSerializer,
)

class PostCreateAPIView(generics.CreateAPIView):
    queryset            = Health.objects.all()
    serializer_class    = FormCreateSerializer
    permission_classes  = []

     # This is way to pass request data into the serializer
    def get_serializer_context(self, *args, **kwargs):
        return {"request" : self.request}

# class PostDetailAPIView(generics.RetrieveAPIView):
#     queryset = Health.objects.all()
#     serializer_class = PostDetailSerializer
#     permission_classes = [AllowAny]

# class PostUpdateAPIView(generics.UpdateAPIView):
#     queryset = Health.objects.all()
#     serializer_class = PostUpdateSerializer
#     permission_classes = [IsOwnerOrAdminOrReadOnly]

# class FormAPIView(APIView):
   
#     def post(self, request, *args, **kwargs):
#         data = request.data
#         print(data)
#         age = int(data.get("age"))
#         gender = data.get("gender")
#         pain = data.get("pain")
#         accident = data.get("accident") 
#         height = int(data.get("height"))*0.01
#         weight = int(data.get("weight"))
#         muscle_mass = int(data.get("muscle_mass"))
#         body_fat = int(data.get("body_fat"))
#         smoking = data.get("smoking")

#         # try:
#         #     obj = Person.objects.get(first_name='John', last_name='Lennon')
#         # except Person.DoesNotExist:
#         #     obj = Person(first_name='John', last_name='Lennon', birthday=date(1940, 10, 9))
#         #     obj.save()


#         BMI = round(weight / (height*height),2)
#         Score = round(calcScore.Scoring([gender,height*100,weight,body_fat,muscle_mass]),2)
#         advice = exercise.suggest_work_out(pain,accident,age,height,weight,muscle_mass,body_fat,smoking)

#         return Response({"percentage" : BMI, "score" : Score, "advice" : advice}, status=200)

    
        
        
