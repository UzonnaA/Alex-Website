import Header from "@/components/header";
import Footer from "@/components/footer";
import { Children } from "react";

const MainLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;

// This is the old style
// <>
//     <Header></Header>
//     <main className="min-h-screen">{children}</main>
//     <Footer></Footer>
// </>