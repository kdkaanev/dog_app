# Generated by Django 5.1.4 on 2024-12-30 10:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dog_api', '0005_remove_doguser_is_admin_remove_doguser_username_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doguser',
            name='email',
        ),
    ]
