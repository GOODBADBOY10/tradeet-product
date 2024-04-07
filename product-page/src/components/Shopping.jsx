import React, { useState } from 'react'
import { FaBitbucket, FaHeart, FaSignInAlt, FaSignOutAlt, FaTrashAlt } from 'react-icons/fa'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Shopping = () => {

    const initialState = 1
    const [count, setCount] = useState(initialState)

    const [showWishlist, setShowwishlist] = useState(true)

  return (
    <>
    {showWishlist ? 
      <div className='px-10 py-3'>
        <div className='flex gap-2 w-full md:flex md:w-full'>
            <button className='w-full bg-deepBlue text-whiteWhite md:w-full h-12 border border-black'>My Shopping Bag</button>
            <button className='w-full h-12 border border-black md:ml-3' onClick={() => setShowwishlist(false)}>Wishlist</button>
        </div>
        <div className='md:my-3'>
            <Link to='/' className='underline' >Continue Shopping</Link>
        </div>
        <div className='shopping-bag md:flex md:w-full'>
            <div className='w-full'>
            <div className='goods flex items-center md:w-full md:flex md:mb-4'>
                <img src='./src/assets/15.jpg' alt='' className='w-full h-48 md:w-48 md:h-48' />
                <div className='w-full'>
                    <div className='flex justify-between items-center md:flex md:justify-between'>
                        <h2 className='md:font-medium md:text-xl'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='font-bold mb-1 text-md md:mb-6'>N15,000</h2>
                    <div className='flex justify-between md:flex md:justify-between'>
                        <div className='counter border border-black mb-3 md:w-36'>
                            <button className='w-10 h-10 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-10 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-10 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-900' />
                    </div>
                </div>
            </div>
            <div className='goods md:w-full flex md:mb-4'>
                <img src='./src/assets/15.jpg' alt='' className='w-full md:w-48 h-48' />
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <h2 className='md:font-medium md:text-xl'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='font-bold text-md mb-1'>N15,000</h2>
                    <div className='flex justify-between'>
                        <div className='counter border border-black mb-6 md:w-36'>
                            <button className='w-10 h-10 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-10 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-10 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-900' />
                    </div>
                </div>
            </div>
            <div className='goods w-full flex'>
                <img src='./src/assets/15.jpg' alt='' className='w-full h-48 md:w-48 md:h-48' />
                <div className='w-full'>
                    <div className='flex justify-between'>
                        <h2 className='md:font-medium md:text-xl'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-6'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='font-bold text-md mb-1'>N15,000</h2>
                    <div className='flex justify-between'>
                        <div className='counter border border-black mb-6 md:w-36'>
                            <button className='w-10 h-10 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-10 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-10 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-900' />
                    </div>
                </div>
            </div>
            </div>
            <div className='order-summary md:w-full md:ml-3'>
                <h2 className='text-xl font-medium mb-3'>Order Summary</h2>
                <table className='border text-center border-black w-full'>
                    <tr>
                        <th>Discounts</th>
                        <th>Apply discounts</th>
                    </tr>
                    <tr>
                        <td>Order value</td>
                        <td>$144</td>
                    </tr>
                    <tr>
                        <td>Discounts</td>
                        <td className='text-red-500'>61%</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>FREE</td>
                    </tr>
                    <tr>
                        <th>TOTAL</th>
                        <th>$130</th>
                    </tr>
                </table>
                <button className='bg-deepBlue my-6 w-full h-12 text-whiteWhite rounded-md md:mt-4 md:mb-4'><Link to='/shipping'>Continue to Checkout</Link></button>
                <p>Shop now, pay in 30 days. For members of 2LAC with 30% discounts. For new members, First Purchase</p>
                <a href='#' className='font-medium text-lg mb-4'>Learn more</a>
                <h3 className='text-xl my-4'>We accept</h3>
                <div className='flex justify-between mb-5'>
                    <span className='font-bold'>Flutterwave</span>
                    <span className='font-bold'>Visa</span>
                    <span className='font-bold'>MasterCard</span>
                </div>
                <p className='mt-4'>The estimated tax will be confirmed when you have added your shipping address in Checkout</p>
            </div>
        </div>
      </div>
      : 
      <div className='px-10 py-3'>
        <div className='flex gap-3 w-full'>
            <button className='text-lg w-full h-12 border border-black' onClick={() => setShowwishlist(true)}>My Shopping Bag</button>
            <button className='bg-deepBlue text-whiteWhite rounded-md w-full h-12 border border-black md:ml-4'>Wishlist</button>
        </div>
        <div className='md:my-3'>
            <Link to='/' className='underline' >Continue Shopping</Link>
        </div>
        <div className='shopping-bag'>
            <div className='goods flex mb-3'>
                <img src='./src/assets/15.jpg' alt='' className='w-full md:w-48 h-48'  />
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium text-lg'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='mt-1 text-lg font-medium'>N15,000</h2>
                    <div className='flex justify-between gap-2 md:items-center md:gap-3 md:mt-6'>
                        <button className='border border-black bg-deepBlue h-14 text-whiteWhite' onClick={() => setShowwishlist(true)}>Send to Cart</button>
                        <div className='counter flex border border-black'>
                            <button className='w-10 h-14 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-14 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-14 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-800'/>
                    </div>
                </div>
            </div>
            <div className='goods flex mb-3'>
                <img src='./src/assets/15.jpg' alt='' className='w-full md:w-48 h-48'  />
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium text-lg'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='mt-1 text-lg font-medium'>N15,000</h2>
                    <div className='flex justify-between gap-2 md:items-center md:gap-3 md:mt-6'>
                        <button className='border border-black bg-deepBlue h-14 text-whiteWhite' onClick={() => setShowwishlist(true)}>Send to Cart</button>
                        <div className='counter flex border border-black'>
                            <button className='w-10 h-14 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-14 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-14 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-800'/>
                    </div>
                </div>
            </div>
            <div className='goods flex mb-3'>
                <img src='./src/assets/15.jpg' alt='' className='w-full md:w-48 h-48'  />
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium text-lg'>Red sleeveless dress</h2>
                        <FaTrashAlt />
                    </div>
                    <div className='my-3'>
                        <label htmlFor='male' className='mr-3'>M<input type='checkbox' id='male' className='ml-1' /></label>
                        <label htmlFor='female'>F<input type='checkbox' id='female' className='ml-1' /></label>
                    </div>
                    <h2 className='mt-1 text-lg font-medium'>N15,000</h2>
                    <div className='flex justify-between gap-2 md:items-center md:gap-3 md:mt-6'>
                        <button className='border border-black bg-deepBlue h-14 text-whiteWhite' onClick={() => setShowwishlist(true)}>Send to Cart</button>
                        <div className='counter flex border border-black'>
                            <button className='w-10 h-14 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
                            <button className='w-10 h-14 border border-black text-3xl'>{count}</button>
                            <button className='w-10 h-14 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
                        </div>
                        <FaHeart className='text-red-800'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      }
      <div className='md:grid md:grid-cols-5 md:gap-3 w-full md:flex md:items-center md:gap-3 md:w-full'>
        <div className='flex md:flex-col md:w-30 mb-4 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/12.jpg' className='h-36 w-full md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm mb-3'>Cropped Top Yellow</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium mb-3'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 border bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/2.jpg' className='w-full md:w-full h-36 md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Agbada Red</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>N 3000</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/15.jpg' className='w-full h-36 md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/5.jpg' className='w-full h-36 md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 drop-shadow-2xl bg-white-700 shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/5.jpg' className='w-full h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>20 Vests</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
        </div>
        <div className='md:grid md:grid-cols-5 md:gap-3 w-full md:flex md:items-center md:gap-3 md:w-full'>
        <div className='flex md:flex-col md:w-30 mb-4 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/12.jpg' className='h-36 w-full md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm mb-3'>Cropped Top Yellow</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium mb-3'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 border bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/2.jpg' className='w-full md:w-full h-36 md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Agbada Red</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>N 3000</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/15.jpg' className='w-full h-36 md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/5.jpg' className='w-full h-36 md:w-full md:h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
            <div className='flex mb-3 md:flex-col md:w-30 drop-shadow-2xl bg-white-700 shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/5.jpg' className='w-full h-36' alt='' />
                <div className='w-full px-3 md:px-4 md:mt-2'>
                <h6 className='font-medium text-sm'>20 Vests</h6>
                <div className='flex items-center justify-between'>
                    <p className='font-medium'>FREE</p>
                    <div className='flex items-center'>
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStar className='text-yellow-400' />
                    <FaStarHalf className='text-yellow-400' />
                    </div>
                </div>
                <div className='flex items-center mt-1'>
                <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
                <p className='ml-2'>yooo</p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shopping
