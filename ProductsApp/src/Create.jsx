import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [name,setName]=useState()

    const handleAdd=()=>{
        axios.post('https://ph726.azurewebsites.net/add',{name}).then(result=> location.reload())
        .catch(err=> console.error(err))
    }
    return (
    <div>
      <input type="text" name="name" id="" onChange={(e)=> setName(e.target.value)}/>
      {/* <input type="text" name="price" id=""/>
      <input type="text" name="description" id=""/> */}
      <button type='button' onClick={handleAdd}>Add Product</button>
    </div>
  )
}

export default Create
