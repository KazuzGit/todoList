from django_filters import rest_framework as filters

from .models import Project, ToDo


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(filters.FilterSet):
    createDate = filters.DateFromToRangeFilter()

    class Meta:
        model = ToDo
        fields = ['project', 'createDate']