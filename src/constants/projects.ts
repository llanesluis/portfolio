import type { TechnologyLabel } from "./technologies";

type Tags = Array<
  "side-project" | "learn" | "forgotten" | "WIP" | (string & {})
>;

export type Project = {
  title: string;
  description: string;
  imgUrl: string;
  techStack: TechnologyLabel[];
  sourceCodeUrl?: string;
  liveUrl?: string;
  wip?: boolean;
  tags?: Tags;
};

export const PROJECTS = [
  {
    title: "themux",
    description:
      "A shadcn/ui theme generator, but fully customizable. Supports Tailwind v4 and v3 and different color formats.",
    techStack: ["Nextjs", "TailwindCSS", "React", "TypeScript"],
    imgUrl: "/projects/themux.webp",
    sourceCodeUrl: "https://github.com/llanesluis/themux",
    tags: ["side-project", "devtools", "ux/ui", "WIP"],
    liveUrl: "https://themux.vercel.app/",
    wip: true,
  },
  {
    title: "DevTool for building responsive websites",
    description:
      "Provides an easy way to track screen breakpoints and to switch between dark/light/system themes.",
    techStack: ["TypeScript", "Nextjs", "React", "TailwindCSS", "HTML", "CSS"],
    imgUrl: "/projects/devtools.webp",
    sourceCodeUrl:
      "https://github.com/llanesluis/template/blob/main/src/components/devtools/screen-devtools.tsx",
    tags: ["devtools", "side-project", "learn"],
  },
] satisfies Project[];
