from django.conf import settings 
from django.db import models

class StatusQuerySet(models.QuerySet):
    pass
'''
A Manager's base QuerySet returns all object in the system.
You can override a Manager's base QuerySet by overriding the Manager.get_queryset() method.
get_queryset() should return a QuerySet witht he properties you require. 
https://docs.djangoproject.com/ko/2.1/topics/db/managers/
'''
# class StatusManager(models.Manager):
#     def get_queryset(self):
#         return StatusQuerySet(self.models, using=self.db)


# Create your models here.
class Health(models.Model): #fb status, instagram post, tweet, linkedin post
    user        = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    BMI         = models.IntegerField()
    score       = models.IntegerField()
    height      = models.IntegerField()
    weight      = models.IntegerField()
    muscle_mass = models.IntegerField()
    body_fat    = models.IntegerField()
    smoking     = models.IntegerField()
    updated     = models.DateTimeField(auto_now = True)
    timestamp   = models.DateTimeField(auto_now_add = True)
    
    def __str__(self):
        return str(self.score)
    
    class Meta:
        verbose_name = 'Health post'
        verbose_name_plural = 'Health posts'
    
    # You did obj.owner but you set owner as user in the status model. So you do redirecting here.    
    @property
    def owner(self):
        return self.user