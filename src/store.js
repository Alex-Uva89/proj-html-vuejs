import Vue from "vue";


//LOGO
import logo from './img/takeout-logo.png'
// OUR MOST POPULAR DISHES
import fries from './img/skin-on-fries-200x286.jpg'
import choco from './img/choco-cookie-frappe-200x286.jpg'
import donut from './img/donut-burger-200x286.jpg'
// MENU CATEGORIES
import appetizerMenu from './img/background-appetizers-menu.jpg'
import beveragesMenu from './img/background-beverages-menu.jpg'
import burgersMenu from './img/background-burgers-menu.jpg'
import dessertMenu from './img/background-desserts-menu.jpg'
import friesMenu from './img/background-fries-menu.jpg'
import pizzaMenu from './img/background-pizza-menu.jpg'
import sidesMenu from './img/background-sides-menu.jpg'
import specialsMenu from './img/background-specials-menu.jpg'
// LAST NEWS
import lastNews1 from './img/pancake-burger-400x300.jpg'
import lastNews2 from './img/new-milkshake-menu-400x300.jpg'
// FOOTER
import saleCoupon from './img/footer-coupon.png'




export default Vue.observable({
    logo: logo,
    navBar:[
        {
            id:'1',
            item:'Home',
            link: '#',
        },
        {
            id:'2',
            item:'Order Online',
            link: '#',
        },
        {
            id:'3',
            item:'About',
            link: '#',
        },
        {
            id:'4',
            item:'News',
            link: '#',
        },
        {
            id:'5',
            item:'Contact Us',
            link: '#',
        },

    ],
    elCard:[
        {
        id: '1',
        img: fries,
        name: 'Skin On Fries',
        price: '$3.00 - &6.00'
        },
        {
        id: '2',
        img: choco,
        name: 'Choco Cookie Frappe',
        price: '$4.99'
        },
        {
        id: '3',
        img: donut,
        name: 'The Donut Burger',
        price: '$6.99'
        }
    ],
    titleSection1: 'Menu Categories',
    textButtonSection1: 'view the full menu',
    cardMenu:[
        {
            id: '1',
            img: appetizerMenu ,
            title: 'Appetizer',
            link: 'www.google.it'
        },
        {
            id: '2',
            img: burgersMenu ,
            title: 'Burgers',
            link: 'www.google.it'
        },
        {
            id: '3',
            img: pizzaMenu ,
            title: 'Pizzas',
            link: 'www.google.it'
        },
        {
            id: '4',
            img: friesMenu ,
            title: 'Fries',
            link: 'www.google.it'
        },
        {
            id: '5',
            img: sidesMenu ,
            title: 'Sides',
            link: 'www.google.it'
        },
        {
            id: '6',
            img: dessertMenu ,
            title: 'Dessert',
            link: 'www.google.it'
        },
        {
            id: '7',
            img: beveragesMenu ,
            title: 'Beverages',
            link: 'www.google.it'
        },
        {
            id: '8',
            img: specialsMenu ,
            title: 'Specials',
            link: 'www.google.it'
        },
                                                                                                                        
    ],
    categoriesMenu:[
        {
            id: '1',
            icon:'fa-solid fa-burger',
            text: 'Vegetarian',
            color: 'green'
        },
        {
            id: '2',
            icon:'fa-solid fa-burger',
            text: 'Gluten Free',
            color: 'yellow'
        },
        {
            id: '3',
            icon:'fa-solid fa-burger',
            text: 'Dairy Free',
            color: 'blue'
        },
        {
            id: '4',
            icon:'fa-solid fa-burger',
            text: 'Keto Frienldy',
            color: 'brown'
        },
        
    ],
    titleSection2: 'Last News',
    textButtonSection2: 'read more news',
    cardDescription:[
        {
            id: '1',
            img: lastNews1,
            title: 'NEW: The Pancake Burger',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, delectus? Labore quos laboriosam, velit earum iure sunt eaque odio quisquam eveniet ducimus veritatis. Facere alias sit minima eaque explicabo neque.',
        },
        {
            id: '2',
            img: lastNews2,
            title: 'New Milkshake Menu',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, delectus? Labore quos laboriosam, velit earum iure sunt eaque odio quisquam eveniet ducimus veritatis. Facere alias sit minima eaque explicabo neque.',
        },
    
    ],
    listsFooter:{
        item:[
            'Order Online',
            'Appetizer',
            'Burger',
            'Pizzas',
            'Fries',
            'Sides',
            'Desserts',
            'Beverages',
            'Specials',         
            ],
        item2:[
            'navigate',
            'Home',
            'Alternate Home',
            'Menu',
            'About',
            'News',
            'contact Us',
            'Beverages',
            'Cart',         
             ],
        item3:[
            'My Account',
            'Terms of Service',
            'Privacy Policy',
            'img',
            'img',         
             ],
    },
    listOpenHour:[
        {
            day: 'Mon',
            time: '10AM to 11PM'
        },
        {
            day: 'Tue',
            time: '10AM to 11PM'
        },
        {
            day: 'Wen',
            time: '10AM to 11PM'
        },
        {
            day: 'Thu',
            time: '10AM to 11PM'
        },
        {
            day: 'Sat',
            time: '10AM to 11PM'
        },
        {
            day: 'Sun',
            time: '10AM to 11PM'
        },

    ],
    listVoucher: [
        {
            titleListVoucher: 'Voucher',
            text:[
                'Just Use The Code',
                 'At Checkout'
                ],
            marker:'First Order',
            img:saleCoupon,
        }
    ],   
    formFooter: [
        {
            title:'Stay in the loop',
            small: [
                'Sign up to receive up to date news and offers directly in your inbox',
                '@copyright 2012 - 2020 | avada theme by',
                'ThemeFusion',
                '| All Right reserved | Powered by ',
                'WorldPress'
            ],
            icons: [
                logo,
                logo,
                logo,
                logo,
                logo,
                logo,
            ]
        }
    ]      
});