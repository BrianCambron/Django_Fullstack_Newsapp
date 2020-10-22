from rest_framework import generics
from rest_framework import permissions

from .models import Blog
from .serializers import BlogSerializer




class BlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.filter(status='PBSHD')
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)


class BlogRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    # def perform_create(self, serializer):
    #     serializer.save(user = self.request.user)

class UserBlogListCreateView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAdminUser,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class UserBlogList(generics.ListAPIView):
     serializer_class = BlogSerializer

     def get_queryset(self):
         user = self.request.user
         return Blog.objects.filter(user=user)
