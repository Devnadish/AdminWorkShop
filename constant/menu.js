import { Siren, MessageCircle, Wrench, SmilePlus, Frown } from "lucide-react";
export const menuItem = [
  { id: 1, title: "خدماتنا", icon: <Wrench />, href: "/service" },
  { id: 2, title: "حجز موعد", icon: <SmilePlus />, href: "/newappoentment" },
  { id: 3, title: "طلب كشف خارجي", icon: <Siren />, href: "/newoutsidecheck" },
  { id: 4, title: "اقتراحات", icon: <MessageCircle />, href: "/newcomment" },
  { id: 5, title: "شكاوي", icon: <Frown />, href: "/newcomplain" },
];

export const DashBoardMenu = [
  { id: 1, title: "كرت صيانة", icon: <Wrench />, href: "/service" },
  { id: 2, title: "سند صرف", icon: <SmilePlus />, href: "/newappoentment" },
  { id: 3, title: "سند قبض", icon: <Siren />, href: "/newoutsidecheck" },
  { id: 4, title: "فاتورة", icon: <MessageCircle />, href: "/newcomment" },
  { id: 5, title: "مشتريات", icon: <Frown />, href: "/newcomplain" },
];

//TODO: Block user menu
