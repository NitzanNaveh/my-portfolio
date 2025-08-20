"use client";

import { useInView } from "framer-motion";
import React, { useMemo, useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });

  const buttons = useMemo(() => {
    const items: { name: string; href: string; icon: JSX.Element }[] = [];
    if (config.social.github) {
      items.push({ name: "Github", href: config.social.github, icon: <SiGithub size={"24"} color={"#fff"} /> });
    }
    if (config.social.linkedin) {
      items.push({ name: "LinkedIn", href: config.social.linkedin, icon: <SiLinkedin size={"24"} color={"#fff"} /> });
    }
    if ((config.social as any).twitter) {
      items.push({ name: "Twitter", href: (config.social as any).twitter, icon: <SiX size={"24"} color={"#fff"} /> });
    }
    if ((config.social as any).instagram) {
      items.push({ name: "Instagram", href: (config.social as any).instagram, icon: <SiInstagram size={"24"} color={"#fff"} /> });
    }
    return items;
  }, []);

  return (
    <div ref={ref} className="z-10">
      {show &&
        buttons.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button>
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
