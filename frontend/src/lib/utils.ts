import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**{
  "message": "loggin successfull",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzOGUyZmIyLWFhMTctNGY4OS1hODc0LWUzNDI5NmM5MmY2MCIsImlhdCI6MTc0MTI4NDc0NSwiZXhwIjoxNzQxMjg4MzQ1fQ.LBK-QwfjA88KYrcFGq5pDsJnYGLL6ESZ6dT5V17IWvo",
  "userId": "a38e2fb2-aa17-4f89-a874-e34296c92f60"
}**/