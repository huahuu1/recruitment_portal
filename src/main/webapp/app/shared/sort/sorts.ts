export default function buildPaginationQueryOpts(req) {
  if (req) {
    let result = '';
    Object.keys(req).forEach(key => {
      if (key !== 'sort' && key !== 'page' && key !== 'size') {
        if (req[key] === '') {
          return;
        }
        result += '&' + key + '=' + req[key];
      }
    });
    let sorts = '';
    for (const idx of Object.keys(req.sort)) {
      if (sorts.length > 0) {
        sorts += '&';
      }
      sorts += 'sort=' + req.sort[idx];
    }
    return `${sorts}&page=${req.page - 1}&size=${req.size}${result}`;
  }
  return '';
}

export function buildQueryURI(data) {
  const ret = [];
  // tslint:disable-next-line:forin
  for (const d in data) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
}
