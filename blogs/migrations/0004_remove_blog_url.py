# Generated by Django 3.1.2 on 2020-10-20 22:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0003_blog_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='url',
        ),
    ]
