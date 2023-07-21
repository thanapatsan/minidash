import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="bg-slate-50 max-w-screen-md p-24">
        <div className="max-w-xs">
        <h1 className="text-4xl text-center mb-6">Welcome </h1>
          <input
            type="email"
            placeholder="Email"
            class="input input-bordered w-full "
          />
          <input
            type="password"
            placeholder="Password"
            class="input input-bordered w-full mt-2"
          />
          <button className="btn btn-primary w-full mt-6">login</button>
          <a className="btn btn-link w-full mt-2">forgot password?</a>
        </div>
      </div>
    </main>
  );
}
