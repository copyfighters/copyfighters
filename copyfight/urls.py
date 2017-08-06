from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from campaign import views

urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^$', views.index),
	url(r'^formtest/', views.get_name_email),
	url(r'^email_form/', views.get_email),
	url(r'^communications-toolkit/', TemplateView.as_view(template_name = 'communications-toolkit.html'), name = 'communications-toolkit'), 
	url(r'^imprint/', TemplateView.as_view(template_name = 'imprint.html'), name = 'imprint'),
	url(r'^privacy/', TemplateView.as_view(template_name = 'privacy.html'), name = 'privacy'),
	url(r'^outbound/', views.outbound, name='outbound'),
	url(r'^resources/', TemplateView.as_view(template_name = 'resources.html'), name = 'resources'),
	url(r'^i18n/setlang/(?P<language>[a-zA-Z\-]+)/', views.switch_language, name = 'switch-language'),
	url(r'^i18n/', include('django.conf.urls.i18n')),

]
