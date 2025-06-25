export const checkMonthlyIncomeRange = (income: number) => {
  let label = "₦800,000 - ₦2,000,000"; // default highest range

  if (income < 200000) {
    label = "₦100,000 - ₦200,000";
  } else if (income < 400000) {
    label = "₦200,000 - ₦400,000";
  } else if (income < 800000) {
    label = "₦400,000 - ₦800,000";
  }
  return label;
};
