import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(false)
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
                    {/*  <Footer /> */}
                </main>
            </div>

        </div>

    );
}
export default DashboardLayout;