from django.db import models
from django_countries.fields import CountryField


class Activist(models.Model):
    first_name = models.CharField(max_length=300, null=True, blank=True)
    last_name = models.CharField(max_length=300, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    email_verified = models.BooleanField(default=False)
    phone = models.CharField(max_length=25, null=True, blank=True)
    #facebook_id?
    #twitter_id?
    country = CountryField(null=True, blank=True, blank_label='(Select your country)')
    #language? for web, emails, sms, etc.
    created_at = models.DateTimeField(auto_now_add=True)
