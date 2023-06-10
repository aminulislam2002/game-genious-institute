import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  const handleMakeStatus = (classItem, status) => {
    fetch(`http://localhost:5000/classes/status/${classItem._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${classItem.name}'s status is now ${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to update class status:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="w-full h-full bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Manage Classes</h1>
        {classes.length === 0 ? (
          <p>No classes found.</p>
        ) : (
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="py-3 px-4">Class Image</th>
                <th className="py-3 px-4">Class Name</th>
                <th className="py-3 px-4">Instructor Name</th>
                <th className="py-3 px-4">Instructor Email</th>
                <th className="py-3 px-4">Available Seats</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Actions</th>
                <th className="py-3 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem._id} className="border-t">
                  <td className="py-4 px-4">Class Image</td>
                  <td className="py-4 px-4">{classItem.name}</td>
                  <td className="py-4 px-4">{classItem.instructorName}</td>
                  <td className="py-4 px-4">{classItem.instructorEmail}</td>
                  <td className="py-4 px-4">{classItem.availableSeats}</td>
                  <td className="py-4 px-4">{classItem.price}</td>
                  <td>
                    {classItem.status === "approve" ? (
                      <span className="badge badge-primary">Approve</span>
                    ) : classItem.status === "deny" ? (
                      <span className="badge badge-success">Deny</span>
                    ) : (
                      <span className="badge badge-info">Pending</span>
                    )}
                  </td>

                  <td>
                    {classItem.status !== "approve" && (
                      <button
                        onClick={() => handleMakeStatus(classItem, "approve")}
                        className="btn w-3/1 text-sm bg-indigo-600 text-white"
                      >
                        Approve
                      </button>
                    )}
                    {classItem.status !== "deny" && (
                      <button
                        onClick={() => handleMakeStatus(classItem, "deny")}
                        className="btn w-3/2 text-sm bg-green-600 text-white"
                      >
                        Deny
                      </button>
                    )}
                  </td>

                  <td className="py-4 px-4">
                    {classItem.status === "pending" ? (
                      <>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          disabled={classItem.status !== "pending"}
                        >
                          Feedback
                        </button>
                      </>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageClasses;
