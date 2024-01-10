import React from 'react'
import {  Car } from "lucide-react";
import DeleteClient from "@/components/pagecomponent/back/clients/client/DeleteClient";
import { ScrollArea  } from "@/components/ui/scroll-area";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function ShowClients({ clients }) {
    return (
        <div className='max-w-4xl flex items-center justify-center'>
            <ScrollArea className="h-[50vh] border  rounded-md w-full flex items-center justify-center p-4 ">
        <Table dir='RTL' className='p-2'>
            <TableCaption className='font-tajwal text-right underline underline-offset-2 text-base' >  عدد العملاء : <span>{clients.length}</span></TableCaption>
            <TableHeader>
                <TableRow className=''>
                    <TableHead className="text-right">الاسم</TableHead>
                    <TableHead className=" text-right">الجوال</TableHead>
                    <TableHead className=" text-right">الايميل</TableHead>
                    <TableHead className=" text-right"> رقم السيارة</TableHead>
                    <TableHead className=" text-right"> اسم السيارة</TableHead>
                    <TableHead className=" text-right"> <Car /></TableHead>
                    <TableHead className=""> </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {clients?.map((client) => (
                    <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.clientName}</TableCell>
                        <TableCell className="font-medium">{client.mobile}</TableCell>
                        <TableCell className="font-medium">{client.email}</TableCell>
                        <TableCell className="font-medium">{client.CarNo}</TableCell>
                        <TableCell className="font-medium">{client.carName}</TableCell>
                        <TableCell className="font-medium">{client.CarCount}</TableCell>
                        <TableCell className="font-medium">
                            <DeleteClient className="text-red-500 text-2xl h-6 w-6 cursor-pointer" id={client.id} />
                            </TableCell>
                    </TableRow>
                       ))}
          </TableBody>
        </Table>
            </ScrollArea>
        </div>

    )
}

export default ShowClients



// const ShowClients = ({ clients }) => {
//     return (
//         <div className="w-full flex flex-col md:max-w-3xl">
//             <p className="w-full flex items-center justify-start  bg-black py-1 font-tajwal">
//                 عدد العملاء : <span>{clients.length}</span>
//             </p>
//             <ScrollArea className="h-[50vh]    rounded-b-md w-full     ">
//                 {/* <div className="flex w-1/2 flex-col w-full items-center justify-center "> */}

//                 <table
//                     className="rounded  divide-y divide-gray-200 rounded-lg shadow-md text-black w-full "
//                     dir="rtl"
//                 >
//                     <thead className="bg-gray-50 font-tajwal">
//                         <tr>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right  text-base  font-medium text-gray-500 uppercase tracking-wider px-2 font-tajwal"
//                             >
//                                 الاسم
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right  text-base font-medium text-gray-500 uppercase tracking-wider "
//                             >
//                                 الجوال
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 الايميل
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 رقم السيارة
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 اسم السيارة
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right text-base font-medium text-gray-500 uppercase tracking-wider text-center"
//                             >
//                                 <Car />
//                             </th>
//                             <th
//                                 scope="col"
//                                 className=" py-3 text-right text-base font-medium text-gray-500 uppercase tracking-wider text-left"
//                             >
//                                 {/* حذف و تعديل */}
//                             </th>

//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {clients?.map((client) => (
//                             <tr key={client.mobile} className="hover:bg-gray-100">
//                                 <td className=" py-1 whitespace-nowrap text-right px-2">
//                                     <span className="text-sm font-medium">{client.clientName}</span>
//                                 </td>
//                                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                                     <span className="text-sm text-gray-500 ">
//                                         {client.mobile}
//                                     </span>
//                                 </td>

//                                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                                     <span className="text-sm text-gray-500 ">
//                                         {client.email}
//                                     </span>

//                                 </td>
//                                 {/* car NO  */}
//                                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                                     <span className="text-sm text-gray-500 ">
//                                         {client.CarNo}
//                                     </span>
//                                 </td>
//                                 {/* car Name  */}
//                                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                                     <span className="text-sm text-gray-500 ">
//                                         {client.carName}
//                                     </span>
//                                 </td>
//                                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                                     <span className="text-sm text-gray-500 ">
//                                         {client.CarCount}
//                                     </span>
//                                 </td>




//                                 <td className=" py-1 whitespace-nowrap text-center  text-right px-2">
//                                     {/* <span className="text-sm text-gray-500">{client.email}</span> */}
//                                     <DeleteClient
//                                         className="text-red-500 text-2xl h-6 w-6 cursor-pointer"
//                                         id={client.id}
//                                     />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 {/* </div> */}
//             </ScrollArea>
//         </div>
//     );
// }
