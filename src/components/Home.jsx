const Home = () =>{
    return(
        <>
        <section className="hero h-screen bg-no-repeat overflow-hidden" style={{backgroundImage: 'url("/images/banner_3.71b74319.jpg")'}}>
            <div className="container max-w-screen-xl1 mx-auto px-4 pt-14">
                <div className="grid grid-cols-2 gap-6 items-center">
                    <div>
                        <h1 className="text-9xl	font-thin">LIVE FOR <span className="font-bold text-white block">FASHION</span></h1>
                        <div className="font-medium text-2xl text-white ml-2">SAVE UP TO 50%</div>
                        <button className="duration-200 ml-2 px-10 py-4 bg-gray-900	hover:bg-white hover:text-gray-900 text-white mt-7 text-xs border border-gray-900">SHOP NOW</button>
                    </div>
                    <div>
                        <img src="/images/man.422a052d.png" alt="" className="w-auto max-w-full" />
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-10">
            <div class="grid grid-rows-4 grid-cols-3 gap-6">
                <div class="row-span-2 col-span-2">01</div>
                <div class="row-span-2">02</div>
                <div class="row-span-4">03</div>
                <div class="row-span-2">04</div>
                <div class="row-span-2">05</div>
            </div>
        </section>
        </>
    )
}

export default Home;