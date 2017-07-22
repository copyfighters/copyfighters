from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from campaign import forms
from twilio.twiml.voice_response import Dial, Number, VoiceResponse
from twilio.rest import Client
from django.views.decorators.csrf import csrf_exempt


def index(request):
    form = forms.ActivistForm()
    return render(request, 'index.html', {'form': form})


def get_name_email(request):
    if request.method == "POST":
        form = forms.ActivistForm(request.POST)
        if form.is_valid():
            activist = form.save()

            twilio_client = Client(getattr(settings, 'TWILIO_ACCOUNT_SID'),
                                   getattr(settings, 'TWILIO_AUTH_TOKEN'))

            twilio_client.calls.create(from_=getattr(settings, 'TWILIO_CALLER_ID'),
                                       to=getattr(settings, 'TO_BE_CALLED'),
                                       url=request.build_absolute_uri('/outbound/'))

            return HttpResponseRedirect('/')
    return HttpResponseRedirect('/')

@csrf_exempt
def outbound(request):
    if request.method == "POST":
        response = VoiceResponse()
        dial = Dial()
        dial.number(getattr(settings, 'TO_BE_CONNECTED_TO'))
        response.say("This is your new Copyfighters overlords.",
                     voice='alice')
        response.append(dial)
        return HttpResponse(response)
    return HttpResponseRedirect('/')
