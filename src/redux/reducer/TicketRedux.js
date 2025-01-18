import { DAT_GHE, HUY_GHE } from "../types/TicketType";

const stateDefault = {
  danhSachGheDangDat: [],
};

const BookTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        // Nếu ghế đã được chọn, xóa khỏi danh sách
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // Nếu ghế chưa được chọn, thêm vào danh sách
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
    }
    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        // Nếu ghế đã được chọn, xóa khỏi danh sách
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};

export default BookTicketReducer;
