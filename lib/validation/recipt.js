export const validateForm = (formData,balance) => {
  console.log(balance)
   const  { detail, fromID, fromName, amount, fixingCode }=formData;




if (balance <=0) {
  return {
    isValid: false,
    errorMessage: "اجمالي المقبوضات تجاوزت قيمة الاصلاح",
  };
}



if (!detail) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند بدون وصف السند",
  };
}


if (!fromID) {
  return {
    isValid: false,
    errorMessage:  "لا يمكن حفظ السند بدون رقم العميل اختار السيارة الصحيحة ",
  };
}

if (!fromName) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند  بدون اسم العميل",
  };
}

if (!amount) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ عميل بدون المبلغ",
  };
}

if (!fixingCode) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ عميل بدون رقم الاصلاح",
  };
}


  return {
    isValid: true,
  };
};
