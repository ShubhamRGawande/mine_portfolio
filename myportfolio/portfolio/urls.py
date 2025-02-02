from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Home page
    path('contact/submit/', views.contact_submit, name='contact_submit'),  # Contact form submission
]