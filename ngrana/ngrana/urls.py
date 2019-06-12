"""ngrana URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.views.generic.base import TemplateView
from django.conf import settings
from . import views


urlpatterns = [
    url('^$',
        TemplateView.as_view(template_name='base.html'),
        kwargs=dict(ML_APP_ID=settings.ML_APP_ID),
        name='home'
    ),
    url('^login', views.login, name='login'),
    url('^logout', views.logout, name='logout'),
    url('^profile', views.profile, name='profile')
]
