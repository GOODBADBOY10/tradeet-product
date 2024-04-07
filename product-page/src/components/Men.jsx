import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div className='mx-auto w-screen border border-black md:w-full md:px-24'>
      {/* Kids clothing */}
      <div className='relative md:block md:mt-4'>
            <img src='./src/assets/12.jpg' alt='' className='w-96 h-96 md:w-full md:h-96' />
            <div className='w-72 h-24 bg-blackBlack absolute top-48 left-14 text-center md:w-96 md:h-36 md:top-36 md:left-72'>
                <h3 className='mt-1 text-whiteWhite md:text-xl md:mt-5'>Explore Your options: Free and Premium Products Await You!</h3>
                <button className='rounded w-32 h-6 px-1 mt-1 text-whiteWhite bg-deepBlue text-sm md:w-11/12 md:h-12 md:mt-3 md:text-lg'><Link to='/eachitem'>Shop Now</Link></button>
                </div>
        </div>
        <div>
        <h3 className='font-medium text-lg mb-4'>Today's Deals <a href='#' className='underline text-sm'>see all items</a></h3>
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
        </div>
        {/* items 2 */}
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
        {/* item 3 */}
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
      {/* Kids clothing */}
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
    </div>
  )
}

export default Men
