from django.contrib import admin

# from .forms import StatusForm
from .models import Health


class StatusAdmin(admin.ModelAdmin):
    list_display = ['user','__str__']
    # form = StatusForm
    # class Meta:
    #     model = Status
        
        
admin.site.register(Health, StatusAdmin)