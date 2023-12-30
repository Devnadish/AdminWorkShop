export const validateForm = (formData) => {
   const { detail, clientId, selectedCar, total } = formData;

if (!detail) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ الاصلاح  بدون وصف ",
  };
}


if (!clientId) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند بدون معلومات العميل",
  };
}

if (!selectedCar) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ السند  بدون معلومات السيارة",
  };
}

if (!total) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ  سند بدون قيمة ",
  };
}

  return {
    isValid: true,
  };
};
