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
    workflow = Graph()

    for agent, action in nodes.items():
      workflow.add_node(agent, action)
    
    workflow.add_edge("search", "filter")
    workflow.add_edge("filter", "write")

    workflow.set_entry_point("search")
    workflow.set_finish_point("write")

    chain = workflow.compile()

    # speed up results generation
    search_result = chain.invoke(input)
    filter_result = chain.invoke(search_result)
    write_result = chain.invoke(filter_result)

    return write_result