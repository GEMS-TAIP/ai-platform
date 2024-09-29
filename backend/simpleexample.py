from openai import OpenAI
import pandas as pd
from tqdm import tqdm
import os


USE_AI = True #if this is off then won't use the API (for testing when don't want to spend money)
openai_api_key = #paste api key here
translation_model = 'gpt-4o-mini' #name of the translation model.

# got all this code from my translation interface: https://github.com/softly-undefined/classical-chinese-tool-v2
class Config:
    def __init__(self):
        self.openai_client = None
        
config = Config()
config.openai_client = OpenAI(api_key=openai_api_key)

def openai_api_call(prompt, translation_model):
    completion = config.openai_client.chat.completions.create(
                model=translation_model,
                messages=[
                    {
                        "role": "user",
                        "content": prompt,
                    },
                ]
            )
    return completion.choices[0].message.content


prompt = "What is the capital of the United States"

openai_api_call(prompt, translation_model)


#   {
#        "role": "system",
#        "content": system
#   },