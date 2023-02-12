from flask import Flask, url_for



app = Flask(__name__, template_folder="templates")
from application.dashboard import *

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5500)

