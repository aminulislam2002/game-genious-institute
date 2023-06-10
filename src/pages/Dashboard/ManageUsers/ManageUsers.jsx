import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeRole = (user, role) => {
    fetch(`http://localhost:5000/users/role/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount == true) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now a ${role}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to update user role:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Set Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      <span className="badge badge-primary">Admin</span>
                    ) : user.role === "instructor" ? (
                      <span className="badge badge-success">Instructor</span>
                    ) : (
                      <span className="badge badge-info">Student</span>
                    )}
                  </td>
                  <td>
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleMakeRole(user, "admin")}
                        className="btn w-3/1 text-sm bg-indigo-600 text-white"
                      >
                        Admin
                      </button>
                    )}
                    {user.role !== "instructor" && (
                      <button
                        onClick={() => handleMakeRole(user, "instructor")}
                        className="btn w-3/2 text-sm bg-green-600 text-white"
                      >
                        Instructor
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-ghost bg-red-600 text-white">
                      <FaTrashAlt />
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

export default ManageUsers;
