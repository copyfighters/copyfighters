from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from campaign import views

urlpatterns = [
	url(r'^$', views.index),
	url(r'^admin/', admin.site.urls),
	url(r'^email_form/', views.get_email),
	url(r'^formtest/', views.get_name_email),
	url(r'^i18n/setlang/(?P<language>[a-zA-Z\-]+)/', views.switch_language, name = 'switch-language'),
	url(r'^i18n/', include('django.conf.urls.i18n')),
	url(r'^imprint/', TemplateView.as_view(template_name = 'imprint.html'), name = 'imprint'),
	url(r'^outbound/', views.outbound, name='outbound'),
	url(r'^privacy/', TemplateView.as_view(template_name = 'privacy.html'), name = 'privacy'),
	url(r'^references/', TemplateView.as_view(template_name = 'references.html'), name = 'references'),
	url(r'^toolkit/', TemplateView.as_view(template_name = 'toolkit.html'), name = 'toolkit'),

]
