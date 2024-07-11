from flask import Flask

app = Flask(__name__)

@app.route("/results")

def suggestions():
  # return the data pulled from the agents to the frontend here
  return {}

if __name__ == "__main__":
  app.run(debug=True) # change when in prod?