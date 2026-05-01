import React, { useState } from "react";
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Login function using Firebase Authentication
  const login = async (e) => {
    e.preventDefault(); // Prevent form default submission
    setError(null); // Clear previous errors

    // Validate email before attempting to log in
    if (!isValidEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    try {
      // Attempt to log in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful");
      navigate('/home')
    } catch (err) {
      // Capture and display a more user-friendly error message
      if (err.code === "auth/wrong-password") {
        setError("Invalid password.");
      } else {
        setError(err.message);
      }
      console.error("Login error: ", err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="mx-4 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <span className="text-xl font-bold">AgriEase</span>
          </a>
          <a
            href="#"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none"
          >
            Sign Up
          </a>
        </div>

        {/* Form submission handler */}
        <form className="space-y-4" onSubmit={login}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Handle email input change
              required
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Handle password input change
              required
            />
          </div>
          {/* Display error message if any */}
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}