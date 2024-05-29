import slides from './slides';
import banners from './banners';
import productImgs from './products';
import accessoriesImg from './accessoriesCategories';
import pcComponentsImg from './pcComponentsCategories';
import secondHandsImg from './secondhandsCategories';
import techNewsImg from './techNews';
import { paymentIcons, webIcons } from './icons';
import logo from './logo.svg'
import cartEmpty from './Cart-empty-v2.webp'

const images = {
    logo: logo,
    slides: slides,
    banners: banners,
    products: productImgs,
    categories: { accessories: accessoriesImg, pcComponents: pcComponentsImg, secondHands: secondHandsImg },
    techNews: techNewsImg,
    cartEmpty: cartEmpty,
};
export { paymentIcons, webIcons };
export default images;
