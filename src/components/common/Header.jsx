const Header = () =>{
    return(
        <section>
            <div  className="topHeader bg-gray-100 py-3">
                <div className="container max-w-screen-xl1 mx-auto px-4">
                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div>
                            <p>Special collection already available. <a href="#" className="text-orange-400">Read more...</a></p>
                        </div>
                        <div>
                            <ul className="flex justify-end">
                                <li>Compare</li>
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header ">
                <div className="container max-w-screen-xl1 mx-auto px-4">
                    <div className="flex flex-wrap text-sm items-center">
                        <div className="w-1/4">
                            <a href="#">
                                <img src="/images/logo.png" alt="" className="w-auto" />
                            </a>
                        </div>
                        <div className="w-2/4 px-4">
                            <ul className="flex justify-between">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Feature</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-right w-1/4 text-xl gap-3 flex justify-end">
                            <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                            <span><i className="fa fa-shopping-bag" aria-hidden="true"></i></span>
                            <span><i className="fa fa-search" aria-hidden="true"></i></span>
                            <span><i className="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;