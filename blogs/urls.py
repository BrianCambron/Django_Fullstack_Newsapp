from django.urls import path


from .views import BlogListCreateView, BlogRetrieveUpdateDestroyView, UserBlogListCreateView, UserBlogList



urlpatterns = [
    path('<int:pk>/', BlogRetrieveUpdateDestroyView.as_view()),
    path('', BlogListCreateView.as_view()),
    path('user/', UserBlogList.as_view()),
    path('admin/', UserBlogListCreateView.as_view())
]
