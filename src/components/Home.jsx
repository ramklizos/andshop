import "./component-style/home.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductBox from "./common/ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import BlogBox from "./common/BlogBox";

const Home = () => {
    const productData = [
        {
            id: 1,
            labels: "Trending",
            category: "Trending",
            img: "/images/products/product1.7190443a.png",
            hover_img: "/images/products/product10.d71c44ec.png",
            title: "Green Dress For Woman",
            price: 38,
            description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            rating: {
                rate: 3.9,
                count: 30,
            },
            color: [
                {
                    color: "green",
                    img: "/images/products/product8.32e12a75.png",
                    quantity: 1,
                },
                {
                    color: "red",
                    img: "/images/products/product9.60333e3e.png",
                    quantity: 1,
                },
                {
                    color: "blue",
                    img: "/images/products/product7.6533a8ae.png",
                    quantity: 1,
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
                "Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n         Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.",
            rating: {
                rate: 3.3,
                count: 80,
            },
            color: [
                {
                    color: "green",
                    img: "/images/products/product6.f19b14e6.png",
                    quantity: 1,
                },
                {
                    color: "red",
                    img: "/images/products/product10.d71c44ec.png",
                    quantity: 1,
                },
                {
                    color: "blue",
                    img: "/images/products/product5.65927e42.png",
                    quantity: 1,
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
                "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in \n        faucibus orci luctus et ultrices posuere cubilia Curae;",
            rating: {
                rate: 4.9,
                count: 156,
            },
            color: [
                {
                    color: "green",
                    img: "/images/products/product6.f19b14e6.png",
                    quantity: 1,
                },
                {
                    color: "red",
                    img: "/images/products/product7.6533a8ae.png",
                    quantity: 1,
                },
                {
                    color: "blue",
                    img: "/images/products/product8.32e12a75.png",
                    quantity: 1,
                },
            ],
        },
        {
            id: 4,
            labels: "Hot",
            category: "Hot",
            img: "/images/products/product4.0d1ab934.png",
            hover_img: "/images/products/product6.f19b14e6.png",
            title: "Maxi Dress",
            price: 43,
            description:
                "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit \n        amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
            rating: {
                rate: 1.9,
                count: 190,
            },
            color: [
                {
                    color: "green",
                    img: "/images/products/product3.1d2f5e96.png",
                    quantity: 1,
                },
                {
                    color: "red",
                    img: "/images/products/product9.60333e3e.png",
                    quantity: 1,
                },
                {
                    color: "blue",
                    img: "/images/products/product5.65927e42.png",
                    quantity: 1,
                },
            ],
        },
        {
            id: 5,
            labels: "Upcoming",
            category: "Upcoming",
            img: "/images/products/product5.65927e42.png",
            hover_img: "/images/products/product1.7190443a.png",
            title: "Fit-Flare Dress",
            price: 52,
            description:
                "Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n        Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.",
            rating: {
                rate: 3.6,
                count: 20,
            },
            color: [
                {
                    color: "green",
                    img: "/images/products/product10.d71c44ec.png",
                    quantity: 1,
                },
                {
                    color: "red",
                    img: "/images/products/product9.60333e3e.png",
                    quantity: 1,
                },
                {
                    color: "blue",
                    img: "/images/products/product2.57e4309e.png",
                    quantity: 1,
                },
            ],
        }
    ]

    const [products] = useState({
        products: productData,
    });

    const [hotProducts, setHotProducts] = useState(productData);
    const [hotproductCats, sethotProductCats] = useState(['All'])
    const [hotProActive, setProActive] = useState(0);

    useEffect(()=>{
        sethotProductCats([...hotproductCats,...new Set(hotProducts.map(item => item.category))])
        return () => {
            sethotProductCats([]);

        };
    },[])


    function hotProductCatClickHandler(index, category){
        setProActive(index);
        
        const filterProduct = productData.filter((item)=>{           
            return item.category === category            
        })

        setHotProducts(filterProduct.length>0 ? filterProduct : productData)
    }



    return (
        <>
            <section
                className="hero bg-no-repeat overflow-hidden"
                style={{
                    backgroundImage: 'url("/images/banner_3.71b74319.jpg")',
                }}
            >
                <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                    <div className="grid grid-cols-2 gap-6 items-center">
                        <div>
                            <h1 className="text-9xl	font-thin">
                                LIVE FOR{" "}
                                <span className="font-bold text-white block">
                                    FASHION
                                </span>
                            </h1>
                            <div className="font-medium text-2xl text-white ml-2">
                                SAVE UP TO 50%
                            </div>
                            <button className="duration-200 ml-2 px-10 py-4 bg-gray-900	hover:bg-white hover:text-gray-900 text-white mt-7 text-xs border border-gray-900">
                                SHOP NOW
                            </button>
                        </div>
                        <div className="text-end">
                            <img
                                src="/images/man.422a052d.png"
                                alt=""
                                className="w-auto max-w-full rightImg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-10 w-full px-4">
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <div className="productVariationBox relative mb-8">
                            <img
                                src="/images/woman.285f1a7d.png"
                                className="w-full"
                                alt=""
                            />
                            <div className="textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2">
                                <h2 className="text-orange-500 text-2xl font-semibold">
                                    OUTERWEAR
                                </h2>
                                <h3 className="text-black ">
                                    <span className="font-bold text-4xl">
                                        NEW
                                    </span>{" "}
                                    <span className="font-semibold text-2xl block">
                                        COLLECTION
                                    </span>
                                </h3>
                                <div className="mt-7">
                                    <Link
                                        to="/shop"
                                        className="duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900"
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="productVariationBox relative">
                            <img
                                src="/images/woman1.b58d4262.png"
                                className="w-full"
                                alt=""
                            />
                            <div className="textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2">
                                <h2 className="text-orange-500 text-2xl font-semibold">
                                    40% OFFER
                                </h2>
                                <h3 className="text-black ">
                                    <span className="font-bold text-4xl">
                                        SUPER
                                    </span>{" "}
                                    <span className="font-semibold text-2xl block">
                                        COLLECTION
                                    </span>
                                </h3>
                                <div className="mt-7">
                                    <Link
                                        to="/"
                                        className="duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900"
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="productVariationBox relative">
                        <img
                            src="/images/bag.e31a8e04.png"
                            className="w-full"
                            alt=""
                        />
                        <div className="textWrapper p-4 absolute left-5 -translate-y-1/2 bottom-0">
                            <h2 className="text-orange-500 text-2xl font-semibold">
                                OUTERWEAR
                            </h2>
                            <h3 className="text-black ">
                                <span className="font-bold text-4xl">NEW</span>{" "}
                                <span className="font-semibold text-2xl block">
                                    COLLECTION
                                </span>
                            </h3>
                            <div className="mt-7">
                                <Link
                                    to="/"
                                    className="duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900"
                                >
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="productVariationBox relative mb-8">
                            <img
                                src="/images/woman4.6c41e1ce.png"
                                className="w-full"
                                alt=""
                            />
                            <div className="textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2">
                                <h3 className="text-black ">
                                    <span className="font-bold text-4xl text-orange-500">
                                        NEW
                                    </span>{" "}
                                    <span className="font-semibold text-2xl block">
                                        ARRIVALS
                                    </span>
                                </h3>
                                <div className="mt-7">
                                    <Link
                                        to="/"
                                        className="duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900"
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="productVariationBox relative">
                            <img
                                src="/images/kids.d99e7e66.png"
                                className="w-full"
                                alt=""
                            />
                            <div className="textWrapper p-4 absolute left-5 -translate-y-1/2 top-1/2">
                                <h3 className="text-black ">
                                    <span className="font-bold text-4xl text-orange-500">
                                        HOT
                                    </span>{" "}
                                    <span className="font-semibold text-2xl block">
                                        COLLECTION
                                    </span>
                                </h3>
                                <div className="mt-7">
                                    <Link
                                        to="/"
                                        className="duration-200 px-7 py-3 bg-gray-900 hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900"
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                    <div className="text-center pb-5">
                        <h2 className="font-semibold text-4xl">HOT PRODUCTS</h2>
                        <p className="pt-2 text-gray-500">
                            See What Everyone Is Shopping from Andshop
                            E-Commerce
                        </p>
                    </div>
                    <ul className="flex justify-center uppercase accordList">

                        {hotproductCats.map((cats,index)=><li onClick={ ()=>{ hotProductCatClickHandler(index, cats) } } className={`relative pb-2 mx-5 before:absolute before:block before:border-b-2 before:border-orange-500 before:bottom-0 before:left-0 before:w-0 before:duration-300 ${hotProActive == index && 'active'}  `} key={index}>
                            <span>{cats}</span>
                        </li>)}
                    </ul>

                    <div className="flex flex-wrap -m-4">
                        {(hotProducts && hotProducts.length>0) && hotProducts.map((item, index) => (
                            <div className="px-4 w-1/4" key={index}>
                                <ProductBox pdata={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className=" bg-no-repeat bg-cover mt-28"
                style={{
                    backgroundImage: 'url("/images/t-shirt.7a6c302e.png")',
                }}
            >
                <div className="p-4 container max-w-screen-xl1 mx-auto py-56">
                    <div className="-mx-4">
                        <div className="w-4/6 ml-auto">
                            <div className="offerTimeContainer flex">
                                <div className="countDown">
                                    <div className="py-2 px-8 border border-gray-500 text-center text-gray-500 mb-7">
                                        <span className="font-bold block text-base">
                                            00
                                        </span>
                                        <span className="block text-sm">
                                            days
                                        </span>
                                    </div>
                                    <div className="py-2 px-8 border border-gray-500 text-center text-gray-500 mb-7">
                                        <span className="font-bold block text-base">
                                            00
                                        </span>
                                        <span className="block text-sm">
                                            days
                                        </span>
                                    </div>
                                    <div className="py-2 px-8 border border-gray-500 text-center text-gray-500 mb-7">
                                        <span className="font-bold block text-base">
                                            00
                                        </span>
                                        <span className="block text-sm">
                                            days
                                        </span>
                                    </div>
                                    <div className="py-2 px-8 border border-gray-500 text-center text-gray-500">
                                        <span className="font-bold block text-base">
                                            00
                                        </span>
                                        <span className="block text-sm">
                                            days
                                        </span>
                                    </div>
                                </div>

                                <div className="ml-10">
                                    <h2 className="font-semibold text-4xl mb-6">
                                        20% OFF FOR ALL T-SHIRT COLLECTION
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Porro quisquam, odit
                                        assumenda sit modi commodi esse
                                        necessitatibus temporibus aperiam
                                        veritatis eveniet!
                                    </p>
                                    <div className="mt-5">
                                        <button className="duration-200 px-10 py-4 bg-gray-900	hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900">
                                            View More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                    <div className="text-center pb-5">
                        <h2 className="font-semibold text-4xl">TODAY'S DEAL</h2>
                        <p className="pt-2 text-gray-500">
                            See What Everyone Is Shopping from Andshop
                            E-Commerce Today
                        </p>
                    </div>

                    <div className="pb-5">
                        <Swiper
                            className="todayDealSwiper"
                            spaceBetween={32}
                            slidesPerView={4}
                            //pagination={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                        >
                            {products.products.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ProductBox pdata={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section
                className="w-100 py-20 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/offer-banner.b01027d7.png")',
                }}
            >
                <div className="max-w-md w-full mx-auto text-center text-white">
                    <h2 className="text-orange-500 text-lg mb-4">TRENDING</h2>
                    <h3 className="mb-4 text-4xl">New Fashion</h3>
                    <p>
                        Consectetur adipisicing elit. Dolores nisi distinctio
                        magni, iure deserunt doloribus optio
                    </p>

                    <div className="mt-4">
                        <Link
                            to="/"
                            className="bg-white text-gray-700 px-10 py-4 text-xs mx-auto font-medium inline-block hover:bg-black hover:text-white duration-300"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                    <div className="text-center pb-5">
                        <h2 className="font-semibold text-4xl">LATEST BLOG</h2>
                        <p className="pt-2 text-gray-500">
                            Mauris luctus nisi sapien tristique dignissim ornare
                        </p>
                    </div>
                </div>

                <div className="container max-w-screen-xl1 w-full mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap">
                        {Array.apply(null, { length: 3 }).map((item, index) => (
                            <div key={index} className="px-4 w-1/3">
                                <BlogBox />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <div className="container w-full max-w-screen-xl1 mx-auto px-4 pt-14">
                    <div className="text-center pb-5">
                        <h2 className="font-semibold text-4xl">
                            FOLLOW US INSTAGRAM
                        </h2>
                        <p className="pt-2 text-gray-500">
                            Follow Us and get updated from our instagram
                        </p>
                    </div>
                </div>

                <div className="w-full px-4">
                    <div className="flex flex-wrap">
                        <div className="w-1/5">
                            <img src="/images/insta/post2.674c2953.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/5">
                            <img src="/images/insta/post2.674c2953.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/5">
                            <img src="/images/insta/post2.674c2953.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/5">
                            <img src="/images/insta/post2.674c2953.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-1/5">
                            <img src="/images/insta/post2.674c2953.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default Home;
