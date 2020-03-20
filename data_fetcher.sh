#!/bin/dash

#download dis share prices
DIS="curl https://query1.finance.yahoo.com/v7/finance/download/DIS?period1=-252374400&period2=1584576000&interval=1d&events=history -o dis.csv"
`$DIS` 
#download aapl share prices
AAPL="curl https://query1.finance.yahoo.com/v7/finance/download/AAPL?period1=345427200&period2=1584576000&interval=1d&events=history -o aapl.csv"
`$AAPL`
#download tsla share prices
TSLA="curl https://query1.finance.yahoo.com/v7/finance/download/TSLA?period1=1277769600&period2=1584576000&interval=1d&events=history -o tsla.csv"
`$TSLA`
#download amd share prices
AMD="curl https://query1.finance.yahoo.com/v7/finance/download/AMD?period1=322099200&period2=1584576000&interval=1d&events=history -o amd.csv"
`$AMD`
