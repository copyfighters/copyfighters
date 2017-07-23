from campaign import models
from django.forms import ModelForm


class ActivistForm(ModelForm):
    class Meta:
        model = models.Activist
        fields = ['phone']


class ActivistEmailForm(ModelForm):
    class Meta:
        model = models.Activist
        fields = ['first_name', 'country', 'email']
