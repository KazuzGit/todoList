from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=64)
    repository = models.URLField(blank=True)
    users = models.ManyToManyField(User)

    def __str__(self):
        return self.name


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    textTodo = models.TextField(null=True, blank=True)
    createDate = models.DateTimeField(auto_now_add=True)
    updateDate = models.DateTimeField(auto_now=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT)
    active = models.BooleanField(default=True)
