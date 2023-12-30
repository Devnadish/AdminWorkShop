export const validateForm = (formData) => {
  const { name, mobile } = formData;

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

  return {
    isValid: true,
  };
};
