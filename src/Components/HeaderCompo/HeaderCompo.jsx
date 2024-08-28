import samsung from "../../assets/samsung.svg"
import "./HeaderCompo.css"
import card_img_1 from "../../assets/card_img_1.svg"
import card_img_2 from "../../assets/card_img_2.svg"
import card_img_3 from "../../assets/card_img_3.svg"
import card_img_5 from "../../assets/card_img_5.svg"
import card_img_6 from "../../assets/card_img_6.svg"
import { useTranslation } from "react-i18next"


export default function HeaderCompo() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contaner">
        <img src={samsung} alt="" />
      </div>
      <div className="header_cards">
          <div className="card_img">
            <img src={card_img_1} alt="" />
            <p className="card_img_text">{t('card_img.card_img_text')}</p>
          </div>
          <div className="card_img">
            <img src={card_img_2} alt="" />
            <p className="card_img_text">{t('card_img_2.card_img_text')}</p>
          </div>
          <div className="card_img">
            <img src={card_img_3} alt="" />
            <p className="card_img_text">{t('card_img_3.card_img_text')}</p>
          </div>
          <div className="card_img">
            <img src={card_img_5} alt="" />
            <p className="card_img_text">{t('card_img_4.card_img_text')}</p>
          </div>
          <div className="card_img">
            <img src={card_img_6} alt="" />
            <p className="card_img_text">{t('card_img_5.card_img_text')}</p>
          </div>
        </div>
    </>
  )
}
