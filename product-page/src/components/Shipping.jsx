import React from 'react'
import { Link } from'react-router-dom'

const Shipping = () => {
  return (
    <div className='container px-6 w-full w-screen md:w-full md:px-10 md:py-3'>
    <div className='w-full md:flex md:w-full'>
      <div className='w-full md:w-full'>
        <h1 className='font-bold mb-3 text-xl'>Shipping Address</h1>
        <div>
            <form>
                <div className='md:flex md:items-center gap-4'>
                  <div className=''>
                    <label className='text-lg block'>First Name: </label>
                     <input type='text' placeholder='enter your first name' className='border w-full h-10 outline-0 px-2 text-base border-black rounded' />
                </div>
                <div className=''>
                <label className='text-lg block'>Last Name: </label> 
                <input type='text' placeholder='enter your last name' className='border w-full outline-0 h-10 px-2 text-base border-black rounded' />
                </div>
                </div>
                <div className='mt-2'>
                <label className='text-lg block'>Email: </label>
                <input type='email' placeholder='enter your email' className='border w-full h-10 outline-0 px-2 text-base border-black rounded' />
                </div>
                <div className='mt-2'>
                <label className='text-lg block'>Category: </label>
                <input type='text' className='border h-10 w-full outline-0 px-2 text-base border-black rounded' />
                </div>
                <div className='mt-2'>
                  <label className='block'>Address</label>
                  <textarea placeholder='enter your address' className='border border-black w-full px-2 h-14'></textarea>
                </div>
                <div className='md:flex md:items-center gap-3'>
                <div>
                <label className='text-lg block'>City: </label>
                 <input type='text' placeholder='enter your city' className='border h-10 w-full outline-0 px-2 text-base border-black rounded' />
                </div>
                <div>
                <label className='text-lg block'>State: </label>
                 <input type='text' placeholder='enter your state' className='border h-10 w-full outline-0 px-2 text-base border-black rounded' />
                </div>
                <div>
                <label className='text-lg'>Postal Code: </label>
                 <input type='text' placeholder='enter your postal code' className='border h-10 w-full outline-0 px-2 text-base border-black rounded' />
                </div>
                </div>
                <div className='mt-2'>
                <label className='text-lg'>Phone Number: </label> 
                <input type='number' placeholder='enter your phone number' className='border w-full outline-0 h-8 px-2 text-base border-black rounded' />
                </div>
                <div className='mt-2'>
                    <input type='checkbox' />
                    <label className='ml-1'>Save this information for next time</label>
                </div>
            </form>
        </div>
      </div>
      {/* Other section */}
      <div className='w-full hidden md:block md:w-full md:ml-8 py-5'>
        <div className='image md:flex w-full'>
            <div className=''>
            <img src='./src/assets/15.jpg' alt='' className='w-full md:w-48 md:h-48' />
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
    <div className='text-center mt-4'>
    <button className='border border-black bg-deepBlue w-full h-10 text-whiteWhite'><Link to='/payment1'>Continue</Link></button>
    </div>
    </div>
  )
}

export default Shipping