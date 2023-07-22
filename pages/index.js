import Image from "next/image";
import { Inter } from "next/font/google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Index() {
  const { user, auth } = useAuth();
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
      });
  }

  return (
    <main className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-slate-50 max-w-screen-md p-24">
        <div className="w-64">
          <h1 className="text-4xl text-center mb-6">Dashboard</h1>
          {user ? (
            <>
              <p>You are logged in as {user.email}</p>
              <Link href="/home" className="btn btn-primary w-full mt-2">
                Go to dashboard
              </Link>
            </>
          ) : (
            <>
              <form className="form-control gap-2 " onSubmit={handleSubmit}>
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
                <div className="gap-1 mt-6">
                  <button className="btn btn-primary w-full">login</button>
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
