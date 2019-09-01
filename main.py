#!/usr/bin/env python3

from flask import Flask, render_template, url_for
from os import urandom

# set up flask and secret key
app = Flask(__name__)
app.config['SECRET_KEY'] = str(urandom(16).hex())


@app.route("/", methods=['GET', 'POST'])
def index():
	"""Renders the index page."""
	return render_template("index.html")


if __name__ == "__main__":
	"""Runs the server in debug mode."""
	app.run(debug=True)
