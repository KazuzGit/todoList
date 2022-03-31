from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import PageNumberPagination

from .serializers import ProjectModelSerializer, ToDoModelSerializer, \
    ProjectReadModelSerializer, ToDoReadModelSerializer
from .models import Project, ToDo
from .filters import ProjectFilter, ToDoFilter


class ProjectPagination(PageNumberPagination):
    page_size = 10


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectPagination

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ProjectReadModelSerializer
        return ProjectModelSerializer


class ToDoPagination(PageNumberPagination):
    page_size = 20


class ToDoModelViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    filterset_class = ToDoFilter
    pagination_class = ToDoPagination

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ToDoReadModelSerializer
        return ToDoModelSerializer

    def perform_destroy(self, instance):
        instance.active = False
        instance.save()