from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, status
from .serializers import *
from .models import Chapter, Lesson, Lesson, Student
from rest_framework.decorators import action
from rest_framework.response import Response

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
    
    @action(detail=False, methods=['get'])
    def get_lesson_by_chapter(self, request):
        get_lesson = request.query_params.get('get_lesson')
        get_chapter = request.query_params.get('get_chapter')

        queryset = self.get_queryset().filter(number=get_lesson, chapter__number=get_chapter).first()

        serializer = self.get_serializer(queryset)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = LessonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({"error": "Couldn't create the new lesson"}, status=422)
    

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
