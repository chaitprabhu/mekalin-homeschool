"use client";

import { useState } from "react";
import { BookOpen, PenLine, Layers, FlaskConical, Clock, Tag, ArrowUpRight } from "lucide-react";

type ProofModality = "craft" | "painting" | "cooking" | "book";
type EpistemicLayer = 1 | 2 | 3 | 4;

interface ProjectArtifact {
  id: string;
  title: string;
  modality: ProofModality;
  epistemicLayer: EpistemicLayer;
  ageStage: string;
  subject: string;
  learningObjective: string;
  processSummary: string;
  epistemicInsight: string;
  year: string;
  status: "archived" | "coming-soon";
}

const PLACEHOLDER_PROJECTS: ProjectArtifact[] = [
  {
    id: "fermentation-bread-01",
    title: "Sourdough Fermentation Study",
    modality: "cooking",
    epistemicLayer: 4,
    ageStage: "14-15",
    subject: "Chemistry / Systems Biology",
    learningObjective: "Demonstrate understanding of microbial metabolism, pH dynamics, and time as a variable.",
    processSummary: "Over 6 weeks, managed a live sourdough culture, documenting temperature, hydration, and rise times. Varied one variable per batch and observed cascade effects.",
    epistemicInsight: "Project revealed that the learner had mastered the declarative content but had not internalised the irreversibility of chemical processes. Three failed loaves before the system was understood as a real-time hypothesis test, not a recipe.",
    year: "2022",
    status: "archived",
  },
  {
    id: "cell-watercolour-01",
    title: "Cell Architecture in Watercolour",
    modality: "painting",
    epistemicLayer: 3,
    ageStage: "10-11",
    subject: "Molecular Biology",
    learningObjective: "Demonstrate conceptual integration of organelle function and spatial relationships within eukaryotic cells.",
    processSummary: "After completing the unit on cell biology, produced a large-format watercolour of a eukaryotic cell from memory. Each organelle was rendered with colour-coded functional annotation.",
    epistemicInsight: "The act of rendering the cell from memory — without reference — forced the learner to confront gaps in spatial understanding that reading had concealed. The painting revealed that the Golgi apparatus was conceptually isolated from the secretory pathway.",
    year: "2018",
    status: "archived",
  },
  {
    id: "bookcompletion-cosmos-01",
    title: "Cosmos: A Personal Voyage — Full Reading",
    modality: "book",
    epistemicLayer: 1,
    ageStage: "9-10",
    subject: "Astronomy / Philosophy of Science",
    learningObjective: "Engage with a sustained scientific argument across 13 chapters; track the author's epistemic moves.",
    processSummary: "Read the full Sagan text over 8 weeks. For each chapter, documented: one claim, the evidence Sagan offered, and one question the chapter raised but didn't answer.",
    epistemicInsight: "First clear evidence of epistemic vigilance transferring from direct instruction to independent reading. The learner began identifying rhetorical moves that substituted emotional resonance for evidence.",
    year: "2017",
    status: "archived",
  },
  {
    id: "basket-weaving-01",
    title: "Traditional Coiled Basket",
    modality: "craft",
    epistemicLayer: 2,
    ageStage: "12-13",
    subject: "Mathematics / Material Culture",
    learningObjective: "Demonstrate procedural understanding of geometric progression, tension, and constraint in three-dimensional construction.",
    processSummary: "Completed a coiled basket using natural materials over 4 weeks. The pattern required calculating coil diameter progression and managing tension to prevent warping.",
    epistemicInsight: "The project exposed a gap between abstract understanding of geometric sequences and their physical manifestation under material constraints. The basket warped twice before the learner adjusted the mathematical model to account for material elasticity.",
    year: "2020",
    status: "archived",
  },
  {
    id: "coming-soon-01",
    title: "50+ Project Artifacts Being Documented",
    modality: "craft",
    epistemicLayer: 1,
    ageStage: "Various",
    subject: "12 Years Across All Domains",
    learningObjective: "Full archive of project-as-proof artifacts being photographed, scanned, and annotated for publication.",
    processSummary: "The complete Project Gallery spanning craft work, paintings, cooking records, and completed books across 12 years is being built as the primary visual authority layer for this site.",
    epistemicInsight: "No other homeschooling site has a systematically documented, methodology-linked project archive spanning 12+ years. This gallery is that irreplicable asset.",
    year: "2013-2025",
    status: "coming-soon",
  },
];

const MODALITY_CONFIG: Record<ProofModality, { label: string; icon: typeof BookOpen; color: string; bg: string }> = {
  book: { label: "Book Completion", icon: BookOpen, color: "text-parchment-400", bg: "bg-ink-800" },
  craft: { label: "Craft Work", icon: PenLine, color: "text-accent-light", bg: "bg-accent/20" },
  painting: { label: "Painting / Visual Art", icon: Layers, color: "text-blue-400", bg: "bg-blue-900/20" },
  cooking: { label: "Cooking", icon: FlaskConical, color: "text-amber-400", bg: "bg-amber-900/20" },
};

const LAYER_LABELS: Record<EpistemicLayer, string> = {
  1: "Layer I: Factual Foundation",
  2: "Layer II: Procedural Competence",
  3: "Layer III: Conceptual Integration",
  4: "Layer IV: Epistemic Agency",
};

const LAYER_COLORS: Record<EpistemicLayer, string> = {
  1: "bg-parchment-300 text-ink-600",
  2: "bg-accent/20 text-accent",
  3: "bg-blue-100 text-blue-700",
  4: "bg-ink-800 text-parchment-300",
};

function ProjectCard({ project }: { project: ProjectArtifact }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = MODALITY_CONFIG[project.modality];
  const Icon = cfg.icon;

  if (project.status === "coming-soon") {
    return (
      <div className="border border-dashed border-parchment-300 rounded-sm p-6 flex flex-col items-center justify-center text-center min-h-48 bg-parchment-50">
        <p className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-2">Coming Soon</p>
        <p className="font-serif text-lg text-ink-700 italic mb-2">{project.title}</p>
        <p className="text-sm text-ink-400 leading-relaxed max-w-xs">{project.processSummary}</p>
      </div>
    );
  }

  return (
    <article className="bg-white border border-parchment-200 rounded-sm overflow-hidden hover:border-parchment-400 transition-colors group">
      <div className={`${cfg.bg} px-5 py-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <Icon className={`w-4 h-4 ${cfg.color}`} />
          <span className={`text-xs font-mono tracking-widest uppercase ${cfg.color} opacity-80`}>{cfg.label}</span>
        </div>
        <span className="text-xs text-ink-400 font-mono">{project.year}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-lg text-ink-900 leading-snug group-hover:text-accent transition-colors">{project.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm ${LAYER_COLORS[project.epistemicLayer]}`}>{LAYER_LABELS[project.epistemicLayer]}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-parchment-200 text-ink-500 flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> Age {project.ageStage}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-parchment-200 text-ink-500 flex items-center gap-1"><Tag className="w-2.5 h-2.5" /> {project.subject}</span>
        </div>
        <p className="text-sm text-ink-500 leading-relaxed mb-4"><strong className="text-ink-700">Objective:</strong> {project.learningObjective}</p>
        {expanded && (
          <div className="border-t border-parchment-200 pt-4 space-y-3">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-ink-400 mb-1">Process</p>
              <p className="text-sm text-ink-600 leading-relaxed">{project.processSummary}</p>
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-accent mb-1">Epistemic Insight</p>
              <p className="text-sm text-ink-700 leading-relaxed italic border-l-2 border-accent/30 pl-3">{project.epistemicInsight}</p>
            </div>
          </div>
        )}
        <button onClick={() => setExpanded(!expanded)} className="mt-3 text-xs text-accent hover:text-accent-dark flex items-center gap-1 transition-colors">
          {expanded ? "Collapse" : "Read Analysis"}
          <ArrowUpRight className={`w-3 h-3 transition-transform ${expanded ? "rotate-90" : ""}`} />
        </button>
      </div>
    </article>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-sm border transition-colors ${active ? "bg-ink-950 text-parchment border-ink-950" : "bg-white text-ink-500 border-parchment-300 hover:border-ink-400"}`}>
      {children}
    </button>
  );
}

export default function ProjectGallery() {
  const [activeModality, setActiveModality] = useState<ProofModality | "all">("all");
  const [activeLayer, setActiveLayer] = useState<EpistemicLayer | "all">("all");

  const filtered = PLACEHOLDER_PROJECTS.filter((p) => {
    if (p.status === "coming-soon") return true;
    const modalityMatch = activeModality === "all" || p.modality === activeModality;
    const layerMatch = activeLayer === "all" || p.epistemicLayer === activeLayer;
    return modalityMatch && layerMatch;
  });

  const archivedCount = PLACEHOLDER_PROJECTS.filter((p) => p.status === "archived").length;

  return (
    <section>
      <div className="max-w-[72ch] mx-auto mb-12">
        <p className="section-label mb-4">Project Gallery</p>
        <h2 className="pillar-h2 mt-0">Project-as-Proof Archive</h2>
        <p className="pillar-p">Each entry below is an epistemic artifact — documentation of a project that served as proof of learning. These are not portfolio pieces in the decorative sense. They are evidence nodes in a 12-year longitudinal dataset.</p>
        <p className="text-sm text-ink-400 font-mono">{archivedCount} artifacts documented &nbsp;·&nbsp; Full archive in progress</p>
      </div>
      <div className="mb-8 space-y-3">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-ink-400 mr-2 font-mono uppercase tracking-widest">Modality:</span>
          <FilterPill active={activeModality === "all"} onClick={() => setActiveModality("all")}>All</FilterPill>
          {(Object.keys(MODALITY_CONFIG) as ProofModality[]).map((m) => (
            <FilterPill key={m} active={activeModality === m} onClick={() => setActiveModality(m)}>{MODALITY_CONFIG[m].label}</FilterPill>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-ink-400 mr-2 font-mono uppercase tracking-widest">Layer:</span>
          <FilterPill active={activeLayer === "all"} onClick={() => setActiveLayer("all")}>All Layers</FilterPill>
          {([1, 2, 3, 4] as EpistemicLayer[]).map((l) => (
            <FilterPill key={l} active={activeLayer === l} onClick={() => setActiveLayer(l)}>Layer {l}</FilterPill>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Project-as-Proof Archive",
            description: "12-year archive of epistemic artifacts from project-based homeschool assessment",
            numberOfItems: archivedCount,
            itemListElement: PLACEHOLDER_PROJECTS
              .filter((p) => p.status === "archived")
              .map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "CreativeWork",
                  name: p.title,
                  description: p.learningObjective,
                  educationalUse: "assessment",
                  typicalAgeRange: p.ageStage,
                  about: p.subject,
                },
              })),
          }),
        }}
      />
    </section>
  );
}
