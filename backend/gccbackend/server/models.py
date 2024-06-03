from django.db import models
from django.contrib.auth.models import User

class Chapter(models.Model):
    number = models.IntegerField(unique=True)
    title = models.CharField(max_length=200, default='Title')
    content = models.CharField(max_length=5000, default='Lorem ipsum')

    # def __str__(self):
    #     return self.number

class Lesson(models.Model):
    in_chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(max_length=200, default='Lesson title', blank=True)
    content = models.CharField(max_length=5000, default='dolor sit amet', blank=True)
    
    class Meta:
        unique_together = ('in_chapter', 'number')

class Student(models.Model):
    def default_lesson():
        try:
            print("Create student: ")
            # print(f'number 1 lesson: {Lesson.objects.get(number=1)}')
            # return Lesson.objects.get(number=1, in_chapter__number=1)
            chapter = Chapter.objects.filter(number=1).first()
            print(f'CHAPTER: {chapter}')
            lesson = Lesson.objects.get(in_chapter__number=1, number=1)
            # lesson = Lesson.objects.filter(number=1).filter(in_chapter=chapter)
            print(f'STUDENT LESSON DEFAULT: {lesson}')
            return lesson
        except Lesson.DoesNotExist:
            return None

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    current_lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, blank=True, default=default_lesson)

class Submission(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    content = models.CharField(max_length=5000, blank=True)

    class Meta:
        unique_together = ('lesson', 'student')
