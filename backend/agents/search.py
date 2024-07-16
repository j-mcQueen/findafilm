import os
from tavily import TavilyClient

tavily = TavilyClient(os.getenv("TAVILY_API_KEY"))

class SearchAgent:
  def __init__(self):
    pass

  def search(self, input: str):
    # find sites that have lists of films similar to the input
    results = tavily.search(query=f"Movies similar to {input}", max_results=10)
    candidates = results["results"]

    # extract urls from the result to be processed by the filter agent
    return list(map(lambda link: link["url"], candidates))
  
  def run(self, input: str):
    response = self.search(input)

    # create a dictionary to be appended to after each agent invocation
    output = {}
    output["input"] = input
    output["sources"] = response
    return output
