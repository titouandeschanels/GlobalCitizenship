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
        fields = ['number', 'title', 'content', 'in_chapter', 'get_chapter', 'get_lesson']

    def get(self, validated_data):
        print('IN GET')
        return Lesson.objects.filter(number=validated_data.pop('get_lesson'), chapter__number=validated_data.pop('get_chapter')).first()
        lesson = Lesson.objects.filter(number=validated_data.pop('set_lesson'), chapter__number=validated_data.pop('set_chapter')).first()
        
        if lesson:
            instance.current_lesson = lesson
            instance.save()
            return instance
        else:
            raise serializers.ValidationError("Lesson not found")

    def get_in_chapter(self, lesson):
        return lesson.in_chapter.number
    
    # def set_in_chapter(self, lesson):
    #     print('SET_CHAPTER')
    #     return Chapter.objects.filter(number=self.in_chapter)

    def create(self, validated_data):
        print("CREATE LESSON")
        try:
            print(f'try')
            c = Chapter.objects.get(number=validated_data.get('set_chapter'))
            
            print(f'try: {c}')
            l = Lesson.objects.filter(in_chapter=c, number=validated_data.get('number')).first()
            
            print(f'try: {c}; {l}')
        except:
            l = None
        if (l == None):
            chapter_number = validated_data.pop('set_chapter')
            
            print(f'except: {chapter_number}; {l}')
            chapter = Chapter.objects.get(number=chapter_number)
            
            validated_data['in_chapter'] = chapter
            
            print(f'except: chapter: {chapter}; validated_data: {validated_data}')
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
        print(f'1 lesson: {lesson}; ln: {lesson_number} {type(lesson_number)}; cn: {chapter_number}')
        if lesson==None:
            print("NONE")
            lesson_number = 1
            chapter_number = 1
            print(f'1.1 lesson: {lesson}; ln: {lesson_number} {type(lesson_number)}; cn: {chapter_number}')
        
            
        lesson_default = Lesson.objects.all().filter(number=lesson_number, in_chapter__number=chapter_number).first()
        print(f'1.2 lesson: {lesson}; lesson_default: {lesson_default}; ln: {lesson_number}; cn: {chapter_number}')
        
        print(f'1.3 lesson: {lesson}; ln: {lesson_number}; cn: {chapter_number}')
        
        # lesson = None
        # lesson_number = 1
        # chapter_number = 1
        # try:
            # lesson_number = validated_data.pop('set_lesson')
            # chapter_number = validated_data.pop('set_chapter')
        # print(f'lesson number: {lesson_number}; chapter: {chapter_number}')
        # test_lesson = Lesson.objects.filter(number=lesson_number)
        # print(f'lesson by number: {test_lesson.first()}')
        # test_chapter = Chapter.objects.get(number=chapter_number)
        # print(f'test_chapter: {test_chapter}')
        # test_lesson2 = Lesson.objects.filter(in_chapter=test_chapter)
        # print(f'lesson2 by number: {test_lesson2}')
        # print(f'lesson2 first by number: {test_lesson2.first()}')
        #     lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
        #     print(f'1 lesson: {lesson}; ln: {lesson_number}; cn: {chapter_number}')
        # except:
        #     lesson_number = 1
        #     chapter_number = 1
        #     lesson = Lesson.objects.filter(number=1, in_chapter__number=1).first()
        #     print(f'1.5 lesson: {lesson}; ln: {lesson_number}; cn: {chapter_number}')
        #     # lesson = Lesson.objects.filter(number=1, in_chapter__number=1).first()
        # lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
        
        print(f'2 lesson: {lesson}')
        user = User.objects.create(username=username)
        if lesson==None:
            print("DEFAULT USER POSITION")
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
    
    # @extend_schema_field(int)
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
        
    # def create(self, instance, validated_data):
    #     lesson = Lesson.objects.filter(number=validated_data.pop('set_lesson'), chapter__number=validated_data.pop('set_chapter')).first()
        
    #     if lesson:
    #         instance.current_lesson = lesson
    #         instance.save()
    #         return instance
    #     else:
    #         raise serializers.ValidationError("Lesson not found")


#TODO create method + serializer fields
class SubmissionSerializer(serializers.HyperlinkedModelSerializer):
    student = serializers.SerializerMethodField(read_only=True)
    lesson = serializers.SerializerMethodField(read_only=True)
    chapter = serializers.SerializerMethodField(read_only=True)
    set_student = serializers.IntegerField(write_only=True, required=False)
    set_lesson = serializers.IntegerField(write_only=True, required=False)
    set_chapter = serializers.IntegerField(write_only=True, required=False)
    # set_submission = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = Submission
        fields = ['id', 'lesson', 'student', 'content', 'set_student', 'chapter', 'set_lesson', 'set_chapter']

    def create(self, validated_data):
        # try:
        #     submission_id = validated_data.pop('set_submission')
            
        #     submission = Submission.objects.get(pk=submission_id)

        #     if submission:
        #         submission.content = validated_data.pop('content')
        #         submission.save()
        #         return submission
        #     raise serializers.ValidationError("submission not found")
        # except:
            
        lesson_number = validated_data.pop('set_lesson')
        student_id = validated_data.pop('set_student')
        chapter_number = validated_data.pop('set_chapter')
        content = validated_data.pop('content')
        print(f'Student {student_id}: {chapter_number}.{lesson_number}: {content}')

        # if Submission.objects.exists(student = )
        try:
            lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
            if lesson==None:
                raise serializers.ValidationError("Lesson not found")
            student = Student.objects.get(id=student_id)
            print(f'Create submission\nlesson: {lesson}\nStudent: {student}\nContent: {content}')
            submission = Submission.objects.filter(lesson=lesson, student=student).first()
            if submission:
                submission.content = content
                submission.save()
                return submission
            return Submission.objects.create(content=content, lesson=lesson, student=student)
        except:
            raise serializers.ValidationError("Could not create the submission")

        # lesson = Lesson.objects.filter(number=lesson_number, in_chapter__number=chapter_number).first()
        # print(f'1 lesson: {lesson}; ln: {lesson_number} {type(lesson_number)}; cn: {chapter_number}')
        # if lesson==None:
        #     print("NONE")
        #     lesson_number = 1
        #     chapter_number = 1
        #     print(f'1.1 lesson: {lesson}; ln: {lesson_number} {type(lesson_number)}; cn: {chapter_number}')
        
            
        # lesson_default = Lesson.objects.all().filter(number=lesson_number, in_chapter__number=chapter_number).first()
        # print(f'1.2 lesson: {lesson}; lesson_default: {lesson_default}; ln: {lesson_number}; cn: {chapter_number}')
        
        # print(f'1.3 lesson: {lesson}; ln: {lesson_number}; cn: {chapter_number}')
        
        # print(f'2 lesson: {lesson}')
        # user = User.objects.create(username=username)
        # if lesson==None:
        #     print("DEFAULT USER POSITION")
        #     return Student.objects.create(user=user, **validated_data)
        # student = Student.objects.create(user=user, current_lesson=lesson , **validated_data)
        # return student

    #doesn't get here...
    def update(self, validated_data):
        submission_id = validated_data.pop('set_submission')
        submission = Submission.objects.get(pk=submission_id)

        if submission:
            submission.content = validated_data.pop('content')
            submission.save()
            return submission
        else:
            raise serializers.ValidationError("submission not found")
#TODO
    # def update(self, instance, validated_data):
    #     lesson = Lesson.objects.filter(number=validated_data.pop('set_lesson'), in_chapter__number=validated_data.pop('set_chapter')).first()
        
    #     if lesson:
    #         instance.current_lesson = lesson
    #         instance.save()
    #         return instance
    #     else:
    #         raise serializers.ValidationError("Lesson not found")
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

    