import pyotp
from flask import *
from flask_cors import CORS, cross_origin
import json
from recognise_face import run_setup

file = open("./data.json")
data = json.load(file)

app = Flask(__name__)
CORS(app)


@app.route("/api/login", methods=["POST"])
def login():
    json_req = request.get_json()
    response = {
        "authenticated": False,
        "message": ""
    }
    for user in data:
        if user["ID"] == json_req["id"]:

            if user["DOB"] == json_req["dob"]:
                response["authenticated"] = True
                response["message"] = "Authentication Successful!"
                response["name"] = user["Name"]
            else:
                response["message"] = "Invalid DOB! Try Again"
    if response["message"] == "":
        response["message"] = "Invalid User! Try Again"

    return jsonify(response), 201


@app.route("/api/recognise_face", methods=["POST"])
def recognise():
    json_req = request.get_json()
    name = run_setup()
    response = {
        "authenticated": False,
        "message": ""
    }
    if json_req["name"] == name:
        response["authenticated"] = True
        response["message"] = "Authentication Successful!"
    else:
        response["message"] = "Invalid User! Try Again"
    return jsonify(response), 201


@app.route("/api/get-secret", methods=["GET"])
def login_2fa():
    secret = pyotp.random_base32()
    return jsonify(secret), 201


@app.route("/api/verify-token", methods=["POST"])
def login_2fa_form():
    json_req = request.get_json()
    response = {
        "authenticated": False,
        "message": ""
    }
    print(json_req)
    otp = int(json_req["otp"])
    secret = json_req["secret"]
    if pyotp.TOTP(secret).verify(otp):
        response["message"] = "The TOTP 2FA token is valid"
        response["authenticated"] = True

    else:
        response["message"] = "You have supplied an invalid 2FA token!"
    return jsonify(response), 201


app.run("127.0.0.1", port=5000)
