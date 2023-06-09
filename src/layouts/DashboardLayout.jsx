import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <div className="p-5">
            <div>
              <img src="" alt="" />
              <h1>{user.displayName}</h1>
            </div>
            <div className="flex gap-5">
              <FaHome></FaHome> Dashboard
            </div>
          </div>

          <ul>
            <li>
              <Link>My Selected Classes</Link>
            </li>
            <li>
              <Link>My Enrolled Classes</Link>
            </li>

            <li>
              <Link>Add a Class</Link>
            </li>
            <li>
              <Link>My Classes</Link>
            </li>

            <li>
              <Link>Manage Classes</Link>
            </li>
            <li>
              <Link>Manage Users</Link>
            </li>

            <div className="divider">OR</div>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
