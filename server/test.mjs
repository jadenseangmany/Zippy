import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBaHpKMtOiJyyCeOeudKCmt-xHYqbV_1xU" }); // Replace YOUR_API_KEY with your actual API key

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();