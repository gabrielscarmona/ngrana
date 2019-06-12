import logging

from django.shortcuts import render, redirect
from django.urls import reverse
from django.conf import settings
from django.http import HttpResponseServerError, HttpResponseForbidden

from .libs.mercadolibre.meli import Meli


def login(request):
    """
    It creates a new authentication session if it does not exist.

    :param request:
    :return:
    """

    if not request.session.get('is_authenticated', False):

        try:
            meli = Meli(client_id=settings.ML_APP_ID, client_secret=settings.ML_SECRET_KEY)
            token = meli.authorize(code=request.GET['code'], redirect_URI=request.build_absolute_uri(reverse('login')))

            request.session['token'] = token
            request.session['is_authenticated'] = True
            request.session.set_expiry(meli.expires_in)
        except Exception:
            logging.exception('Error trying to get ML token.')
            return HttpResponseServerError('Error logging user.')

    return redirect(reverse('home'))


def logout(request):
    """
    It closes the authentication session.

    :param request:
    :return:
    """

    request.session.flush()
    return redirect(reverse('home'))


def profile(request):
    """
    View to list user profile info.

    :param request:
    :return:
    """

    if not request.session.get('is_authenticated', False):
        return HttpResponseForbidden()

    try:
        meli = Meli(client_id=settings.ML_APP_ID, client_secret=settings.ML_SECRET_KEY)
        response = meli.get(path="/users/me", params={'access_token': request.session['token']})
        return render(request, 'profile.html', context={'profile': response.json()})
    except Exception:
        logging.exception('Error trying to get user info from ML.')
        return HttpResponseServerError('Error getting user info.')