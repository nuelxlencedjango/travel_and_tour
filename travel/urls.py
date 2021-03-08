from django.urls import path
from .views import *
from . import views


app_name ='destination'


urlpatterns =[
    path('' , DestinationView.as_view() ,name='home'),


]