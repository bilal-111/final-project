import React from 'react'

const Card = ({data, loading, error}) => {

    if(loading){
        return <h1>Loading.....</h1>
    };

    if (error !== null){
        return <h1>Something went wrong</h1>
    };

  return (
    <div className='flex flex-wrap gap-10'>
     {
        data.map ((item)=>{
            return (
                <div className="h-90 my-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
               <img className="rounded-t-lg h-56 mx-auto my-2" src={item.image} alt="" />
               </a>
              <div class="p-5">
             <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </a>
             <a href="#">
            <p class="mb-2 tracking-tight text-gray-500"> {item.description}</p>
            </a>
            
           <h3 class="mb-3 text-2xl font-normal text-black-700 dark:text-gray-400">Price: {item.price}</h3>
             <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
            )
        })
     }
    </div>
  )
}

export default Card
