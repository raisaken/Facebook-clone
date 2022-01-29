import React,{useState} from 'react';

function Hooks() {
    const [count, setCount] = useState(1)
    const multiply=()=>{
        return doublef(count)
    }
  return <div>
      <input type="number"value={count} onChange={e=>setCount(parseInt(e.target.value))} />
      {multiply}
  </div>;
}

function doublef(x){
    for(let i=0;i<1000000;i++){

    }
    return x*2
}

export default Hooks;
