/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import { CancelTicketAction } from "../redux/actions/TicketAction";

function SeatsInfo({ danhSachGheDangDat, dispatch }) {
  // Tính tổng tiền
  const tongTien = danhSachGheDangDat.reduce((tong, ghe) => tong + ghe.gia, 0);

  const renderSeatButtons = () => (
    <div className="mt-5">
      <button className="gheDuocChon mb-5"></button>
      <span className="text-white text-2xl ml-4">Ghế đã đặt</span>
      <br />
      <button className="gheDangChon mb-5"></button>
      <span className="text-white text-2xl ml-4">Ghế đang đặt</span>
      <br />
      <button className="ghe" style={{ marginLeft: "0%" }}></button>
      <span className="text-white text-2xl ml-1">Ghế chưa đặt</span>
    </div>
  );

  const renderSeatRows = () => (
    <tbody>
      {danhSachGheDangDat.map((gheDangDat, index) => (
        <tr key={index} className="text-white text-xl">
          <td className="border px-4 py-2">{gheDangDat.soGhe}</td>
          <td className="border px-4 py-2">{gheDangDat.gia}</td>
          <td className="border px-4 py-2 text-center">
            <button
              onClick={() => dispatch(CancelTicketAction(gheDangDat.soGhe))}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Huỷ
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );

  const renderFooter = () => (
    <tfoot>
      <tr className="text-white text-xl">
        <td className="border px-4 py-2"></td>
        <td className="border px-4 py-2 font-bold">Tổng Tiền</td>
        <td className="border px-4 py-2 text-center">
          {tongTien.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
      </tr>
    </tfoot>
  );

  return (
    <div>
      {renderSeatButtons()}
      <div className="mt-5">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="text-white text-2xl">
              <th className="border-b px-4 py-2 text-left">Số ghế</th>
              <th className="border-b px-4 py-2 text-left">Giá</th>
              <th className="border-b px-4 py-2"></th>
            </tr>
          </thead>
          {renderSeatRows()}
          {renderFooter()}
        </table>
      </div>
    </div>
  );
}

// Kết nối Redux với component
const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.BookTicketReducer.danhSachGheDangDat,
});

export default connect(mapStateToProps)(SeatsInfo);
