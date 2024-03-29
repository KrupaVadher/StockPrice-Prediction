import pandas as pd
import numpy as np
import string
import datetime
from dateutil import parser

# Read headlines and body json files into pandas dataframe
df_tesla_headlines = pd.read_json (r'headlines_Tesla Inc (TSLA.OQ).json')
df_tesla_body = pd.read_json(r'body_Tesla Inc (TSLA.OQ).json')

df_apple_headlines = pd.read_json (r'headlines_Apple Inc (AAPL.OQ).json')
df_apple_body = pd.read_json(r'body_Apple Inc (AAPL.OQ).json')

df_amd_headlines = pd.read_json (r'headlines_Advanced Micro Devices Inc (AMD.OQ).json')
df_amd_body = pd.read_json(r'body_Advanced Micro Devices Inc (AMD.OQ).json')

df_disney_headlines = pd.read_json (r'headlines_Walt Disney Co (DIS.N).json')
df_disney_body = pd.read_json(r'body_Walt Disney Co (DIS.N).json')

# Rename the 'article' column in all headlines.json files, to 'link' column (for uniform naming conventions in headline and body files)

df_tesla_headlines.rename(columns={"article":"link"},inplace=True)
df_apple_headlines.rename(columns={"article":"link"},inplace=True)
df_amd_headlines.rename(columns={"article":"link"},inplace=True)
df_disney_headlines.rename(columns={"article":"link"},inplace=True)

# Merge headlines and body json files, based on the 'link' column (which is a link to the article body)

df_tesla = pd.merge(df_tesla_headlines, df_tesla_body, on='link')
df_tesla.to_csv ('Tesla Inc (TSLA.OQ).csv', index = None)

df_apple = pd.merge(df_apple_headlines, df_apple_body, on='link')
df_apple.to_csv ('Apple Inc (AAPL.OQ).csv', index = None)

df_amd = pd.merge(df_amd_headlines, df_amd_body, on='link')
df_amd.to_csv ('Advanced Micro Devices Inc (AMD.OQ).csv', index = None)

df_disney = pd.merge(df_disney_headlines, df_disney_body, on='link')
df_disney.to_csv ('Walt Disney Co (DIS.N).csv', index = None)
