import sys

import json

import ast # abstract syntax tree

#-----Web scrape code --------

import requests

from bs4 import BeautifulSoup


input_data = ast.literal_eval(sys.argv[1])
output_data = []
#print("Received data from Node.js:", input_data)
for  val in input_data: 
        query = val.replace(" ", "+")
#print("Query:", query)

        page=requests.get(f"https://www.bing.com/search?q={query}").content

        soup=BeautifulSoup(page, "html.parser")

        #print(soup.prettify)

        items = soup.select('div li h2 a')

        # Strings to pass back to Node.js


        try:
                text1 = items[3].text.strip()
                hyperlink1 = items[3]['href']
                output_data.append({'text': text1, 'hyperlink': hyperlink1})
        except:
                pass
        try:
                text2 = items[4].text.strip()
                hyperlink2 = items[4]['href']
                output_data.append({'text': text2, 'hyperlink': hyperlink2})
        except:
                pass
        try:
                text3 = items[5].text.strip()
                hyperlink1 = items[5]['href']
                output_data.append({'text': text3, 'hyperlink': hyperlink3})
        except:
                pass

        # -----------------------------


 # Serialize the list of strings to JSON
serialized_output = json.dumps(output_data)

print(serialized_output)

sys.stdout.flush()
# Ensure the output is flushed immediatel
