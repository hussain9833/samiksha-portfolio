export interface ProjectInsight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  overview: string;
  objective?: string;
  strategy?: string;
  results: ProjectInsight[];
  phases?: {
    title: string;
    description: string;
    results: ProjectInsight[];
  }[];
  coverImage: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "rjia",
    title: "RJIA Interiors Brand Awareness Campaign",
    category: "Meta Ads • Brand Awareness",
    tags: ["Meta Ads", "Brand Awareness", "Interior Design", "Social Media"],
    overview:
      "This was a one-month awareness campaign executed for RJIA Interiors. The campaign focused on increasing brand visibility and reaching a relevant audience. The campaign successfully generated awareness and expanded brand reach within the allocated advertising budget.",
    objective: "Increase brand visibility and reach among target audience interested in premium interior architecture.",
    strategy:
      "Crafted visually compelling ad creatives aligned with RJIA's luxury interior design aesthetic. Targeted high-income demographics interested in home décor, architecture, and interior design within key metropolitan areas.",
    results: [
      { label: "Campaign Duration", value: "1 Month" },
      { label: "Focus", value: "Brand Awareness" },
      { label: "Outcome", value: "Expanded Brand Reach" },
    ],
    coverImage: "/images/projects/rjia/image.png",
    color: "#7C3AED",
  },
  {
    id: "arcone",
    title: "Arcone Furnishings Lead Generation Campaign",
    category: "Meta Ads • Lead Generation",
    tags: ["Meta Ads", "Lead Generation", "Furnishings", "B2C Marketing"],
    overview:
      "For Arcone Furnishings, the lead generation campaign generated 26 qualified leads within 15 days. The campaign targeted customers interested in furnishings and upholstery solutions.",
    objective: "Generate qualified leads from potential customers looking for premium furnishing and upholstery services.",
    strategy:
      "Deployed targeted Meta lead generation ads with compelling creative assets highlighting Arcone's unique product offerings. Utilized interest-based and behavioral targeting to reach homeowners and interior enthusiasts.",
    results: [
      { label: "Leads Generated", value: "26" },
      { label: "Campaign Duration", value: "15 Days" },
      { label: "Lead Quality", value: "Qualified" },
    ],
    coverImage: "/images/projects/arcone/image.png",
    color: "#3B82F6",
  },
  {
    id: "bellavita",
    title: "Bella Vita Smart Automation Lead Generation Campaign",
    category: "Meta Ads • Lead Generation",
    tags: ["Meta Ads", "Lead Generation", "Smart Home", "Automation"],
    overview:
      "Managed and optimized a lead generation campaign for smart home automation services. Delivered exceptional results with a highly competitive cost per lead in the smart automation niche.",
    objective: "Generate high-volume qualified leads for smart home automation services at an optimal cost per lead.",
    strategy:
      "Implemented a multi-creative testing strategy with A/B testing across different audience segments. Continuously optimized ad sets based on performance data, scaling winning creatives while cutting underperforming ones.",
    results: [
      { label: "Leads Generated", value: "296" },
      { label: "Total Ad Spend", value: "₹22,273.49" },
      { label: "Cost Per Lead", value: "₹75.25" },
    ],
    coverImage: "/images/projects/bellavita/image.png",
    color: "#8B5CF6",
  },
  {
    id: "budh",
    title: "Budh Interiors Lead Generation Campaign",
    category: "Meta Ads • Interior Design Marketing",
    tags: ["Meta Ads", "Lead Generation", "Interior Design", "Real Estate"],
    overview:
      "Planned, executed, and optimized a lead generation campaign focused on attracting interior design clients. The campaign successfully generated qualified leads for Budh Interiors' premium design services.",
    objective: "Attract qualified leads from homeowners and real estate developers seeking professional interior design services.",
    strategy:
      "Created targeted campaigns showcasing Budh Interiors' portfolio with strong CTAs. Focused on retargeting warm audiences and lookalike audiences based on existing client profiles.",
    results: [
      { label: "Leads Generated", value: "86" },
      { label: "Total Ad Spend", value: "₹37,033.78" },
      { label: "Cost Per Lead", value: "₹430.63" },
    ],
    coverImage: "/images/projects/budh/image.png",
    color: "#10B981",
  },
  {
    id: "nuhome",
    title: "Nuhome Full Funnel Meta Ads Campaign",
    category: "Brand Awareness + Lead Generation",
    tags: ["Meta Ads", "Full Funnel", "Brand Awareness", "Lead Generation", "Furnishings"],
    overview:
      "Executed a complete Meta Ads funnel strategy for Nuhome Furnishings — starting with brand awareness to build reach, followed by a conversion-focused lead generation campaign targeting engaged audiences.",
    objective: "Build brand recognition across a broad audience first, then convert that awareness into qualified leads through a retargeting funnel.",
    strategy:
      "Phase 1 focused on wide-reach awareness campaigns to educate the market. Phase 2 retargeted engaged users with lead generation ads, leveraging warm audiences built during the awareness phase.",
    phases: [
      {
        title: "Phase 1: Brand Awareness",
        description: "Wide-reach campaign to build brand recognition and audience familiarity.",
        results: [
          { label: "Total Reach", value: "1,012,760" },
          { label: "Cost Per Result", value: "₹6.77" },
          { label: "Total Spend", value: "₹6,857.56" },
        ],
      },
      {
        title: "Phase 2: Lead Generation",
        description: "Retargeted engaged audiences to convert brand awareness into qualified enquiries.",
        results: [
          { label: "Objective", value: "Lead Conversion" },
          { label: "Audience", value: "Warm Retarget" },
          { label: "Strategy", value: "Full Funnel" },
        ],
      },
    ],
    results: [
      { label: "Total Reach", value: "1,012,760" },
      { label: "Awareness CPR", value: "₹6.77" },
      { label: "Total Spend", value: "₹6,857.56" },
    ],
    coverImage: "/images/projects/nuhome/image.png",
    color: "#F59E0B",
  },
];
