import React, { useEffect, useState } from 'react'

const ManageProducts = () => {

const [products, setProducts] = useState ([])

const getProductsList = async()=>{
    let result = await fetch ("https://fakestoreapi.com/products")
    result = await result.json ()
    console.log(result)
    setProducts (result)
   }


      useEffect ( ()=>{
        getProductsList()
       }, []);

       const deleteProduct = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
      };
    


       
  return (
    <div>
      <h1 className='text-center text-4xl mb-4'>Managing Products</h1>

      <table align={"center"} width={"70%"} cellPadding={"10px"} cellSpacing={"5px"} className='table table-bordered'>
        <tr style={{backgroundColor: "blue", color: "white"}}>
          <td>Sr.No.</td>
          <td>Title</td>
          <td>Price</td>
          <td>Category</td>
          <td>Rating</td>
          <td>Operations</td>
        </tr>
        {
         products.map ((item, index)=>{
          return (
            <>
            <tr style={{backgroundColor: "lightblue"}}>
              <td>{index +1}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.rating.rate}</td>
              <td>

                <button onClick={()=>deleteProduct(index)} style={{border: "none", backgroundColor: "red", borderRadius: "5px", color: "white", padding: "2px 5px"}}>Delete</button>
              </td>
            </tr>
            
            </>
          )
         })
        }
      </table>



    </div>
  )
}

export default ManageProducts
