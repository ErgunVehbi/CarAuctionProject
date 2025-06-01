from bs4 import BeautifulSoup
from urllib.request import urlopen

#with open("output.txt", "a") as f:
def main():
    with open("output.txt", "a") as f:
        url = "https://angliacarauctions.co.uk/auctions/2705-04-Jun-2025"
        page = urlopen(url)
        html = page.read().decode("utf-8")
        soup = BeautifulSoup(html, "html.parser")

        # 1) Select each car “card”
        cards = soup.select('div.col-xl-4.col-md-6.col-12')

        print("\nVehicle details by card:\n")
        for card in cards:
            # 2) Extract and print the title for this card
            title_el = card.select_one('h3.text-secondary.card-title.fw-bold')
            title = title_el.get_text(strip=True) if title_el else "No title"
            print(title, file=f)

            # 3) Extract this card’s table rows
            rows = card.select('table.vehListProp tr')
            for row in rows:
                th = row.find('th')
                td = row.find('td')
                if th and td:
                    header = th.get_text(strip=True)
                    value  = td.get_text(strip=True)
                    # 4) Print each field/value indented under the title
                    print(f"    {header}: {value}", file=f)

            print()  # blank line between cards

if __name__ == "__main__":
    main()

