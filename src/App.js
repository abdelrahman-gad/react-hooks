
import './App.css';
import {useState , useEffect , useRef} from 'react';
function App() {
  const [name , setName ]  = useState('');
  const renderCount  = useRef(0);

  //  used to store the proevious value of a state
  const prevName = useRef('');
  useEffect(() => {
     prevName.current = name;
  }, [name]);


  // useEffect(() => {
  //   renderCount.current = renderCount.current +1;   
  // });
  const inputRef = useRef();
  // when you click the button it will call the 'focus' method which will  put the value in but without rerendering the state 
  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value='Some value';

  }
  return ( 
    <div className="App">
      
      <input ref={inputRef} value={name} onChange={ (e) => setName(e.target.value)  } ></input>
      <h3>  My name  is <h2> { name } </h2> and it used to be <h2> {prevName.current}  </h2>  </h3>
      <h4> I rendered   {renderCount.current}  times </h4>
      <button onClick={focus}>Focus </button>
    </div>
  );
}

export default App;
