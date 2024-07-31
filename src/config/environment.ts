/* eslint-disable @typescript-eslint/no-var-requires */

const envMap = {
  test: {
       'urlBrightHorizons': 'https://www.brighthorizons.com/',
       
  }
};

export const geturl = (urls): WebdriverIO.Element => {
  return envMap[process.env.ENV][urls];
};

