from django.db import models
from django.contrib.auth.models import User

class Test(models.Model):
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)

# class JourneyMap(models.Model):
#     student = models.ForeignKey(User, on_delete=models.CASCADE)
#     current_chapter = models.IntegerField()
#     current_lesson = models.IntegerField()

# class Chapter_Old(models.Model):
#     journey_map = models.ForeignKey(JourneyMap, on_delete=models.CASCADE)
#     number = models.IntegerField()
#     title = models.CharField(max_length=100)

# class Lesson_Old(models.Model):
#     class LessonType(models.TextChoices):
#         USER_SUBMISSION = 'AS', ('User_Submission')
#         EXERCISE = 'EX', ('Exercise')
    
#     chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
#     type = models.CharField(max_length=2, choices=LessonType.choices)
#     content = models.CharField(max_length=5000) # can probably be less big


#NEW IDEA
class Chapter(models.Model):
    number = models.IntegerField()
    title = models.CharField(max_length=200, default='Title')
    content = models.CharField(max_length=5000, default='Lorem ipsum')

class Lesson(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(max_length=200)
    content = models.CharField(max_length=5000)

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    #current_chapter = models.IntegerField()
    #current_chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE) #Without journeymap in it
    # Not needed ^ if the lesson is part of a chapter
    current_lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE) # No type
    # current_chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)

class Submission(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    content = models.CharField(max_length=5000)


