from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
import json
from .serializers import *
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

class ChapterView(viewsets.ModelViewSet):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class LessonView(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class GetStudentPosition(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = PositionSerializer

class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class SubmissionView(viewsets.ModelViewSet):
    serializer_class = SubmissionSerializer
    queryset = Submission.objects.all()

    def get_queryset(self):
        print(f'REQUEST QUERY: {self.request.__dir__()}')
        student = self.kwargs.get('student', -1)
        lesson_id = self.kwargs.get('lesson_id', -1)
        if (student != -1 and lesson_id != -1):
            print('IN GET SUBMISSIONSERIALIZER 1')
            # self.queryset = Submission.objects.all().filter(student = student, lesson = lesson_id)
            return Submission.objects.all().filter(student = student, lesson = lesson_id)
            # print(f'QUERYSET:\n{self.queryset}')
        return Submission.objects.all()
        # print(f'QUERYSET 2:\n{self.queryset}')

    def get_serializer_class(self):
        print(f'REQUEST: {self.request.__dir__()}')
        # print(f'_REQUEST: {self.request._request.query_params.__dir__()}')
        print(f'_REQUEST: {self.__dir__()}')
        print(f'Object 2:\n{self.kwargs}')
        print(f'Object 2:\n{self.kwargs.get('student', -1)}')
        print(f'Object 2:\n{self.kwargs.get('lesson_id', -1)}')
        # print(f'_REQUEST 2:\n{self.kwargs.__dir__()}')
        # print(f'OBJECT 3:\n{self.lookup_url_kwarg()}')
        # print(f'_REQUEST 3:\n{self.lookup_url_kwargs.__dir__()}')
        student = self.kwargs.get('student', -1)
        lesson_id = self.kwargs.get('lesson_id', -1)
        if (student != -1 and lesson_id != -1):
            print('IN GET SUBMISSIONSERIALIZER 2')
            return GetSubmissionSerializer
        return SubmissionSerializer

    # def __init__(self, sufix):
    #     student = self.request.kwargs.get('student')
    #     lesson_id = self.request.kwargs.get('lesson_id')
    #     if (student != -1 and lesson_id != -1):
    #         print('IN GET SUBMISSIONSERIALIZER')
    #         self.serializer_class = GetSubmissionSerializer
    #         self.queryset = Submission.objects.filter(student = student, lesson = lesson_id)
        # else:
        #     self.serializer_class = SubmissionSerializer
        #     queryset = Submission.objects.all()

    

