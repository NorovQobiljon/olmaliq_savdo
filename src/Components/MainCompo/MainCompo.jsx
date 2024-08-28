import "./MainCompo.css"
import watch_bg from "../../assets/watch_bg.svg"
import dostavka from "../../assets/dostavka.svg"
import kredit from "../../assets/kredit.svg"
import garantiya from "../../assets/garantiya.svg"
import qolash from "../../assets/qolash.svg"
import scooter from "../../assets/scooter.svg"
import macbook from "../../assets/macbook.svg"
import samsung_pel from "../../assets/samsung_pel.svg"
import divan from "../../assets/divan.svg"
import { useTranslation } from "react-i18next"


export default function MainCompo() {
    const { t } = useTranslation();

    return (
        <>
            <div className="main">
                <div className="main_watch">
                    <img src={watch_bg} alt="" className="main_watch_bg" />
                    <h1 className="arzoni_biz">{t('main_watch.arzoni_biz')}</h1>
                </div>
                <div className="arzon_cards">
                    <div className="arz_card">
                        <div className="arz_circol">
                            <img src={dostavka} alt="" className="dostavka" />
                        </div>
                        <div className="dostavka_texts">
                            <h1 className="dostavka_text">{t('dostavka_texts_1.dostavka_text')}</h1>
                            <p className="dostavka_paragraf">{t('dostavka_texts_2.dostavka_paragraf')}</p>
                        </div>
                    </div>
                    <div className="arz_card">
                        <div className="arz_circol">
                            <img src={kredit} alt="" className="dostavka" />
                        </div>
                        <div className="dostavka_texts">
                            <h1 className="dostavka_text">{t('dostavka_texts_3.dostavka_text')}</h1>
                            <p className="dostavka_paragraf">{t('dostavka_texts_4.dostavka_paragraf')}</p>
                        </div>
                    </div>
                    <div className="arz_card">
                        <div className="arz_circol">
                            <img src={garantiya} alt="" className="dostavka" />
                        </div>
                        <div className="dostavka_texts">
                            <h1 className="dostavka_text">{t('dostavka_texts_5.dostavka_text')}</h1>
                            <p className="dostavka_paragraf">{t('dostavka_texts_6.dostavka_paragraf')}</p>
                        </div>
                    </div>
                    <div className="arz_card">
                        <div className="arz_circol">
                            <img src={qolash} alt="" className="dostavka" />
                        </div>
                        <div className="dostavka_texts">
                            <h1 className="dostavka_text">{t('dostavka_texts_7.dostavka_text')}</h1>
                            <p className="dostavka_paragraf">{t('dostavka_texts_8.dostavka_paragraf')}</p>
                        </div>
                    </div>
                </div>
                <div className="cart_sarlavha">
                    <h3 className="band_1">{t('cart_sarlavha_9.band_2')}</h3>
                    <h3 className="band_2">{t('cart_sarlavha_10.band_2')}</h3>
                </div>
                <div className="songi_cards">
                    <div className="cart_son">
                        <div className="img_cart">
                            <img className="iphone" src={scooter} alt="" />
                        </div>
                        <h4 className="product_name">Scooter 13a</h4>
                        <p className="product_title">69km/s , 10 soat, gray solutions phone</p>
                        <div className="product_price">12 300 000 so`m</div>
                        <div className="product_sale">230 000 so`mdan / 24 oy</div>
                        <button className="product_btn">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            {t('product_btn.savat')}
                        </button>
                    </div>
                    <div className="cart_son">
                        <div className="img_cart">
                            <img className="iphone" src={macbook} alt="" />
                        </div>
                        <h4 className="product_name">MacBook Pro</h4>
                        <p className="product_title">256 gb, 10gb, gray solutions phone</p>
                        <div className="product_price">12 300 000 so`m</div>
                        <div className="product_sale">230 000 so`mdan / 24 oy</div>
                        <button className="product_btn">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            {t('product_btn.savat')}
                        </button>
                    </div>
                    <div className="cart_son">
                        <div className="img_cart">
                            <img className="iphone" src={samsung_pel} alt="" />
                        </div>
                        <h4 className="product_name">Samsung 55a</h4>
                        <p className="product_title">256 gb, 10gb, gray solutions phone</p>
                        <div className="product_price">12 300 000 so`m</div>
                        <div className="product_sale">230 000 so`mdan / 24 oy</div>
                        <button className="product_btn">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            {t('product_btn.savat')}
                        </button>
                    </div>
                    <div className="cart_son">
                        <div className="img_cart">
                            <img className="iphone" src={divan} alt="" />
                        </div>
                        <h4 className="product_name">Scooter 13a</h4>
                        <p className="product_title">69km/s , 10 soat, gray solutions phone</p>
                        <div className="product_price">12 300 000 so`m</div>
                        <div className="product_sale">230 000 so`mdan / 24 oy</div>
                        <button className="product_btn">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                            {t('product_btn.savat')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
