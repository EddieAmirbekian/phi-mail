import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-slate-100 border-b border-slate-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6 fill-slate-700" />
          <p className="hidden text-slate-700 text-xl font-bold md:block">
            PhiMail
          </p>
        </Link>
        {/* searchbar */}
        {
          session?.user
          ? <UserAccountNav user={session.user} />
          : <Link href="/sign-in" className={buttonVariants()}>Sign In</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
