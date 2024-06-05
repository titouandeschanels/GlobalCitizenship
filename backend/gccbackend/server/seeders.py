from django_seeding import seeders
from django_seeding.seeder_registry import SeederRegistry 
from gccbackend.server.models import *


@SeederRegistry.register
class SeederChapter(seeders.ModelSeeder):
    id = 'SeederChapter'
    priority = 1
    model = Chapter
    data = [
        {
            "title": "Introduction",
            "content": "This is the first chapter",
            "number": 1
        },
        {
            "title": "This is me",
            "content": "chapter content",
            "number": 2
        },
        {
            "title": "Me and my circles",
            "content": "chapter content",
            "number": 3
        },
        {
            "title": "The influence of perceptions",
            "content": "chapter content",
            "number": 4
        },
        {
            "title": "Dilemmas",
            "content": "chapter content",
            "number": 5
        },
        {
            "title": "Challenge and goal setting",
            "content": "chapter content",
            "number": 6
        },
        {
            "title": "Valuebased challenge creation",
            "content": "chapter content",
            "number": 7
        },
    ]

@SeederRegistry.register
class SeederLesson(seeders.ModelSeeder):
    id = 'SeederLesson'
    priority = 2
    model = Lesson

    chapters = Chapter.objects.all()

    data = [
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=1).first(),
                "number": 1,
                "title": "Intro"
            },
        ]
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=2).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=3).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=4).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=5).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=6).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    for i in range(5):
        data.append(
            {
                "content": "Lesson content",
                "in_chapter": chapters.filter(number=7).first(),
                "number": i + 1,
                "title": f"Lesson {i + 1} title"
            })
    
@SeederRegistry.register
class SeederUser(seeders.ModelSeeder):
    id = 'SeederUser'
    priority = 3
    model = User
    data = [
            {
                "username": "Adela"
            }
        ]
    
@SeederRegistry.register
class SeederStudent(seeders.ModelSeeder):
    id = 'SeederStudent'
    priority = 4
    model = Student

    user1 = User.objects.first()
    lesson = Lesson.objects.first()

    data = [
            {
                "user": user1,
                "current_lesson": lesson
            }
        ]