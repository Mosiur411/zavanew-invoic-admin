import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../utils/Context";
import { useDispatch } from "react-redux";
import { setToken } from "../../app/features/authSlice";
import { useEffect } from "react";

const DashboardLayout = ({ children }) => {
    const dispatch = useDispatch();
    const [sideOpen, setSideOpen] = useState(false)
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user?.accessToken) {
            dispatch(setToken({ user }))
        }
    }, [user, dispatch])

    return (
        <div>
            <div className="screen-overlay"></div>
            <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
            <div className={`${sideOpen ? 'aside-mini' : ''}`}>
                <main className="main-wrap">
                    <Header />
                    <section className="content-main">
                        {children}
                    </section>
                    <Footer />
                </main>
            </div>
        </div>

    );
}
export default DashboardLayout;