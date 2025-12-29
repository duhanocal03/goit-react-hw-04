import axios from "axios";

const fetchImages = async (query, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      page: page,
      per_page: 12,
      client_id: "zLqw2ktDyxsKtO59Y20y9HBvBhBdqMdcBaD6DYyNb0U", // Önemli!
    },
  });
  return response.data;
};

export default fetchImages;