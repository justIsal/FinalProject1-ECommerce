import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import "./Table.css"
import { isLoginAdmin } from "../../pages/auth/Auth";
const TableRekap = ()=> {
    const dataSoldout = useSelector(state=>state.soldOut);
    const [data,setData] = useState([]);
    const [total,setTotal] = useState([]);
    useEffect(()=> {
        const filterById = dataSoldout.reduce((acc, currentItem) => {
            const foundIndex = acc.findIndex(item => item.id === currentItem.id);
            if (foundIndex !== -1) {
                acc[foundIndex].quantity += currentItem.quantity;
            } else {
                acc.push({ ...currentItem });
            }
            return acc;
        }, []);
        
        setData(filterById);
        const total = filterById.reduce((acc,currentItem,index) =>{
            
            return acc + currentItem.price * currentItem.quantity 
        },0);
        setTotal(parseFloat(total).toFixed(2));
    },[dataSoldout])
    return(
        <div className="table-container"> 
            <table>
                <thead className="table-head">
                    <tr>
                        <th>Product</th>
                        <th>Harga</th>
                        <th>Terjual</th>
                        <th>Pendapatan</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(data)} */}
                    {isLoginAdmin() && data && data.map((item,index)=> (
                        <tr key={index}>
                            <td>
                                <h3>{item.title}</h3>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    ))}
                    <tr className="tr-total">
                        <td></td>
                        <td colSpan={3}>Total pendapatan {isLoginAdmin() &&  data ? total : '-'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default TableRekap