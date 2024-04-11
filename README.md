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

## Instructions on setting up the site
1. Install the needed stuff on your target by typing the following:
```bash
# For Ubuntu/Debian based distros (will be different for other distros with different package managers)
# NodeJS 18 or later is required, if your distro dosen't have version 18 or later follow this instead to install NodeJS: https://nodejs.org/en/download/package-manager
sudo apt install nodejs npm
npm install yarn --global
```
2. Download the repo by either typing the following:
```bash
git clone https://github.com/esterOSS/originui-website
```
3. Prepare the site for installation:
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
### done!
