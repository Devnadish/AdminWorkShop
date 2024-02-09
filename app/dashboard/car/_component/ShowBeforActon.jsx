import { FormAction } from "./FormAction";
import DailogBox from "@/components/sharedcompnent/DailogBox";

export const ShowBeforActon = ({ open, setOpen, type, CarData, setCarData }) => {
  return (
    <DailogBox
      open={open}
      setOpen={setOpen}
      title={type === "update" ? "تعديل ملف سيارة" : "حذف ملف سيارة"}
      borederRed={type === "update" ? "border-primary" : "border-destructive"}
    >
      <FormAction
        type={type}
        CarData={CarData}
        setCarData={setCarData}
        setOpen={setOpen}
      />
    </DailogBox>
  );
};
