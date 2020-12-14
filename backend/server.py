from flask import Flask
from api import search
app = Flask(__name__)


@app.route('/search/<search_term>')
def search_page(search_term):
   return search(search_term)

if __name__ == '__main__':
   app.run()