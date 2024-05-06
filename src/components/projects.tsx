import ProjectsData from "@/data/projects.json";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import {
  Github,
  Link2,
  SquareArrowOutUpRight,
  SquarePlay,
  Youtube,
} from "lucide-react";
import React from "react";

export const Projects = () => {
  const getIconFromType = (type: string) => {
    switch (type) {
      case "GITHUB":
        return Github;
      case "YOUTUBE":
        return Youtube;
      case "PREVIEW":
        return SquareArrowOutUpRight;
      case "PLAYSTORE":
        return SquarePlay;
      default:
        return Link2;
    }
  };

  return (
    <BentoGrid className="max-w-4xl mx-auto px-8 py-8">
      {ProjectsData.data.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.name}
          description={item.description}
          icon={
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-xl"
              width={50}
              height={50}
            />
          }
          links={item.links.map((link, index) => {
            const Icon = getIconFromType(link.name);
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary-500 dark:hover:text-primary-400"
              >
                <Icon size={30} className="px-1" />
              </a>
            );
          })}
        />
      ))}
    </BentoGrid>
  );
};
