import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setQuestions(data);
        setCurrentQuestion(getRandomQuestion(data));
      } catch (error) {
        console.error("Fehler beim Laden:", error);
      }
    };

    fetchQuestions();
  }, []);

  const getRandomQuestion = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const handleAnswerClick = (index) => {
    if (selectedAnswer !== null || !currentQuestion) return;

    const correct = index === parseInt(currentQuestion.correct);
    setSelectedAnswer(index);
    setIsCorrect(correct);

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentQuestion(getRandomQuestion(questions));
    }, 2000);
  };

  if (!currentQuestion) return <p>Lade Fragen...</p>;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        maxWidth: "600px",
        width: "100%",
        textAlign: "center"
      }}>
        <h1 style={{ textDecoration: "underline", marginBottom: "20px" }}>Rosenheim Cops Quiz</h1>
        <hr style={{ border: "1px solid #ddd", marginBottom: "20px" }} />

        <p style={{
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "15px"
        }}>
          {currentQuestion.question}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {currentQuestion.answers.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              style={{
                padding: "12px",
                fontSize: "16px",
                backgroundColor:
                  selectedAnswer === index
                    ? isCorrect
                      ? "green"
                      : "red"
                    : "#f9f9f9",
                color: selectedAnswer === index ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background 0.3s, transform 0.1s",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                transform: selectedAnswer === index ? "scale(1.05)" : "scale(1)"
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer !== null && (
          <p style={{
            textAlign: "center",
            fontSize: "18px",
            marginTop: "15px",
            fontWeight: "bold",
            color: isCorrect ? "green" : "red"
          }}>
            {isCorrect ? "✅ Richtig!" : "❌ Falsch!"}
          </p>
        )}

        <p style={{ marginTop: "30px", fontSize: "12px", color: "#aaa" }}>
          Version: v1.0.1 FB
        </p>
      </div>
    </div>
  );
}

export default App;
