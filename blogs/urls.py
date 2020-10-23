from django.urls import path


from .views import BlogListCreateView, AdminBlogListCreateView, UserBlogList, UserDetailList, AdminListDetailView



urlpatterns = [
    # path('<int:pk>/', BlogRetrieveUpdateDestroyView.as_view()),
    path('', BlogListCreateView.as_view()),
    path('user/', UserBlogList.as_view()),
    path('admin/', AdminBlogListCreateView.as_view()),
    path('user/<int:pk>/', UserDetailList.as_view()),
    path('admin/<int:pk>', AdminListDetailView.as_view()),
]
