import { useState } from "react";

const questions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Qué formato es más eficiente en la web?",
    options: ["PNG", "JPEG", "WebP", "AVIF"],
    answer: "AVIF",
  },
  {
    question: "¿Cuál de estos formatos es vectorial?",
    options: ["JPEG", "PNG", "SVG", "WebP"],
    answer: "SVG",
  },
  {
    question: "¿Cuál de estos formatos usa compresión con pérdida?",
    options: ["PNG", "JPEG", "SVG", "WebP"],
    answer: "JPEG",
  },
  {
    question: "¿Qué herramienta permite comparar calidad y compresión?",
    options: ["Photoshop", "Squoosh", "Figma", "Cloudinary"],
    answer: "Squoosh",
  },
];

const TestEjercicio1 = () => {
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
      <h2 className="text-2xl font-bold mb-4 gap-4">
        Test de Conocimientos sobre Formatos de Imagen
      </h2>
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

export default TestEjercicio1;
