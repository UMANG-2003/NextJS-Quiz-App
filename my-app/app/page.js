"use client";
import { Result } from "postcss";
import { useState, useEffect } from "react";

export default function Home() {
  const [questions, setquestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ans, setAns] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const fetchData = async () => {
    let a = await fetch("/quesrtion.json");
    let data = await a.json();
    setquestions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < questions.length - 1) {
        return prevIndex + 1;
      }
      return prevIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return prevIndex;
    });
  };

  const selectOption = (option) => {
    setAns((prevAns) => {
      const newAnswers = [...prevAns];
      newAnswers[currentIndex] = option;
      return newAnswers;
    });
  };

  const addResult = () => {
    if (selectedOption && !answeredQuestions.includes(currentIndex)) {
      const correctAnswer = questions[currentIndex].answer;
      if (selectedOption === correctAnswer) {
        setAns((prevAns) => [...prevAns, selectedOption]);
      }

      setAnsweredQuestions((prevAnswered) => [...prevAnswered, currentIndex]);
    }
    console.log(ans);
  };

  let res = 0;
  const submit = () => {
    alert("You want to submit this quiz");
    for (let i = 0; i < questions.length; i++) {
      if (ans[i] === questions[i].answer) {
        res++;
      }
    }
    {
      let quiz = document.getElementById("quiz");
      let show = document.getElementById("show");
      let box = document.getElementById("box");
      quiz.style.display = "none";
      box.style.display = "";
      show.innerHTML = res + "/" + questions.length;
    }
  };

  return (
    <>
      <div id="box" className="" style={{ display: "none" }}>
        Result : <span id="show"></span>
      </div>
      <div id="quiz">
        <div className="container mx-auto bg-gray-600 w-[50%] my-24 max-md:w-[80%] max-md:my-12 max-md:px-3 max-md:py-6  h-fit p-10  rounded-lg">
          {questions.length > 0 && currentIndex < questions.length && (
            <div>
              <div>
                <div className=" mb-5">
                  Q {currentIndex + 1} ) {questions[currentIndex].question}
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    className="rounded-full text-start w-96 max-md:w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer"
                    id="A"
                    onClick={() => selectOption("A")}
                  >
                    A) {questions[currentIndex].A}
                  </button>
                  <button
                    className="rounded-full text-start w-96 max-md:w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer"
                    id="B"
                    onClick={() => selectOption("B")}
                  >
                    B) {questions[currentIndex].B}
                  </button>
                  <button
                    className="rounded-full text-start w-96 max-md:w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer"
                    id="C"
                    onClick={() => selectOption("C")}
                  >
                    C) {questions[currentIndex].C}
                  </button>
                  <button
                    className="rounded-full text-start w-96 max-md:w-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer"
                    id="D"
                    onClick={() => selectOption("D")}
                  >
                    D) {questions[currentIndex].D}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-9 mb-4 flex justify-between max-md:w-[80%] mx-auto">
          <button
            className="bg-slate-950 text-white border-2 border-gray-500 px-5 py-1 text-gray-800 rounded-lg font-bold rounded-full"
            onClick={prev}
          >
            prev
          </button>
          <button
            className="border-2 border-lime-700 font-bold px-5 py-1 rounded-lg text-gray-950 text-lime-800 rounded-full"
            onClick={addResult}
          >
            Select
          </button>
          <button
            className="bg-slate-950 text-white border-2 border-gray-500 px-5 py-1 text-gray-800 rounded-lg font-bold rounded-full"
            onClick={next}
          >
            next
          </button>
        </div>
        <div className="flex justify-center py-8">
          <button
            className="bg-slate-950 text-gray-600 border-2 border-gray-500 px-5 py-1 text-gray-800 rounded-lg font-bold rounded-full"
            onClick={submit}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </>
  );
}
