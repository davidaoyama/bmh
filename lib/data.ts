export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Brand Campaign — Lumina",
    category: "PR Strategy",
    image: "/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Product Launch — Solstice",
    category: "Marketing",
    image: "/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Social Media — Verdant",
    category: "Digital",
    image: "/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Event Branding — Noctis",
    category: "Experiential",
    image: "/projects/project-4.jpg",
  },
];
