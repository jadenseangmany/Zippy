"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HW1ProblemsPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0); // 0, 1 = problems, 2 = complete
  const [submitted, setSubmitted] = useState(false);
  const [answer, setAnswer] = useState(""); // capture answer input
  const [evaluation, setEvaluation] = useState(""); // Gemini evaluation text

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
  // 🧠 Calculate progress: 0%, 50%, 100%
  const progress = currentStep === 0 ? 0 : currentStep === 1 ? 50 : 100;

  const handleNext = () => {
    setSubmitted(false);
    setAnswer(""); // clear answer when moving to next problem
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
    if (!submitted) {
      try {
        // POST to your backend Gemini API endpoint
        const response = await fetch("http://localhost:3001/api/grade", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            questionText: problems[currentStep].question,
            answerText: answer,
            studentId: "test123", // or your dynamic student id
          }),
        });
        const data = await response.json();
        console.log("Evaluation:", data.evaluation);
        setEvaluation(data.evaluation);
      } catch (err) {
        console.error("Error fetching Gemini evaluation:", err);
        setEvaluation("Error fetching evaluation.");
      }
      setSubmitted(true);
    } else {
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

      {!isFinalStep ? (
        <>
          {/* Problem Box */}
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
            <div className="bg-green-100 p-2 mb-4 rounded-md">
              <p className="text-green-800 text-sm">{evaluation}</p>
            </div>
          )}

          {/* Controls */}
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
        // 🎉 Completion Screen
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#d4e3ed] rounded-lg p-6 text-black">
            <p className="font-semibold text-lg mb-2">Great Work!</p>
            <p>
              You earned <strong>42 gems</strong> and{" "}
              <strong>5 bonus gems</strong>.
            </p>
            <p>
              You took <strong>3.5 hours</strong> to complete the assignment.
            </p>

            <div className="mt-4 flex gap-4">
              <button
                className="bg-[#d87B74] text-white px-6 py-2 rounded-md font-semibold"
                onClick={() => router.push("/assignments/physics/hw1")}
              >
                AP Physics 1
              </button>
              <button className="bg-blue-200 text-blue-900 px-6 py-2 rounded-md font-semibold">
                Feedback
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-black mb-3">
              AP Physics HW #1 Leaderboard
            </h3>

            <div className="text-sm font-semibold text-black grid grid-cols-3 px-4 mb-1">
              <span>Name</span>
              <span>Gems</span>
              <span>Rank</span>
            </div>

            {/* Your Entry */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg px-4 py-2 mb-2 grid grid-cols-3 items-center text-black text-sm">
              <span>You</span>
              <span>47</span>
              <span>#3</span>
            </div>

            {[
              { name: "Lina G.", score: 50, rank: 1 },
              { name: "Jane D.", score: 49, rank: 2 },
              { name: "You", score: 47, rank: 3 },
            ].map((entry) => (
              <div
                key={`${entry.name}-${entry.rank}`}
                className="bg-red-300 rounded-lg px-4 py-2 mb-2 grid grid-cols-3 items-center text-sm text-black"
              >
                <span className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/30" />
                  {entry.name}
                </span>
                <span>{entry.score}</span>
                <span>#{entry.rank}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
