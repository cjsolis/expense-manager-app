export const formatMoneyToCRC = (amount: number) => {
  return amount.toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
  });
};
