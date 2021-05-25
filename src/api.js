export const fetchData = () =>
  new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('Timeout'));
    }, 10000);

    fetch('https://api.1337co.de/v3/employees', {
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization:
          'api-key 14:2021-05-21:lucas.stenberg@tretton37.com dfb3a11f24886ad4b5b23198f2cee33cb84a145860c9cf8204a6065b09005166',
      },
    })
      .then((res) => {
        clearTimeout(timeout);
        resolve(res.json());
      })
      .catch((reason) => {
        clearTimeout(timeout);
        reject(reason);
      });
  });
