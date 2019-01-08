from django.contrib import admin

# from .forms import StatusForm
from .models import Health


class HealthAdmin(admin.ModelAdmin):
    list_display = ['username','__str__']
    # form = StatusForm
    # class Meta:
    #     model = Status
        
        
admin.site.register(Health, HealthAdmin)