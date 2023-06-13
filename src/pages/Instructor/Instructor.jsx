import { useQuery } from "@tanstack/react-query";

const Instructor = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("http://localhost:5000/users/instructors");
    return res.json();
  });

  return (
    <div className="container mx-auto bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Instructors</h1>

      <div className="grid grid-cols-4 gap-4">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white p-4 rounded-md shadow-md flex">
            <img className="w-24 h-24 rounded-full mr-4" src={instructor.image} alt={instructor.name} />
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{instructor.name}</h2>
                <p className="text-sm">Email: {instructor.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
