# Generated by Django 2.0.2 on 2019-01-04 08:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_auto_20190104_0825'),
    ]

    operations = [
        migrations.AlterField(
            model_name='health',
            name='accident',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='health',
            name='pain',
            field=models.CharField(blank=True, max_length=5, null=True),
        ),
    ]
