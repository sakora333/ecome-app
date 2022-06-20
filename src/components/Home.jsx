import React from "react";
import Products from "./products";


const Home = () => {
    return (
        <div className="home">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="..." height='560px' />
                <div className="card-img-overlay ">
                    <div className="container  ">
                        <div className="body ">
                            <h5 className="card-title display-3 fw-bold ">NEW SEASON ARIVALS</h5>
                            <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
            </div>

            <Products />
        </div>
    )
}
export default Home;