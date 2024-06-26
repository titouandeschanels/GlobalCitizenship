# Generated by Django 5.0.4 on 2024-05-13 09:43

import django.db.models.deletion
import gccbackend.server.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0009_test_alter_chapter_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='current_lesson',
            field=models.ForeignKey(blank=True, default=gccbackend.server.models.Student.default_lesson, on_delete=django.db.models.deletion.CASCADE, to='server.lesson'),
        ),
        migrations.AlterUniqueTogether(
            name='lesson',
            unique_together={('chapter', 'number')},
        ),
        migrations.AlterUniqueTogether(
            name='submission',
            unique_together={('lesson', 'student')},
        ),
    ]
