from flask import Flask, request
from flask_cors import CORS
from controller import Controller
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/results", methods=["POST"])
def get_movies():
  # get user input
  data = request.json

  # send user input to controller
  controller = Controller()
  movies = controller.run(data)

  # return result to client for processing
  return movies
if __name__ == "__main__":
  app.run(debug=True) # change when in prod?