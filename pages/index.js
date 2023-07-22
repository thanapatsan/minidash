import Image from "next/image";
import { Inter } from "next/font/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

export default function Index() {
  const { user, auth } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  function errorText(err) {
    switch (err) {
      case "auth/invalid-email":
        return "Invalid Email";
      case "auth/user-disabled":
        return "Your user was disabled";
      case "auth/user-not-found":
        return "User Not Found";
      case "auth/wrong-password":
        return "Wrong Password";
      default:
        return "Something wrong, Try again";
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const { email, password } = event.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.code);
        setLoading(false);
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <main className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-slate-50 max-w-screen-md p-24">
        <div className="w-64">
          <h1 className="text-4xl text-center mb-6">Dashboard</h1>
          {user && (
            <>
              <p>You are logged in as {user.email}</p>
              <Link href="/home" className="btn btn-primary w-full mt-2">
                Go to dashboard
              </Link>
            </>
          )}

          {!user && (
            <>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 form-control gap-2">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    className="input input-bordered w-full"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    className="input input-bordered w-full"
                  />
                </div>
                {error && (
                  <>
                    <div className="alert alert-error">
                      <p>{errorText(error)}</p>
                    </div>
                  </>
                )}
                <div className="gap-1 mt-3">
                  <button className="btn btn-primary w-full" disabled={loading}>
                    login
                  </button>
                  <a className="btn btn-link w-full mt-2">forgot password?</a>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
