from langchain.adapters.openai import convert_openai_messages
from langchain_openai import ChatOpenAI

example_output = """
["movie title 1", "movie title 2", "movie title 3", "movie title 4", "movie title 5"]
"""

class FilterAgent:
  def __init__(self):
    pass

  def filter(self, input: str, candidates: list):
    # create a prompt that describes the agent's functional responsibility, and what the expected output is
    prompt = [{
      "role": "system",
      "content": "You are responsible for reviewing a list of 10 movies. Choose 5 movies from this list that are most similar \n"
                 "in premise, genre, and IMDb rating to that of the provided movie."
    }, {
      "role": "user",
      "content": f"Provided movie: {input} \n"
                 f"Return 5 movies that are most similar in premise, genre and IMDb rating to that of the provided movie. \n "
                 f"You can choose movies from this list: {candidates} \n"
                 f"Your output should be a list containing each movie that you have chosen. An example of the desired \n"
                 f"output format is: {example_output}\n"
    }]
    
    # send the prompt to the LLM for processing
    messages = convert_openai_messages(prompt)
    result = ChatOpenAI(model="gpt-4o", max_retries=1).invoke(messages).content

    # filter out any movie candidate which the LLM has not chosen
    for movie in candidates:
      if movie["title"] not in result:
        candidates.remove(movie)

    return candidates
  
  def run(self, input):
    chosen_movies = self.filter(input)
    return chosen_movies
