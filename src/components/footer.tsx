import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export const Footer = () => {
  return (
    <div className="mt-[40%] flex items-center justify-center flex-col mb-10">
      <TypewriterEffectSmooth
        words={[
          {
            text: "Let's connect!",
          },
        ]}
      />
      <p className="text-neutral-600 dark:text-neutral-300 text-md">
        Contact me at
        <a href="mailto:kalashshah47@gmail.com" className="text-blue-500">
          {" kalashshah47@gmail.com"}
        </a>
      </p>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm mt-2">
        Built with Next.js, Acertinity UI and Tailwind CSS
      </p>
    </div>
  );
};
