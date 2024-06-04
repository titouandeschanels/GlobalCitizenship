from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = ['number', 'title', 'content', 'chapter']

class ChapterSerializer(serializers.HyperlinkedModelSerializer):
    lessons = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name = 'lesson-detail')

    class Meta:
        model = Chapter
        fields = ['number', 'title', 'content', 'lessons']

class StudentSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.SerializerMethodField()
    set_username = serializers.CharField(write_only=True)
    
    class Meta:
        model = Student
        fields = ['id', 'current_lesson', 'username', 'set_username']

    
    def create(self, validated_data):
        username = validated_data.pop('set_username')
        user = User.objects.create(username=username)
        student = Student.objects.create(user=user, **validated_data)
        return student

    def get_username(self, student):
        return student.user.username
    
    
    
class PositionSerializer(serializers.HyperlinkedModelSerializer):
    lesson = serializers.SerializerMethodField()
    chapter = serializers.SerializerMethodField()
    set_lesson = serializers.IntegerField(write_only=True)
    set_chapter = serializers.IntegerField(write_only=True)

    class Meta:
        model = Student
        fields = ['chapter', 'lesson', 'set_lesson', 'set_chapter']

    def get_lesson(self, student):
        return student.current_lesson.number
    
    def get_chapter(self, student):
        return student.current_lesson.chapter.number
    
    def update(self, instance, validated_data):
        lesson = Lesson.objects.filter(number=validated_data.pop('set_lesson'), chapter__number=validated_data.pop('set_chapter')).first()
        
        if lesson:
            instance.current_lesson = lesson
            instance.save()
            return instance
        else:
            raise serializers.ValidationError("Lesson not found")

class SubmissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'

class GetSubmissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Submission
        fields = ['content']

    