import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
  console.log(classes);

  return (
    <div className="w-full h-full py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Classes</h1>
        {classes.length === 0 ? (
          <p>No classes found.</p>
        ) : (
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                <th className="py-3 px-4">Class Name</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Total Enrolled Students</th>
                <th className="py-3 px-4">Feedback</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem._id} className="border-t">
                  <td className="py-4 px-4">{classItem.name}</td>
                  <td className="py-4 px-4">{classItem.status}</td>
                  <td className="py-4 px-4">{classItem.totalEnrolledStudents}</td>
                  <td className="py-4 px-4">{classItem.feedback || "-"}</td>
                  <td className="py-4 px-4">
                    <Link to={`/dashboard/updateClass/${classItem._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
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

export default MyClasses;
