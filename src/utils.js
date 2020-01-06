import tinyreq from 'tinyreq';

export const createOnlineURL =  => (
  `https://ixodus.online/character/whoisonline`
);

export const createCharacterPage = ({ characterName } = {}) => (
  `https://ixodus.online/character/show/${characterName}`
);

export const requestUrl = (url, parser) => (
  new Promise((resolve, reject) => {
    tinyreq(url, (error, body) => {
      if (error) reject(error);
      resolve(parser(body));
    })
  })
);
