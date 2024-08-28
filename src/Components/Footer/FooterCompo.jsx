import { useTranslation } from "react-i18next";
import "./FooterCompo.css"
export default function FooterCompo() {
    const { t } = useTranslation();

    return (
        <>
            <div className="footer">
                <div className="footer_text">
                    <div className="left_text">
                        <h1 className="qolash_text">{t('left_text.qolash_text')}</h1>
                        <div className="tel_number">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <p className="number">+998 (94) 412 70 70</p>
                        </div>
                        <div className="tel_number">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p className="number">{t('tel_number.number')}</p>
                        </div>
                    </div>
                    <div className="right_text_">
                        <h1 className="olmaliq_text">{t('right_text.olmaliq_text')}</h1>
                        <div className="location">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="olmaliq_paragraf">{t('right_text_2.olmaliq_paragraf')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
