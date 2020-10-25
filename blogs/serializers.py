from rest_framework import serializers


from .models import Blog




class BlogSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Blog
        fields = ('id', 'title', 'body', 'user', 'image', 'isTopStory', 'created_at', 'category', 'status',)
