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
} from  "lucide-react";
import { FaCarCrash } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaTools, GiExpense, GiOfficeChair, ImagePlus, LiaCashRegisterSolid, Users } from "@/lib/icons";
const iconColor="text-primary"
export const menuItem = [
  { id: 1, title: "خدماتنا", icon: <Wrench />, href: "/service" },
  { id: 2, title: "حجز موعد", icon: <SmilePlus />, href: "/newappoentment" },
  { id: 3, title: "طلب كشف خارجي", icon: <Siren />, href: "/newoutsidecheck" },
  { id: 4, title: "اقتراحات", icon: <MessageCircle />, href: "/newcomment" },
  { id: 5, title: "شكاوي", icon: <Frown />, href: "/newcomplain" },
];

export const DashBoardMenu = [
  { id: 1, title: "كرت صيانة", icon: <Wrench className={iconColor}/>, href: "/service" },
  { id: 2, title: "سند صرف", icon: <SmilePlus className={iconColor} />, href: "/newappoentment" },
  { id: 3, title: "سند قبض", icon: <Siren className={iconColor} />, href: "/newoutsidecheck" },
  { id: 4, title: "فاتورة", icon: <MessageCircle className={iconColor}/>, href: "/newcomment" },
  { id: 5, title: "مشتريات", icon: <Frown className={iconColor}/>, href: "/newcomplain" },
];

//TODO: Block user menu

export const clientMenu = [
  {
    id: 1,
    title: "عميل جديد",
    icon: <UserRoundPlus size={20} strokeWidth={1}   className="text-primary"/>,
    href: "/dashboard/clients/new",
  },
  {
    id: 2,
    title: "اضافة سيارة",
    icon: <Car size={20} strokeWidth={1}  className="text-primary"/>,
    href: "/dashboard/car",
  },
  {
    id: 3,
    title: " كشف حساب عميل",
    icon: <Receipt size={20} strokeWidth={1}  className="text-primary"/>,
    href: "/dashboard/clients/statment/",
  },
 
];

export const maintainanceMenu = [
  {
    id: 1,
    title: "كرت صيانة ",
    icon: <FaCarCrash size={20} strokeWidth={1}  className="text-primary"/>,
    href: "/dashboard/fixing/neworder",
  },
  {
    id: 2,
    title: "اضافة صور لكرت الصيانة",
    icon: <ImagePlus size={20} strokeWidth={1}  className="text-primary"/>,
    href: "/dashboard/fixing/addimage",
  },
  // {
  //   id: 5,
  //   title: "ملاحظات كرت صيانة",
  //   icon: <MdEditNote size={20}   />,
  //   href: "/service",
  // },
  {
    id: 3,
    title: "عرض كروت الصيانة",
    icon: <FileEdit size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/displayorders",
  },
  {
    id: 4,
    title: "تفاصيل كرت صيانة",
    icon: <ViewIcon size={20} strokeWidth={1} />,
    href: "/dashboard/fixing/cardstatment",
  },
 

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
    icon: <LiaCashRegisterSolid size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/finince/recipt",
  },
  {
    id: 2,
    title: "سند صرف تشغيلي",
    icon: <FaTools size={20} strokeWidth={1} className={iconColor} />,
    href: "/dashboard/finince/payment/fixpayment",
  },
  {
    id: 3,
    title: "سند صرف اداري",
    icon: <GiOfficeChair size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/finince/payment/mangmentpayment",
  },
  {
    id: 4,
    title: "فاتورة",
    icon: <ScrollText size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/finince/invoice",
  },
];


export const settingeMenu = [
  {
    id: 3,
    title: "المصاريف الادارية ",
    icon: <GiExpense size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/expensis",
  },
  {
    id: 1,
    title: "المستخدمين ",
    icon: <Users size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/signup",
  },
 
  {
    id: 2,
    title: "التعريفات ",
    icon: <BookOpenText size={20} strokeWidth={1} className={iconColor}/>,
    href: "/dashboard/definitions",
  },
 
];
