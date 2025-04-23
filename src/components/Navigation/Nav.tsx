"use client";

import { useRouter } from "next/dist/client/router";
import { Button } from "../ui/button";
import { HomeIcon } from "lucide-react";

export const Nav = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <div className="nav">
      <Button
        size="icon"
        className="backBtn"
        onClick={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <HomeIcon />
      </Button>
      <p>{title}</p>
    </div>
  );
};
