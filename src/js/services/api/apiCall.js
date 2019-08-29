const timeoutDuration = 5000;

export default function apiCall(
  route,
  client_id,
  client_secret,
  body = {},
  method = "GET"
) {
  // request promise
  const request = new Promise((resolve, reject) => {
    // create header
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    // create requestDetails object
    const requestDetails = {
      method,
      mode: "cors",
      headers
    };

    // handle errors
    function handleErrors(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }

    // construct fetch request
    fetch(
      `${URL}/${route}?client_id=${client_id}&client_secret=${client_secret}`
    )
      .then(handleErrors)
      .then(resolve)
      .catch(reject);
  });

  // timeout promise
  const timeout = new Promise((request, reject) => {
    setTimeout(reject, timeoutDuration, "Request timed out!");
  });

  return new Promise((resolve, reject) => {
    Promise.race([request, timeout])
      .then(resolve)
      .catch(reject);
  });
}
