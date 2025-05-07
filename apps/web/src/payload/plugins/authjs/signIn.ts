"use server";

import { routesNextJS } from "@/core/routes-generator";
import { signIn, signOut } from "./plugin";

export const signInAction = async () => {
  await signIn("google");
};

export const signOutAction = async () => {
  await signOut({ redirectTo: routesNextJS.homePageHref });
};