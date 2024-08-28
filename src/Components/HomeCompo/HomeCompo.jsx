/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./HomeCompo.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";


export default function HomeCompo() {
    const [weektext, setWeektext] = useState("");
    const time = new Date().getHours();
    const minute = new Date().getMinutes();
    const week = new Date().getDay()

    // const { t } = useTranslation();
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }



    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="left_text">
                        <p className="nav_left_text">{time} : {minute < 10 ? "0" + minute : minute} {week === 1 ? "Dushanba" : ""}{week === 2 ? "Seshanba" : ""}{week === 3 ? "Chorshanba" : ""}{week === 4 ? "Payshanba" : ""}{week === 5 ? "Juma" : ""}{week === 6 ? "Shanba" : ""}{week === 7 ? "Yakshanba" : ""}</p>
                    </div>
                    <select onChange={(e) => handleClick(e.target.value)}>
                        <option value="eng">English</option>
                        <option value="rus">Rus</option>
                        <option value="uzb">Uzbek</option>
                    </select>
                    {/* <div className="right_text">
                        <p className="nav_right_text">O'zbekcha </p>
                        <i className="fa-solid fa-caret-down"></i>
                    </div> */}
                </nav>
            </div>
        </>
    )
}
