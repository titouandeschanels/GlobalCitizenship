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
    in_chapter = serializers.IntegerField(write_only=True)
    get_chapter = serializers.IntegerField(read_only=True)
    get_lesson = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Lesson
        fields = ['id', 'number', 'title', 'content', 'in_chapter', 'get_chapter', 'get_lesson']

    def get_in_chapter(self, lesson):
        return lesson.in_chapter.number
    
    def create(self, validated_data):
        try:
            c = Chapter.objects.get(number=validated_data.get('set_chapter'))
            
            l = Lesson.objects.filter(in_chapter=c, number=validated_data.get('number')).first()
            
        except:
            l = None
        if (l == None):
            chapter_number = validated_data.pop('set_chapter')
            chapter = Chapter.objects.get(number=chapter_number)
            
            validated_data['in_chapter'] = chapter
            return Lesson.objects.create(**validated_data)
        else:
            l.content = validated_data.get('content', l.content)
            l.title = validated_data.get('title', l.title)
            l.save()
            return l
        

    

class ChapterSerializer(serializers.HyperlinkedModelSerializer):
    lessons = serializers.HyperlinkedRelatedField(many = True, read_only = True, view_name = 'lesson-detail')

    class Meta:
        model = Chapter
        fields = ['number', 'title', 'content', 'lessons']


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)
    set_username = serializers.CharField(write_only=True)
    set_lesson = serializers.IntegerField(write_only=True, required=False)
    set_chapter = serializers.IntegerField(write_only=True, required=False)
    current_lesson = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Student
        fields = ['id', 'current_lesson', 'username', 'set_username', "set_chapter", 'set_lesson']

    
    def create(self, validated_data):
        username = validated_data.pop('set_username')
        lesson_number = validated_data.pop('set_lesson')
        chapter_number = validated_data.pop('set_chapter')


        lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
        if lesson==None:
            lesson_number = 1
            chapter_number = 1

        user = User.objects.create(username=username)
        if lesson==None:
            return Student.objects.create(user=user, **validated_data)
        student = Student.objects.create(user=user, current_lesson=lesson , **validated_data)
        return student

    def get_username(self, student):
        return student.user.username
    
    def get_current_lesson(self, student):
        return (student.current_lesson.in_chapter.number, student.current_lesson.number)
    
    
    
class PositionSerializer(serializers.HyperlinkedModelSerializer):
    lesson = serializers.SerializerMethodField(read_only=True)
    chapter = serializers.SerializerMethodField(read_only=True)
    set_lesson = serializers.IntegerField(write_only=True)
    set_chapter = serializers.IntegerField(write_only=True)

    class Meta:
        model = Student
        fields = ['chapter', 'lesson', 'set_lesson', 'set_chapter']

    def get_lesson(self, student):
        return student.current_lesson.number
    
    def get_chapter(self, student):
        return student.current_lesson.in_chapter.number
    
    def update(self, instance, validated_data):
        lesson = Lesson.objects.filter(number=validated_data.pop('set_lesson'), in_chapter__number=validated_data.pop('set_chapter')).first()
        
        if lesson:
            instance.current_lesson = lesson
            instance.save()
            return instance
        else:
            raise serializers.ValidationError("Lesson not found")
        
class SubmissionSerializer(serializers.HyperlinkedModelSerializer):
    student = serializers.SerializerMethodField(read_only=True)
    lesson = serializers.SerializerMethodField(read_only=True)
    chapter = serializers.SerializerMethodField(read_only=True)
    set_student = serializers.IntegerField(write_only=True, required=False)
    set_lesson = serializers.IntegerField(write_only=True, required=False)
    set_chapter = serializers.IntegerField(write_only=True, required=False)
   
    class Meta:
        model = Submission
        fields = ['id', 'lesson', 'student', 'content', 'set_student', 'chapter', 'set_lesson', 'set_chapter']

    def create(self, validated_data):    
        lesson_number = validated_data.pop('set_lesson')
        student_id = validated_data.pop('set_student')
        chapter_number = validated_data.pop('set_chapter')
        content = validated_data.pop('content')
        
        try:
            lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
            if lesson==None:
                raise serializers.ValidationError("Lesson not found")
            student = Student.objects.get(id=student_id)
            submission = Submission.objects.filter(lesson=lesson, student=student).first()
            if submission:
                submission.content = content
                submission.save()
                return submission
            return Submission.objects.create(content=content, lesson=lesson, student=student)
        except:
            raise serializers.ValidationError("Could not create the submission")
    
    def get_chapter(self, submission):
        return submission.lesson.in_chapter.number
    
    def get_lesson(self, submission):
        return submission.lesson.number
    
    def get_student(self, submission):
        return submission.student.id

class GetSubmissionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Submission
        fields = ['content']

    