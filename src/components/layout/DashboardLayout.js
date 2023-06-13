import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAddToCartMutation } from "../../app/services/product";

const DashboardLayout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(false)
    const [sideOpenMobile, setSideOpenMobille] = useState(false)
    const [AddToCart] = useAddToCartMutation()
    const productCartAdd = async (item) => {
        await AddToCart(item)
    }
    return (
        <div>
            <div className="screen-overlay"></div>
            <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen}
                sideOpenMobile={sideOpenMobile} setSideOpenMobille={setSideOpenMobille}
            />
            <div className={`${sideOpen ? 'aside-mini' : ''}`}>
                <main className="main-wrap">
                    <Header productCartAdd={productCartAdd}
                        sideOpen={sideOpenMobile} setSideOpen={setSideOpenMobille}
                    />
                    <section className="content-main">
                        {children}
                    </section>
                    {/*  <Footer /> */}
                </main>
            </div>

        </div>

    );
}
export default DashboardLayout;