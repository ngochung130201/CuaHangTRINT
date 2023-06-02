import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TyPromo } from './promo.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { setSwiperInstance } from '../../helper/autoPlay'
import swiper from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],

})
export class PromoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [

    {
      url:
        'https://lh3.googleusercontent.com/ZQQmpDCHlyC2c2fC5QY2BcDQ0F0UhZMK6A0r1mE0sUGskENaJM8PCD6FcazTaTtQOjtLN_k9CLX3FfAf4YqoBxDPqZQKg6A=rw-w1232',
      alt: 'nature2',
    },
    {
      url:
        'https://lh3.googleusercontent.com/vxKwOtHwYulGicB4w4clb3YA4pEzlTBj21Xy_Msqd1pVvuUvoJfoACUWBeyg2gb5iu_m2N02FgU2TXm_0Cw4Spv7WKWX_vvN=rw-w2048',
      alt: 'nature2',
    },

    {
      url:
        'https://lh3.googleusercontent.com/6cWTMPs-sEhGY0YiB7XIUlbn8_bQINU0z-jkPadeJMQPfLHkuLTgID2i16t7AnyGTm7Loc88dQuSXPGQqGyuAS7uCO3VXPo7=rw-w1232',
      alt: 'nature2',
    },
    {
      url:
        'https://lh3.googleusercontent.com/ed-EUWrquTiAilMCiELWxMAbdeI8U1R9qFLvn9ahBL_jte6mB1n2JTOwm1xLggWHfc1CM9VIX4zTxoMdrDYFqFmzmpQqohg=rw-w1232',
      alt: 'nature2',
    },
    {
      url:
        'https://lh3.googleusercontent.com/toBmEr-xIlRPaWaYNDcnjuPapgSihWllIIZBERG_ySRjDdgWwrCX-M7fEeLSkcnHw81IK6JpGoOrPf1-GprV2MZr1Su7QMdD=rw-w1232',
      alt: 'nature2',
    },


  ]
  listPromo: Array<TyPromo> = [{
    id: '1',
    image: 'https://lh3.googleusercontent.com/fyvevQRxfSSiCjI9VUYKdKc9D5vof5K01e8DRgk2BsLDKe9YDLP_3IwB8H7CX6FVdo6rV-DhmNTMb6F1vJRrbL751fZRIDQmGA=rw-w523',
    name: 'Mua ROG Nhận Lì Xì Khủng',
    createDate: new Date(),
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/04TghJkCnJECuOjAJqmd6F9YdFkHBKThNrxg5THVw2pVXKiVAMaCiUp_fr3wm3rfm7FIOfF5SW8wJ68S7NaW0QDhssNZIhjG=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/4dVq9_24hSfIhOU79Ou9zhJ2oLbnIr5wuFFzeJ8M8OUcAi6897SoCN5Mr7GS7MklJr2urv6-iwSVhotLRpl6FYTc0Me1fxJLDg=rw-w524',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '4',
    image: 'https://lh3.googleusercontent.com/xkWL05Kvqu6a5wuKpHoXP9QnfrIs7-o5cqbHvC2pvpI_IBsKhPl_WQQtb9f9yWaVvzq_zawUQLVkpWpIkKaJ6pHtMvVlFdua=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '5',
    image: 'https://lh3.googleusercontent.com/xr4xA_NwvXyOBJihFcZZ0aBbGBC3aZEOyw4ep1qmPFu_aBwiqUzlLaphgZk8u_9E9jZKPck2t-qFgP99z_vVy5RtKb06o1g0=rw-w1836',
    name: 'Mua ROG Nhận Lì Xì Khủng',
    createDate: new Date(),
  },
  {
    id: '6',
    image: 'https://lh3.googleusercontent.com/fCNZAXQnCOpjrGGp-xFwKUSbj-xuCAv2rJRW2tJBQBpgtPOjx8rpU9FRmXYdr-woIuRB2CCvJEuo4aElxVNukBTxaU6LyHaVkg=rw-w1046',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '7',
    image: 'https://lh3.googleusercontent.com/CtR7ezbt0-oi0TpGBN5XM2IV-rayCA6qcNEu2LsWBG0Rgy9PvWhGS2207pCRe3jZxjZ0nEgwI-if9bzIPdcjqmP7A2ODiDUX=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  },
  {
    id: '8',
    image: 'https://lh3.googleusercontent.com/OSjKhh9HiCViC3QT7Mi6Hp5hyGeT_fO2xqFw9SGT4tq2WnKHp73kQCjw8cLN992U_6z9bUhJnC4IPbFqECQGdDXFEOWF3kODuQ=rw-w523',
    name: 'Chuẩn Màu Sắc, Đỉnh Đồ Họa Cùng Màn Hình Asus',
    createDate: new Date(),
  }

  ]

  setSwiperInstance = (swiper: Swiper) => {
    setInterval(() => {
      swiper.slideNext();
    }, 3000);
  }

}
