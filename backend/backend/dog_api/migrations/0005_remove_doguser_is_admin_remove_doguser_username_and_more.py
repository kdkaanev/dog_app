# Generated by Django 5.1.4 on 2024-12-30 10:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dog_api', '0004_alter_doguser_user_delete_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doguser',
            name='is_admin',
        ),
        migrations.RemoveField(
            model_name='doguser',
            name='username',
        ),
        migrations.AddField(
            model_name='doguser',
            name='first_name',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='doguser',
            name='last_name',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]