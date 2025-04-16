import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    axiosSecure.delete(`/users/${id}`).then((res) => {
      Swal.fire("deleted !");
      refetch();
    });
  };

  const handleRoleAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire("role modified!");
      }
    });
  };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>Quality Control Specialist</td>
                  <td>
                    {item.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleRoleAdmin(item._id)}
                        className="btn btn-warning"
                      >
                        Role
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
