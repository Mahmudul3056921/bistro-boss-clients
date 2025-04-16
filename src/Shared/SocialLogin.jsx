import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGooglesignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
        console.log("Google login success:", res.user);
      })
      .catch((err) => {
        console.error("Google login error:", err);
      });
  };

  return (
    <div>
      <button
        className="btn btn-warning flex items-center gap-2"
        onClick={handleGooglesignIn}
      >
        <FaGoogle /> Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
