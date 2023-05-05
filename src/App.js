import './App.css';
import {useState} from "react";

function App() {
  const initialSentencec= "Lorem ipsum, I am comparing if u rewrote correctly given text";
  const [inputValue, setInputValue] = useState(initialSentencec);

  function handleInput(event){
    compareInputWithInitialSentence(event.target.value)
  }

  function handleSuccess (){
    setInputValue("Congratulation, you did it 🐝!!")
  }
  function compareInputWithInitialSentence (givenInputValue) {
    const isCorrect = givenInputValue === initialSentencec;
    console.log(isCorrect);
    if(isCorrect){
      handleSuccess()
    }
  }



return (
    <div className={'app'}>
  <div>
  <h1 className={'inputValue'}>{inputValue}</h1>
    <textarea onInput={handleInput}></textarea>
  </div>
</div>
);
}

export default App;
