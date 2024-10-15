import type { TechnologyLabel } from "./technologies";

export type Project = {
  title: string;
  description: string;
  imgUrl: string;
  techStack: TechnologyLabel[];
};

export const PROJECTS = [
  {
    title: "E-commerce website",
    description:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, esse excepturi reiciendis non aspernatur assumenda blanditiis?",
    imgUrl: "/projects/portfolio.webp",
    techStack: [
      "TypeScript",
      "React",
      "Nextjs",
      "TailwindCSS",
      "React Query",
      "Git",
    ],
  },
  {
    title: "Project Two Lorem ipsum dolor sit consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    imgUrl: "/projects/portfolio.webp",
    techStack: ["CSS", "HTML", "TypeScript", "Astro", "React", "Git"],
  },
  {
    title: "Project Three",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque ut, quaerat sapiente officiis eligendi qui dolore excepturi! Odit aspernatur esse neque?",
    imgUrl: "/projects/portfolio.webp",
    techStack: ["TypeScript", "Nodejs", "Expressjs", "React", "Git"],
  },
] satisfies Project[];
