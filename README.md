<h1 align="center">Personal Website :newspaper:</h1>

<p align="center">
  <img src="https://img.shields.io/github/license/chapmankyle/website.svg?" alt="license: GPL-3.0"></img>
  <img src="https://img.shields.io/github/v/release/chapmankyle/website.svg?" alt="Release"></img>
</p>

Official website is available at https://kylechapman.dev/ :tada:

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
npm run dev
```

The development version is now accessible at http://localhost:3000.

## :computer: Production Build

```bash
# build the production files
npm run build
```

This will build the relevant files into the `.next` directory. To serve these
files, you can run the following command.

```bash
# run as if it was production
npm run start
```

The production version is now accessible at http://localhost:3000.
