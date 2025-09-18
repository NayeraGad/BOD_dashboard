import { useContext } from "react";
import { AuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import Form from "../components/UI/Form";
import { loginFormFields } from "../constants";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    toast.success("Logged in successfully!");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-dvh px-5">
      <Form
        fields={loginFormFields}
        onSubmit={handleLogin}
        submitLabel="Login"
      />
    </div>
  );
};

export default LoginPage;
