export async function fetchView(domain: string, view: string, ticket: string) {
  return await fetch(`${domain}${view}?ticket=${ticket}`, {
    method: 'GET',
  }).then((res) => res.json());
}

export async function fetchToken(
  domain: string,
  validate: string,
  token: string,
) {
  return await fetch(`${domain}${validate}`, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  }).then((res) => res.json());
}

export function getQueryParams(): { [key: string]: string } {
  const { href } = window.location;
  if (href.indexOf('?') < 0) {
    return {};
  }
  const query = href.substr(href.indexOf('?') + 1);
  const params: { [key: string]: string } = {};
  const search = query.split('&');
  search.forEach((item) => {
    let key = item.split('=');
    params[key[0]] = key[1];
  });
  return params;
}
