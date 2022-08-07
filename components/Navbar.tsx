import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../utils/tiktik-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { userProfile, addUser } = useAuthStore();
  console.log(userProfile);

  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="curson-pointer"
            src={Logo}
            alt="Logo"
            layout="responsive"
          />
        </div>
      </Link>
      <div>Search</div>
      <div>
        {userProfile ? (
          <div>{userProfile.userName}</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("err")}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
