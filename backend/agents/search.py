import os
from tavily import TavilyClient

tavily = TavilyClient(os.getenv("TAVILY_API_KEY"))

class SearchAgent:
  def __init__(self):
    pass

  def search(self, input: str):
    results = tavily.search(query=f"Find me 10 movies that are similar in premise, genre, and IMDb rating to {input}", max_results=10, include_images=True)
    candidates = results["results"]

    return candidates
  
  def run(self, input: str):
    response = self.search(input)

    return response
