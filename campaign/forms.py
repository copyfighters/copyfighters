from campaign import models
from django.forms import ModelForm


class ActivistForm(ModelForm):
    class Meta:
        model = models.Activist
        fields = ['phone']


class ActivistEmailForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super(ActivistEmailForm, self).__init__(*args, **kwargs)
        for field in self.Meta.required_fields:
            self.fields[field].required = True

    class Meta:
        model = models.Activist
        fields = ['first_name', 'country', 'email']
        required_fields = ['first_name', 'country', 'email']
