import { axiosHeaderConfig } from "../api";
import { axiosWithToken } from "../axios-with-token";
import { storeBackEndRoutes } from "../store-backend-routes";
import { IStore } from "./store.interface";

class _StoreService {
  updateAboutCompany = ({
    id,
    store,
  }: {
    id: number;
    store: Partial<IStore>;
  }) => {
    return axiosWithToken.post<{ store: IStore }>(
      storeBackEndRoutes.stores.aboutCompany(id),
      store,
      axiosHeaderConfig()
    );
  };

  updateBankInfo = ({ id, store }: { id: number; store: Partial<IStore> }) => {
    return axiosWithToken.post<{ store: IStore }>(
      storeBackEndRoutes.stores.bankInfo(id),
      store,
      axiosHeaderConfig()
    );
  };
}

export const StoreService = new _StoreService();
