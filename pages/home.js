import Link from "next/link";

function Home() {
  return (
    <main className="h-screen">
      <div className="container mx-auto max-w-screen-lg h-full flex flex-col">
        <div className="mt-4 mb-4">
          <h1 className="text-5xl font-semibold">Hi, user</h1>
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
