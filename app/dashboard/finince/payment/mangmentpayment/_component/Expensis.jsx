import React,{useEffect,useState} from 'react'
 
import { getAllExpencies } from '@/db/payment';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import NewExpensies from './NewExpensies';
import DailogBox from '@/components/sharedcompnent/DailogBox';



function Expensis({ setExpname }) {
  const [expName, setExpName] = useState([]);
    const [selectedExp, setSelectedExp] = useState("");
    const [open, setOpen] = useState(false);
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

  

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <div className="relative flex items-center w-full gap-2">
        <select
          className="w-full h-10 pl-3 pr-8 text-base   border border-border  appearance-none  text-foreground focus:border-blue-300"
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
        <Button
          type="button"
          onClick={()=>{setOpen(true)}}
          className="ml-2 px-4 py-2 text-white bg-border rounded-none  hover:bg-blue-600 focus:outline-none"
        >
          +
        </Button>
      </div>
      <DailogBox
        open={open}
        setOpen={setOpen}
        title={"مصروف جديد"}
      >
        <NewExpensies setExpName={setExpName} setOpen={setOpen}/>
      </DailogBox>
    </>
  );
};

export default Expensis

