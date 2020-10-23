from django.db import models
from django.contrib.auth.models import User


class Blog(models.Model):
    DRAFT = 'DFT'
    SUBMITTED = 'SMTD'
    PUBLISHED = 'PBSHD'
    APPROVED = 'APV'
    REJECTED = 'RJCT'

    ENTERTAINMENT = 'ENT'
    SPORTS = 'SPRT'
    TRAVEL = 'TVL'
    FOOD = 'FD'

    STATUS_CHOICES = {
        (DRAFT, 'Draft'),
        (SUBMITTED, 'Submitted'),
        (PUBLISHED, 'Published'),
        (APPROVED, 'Approved'),
        (REJECTED, 'Rejected')
    }

    CATEGORY_CHOICES = {
        (ENTERTAINMENT, 'Entertainment'),
        (SPORTS, 'Sports'),
        (TRAVEL, 'Travel'),
        (FOOD, 'Food'),
    }


    title = models.CharField(max_length = 255)
    body = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    isTopStory = models.BooleanField(default = False)
    created_at = models.DateTimeField(auto_now_add = False)
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES, default=TRAVEL,)
    status = models.CharField(max_length=255, choices=STATUS_CHOICES, default=DRAFT,)


    def __str__(self):
        return self.title
