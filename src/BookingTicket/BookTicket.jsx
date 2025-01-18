import "./BookTicket.scss";
import SeatsInfo from "./row-seats-info";
import danhsachGheData from "../Data/danhSachGhe.json";
import SeatsLine from "./row-seats";
export default function BookTicket() {
  const renderHangGhe = () => {
    return danhsachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <SeatsLine hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  return (
    <div className="bookingMovie fixed top-0 left-0 w-full h-full bg-cover bg-[url('./images/bgmovie.jpg')]">
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80">
        <div className="max-w-full px-4">
          <div className="flex">
            <div className="w-2/3 text-center">
              <h1 className="text-yellow-300 text-5xl font-bold mr-56">
                ĐẶT VÉ XEM PHIM BHP CINEMA
              </h1>
              <div className="text-white font-bold text-2xl mt-3 mr-56">
                Màn Hình
              </div>
              <div className="mt-2 flex flex-col justify-center ">
                <div className="screen"></div>
              </div>
              {renderHangGhe()}
            </div>
            <div className="w-1/3">
              <h1 className="text-orange-400 text-4xl font-bold mt-4">
                DANH SÁCH GHẾ BẠN CHỌN
              </h1>
              <SeatsInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
