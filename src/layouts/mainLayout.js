import Header from "@/components/header";
import Footer from "@/components/footer";
import { Children } from "react";

const MainLayout = ({children}) => (
    <>
    <Header></Header>
    <main className="min-h-screen">{children}</main>
    <Footer></Footer>
    </>
)

export default MainLayout;