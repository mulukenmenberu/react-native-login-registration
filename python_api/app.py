from flask import Flask, url_for, request
from flask_migrate import Migrate
from login_signup import db, User
from flask_cors import CORS
from db_operations import add_data, login
app = Flask(__name__)
app.config.from_object('config')
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)
@app.route('/', methods=['GET','POST'])
def index():
    return {"message":"true"}
@app.route('/logins', methods=['POST'])
def login_route():
    user_data = request.get_json()
    data = login(user_data)
    return data

@app.route('/register', methods=['POST'])
def register_route():
    user_data = request.get_json()
    name = user_data['name']
    email = user_data['email']
    password = user_data['password']
    print(name,email, password)
    add_data({"name":name,"email":email, "password":password})
    return({"message":"success"})

app.run(host='0.0.0.0', port='5000')