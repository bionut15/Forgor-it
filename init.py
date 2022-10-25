#here ie the backend
from flask import Flask, render_template

DATABASE_PATH='static/database.txt'
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/query")
def query():
    txtfile = open(DATABASE_PATH, 'r')
    database = txtfile.read()
    txtfile.close()
    return database

@app.route("/increment")
def increment():
    txtfile = open(DATABASE_PATH, 'r')
    database = txtfile.read()
    txtfile.close()
    data = int(database)
    data = data + 1
    content = str(data)
    writefile = open(DATABASE_PATH, 'w')
    writefile.write(content)
    writefile.close()
    return "success"

@app.route("/decrement")
def decrement():
    txtfile = open(DATABASE_PATH, 'r')
    database = txtfile.read()
    txtfile.close()
    data = int(database)
    data = data - 1
    content = str(data)
    writefile = open(DATABASE_PATH, 'w')
    writefile.write(content)
    writefile.close()
    return "success"



if __name__ == '__main__':
   app.run()

