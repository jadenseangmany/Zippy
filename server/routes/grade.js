const express = require('express');
const multer = require('multer');
const { GoogleGenAI } = require('@google/genai'); // Updated import

const upload = multer({ storage: multer.memoryStorage() });
const ai = new GoogleGenAI({ apiKey: "AIzaSyBaHpKMtOiJyyCeOeudKCmt-xHYqbV_1xU" });

module.exports = (io) => {
  const router = express.Router();

  // Conditional middleware: only use multer if request is multipart/form-data
  router.post('/', (req, res, next) => {
    console.log("Content-Type:", req.headers['content-type']);
    if (req.is('multipart/form-data')) {
      upload.fields([
        { name: 'questionImage', maxCount: 1 },
        { name: 'answerImage', maxCount: 1 },
      ])(req, res, next);
    } else {
      next();
    }
  }, async (req, res) => {
    const { questionText, answerText, studentId } = req.body;
    const files = req.files || {};
    const questionImage = files['questionImage'] ? files['questionImage'][0] : undefined;
    const answerImage = files['answerImage'] ? files['answerImage'][0] : undefined;

    // Build a simple prompt string.
    let prompt = `Question: ${questionText}\nAnswer: ${answerText}\nGrade the answer from F to A and provide a short explanation. F Would be they did not put any effort or the answer didn't make any sense, while A is a perfect answer that answers the question properly.`;

    // (Optionally) Append image info if available.
    if (questionImage) {
      prompt += `\n[Question Image Attached]`;
      // You might handle image data differently if the API supports it.
    }
    if (answerImage) {
      prompt += `\n[Answer Image Attached]`;
    }

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash", // Adjust based on your access
        contents: prompt,
      });
      const evaluation = response.text;

      if (studentId) {
        io.emit(`grade-${studentId}`, { evaluation });
      }

      res.json({ evaluation });
    } catch (err) {
      console.error("Error grading answer:", err);
      res.status(500).json({ error: "Failed to grade the answer.", details: err.message });
    }
  });

  return router;
};