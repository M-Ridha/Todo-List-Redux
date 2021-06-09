import AddTask from './component/AddTask'
import ListTask from './component/ListTask'
import './App.css';
import Filter from './component/Filter';
import { useSelector } from 'react-redux';


function App() {
  const todos = useSelector(state => state.ToDOReducer)
  const filter = useSelector(state => state.Filter)
  const FilteringTodos =(todos,filterTodo)=>{

    switch(filterTodo){
            
        case 'All' :
                return todos;
        
        case 'Done' :
                return todos.filter(el=> el.done)
                
        case 'UnDone' :
                return todos.filter(el=> !el.done)
            
        default:return todos;
            
        }}
  
  return (
    
    <div className="App">
      
      <div className="todoApp">
        
        <AddTask/>
        <ListTask todos={FilteringTodos(todos,filter)}/>
        <Filter/>
      
      </div>
    
    </div>
  );
}

export default App;
