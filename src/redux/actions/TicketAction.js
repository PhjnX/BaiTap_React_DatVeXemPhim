import { DAT_GHE, HUY_GHE } from "../types/TicketType";
export const BookTicketAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const CancelTicketAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
