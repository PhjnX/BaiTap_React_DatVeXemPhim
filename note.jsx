export default function SeatsLine({ hangGhe }) {
  // Hàm renderGhe
  const renderGhe = () => {
    // Kiểm tra xem danh sách ghế có tồn tại không
    if (!hangGhe || !hangGhe.danhSachGhe) {
      return null;
    }

    return hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      // Kiểm tra nếu ghế đã được đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  return (
    <div className="text-white text-left ml-5 mt-3 text-3xl">
      {hangGhe.hang}
      {/* Gọi hàm renderGhe để hiển thị danh sách ghế */}
      {renderGhe()}
    </div>
  );
}
