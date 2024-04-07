import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalf } from 'react-icons/fa'

const Fashion = () => {
  return (
    <div className='overflow-hidden w-screen w-full border md:w-full md:px-20'>
        {/* Clothe heading */}
        <div>
      <div className='container flex items-center w-full w-screen gap-2 md:flex md:align-center md:gap-4 md:w-full md:'>
        <div className='relative w-full md:w-11/12'>
            <img src='./src/assets/women.jpg' alt='' className='w-full h-60 md:w-full md:h-96' />
            <div className='w-36 h-16 bg-blackBlack absolute top-36 left-6 text-center md:top-64 md:left-24 md:w-72 md:h-24'>
                <h3 className='mt-1 text-whiteWhite'>Womens Clothing</h3>
                <button className='rounded w-32 h-6 px-1 mt-1 text-whiteWhite bg-deepBlue text-sm md:h-10 md:w-60 md:mt-2'><Link to='./women'>Shop Now</Link></button>
                </div>
        </div>
        <div className='relative w-full md:w-11/12'>
            <img src='./src/assets/men.jpg' alt='' className='w-full h-60 md:w-full md:h-96' />
            <div className='w-36 h-16 bg-blackBlack absolute top-36 left-6 text-center md:top-64 md:left-24 md:w-72 md:h-24'>
                <h3 className='mt-1 text-whiteWhite'>Mens Clothing</h3>
                <button className='rounded w-32 h-6 px-1 mt-1 text-whiteWhite bg-deepBlue text-sm md:h-10 md:w-60 md:mt-2'><Link to='./men'>Shop Now</Link></button>
                </div>
        </div>
        </div>
        <div className='relative w-full mt-2 w-screen md:hidden'>
            <img src='./src/assets/kidsmall.jpg' alt='' className='w-full h-48' />
            <div className='w-48 h-16 bg-blackBlack absolute top-24 left-20 text-center'>
                <h3 className='mt-1 text-whiteWhite'>Kids Clothing</h3>
                <button className='rounded w-32 h-6 px-1 mt-1 text-whiteWhite bg-deepBlue text-sm'><Link to='./kids'>Shop Now</Link></button>
                </div>
        </div>
      </div>
        {/* Women item */}
      <div>
        <h3 className='md:text-lg md:font-medium'>Women clothing's <Link to='./women' className='underline text-sm'>see all items</Link></h3>
        <div className='flex items-center'>
        {/* <FaAngleLeft className='text-xl cursor-pointer bg-deepGray text-whiteWhite rounded-full border border-black' /> */}
        <div className='grid grid-cols-3 gap-3 w-full md:flex md:items-center md:gap-3 md:w-full'>
        <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/underwomen.png' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Cropped Top Yellow</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 border bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/2ndwomen.png' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Agbada Red</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/slipperswomen.png' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl bg-white-700 shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/3rdwomen.jpg' className='w-20 h-24 border md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>2 piece</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/vestwomen.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='text-sm font-medium'>20 white vests</h6>
                <div className='flex align-center justify-between'>
                    <p className='font-medium'>N 1500</p>
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
        {/* <FaAngleRight  className='text-xl cursor-pointer bg-deepGray text-whiteWhite rounded-full border border-black' /> */}
        </div>
        </div>
      {/* Kids clothing */}
      <div className='relative hidden md:block md:mt-4'>
            <img src='./src/assets/kids.jpg' alt='' className='w-96 h-6/12 md:w-full md:h-80' />
            <div className='w-36 h-16 bg-blackBlack absolute top-36 left-14 text-center md:w-96 md:h-36 md:top-36 md:left-72'>
                <h3 className='mt-1 text-whiteWhite md:text-xl md:mt-5'>Kids Clothings and Accessories</h3>
                <button className='rounded w-32 h-6 px-1 mt-1 text-whiteWhite bg-deepBlue text-sm md:w-11/12 md:h-12 md:mt-3 md:text-lg'><Link to='./kids'>Shop Now</Link></button>
                </div>
        </div>
        {/* Men clothing */}
        <div>
        <h3 className='md:text-lg font-medium'>Men clothing's <Link to='./men' className='underline text-sm'>see all items</Link></h3>
        <div className='grid grid-cols-3 gap-3 w-full md:flex md:items-center md:gap-3 md:w-full'>
        <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/men.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Cropped Top Yellow</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 border bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/2.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Agbada Red</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/3.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl bg-white-700 shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/4.jpg' className='w-20 h-24 border md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>2 piece</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/5.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='text-sm font-medium'>20 white vests</h6>
                <div className='flex align-center justify-between'>
                    <p className='font-medium'>N 1500</p>
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
      {/* Kids clothing */}
        <div>
        <h3 className='md:font-medium md:text-lg'>Kids clothing's <Link to='./kids' className='underline text-sm'>see all items</Link></h3>
        <div className='grid grid-cols-3 gap-3 w-full md:flex md:items-center md:gap-3 md:w-full'>
        <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/6.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Cropped Top Yellow</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 border bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/7.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Agbada Red</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 bg-white-700 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/8.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>Nike Slides and Hp elitebook</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl bg-white-700 shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/11.png' className='w-20 h-24 border md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='font-medium text-sm'>2 piece</h6>
                <div className='flex align-center justify-between'>
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
            <div className='w-30 drop-shadow-2xl shadow-lg md:py-3 md:px-2 md:w-48'>
                <img src='./src/assets/10.jpg' className='w-20 h-24 md:w-36 md:h-36' alt='' />
                <div className='px-4 mt-2'>
                <h6 className='text-sm font-medium'>20 white vests</h6>
                <div className='flex align-center justify-between'>
                    <p className='font-medium'>N 1500</p>
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
    </div>
  )
}

export default Fashion
