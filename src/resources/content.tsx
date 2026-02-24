import { About, Blog, Home, Person, Social, Work, Testimonials } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yassmine",
  lastName: "Ramadan",
  name: "Yassmine Ramadan",
  role: "Research Tech at Weill Cornell",
  avatar: "/images/bruh.jpg",
  email: "yassmine@uni.minerva.edu",
  location: "America/New_York",
  languages: ["English", "Arabic"],
};



const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yassmine-ramadan/",
    essential: true,
  },
];

const home: Home = {
  label: "Home",
  title: `Yassmine Ramadan | Research Technician, Schwer Lab`,
  featured: {
    display: false,
    title: "",
    href: "",
  },

  description: `I work in the Schwer Lab at Weill Cornell, studying how the RNA Polymerase II C-terminal domain (CTD) controls gene expression. Using yeast models, I study transcription, RNA processing, and phosphate regulation to understand basic cellular programs.`,
  keywords: [
    "CTD Code",
    "Transcription",
    "Phosphate Homeostasis",
    "Yeast Genetics",
    "RNA Processing",
  ],
  headline: <>Researching how transcription and RNA processing shape cells</>,
  subline: (
    <>
      I'm a Research Technician in the Schwer Lab at Weill Cornell studying yeast gene regulation. I speak English and Arabic and enjoy collaborating across labs.
    </>
  ),
  image: "/images/bruh.jpg",
  path: "/",
  services: [
    {
      title: "CTD Code & Transcription",
      description: "How the Pol II CTD controls transcription and coordinates RNA processing.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">CTD Code & Transcription</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Using yeast genetics and biochemical assays to decode how CTD modifications guide gene expression.</Text>
        </>
      ),
    },
    {
      title: "Phosphate Homeostasis",
      description: "Regulation of phosphate response and lncRNA-mediated transcriptional interference.",
      content: (
        <>
          <Text variant="heading-strong-l" onBackground="neutral-strong">Phosphate Homeostasis</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">Studying how metabolite signals and RNA processing control PHO genes and cellular phosphate balance.</Text>
        </>
      ),
    },
  ],
  faq: [
    {
      question: "How can I learn more about your research?",
      answer: (
        <>
          You can reach out via email or LinkedIn. I am open to discussing CTD code projects, yeast genetics, and phosphate regulation.
        </>
      ),
      answerPlain: "You can reach out via email or LinkedIn. I am open to discussing CTD code projects, yeast genetics, and phosphate regulation.",
    },
    {
      question: "What is the CTD code?",
      answer: (
        <>
          The CTD is a repeating section of RNA Polymerase II that is chemically modified to control transcription steps and RNA processing; we study how these modifications affect gene expression.
        </>
      ),
      answerPlain: "The CTD is a repeating section of RNA Polymerase II that is chemically modified to control transcription steps and RNA processing.",
    },
    {
      question: "Which organisms and models do you use?",
      answer: (
        <>
          We primarily use budding yeast (S. cerevisiae) and fission yeast (S. pombe). These simple eukaryotes let us test genetic hypotheses quickly and link molecular changes to cellular phenotypes.
        </>
      ),
      answerPlain: "We use budding and fission yeast to test genetic hypotheses and study gene regulation.",
    },
    {
      question: "What methods and techniques do you work with?",
      answer: (
        <>
          My work blends genetics and biochemistry: transcription assays, RNA processing analysis, CRISPR-based genetics, PCR and sequencing, immunohistochemistry, and data analysis.
        </>
      ),
      answerPlain: "Transcription assays, RNA processing analysis, CRISPR, PCR/sequencing, immunohistochemistry, and data analysis.",
    },
    {
      question: "Can I collaborate or request data/code?",
      answer: (
        <>
          Yes — contact me on LinkedIn or email. I can share protocols or code where appropriate and discuss collaboration opportunities with relevant labs or groups.
        </>
      ),
      answerPlain: "Contact via LinkedIn or email to discuss collaboration or data/code requests.",
    },
    {
      question: "Why study phosphate homeostasis?",
      answer: (
        <>
          Phosphate regulation is a core metabolic response that affects gene expression. Understanding its control helps reveal how cells adapt to nutrients and maintain homeostasis.
        </>
      ),
      answerPlain: "Phosphate regulation affects gene expression and cellular adaptation to nutrients.",
    },
  ],
};


const about: About = {
  label: "About",
  title: `Yassmine Ramadan | About & Experience`,
  description: `View the research and academic journey of ${person.name}, a Research Tech at Weill Cornell specializing in yeast RNA biology, RNA polymerase, and phosphate metabolism.`,
  keywords: ["Molecular Biology Resume", "Yeast RNA Research", "RNA Polymerase", "Phosphate Metabolism", "Minerva University Graduate"],
  path: "/about",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "The Vision",
      description: (
        <>
          I'm a Research Technician in the Schwer Lab at Weill Cornell. We study how the RNA Polymerase II CTD and RNA processing control gene expression. Using Saccharomyces and Schizosaccharomyces yeast, we combine genetics and biochemistry to test mechanisms and identify new regulators.
          <br /><br />
          My work focuses on CTD signaling, transcriptional interference by lncRNAs, and phosphate homeostasis — translating complex mechanisms into clear biological understanding.
        </>
      ),
  },
  work: {
    display: true,
    title: "Research Experience",
    experiences: [
            {
              company: "National Taiwan University",
              logo: "/images/ntulogo.png",
              role: "Medical Research Intern",
              timeframe: "Sep 2023 - Dec 2023 · 4 mos",
              location: "Taipei, Taipei City, Taiwan · On-site",
              achievements: [
                <>Genetics & Neuropathy Research, Immunohistochemistry & Protein Staining (PGP9.5)</>,
              ],
              images: [],
            },
            {
              company: "Instituto de Biología y Medicina Experimental (IBYME)",
              logo: "/images/ibyme-logo.png",
              role: "Research Intern",
              timeframe: "Sep 2022 - Dec 2022 · 4 mos",
              location: "Buenos Aires Province, Argentina · On-site",
              achievements: [
                <>Advanced PCR & Gel Electrophoresis Techniques, Research Data Collection & Analysis</>,
              ],
              images: [],
            },
      {
        company: "Schwer Lab — Weill Cornell Medicine",
        timeframe: "2025 - Present",
        role: "Research Technician",
        achievements: [
          <>Work on CTD code projects: transcription assays, RNA processing, and genetic screens for phosphate homeostasis.</>,
        ],
        images: [],
      },
      {
        company: "Minerva University",
        timeframe: "Sep 2023 - May 2024 · 9 mos",
        role: "Genetics Researcher (Capstone Project) — Internship",
        location: "San Francisco Bay Area · Remote",
        achievements: [
          <>Enhancing Rheumatoid Arthritis Treatment through CRISPR-mediated IL-4 Modulation.<br />
          Skills: CRISPR-Cas9 Gene Editing, Experimental Design & Hypothesis Testing, +2 skills</>,
        ],
        images: [
          "Thumbnail for Enhancing Rheumatoid Arthritis Treatment through CRISPR-mediated IL-4 Modulation.pdf"
        ],
        files: [
          "Enhancing Rheumatoid Arthritis Treatment through CRISPR-mediated IL-4 Modulation.pdf"
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Minerva University",
        timeframe: "Sep 2020 - May 2024",
        description: <>Bachelors in Natural Sciences and Business</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Research & Biology Skills",
    skills: [
      {
        title: "Molecular Biology",
        description: (
          <>
            Practical experience with yeast genetics, RNA processing assays, and biochemical methods.
          </>
        ),
        tags: [
          { name: "CTD Code", icon: "grid" },
          { name: "Transcription", icon: "rocket" },
          { name: "Phosphate Homeostasis", icon: "disc" },
          { name: "Yeast Genetics", icon: "eye" },
        ],
      },
    ],
  },
};

const blog: Blog = {
  label: "Blog",
  title: "Writing & Insights",
  description: `Notes and explanations about CTD signaling, transcriptional interference, and phosphate regulation from work in the Schwer Lab.`,
  keywords: ["CTD Code", "Transcription", "Phosphate Homeostasis", "Yeast Research"],
  path: "/blog",
};

const work: Work = {
  label: "Research",
  title: "Yassmine Ramadan | Molecular Biology",
  description: `I am Yassmine Ramadan, a Researcher at Weill Cornell, dedicated to unraveling the molecular mechanisms that sustain cellular health and drive organismal function. As a 2024 graduate of Minerva University, my scientific journey is rooted in yeast RNA biology, with a special focus on RNA polymerase and the intricate effects of phosphate metabolism. Explore my research to discover how tiny molecules shape the big questions of life, health, and innovation.`,
  keywords: ["Molecular Biology", "Yeast RNA", "RNA Polymerase", "Phosphate Metabolism", "Cellular Health", "Weill Cornell", "Minerva University"],
  path: "/research",
};

const testimonials: Testimonials = {
  path: "/testimonials",
  label: "Testimonials",
  title: `Client Testimonials – ${person.name}`,
  description: `What colleagues and collaborators say about working with Yassmine Ramadan. Read reviews from scientists and researchers about her dedication to molecular biology, yeast RNA, and cellular health.`,
  keywords: ["Research Testimonials", "Biology Collaborator Reviews", "Yassmine Ramadan Feedback", "Professional Recommendations", "Molecular Biology Project Reviews"],
  items: [
    {
      name: "Testimonials coming soon",
      role: "",
      content: (
        <>
          Testimonials coming soon
        </>
      ),
      contentPlain: "Testimonials coming soon",
    },
  ],
};

export { person, social, home, about, blog, work, testimonials };
