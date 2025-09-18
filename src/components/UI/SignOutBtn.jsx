import { MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { useContext } from "react";

const SignOutBtn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const signOut = () => {
    setIsAuthenticated(null);
    navigate("/login");
  };

  return (
    <button onClick={signOut} className="flex gap-2 w-full text-red-500">
      <p>Sign Out</p>
      <MdLogout className="text-2xl" />
    </button>
  );
};

export default SignOutBtn;
