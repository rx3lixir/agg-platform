// Форматирование стоимости
export function formatPrice(price: number) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
}

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  if (value === undefined || value === null) {
    return <div className="font-semibold">-</div>;
  }

  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numericValue)) {
    return <div className="font-semibold">Неверная цена</div>;
  }

  return <div className="font-semibold">{formatPrice(numericValue)}</div>;
};

export default Currency;
