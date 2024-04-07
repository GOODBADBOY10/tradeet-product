import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const EachItem = () => {
  const initialState = 1

  const [count, setCount] = useState(initialState)
  const [showReview, setShowReview] = useState(true)

  return (
    <>
      <div className='container w-full px-6 md:flex md:px-10 md:py-3'>
        {/* Each Item */}
         <div className='w-full item-image md:w-full'>
            <div className='each-item'>
                <img src='./src/assets/15.jpg' alt='' className='h-72 w-full md:w-full md:h-96' />
            </div>
            <div className='small-image w-full flex gap-2 mt-3 md:flex md:items-center md:gap-3 md:mt-4'>
                <img src='./src/assets/15.jpg' alt='' className='w-full h-48 md:w-48 md:h-48' />
                <img src='./src/assets/15.jpg' alt=''  className='w-full h-48 md:w-48 md:h-48' />
                <img src='./src/assets/15.jpg' alt=''  className='h-48 hidden md:block md:w-48 md:h-48' />
            </div>
        </div>
        <div className='item-details md:w-full md:ml-4'>
            <h2 className='text-xl md:text-2xl md:font-medium md:text-blackBlack'>White Dress</h2>
            <div className='flex mt-4 justify-between md:mt-6 md:w-full md:h-16 md:flex md:items-center'>
            <h4 className='font-medium'>N15000</h4>
            <h5 className='line-through md:ml-3 md:text-base'>N24000</h5>
            <span className='md:ml-3 md:text-base text-whiteWhite border border-black w-10 bg-red-700 h-6 px-1'>61%</span>
            </div>
            <h3 className='md:text-xl md:text-blackBlack md:mt-6 hidden md:block'>Available Variation</h3>
            {/* Color */}
            <div className='flex justify-between md:hidden'>
           <div className='mb-6 mt-4'>
            <label className='mr-4'>Color:</label>
            <select className='border border-black'>
                <option value='' default>Black</option>
                <option>Red</option>
                <option>Blue</option>
                <option>White</option>
                <option>Green</option>
                <option>Purple</option>
            </select>
           </div>
           {/* Size */}
           <div className='mb-6 mt-4'>
            <label className='mr-4'>Size:</label>
            <select className='border border-black'>
                <option value='' default>XXL</option>
                <option>XL</option>
                <option>L</option>
                <option>md</option>
                <option>sm</option>
                <option>xsm</option>
            </select>
           </div>
           </div>
           <div className='counter mb-6'>
            <button className='w-10 h-10 border border-black text-3xl' onClick={() => setCount((count - 1))}>-</button>
            <button className='w-10 h-10 border border-black text-3xl'>{count}</button>
            <button className='w-10 h-10 border border-black text-3xl'  onClick={() => setCount((count + 1))}>+</button>
           </div>
            <div className=''>
            <button className='w-full h-12 bg-deepBlue text-center text-whiteWhite md:w-full md:h-14 flex justify-center items-center'><Link to='/shopping'>Add to Cart</Link><FaPlus className='ml-2'/></button>
            <button className='w-full h-12 mt-4 text-blackBlack border rounded md:w-full md:h-14 md:mt-4 md:text-lg'><Link to='/shopping'>Add to Wishlist</Link></button>
            </div>
        </div>
      </div>
      {/* Links to social */}
      <div className='px-10 py-4 md:px-10 md:py-3'>
        <h3 className='md:mb-2'>Share this Product</h3>
        <div className='flex items-center md:flex md:items-center'>
            <a href='' className='mr-3 rounded rounded-full border border-black p-1'><FaTwitter className='text-xl' /> </a>
            <a href='' className='mr-3 rounded rounded-full border border-black p-1'><FaFacebook className='text-xl' /> </a>
            <a href='' className='rounded rounded-full border border-black p-1'><FaInstagram className='text-xl' /> </a>
        </div>
      </div>
      {/* Description */}
      <div className='px-10 py-3 md:px-10 md:py-3'>
      <div className='w-full flex items-center py-3 mt-2 bg-zinc-600 md:flex md:items-center mt-3 md:py-3'>
        <img src='./src/assets/underwomenreview.jpg' alt='' className='w-8 h-8 rounded-full' />
        <p className='md:ml-2'>sold by <strong>Nonso Seun</strong></p>
      </div>
      </div>
      {/* Description and reviews */}
     { showReview ? 
     <div className='px-10 py-3 md:px-10 md:py-3'>
        <div className='hidden description md:flex md:block'>
        <button className='text-whiteWhite bg-deepBlue border rounded md:w-full md:h-14 md:mt-4 md:text-lg md:mr-3' onClick={() => setShowReview(true)}>Descriptions</button>
        <button className='text-blackBlack border border-black rounded md:w-full md:h-14 md:mt-4 md:text-lg' onClick={() => setShowReview(false)}>Reviews</button>
        </div>
        <h2 className='md:hidden text-xl font-bold mb-4'>Description</h2>
        <div className='md:mt-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error magnam qui aliquam, iusto nam, consequatur, voluptatum voluptatem a ipsam cumque. Possimus vero ex dignissimos consequuntur dolorum illum ea temporibus necessitatibus, magni provident voluptatibus expedita nostrum totam a, voluptatum iste voluptas aspernatur architecto pariatur sunt error quia quidem deleniti! Vero qui eaque officiis atque, iure omnis deleniti alias magnam maiores ab placeat. Excepturi repellat saepe, esse qui suscipit perferendis beatae quod maxime. Omnis non, quam maiores doloribus natus aperiam blanditiis. Quaerat distinctio vel nostrum nam illo tempora quod, eos ex, reprehenderit, quos repellat sint fugit sed doloribus ea voluptate velit iste? Maxime, qui debitis similique blanditiis iusto dicta sapiente id unde? Mollitia illo magni velit reprehenderit, voluptates dolore fuga tenetur et. Vel corporis quia illo alias inventore ea voluptas laboriosam delectus, repudiandae eum cum! Saepe adipisci consectetur reprehenderit quibusdam totam aliquid placeat eos ab officiis, pariatur, veritatis optio nemo aspernatur molestias iste ea delectus? Neque, nisi quisquam deleniti suscipit quas minima molestias iure, accusamus facilis quia dolore officiis similique tempore necessitatibus modi obcaecati odit sunt eum tenetur deserunt libero? Aut hic veritatis accusamus quo alias tenetur possimus delectus quasi quidem vel neque vero veniam, esse eum maxime consectetur nesciunt ex! Aspernatur corporis dolores, delectus beatae rem quis velit nulla fugit quod ea voluptatibus ratione, corrupti aut praesentium. Molestias iure blanditiis quae quisquam facilis soluta totam neque! Vero at nostrum nihil facere quisquam nobis aperiam eligendi harum architecto animi optio temporibus ipsum, excepturi unde! Quos beatae, repellat unde reiciendis similique nihil minima maiores ducimus maxime nisi fuga sapiente nobis saepe ea dolores, nemo ullam provident ipsam quo? Recusandae nesciunt, obcaecati tempore deleniti labore fugiat omnis, minima quae velit enim exercitationem aspernatur repellendus perferendis culpa deserunt, ut molestiae dolor assumenda ea nemo veniam. Consequatur consequuntur beatae dolor, reprehenderit vel sequi nesciunt temporibus ad quam maiores veritatis rem quae perferendis, molestias expedita repellendus provident reiciendis commodi voluptates? Sequi fugit odio enim necessitatibus temporibus quas? Eaque quibusdam inventore explicabo ullam consequuntur quia expedita sed vitae perferendis possimus, reiciendis alias velit recusandae debitis! Dicta facere suscipit vero ipsum perferendis et animi cumque corporis esse sapiente consequuntur saepe quo accusamus quibusdam eligendi repudiandae quisquam pariatur ipsa, fugiat quidem similique nostrum laborum? Ipsum, voluptatibus nulla consequuntur blanditiis necessitatibus cum provident unde odio fugit eveniet dolore doloribus totam minima ex fugiat, eos possimus cupiditate, impedit ea numquam? Tenetur ducimus enim expedita quis quisquam architecto. Recusandae voluptates animi non!</p>
        </div>
        <div className='md:hidden text-xl font-bold'>Customer Reviews</div>
        <div className='md:hidden'>
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='flex mb-4 md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person flex items-center md:flex md:items-center'>
                <img src='./src/assets/16.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        <div className='rev-1 mt-4 rounded-xl border border-black p-2 md:hidden'>
            <div className='flex mb-4 md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person flex items-center md:flex md:items-center'>
                <img src='./src/assets/16.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        <div className='rev-1 mt-4 rounded-xl border border-black p-2 md:hidden'>
            <div className='flex mb-4 md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person flex items-center md:flex md:items-center'>
                <img src='./src/assets/16.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        : <div className='md:px-10 md:py-3'>
        <div className='description hidden md:flex md:block'>
        <button className='text-blackBlack border border-black rounded md:w-full md:h-14 md:mt-4 md:text-lg md:mr-3' onClick={() => setShowReview(true)}>Descriptions</button>
        <button className='text-whiteWhite bg-deepBlue rounded md:w-full md:h-14 md:mt-4 md:text-lg' onClick={() => setShowReview(false)}>Reviews</button>
        </div>
      <div className='reviews md:flex md:items-center md:gap-5 md:mt-5'>
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/16.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        {/* Review 2 */}
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/17.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
        {/* Review 3 */}
        <div className='rev-1 rounded-xl border border-black p-2'>
            <div className='md:flex'>
                <FaStar className='mr-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1' />
                <FaStar className='mx-1'/>
                <FaStar className='mx-1' />
            </div>
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis unde blanditiis nobis nihil, magni earum iure dolore ab at laudantium ex quibusdam ipsa, quaerat explicabo corporis commodi qui dolor eius facilis itaque assumenda nisi incidunt alias. Facilis, obcaecati ipsam."</p>
            <div className='person md:flex md:items-center'>
                <img src='./src/assets/18.png' alt='' className='w-10 h-10 border rounded-full' />
                <div className='md:ml-3'>
                    <h6>Rasheed Alamu</h6>
                    <p>United States</p>
                </div>
            </div>
        </div>
      </div>
    </div>
     }
    </>
  )
}

export default EachItem
