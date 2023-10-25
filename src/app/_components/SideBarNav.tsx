"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Members",
    href: "/members",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Orders",
    href: "/orders",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export default function SideBarNav() {
  return (
    <>
      {components.map((component, index) => (
        <Link key={index} href={component.href}>
          {component.title}
        </Link>
      ))}
    </>
  );
}
