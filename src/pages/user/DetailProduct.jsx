import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { isLogin } from "../auth/Auth";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/actions";
import { useNavigate } from "react-router-dom";
import "./DetailProduct.css";


const DetailProduct = ()=> {
    const { product } = useParams();
    const [data,setData] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('products'));
        const req = dataFromLocalStorage.products.filter((item)=>item.id==product);
        setData(req[0])
    },[product])
    console.log(data);
    return(
        
        <div className="product-details">
             <div className="product-info">
            <img src={data.image} style={{width: "200px"}} alt="" />
            <p className="product-id" >{data.id}</p>
            <p className="product-title">{data.title}</p>
            <p className="product-description">{data.description}</p>
            <button 
            className="add-to-cart-button"
            onClick={() => isLogin() ? dispatch(addToCart(data)) : navigate('/login')}>add to cart</button>
            </div>
       </div>
    )
}
export default DetailProduct;
