import { Link } from "react-router-dom";
import "../component-style/productbox.scss";

const ProductBox = (props) => {
    const { pdata } = props;
    let labelsTypeClass = "bg-green-800";
    /* switch (pdata.labels.type) {
        case "sale":
            labelsTypeClass = "bg-orange-800";
            break;
        case "hot":
            labelsTypeClass = "bg-blue-800";
            break;
    } */
    return (
        <div className="productWrapper mt-7">
            <div className="thumb relative overflow-hidden">
                <Link to="/" className="relative block overflow-hidden">
                    <img src={pdata.img} className="max-w-full w-full" alt="" />
                    <img
                        className="hoverImage absolute top-0 left-0 max-w-full w-full opacity-0"
                        src={pdata.hover_img}
                        alt=""
                    />
                </Link>

                {pdata.labels && <div className="absolute top-4 left-4">
                    <span
                        className={`inline-block text-center font-medium px-3 py-1 bg-green-800 text-white text-sm rounded-sm ${labelsTypeClass}`}
                    >
                        {pdata.labels}
                    </span>
                </div>}

                <div className="actions absolute top-4 right-4 z-10">
                    <span className="flex justify-center items-center w-10 h-10 rounded-full bg-white text-gray-700 cursor-pointer hover:bg-orange-500 hover:text-white transition duration-200">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                        </svg>
                    </span>

                    <span className="flex justify-center items-center w-10 h-10 rounded-full bg-white text-gray-700 cursor-pointer my-2 hover:bg-orange-500 hover:text-white transition duration-200">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            t="1569683683230"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs></defs>
                            <path d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 664h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z"></path>
                        </svg>
                    </span>

                    <span className="flex justify-center items-center w-10 h-10 rounded-full bg-white text-gray-700 cursor-pointer hover:bg-orange-500 hover:text-white transition duration-200">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                        </svg>
                    </span>
                </div>

                <button className="w-4/5 h-11 text-sm absolute bottom-5 left-0 right-0 z-20 bg-white text-gray-700 rounded mx-auto font-medium hover:text-orange-500">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductBox;
