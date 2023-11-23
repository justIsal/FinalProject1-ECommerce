import { useSelector } from "react-redux"
import HeaderAdmin from "../../components/HeaderAdmin"
import Table from "../../components/Tables/TableUpdate";

const Admin = ()=>{
    return (
        <>
            <HeaderAdmin />
            <Table/>
        </>
      )
}
export default Admin