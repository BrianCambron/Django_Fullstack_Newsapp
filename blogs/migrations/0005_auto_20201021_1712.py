# Generated by Django 3.1.2 on 2020-10-21 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0004_remove_blog_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='category',
            field=models.CharField(choices=[('APV', 'Approved'), ('DFT', 'Draft'), ('SMTD', 'Submitted')], default='DFT', max_length=255),
        ),
    ]
