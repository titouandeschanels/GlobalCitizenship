# Generated by Django 5.0.4 on 2024-05-06 15:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0006_student_current_chapter'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='current_chapter',
        ),
    ]
