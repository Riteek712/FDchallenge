import Header from './Header';
import Form from './Form';
import { useEffect, useState } from 'react';
// import List from './List';
// import { toBeRequired } from '@testing-library/jest-dom/matchers';
import Table from './Table';
function App() {
  const [reqType, setReqType] = useState('users');

  const [items, setItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const API_LINK = 'https://jsonplaceholder.typicode.com'


  useEffect(
    ()=>{
      const fetchItems = async ()=>{
        try{
          const response = await fetch(`${API_LINK}/${reqType}`);
          if(!response.ok) throw Error('Did not recive the data needed.')
          const data = await response.json();
          console.log(data)
          setItems(data);
        }catch(err){
          console.log(err)
        }finally{
          // setIsLoading(false)
    
        }
      }

      fetchItems()
    },[reqType]
  )
  
  
  return (
    
    <div className="App">
      <Header />
      <Form reqType={reqType} setReqType={setReqType} />

      <Table items={items} />
        {/* <List items={items} /> */}
      
        
    </div>
  );
}

export default App;
