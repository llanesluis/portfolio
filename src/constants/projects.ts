import type { TechnologyLabel } from "./technologies";

export type Project = {
  title: string;
  description: string;
  imgUrl: string;
  techStack: TechnologyLabel[];
  sourceCodeUrl?: string;
  liveUrl?: string;
};

export const PROJECTS = [
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
  },
  {
    title: "React Query V5 Demo",
    description:
      "This project was created to learn React Query and most of its features by building a simple CRUD app.",
    imgUrl: "/projects/react_query_demo.webp",
    techStack: ["React", "Vite", "React Query", "TailwindCSS"],
    sourceCodeUrl: "https://github.com/llanesluis/tanstack-query-demo",
  },
] satisfies Project[];
