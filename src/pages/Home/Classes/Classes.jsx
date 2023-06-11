import { useQuery } from "@tanstack/react-query";

const Classes = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes?status=approve");
    return res.json();
  });
  console.log(classes);

  const isLoggedIn = true; // Replace with actual login status

  return (
    <div className="container mx-auto bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Classes</h1>
      <div className="grid grid-cols-4 gap-4">
        {classes.map((classData) => (
          <div
            key={classData._id}
            className={`class-card ${
              classData.availableSeats == 0 ? "bg-red-100" : "bg-white"
            } p-4 rounded-md shadow-md flex`}
          >
            <img className="class-image w-24 h-24 rounded-full mr-4" src={classData.image} alt={classData.name} />
            <div className="class-details flex flex-col justify-between">
              <div>
                <h2 className="class-name text-xl font-bold mb-2">{classData.name}</h2>
                <p className="instructor-name text-sm">{`Instructor: ${classData.instructorName}`}</p>
                <p className="available-seats text-sm">
                  Available Seats:{" "}
                  <span className={`seats-count ${classData.availableSeats == 0 ? "text-red-500" : ""}`}>
                    {classData.availableSeats}
                  </span>
                </p>
                <p className="price text-sm">Price: {classData.price}</p>
              </div>
              <button
                className="select-button mt-4 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isLoggedIn || classData.availableSeats == 0}
                onClick={() => {
                  if (!isLoggedIn) {
                    alert("Please log in before selecting the course.");
                  } else {
                    // Handle class selection
                  }
                }}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
