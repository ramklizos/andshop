import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="">
            <div className="py-8 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-1/3 px-4">
                            <div>
                                <Link to="/">
                                    <img
                                        src="/images/footer-logo.png"
                                        className="max-w-full w-auto h-auto"
                                    />
                                </Link>
                            </div>

                            <div className="text-gray-500 mt-5">
                                <p>
                                    <b>ANDSHOP</b> is an multi-vendor B2C fast
                                    e-commerce company. The company mainly focuses
                                    on men,women and children wear, but it also
                                    offers other apparel, clothes, accessories,
                                    shoes, bags and other fashion items.
                                </p>
                            </div>
                        </div>
                        <div className="w-1/4 px-4">
                            <h4 className="text-lg mb-4">INFORMATION</h4>
                            <nav>
                                <ul>
                                    <li className="mb-3">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">About us</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Privacy Policy</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Frequently Questions</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Order Tracking</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">CWishliste</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-1/6 px-4">
                            <h4 className="text-lg mb-4">SHOP</h4>
                            <nav>
                                <ul>
                                    <li className="mb-3">
                                        <Link to="/">Cart View One</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Cart View Two</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Empty Cart</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Checkout View One</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Checkout View Two</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/">Wishlist</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="w-1/4 px-4">
                            <h4 className="text-lg mb-4">NEWSLETTER</h4>

                            <form>
                                <div className="mb-3">
                                    <input type="email" className="border border-solid border-gray-300 px-4 py-2 w-full rounded-sm focus:outline-orange-300" placeholder="Your Mail" />
                                </div>
                                <button type="submit" className="duration-200 px-10 py-4 bg-gray-900	hover:bg-white hover:text-gray-900 text-white text-xs border border-gray-900">Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4">
                <div className="container mx-auto text-center text-sm">
                    <p>&copy; <span className="text-white">CopyRight 2022</span> <span className="text-orange-500">AndShop</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
