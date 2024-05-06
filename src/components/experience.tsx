import React from "react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ExperienceData from "@/data/experience.json";
import { Circle } from "lucide-react";

export const Experience = () => {
  return (
    <div className="ml-2">
      <TracingBeam className="px-6">
        <div className="ml-4 max-w-4xl mx-auto antialiased pt-4 relative">
          {ExperienceData.data.map((item, index) => (
            <div key={`content-${index}`} className="mt-6">
              <a
                className="bg-black text-white rounded-full text-2xl font-bold w-fit py-1 text-xl underline"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.company}
              </a>
              {item.experiences.map((experience, index) => {
                return (
                  <div key={index}>
                    <p className={"text-white text-lg font-bold mt-2"}>
                      {experience.title}
                    </p>
                    <div className="text-sm prose prose-sm dark:prose-invert font-extralight">
                      {experience.start} - {experience.end}
                    </div>
                    {experience.description.map((point, index) => {
                      return (
                        <div key={index} className="flex gap-2 mt-1">
                          <div>
                            <Circle size={10} className="w-max mt-[7px]" />
                          </div>
                          <p className="text-wrap">{point}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};
