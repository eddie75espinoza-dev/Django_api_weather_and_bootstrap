from ast import Try
from distutils.log import error
from msilib.schema import Error
from warnings import catch_warnings
from django.shortcuts import render
from django.http import HttpResponseNotFound

# Create your views here.
from .apikey import API_KEY
import urllib.request
import json

api_key = API_KEY

def index(request):
    try:
        if request.method == 'POST':
            city_form = request.POST['city']
            city = city_form.replace(" ", "%20")
            source = urllib.request.urlopen(f'https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={api_key}').read()
            list_of_data = json.loads(source)
            data = {
                "name" : str(list_of_data['name']),
                "country_code" : str(list_of_data['sys']['country']),
                "coordinate" : str(list_of_data['coord']['lon']) + ', '+ str(list_of_data['coord']['lat']),
                "temp" : str(list_of_data['main']['temp']) + ' °C',
                "pressure" : str(list_of_data['main']['pressure']),
                "humidity" : str(list_of_data['main']['humidity']),
                "main" : str(list_of_data['weather'][0]['main']),
                "description" : str(list_of_data['weather'][0]['description']),
                "icon" : list_of_data['weather'][0]['icon']
            }
        else:
            data = {}
        return render(request, "main/index.html", data)
    except BaseException as err:
        print(f"Unexpected {err=}, {type(err)=}")
        if HttpResponseNotFound:
            return render(request,"main/notfound.html")

  