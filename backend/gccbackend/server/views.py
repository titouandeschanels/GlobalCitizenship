from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
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

    def perform_create(self, serializer):
        serializer.save()

class SubmissionView(viewsets.ModelViewSet):
    serializer_class = SubmissionSerializer
    queryset = Submission.objects.all()

    def get_queryset(self):
        student = self.kwargs.get('student', -1)
        lesson_id = self.kwargs.get('lesson_id', -1)
        if (student != -1 and lesson_id != -1):
            return Submission.objects.all().filter(student = student, lesson = lesson_id)
        return Submission.objects.all()

    def get_serializer_class(self):
        student = self.kwargs.get('student', -1)
        lesson_id = self.kwargs.get('lesson_id', -1)
        if (student != -1 and lesson_id != -1):
            return GetSubmissionSerializer
        return SubmissionSerializer
