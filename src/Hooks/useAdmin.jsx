import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../ProvidersAuth/AuthProvider";

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      console.log("khela shuru useadmin");
      return res.data?.admin;
    },
  });
  console.log("khela sesh isadmin er ", isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
