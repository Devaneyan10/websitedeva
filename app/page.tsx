"use client";

import { useMemo, useState } from "react";

const linkedIn = "https://www.linkedin.com/in/devaneyanmuniandy-909275194";
const email = "mailto:devaneyan2000@gmail.com";

type Project = {
  title: string;
  category: string;
  stack: string[];
  summary: string;
  impact: string;
  role: string;
  problem: string;
  why: string;
  how: string[];
  result: string;
  details: string[];
  note?: string;
};

const projects: Project[] = [
  {
    title: "AI-Augmented Reporting Workflow",
    category: "AI & Automation",
    stack: ["Claude", "Databricks", "SQL", "Power BI"],
    summary: "AI-assisted reporting workflow that turns operational ITSM data into reporting, commentary, trends and actionable insights.",
    impact: "5–7 days → 3 days/month",
    role: "AI workflow, data requirements, validation and reporting automation",
    problem: "Operational reporting required repeated manual analysis, commentary and consolidation across data sources.",
    why: "The goal was to reduce repetitive reporting effort while keeping the output traceable and human-validated rather than treating AI output as automatically correct.",
    how: [
      "Mapped the reporting requirements into data inputs, transformation steps, AI tasks, validation rules and expected outputs.",
      "Used SQL and Databricks to prepare operational data and create a reliable input layer for reporting and AI-assisted analysis.",
      "Used Claude to generate structured commentary, trends and insights from the prepared information.",
      "Kept validation and reconciliation checks in the workflow so generated outputs could be reviewed against source data.",
    ],
    result: "Reduced the reporting effort from roughly 5–7 days per month to around 3 days.",
    details: [
      "Co-led an AI-augmented reporting layer across operational data and reporting workflows.",
      "Translated business requirements into AI workflows, data requirements, validation rules and measurable outputs.",
      "Used Claude, Databricks and SQL to reduce repetitive reporting effort while keeping human validation in the loop.",
    ],
  },
  {
    title: "Academic Researcher Super Agent",
    category: "Agentic AI",
    stack: ["GenSpark AI", "Agentic AI", "LLMs", "AI Workflows"],
    summary: "Agentic AI concept designed around practical research tasks for undergraduate, postgraduate and academic users.",
    impact: "2 specialized workflows",
    role: "AI workflow design and task decomposition",
    problem: "Academic users often need different research tasks—such as literature review and proposal checking—with different instructions, context and output expectations.",
    why: "A single generic chatbot can produce inconsistent results when every task has different requirements. Specialized workflows make the AI behaviour more focused and repeatable.",
    how: [
      "Defined separate workflows for Literature Review and Grant Proposal & Checker use cases.",
      "Created task-specific instructions, inputs and expected outputs for each workflow.",
      "Decomposed broader research requests into smaller AI-assisted steps instead of relying on one prompt.",
      "Designed the concept around guided outputs that are easier for a researcher to review and refine.",
    ],
    result: "Produced two specialized research workflows demonstrating how agentic task decomposition can make LLMs more useful for structured academic work.",
    details: [
      "Designed task-specific AI workflows for Literature Review and Grant Proposal & Checker use cases.",
      "Structured specialized instructions and workflow steps around different research tasks.",
      "Focused on making LLM capabilities more useful through task decomposition and guided outputs.",
    ],
  },
  {
    title: "Medi Assist Bot",
    category: "AI & NLP",
    stack: ["Python", "GPT", "NLP", "Semantic Analysis"],
    summary: "Multilingual AI chatbot developed as a final-year project with intent classification, semantic analysis and emergency detection.",
    impact: "English + Bahasa Malaysia",
    role: "AI/NLP development and application integration",
    problem: "Users need to express health-related questions naturally, while the system still needs to identify the user's intent and detect potentially urgent messages.",
    why: "Combining intent classification, semantic analysis and GPT capabilities provides a more flexible conversational interface than relying only on fixed keyword responses.",
    how: [
      "Built the chatbot application using Python and GPT-based capabilities.",
      "Used intent classification to map user messages to relevant conversational intents.",
      "Applied semantic analysis to improve interpretation of natural-language input.",
      "Added emergency-detection logic for potentially urgent conversations and designed bilingual support for English and Bahasa Malaysia.",
    ],
    result: "Delivered a bilingual AI chatbot prototype that combines NLP processing with GPT-based conversational responses and emergency detection.",
    details: [
      "Built an NLP chatbot using Python and GPT-based capabilities.",
      "Implemented intent classification and semantic analysis to interpret user messages.",
      "Included emergency detection logic for potentially urgent conversations and designed bilingual interaction support.",
    ],
  },
  {
    title: "Travel Monitor System",
    category: "Full Stack",
    stack: ["Angular", "ASP.NET Core", "C#", "SQL Server"],
    summary: "Full-stack travel monitoring application with secure APIs, role-based access, analytics dashboards and AI-based prediction.",
    impact: "End-to-end full stack",
    role: "Frontend + backend + database + deployment",
    problem: "The application needed a usable interface for travel monitoring while securely connecting users to backend data and analytics.",
    why: "A layered full-stack architecture keeps the frontend, API and database responsibilities separated, making the application easier to maintain and extend.",
    how: [
      "Built frontend features with Angular and TypeScript for the user interface and dashboards.",
      "Developed ASP.NET Core Web API endpoints in C# to handle application logic and data access.",
      "Used Entity Framework Core to connect the API layer with SQL Server and structure database operations.",
      "Implemented REST APIs, JWT authentication and role-based access to control protected functionality.",
      "Built Chart.js visualizations and integrated an AI-based travel-volume prediction feature.",
      "Supported IIS deployment and troubleshooting around routing and static-file/API serving.",
    ],
    result: "Delivered an end-to-end full-stack application covering frontend, backend, database, authentication, analytics and deployment concerns.",
    details: [
      "Developed frontend features with Angular and TypeScript and backend services with ASP.NET Core Web API and C#.",
      "Implemented REST APIs, JWT authentication, role-based access and Entity Framework Core.",
      "Built Chart.js dashboards and integrated an AI-based travel-volume prediction feature.",
    ],
  },
  {
    title: "EvoServe AI Support Assistant",
    category: "AI & Data",
    stack: ["AI Assistant", "Databricks", "SQL", "Knowledge Base"],
    summary: "Extended an AI-powered IT support assistant to surface operational reporting and knowledge from Databricks tables.",
    impact: "390-record validation audit",
    role: "AI/data workflow analysis and validation",
    problem: "An AI support assistant needs access to structured operational knowledge and a way to distinguish useful information from gaps or noisy matches.",
    why: "Connecting the assistant to governed operational data can make responses more useful, but the retrieval and classification behaviour still needs measurable validation.",
    how: [
      "Worked on extending the assistant to retrieve and surface operational reporting from Databricks knowledge-base tables.",
      "Built supporting analysis using SQL keyword extraction and semantic comparison to identify knowledge gaps.",
      "Added noise handling, coverage scoring and remit tagging to make the analysis more useful for operational review.",
      "Used reconciliation checks and sampling-based audits to compare AI-assisted classification against reviewed records.",
    ],
    result: "A 390-record validation audit produced 95.8% accuracy across classifiable records in the reviewed sample.",
    details: [
      "Worked on extending the assistant to retrieve and surface operational reporting from Databricks knowledge-base tables.",
      "Built supporting analysis around knowledge gaps, keyword extraction and semantic comparison.",
      "Used reconciliation checks and sampling-based audits to validate AI-assisted classification quality.",
    ],
    note: "This is based on internal company work. The portfolio intentionally shows the architecture and my contribution without exposing confidential code, data or internal screenshots.",
  },
  {
    title: "Wristgency’00",
    category: "IoT & Innovation",
    stack: ["IoT", "Sensors", "Cloud", "Mobile Alerts"],
    summary: "IoT health-monitoring wristband concept combining sensors, cloud connectivity and real-time mobile alerts.",
    impact: "4 major recognitions",
    role: "IoT system concept, sensing and monitoring workflow",
    problem: "A wearable monitoring concept needed to collect useful sensor readings and make the information available for timely monitoring.",
    why: "Combining on-device sensors with cloud/mobile connectivity allows measurements to move from raw readings into a monitoring and alerting workflow.",
    how: [
      "Designed the wristband concept around heart rate, body temperature and environmental temperature/humidity measurements.",
      "Connected sensor readings to a cloud/mobile workflow for monitoring and real-time alerts.",
      "Considered the end-to-end flow from sensing and data transmission through to user notification.",
      "Presented the project in innovation and design competitions across 2020–2022.",
    ],
    result: "The project received multiple innovation and design recognitions, including Platinum, Gold, 4 Stars and Silver awards.",
    details: [
      "Monitored heart rate, body temperature and environmental temperature/humidity.",
      "Connected sensor readings to cloud/mobile alert workflows for real-time monitoring.",
      "Project received multiple innovation and design recognitions across 2020–2022.",
    ],
  },
];

const skills = {
  "AI & GenAI": [
    "Generative AI & LLMs",
    "Agentic AI",
    "RAG & Grounding",
    "Embeddings",
    "Prompt Engineering",
    "Tool / Function Calling",
    "AI Evaluation",
    "AI Assistants",
  ],
  "Software Engineering": [
    "Python",
    "C#",
    "JavaScript",
    "Java",
    "C / C++",
    "Angular",
    "React.js",
    "Node.js",
    "ASP.NET Core",
    "REST APIs",
    "Entity Framework Core",
    "JWT Authentication",
  ],
  "Data & Analytics": [
    "SQL",
    "Databricks",
    "SQL Server",
    "MySQL",
    "Power BI",
    "Tableau",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Data Pipelines",
    "Semantic Analysis",
    "Predictive Modelling",
  ],
};

const experience = [
  {
    company: "The Access Group",
    role: "Data Analyst | K-Youth Programme",
    period: "Jun 2026 — Present",
    location: "Hybrid · GTS ITSM Tooling Team",
    bullets: [
      "Co-lead AI-augmented reporting workflows using Claude, Databricks and SQL to transform operational data into automated reporting, commentary, trends and insights.",
      "Extend an AI-powered IT support assistant to retrieve and surface operational reporting from Databricks knowledge-base tables.",
      "Designed an AI-assisted knowledge-gap pipeline using SQL keyword extraction, semantic AI comparison, noise handling, coverage scoring and remit tagging.",
      "Built validation frameworks with reconciliation checks and sampling-based classification audits; 95.8% accuracy across classifiable records in a 390-ticket audit.",
    ],
  },
  {
    company: "Alam Flora",
    role: "Full Stack Software Developer Intern",
    period: "Jul 2025 — Oct 2025",
    location: "Malaysia",
    bullets: [
      "Built Travel Monitor features using Angular, TypeScript, ASP.NET Core Web API, C# and SQL Server.",
      "Implemented REST APIs, JWT authentication, role-based access and Entity Framework Core.",
      "Developed Chart.js dashboards and an AI-based travel-volume prediction feature; supported IIS deployment and routing fixes.",
    ],
  },
  {
    company: "Alam Flora",
    role: "IT Networking & Systems Intern",
    period: "Jun 2022 — Dec 2022",
    location: "Malaysia",
    bullets: [
      "Supported hardware, software, networking and internal IT operations.",
      "Worked with Group Policy, network infrastructure and internal real-time communication and monitoring solutions.",
    ],
  },
];

const awards = [
  ["Platinum Trophy", "ITE 2022"],
  ["Gold Medal", "Japan Design, Idea & Invention Expo 2021"],
  ["4 Stars", "ICBME 2021"],
  ["Silver", "Project & Innovation Exhibition 2020"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const filters = ["All", "AI & Automation", "Agentic AI", "AI & NLP", "Full Stack", "AI & Data", "IoT & Innovation"];
  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>Devaneyan<span className="brand-dot">.</span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            <span /><span /><span />
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["About", "Experience", "Projects", "Services", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href={email}>Resume ↗</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero section-grid">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Open to AI & Software opportunities</div>
            <h1>Hi, I&apos;m <span>Devaneyan Muniandy</span></h1>
            <div className="hero-role">
              <span className="role-pill">AI / ML Engineer</span><span className="role-sep">&amp;</span><span className="role-pill">Data &amp; Software</span>
            </div>
            <p className="hero-lead">
              I build practical AI systems, automation workflows and full-stack applications that turn data and ideas into useful products.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects <span>↓</span></a>
              <a className="button secondary" href={email}>Get in Touch <span>↗</span></a>
            </div>
            <div className="hero-meta">
              <span>📍 Selangor, Malaysia</span>
              <span>🎓 BSc (Hons) Artificial Intelligence</span>
              <span>⚡ GenAI · Automation · Full Stack</span>
            </div>
            <div className="social-row">
              <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href={email} aria-label="Email">@</a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img className="hero-photo" src="/websitedeva/profile.jpg" alt="Devaneyan Muniandy" />
          </div>
        </div>
      </section>

      <section className="recruiter-strip">
        <div className="container metric-grid">
          <div><strong>95.8%</strong><span>classification accuracy</span></div>
          <div><strong>5–7 → 3</strong><span>reporting days / month</span></div>
          <div><strong>6</strong><span>featured projects</span></div>
          <div><strong>3.50</strong><span>BSc AI CGPA</span></div>
        </div>
      </section>

      <section id="about" className="section section-grid">
        <div className="container two-col">
          <div>
            <p className="section-kicker">01 / WHO I AM</p>
            <h2>About <span>Me</span></h2>
          </div>
          <div className="about-copy">
            <p>I&apos;m an Artificial Intelligence graduate based in Selangor, Malaysia. I enjoy building practical systems where data, software engineering and AI come together to solve real problems.</p>
            <p>In my current role at <strong>The Access Group</strong>, I work across AI-assisted reporting, Databricks, SQL, semantic analysis, validation and AI assistant workflows. My full-stack experience gives me a strong foundation for taking an idea from data and APIs through to a usable application.</p>
            <p>I&apos;m particularly interested in <strong>GenAI, agentic systems, AI automation, LLM applications and AI-enabled software products</strong> — especially where the technology creates a measurable improvement for users or a business team.</p>
            <div className="about-tags"><span>Curious builder</span><span>Data-driven</span><span>AI-first mindset</span><span>Full-stack foundation</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section alt-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-kicker">02 / TECHNICAL TOOLKIT</p><h2>My <span>Skills</span></h2></div>
            <p>A practical mix of AI, software engineering and data skills.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-panel">
              <h3>What I work with</h3>
              <div className="skills-grid">
                {Object.entries(skills).map(([group, items]) => (
                  <div className="skill-group" key={group}>
                    <h3>{group}</h3>
                    <div className="skill-list">{items.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="cert-panel">
              <h3>Certifications &amp; Recognition</h3>
              <div className="cert-list">
                <div><span>GOOGLE · JUL 2026</span><h3>AI Professional Certificate</h3><p>Professional learning in applied AI concepts and workflows.</p></div>
                <div><span>GOOGLE · AUG 2026</span><h3>Data Analytics Professional Certificate</h3><p>Data analysis, preparation and analytical workflows.</p></div>
                <div><span>GOOGLE · AUG 2026</span><h3>Cybersecurity Professional Certificate</h3><p>Foundational cybersecurity knowledge and practices.</p></div>
                <div><span>INNOVATION · 2020–2022</span><h3>Platinum, Gold, 4 Stars &amp; Silver Awards</h3><p>Recognition across academic innovation and design competitions.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-grid">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-kicker">03 / WHERE I&apos;VE WORKED</p><h2><span>Experience</span></h2></div>
            <p>Experience across AI, data, software engineering and IT operations.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-marker">0{index + 1}</div>
                <div className="timeline-content">
                  <div className="experience-head">
                    <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
                    <div className="period">{item.period}</div>
                  </div>
                  <p className="muted">{item.location}</p>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section alt-section">
        <div className="container">
          <div className="section-heading projects-heading">
            <div><p className="section-kicker">04 / SELECTED WORK</p><h2><span>Projects</span></h2></div>
            <p>A collection of work across AI, computer vision, data, automation and full-stack development.</p>
          </div>
          <div className="filter-row" role="tablist" aria-label="Project filters">
            {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-visual">
                  <div className="project-visual-label">{project.category.toUpperCase()}</div>
                  <div className="project-visual-title">{project.title}</div>
                </div>
                <div className="project-card-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="stack-row">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-bottom"><strong>{project.impact}</strong><button onClick={() => setSelectedProject(project)}>View Case Study ↗</button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section section-grid">
        <div className="container">
          <div className="section-heading">
            <div><p className="section-kicker">05 / WHAT I DO</p><h2><span>Services</span></h2></div>
            <p>Practical AI, data and software work focused on useful outcomes.</p>
          </div>
          <div className="services-grid">
            <article className="service-card"><div className="service-icon">🤖</div><h3>AI &amp; LLM Applications</h3><p>Build practical AI assistants, LLM workflows and task-specific AI experiences.</p><ul><li>LLM workflow design</li><li>AI assistants &amp; chatbots</li><li>Prompt and output structuring</li></ul></article>
            <article className="service-card"><div className="service-icon">⚙</div><h3>AI Automation</h3><p>Turn repetitive operational work into structured workflows with validation and human review.</p><ul><li>AI-assisted reporting</li><li>Workflow automation</li><li>Validation &amp; reconciliation</li></ul></article>
            <article className="service-card"><div className="service-icon">⌁</div><h3>Data &amp; Analytics</h3><p>Transform operational data into analysis, dashboards and decision-support outputs.</p><ul><li>SQL &amp; Databricks</li><li>Semantic analysis</li><li>Power BI reporting</li></ul></article>
            <article className="service-card"><div className="service-icon">◉</div><h3>Full-Stack Development</h3><p>Build applications across frontend, APIs, databases, authentication and deployment.</p><ul><li>Angular &amp; TypeScript</li><li>ASP.NET Core &amp; C#</li><li>REST APIs &amp; SQL Server</li></ul></article>
            <article className="service-card"><div className="service-icon">⌕</div><h3>AI Evaluation &amp; Validation</h3><p>Measure AI-assisted outputs using structured checks, sampling and data reconciliation.</p><ul><li>Classification audits</li><li>Knowledge-gap analysis</li><li>Quality validation</li></ul></article>
            <article className="service-card"><div className="service-icon">✦</div><h3>AI Product Prototyping</h3><p>Turn an AI idea into a focused prototype with clear workflows, interfaces and measurable outcomes.</p><ul><li>Proof-of-concept design</li><li>Workflow decomposition</li><li>Technical prototyping</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container two-col education-grid">
          <div>
            <p className="section-kicker">06 / EDUCATION</p>
            <h2>Academic <span>foundation.</span></h2>
            <div className="education-card"><p className="edu-date">2023 — 2026</p><h3>Multimedia University (MMU)</h3><p>BSc (Hons) Artificial Intelligence</p><strong>CGPA 3.50 · Dean&apos;s List · Yayasan TM Scholar</strong></div>
            <div className="education-card"><p className="edu-date">2018 — 2021</p><h3>Mersing Polytechnic</h3><p>Diploma in Information Technology (Networking)</p><strong>CGPA 3.78 · Dean&apos;s List every semester</strong></div>
          </div>
          <div>
            <p className="section-kicker">07 / RECOGNITION</p>
            <h2>Selected <span>awards.</span></h2>
            <div className="cert-list">
              {awards.map(([award, event]) => <div key={award + event}><span>✦ RECOGNITION</span><h3>{award}</h3><p>{event}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-grid">
        <div className="container contact-inner">
          <p className="section-kicker">08 / LET&apos;S CONNECT</p>
          <h2>Get in <span>Touch</span></h2>
          <p className="contact-lead">I&apos;m open to new opportunities and collaborations across AI, data, software engineering and automation.</p>
          <div className="contact-actions"><a className="button primary" href={email}>Email Me ↗</a><a className="button secondary" href={linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
          <div className="contact-note"><span>Based in Selangor, Malaysia</span><span>Open to suitable opportunities</span></div>
        </div>
      </section>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Devaneyan Muniandy</span><span>AI · Software · Data · Automation</span><a href="#home">Back to top ↑</a></div></footer>

      {selectedProject && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">×</button>
            <p className="section-kicker">PROJECT CASE STUDY</p>
            <h2>{selectedProject.title}</h2>
            <p className="modal-impact">{selectedProject.impact}</p>
            <p className="modal-summary">{selectedProject.summary}</p>
            <div className="stack-row">{selectedProject.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="case-study-grid">
              <div className="case-study-block"><span className="case-label">MY ROLE</span><p>{selectedProject.role}</p></div>
              <div className="case-study-block"><span className="case-label">THE PROBLEM</span><p>{selectedProject.problem}</p></div>
            </div>
            <div className="case-study-block full"><span className="case-label">WHY I BUILT / USED THIS APPROACH</span><p>{selectedProject.why}</p></div>
            <div className="case-study-block full"><span className="case-label">HOW I DID IT</span><ul className="modal-list">{selectedProject.how.map((step, index) => <li key={step}><strong>{String(index + 1).padStart(2, "0")}</strong>{step}</li>)}</ul></div>
            <div className="case-study-block result-block"><span className="case-label">RESULT / OUTCOME</span><p>{selectedProject.result}</p></div>
            {selectedProject.note && <div className="project-note">{selectedProject.note}</div>}
            <details className="technical-details"><summary>Quick technical contribution</summary><ul className="modal-list">{selectedProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></details>
          </div>
        </div>
      )}
    </main>
  );
}
