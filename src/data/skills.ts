export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Tool {
  name: string;
  icon: string;
  category: string;
}

export const skills: Skill[] = [
  { name: "Performance Marketing", level: 95, category: "Marketing" },
  { name: "Meta Ads", level: 92, category: "Advertising" },
  { name: "Brand Strategy", level: 90, category: "Strategy" },
  { name: "Creative Direction", level: 88, category: "Creative" },
  { name: "AI Content Creation", level: 95, category: "AI" },
  { name: "SEO", level: 85, category: "Marketing" },
  { name: "Analytics", level: 87, category: "Data" },
  { name: "Social Media Strategy", level: 93, category: "Social" },
];

export const designTools: Tool[] = [
  { name: "Adobe Photoshop", icon: "Ps", category: "Design" },
  { name: "CorelDRAW", icon: "Cd", category: "Design" },
  { name: "Canva", icon: "Ca", category: "Design" },
  { name: "Pacdora 3D", icon: "3D", category: "Design" },
];

export const marketingTools: Tool[] = [
  { name: "Meta Business Suite", icon: "Mb", category: "Marketing" },
  { name: "Google Analytics", icon: "Ga", category: "Analytics" },
  { name: "Power BI", icon: "Bi", category: "Analytics" },
  { name: "Microsoft Excel", icon: "Ex", category: "Analytics" },
];

export const aiTools = [
  { name: "ChatGPT", description: "AI writing & strategy", color: "#10B981" },
  { name: "Gemini", description: "Google AI assistant", color: "#3B82F6" },
  { name: "Sora", description: "AI video generation", color: "#8B5CF6" },
  { name: "Magnific AI", description: "AI image upscaling", color: "#F59E0B" },
  { name: "ImagineArt AI", description: "Creative AI imagery", color: "#EC4899" },
  { name: "Adobe Firefly", description: "Generative design AI", color: "#EF4444" },
  { name: "Google Flow", description: "AI workflow automation", color: "#06B6D4" },
];

export const languages = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Hindi", level: "Native", flag: "🇮🇳" },
  { name: "Marathi", level: "Native", flag: "🟠" },
  { name: "Turkish", level: "Basic", flag: "🇹🇷" },
];
