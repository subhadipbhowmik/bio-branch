import React, { useState } from "react";
import styles from "../styles/apply.module.css"; // Adjust the path as necessary
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }

    // backend implementations
    fetch('https://bio-branch-server.onrender.com/api/login', options)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          toast.success("You are logged in successfully");
          localStorage.setItem('BioTreeToken', data.token);
          route.push('/dashboard');
        }
        if (data.status === 'notfound') {
          toast.error("User not found");
        }
      })
      .catch(error => toast.error("An error occurred. Please try again."));

  }

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Get Firebase ID token from the signed-in user
      const idToken = await user.getIdToken();
  
      // Optionally send user data to your backend if needed
      const userData = {
        email: user.email,
        name: user.displayName,
        avatar: user.photoURL,
      };
  
      // Send the ID token and user data to the server for authentication
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken, userDetails: userData }),
      });
  
      const data = await response.json();
      if (data.status === "success") {
        // Save JWT token and other data in localStorage or cookies
        localStorage.setItem("BioTreeToken", data.token);
  
        // Redirect user to the dashboard after successful login
        toast.success("You are logged in successfully with Google");
        router.push("/dashboard");
      } else {
        toast.error(data.message || "An error occurred during Google login.");
      }
    } catch (error) {
      toast.error("An error occurred during Google login.");
    }
  };
  

  return (
    <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
      <div className="main">
        <div className="content bg-white border-2 px-4 py-8 rounded-md shadow-lg">
          <h1 className="text-center font-bold text-2xl">Join the top 1% Creators</h1>
          <p className="text-center mb-3">Get access to exclusive content</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-3 text-lg">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md p-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2"
              required
            />
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer transition-transform transform hover:bg-blue-600 focus:outline-none shadow-lg"
            />
          </form>
          <h4 className="text-center pt-3">
            New here?{" "}
            <span className="text-indigo-600">
              <Link href="/apply">Register</Link>
            </span>
          </h4>

          <div className="flex items-center justify-center mt-6">
            <div className="border-b border-gray-300 w-full" />
            <p className="text-gray-500 mx-3">Or</p>
            <div className="border-b border-gray-300 w-full" />
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-gray-200 text-gray-700 px-3 py-2 rounded-md mt-3 w-full transition-transform transform hover:bg-indigo-100 focus:outline-none shadow-lg"
            >
              <img
                src="../svg/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
