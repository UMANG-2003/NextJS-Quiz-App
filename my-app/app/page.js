"use client";
import { Result } from "postcss";
import { useState, useEffect } from "react";

export default function Home() {
  const [questions, setquestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ans,setAns]=useState([])
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
    console.log(ans)
  };

     
  
  let res=0
  const submit =()=>{
    for(let i=0;i<questions.length;i++){
      if(ans[i]===questions[i].answer){
       res++
      }
    }
    {let quiz=document.getElementById("quiz")
    let show=document.getElementById("show")
    let box=document.getElementById("box")
      quiz.style.display="none"
      box.style.display=""
      show.innerHTML=res+"/"+questions.length
      
    }
  }
  
  return <>
   
    <button className="m-4 absolute top-0 left-0 border-2 border-gray-700 font-bold px-5 py-1 rounded-lg text-gray-950 bg-lime-500" onClick={submit} >Submit Quiz</button>

    <div id="box" className="absolute top-28 left-1/2" style={{"display":"none"}}>
        Result : <span id="show"></span>
    </div>

    <div id="quiz" className="container mx-auto bg-gray-600 w-[50%] my-24 h-fit p-10 rounded-lg">
      {questions.length > 0 && currentIndex < questions.length && (
        <div>
          <div>
            <div className="text-xl mb-5">Q) {questions[currentIndex].question}</div>
            <div className="flex flex-col gap-4">
            <button className="text-start w-96 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer" id="A" onClick={()=>selectOption('A')}>A) {questions[currentIndex].A}</button>
            <button className="text-start w-96 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer" id="B" onClick={()=>selectOption('B')}>B) {questions[currentIndex].B}</button>
            <button className="text-start w-96 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer" id="C" onClick={()=>selectOption('C')}>C) {questions[currentIndex].C}</button>
            <button className="text-start w-96 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300   p-2 cursor-pointer" id="D" onClick={()=>selectOption('D')}>D) {questions[currentIndex].D}</button>
            </div>
           
          </div>
        </div>
      )}
      <div className="mt-9 mb-4 flex justify-between">

      <button className="bg-yellow-400 px-5 py-1 text-gray-800 rounded-lg font-bold" onClick={prev}>
        prev
      </button>
      <button className="border-2 border-gray-700 font-bold px-5 py-1 rounded-lg text-gray-950 bg-lime-500" onClick={addResult}>Submit Selection</button>
      <button className="bg-yellow-400 px-5 py-1 text-gray-800 rounded-lg font-bold" onClick={next}>
        next
      </button>
     
      </div>
    </div>

  </> 
  
  
}
