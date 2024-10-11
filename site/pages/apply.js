import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import { User, Mail, Lock, Loader } from "lucide-react";

export default function Component() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    handle: "",
    email: "",
    password: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { handle: "", email: "", password: "", category: "" };

    if (!handle) {
      newErrors.handle = "Social handle is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!category) {
      newErrors.category = "Please select an account type";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://bio-branch-server.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ handle, email, password, category }),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        toast.success("Registered successfully");
        localStorage.setItem("BioTreeToken", data.token);
        router.push("/login");
      } else {
        toast.error("Try a different username");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const Images = [
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-17.jpg&w=640&q=75",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-21.jpg&w=640&q=75",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-26.jpg&w=640&q=75",
  ];

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full md:m-16  max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Join the Top 1% Creators
            </h2>
            <p className="text-xl mb-8">
              Get access to exclusive content and connect with inspiring
              creators.
            </p>
          </div>
          <div className="space-y-4">
            {Images.map((image, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img
                  key={index}
                  className="w-16 h-16 rounded-full border-2 border-gray-200 hover:scale-105 transform transition-all duration-300"
                  src={image}
                  alt={`Creative ${index + 1}`}
                />
                <div>
                  <p className="font-semibold">Creator {index + 1}</p>
                  <p className="text-sm opacity-75">Joined Biotree recently</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h3>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="handle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Social Handle
              </label>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  id="handle"
                  type="text"
                  placeholder="Your social handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
              {errors.handle && (
                <p className="mt-1 text-sm text-red-600">{errors.handle}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <Lock size={20} /> : <Lock size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <div className="flex justify-between space-x-4">
                {["Creator", "Agency", "Brand"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={type}
                      checked={category === type}
                      onChange={(e) => setCategory(e.target.value)}
                      className="form-radio text-blue-600 focus:ring-blue-500"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing Up...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
