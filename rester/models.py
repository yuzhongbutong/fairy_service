from django.db import models


# Create your models here.
class User(models.Model):
    id = models.AutoField('ID', primary_key=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    mail = models.CharField(max_length=50)
    create_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('create_time',)
        app_label = 'rester'
