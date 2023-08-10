# Blockfunding
A crownfunding platform powered by blockchain and web3. Users can create campaigns and fund campaigns via Metamask.
Tutorial from Javascript Mastery : https://www.youtube.com/watch?v=BDCT6TYLYdI
This tutorial allows you to get started with modern development frameworks such as Vite, React and Tailwindcss and web3 development.

## Technology Stack & Tools

- [Vite](https://vitejs.dev/) (Frontend Development Tooling)
- [React.js](https://reactjs.org/) (Frontend Development Framework)
- [TailwindCSS](https://tailwindcss.com/) (CSS Framework)
- [Solidity](https://soliditylang.org/) v0.8.9 (Smart Contracts)
- [Thirdweb](https://thirdweb.com/) v0.11.1 (Build & Deploy Smart Contracts)
- [Ethers.js](https://docs.ethers.io/v5/) v5.7.2 (Blockchain Interaction)
- [MetaMask](https://metamask.io/) (Web wallet)
- [Goerli](https://goerli.net/) (Ethereum Testnet)

## Usage
### 1. Clone/Download the Repository
- `$ git clone https://github.com/TheAsouka/blockfunding.git`
- `$ cd client`

### 2. Install Dependencies:
`$ npm install`

### 3. Run the app
`$ npm run dev`

### 4. Connect your wallet
Ensure to have metamask installed and to be on Goerli testnet.   
Click the `Connect` button.

## Goerli Contract Address
`0x356Bb421c78C2176036006492993BC0cC753834B`

## Tutorial limits
This tutorial is a good starting point for web3 development but it can be improve in some ways.   
There is no local deployment and testing of the smart contract. Contract is deploy directly on Goerli testnet.
Testing is a huge part of smart contract development because once the contract is deploy it can be modified.

## App improvements and bug fix
- When creating a campaign it is possible to select a date before the current day.
- Ended campaign are visible and can be funded even if the deadline is over.
- The `Loader` doesn't stop if transaction fails.
- User profil pictures aren't handle (hardcoded)
- User number of campaign is hardcoded.
- Campaign categories are't implemented (to add in Smart contract).
- Creating a campaign is free (unless network fees), it can be interesting (and easy) to pay the owner of the contract to create a campaign.

## Setup (dev only)
Create a .env file in web3 folder with :   
- PRIVATE_KEY (from metamask)
- 3WEB_CLIENT_ID (from Thirdweb dashboard)
- 3WEB_API_KEY (from Thirdweb dashboard)