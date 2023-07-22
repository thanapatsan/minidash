import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";

function Profile() {
  const { user, auth } = useAuth();

  return (
    <main className="h-screen">
      <div className="container mx-auto max-w-screen-lg h-full flex flex-col">
        <div className="mt-4 mb-4">
          <Link href={"/home"} className="btn btn-info btn-sm mb-2">
            Back to home
          </Link>
          <h1 className="text-5xl font-semibold mb-2">Profile</h1>
        </div>
        <div className="border rounded-xl grow flex mb-4 p-4">
          <div className="flex grow gap-2">
            <p>account: {user?.email}</p>
            <button className="btn btn-sm btn-outline btn-accent ">
              log out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
