from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, status
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
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

# class StudentPosition(viewsets.ModelViewSet):
#     serializer_class = StudentSerializer
#     queryset = Student.objects.all()

#     def update(self, request, *args, **kwargs):
#         print(f'STUDENTPOSITION')
#         instance = self.get_object().filter()
        
#         lesson_number = request.data.get('lesson_number')
#         chapter_number = request.data.get('chapter_number')
        
#         # Retrieve the lesson based on the provided number and chapter number
#         lesson = Lesson.objects.filter(number=lesson_number, chapter__number=chapter_number).first()
        
#         if lesson:
#             instance.current_lesson = lesson
#             instance.save()
#             serializer = self.get_serializer(instance)
#             return Response(serializer.data)
#         else:
#             return Response({'error': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
# class StudentPosition(viewsets.ModelViewSet):
#     queryset = Student.objects.all()
#     serializer_class = PositionSerializer

#     def update(self, request, *args, **kwargs):

#         instance = self.get_object()
#         position = request.data.get('position')
#         instance.position = position
#         instance.save()
#         serializer = UpdatePositionSerializer(instance)
#         return Response(serializer.data)
    
    # @action(detail = True, methods = ["POST", "PUT"])
    # def update_position(self, request):
    #     print(f'Start OF VIEW')
    #     student_position = self.get_object()
    #     # serializer = self.get_serializer(data=request.data)
    #     serializer = UpdatePositionSerializer(data=request.data)
    #     if serializer.is_valid():
    #         student_position.set_position(serializer.validated_data['lesson_num', 'chapter_num'])
    #         student_position.save()
    #         return Response({'status', 'Updated position'})
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

    def perform_create(self, serializer):
        print('Perform create\n\n')
        serializer.save()
        # username = self.request.data.get('username')
        # print("Username from request:", username)  # Print to verify the username
        # instance = serializer.save(username=username)  # Pass username to serializer.save()
        # print(f'Instance: {instance}')
        # # Ensure user instance is retrieved after saving Student instance
        # user_instance = instance.user
        # print("User instance:", user_instance)  # Print to verify user instance
        # user_instance.username = username
        # user_instance.save()

    # def perform_create(self, serializer):
    #     username = self.request.data.get('username')
    #     print("Username from request:", username)  # Print to verify the username
    #     instance = serializer.save()
        
    #     # Ensure user instance is retrieved after saving Student instance
    #     user_instance = instance.user
    #     print("User instance:", user_instance)  # Print to verify user instance
    #     user_instance.username = username
    #     user_instance.save()

    # def perform_create(self, serializer):
    #         username = self.request.data.get('username')
    #         print("Username from request:", username)
    #         instance = serializer.save()

    #         user_instance = instance.user
    #         user_instance.username = username
    #         user_instance.save()
            # instance.user.username = username
            # instance.user.save()
    # def create(self, request, *args, **kwargs):
    #     username = request.data.get('username')

    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer, username=username)

    #     return Response(serializer.data, status=201)

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

class TestViewClass(viewsets.ModelViewSet):
    serializer_class = TestSerializer1
    queryset = Test.objects.all()

    # @action(detail=False, methods=['GET'], name='Get all tests')
    # def get_all_tests(self, request):
    #     queryset = Test.objects.all()
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)
    
    # @action(detail=True, methods=['GET'], name='Get specific test')
    # def get_test(self, request, pk):
    #     try:
    #         t = Test.objects.get(pk=pk)
    #     except Test.DoesNotExist:
    #         return Response({'404', 'Test doesn\'t exist'})
        
    #     serializer = TestSerializer1(t)
    #     return Response({200, json.dumps(serializer.data)})


    # TODO DELETE DOESN'T WORK (first calls delete then get and doesn't remove it from the database)
    # @action(detail=True, methods=['DELETE'], name='Delete test')
    # def delete_test(self, request, pk):
    #     try:
    #         t = Test.objects.get(pk=pk)
    #     except Test.DoesNotExist:
    #         return Response({'404', 'Test doesn\'t exist'})
        
    #     t.delete()

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def view_custom(request):
    if(request.method == 'GET'):
        print(request.__dir__())
        print(f'\nDATA\n{request.data}')
    else:
        pass

@csrf_exempt
@api_view(['POST', 'GET'])
def TestView(request, pk=None):
    
    print(f'PK: {pk}\nREQUEST: \n{request}')
    #TODO Fix respons with actual status code (now all 200 (OK))
    try:
        t = Test.objects.get(pk=pk)
    except Test.DoesNotExist:
        if request.method == 'POST':
            serializer = TestSerializer1(data=request.POST)
            if serializer.is_valid():
                serializer.save()
                return Response({201, 'Created new test'})
            return Response({400, serializer.errors})
        return Response({'404', 'Test doesn\'t exist'})
    
    if request.method == 'GET':
        serializer = TestSerializer1(t)
        return Response({200, json.dumps(serializer.data)})