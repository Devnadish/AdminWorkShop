export const validateForm = (formData) => {
  const { carName, Model,  CarNo, BodyNo } = formData;

  if (!CarNo) {
    return {
      isValid: false,
      errorMessage: "لا يمكن حفظ سيارة يدون رقم لوحة",
    };
  }


  return {
    isValid: true,
  };
};
