export const WA_DISPLAY_NUMBER = "0857-1989-4601";
export const WA_RAW_NUMBER = "085719894601";
export const WA_PHONE_INTL = "6285719894601";

export const getWhatsAppUrl = (topic?: string) => {
  const message = `Halo Tim FoodOrdering, saya tertarik untuk menggunakan sistem FoodOrdering untuk bisnis F&B saya.

• Nama: 
• Nama Kafe / Resto: 
• Kota / Lokasi: 
• Perkiraan Jumlah Meja: 
• Kebutuhan / Pertanyaan: ${topic ? `[Mengenai ${topic}] ` : ""}

Mohon informasi lebih lanjut mengenai cara penggunaan dan demonya. Terima kasih!`;

  return `https://wa.me/${WA_PHONE_INTL}?text=${encodeURIComponent(message)}`;
};
