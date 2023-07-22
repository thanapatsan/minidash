import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <main className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-slate-50 max-w-screen-md p-24">
        <div className="w-64">
          <h1 className="text-4xl text-center mb-6">Dashboard</h1>
          <form className="form-control gap-2 ">
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              className="input input-bordered w-full"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="input input-bordered w-full"
            />
          </form>
          <div className="gap-1 mt-6">
            <button className="btn btn-primary w-full">login</button>
            <a className="btn btn-link w-full mt-2">forgot password?</a>
          </div>
        </div>
      </div>
    </main>
  );
}
