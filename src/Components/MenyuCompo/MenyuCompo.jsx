import "./MenyuCompo.css"
import { useTranslation } from "react-i18next";


export default function MenyuCompo() {
    const { t } = useTranslation();
   
    return (
        <>
            <div className="contener">
                <div className="menyu_page">
                    <h2 className="menyu_text">{t('menyu_page.menyu_text')}</h2>
                    <button className="menyu_katalog"><i className="fa-solid fa-bars"></i> {t('menu_page.menyu_katalog')}<i className="fa-solid fa-angle-right"></i></button>
                    <input placeholder={t('meyu_page.menyu_inp')} type="text" className="menyu_inp" />
                    <div className="small_card_father">
                        <i className="fa-regular fa-heart"></i>
                        <p className="like_text_1">{t('small_card_father.like_text')}</p>
                    </div>
                    <div className="small_card_father">
                    <i className="fa-solid fa-down-left-and-up-right-to-center"></i>
                        <p className="like_text">{t('small_card_father_2.like_text')}</p>
                    </div>
                    <div className="small_card_father">
                    <i className="fa-solid fa-cart-shopping"></i>
                        <p className="like_text">{t('small_card_father_3.like_text')}</p>
                    </div>
                    <button className="menyu_exit"><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                </div>
            </div>
        </>
    )
}
