import { useState,useEffect } from "react"
import "./Table.css"
import { useDispatch, useSelector } from "react-redux";
import { isLoginAdmin } from "../../pages/auth/Auth";


const Table = ()=> {
    const products = useSelector((state)=>state.products);

    const [stock,setStock]= useState('');
    useEffect(() => {
        const initialStock = {};
    
        products.forEach(item => {
          initialStock[item.id] = item.stock
        });
        setStock(initialStock);
    }, [products]);
    const handleOnUpdate = (item) => {
        const newData = {...item,stock: stock[item.id]}
        const getData = products.map(item=>
            item.id === newData.id ? {...item,...newData}:item
        )
        const product = JSON.parse(localStorage.getItem('products'));
        const data = {...product,products: getData};
        localStorage.setItem('products',JSON.stringify(data))
        window.alert('berhasil update barang')
        window.location.reload()
    }
    return(
        <div className="table-container"> 
            <table>
                <thead className="table-head">
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoginAdmin() && products && products.map((item,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td className="container-product">
                                <img className="item-product__image" src={item.image} alt="" />
                                {item.title}
                            </td>
                            <td>
                            <input
                                type="number"
                                className="input-update"
                                value={stock[item.id] || ''}
                                onChange={(e) => setStock({ ...stock, [item.id]: parseInt(e.target.value) || '' })}
                            />
                            </td>
                            <td>
                                <button className="btn-update" onClick={()=>handleOnUpdate(item)}>update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table