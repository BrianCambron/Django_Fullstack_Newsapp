from django.urls import path


from .views import BlogListCreateView, BlogRetrieveUpdateDestroyView



urlpatterns = [
    path('<int:pk>/', BlogRetrieveUpdateDestroyView.as_view()),
    path('', BlogListCreateView.as_view()),
]
