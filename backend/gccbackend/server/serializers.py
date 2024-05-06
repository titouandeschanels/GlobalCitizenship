from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import Chapter, Lesson, Student


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

# class JourneyMapSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = JourneyMap
#         fields = ['student', 'current_chapter', 'current_lesson']

class ChapterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chapter
        fields = '__all__'

class LessonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    
    
    class Meta:
        model = Student
        fields = '__all__'

    def get_position(self):
        # return f'lesson: {self.get_lesson_num}, chapter: {self.get_chapter_num}'  
        pass  
    
    
    # def get_chapter_num(self, student):
    #     return student.current_lesson.chapter.number

class PositionSerializer(serializers.HyperlinkedModelSerializer):
    #student = serializers.StringRelatedField()
    lesson_num = serializers.SerializerMethodField()
    chapter_num = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = ['lesson_num', 'chapter_num']

    def get_lesson_num(self, student):
        return student.current_lesson.number
    
    def get_chapter_num(self, student):
        return student.current_lesson.chapter.number