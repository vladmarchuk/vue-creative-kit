// path is used to resolve static files on build:
// bg: path  + '/static/images/index/bg1.jpg',
const path = process.env.publicPath === '/' ? '' : process.env.publicPath;

const data = [
  {
    websiteData: 'text',
  },
];

export default data;
