"""
URL configuration for gccbackend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from gccbackend.server import views


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'chapter', views.ChapterView)
router.register(r'lesson', views.LessonView)
router.register(r'student', views.StudentView, 'student')
router.register(r'position', views.GetStudentPosition, 'position')
router.register(r'submission', views.SubmissionView, 'submission')
router.register(r'submission/(?P<student>\d+)/(?P<lesson_id>\d+)', views.SubmissionView, 'unique_submission')
router.register(r'test2', views.TestViewClass, 'test2')
# router.register(r'custom', views.view_custom, 'custom')


urlpatterns = [
    path('', include(router.urls)),
    path('custom/', views.view_custom),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('test/', views.TestView),
    path('test/<int:pk>/', views.TestView)
]
