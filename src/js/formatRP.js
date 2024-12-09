export default function formatRupiah(price) {
    // Ensure the input is a number
    const numPrice = Number(price);
    
    // Check if the input is a valid number
    if (isNaN(numPrice)) {
      return 'Rp0,00';
    }
    
    // Split the number into integer and decimal parts
    const [integerPart, decimalPart] = numPrice.toFixed(2).split('.');
    
    // Add thousands separator
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Combine with Rupiah prefix and decimal part
    return `Rp${formattedInteger},${decimalPart}`;
}