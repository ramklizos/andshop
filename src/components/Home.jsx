import './component-style/home.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';
import ProductBox from './common/ProductBox';

const Home = () =>{
    const [products] = useState({
        products: [
            {
                id: 1,
                labels: "Trending",
                category: "fashion",
                img: "/images/products/product1.7190443a.png",
                hover_img: "/images/products/product10.d71c44ec.png",
                title: "Green Dress For Woman",
                price: 38,
                description:
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. /n The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
                rating: { count: 30, rate: 3.9 },
                color: [
                    {
                        color: "green",
                        img: "/static/media/product8.32e12a75.png",
                    },
                    {
                        color: "red",
                        img: "/static/media/product9.60333e3e.png",
                    },
                    {
                        color: "blue",
                        img: "/static/media/product7.6533a8ae.png",
                    },
                ],
            },
            {
                id: 2,
                labels: "45% OFF",
                category: "fashion",
                img: "/images/products/product2.57e4309e.png",
                hover_img: "/images/products/product9.60333e3e.png",
                title: "T-Shirt For Men",
                price: 72,
                description:
                    "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
                rating: { count: 80, rate: 3.9 },
                color: [
                    {
                        color: "green",
                        img: "/static/media/product8.32e12a75.png",
                    },
                    {
                        color: "red",
                        img: "/static/media/product9.60333e3e.png",
                    },
                    {
                        color: "blue",
                        img: "/static/media/product7.6533a8ae.png",
                    },
                ],
            },
            {
                id: 3,
                labels: "50% OFF",
                category: "fashion",
                img: "/images/products/product3.1d2f5e96.png",
                hover_img: "/images/products/product7.6533a8ae.png",
                title: "V-Neck Dress",
                price: 34,
                description:
                    "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    
                rating: { count: 156, rate: 4.9 },
                color: [
                    {
                        color: "green",
                        img: "/static/media/product6.f19b14e6.png",
                        quantity: 1,
                    },
                    {
                        color: "red",
                        img: "/static/media/product7.6533a8ae.png",
                        quantity: 1,
                    },
                ],
            },
            {
                id: 4,
                labels: "Hot",
                category: "fashion",
                img: "/images/products/product4.0d1ab934.png",
                hover_img: "/images/products/product6.f19b14e6.png",
                title: "Maxi Dress",
                price: 43,
                description:
                    "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit  amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    
                rating: { count: 190, rate: 1.9 },
                color: [
                    {
                        color: "green",
                        img: "/static/media/product3.1d2f5e96.png",
                        quantity: 1,
                    },
                    {
                        color: "red",
                        img: "/static/media/product9.60333e3e.png",
                        quantity: 1,
                    },
                ],
            },
            {
                id: 5,
                labels: "Upcoming",
                category: "fashion",
                img: "/images/products/product5.65927e42.png",
                hover_img: "/images/products/product1.7190443a.png",
                title: "Fit-Flare Dress",
                price: 52,
                description:
                    "Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.",
    
                rating: { count: 20, rate: 3.6 },
                color: [
                    {
                        color: "green",
                        img: "/static/media/product10.d71c44ec.png",
                        quantity: 1,
                    },
                    {
                        color: "red",
                        img: "/static/media/product9.60333e3e.png",
                        quantity: 1,
                    },
                ],
            },
        ],
    })
    return(
        <>
        <section className="hero bg-no-repeat overflow-hidden" style={{backgroundImage: 'url("/images/banner_3.71b74319.jpg")'}}>
            <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                <div className="grid grid-cols-2 gap-6 items-center">
                    <div>
                        <h1 className="text-9xl	font-thin">LIVE FOR <span className="font-bold text-white block">FASHION</span></h1>
                        <div className="font-medium text-2xl text-white ml-2">SAVE UP TO 50%</div>
                        <button className="duration-200 ml-2 px-10 py-4 bg-gray-900	hover:bg-white hover:text-gray-900 text-white mt-7 text-xs border border-gray-900">SHOP NOW</button>
                    </div>
                    <div className="text-end">
                        <img src="/images/man.422a052d.png" alt="" className="w-auto max-w-full rightImg" />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-10 w-full px-4">
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <div className="productVariationBox relative mb-8">
                        <img src='/images/woman.285f1a7d.png' className='w-full' alt='' />
                        <div className='textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2'>
                            <h2 className='text-orange-500 text-2xl font-semibold'>OUTERWEAR</h2>
                            <h3 className='text-black '><span className='font-bold text-4xl'>NEW</span> <span className='font-semibold text-2xl block'>COLLECTION</span></h3>
                            <div className='mt-7'>
                            <Link to="/" className='duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="productVariationBox relative">
                        <img src='/images/woman1.b58d4262.png' className='w-full' alt='' />
                        <div className='textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2'>
                            <h2 className='text-orange-500 text-2xl font-semibold'>40% OFFER</h2>
                            <h3 className='text-black '><span className='font-bold text-4xl'>SUPER</span> <span className='font-semibold text-2xl block'>COLLECTION</span></h3>
                            <div className='mt-7'>
                            <Link to="/" className='duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="productVariationBox relative">
                    <img src='/images/bag.e31a8e04.png' className='w-full' alt='' />
                    <div className='textWrapper p-4 absolute left-5 -translate-y-1/2 bottom-0'>
                        <h2 className='text-orange-500 text-2xl font-semibold'>OUTERWEAR</h2>
                        <h3 className='text-black '><span className='font-bold text-4xl'>NEW</span> <span className='font-semibold text-2xl block'>COLLECTION</span></h3>
                        <div className='mt-7'>
                        <Link to="/" className='duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900'>SHOP NOW</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="productVariationBox relative mb-8">
                        <img src='/images/woman4.6c41e1ce.png' className='w-full' alt='' />
                        <div className='textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2'>
                            <h3 className='text-black '><span className='font-bold text-4xl text-orange-500'>NEW</span> <span className='font-semibold text-2xl block'>ARRIVALS</span></h3>
                            <div className='mt-7'>
                            <Link to="/" className='duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="productVariationBox relative">
                        <img src='/images/kids.d99e7e66.png' className='w-full' alt='' />
                        <div className='textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2'>
                            <h3 className='text-black '><span className='font-bold text-4xl text-orange-500'>HOT</span> <span className='font-semibold text-2xl block'>COLLECTION</span></h3>
                            <div className='mt-7'>
                            <Link to="/" className='duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900'>SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='container w-full max-w-screen-xl1 mx-auto px-4 pt-14'>
                <div className='text-center pb-5'>
                    <h2 className='font-semibold text-4xl'>HOT PRODUCTS</h2>
                    <p className='pt-2 text-gray-500'>See What Everyone Is Shopping from Andshop E-Commerce</p>
                </div>
                <ul className='flex justify-center uppercase accordList'>
                    <li className='active relative pb-2 mx-5 before:absolute before:block before:border-b-2 before:border-orange-500 before:bottom-0 before:left-0 before:w-0 duration-300' >
                        <span>New arrival</span>
                    </li>
                    <li className='px-5'>
                        <span>Trending</span>
                    </li>
                    <li className='px-5'>
                        <span>Best Sellers</span>
                    </li>
                    <li className='px-5'>
                        <span>Featured</span>
                    </li>
                    <li className='px-5'>
                        <span>On Sale</span>
                    </li>
                </ul>

                <div className='flex flex-wrap -m-4'>
                    {products.products.map((item,index)=><div className='px-4 w-1/4' key={index}>
                        <ProductBox pdata={item} />
                    </div>)}
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;