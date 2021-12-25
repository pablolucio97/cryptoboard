export const formatCurrency = (value: number) => {
  const formatedCurrency = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    maximumFractionDigits: value >= 1 ? 2 : 6,
  }).format(value);
  return formatedCurrency
};

export const formatDate = () => {
  const formatedDate = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
  return formatedDate;
};

export const formatCrypto = (value: number) => {
  const formatedCurrency = Intl.NumberFormat("en-US", {
    maximumFractionDigits: value >= 1 ? 2 : 6,
  }).format(value);
  return formatedCurrency
};
