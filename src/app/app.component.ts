import { Component, HostListener } from '@angular/core';
import { faFacebook, faFacebookF, faGoogle, IconDefinition, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronUp, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

type TyContact = {
  id: string,
  icon: IconDefinition,
  style: string,
  tooltip: string,
  link: string | number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DoAnPC';
  isShow: boolean = true;
  topPosToStartShowing = 100;
  upIcon = faCircleChevronUp



  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  contacts: Array<TyContact> = [
    {
      id: '1',
      icon: faPhone,
      style: ' bg-[#18E5BD] text-white  mb-[260px] text-white ',
      tooltip: 'Hotline',
      link: 'tel:0342377745'

    },
    {
      id: '2',
      icon: faEnvelope,
      style: ' bg-[#FF8F37]  mb-[200px]  ',
      tooltip: 'Email hỗ trợ',
      link: 'mailto:huynhngochungit.com'
    },
    {
      id: '3',
      icon: faLocationDot,
      style: ' bg-[#F7B022]  mb-[140px] text-white ',
      tooltip: 'Showroom',
      link: 'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=vi&msa=0&t=h&z=18&vpsrc=0&err=1&mid=1qtboVzEjhLW3ezBB7aK-EKdODS4&ll=12.251500000000028%2C109.19680000000002'
    },
    {
      id: '4',
      icon: faFacebookF,
      style: 'bg-[#4378D0] text-white mb-[80px]',
      tooltip: 'Like fanpage & trúng quà minigame mỗi ngày',
      link: 'https://www.facebook.com/profile.php?id=100025586114979'
    },
    {
      id: '5',
      icon: faFacebookMessenger,
      style: 'bg-[#4378D0] text-white mb-[20px] ',
      tooltip: 'Like fanpage & trúng quà minigame mỗi ngày',
      link: 'https://www.facebook.com/profile.php?id=100025586114979'
    }
  ];

}
