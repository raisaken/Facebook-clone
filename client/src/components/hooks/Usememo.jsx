import React, {useState, useMemo} from 'react';

function Hooks() {
  const [count, setCount] = useState(1)
  const double = useMemo(()=>multiply(count), [count])
  return <div>
    {double}
    <input type="number" onChange={e=>setCount(parseInt(e.target.value))}/>
  </div>;
}

function multiply(number){
  return number * 2;
}

export default Hooks;
