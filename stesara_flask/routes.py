from stesara_flask import app
from flask import render_template, redirect,url_for,redirect,flash,session,request

@app.route('/')
@app.route('/home')
def homepage():
    # come parametri passo il nome del file che si vuole renderizzare
    return render_template('homepage.html', title='SteSara')


@app.route('/nuoviarrivi')
def nuoviarrivi():

    return render_template('nuoviarrivi.html', title='nuoviarrivi')


@app.route('/abbigliamento')
def abbigliamento():

    return render_template('abbigliamento.html', title='abbigliamento')


@app.route('/login')
def login():
    return render_template('login.html', title='login')



@app.route('/register')
def register():

    return render_template('register.html', title='register')



@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', title='dashboard')


@app.route('/accessori')
def accessori():
    return render_template('accessori.html', title='accessori')

