import { useEffect, useState } from "react"

export default function Products() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((response) => {
            return response.json()
        })
            .then((data) => {
                setProduct(data)
            })
    }, [])
    return (
        <>
            <div className="products">
                <h1>Products</h1>

                <div className="container">


                    {
                        product.map((pro) => {
                            return (
                                <>

                                    <div className="all">
                                        <img src={pro.image} alt="" />
                                        <div> price:{pro.price}</div>
                                        <div className="title"> title:{pro.title}</div>
                                        {/* <div> description :{pro.description}</div> */}

                                    </div>



                                </>
                            )
                        })
                    }





                </div>
            </div>
        </>
    )
}
