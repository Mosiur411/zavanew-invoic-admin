import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useAddToCartMutation } from "../../app/services/product";
import { useAddItemsOrderMutation } from "../../app/services/order";

const DashboardLayout = ({ children }) => {
    const [productSarch, setProductSarch] = useState('')
    const [sideOpen, setSideOpen] = useState(false)
    const [sideOpenMobile, setSideOpenMobille] = useState(false)
    const [AddToCart] = useAddToCartMutation()
    const [AddToOrderItem] = useAddItemsOrderMutation()
    const productCartAdd = async (item) => {
        if(item?.order_id){
            await AddToOrderItem(item)
        }else{
            await AddToCart(item)
        }
        setProductSarch('')
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
                        productSarch={productSarch} setProductSarch={setProductSarch}
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