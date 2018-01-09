from django.conf.urls import url

from rester import views

urlpatterns = [
    url(r'^users', views.get_users),
]
