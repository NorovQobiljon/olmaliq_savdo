import { useTranslation } from "react-i18next";
import CartCompo from "./Components/CartCompo/CartCompo";
import FooterCompo from "./Components/Footer/FooterCompo";
import HeaderCompo from "./Components/HeaderCompo/HeaderCompo";
import MainCompo from "./Components/MainCompo/MainCompo";
import MenyuCompo from "./Components/MenyuCompo/MenyuCompo";
import { HomePage } from "./Pages/Home/Home";




export default function App() {
    return (
        <>
            <div>
                <HomePage />
                <MenyuCompo />
                <HeaderCompo />
                <CartCompo />
                <MainCompo />
                <FooterCompo />
            </div>
        </>
    )
}
