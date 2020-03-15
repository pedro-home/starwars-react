function fetch(url, options) {
  return window.fetch(url, options).then(response => {
    if (response.ok) {
      let body;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        body = response.json();
      } else {
        body = response.text();
      }

      return body;
    }

    throw new Error(`${response.status}: ${response.statusText}`);
  });
}

export default fetch;
