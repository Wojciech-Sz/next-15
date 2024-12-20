import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "@/lib/actions";

const Navbar = async () => {
  const { userId } = await auth();

  if (userId) {
    await createUser();
  }

  return (
    <header className={"px-5 py-3 bg-white shadow-sm"}>
      <nav className={"flex justify-between items-center text-black"}>
        <Link href={"/"} className={"font-bold "}>
          <Image src={"/logo.png"} alt={"logo"} width={144} height={30} />
        </Link>

        <div className={"flex items-center gap-5"}>
          <SignedIn>
            <Link href={"/startup/create"}>
              <span>Create</span>
            </Link>
            <UserButton
              appearance={{
                elements: {
                  userButtonOuterIdentifier: "text-base hidden sm:inline-block",
                },
              }}
              showName
            />
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
