import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import { type Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import UserAvatar from "./UserAvatar";
import { Loader2, StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function UserProfileButton({ session }: { session: Session | null }) {
  const router = useRouter();
  if (!session)
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign In
      </Button>
    );

  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* {subscription === undefined && (
            <DropdownMenuItem>
              <Loader2 className="mr-2 h-4 w-full animate-spin items-center" />
            </DropdownMenuItem>
          )}

          {subscription?.role === "pro" && (
            <>
              <DropdownMenuLabel className="flex animate-pulse items-center justify-center space-x-1 text-xs text-[#e035c1]">
                <StarIcon fill="#E935c1" />
                <p>PRO</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ManageAccountButton />
              </DropdownMenuItem>
            </>
          )} */}
          <DropdownMenuItem onClick={() => router.push("/admin/dashboard")}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

export default UserProfileButton;
