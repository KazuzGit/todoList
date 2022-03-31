from rest_framework.serializers import ModelSerializer
from .models import Project, ToDo
from users.serializers import UserSerializer


class ProjectModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ProjectReadModelSerializer(ModelSerializer):

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'


class ToDoReadModelSerializer(ModelSerializer):
    project = ProjectModelSerializer()
    creator = UserSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'