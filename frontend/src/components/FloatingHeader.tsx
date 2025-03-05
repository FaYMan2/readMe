import Link from "next/link";
import React from "react";
import { MoreVertical } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const FloatingHeader: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-black bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold font-header cursor-pointer">
            ReadME
          </span>
        </Link>

        <nav className="flex items-center space-x-4">
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

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signup">Signup</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default FloatingHeader;
