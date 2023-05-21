import decode from "jwt-decode";
import { cookies } from "next/headers";

interface User {
  sub: string;
  name: string;
  avatarUrl: string;
}

/**
 * Retrieves the user information from the token stored in the cookie.
 * @throws {Error} If the user is not authenticated.
 * @returns {User} The user information.
 */
export function getUser(): User {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user: User = decode(token);

  return user;
}
