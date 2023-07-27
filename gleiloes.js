import requests
from bs4 import BeautifulSoup

/*# Open a connection to the Wikipedia homepage.*/
url = "https://en.wikipedia.org/wiki/Main_Page"
response = requests.get(url)

/*# Parse the HTML of the website.*/
soup = BeautifulSoup(response.content, "html.parser")

/*# Extract the title of the first article.*/
article_title = soup.find("h1").text

/*Print the title of the article.*/
print(article_title);

/* Passo a Passo
1. Abra uma conexão com o site que você deseja raspar.
2. Use a biblioteca 'BeautifulSoup' para analisar o HTML do site.
3. Extraia os dados desejados do HTML.
4. Feche a conexão com o site.
*/