import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import "../index.css";
export default function Page() {
    return (
        <div className="page">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}