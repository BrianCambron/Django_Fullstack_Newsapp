from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length = 255)
    body = models.TextField()
    author = models.CharField(max_length = 255)
    isTopStory = models.BooleanField(default = False)
    created_at = models.DateTimeField(auto_now_add = False)
    category = models.CharField(max_length = 255)
    status = models.CharField(max_length = 255)

    def __str__(self):
        return self.title
