import Header from './Header';
 //  import './App.css';
import Footer from './Footer';
/* import {useState} from 'react';
import Inputs from './Inputs';
import Square from './Square'; */
import Content from './Content';
import {useState} from 'react';
import AddItems from './AddItems';
import SearchItems from './SearchItems';
//import { console } from 'inspector';
import { useEffect } from 'react';


function App() {
  
  
   const[items , setItems] = useState([] )  
      
      
 
  const [newItem,setNewItem]=useState('')

   const[search,setSearch]=useState('')  

  useEffect(()=>{ 
    JSON.parse(localStorage.getItem('todo_list'))},[])   

  const addItem=(item) =>{ 
    const id=items.length? items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    const listitems=[...items,addNewItem]
    setItems(listitems)
    localStorage.setItem('todo_list',JSON.stringify(listitems) )
  }
   
 
    

  const handleCheck=(id) =>{
        const listitems=items.map((item)=>item.id===id ? {...item,checked:!item.checked } : item  )
        setItems(listitems)
        localStorage.setItem('todo_list',JSON.stringify(listitems) )
  }
  const handleDelete=(id)=>{
        const listitems=items.filter((item)=>item.id!==id )
        setItems(listitems) 
        localStorage.setItem('todo_list',JSON.stringify(listitems))
  }
 const handleSubmit=(e)=>{
      e.preventDefault() 
      if(!newItem) return   
       addItem(newItem)
       setNewItem('') 
     // console.log("submitted")
  
  } 

 
  return (
    <div className='App'>
          <Header title="Mathi"/>
          <AddItems
            newItem={newItem}
            setNewItem={setNewItem}  
            handleSubmit={handleSubmit}
            
          />  
             <SearchItems
            search={search}
            setSearch={setSearch} 
       
           />  
          
        
          <Content 
            items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase())) }   

            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            
            />
          <Footer
            length={items.length}
    
    />


    </div>
  );
}

export default App;
