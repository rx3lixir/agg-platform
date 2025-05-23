"use client";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Avatar>
        <AvatarFallback>ПЗ</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default NavbarActions;
