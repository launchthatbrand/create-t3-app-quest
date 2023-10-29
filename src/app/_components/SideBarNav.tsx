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
import { useRouter } from "next/navigation";
import useSidebarStore from "~/store/store";

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
  {
    title: "MT4 Accounts",
    href: "/accounts",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

export default function SideBarNav() {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const router = useRouter();
  function handleClick(href: string) {
    toggleSidebar();
    router.push(href);
  }
  return (
    <div className="flex flex-col">
      {components.map((component, index) => (
        <Button key={index} onClick={() => handleClick(component.href)}>
          {component.title}
        </Button>
      ))}
    </div>
  );
}
