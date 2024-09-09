export const utilFormatNumber = (value: number | string) => {
    const numericValue = Number(value);

    if (isNaN(numericValue)) {
      return "Invalid Number";
    }
    if (numericValue === 0) {
      return "0.00";
    }
    const hasDecimal = /\./.test(String(value));

    const formattedNumber = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: hasDecimal ? 2 : 0,
      maximumFractionDigits: hasDecimal ? 2 : 0,
    }).format(numericValue);

    return formattedNumber.replace(/,/g, "");
  };