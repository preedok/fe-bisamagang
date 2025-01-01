import api from "../../../../service/api";
import { config } from "../../../../utils/config";
export const getDashboardTransaction = async (lanePosition) => {
  try {
    const response = await api.post("/GetAMSDashboardTransaction",
      {
        branchCode: config.branchCode,
        terminalCode: config.terminalCode,
        lanePosition,
      });
    return response.data;
  } catch (error) {
    console.error("Error in getDashboardTransaction:", error);
    throw error;
  }
};
export const getDashboardTransactionDetail = async (noTiket) => {
  try {
    const response = await api.post("/GetAMSDashboardDetailDT", {
      noTiket,
      branchCode: config.branchCode,
      terminalCode: config.terminalCode,
      length: 9999,
      start: 0,
      draw: 1,
      search: "",
      order: null,
      columns: null,
    });
    return response.data;
  } catch (error) {
    console.error("Error in getDashboardTransactionDetail:", error);
    throw error;
  }
};