from django.db import models
from django.contrib.auth.models import User

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
    current_lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)

class Submission(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    content = models.CharField(max_length=5000)


