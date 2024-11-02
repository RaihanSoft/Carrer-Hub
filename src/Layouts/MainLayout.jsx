import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const MainLayout = () => {
    return (
        <>
            {/* navbar  */}
            <Navbar />

            {/* dynamic body  */}
            <div className="min-h-[calc(100vh-243px)]">
                <Outlet />
            </div>

            {/* footer  */}
            <Footer />

        </>
    )
}

export default MainLayout
