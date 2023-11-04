import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { isLogin } from "../auth/Auth";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/actions";
import { useNavigate } from "react-router-dom";


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
        <>
            <img src={data.image} style={{width: "200px"}} alt="" />
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <button onClick={() => isLogin() ? dispatch(addToCart(data)) : navigate('/login')}>add to cart</button>
        </>
    )
}
export default DetailProduct