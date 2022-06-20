import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Product = () => {
    let { id } = useParams();
    console.log({ id })
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
            console.log(product)
        }
        getProduct();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-6 mt-5">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6 mt-5">
                    <Skeleton width={200} />
                    <Skeleton width={450} height={250} />
                    <Skeleton width={50} />

                </div>
            </>
        )
    }

    const Showproduct = () => {
        return (
            <>
                <div className="col-md-6 mt-5">
                    <img src={product.image} alt={product.title} height={400} width={400} />

                </div>
                <div className="col-md-6 mt-5">
                    <h4 className="lead uppercase text-black fw-bold">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">
                        {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>

                    <button className="btn btn-outline-dark"> Add TO Cart </button>
                    <button className="btn btn-outline-dark "> Delete From Cart</button>

                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <Showproduct />}
                </div>
            </div>
        </div>
    )
}

export default Product;