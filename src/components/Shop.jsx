import React from 'react';
import { FaList, FaTh } from "react-icons/fa";
import ProductBox from './common/ProductBox';

import ProductJson from './product'

const Shop = () => {
    return (
        <main>
            <section className='w-full bg-no-repeat bg-center bg-cover' style={{backgroundImage: 'url("/images/shop-banner.png")'}}>

                <div className='container max-w-screen-xl1 mx-auto text-center py-20'>
                    {/* Title */}
                    <h1 className='text-white text-4xl font-medium mb-3'>Shop</h1>
                    {/* Breadcrumb */}
                    <div className='text-white'> <span>Home</span> / <span className='text-orange-500'>Shop</span> </div>
                </div>
                
            </section>

            <section>
                <div className='container max-w-screen-xl1 mx-auto px-4 pt-12 pb-8'>
                    <div className='flex -mx-4'>
                        <div className='w-2/4 px-4'>
                            <select className='p-3 border border-black w-52'>
                                <option>Most Poluplar</option>
                                <option>Best Seller</option>
                                <option>Trending</option>
                                <option>Featured</option>
                            </select>
                        </div>
                        <div className='w-2/4 px-4 flex justify-end flex-wrap items-center'>
                            <div className='d-flex items-center flex-wrap'>
                                <label className='font-semibold text-xl mr-2'>Sort By: </label>
                                <select className='p-3 border border-black w-52'>
                                    <option>Polularity</option>
                                    <option>Newness</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                            <div className='flex gap-4 ml-4'>
                                <FaList />
                                <FaTh />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container max-w-screenxl1 mx-auto px-4'>
                    <div className='flex flex-wrap -mx-4'>
                        {ProductJson.products.map((item,index)=><div key={index} className='px-4 w-1/4'>
                            <ProductBox  pdata={item} />
                        </div>)}
                        
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Shop;