from django.conf import settings
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from campaign import forms
from twilio.twiml.voice_response import Dial, Number, VoiceResponse
from twilio.rest import Client
from django.views.decorators.csrf import csrf_exempt
from django.utils.translation import LANGUAGE_SESSION_KEY


def index(request):
    form = forms.ActivistForm()
    email_form = forms.ActivistEmailForm()
    return render(request, 'index.html', {'form': form, 'email_form': email_form})


def get_name_email(request):
    if request.method == "POST":
        form = forms.ActivistForm(request.POST)
        if form.is_valid():
            activist = form.save()

            twilio_client = Client(getattr(settings, 'TWILIO_ACCOUNT_SID'),
                                   getattr(settings, 'TWILIO_AUTH_TOKEN'))

            twilio_client.calls.create(from_=getattr(settings, 'TWILIO_CALLER_ID'),
                                       to=activist.phone,
                                       url=request.build_absolute_uri('/outbound/'))

            return HttpResponseRedirect('/')
    return HttpResponseRedirect('/')


def get_email(request):
    if request.method == "POST":
        form = forms.ActivistForm(request.POST)
        if form.is_valid():
            activist = form.save()
            return JsonResponse({'status': 'Thanks for signing up!'}, status=200)
    return JsonResponse({'status': 'Something went wrong, please try again.'}, status=400)


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

def switch_language(request, language):
    response = HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))

    if hasattr(request, 'session'):
        request.session[LANGUAGE_SESSION_KEY] = language
    else:
        response.set_cookie(
            settings.LANGUAGE_COOKIE_NAME, language,
            max_age=settings.LANGUAGE_COOKIE_AGE,
            path=settings.LANGUAGE_COOKIE_PATH,
            domain=settings.LANGUAGE_COOKIE_DOMAIN,
        )

    return response
