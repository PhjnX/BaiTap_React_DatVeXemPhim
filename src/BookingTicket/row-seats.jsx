/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { BookTicketAction } from "../redux/actions/TicketAction";

function SeatsLine({ hangGhe, soHangGhe, danhSachGheDangDat, datGhe }) {
  // Hàm kiểm tra và lấy các kiểu CSS của ghế
  const getGheStyles = (ghe) => {
    let cssGheDaDat = "";
    let disabled = false;

    if (ghe.daDat) {
      cssGheDaDat = "gheDuocChon";
      disabled = true;
    }

    const indexGheDangDat = danhSachGheDangDat.findIndex(
      (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
    );
    const cssGheDangDat = indexGheDangDat !== -1 ? "gheDangChon" : "";

    return { cssGheDaDat, cssGheDangDat, disabled };
  };

  // Render ghế cho một hàng ghế
  const renderGhe = () => {
    if (!hangGhe || !hangGhe.danhSachGhe) return null;

    return hangGhe.danhSachGhe.map((ghe, index) => {
      const { cssGheDaDat, cssGheDangDat, disabled } = getGheStyles(ghe);

      return (
        <button
          onClick={() => datGhe(ghe)}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  // Render số ghế cho hàng đầu tiên (chỉ hiển thị số ghế)
  const renderSoHang = () => {
    return hangGhe.danhSachGhe.map((ghe, index) => (
      <button className="rowNumber" key={index}>
        {ghe.soGhe}
      </button>
    ));
  };

  // Render hàng ghế
  const renderHangGhe = () => {
    if (soHangGhe === 0) {
      return (
        <div className="ml-5">
          {hangGhe.hang}
          {renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang}
          {renderGhe()}
        </div>
      );
    }
  };

  return (
    <div className="text-white text-left ml-5 mt-3 text-3xl">
      {renderHangGhe()}
    </div>
  );
}

// Kết nối Redux với component
const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BookTicketReducer.danhSachGheDangDat,
});

const mapDispatchToProps = (dispatch) => ({
  datGhe: (ghe) => dispatch(BookTicketAction(ghe)),
});

// Kết nối Redux với component SeatsLine
export default connect(mapStateToProps, mapDispatchToProps)(SeatsLine);
