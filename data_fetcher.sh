#/bin/bash

#download dis share prices
curl https://query1.finance.yahoo.com/v7/finance/download/DIS?period1=-252374400&period2=1584576000&interval=1d&events=history -o dis.csv &
#download aapl share prices
curl https://query1.finance.yahoo.com/v7/finance/download/AAPL?period1=345427200&period2=1584576000&interval=1d&events=history -o aapl.csv &
#download tsla share prices
curl https://query1.finance.yahoo.com/v7/finance/download/TSLA?period1=1277769600&period2=1584576000&interval=1d&events=history -o tsla.csv &
#download amd share prices
curl https://query1.finance.yahoo.com/v7/finance/download/AMD?period1=322099200&period2=1584576000&interval=1d&events=history -o amd.csv