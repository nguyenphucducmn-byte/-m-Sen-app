import { Map, Ticket, Clock, User, Home, Search, Filter, Navigation, ChevronLeft, Eye, EyeOff, QrCode, MapPin, Coffee, Info, Layers, Flower2 } from 'lucide-react';

export const MOCK_ATTRACTIONS = [
  { id: '1', name: 'Tàu lượn siêu tốc', category: 'Rides', waitTime: '45 phút', x: 35, y: 25, icon: Flower2, color: 'bg-[#D81B60]' },
  { id: '2', name: 'Sân khấu Hoàng Gia', category: 'Shows', waitTime: '10 phút', x: 75, y: 15, icon: Flower2, color: 'bg-[#D81B60]' },
  { id: '3', name: 'Thiên đường Burger', category: 'Food', waitTime: '5 phút', x: 45, y: 45, icon: Flower2, color: 'bg-[#D81B60]' },
  { id: '4', name: 'Công viên nước', category: 'Rides', waitTime: '60 phút', x: 75, y: 45, icon: Flower2, color: 'bg-[#D81B60]' },
  { id: '5', name: 'Vòng xoay ngựa gỗ', category: 'Rides', waitTime: '15 phút', x: 25, y: 65, icon: Flower2, color: 'bg-[#D81B60]' },
  { id: '6', name: 'Vườn hoa Sen', category: 'Facilities', waitTime: '0 phút', x: 65, y: 80, icon: Flower2, color: 'bg-[#D81B60]' },
];

export const MOCK_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'rides', label: 'Trò chơi' },
  { id: 'shows', label: 'Biểu diễn' },
  { id: 'food', label: 'Ẩm thực' },
  { id: 'facilities', label: 'Tiện ích' },
  { id: 'shops', label: 'Cửa hàng' },
];

export const MOCK_TICKETS = [
  {
    id: 'TKT-8923',
    type: 'Vé vào cổng',
    name: 'Vé Khám Phá 1 Ngày',
    userName: 'NGUYEN THI HONG NGOC',
    members: 2,
    benefits: ['Tất cả trò chơi', 'Vào cổng tiêu chuẩn'],
    price: '120.000đ',
    expiry: 'Chỉ có giá trị hôm nay',
  },
  {
    id: 'TKT-1044',
    type: 'Vé trò chơi',
    name: 'Vé Ưu Tiên',
    userName: 'NGUYEN THI HONG NGOC',
    members: 1,
    benefits: ['Bỏ qua hàng chờ (x5)'],
    price: '50.000đ',
    expiry: 'Chỉ có giá trị hôm nay',
  }
];
