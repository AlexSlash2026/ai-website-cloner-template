export function Divider() {
  return (
    // Было py-10, стало py-4 (всего 16px отступа сверху и снизу)
    <div className="w-full flex justify-center items-center py-4 opacity-80">
      
      <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-[#D4C8B8]"></div>
      
      <img
        src="/new/sites/stolitsa-turfirma-ru/images/kurai_icon_div.gif"
        alt="Цветок курая"
        className="w-8 h-8 md:w-10 md:h-10 mx-4 object-contain" // Чуть уменьшили сам цветок
      />
      
      <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-[#D4C8B8]"></div>
    </div>
  );
}