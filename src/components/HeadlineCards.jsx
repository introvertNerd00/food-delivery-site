import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
        {/* <div className="card" */}
        <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* <div className="card-overlay"> */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className="card-title font-bold text-2xl px-2 pt-4 ">Sun's Out, BOGO's Out</p>
                <p className="card-text px-2">Through 8/26</p>
                <button className="card-button border-white bg-white text-black mx-2 absolute bottom-4 font-bold">Order Now</button>
            </div>
            <img className="card-image max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/11912788/pexels-photo-11912788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="summer game"/>
        </div>

           {/* <div className="card" */}
           <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* <div className="card-overlay"> */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className="card-title font-bold text-2xl px-2 pt-4 ">New Resturants</p>
                <p className="card-text px-2">Added Daily</p>
                <button className="card-button border-white bg-white text-black mx-2 absolute bottom-4 font-bold">Order Now</button>
            </div>
            <img className="card-image max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/17650195/pexels-photo-17650195/free-photo-of-various-food-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Resturants"/>
        </div>

           {/* <div className="card" */}
           <div className='rounded-xl relative hover:scale-105 duration-300'>
            {/* <div className="card-overlay"> */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className="card-title font-bold text-2xl px-2 pt-4 ">We deliver Desserts Too</p>
                <p className="card-text px-2">Tasty Treats</p>
                <button className="card-button border-white bg-white text-black mx-2 absolute bottom-4 font-bold">Order Now</button>
            </div>
            <img className="card-image max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/11719204/pexels-photo-11719204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Desserts"/>
        </div>
    </div>
  )
}

export default HeadlineCards