"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { MoreVertical, LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { isLoggedInAtom, usernameAtom } from "../app/utils/atom";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const FloatingHeader: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [, setUsername] = useAtom(usernameAtom);

  useEffect(() => {
    const token = Cookies.get("token");
    const storedUsername = Cookies.get("username");

    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);  
    }
  }, [setIsLoggedIn, setUsername]);

  const handleSignOut = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("userId");
    setIsLoggedIn(false);
    setUsername("");

    window.location.href = "/";
  };
  
  const storedUsername = Cookies.get("username");
  const initials = storedUsername ? storedUsername.slice(0, 2).toUpperCase() : "";

  return (
    <header className="sticky top-0 bg-white dark:bg-black bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold font-header cursor-pointer">
            ReadME
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
          {!isLoggedIn ? (
            // Show Login/Signup links when not logged in
            <div className="hidden md:flex space-x-4">
              <Link href="/login">
                <span className="px-3 py-2 rounded hover:bg-opacity-30 dark:hover:opacity-70 transition cursor-pointer">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span className="px-3 py-2 rounded hover:bg-opacity-75 dark:hover:opacity-70 transition cursor-pointer">
                  Signup
                </span>
              </Link>
            </div>
          ) : (
            // Show user initials + sign-out button when logged in
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white text-lg font-bold">
                {initials}
              </div>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
            </div>
          )}

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {!isLoggedIn ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/login">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/signup">Signup</Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem asChild>
                      <span className="text-lg font-bold">{initials}</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default FloatingHeader;
