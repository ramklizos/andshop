import { Link } from "react-router-dom";

const BlogBox = () => {
    return (
        <article>
            <div className="overflow-hidden">
                <Link to="/">
                    <img
                        src="/images/blog/post1.9424ebbc.png"
                        alt=""
                        className="w-100 h-auto"
                    />
                </Link>
                
            </div>
            <div className="mt-4">
                <div className="mb-3">
                    <Link to="/" className="text-orange-500">
                        24 February 2021
                    </Link>
                </div>
                <h3 className="text-3xl font-bold mb-3">
                    The Luxury Winter Accessory That’s Trending Now
                </h3>
                <p>
                    No matter what you spend on your wardrobe, there are three
                    pieces that can always elevate your look – shoes, handbags,
                    and sunglasses.
                </p>
                <div className="mt-5">
                    <Link
                        to="/"
                        className="px-10 py-2 border border-solid text-sm font-medium border-black hover:bg-black hover:text-white duration-300"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogBox;
