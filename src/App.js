import React from 'react';
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import {useState} from "react";

function App() {
  const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
}
  return (
    
  
    <div className='App'>

      <div className='box'>

     
      
        <h2>Speech to Text Converter</h2>
        <br/>
        <p>An App that converts speech from the microphone to text and makes it available to your clipboard.</p>

        <div className="main-content" onClick={() =>  setTextToCopy(transcript)} >
            {transcript}
        </div>

        <div className="btn-style">

        <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
            <button  onClick={startListening}>Start Listening</button>
            <button  onClick={SpeechRecognition.stopListening}>Stop Listening</button>
            <button onClick={()=>{setTextToCopy("hello")}}>Reset</button>

        </div>
        
        
         </div>

    </div>



  );
}

export default App;
