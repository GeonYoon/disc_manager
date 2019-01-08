from django.contrib import admin
from django.urls import include, path

from .views import PostCreateAPIView

urlpatterns = [
    path('', PostCreateAPIView.as_view(), name='form')
]
