import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ModifierProduit() {
  const navigate = useNavigate()
  const params = useParams()
  const [updateform, setupdateform] = useState(
    {
        nom: "",
        description: "",
        prix: "",
        quantite: "",
    }
  )
 

  const handlechange = (event) => {
    const { id, value } = event.target
    
    setupdateform(() => {
      return { ...updateform, [id]: value }
    }
    )
  }

  useEffect(() => {
    const fetch = async () => {
      const todo = await axios.get(`http://localhost:3000/Todo/${params.id}`)
      setupdateform(todo.data) 
    }
    fetch()
  }, [params.id]) 
  const handlesubmit = async () => {
    await axios.put(`http://localhost:3000/Todo/${params.id}`, updateform)
    navigate('/ListProduit')
  }

  return (
    <div><form>


      <div className="mb-3">
        <label htmlFor="nom" className="form-label"></label>
        <input type="text" onChange={handlechange} className="form-control" id="nom" aria-describedby="emailHelp" value={updateform.nom} />

      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">  </label>
        <input type="text" onChange={handlechange} className="form-control" value={updateform.description} id="description" />
      </div>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label"></label>
        <input type="number" onChange={handlechange} className="form-control" id="prix" aria-describedby="emailHelp" value={updateform.prix} />

      </div>
      <div className="mb-3">
        <label htmlFor="quantite" className="form-label">  </label>
        <input type="number" onChange={handlechange} className="form-control" value={updateform.quantite} id="quantite" />
      </div>


      <button type="submit" className="btn btn-primary w-100" onClick={handlesubmit} class="btn btn-success">update Produit</button>
    </form></div>
  )
}

export default ModifierProduit