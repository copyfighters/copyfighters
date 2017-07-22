from django.shortcuts import render
from django.http import HttpResponseRedirect
from campaign import forms


def index(request):
    form = forms.ActivistForm()
    return render(request, 'index.html', {'form': form})


def get_name_email(request):
    if request.method == "POST":
        form = forms.ActivistForm(request.POST)
        if form.is_valid():
            activist = form.save()
            return HttpResponseRedirect('/success/')
    return HttpResponseRedirect('/')
