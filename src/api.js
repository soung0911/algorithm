import data from './data';

const fetchApi = (url) => {
  try {
    return fetch(require(`./posts/${url}`))
      .then((response) => response.text())
      .then((text) => {
        return {
          error: false,
          text: text,
        };
      });
  } catch (e) {
    return {
      error: true,
      text: '',
    };
  }
};

export const mdApi = {
  getHome: () => fetchApi(`Introduction/introduction.md`),
  getSite: (title) => fetchApi(`site/${title}.md`),
  getProblem: (path, title) =>
    fetchApi(`${path}/${title.replace(/(\s*)/g, '')}_p.md`),
};

export const dataApi = {
  getAllData: () => data,
  getSiteData: (site) => data.find((it) => it.title === site),
};

export const sitemapApi = {
  getSites: () => data.map((it)=> it.path),
  getItems: (site) => {
    const a = data.find((it)=> it.path === site);
    return a.item_list.map((item)=> item.title)
  }
}
