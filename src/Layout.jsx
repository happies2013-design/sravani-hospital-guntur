import { Outlet } from "react-router-dom"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen flex-col font-sans antialiased">
            <Header />
            <main className="flex-1">
                {children || <Outlet />}
            </main>
            <Footer />
        </div>
    )
}
