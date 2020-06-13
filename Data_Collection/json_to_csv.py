# -*- coding: utf-8 -*-

# A code to convert json files of Headlines and Article Body belonging to the four companies, into csv files.

import pandas as pd
import numpy as np
import string
import datetime
from dateutil import parser

df1 = pd.read_json (r'headlines_Tesla Inc (TSLA.OQ).json')
df1.to_csv (r'headlines_Tesla Inc (TSLA.OQ).csv', index = None)

df2 = pd.read_json (r'headlines_Apple Inc (AAPL.OQ).json')
df2.to_csv (r'headlines_Apple Inc (AAPL.OQ).csv', index = None)

df3 = pd.read_json (r'headlines_Advanced Micro Devices Inc (AMD.OQ).json')
df3.to_csv (r'headlines_Advanced Micro Devices Inc (AMD.OQ).csv', index = None)

df4 = pd.read_json (r'headlines_Walt Disney Co (DIS.N).json')
df4.to_csv (r'headlines_Walt Disney Co (DIS.N).csv', index = None)

df5 = pd.read_json(r'body_Tesla Inc (TSLA.OQ).json')
df5.to_csv ('body_Tesla Inc (TSLA.OQ).csv', index = None)

df6 = pd.read_json (r'body_Apple Inc (AAPL.OQ).json')
df6.to_csv (r'body_Apple Inc (AAPL.OQ).csv', index = None)

df7 = pd.read_json (r'body_Advanced Micro Devices Inc (AMD.OQ).json')
df7.to_csv (r'body_Advanced Micro Devices Inc (AMD.OQ).csv', index = None)

df8 = pd.read_json (r'body_Walt Disney Co (DIS.N).json')
df8.to_csv (r'body_Walt Disney Co (DIS.N).csv', index = None)
