from django.db import models
from django.contrib.auth.models import User

class Chapter(models.Model):
    number = models.IntegerField(unique=True)
    title = models.CharField(max_length=200, default='Title')
    content = models.CharField(max_length=5000, default='Lorem ipsum')

class Lesson(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(max_length=200, default='Lesson title')
    content = models.CharField(max_length=5000, default='dolor sit amet')
    
    class Meta:
        unique_together = ('chapter', 'number')

class Student(models.Model):
    def default_lesson():
        try:
            return Lesson.objects.get(number=1, chapter__number=1)
        except Lesson.DoesNotExist:
            return None

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    current_lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, blank=True, default=default_lesson)

    # def save(self, *args, **kwargs):
    #     if not self.pk:  # Check if the object is being created for the first time
    #         if username:
    #             user = User.objects.create_user(username=username, password='password')
    #             self.user = user
    #     super().save(*args, **kwargs)

class Submission(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    content = models.CharField(max_length=5000)

    class Meta:
        unique_together = ('lesson', 'student')

class Test(models.Model):
    int_1 = models.IntegerField(null=True, blank=True) #Null allows null in the database and blank allows the views to have this value blank
    string_1 = models.CharField(max_length=100, blank=True) #Charfield can never be null -> blank => ''
