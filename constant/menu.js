import {
  Car,
  Receipt,
  UserRoundPlus,
  UsersRound,
  Scale,
  FileCheck,
  FileEdit,
  FilePlus,
  PlusCircle,
  ViewIcon,
  BadgeDollarSign,
  CarIcon,
  ScrollText,
  ShoppingCart,
  Smile,
  BookOpenText,
  Siren,
  MessageCircle,
  Wrench,
  SmilePlus,
  Frown,
} from "lucide-react";
import { FaCarCrash } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { BsTools } from "react-icons/bs";

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

export const clientMenu = [
  {
    id: 1,
    title: "عميل جديد",
    icon: <UserRoundPlus size={20} strokeWidth={1} />,
    href: "/dashboard/clients/new",
  },
  {
    id: 2,
    title: "  اضافة سيارة",
    icon: <Car size={20} strokeWidth={1} />,
    href: "/dashboard/clients/addcar",
  },
  {
    id: 3,
    title: " كشف حساب عميل",
    icon: <Receipt size={20} strokeWidth={1} />,
    href: "/dashboard/clients/statment/",
  },
  {
    id: 4,
    title: " ارصدة العملاء",
    icon: <Scale size={20} strokeWidth={1} />,
    href: "/dashboard/clients/display",
  },
];

export const maintainanceMenu = [
  {
    id: 1,
    title: "كرت صيانة ",
    icon: <FaCarCrash size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/neworder",
  },
  {
    id: 2,
    title: "عرض كروت الصيانة",
    icon: <FileEdit size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/displayorders",
  },
  {
    id: 3,
    title: "تفاصيل كرت صيانة",
    icon: <ViewIcon size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/cardstatment",
  },
  // {
  //   id: 4,
  //   title: "ملاحظات كرت صيانة",
  //   icon: <MdEditNote size={20} strokeWidth={1} />,
  //   href: "/service",
  // },

  {
    id: 5,
    title: "اقفال كرت صيانة",
    icon: <FileCheck size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/closeorder",
  },
];


export const fininceMenu = [
  {
    id: 1,
    title: "سند قبض ",
    icon: <Smile size={20} strokeWidth={1} />,
    href: "/dashboard/finince/recipt",
  },
  {
    id: 2,
    title: "سند صرف تشغيلي",
    icon: <Wrench size={20} strokeWidth={1} />,
    href: "/dashboard/finince/fixpayment",
  },
  {
    id: 3,
    title: "سند صرف اداري",
    icon: <Frown size={20} strokeWidth={1} />,
    href: "/dashboard/finince/mangmentpayment",
  },
  {
    id: 4,
    title: "فاتورة",
    icon: <ScrollText size={20} strokeWidth={1} />,
    href: "/dashboard/finince/invoice",
  },
];


export const settingeMenu = [
  {
    id: 1,
    title: "المستخدمين ",
    icon: <Smile size={20} strokeWidth={1} />,
    href: "/dashboard/signup",
  },
  {
    id: 2,
    title: "التعريفات ",
    icon: <BookOpenText size={20} strokeWidth={1} />,
    href: "/dashboard/definitions",
  },
];
