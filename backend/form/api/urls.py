from django.contrib import admin
from django.urls import include, path

from .views import FormAPIView

urlpatterns = [
    path('', FormAPIView.as_view(), name='form')
]
