import INPUT from '@/components/sharedcompnent/INPUT';
import Submit from '@/components/sharedcompnent/Submit';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addCategory, getAllExpencies } from '@/db/payment';
import { GiOfficeChair } from '@/lib/icons';
import React from 'react'



const NewExpensies = ({ setExpName,setOpen  }) => {
  const handcategory = async (data) => {
    const cat = data.get("category");
    const add = await addCategory(cat);
    const expData = await getAllExpencies();
    setExpName(expData);
    setOpen(false)

  };
  return (
    <>
      
        <form
          action={handcategory}
          className="bg-accent w-full rounded-md flex items-center p-4 gap-4"
        >
        
          <INPUT name="category"  icon={<GiOfficeChair size={20}/> } h={"h-11"}/>
          <Submit title='' w={"w-12"} color='bg-border'/>
        </form>
       
    </>
  );
};

 

export default NewExpensies