import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"; // ✅ Make sure this is correct

const useMenu = () => {
  const axiosSecure = useAxiosSecure(); // ✅ useAxiosSecure properly called

  const {
    data: menus = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      return res.data;
    },
  });

  return [menus, isLoading, refetch]; // ✅ include isLoading for spinner/loading check
};

export default useMenu;
