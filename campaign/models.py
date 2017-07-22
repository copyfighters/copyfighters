from django.db import models


class Activist(models.Model):
    first_name = models.CharField(max_length=300, null=True, blank=True)
    last_name = models.CharField(max_length=300, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    email_verified = models.BooleanField(default=False)
    phone = models.CharField(max_length=25, null=True, blank=True)
    #facebook_id?
    #twitter_id?
    country = models.CharField(max_length=300, null=True, blank=True)
    #language? for web, emails, sms, etc.
    created_at = models.DateTimeField(auto_now_add=True)
