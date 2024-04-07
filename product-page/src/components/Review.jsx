import React from 'react'
import { FaStar } from 'react-icons/fa'

const Review = () => {
  return (
    <div>
        <div className='description md:flex'>
        <button className='text-whiteWhite bg-deepBlue border border-black rounded md:w-full md:h-14 md:mt-4 md:text-lg md:mr-3' onClick={() => setShowReview(true)}>Descriptions</button>
        <button className='text-blackBlack border border-black rounded md:w-full md:h-14 md:mt-4 md:text-lg' onClick={() => setShowReview(false)}>Reviews</button>
        </div>
      <div className='reviews md:flex md:items-center md:gap-5'>
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/16.png' alt='' className='w-10 h-10 border border-black rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        {/* Review 2 */}
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/17.png' alt='' className='w-10 h-10 border border-black rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        {/* Review 3 */}
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/18.png' alt='' className='w-10 h-10 border border-black rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Review
