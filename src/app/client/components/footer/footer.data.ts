import { faC, faClock, faGlobe, faMoneyBill, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { TypeaddressFooter, TypeBank, TypeFooter } from "./typefooter";
const itemFooter: Array<TypeFooter> = [
  {
    title: 'Hỗ trợ khách hàng',
    item: ['Thẻ ưu đãi',
      'Trung tâm bảo hành',
      'Thanh toán và giao hàng',
      'Dịch vụ sửa chữa và bảo trì',
      'Doanh nghiệp thân thiết']
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
  {
    title: 'Chính sách Mua hàng và Bảo hành',
    item: ['Quy định chung',
      'Chính sách Bảo mật Thông tin',
      'Chính sách Vận chuyển và Lắp đặt',
      'Chính sách bảo hành',
      'Chính sách đổi trả và hoàn tiền',
      'Quy định giá cả và hình thức thanh toán',
      'Chính sách trả góp'
    ]
  },
]
const footerBank: Array<TypeBank> = [
  {
    icon: faQrcode,
    name: 'QR Code'
  },
  {
    icon: faMoneyBill,
    name: 'Tiền mặt'
  },
  {
    icon: faClock,
    name: 'Trả góp'
  },
  {
    icon: faGlobe,
    name: 'Internet Banking'
  },

]
const addressFooter: Array<TypeaddressFooter> = [
  {
    title: 'Địa chỉ trụ sở chính',
    address: 'Tầng 5, Số 117-119-121 Nguyễn Du, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh'
  },
  {
    title: 'Văn phòng điều hành miền Bắc',
    address: 'Tầng 6, Số 1 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội'
  },
  {
    title: 'Văn phòng điều hành miền Nam',
    address: 'Tầng 11 Minh Long Tower, số 17 Bà Huyện Thanh Quan, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh'
  },
]
export {
  itemFooter,
  footerBank,
  addressFooter
}
