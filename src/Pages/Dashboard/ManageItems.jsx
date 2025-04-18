import React from "react";
import SectionTitle from "../../Shared/Section/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { FaTrash, FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link, useLoaderData } from "react-router-dom";

const ManageItems = () => {
  const [menus, isLoading, refetch] = useMenu(); // ✅ Include isLoading and refetch
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (item) => {
    Swal.fire({
      title: `Delete "${item.name}"?`,
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch(); // ✅ React Query: refetch after deletion
          Swal.fire("Deleted!", `"${item.name}" has been removed.`, "success");
        }
      }
    });
  };

  return (
    <div className="p-4">
      <SectionTitle
        heading="Manage Items"
        subHeading="Change anything you want"
      />

      {/* ✅ Loading state */}
      {isLoading ? (
        <p className="text-center text-lg text-gray-500 mt-10">
          Loading menu...
        </p>
      ) : (
        <div className="overflow-x-auto mt-6">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {menus.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  {/* Image */}
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>

                  {/* Name */}
                  <td className="font-semibold">{item.name}</td>

                  {/* Price */}
                  <td>${parseFloat(item.price).toFixed(2)}</td>

                  {/* Update Button */}
                  <td>
                    <Link
                      to={`/dashboard/updateitem/${item._id}`}
                      className="btn btn-outline btn-xs text-blue-500"
                    >
                      <FaPen className="mr-1" /> Update
                    </Link>
                  </td>

                  {/* Delete Button */}
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-outline btn-xs text-red-500"
                    >
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Optional fallback if list is empty */}
          {menus.length === 0 && (
            <p className="text-center mt-8 text-gray-500">
              No menu items found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageItems;
