import "./CartCompo.css"
import lg_img from "../../assets/lg_img.svg"
import xaoimi_img from "../../assets/xaoimi_img.svg"
import apple_img from "../../assets/apple_img.svg"
import lenovo_img from "../../assets/lenovo_img.svg"
import hp_img from "../../assets/hp_img.svg"
import samsung_img from "../../assets/samsung_img.svg"
import { obj_card } from "../../utils"
import apple_macbook from "../../assets/apple_macbook.svg"
import xiaomi_noutbook from "../../assets/xiaomi_noutbook.svg"
import apple_complect from "../../assets/apple_complect.svg"
import { useTranslation } from "react-i18next"





export default function CartCompo() {
    const { t } = useTranslation();

    return (
        <>
            <div className="cart_compo">
                <div className="cart_sarlavha">
                    <h3 className="band_1">{t('cart_sarlavha.band_1')}</h3>
                    <h3 className="band_2">{t('cart_sarlavha_2.band_2')}</h3>
                </div>
                <div className="carts">
                    <img src={lg_img} alt="" />
                    <img src={xaoimi_img} alt="" />
                    <img src={apple_img} alt="" />
                    <img src={lenovo_img} alt="" />
                    <img src={hp_img} alt="" />
                    <img src={samsung_img} alt="" />
                </div>
                <div className="cart_sarlavha">
                    <h3 className="band_1">{t('cart_sarlavha_3.band_1')}</h3>
                    <h3 className="band_2">{t('cart_sarlavha_4.band_2')}</h3>
                </div>
                <div className="cart_father">
                    {obj_card.map(({ product_name, image, product_price, product_sale, product_title }) => (
                        <div className="cart_son">
                            <div className="img_cart">
                                <img className="iphone" src={image} alt="" />
                            </div>
                            <h4 className="product_name">{product_name}</h4>
                            <p className="product_title">{product_title}</p>
                            <div className="product_price">{product_price}</div>
                            <div className="product_sale">{product_sale}</div>
                            <button className="product_btn">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                {t('product_btn.savat')}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="cart_sarlavha">
                    <h3 className="band_1">{t('cart_sarlavha_5.band_1')}</h3>
                    <h3 className="band_2">{t('cart_sarlavha_6.band_2')}</h3>
                </div>
                <div className="cart_father">
                    {obj_card.map(({ product_name, image, product_price, product_sale, product_title }) => (
                        <div className="cart_son">
                            <div className="img_cart">
                                <img className="iphone" src={image} alt="" />
                            </div>
                            <h4 className="product_name">{product_name}</h4>
                            <p className="product_title">{product_title}</p>
                            <div className="product_price">{product_price}</div>
                            <div className="product_sale">{product_sale}</div>
                            <div className="product_btn_div">
                                <button className="product_btn_minus">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <button className="product_btn_number">
                                    1
                                </button>
                                <button className="product_btn_plus">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="hamma_chegirma">
                    <div className="chegirma_card">
                        <img className="chegirma_card_img" src={apple_macbook} alt="" />
                    </div>
                    <div className="chegirma_card">
                        <img className="chegirma_card_img" src={xiaomi_noutbook} alt="" />
                    </div>
                    <div className="chegirma_card">
                        <img className="chegirma_card_img" src={apple_complect} alt="" />
                    </div>
                </div>
                <div className="cart_sarlavha">
                    <h3 className="band_1">{t('cart_sarlavha_7.band_1')}</h3>
                    <h3 className="band_2">{t('cart_sarlavha_8.band_2')}</h3>
                </div>
                <div className="cart_father">
                    {obj_card.map(({ product_name, image, product_price, product_sale, product_title }) => (
                        <div className="cart_son">
                            <div className="img_cart">
                                <img className="iphone" src={image} alt="" />
                            </div>
                            <h4 className="product_name">{product_name}</h4>
                            <p className="product_title">{product_title}</p>
                            <div className="product_price">{product_price}</div>
                            <div className="product_sale">{product_sale}</div>
                            <button className="product_btn">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                {t('product_btn.savat')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
