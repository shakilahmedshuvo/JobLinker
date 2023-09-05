"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { focusManager, useQuery } from "react-query";

const UsersPage = () => {
  // const [users, setUsers] = useState([]);
  const [DeleteUsers, setDeleteUsers] = useState([]);

  // for time 

  
  // get the data


  // fix this

//   useEffect(() => {
//     const fetchUsers = async () => {
//         const response = await fetch("/api/users");
//         const data = await response.json();
//         setDeleteUsers(data);
//     };
//     fetchUsers();
// }, []);

  const {
    data: users = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryFn: async () => {
      const res = await axios("/api/users");
      setDeleteUsers(res.data)
      return res.data;
    },
  });

  if (isLoading)
    return (
      <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">
        Loading...
      </h2>
    );

  // make admin handle
  const handleMakeAdmin = async (user) => {
    const updateUserData = {
      name: user.name,
      email: user.email,
      photo: user.photo ? user.photo : "",
      role: "admin",
    };
    const res = await fetch(`/api/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUserData),
    });
    console.log(res);
    if (res.ok) {
      refetch();
      toast.success(`${user.name} is now Admin`);
    }
  };


  const handleDelete = async (userId) => {
    try {
        const response = await fetch(`/api/users/${userId}`, {
            method: "DELETE",
        });
        if (response.ok) {
          refetch();
          toast.success(`Deleted User`);
        }

        if (response.status === 200) {
            // User deleted successfully, update the UI by removing the user
            setDeleteUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        } else {
            // Handle error here if needed
            console.error("Failed to delete user.");
        }
    } catch (error) {
        // Handle network or other errors here
        console.error("An error occurred while deleting user.", error);
    }
};




  return (
    <>
      <h3 className="text-3xl font-semibold text-center my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Power</th>
              <th>Instructor</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="text-center">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn text-blue-500 btn-ghost btn-md"
                    >
                      Make Admin
                    </button>
                  )}
                </td>

                <td>
                  <button className="btn text-blue-500 btn-ghost btn-md">
                    user
                  </button>
                </td>
                <td>
                  <button   onClick={() => handleDelete(user._id)} className="btn text-red-500 btn-ghost btn-md">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                <td>
                {user.createdAt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersPage;
