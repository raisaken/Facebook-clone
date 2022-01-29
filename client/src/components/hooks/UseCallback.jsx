import React, {useState, useEffect, useCallback} from 'react';

function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(()=>{
        setItems(getItems())
        console.log('Updating Items')
    }, [getItems])
  return items.map(item => <div key={item}>{item}</div>);
}

function UseCallback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
    
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    },[number])

    const theme = {
        backgroundColor: dark ? 'black':'white',
        color: dark ? 'white': 'black'
    }
  return <div style={theme}>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={()=>setDark(p => !p)}>theme  </button>
      <List getItems={getItems}/>
  </div>;
}
export default UseCallback;
