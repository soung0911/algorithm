const fetchApi = url =>
  fetch(require(`./posts/${url}`))
    .then(handleErrors)
    .then(response => {
      return response.text();
    });

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const Api = {
  getSite: title => fetchApi(`site/${title}.md`),
  getProblem: (path, title) =>
    fetchApi(`${path}/${title.replace(/(\s*)/g, '')}_p.md`)
};
