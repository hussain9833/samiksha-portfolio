export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "zar-media",
    company: "ZAR Media",
    role: "Digital Marketing & Brand Strategist",
    period: "May 2025 – Present",
    current: true,
    description:
      "Leading digital marketing and brand strategy for premium architecture and interior design brands, managing campaigns and a creative team.",
    achievements: [
      "Managed 5+ architecture and interior design brands",
      "Led a creative team of 4 members",
      "Planned and managed Meta Ads campaigns",
      "Directed podcast production and content strategy",
      "Integrated AI workflow tools to boost team productivity",
    ],
    color: "#7C3AED",
  },
  {
    id: "svasthyaa",
    company: "Svasthyaa Organics",
    role: "Marketing & Sales Executive",
    period: "Dec 2024 – Apr 2025",
    current: false,
    description:
      "Drove marketing and sales initiatives for an organic wellness brand, combining digital campaigns with direct sales strategies.",
    achievements: [
      "Developed and executed social media marketing campaigns",
      "Managed customer acquisition and retention strategies",
      "Coordinated promotional content across digital platforms",
      "Contributed to brand positioning in the wellness space",
    ],
    color: "#10B981",
  },
  {
    id: "zuper",
    company: "Zuper Hotels & Resorts",
    role: "Marketing Project Assistant",
    period: "Jan 2024 – May 2024",
    current: false,
    description:
      "Assisted with marketing projects for a hospitality brand, supporting campaign planning and execution across digital channels.",
    achievements: [
      "Supported digital marketing campaign execution",
      "Assisted in content creation for social media platforms",
      "Contributed to brand communication strategies",
      "Coordinated with internal teams for project delivery",
    ],
    color: "#3B82F6",
  },
  {
    id: "shree",
    company: "Shree Enterprises",
    role: "Content & Social Media Manager",
    period: "Mar 2023 – Dec 2023",
    current: false,
    description:
      "Managed all content creation and social media presence, building brand identity and growing audience engagement.",
    achievements: [
      "Created and managed all social media content calendars",
      "Grew social media following and engagement metrics",
      "Developed brand voice and visual identity guidelines",
      "Produced video, graphic, and copywriting content",
    ],
    color: "#F59E0B",
  },
  {
    id: "voltamp",
    company: "Voltamp Solar Panacea Pvt. Ltd.",
    role: "Digital Marketing & Sales Executive",
    period: "Aug 2021 – Feb 2023",
    current: false,
    description:
      "Managed digital marketing and sales operations for a solar energy company, combining performance campaigns with B2B sales.",
    achievements: [
      "Executed digital marketing campaigns for solar products",
      "Generated and qualified B2B and B2C leads",
      "Managed social media presence and content strategy",
      "Supported sales pipeline development and client outreach",
    ],
    color: "#EC4899",
  },
];
