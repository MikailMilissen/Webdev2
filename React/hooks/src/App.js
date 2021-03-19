import './App.css';
import {useState} from 'react';
import { useForm } from './useForm';


function App() {
  
  const [count1, setCount1] = useState(10)
  const [count2, setCount2] = useState(100)
  

  
  const [value, handleChange] = useForm({email:'', password: ''})
  
  return (
    <div className="App">
      <button onClick={() => {
        setCount1(c => c + 1);
        setCount2(c => c + 1)
      }

        }>+</button>
    {console.log(setCount1)}
      <div>count 1: {count1}</div>
      <div>count 2: {count2}</div>

      <input type="text" value={value.email} name='email'  onChange={handleChange}/>
     
      <input type="password" value={value.password} name='password' onChange={handleChange}/>
    </div>
  );
}

export default App;
