const timeoutDuration = 5000;

export default function apiCall(route, body = {}, method = "GET") {
  // request promise
  const request = new Promise((resolve, reject) => {
    // create a header with content type
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    // create the requestDetails object
    const requestDetails = {
      method,
      mode: "cors",
      headers
    };

    // Check to see if request is not a GET request
    if (method !== "GET") requestDetails.body = JSON.stringify(body);

    // handle errors function
    function handleErrors(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }

    // Construct fetch request
    fetch(`${URL}/${route}`, requestDetails)
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
