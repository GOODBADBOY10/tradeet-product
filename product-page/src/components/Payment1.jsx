import React from 'react'
import { Link } from 'react-router-dom'

const Payment1 = () => {
  return (
    <div>
      <div className='container w-screen w-full px-6 m-auto md:w-full md:px-10 md:py-3'>
    <div className='w-full md:flex'>
      <div className='w-full md:w-full'>
        <h1 className='font-bold text-xl'>Contact</h1>
        <div>
            <form>
                <div className='mt-2'>
                <label className='text-lg'>Email: </label>
                 <input type='email' placeholder='johndoe@gmil.com' className='border h-10 outline-0 w-full px-2 text-base border-black rounded'/>
                </div>
                <div className='mt-2'>
                    <label className='block'>Address</label>
                    <textarea placeholder='enter your address' className='border border-black h-14 w-full'></textarea>
                </div>
            </form>
            <div>
                <h2 className='font-mediun text-xl mb-4'>Payment Method</h2>
                <div className='border p-1 border-black flex justify-between mb-3'>
                <label className='block' htmlFor='card'>Pay with Card</label>
                <input type='radio' id='card' name='delivery' checked/>
                </div>
                <div className='border p-1 border-black flex justify-between'>
                <label className='block' htmlFor='card'>Pay on Delivery</label>
                <input type='radio' id='card' name='delivery'/>
                </div>
            </div>
        </div>
      </div>
      {/* Other section */}
      <div className='md:w-full hidden md:block md:ml-6'>
        <div className='image md:flex w-full'>
            <div className=''>
            <img src='./src/assets/15.jpg' alt='' className='md:w-48 md:h-48' />
            </div>
            <div>
            <h3>Red sleeveless dress</h3>
            <div className=''>
                <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
            </div>
            <h2 className='font-bold text-md mb-6'>N15,000</h2>
            </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
            <h5>Subtotal:</h5>
            <h6>N15,000</h6>
        </div>
        <hr></hr>
        <div className='flex items-center justify-between mt-5'>
            <h5>Shipping:</h5>
            <h6>N5,000</h6>
        </div>
        <hr></hr>
        <div className='flex items-center justify-between mt-5'>
            <h5>Total:</h5>
            <h6>N20,000</h6>
        </div>
      </div>
    </div>
    <div className='mt-2'>
      <input type='checkbox' />
     <label className='ml-1'>Save this information for next time</label>
    </div>
    <div className='text-center mt-3'>
    <button className='border border-black rounded bg-deepBlue w-full h-10 text-whiteWhite inline-block'><Link to='/hurray'>Pay Now</Link></button>
    </div>
    <div className='text-center mt-5'>
    <button className='border border-black rounded bg-deepBlue w-full h-10 text-whiteWhite inline-block'><Link to='/shipping'>Go Back</Link></button>
    </div>
    </div>
    </div>
  )
}

export default Payment1