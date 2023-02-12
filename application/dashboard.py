from flask import render_template, redirect, url_for
from main import app

@app.route('/',methods=['GET'])
def home():
  return render_template('home.html')

@app.route('/pred',methods=['GET'])
def pred():
  return render_template('pred.html')

