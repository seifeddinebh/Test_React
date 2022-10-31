import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ListProduit() {
  const [Todos , settodos]=useState([]) 
  
 
  const fetchdata = async()=>{ 
    const todos = await axios.get('http://localhost:3000/Todo')
    settodos(todos.data)
    console.log(todos)
  }
   
  useEffect(() => { 

 
fetchdata()
  } ,[])



    const handledelete = (id) => {
      try {
    
        axios.delete(`http://localhost:3000/Todo/${id}`)
        fetchdata()
       
      }catch(error){
console.log(error)
      }
    }

    return (
          <div>
            <Link to="/AjouterProduit" className='btn btn-primary' >Ajouter Produit</Link>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Prix</th>
                  <th scope="col">Quantite</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
 {         Todos.map((todo)=>{ 
          
  return(
                <tr key={todo.id}>
                  <th>{todo.id}</th>
                  <td>{todo.nom}</td>
                  <td>{todo.description}</td>
                  <td>{todo.prix}</td>
                  <td>{todo.quantite}</td>
                  <td> <Link  className='btn btn-success' value="update" to={`/ModifierProduit/${todo.id}`}  >update</Link> <button onClick={()=>handledelete(todo.id)}  className='btn btn-danger' >delete</button></td> 
                </tr>
  ) }
)
}
              </tbody>
            </table>
          </div>

        )
    }

  
      export default ListProduit