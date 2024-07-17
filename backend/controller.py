from langgraph.graph import Graph
from agents import SearchAgent, FilterAgent, WriteAgent

nodes = {
  "search": SearchAgent().run,
  "filter": FilterAgent().run,
  "write": WriteAgent().run,
}

class Controller:
  def __init__(self):
    pass

  def run(self, input: str):
    # initialize the graph
    workflow = Graph()

    # add graph nodes
    for agent, action in nodes.items(): # loop chosen to improve DRYness
      workflow.add_node(agent, action)
    
    # connect graph nodes
    workflow.add_edge("search", "filter")
    workflow.add_edge("filter", "write")

    # define start and end points
    workflow.set_entry_point("search")
    workflow.set_finish_point("write")

    # assemble the graph + run workflow
    chain = workflow.compile()
    result = chain.invoke(input)

    # return outcome of workflow (dictionary of all relevant generated movie data)
    return result