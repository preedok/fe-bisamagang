import { create } from "zustand";
import {
  getDashboardTransaction,
  getDashboardTransactionDetail,
  getLongStayCargo,
} from "./client";

const useDashboardStore = create((set) => ({
  dashboardTransaction: [],
  dashboardTransactionDetail: [],
  fetchDashboardTransaction: async (lanePosition) => {
    try {
      const data = await getDashboardTransaction(lanePosition);
      set({ dashboardTransaction: data.ResponseData || [] });
      return data.ResponseData || [];
    } catch (error) {
      console.error("Error fetching dashboard transaction:", error);
      return [];
    }
  },
  fetchDashboardTransactionDetail: async (noTiket) => {
    const data = await getDashboardTransactionDetail(noTiket);
    set({ dashboardTransactionDetail: data.ResponseData || [] });
  },
}));

export default useDashboardStore;