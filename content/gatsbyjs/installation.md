---
title: "Installation"
metaTitle: "Installation"
metaDescription: "Installation startup manual"
---

### Requirements
- NVM
- Node
- NPM
- Gatsby-CLI


### NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Node
To download, compile, and install the latest release of node, do this:
```sh
nvm install node # "node" is an alias for the latest version
```
To install a specific version of node:
```sh
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```
### NPM
run the following command to get the latest supported npm version on the current node version:
```sh
nvm install-latest-npm
```

### Gatsby-CLI
Install the Gatsby CLI globally by running the command below. 
```sh
npm install -g gatsby-cli
```
Check that you have the correct version installed by running the command below. You should be on v3 or newer.
```sh
gatsby --version
```

### Starting New Project
