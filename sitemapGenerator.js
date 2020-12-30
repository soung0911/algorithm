const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');

require('babel-register')({
  presets: [es2015, presetReact],
});

const router = require('./sitemap-routes.js').default;
const Sitemap = require('react-router-sitemap').default;

const api = require('../src/api');

async function generateSitemap() {
  try {
    const sites = await api.sitemapApi.getSites();
    const ids = [];

    for (let i = 0; i < sites.length; i++) {
      const items = await api.sitemapApi.getItems(sites[i]);

      if(items.length) {
        ids.push({
          path: [sites[i]],
          title: items
        });
      }
    }

    const pathsConfig = {
      '/site/:title': [
        {
          title: sites,
        },
      ],
      '/problem/:path/:title': ids,
    };

    return new Sitemap(router())
      .applyParams(pathsConfig)
      .build('https://soung0911.github.io/algorithm/') // 여러분의 도메인 이름으로 변경해주세요.
      .save('./public/sitemap.xml'); // sitemap.xml 파일이 생성될 위치입니다.
  } catch (e) {
    console.log(e);
  }
}

generateSitemap();
