export const validateForm = (formData) => {
   const { detail, collector,  amount,  } = formData;


if (!detail) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند بدون وصف السند",
  };
}


if (!collector) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند بدون تحديد  نوع المصروف",
  };
}



if (!amount) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ  سند  بدون المبلغ",
  };
}



  return {
    isValid: true,
  };
};
export const fixValidateForm = (formData) => {
  const { detail, collector, amount, fromID, fromName, fixingCode } = formData;


  if (!fromID) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ سند تشغيلي  بدون رقم عميل",
    };
  }
  if (!fromName) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ سند تشغيلي  بدون اسم عميل",
    };
  }
  if (!fixingCode) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ سند تشغيلي  بدون رقم اصلاح",
    };
  }

  if (!detail) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ السند بدون وصف السند",
    };
  }

  if (!collector) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ السند بدون تحديد  نوع المصروف",
    };
  }

  if (!amount) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ  سند  بدون المبلغ",
    };
  }



  return {
    isValid: true,
  };
};
