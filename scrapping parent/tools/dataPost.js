export function postData(url, data, onSuccess, onError) {
  axios
    .post(url, data)
    .then((response) => {
      if (onSuccess && typeof onSuccess === "function") {
        onSuccess(response.data);
      }
    })
    .catch((error) => {
      if (onError && typeof onError === "function") {
        onError(error);
      }
    });
}
