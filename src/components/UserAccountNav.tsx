'use client'

import { User } from "next-auth";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Icons } from "./Icons";

interface UserAccountNavProps {
  user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
          className="h-10 w-10"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200] truncate text-slate-700 text-sm">{user.email}</p>
            )}
          </div>
        </div>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Feed</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/r/create">Create</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="flex items-center" onSelect={(event) => {
          event.preventDefault();
          signOut({
            callbackUrl: `${window.location.origin}/sign-in`
          })
        }}>
          <Icons.signOut className="h-4 w-4 mr-2 stroke-red-700" />
          <Link href="/" className="text-red-700">
            Sign Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
