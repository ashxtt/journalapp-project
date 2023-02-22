from django.db import models

# Create your models here.
class Entry(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=900)

    def __str__(self):
        return self.name