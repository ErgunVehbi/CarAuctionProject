# Goal is to scrape results data 
from bs4 import BeautifulSoup
import requests
import csv


page_to_scrape = requests.get("https://angliacarauctions.co.uk/auctions/2698-23-Apr-2025")
soup = BeautifulSoup(page_to_scrape.text,"html.parser")
vehInfos = soup.findAll("div", attrs={"class":"text-secondary card-title fw-bold"})
vehDescriptions = soup.findAll("div", attrs={"class":"row"})

#file = open("/Users/ergunvehbi/Documents/02_Projects/Python/CarAuction/carList 08-01-25.csv", "w")
#writer = csv.writer(file)

#writer.writerow(["Vehicle Information", "Vehicle Description"])

for vehInfo, vehDescription in zip(vehInfos, vehDescriptions):
    if (vehInfo and vehDescription !=""):
        print(vehInfo.text + " -- "+ vehDescription.text)
    else:
        print("Error")
    #writer.writerow([vehInfo.text, vehDescription.text])
#file.close()