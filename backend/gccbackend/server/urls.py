from django.urls import path
from . import views

urlpatterns = [
    #path('student/position', views.StudentView.as_view({'get': 'get_position' }), name='position'),
    path('test/', views.hello, name='hello'),
]
