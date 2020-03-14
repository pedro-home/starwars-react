function fetch(url, options) {
  return window.fetch(url, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status}: ${response.statusMessage}`);
  });
}

export default fetch;
