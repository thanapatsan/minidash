import Link from "next/link";

function List() {
  return (
    <main className="h-screen">
      <div className="container mx-auto max-w-screen-lg h-full flex flex-col">
        <div className="mt-4 mb-4">
          <Link href={"/home"} className="btn btn-info btn-sm mb-2">
            Back to home
          </Link>
          <h1 className="text-5xl font-semibold mb-2">List</h1>
        </div>
        <div className="border rounded-xl grow flex mb-4 p-4">
          <div className="flex flex-col grow gap-2">
            <p>Username: user</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default List;
