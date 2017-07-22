from django.conf.urls import url
from django.contrib import admin
from django.views.generic.base import TemplateView
from campaign import views

urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^$', views.index),
	url(r'^formtest/', views.get_name_email),
	url(r'^imprint/', TemplateView.as_view(template_name = 'imprint.html'), name = 'imprint'),
	url(r'^privacy/', TemplateView.as_view(template_name = 'privacy.html'), name = 'privacy'),
]
