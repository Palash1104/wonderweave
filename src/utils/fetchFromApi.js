import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

// Fetch your API_KEY
const API_KEY = `${process.env.REACT_APP_GEMINI_API_KEY}`;

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// ...

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function fetchFromApi(animals) {
  const [animal1, animal2, animal3] = animals;
  const response = await axios({
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCHiGC-whX5AMBvT51VHDHHoMPN_k2HRBc",
    method: "post",
    data: {
      contents: [{ parts: [{ text: `Narrate a short story for kids with about 150 words on animals in a forest. the animals are ${animal1}, ${animal2}, ${animal3}. Give fun facts about these animals in the story and make the story as interesting and educational as possible.` }] }],
    },
  });
  return response["data"]["candidates"][0]["content"]["parts"][0]["text"];
}



export default fetchFromApi;
