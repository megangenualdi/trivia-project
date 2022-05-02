import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
import requests
import os
from dotenv import load_dotenv

def error_on_request(error_msg):
    return JsonResponse({"error": error_msg}, status=400)

def bad_request():
    return error_on_request("bad request")

@csrf_exempt
def handle_login(request):
    try:
        if request.method == "POST":
            data = json.loads(request.body)

            username = data.get("username")
            password = data.get("password")

            user = authenticate(username=username, password=password)
            if user: 
                login(request, user)
                return JsonResponse({"username": user.username, "id": user.id}, status=200)
    except Exception as e:
        return error_on_request(str(e))

    return bad_request


@csrf_exempt
def handle_logout(request):
    try:
        if request.method == "POST":
            logout(request)
            return JsonResponse({"status": "logged out successfully"}, status=200)
    except Exception as e:
        return error_on_request(str(e))

    return bad_request

@csrf_exempt
def get_fact(request):
    limit = 1
    api_url = "https://api.api-ninjas.com/v1/facts?limit={}".format(limit)
    response = requests.get(api_url, headers={'X-Api-Key': os.getenv('API_NINJA_KEY')})
    response_dict = json.loads(response.text)
    print(response_dict)
    return JsonResponse({"data": response.text})
   
