## OriginUi website
This the new and refreshed website of OriginUi written in [NextJS](https://nextjs.org).

## Features of the new site:
 - More fancy device list 
 - Site animations (omg)
 - A new and amazing look of the visual side

## Planned features for the site:
 - A backend for handeling stuff like accounts
 - ester Accounts (once backend is made)
 - Adding new devices through the frontend (once backend is done)
 - User and image management (once backend is done)

> [!NOTE]
> Requirements for the site to work:
> Well obviously NextJS on a PC or server with a supported OS that [NodeJS supports](https://docs.datadoghq.com/tracing/trace_collection/compatibility/nodejs/#operating-system-support) (example Ubuntu)
> NodeJS on a PC or server that [supports](https://docs.datadoghq.com/tracing/trace_collection/compatibility/nodejs/#operating-system-support) it, the site uses NextJS. 

# Instructions on setting up the site
## Most of the linux distros
1. Install NodeJS, npm and yarn:
```bash
# In this guide we will use Debian/Ubuntu for installing the requirements. For other distros, document yourself but the package name for NodeJS and npm should be the same.
# NodeJS 18 or later is required, if your distro dosen't have version 18 or later follow this instead to install NodeJS: https://nodejs.org/en/download/package-manager
sudo apt install nodejs npm
# To install yarn, we need to use npm with the global flag so the yarn command will be accessible globally.
npm install yarn --global
```
2. Clone/Download the site repo:
```bash
git clone https://github.com/esterOSS/originui-website
```
3. Preparations:
```bash
cd originui-website
yarn install
```
4. Start the web server:
```bash
yarn dev
```
5. Building for production:
```bash
yarn build
```
### You're done with building the site for linux!
## Windows
1. Install [NodeJS](https://nodejs.org/dist/v21.7.3/node-v21.7.3-x64.msi) and yarn (npm comes included with NodeJS on Windows)
```bash
npm install yarn -g
```
(-g is also --global)

2. Clone/Download the repo:
```bash
git clone https://github.com/esterOSS/originui-website
```
3. Preparations:
```bash
cd originui-website
yarn install
```
4. Start the web server:
```bash
yarn dev
```
5. Build for production:
```bash
yarn build
```
### You're done with building the site for Windows!
