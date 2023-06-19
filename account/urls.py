from django.urls import path
from account import views


urlpatterns = [
    path('', views.user_login, name='login'),
]