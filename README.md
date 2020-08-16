<h1 align="center">Personal Website :newspaper:</h1>

<p align="center">
  <img src="https://circleci.com/gh/chapmankyle/website/tree/master.svg?style=svg" alt="Build Status"></img>
  <img src="https://img.shields.io/github/license/chapmankyle/website.svg?" alt="license: GPL-3.0"></img>
  <img src="https://img.shields.io/github/v/release/chapmankyle/website.svg?" alt="Release"></img>
</p>

Official website is available at https://kylechapman.herokuapp.com/ :tada:

This repository serves as the source code for my personal website that accompanies my CV :memo:

# Setup :rocket:

Clone the repository and navigate to the `website` directory.
```bash
# clone the repo
git clone git@github.com:chapmankyle/website.git

# navigate to the `website` directory
cd website
```

You need to have [Node.js](https://nodejs.org/) installed in order to compile
from the source code.

# Building :hammer:

You need to install all the dependencies first, so type the following into the
terminal of your choice:
```bash
# install dependencies
npm install
```

## :wrench: Development Build

```bash
# start the development build
npm run serve
```

The development version is now accessible at http://localhost:8080.

## :computer: Production Build

```bash
# build the production files
npm run build
```

This will build the relevant files into the `dist` directory. To serve these
files, you need to install `serve`.

```bash
# install serve globally
sudo npm install -g serve
```

Then run `serve` and give it a port to listen on.

```bash
# listen on port 4000
serve -s dist -l 4000
```

The production version is now accessible at http://localhost:4000.

# Screenshot :camera:
![screenshot](https://user-images.githubusercontent.com/43512442/90320890-15d15800-df45-11ea-8305-6738bb5ac316.png)
