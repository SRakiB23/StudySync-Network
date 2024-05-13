import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, googleLogin, gitHubLogin } = useContext(AuthContext) || {};
  const location = useLocation();
  const navigate = useNavigate();
  console.log("login location", location);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    <ToastContainer />;

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");

        //navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Login Failed. Please Try Again.");
        console.error("Login Error:", error);
      });
  };

  //handleGoogle
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
        // navigate or perform any other actions upon successful login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Google Login Failed. Please Try Again.");
        console.error("Google Login Error:", error);
      });
  };

  //handleGitHub
  const handleGitHubLogin = () => {
    gitHubLogin()
      .then(() => {
        toast.success("GitHub Login Successful");
        // navigate or perform any other actions upon successful login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("GitHub Login Failed. Please Try Again.");
        console.error("GitHub Login Error:", error);
      });
  };

  return (
    <div className="bg-[#c1e4dc]">
      <div className="hero min-h-screen bg-opacity-15 bg-white">
        <div data-aos="fade-down" data-aos-duration="1500">
          <div className="hero-content">
            <div className="text-center lg:text-left">
              <h1 className="text-6xl font-bold">Login Now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#9bcbc1]">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-black text-white">Login</button>
                </div>
                <p>
                  New Here!
                  <Link
                    to="/register"
                    className="underline pl-2 text-blue-600 font-bold"
                  >
                    Register
                  </Link>
                </p>
              </form>
              <div className="flex justify-center gap-5 pb-2">
                <button onClick={handleGoogleLogin} className="btn py-2">
                  <FcGoogle className="text-3xl" />
                </button>
                <button onClick={handleGitHubLogin} className="btn py-2">
                  <FaGithub className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
