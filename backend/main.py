# Goal is to scrape results data 
from bs4 import BeautifulSoup
import requests
import csv
from urllib.request import urlopen


def main():
    url = "https://angliacarauctions.co.uk/auctions/2700-30-Apr-2025"
    page = urlopen(url)
    html = page.read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    soup.find_all("div")
    output = soup.select('div.col-xl-4.col-md-6.col-12') 
    title = soup.select('h3.text-secondary.card-title.fw-bold')

    ############Continue from here with scraping the each detail for the car#############################
    car_info = soup.select('table.vehListProp tr')

    list(title)
    list(car_info)
    print(output)

    for titles in title:
        clean_title = titles.text.strip()
        #print(clean_title)
        
    for carinfo in car_info:
        clean_car_info = carinfo.text.strip()
        #print(clean_car_info)
        








if __name__ == "__main__":
    main()
