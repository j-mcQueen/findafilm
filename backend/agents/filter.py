from utils import process

example_output = """[
  {"title": movie title 1, "url": url to movie 1 IMDb page, "rating": IMDb rating, "genre": ["genre 1", "genre 2"] },
]"""

class FilterAgent:
  def __init__(self):
    pass

  def filter(self, input: dict):
    # create a prompt that describes the agent's functional responsibility, and what the expected output is
    prompt = [{
      "role": "system",
      "content": "You are responsible for looking through a set of provided sources and identifying movies which are most \n" 
                 "similar in premise, genre, and IMDb rating to that of a provided movie. Your output should contain 10 movie options.\n"
    }, {
      "role": "user",
      "content": f"Provided movie: {input['input']} \n"
                 f"Provided sources: {input['sources']} \n" 
                 f"Return 10 movies that are most similar in premise, genre and IMDb rating to that of the provided movie. \n"
                 f"You can choose movies provided in lists from these sources: {input['sources']} \n"
                 f"Please return nothing but a list of dictionaries in the following format: {example_output}\n"
    }]
    
    return process.process_prompt(prompt)
  
  def run(self, input):
    chosen_movies = self.filter(input)
    input["chosen"] = chosen_movies
    return input
