from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .serializers import GroupSerializer, UserSerializer, ChapterSerializer, LessonSerializer, PositionSerializer, StudentSerializer
from .models import Chapter, Lesson, Lesson, Student




class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

# class JourneyMapView(viewsets.ModelViewSet):
#     queryset = JourneyMap.objects.all()
#     serializer_class = JourneyMapSerializer

class ChapterView(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class LessonView(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class GetStudentPosition(viewsets.ModelViewSet):
    queryset = Student.objects.all()#values_list('current_lesson', 'current_chapter')
    serializer_class = PositionSerializer

class StudentView(viewsets.ModelViewSet):

    # def __init__(self, serializer_class):
    #     self.serializer_class = serializer_class

    # serializer_classes = {
    #     'position': PositionSerializer,
    # }

    # default_serializer = StudentSerializer

    # def get_serializer_class(self):
    #     return self.serializer_classes.get(self.serializer_class, self.default_serializer)
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
    # serializer_class = StudentSerializer

    # def get_position(self, _):
    #     self.queryset = Student.objects.values_list('current_lesson', 'current_chapter')
    #     # pos = self.serializer_class.get_position(self.serializer_class)
    #     # self.queryset.save()
    #     return HttpResponse(content=self.queryset)

def hello(request):
    return HttpResponse("Hello world!")
