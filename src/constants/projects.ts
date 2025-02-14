import type { TechnologyLabel } from "./technologies";

type Tags = Array<"side-project" | "learn" | "forgotten" | (string & {})>;

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
    title: "DevTool for building responsive websites",
    description:
      "Provides an easy way to track screen breakpoints and to switch between dark/light/system themes.",
    techStack: ["TypeScript", "Nextjs", "React", "TailwindCSS", "HTML", "CSS"],
    imgUrl: "/projects/devtools.webp",
    sourceCodeUrl:
      "https://github.com/llanesluis/template/blob/main/src/components/devtools/screen-devtools.tsx",
    tags: ["devtools", "side-project", "learn"],
  },
  {
    title: "Landing page for Las Lasañas LM",
    description:
      "Landing page for a small business specializing in lasagna as a fast-food alternative, designed to showcase their menu and social media presence.",
    techStack: ["TypeScript", "Nextjs", "React", "TailwindCSS", "Git"],
    imgUrl: "/projects/las_lasanas.webp",
    liveUrl: "https://las-lasanas-lm.vercel.app/",
    sourceCodeUrl: "https://github.com/llanesluis/las-lasanas-lm",
    wip: true,
    tags: ["side-project", "learn"],
  },
  {
    title: "Image Editor SaaS",
    description:
      "Web app to enhance and transform images with AI. Was built to solve a problem I had working with low quality images for a family business.",
    imgUrl: "/projects/image_editor_saas.webp",
    techStack: [
      "TypeScript",
      "React",
      "Nextjs",
      "TailwindCSS",
      "Clerk",
      "MongoDB",
    ],
    sourceCodeUrl: "https://github.com/llanesluis/image-enhancer",
    liveUrl: "https://image-enhancer-kappa.vercel.app/",
    tags: ["learn", "forgotten", "side-project"],
  },
  {
    title: "React Query V5 Demo",
    description:
      "This project was created to learn React Query and most of its features by building a simple CRUD app.",
    imgUrl: "/projects/react_query_demo.webp",
    techStack: ["React", "Vite", "React Query", "TailwindCSS"],
    sourceCodeUrl: "https://github.com/llanesluis/tanstack-query-demo",
    tags: ["learn"],
  },
] satisfies Project[];
