import React from 'react'



const Home = () => {
  
  return (
    <div className='home text-center'>

   <div>
  <header style={{backgroundColor: '#333', color: 'white', padding: 20, textAlign: 'center'}}>
    <h1 style={{margin: 0}}>Welcome to My E-commerce Site</h1>
  </header>
 
  <main style={{padding: 20, textAlign: 'center'}}>
    <section style={{maxWidth: 1000, margin: 'auto'}}>
      <h2 className='text-5xl'>Lightweight Super Soft Easy Care Microfiber 3-Piece Bed Sheet Set </h2>
      <img src="https://m.media-amazon.com/images/I/71ZxgS1cu+L._AC_SX679_.jpg" alt="Featured Product" style={{width: '1000px', height: '500px', margin: '10px 0'}} />
      <p className='text-2xl'>
        <span className='text-4xl'>About this product</span> <br />
        <ol className='text-left'>
  <li>100% Polyester Microfiber</li>
  <li>Imported</li>
  <li>Sheet set for creating a comfortable sleeping space and cozy bedroom environment</li>
  <li>Includes a Twin XL (Extra-Long) bed sheet with a (1) 66 x 96 inch flat sheet, (1) 39 x 80 x 14 inch fitted sheet, and (1) 20 x 30 inch Standard pillowcase</li>
  <li>Polyester microfiber material offers strength and durability with exceptional softness</li>
</ol>

      </p>
      <a href="#" style={{display: 'inline-block', padding: '10px 20px', marginTop: '20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: 5}}>Shop Now</a>
    </section>
  </main>
</div>


    </div>
  )
}

export default Home
