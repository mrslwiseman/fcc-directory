console.log(process.env.NODE_ENV)
const callbackUrl = 
  process.env.NODE_ENV == 'production' 
  ? 'https://immense-forest-46365.herokuapp.com/callback' 
  : 'http://localhost:3000/callback'

export const AUTH_CONFIG = {
    domain: 'fcc-melbourne.au.auth0.com',
    clientId: 'ZivAMzgfeQwkmOazphtxmE2dIkBOk0XW',
    callbackUrl: callbackUrl
  }
  