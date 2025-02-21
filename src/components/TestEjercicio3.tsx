import { useState } from "react";

const questions = [
  {
    question: "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
    options: ["WebGL", "Canvas API", "Intersection Observer"],
    answer: "Canvas API",
  },
  {
    question:
      "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
    options: ["getContext()", "getImageData()", "setTimeout()"],
    answer: "getImageData()",
  },
  {
    question: "¿Qué método se usa para dibujar una imagen en el canvas?",
    options: ["drawImage()", "putImageData()", "getBoundingClientRect()"],
    answer: "drawImage()",
  },
  {
    question: "¿Cuál es la ventaja de usar la API Canvas?",
    options: [
      "Permite manipular imágenes sin necesidad de un servidor",
      "Reduce el tamaño de las imágenes",
      "Solo funciona con imágenes PNG",
    ],
    answer: "Permite manipular imágenes sin necesidad de un servidor",
  },
  {
    question: "¿Cómo se obtiene el contexto de dibujo en un canvas?",
    options: [
      'canvas.getContext("3d")',
      'canvas.getContext("2d")',
      "canvas.setContext()",
    ],
    answer: 'canvas.getContext("2d")',
  },
];

const TestEjercicio3 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (index: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter(
      (ans, i) => ans === questions[i].answer
    ).length;
    setScore(correct);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test sobre la API Canvas</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${
                selectedAnswers[i] === opt
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleSelect(i, opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button
        onClick={checkAnswers}
        className="bg-green-500 text-white px-6 py-2 mt-4 rounded"
      >
        Verificar respuestas
      </button>
      {score !== null && (
        <p className="mt-4 font-bold">
          Has respondido correctamente {score} de {questions.length}
        </p>
      )}
    </div>
  );
};

export default TestEjercicio3;
