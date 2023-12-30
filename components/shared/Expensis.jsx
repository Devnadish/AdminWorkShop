import React,{useEffect,useState} from 'react'
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import {  Plus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addCategory, getAllExpencies } from '@/db/payment';
import toast from 'react-hot-toast';
import { Input } from '../ui/input';
import Submit from './Submit';



function Expensis({ setExpname }) {
  const [expName, setExpName] = useState([]);
    const [selectedExp, setSelectedExp] = useState("");
  const fetchExpenses = async () => {
    try {
      const expData = await getAllExpencies();
      setExpName(expData);
    } catch (error) {
      console.error(error);
    }
  };
   const handleSelectChange = (event) => {
     setSelectedExp(event.target.value);
     setExpname(event.target.value);
   };

  const NewItem = ({ id }) => {
    const handcategory = async (data) => {
      const cat = data.get("category");
      const add = await addCategory(cat);
      const expData = await getAllExpencies();
      setExpName(expData);
      toast.remove();
      toast(add, {
        icon: "👏",
      });
    };
    return (
      <>
        <form
          action={handcategory}
          className="bg-black w-full rounded-md flex items-center p-4 gap-1"
        >
          <Label>المصروف</Label>
          <Input name="category" />
          <Submit type="submit">اعتمد</Submit>
        </form>
      </>
    );
  };

  const handleNew = () => {
    toast.custom((t) => <NewItem id={t.id} />, { duration: Infinity });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <div className="relative flex items-center w-full gap-2">
        <select
          className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline-blue text-black focus:border-blue-300"
          value={selectedExp}
          onChange={handleSelectChange}
        >
          <option value="">اختر نوع المصرف</option>
          {expName.map((exp, index) => (
            <option value={exp} key={index}>
              {exp}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleNew}
          className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          +
        </button>
      </div>
    </>
  );
};

export default Expensis


const FruitOption = ({ value, children }) => {
  return <SelectItem value={value}>{children}</SelectItem>;
};
