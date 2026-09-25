import React, { useState } from 'react'   


const App = () => {
  
   const [task, setTask] = useState([]) 

      async function getData(){
      const response = await fetch("https://picsum.photos/v2/list")
      const data = await response.json()
      setTask(data)
      console.log(data)
     }

  
   
  return (   
    <div>
      {
       task.map(function(e, idx){
        return <><h1>{e.author} {idx}</h1>
         <img src={e.download_url} width = "300px" />
        </>
       })
      }
     <button onClick={getData} style={{fontSize:"33px"}}>get Data </button>
    </div>
  )
}

export default App;
