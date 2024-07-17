from utils import process

# ideal generated outcome from filter agent
example_output = """ {
  "title": movie title 1,
  "premise": 2 sentence premise of the film
} """

class WriteAgent:
  def __init__(self):
    pass

  def write(self, input: dict):
    prompt = [{
      "role": "system",
      "content": "You are are tasked with writing premises for each movie in a given list. Your written premises should \n"
                 "inform a reader of what the corresponding movie is about in an enticing manner. Under no circumstances should your \n"
                 "premises contain major plot points of the movie or elements which spoil it.\n"
    }, {
      "role": "user",
      "content": f"Provided movies: {input['chosen']} \n"
                 f"Write a premise for each film in the provided movies that capture the essential elements of the movie without \n"
                 f"revealing its major plot points. \n"
                 f"Please return nothing but a list of dictionaries in the following format: {example_output}\n"
    }]

    return process.process_prompt(prompt)

  def run(self, input):
    premises = self.write(input)
    input["premises"] = premises
    return input