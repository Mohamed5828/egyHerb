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

// Example usage:
const apiUrl = "/api/products/updateOrSave"; // Replace with your API endpoint
const productData = {
  title: "Product Name",
  // Include other product fields as needed
  priceUs: 25.99, // New price
};

postData(
  apiUrl,
  productData,
  () => {
    console.log("Success"); // Log a simple success message
    // Handle success, if needed
  },
  (error) => {
    console.error("Error:", error.message); // Log the error message
    // Handle error, if needed
  }
);
