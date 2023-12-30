import { Users } from 'lucide-react';
import React from 'react';
import Select from 'react-select';


const ClientSelectComponent = ({ options, value, onChange }) => {
  return (
    <div className="flex items-center justify-center border w-11/12">
      <div className="w-[50px] flex items-center justify-center bg-green-600  h-8">
        <Users />
      </div>
      <select
        className="block w-full px-4 h-8  py-1 border  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-gray-900"
        value={value}
        onChange={onChange}
      >
        <option value="">اختار العميل</option>
        {options.map((option, index) => (
          <option key={index} value={option.clientIDs}>
            {`${option.clientIDs} - ${option.name}`}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ClientSelectComponent;


// const ClientSelectComponent = ({ options, value, onChange }) => {
//   return (
//     <Select
//       className="block w-full text-black" // Apply custom styling class
//       options={options.map((option) => ({
//         value: option,
//         label: (
//           <div key={option.code}>
//             {" "}
//             {/* Ensure each item has a unique key */}
//             <table>
//               <tbody>
//                 <tr>
//                   <td className="data-cell">{option.clientIDs}</td>
//                   <td className="data-cell">{option.name}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ),
//       }))}
//       value={value}
//       onChange={onChange}
//     />
//   );
// };

// export default ClientSelectComponent;
