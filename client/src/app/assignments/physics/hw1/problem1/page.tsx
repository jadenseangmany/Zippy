"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HW1ProblemsPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const problems = [
    {
      question:
        "A hockey puck is sliding across a very smooth, frictionless ice rink at a constant velocity of 5 m/s to the east. What is the net force acting on the puck? Upload your written steps.",
      number: 1,
    },
    {
      question:
        "A 2kg object is pushed with a force of 10N. What is its acceleration? Show your work.",
      number: 2,
    },
  ];

  const isFinalStep = currentStep === problems.length;
  const progress = (currentStep / problems.length) * 100;

  useEffect(() => {
    if (!isFinalStep) {
      setStartTime(Date.now());
    }
  }, [currentStep]);

  const handleNext = () => {
    setSubmitted(false);
    setAnswer("");
    setEvaluation("");
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setSubmitted(false);
      setAnswer("");
      setEvaluation("");
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (answer.trim() === "") {
      setEvaluation("Please enter an answer before submitting.");
      setSubmitted(true);
      return;
    }
    if (!submitted && startTime !== null) {
      const timeTaken = (Date.now() - startTime) / 1000;

      try {
        const response = await fetch("http://localhost:3001/api/grade", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionText: problems[currentStep].question,
            answerText: answer,
            studentId: "test123",
          }),
        });

        const data = await response.json();
        const evaluationText = data.evaluation;
        const lower = evaluationText.toLowerCase();
        const isIncorrect = lower.includes("incorrect");

        if (isIncorrect) {
          setEvaluation(
            `Incorrect. No points awarded.\n\nGemini says: ${evaluationText}`
          );
        } else {
          const maxPoints = 100;
          const decayRate = 3;
          const earned = Math.max(
            0,
            Math.round(maxPoints - decayRate * timeTaken)
          );
          setScore((prev) => prev + earned);

          setEvaluation(
            `✅ Correct! You earned ${earned} points in ${timeTaken.toFixed(
              1
            )}s.\n\nGemini says: ${evaluationText}`
          );
        }
      } catch (err) {
        console.error("Error fetching Gemini evaluation:", err);
        setEvaluation("Error fetching evaluation. No points awarded.");
      }

      setSubmitted(true);
    } else if (submitted) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* 🔙 Back to Assignment */}
      <button
        onClick={() => router.push("/assignments/physics/hw1")}
        className="text-blue-500 hover:underline mb-4 text-sm"
      >
        ← Back to Assignment
      </button>

      <h2 className="text-2xl font-bold mb-2 text-black">AP Physics HW #1</h2>
      <p className="text-black mb-1">
        {isFinalStep ? "Assignment Complete!" : `Your Progress - ${progress}%`}
      </p>
      <div className="h-2 w-full bg-red-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mb-4 text-black font-semibold text-lg">
        Your Score: <span className="text-[#c97469]">{score} points</span>
      </div>

      {!isFinalStep ? (
        <>
          <div className="bg-[#d4e3ed] rounded-lg p-6 text-black mb-6">
            <p className="text-xl font-bold mb-2">
              Problem {problems[currentStep].number}:
            </p>
            <p>{problems[currentStep].question}</p>
          </div>

          <input
            className="w-full border border-red-300 bg-red-200 text-black p-3 rounded-md mb-4"
            placeholder="Type Answer Here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          {evaluation && (
            <div className="bg-green-100 p-2 mb-4 rounded-md whitespace-pre-line">
              <p className="text-green-800 text-sm">{evaluation}</p>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            {currentStep > 0 && (
              <button
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-semibold"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            <button className="bg-blue-200 text-blue-900 px-6 py-2 rounded-md font-semibold">
              Feedback
            </button>
            <button
              className="bg-[#c97469] text-white px-6 py-2 rounded-md font-semibold"
              onClick={handleSubmit}
            >
              {submitted
                ? currentStep === problems.length - 1
                  ? "Finish"
                  : "Next"
                : "Submit"}
            </button>
          </div>
        </>
      ) : (
        <div className="bg-[#d4e3ed] rounded-lg p-6 text-black mt-6">
          <h3 className="text-xl font-bold mb-2">🎉 Great Work!</h3>
          <p className="mb-2">
            Final Score: <strong>{score} points</strong>
          </p>
          <p className="mb-4">Compare your score with a friend!</p>
          <button
            className="bg-[#d87B74] text-white px-6 py-2 rounded-md font-semibold"
            onClick={() => router.push("/assignments/physics/hw1")}
          >
            Return to Physics
          </button>
        </div>
      )}
    </div>
  );
}
