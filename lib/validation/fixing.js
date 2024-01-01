export const validateForm = (formData) => {
   const { detail, clientId, selectedCar, total, receive } = formData;

if (!selectedCar) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند  بدون رقم لوحة السيارة",
  };
}

if (!clientId) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند بدون معلومات العميل",
  };
}


if (!detail) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ الاصلاح  بدون وصف ",
  };
}




if (!total) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ  سند بدون قيمة ",
  };
}


if (total < receive) {
  return {
    isValid: false,
    errorMessage: "خلل  .. القمية المستلمة اكبر من القيمة الفعلية ",
  };
}


  return {
    isValid: true,
  };
};
