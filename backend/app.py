from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<div><p>This is a div</p></div>"
