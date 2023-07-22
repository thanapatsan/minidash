import Link from "next/link";

import { useAuth } from "@/hooks/useAuth";

function Home() {
  const { user, auth } = useAuth();

  return (
    <main className="h-screen">
      <div className="container mx-auto max-w-screen-lg h-full flex flex-col sm:px-4 lg:px-0">
        <div className="mt-4 mb-4">
          <h1 className="text-5xl font-semibold">Hi, {user?.email}</h1>
        </div>
        <div className="border rounded-xl grow justify-center items-center flex mb-4">
          <div className="flex flex-col grow max-w-xs gap-2">
            <Link href={"/profile"} className="btn btn-primary">
              My Profile
            </Link>
            <Link href={"/list"} className="btn btn-secondary">
              Customer List
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
