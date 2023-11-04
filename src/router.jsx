import Admin from "./pages/admin";
import Login from "./pages/auth/Login";
import DetailProduct from "./pages/user/DetailProduct";
import User from "./pages/user/index";
import RekapPenjualan from "./pages/admin/RekapPenjualan";
export const router = [
    {
        path: "/",
        element: <User />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/detailProduct/:product",
        element: <DetailProduct/>
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/admin/rekapPenjualan",
        element: <RekapPenjualan />
    }
]