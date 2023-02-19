from login_signup import User, db
from flask import jsonify
def add_data(user):
    add_user_data = User(name=user['name'], email=user['email'], password=user['password'], status=1)
    db.session.add(add_user_data)
    db.session.commit()
    return jsonify({"message":"success"})

def format_user(user):
    user_obj = []
    for x in user:
        user_obj.append({
            'id': x.id,
            'name': x.name,
            'email': x.email,
            'password': x.password,
            'status': x.status
            })
          
    return user_obj

def login(user_data):
    get_todo_data =  User.query.filter(User.email == user_data['email'])
   
    formated_todo = format_user(get_todo_data)
    if(formated_todo[0]['password'] !=user_data['password']):
        return jsonify({"message":"incorrect ussername", "success":False})
    del formated_todo[0]['password']
    return jsonify({"user":formated_todo, "message":"logged in", "success":True})


