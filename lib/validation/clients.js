export const validateForm = (formData) => {
  const { name, mobile, CarNo } = formData;

  if (!name) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ عميل بدون اسم",
    };
  }

  if (!mobile) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ عميل بدون رقم جوال",
    };
  }

if (!CarNo) {
  return {
    isValid: false,
    errorMessage: "لا يمكن حفظ عميل بدون معلومات السيارة",
  };
}


  return {
    isValid: true,
  };
};
