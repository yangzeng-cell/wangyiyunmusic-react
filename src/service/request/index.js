import Request from './request';

const httpRequest = new Request({
  baseURL: 'https://netease-cloud-music-api-zeta-sand.vercel.app',
  responseFn: (response) => response.data
});

export default httpRequest;
