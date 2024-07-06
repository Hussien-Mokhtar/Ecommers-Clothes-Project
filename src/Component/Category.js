import { useState,useEffect } from "react"
export default function Category() {

    const [cate,setCate]= useState([])
    useEffect( () =>{
  fetch ("https://fakestoreapi.com/products/categories").then((response) =>{
    return response.json()
  })
  .then((data) =>{
    setCate(data)
  })
    },[])
  return (
    <>
      <div className="catee">
      <h1>Category</h1>
     

           
           <ul className="aaa">

         {
            
        cate.map((catte) =>{
            return(
                <li key={catte}>{catte}</li>

            )
        })

        }


           </ul>


           </div>

    </>
  )
}
