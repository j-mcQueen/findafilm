import re
import json
from langchain_community.adapters.openai import convert_openai_messages
from langchain_openai import ChatOpenAI

def process_prompt(prompt):
    # send the prompt to the LLM for processing
    messages = convert_openai_messages(prompt)
    result = ChatOpenAI(model="gpt-4o", max_retries=1).invoke(messages).content

    # convert result string into processable data type
    matches = re.findall(r"\{[^}]+\}", result) # get each movie between {}
    dict = [json.loads(match) for match in matches] # convert movie from string to dict

    return dict