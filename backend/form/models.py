from django.conf import settings 
from django.db import models
from django.contrib.auth.models import User


class HealthQuerySet(models.QuerySet):
    pass
'''
A Manager's base QuerySet returns all object in the system.
You can override a Manager's base QuerySet by overriding the Manager.get_queryset() method.
get_queryset() should return a QuerySet witht he properties you require. 
https://docs.djangoproject.com/ko/2.1/topics/db/managers/
'''
class HealthManager(models.Manager):
    def get_queryset(self):
        return HealthQuerySet(self.models, using=self.db)

class Health(models.Model): 
    username    = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,blank=True, null=True)
    # username = models.ForeignKey(
    #     User,
    #     on_delete=models.CASCADE,
    #     related_name='form',
    #     null=True
    # )
    BMI         = models.IntegerField(blank=True, null=True)
    age         = models.IntegerField(blank=True, null=True)
    pain        = models.CharField(max_length=5,blank=True, null=True)
    gender      = models.CharField(max_length=5,blank=True, null=True)
    accident    = models.CharField(max_length=5,blank=True, null=True)
    score       = models.IntegerField(blank=True, null=True)
    height      = models.IntegerField(blank=True, null=True)
    weight      = models.IntegerField(blank=True, null=True)
    muscle_mass = models.IntegerField(blank=True, null=True)
    body_fat    = models.IntegerField(blank=True, null=True)
    smoking     = models.CharField(max_length=5, blank=True, null=True)
    suggested_exercise = models.CharField(max_length=500, blank=True, null=True)
    reason      = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    
    def __str__(self):
        return str(self.score)
    
    class Meta:
        verbose_name = 'Health post'
        verbose_name_plural = 'Health posts'
    
    # You did obj.owner but you set owner as user in the status model. So you do redirecting here.    
    @property
    def owner(self):
        return self.user