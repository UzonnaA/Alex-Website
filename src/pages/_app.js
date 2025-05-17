import "@/styles/globals.css";
import MainLayout from "@/layouts/mainLayout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <MainLayout>
    <Component {...pageProps} />
    </MainLayout>
  );
}
