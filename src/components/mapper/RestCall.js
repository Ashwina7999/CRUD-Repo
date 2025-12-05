  import { toast } from 'react-toastify';

const RestCall = async (data = null, method = "GET", endPoint = "") => {

   const notify = (code, message) => {
    code==="Failure"? toast.error(message) : toast.success(message);
  };

  try {

    let url = `http://localhost:8080/${endPoint}`;

    const options = { method, headers: {} };

    // Adding body only for non-GET
    if (method !== "GET" && data) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(data);
    }

    // Adding query params for GET
    if (method === "GET" && data && Object.keys(data).length > 0) {
      url += `?${new URLSearchParams(data)}`;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      alert("A server error occurred. Please try again.");
    }

    const json = await response.json();
    json.responseMessage && notify(json.responseCode, json.responseMessage);

    return json;

  } catch (error) {
    console.log("RestCall Error:", error);
    return { error: error.message };
  }
};


export default RestCall
