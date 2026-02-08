export interface ProjectDetails {
  type: string;
  course?: string;
  professor?: string;
  semester?: string;
  body: string;
  pdfLink?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "diet-coke-media-strategy",
    title: "Diet Coke Media Strategy",
    category: "PR Strategy",
    image: "/images/projects/diet-coke.png",
    description:
      "Complete media strategy inspired by the 'Dirty Soda' trend.",
    details: {
      type: "Midterm Project",
      course: "PR250 Strategic Public Relations: An Introduction",
      professor: "Jenny McCabe",
      semester: "Fall 2024",
      body: "Inspired by the 'Dirty Soda' trend, this campaign includes a comprehensive media audit, curated media list, situational analysis, and strategic objectives designed to reposition Diet Coke for a new generation of consumers.",
      pdfLink: "/files/PR-250-DIET-COKE-MIDTERM-Bella-H.pdf",
    },
  },
  {
    id: 2,
    slug: "lucas-museum-advertising-report",
    title: "Lucas Museum Advertising Report",
    category: "Advertising",
    image: "/images/projects/lucas-museum.png",
    description:
      "Advertising report for the Lucas Museum of Narrative Art.",
    details: {
      type: "Group Final Project",
      course: "PR340 Introduction to Advertising",
      professor: "Steve Caplan",
      semester: "Spring 2025",
      body: "A full-scale advertising report for the Lucas Museum of Narrative Art featuring client personas, a messaging plan, creative asset mockups, A/B testing strategies, and evaluation metrics.",
      pdfLink:
        "/files/The-Lucas-Museum-of-Narrative-Art-The-Dossier-Agency-Advertising-Report.pdf",
    },
  },
  {
    id: 3,
    slug: "aj-ogilvie-creative-profile",
    title: "AJ Ogilvie Creative Profile",
    category: "Journalism",
    image: "/images/projects/aj-ogilvie.jpg",
    description:
      "Journalistic profile of part-surfer, part-professor AJ Ogilvie.",
    details: {
      type: "Assignment",
      course: "JOUR 479 Storytelling for Action Sports",
      professor: "Keith Plocek",
      semester: "Fall 2025",
      body: "A journalistic profile exploring the dual life of Andrew 'AJ' Ogilvie — part-surfer, part-professor — written for a storytelling course focused on action sports narratives.",
      pdfLink: "/files/JOUR-479-Writing-Sample.pdf",
    },
  },
  {
    id: 4,
    slug: "troy-camp-donation-packet",
    title: "Troy Camp Donation Packet",
    category: "Freelance Design",
    image: "/images/projects/troy-camp.png",
    description:
      "Digital donation packet for Troy Camp's Pass The Can campaign.",
    details: {
      type: "Freelance",
      body: "A digital donation packet created for the USC organization Troy Camp's 'Pass The Can' fundraising campaign. All visuals were designed using Adobe Illustrator, and all copy was written by the designer.",
      pdfLink: "/files/OFFICIAL-PTC-DONATION-PACKET.pdf",
    },
  },
  {
    id: 5,
    slug: "m3gan-media-strategy",
    title: "M3GAN 2.0 Media Strategy",
    category: "PR Strategy",
    image: "/images/projects/m3gan.jpg",
    description:
      "Complete media strategy for the M3GAN 2.0 film release.",
    details: {
      type: "Group Final Project",
      course: "PR250 Strategic Public Relations: An Introduction",
      professor: "Jenny McCabe",
      semester: "Fall 2024",
      body: "A comprehensive media strategy for the M3GAN 2.0 film release, including a full media audit, competitive analysis, activation timeline, and creative campaign ideas.",
      pdfLink: "/files/PR-250-Final-Planning-Outline-Bella-H.pdf",
    },
  },
  {
    id: 6,
    slug: "kerastase-information-kit",
    title: "Kérastase Information Kit",
    category: "PR Writing",
    image: "/images/projects/kerastase.jpg",
    description:
      "Complete information kit for the luxury haircare brand Kérastase.",
    details: {
      type: "Final Project",
      course: "PR209 Effective Writing for Strategic Public Relations",
      professor: "Dale Legaspi",
      semester: "Fall 2024",
      body: "A complete information kit for luxury haircare brand Kérastase, containing media pitches, a press release, salon profile, fact sheet, and a creative brief.",
      pdfLink: "/files/PR-209-FINAL-W_-ALL-ELEMENTS-Bella-Hill.pdf",
    },
  },
];
