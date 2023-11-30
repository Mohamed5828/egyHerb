const axios = require("axios");

//functions are in chronic usage arrangment where first we authenticate and get token which is used in authorization and sending a get request to get all brands urls
//after this we scrape all the data brand by brand using the processURLS function. the functions will be called by the PerformGetRequest which is responsible for connecting all togther from acquiring the token and geting brands and then start scrapping

//we will then

// Function to perform user authentication and get JWT
async function authenticateUser(username, password) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/authenticate",
      {
        email: username,
        password: password,
      }
    );
    return response.data.token; // Assuming the token is returned in the response
  } catch (error) {
    console.error("Authentication failed:", error.message);
    throw error;
  }
}

// Function to send a protected GET request with JWT
async function sendGetRequestWithJWT(endpoint, token) {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Request failed:", error.message);
    throw error;
  }
}

async function processURLs(urls) {
  if (urls.length === 0) {
    // All URLs have been processed
    return;
  }

  const url = urls.shift(); // Take the first URL from the array

  try {
    await scrapProducts.start(url);
  } catch (error) {
    console.error("Error scraping URL:", url, error.message);
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  // Process the remaining URLs recursively
  await processURLs(urls);
}

async function performGetRequest(username, password, endpoint) {
  try {
    let token = await authenticateUser(username, password);
    const responseData = await sendGetRequestWithJWT(endpoint, token);
    // console.log("Response data:", responseData);
    await processURLs(responseData);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
