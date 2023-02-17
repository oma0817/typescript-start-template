import { api } from "./api";

export const fetcher = async (url: string) =>
  await api(url).then((res) => res.data);

const swrConfig = {
  fetcher,
};

export default swrConfig;
