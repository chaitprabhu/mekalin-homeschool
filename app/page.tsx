import { BookOpen, Layers, FlaskConical, Newspaper, PenLine, BarChart3, ArrowRight, Microscope } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Epistemic Depth vs. Academic Mastery: The Molecular Biologist's Approach to Homeschooling",
  description:
    "A 5,000-word architectural manifesto on why epistemic depth outperforms academic mastery in 12 years of homeschooling practice.",
  alternates: {
    canonical: "https://mekalin-homeschool.com",
  },
};

const depthLayers = [
  {
    layer: "I",
    label: "Factual Foundation",
    type: "What",
    proof: "Complete a Book",
    proofDesc: "Engage with another mind's knowledge structure on its own terms. Sustained reading is the most underrated epistemic discipline.",
    color: "border-l-parchment-400",
    icon: BookOpen,
  },
  {
    layer: "II",
    label: "Procedural Competence",
    type: "How",
    proof: "Craft Work",
    proofDesc: "Execute a sequence within material constraints. The gap between knowing the steps and producing the object is exactly where shallow understanding collapses.",
    color: "border-l-accent/60",
    icon: PenLine,
  },
  {
    layer: "III",
    label: "Conceptual Integration",
    type: "Why",
    proof: "Painting / Visual Art",
    proofDesc: "Synthesize and abstract across representational systems. Translation between media is not decoration — it is the mechanism of deep understanding.",
    color: "border-l-accent",
    icon: Layers,
  },
  {
    layer: "IV",
    label: "Epistemic Agency",
    type: "How do we know",
    proof: "Cooking a Dish",
    proofDesc: "Real-time systems management with irreversible consequences. Every decision is a hypothesis. The burnt souffle is a data point.",
    color: "border-l-ink-700",
    icon: FlaskConical,
  },
];

const competencyTable = [
  { mastery: "Scores well on assessments", depth: "Can explain why the assessment question matters" },
  { mastery: "Reproduces correct answers", depth: "Generates new questions from existing answers" },
  { mastery: "Covers the curriculum", depth: "Understands the assumptions underlying the curriculum" },
  { mastery: "Memorises definitions", depth: "Can identify when a definition breaks down" },
  { mastery: "Follows the methodology", depth: "Can critique and revise the methodology" },
];

const milestones = [
  { year: "Year 1-2", event: "Structured reading protocols introduced. Book-completion as the primary proof artifact.", outcome: "Sustained attention; narrative comprehension established." },
  { year: "Year 3-4", event: "Craft projects introduced as Layer II proof. First science spiral: cells to systems to organisms.", outcome: "Procedural confidence; early schema formation." },
  { year: "Year 5-6", event: "STOBLS methodology formalised. Narrative scaffolds applied to mathematics and biology.", outcome: "Cross-domain transfer first observed. Intrinsic motivation sustained without external grades." },
  { year: "Year 7-8", event: "Journalism methods introduced: source evaluation, claim verification, evidence triangulation.", outcome: "Epistemic vigilance becomes a default cognitive posture." },
  { year: "Year 9-10", event: "Cooking as Layer IV assessment. Complex systems projects: cooking chemistry, fermentation, bread timing.", outcome: "Real-time hypothesis testing. First 'failure as signal' breakthroughs." },
  { year: "Year 11-12", event: "College application portfolio built entirely from Project-as-Proof artifacts. Zero conventional test-prep.", outcome: "Both daughters admitted to college with strong independent-learning assessments." },
];

export default function PillarPage() {
  return (
    <div className="min-h-screen bg-parchment">

      <header className="sticky top-0 z-50 bg-parchment/90 backdrop-blur-sm border-b border-parchment-300">
        <nav className="max-w-screen-lg mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-lg text-ink-950 tracking-tight">Mekalin Homeschool</span>
          <div className="hidden md:flex items-center gap-6 text-sm text-ink-500">
            <a href="#methodology" className="hover:text-accent transition-colors">Methodology</a>
            <a href="#framework" className="hover:text-accent transition-colors">Framework</a>
            <a href="#data" className="hover:text-accent transition-colors">12 Years of Data</a>
            <a href="#projects" className="hover:text-accent transition-colors">Project Gallery</a>
          </div>
          <a href="#subscribe" className="text-sm bg-ink-950 text-parchment px-4 py-2 rounded-sm hover:bg-ink-700 transition-colors">Get the Playbook</a>
        </nav>
      </header>

      <section className="max-w-screen-lg mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="section-label mb-6">Project Aurelia &nbsp;·&nbsp; Epistemic Depth Series &nbsp;·&nbsp; Pillar Page</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-ink-950 leading-[1.1] tracking-tight mb-8">
            Epistemic Depth <span className="italic text-accent">vs.</span> Academic Mastery
          </h1>
          <p className="font-serif text-xl md:text-2xl text-ink-600 italic leading-relaxed mb-8">The Molecular Biologist's Approach to Homeschooling</p>
          <div className="flex items-center gap-4 text-sm text-ink-500 border-t border-parchment-300 pt-6">
            <span className="font-medium text-ink-700">Chaitanya Prabhu Hak</span>
            <span>·</span>
            <span>Molecular Biologist · Investigative Journalist · Instructional Designer</span>
            <span>·</span>
            <span>July 2026</span>
          </div>
        </div>
      </section>

      <section className="bg-ink-950 text-parchment-200 py-8">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-ink-700">
            {[
              { icon: Microscope, label: "Molecular Biology", sub: "Systems thinking from the lab" },
              { icon: Newspaper, label: "Investigative Journalism", sub: "~10 years of evidence synthesis" },
              { icon: Layers, label: "Instructional Design", sub: "15+ years of learning architecture" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-4 md:px-8 first:pl-0 last:pr-0">
                <Icon className="w-5 h-5 text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-parchment text-sm">{label}</p>
                  <p className="text-ink-400 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-screen-lg mx-auto px-6">

        <article className="max-w-[72ch] mx-auto py-16" id="intro">
          <p className="section-label mb-6">I. Opening Frame</p>
          <h2 className="pillar-h2">The Problem with 'Academic Mastery'</h2>
          <p className="pillar-p drop-cap">This is not a homeschooling blog. This is a record of twelve years of applied epistemology — a longitudinal experiment in what happens when you replace the question "does the child know this?" with "does the child understand how they know this, and what would change their mind?"</p>
          <p className="pillar-p">Academic mastery is a seductive metric. High grades, correct answers, syllabus coverage — these are legible, reportable, and socially validated. They are also, in many cases, a measurement of surface-level confidence masquerading as depth. I learned this first in a molecular biology laboratory, not a classroom.</p>
          <p className="pillar-p">The replication crisis in science is not primarily a methodology failure. It is an epistemic failure: researchers who were trained to produce results rather than to interrogate the conditions under which results could be trusted. When I shifted careers into instructional design, I watched the same pattern play out in educational settings.</p>
          <p className="pillar-p"><strong>Thesis:</strong> Epistemic depth — the capacity to understand how you know what you know — is trainable, measurable, and demonstrably superior to academic mastery as a preparation for a world where knowledge changes faster than curricula can be written.</p>
        </article>

        <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16" id="definitions">
          <p className="section-label mb-6">II. Definitions &amp; Distinctions</p>
          <h2 className="pillar-h2">Mastery vs. Depth: A Precise Separation</h2>
          <p className="pillar-p">Before proceeding, the distinction requires precision. These are not points on the same spectrum. They are different things being measured by different instruments.</p>
          <h3 className="pillar-h3">Academic Mastery</h3>
          <p className="pillar-p">Performance on assessments. Content coverage. Grade-level benchmarks. The ability to retrieve and reproduce knowledge in the form it was originally received. Mastery is measured in the same medium as instruction. It is inherently conservative — it validates what was taught, not what was understood.</p>
          <h3 className="pillar-h3">Epistemic Depth</h3>
          <p className="pillar-p">The capacity to understand how knowledge is constructed, justified, and revised. Epistemic depth asks not just "what is the answer?" but "how do we know this is the answer?", "what evidence would change it?", and "what are the limits of this claim?"</p>
          <div className="my-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-ink-200">
                  <th className="text-left py-3 pr-6 font-mono text-xs tracking-widest uppercase text-ink-400 font-medium">Mastery-Oriented</th>
                  <th className="text-left py-3 font-mono text-xs tracking-widest uppercase text-accent font-medium">Depth-Oriented</th>
                </tr>
              </thead>
              <tbody>
                {competencyTable.map((row, i) => (
                  <tr key={i} className="border-b border-parchment-300">
                    <td className="py-3 pr-6 text-ink-500">{row.mastery}</td>
                    <td className="py-3 text-ink-800 font-medium">{row.depth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="sidenote">The KAKQ to UAUQ spectrum (Known Answers/Known Questions to Unknown Answers/Unknown Questions) is a useful orienting map. Most schooling operates entirely in KAKQ territory.</p>
        </article>

        <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16" id="methodology">
          <p className="section-label mb-6">III. The Molecular Biologist's Lens</p>
          <h2 className="pillar-h2">When Lab Thinking Becomes Pedagogy</h2>
          <p className="pillar-p">Molecular biology is an education in the limits of reductionism. You can sequence a gene, characterise its protein product, and map its binding partners — and still not understand what happens when you disrupt it in a living system.</p>
          <p className="pillar-p">Gene regulatory networks are the clearest metaphor I have found for what deep learning looks like. Understanding is not the accumulation of isolated facts; it is the formation of a network in which nodes (concepts) activate, inhibit, and modulate each other in response to context.</p>
          <p className="pillar-p">This is the core architectural principle: we never taught facts. We taught relationships. Every fact was introduced as a node in a network that the learner could eventually traverse in any direction.</p>
          <h3 className="pillar-h3">Systems Pedagogy: From Systems Biology</h3>
          <p className="pillar-p">Systems biology introduced the methodological practice of studying feedback loops, homeostasis, and perturbation responses. I translated this directly into instructional architecture. Every curriculum unit was designed as a system: inputs, processing mechanisms, feedback signals, and emergent properties.</p>
        </article>

        <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16">
          <p className="section-label mb-6">IV. The Journalist's Contribution</p>
          <h2 className="pillar-h2">Evidence Hierarchies &amp; Epistemic Vigilance</h2>
          <p className="pillar-p">Ten years of investigative journalism is an extended training programme in one skill: determining whether a claim is true, and to what degree, with what qualifications. I imported this framework wholesale into the homeschool curriculum. We called it epistemic vigilance: the cognitive habit of questioning the source, identifying the assumption, and triangulating the claim before accepting it as knowledge.</p>
          <h3 className="pillar-h3">Teaching the Evidence Hierarchy</h3>
          <p className="pillar-p">By age 10, both learners could distinguish between primary and secondary sources, identify the difference between a study's findings and a journalist's interpretation of those findings, and articulate at least two alternative explanations for any presented phenomenon.</p>
        </article>

        <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16" id="framework">
          <p className="section-label mb-6">V. The Instructional Designer's Architecture</p>
          <h2 className="pillar-h2">Cognitive Load, Spiral Design &amp; STOBLS</h2>
          <p className="pillar-p">Instructional design gave me the formal vocabulary for what the lab and the newsroom had taught intuitively. Cognitive Load Theory is the most immediately useful framework. Epistemic depth requires germane load optimisation — the learner spending cognitive resources on building and connecting schemas.</p>
          <h3 className="pillar-h3">The STOBLS Method</h3>
          <p className="pillar-p">Story-Based Learning Sequences (STOBLS) is a methodology I developed across fifteen years of instructional design work. The premise: narrative is the most ancient and robust cognitive scaffold humans possess. Every STOBLS unit has a protagonist, a causal sequence, obstacles, and resolution. The content is the plot. The concept is what the plot demonstrates.</p>
        </article>

        <section className="bg-ink-950 text-parchment py-20 -mx-6 px-6 md:rounded-sm my-8" id="project-as-proof">
          <div className="max-w-[72ch] mx-auto">
            <p className="section-label text-accent-light mb-6">V-B. The Project-as-Proof Model</p>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-parchment leading-tight mb-8">The Epistemic Artifact Model</h2>
            <p className="text-parchment-300 leading-relaxed text-lg mb-6">Epistemic depth was never assessed abstractly. Mastery was always demonstrated through a tangible project — craft work, painting, cooking a dish, or completing the reading of a book.</p>
            <p className="text-parchment-300 leading-relaxed text-lg mb-6">The project is not an 'assignment' in the school sense. It is an <em>epistemic artifact</em> — proof that the learner has internalised knowledge deeply enough to transform it into something new in a different medium.</p>
            <p className="text-parchment-300 leading-relaxed text-lg mb-8"><strong className="text-parchment">The translation thesis:</strong> Deep understanding enables medium-crossing. If you can only express knowledge in the same form you received it, you have memorised, not understood.</p>
            <div className="bg-ink-900 border border-ink-700 rounded-sm p-4 mb-6">
              <p className="text-accent-light text-xs font-mono tracking-widest uppercase mb-3">The Proof Problem</p>
              <p className="text-parchment-300 text-sm leading-relaxed">Tests measure recall. Projects measure transfer. When a project stalls or fails, it reveals the exact epistemic gap — far more diagnostic than a wrong answer on a test.</p>
            </div>
          </div>
        </section>

        <section className="max-w-screen-lg mx-auto py-16" id="layers">
          <div className="max-w-[72ch] mx-auto mb-12">
            <p className="section-label mb-6">The 4-Layer Depth Architecture</p>
            <h2 className="pillar-h2">From Factual Foundation to Epistemic Agency</h2>
            <p className="pillar-p">Each layer is not a stage to complete and leave behind. It is a permanent dimension of the learner's cognitive architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {depthLayers.map(({ layer, label, type, proof, proofDesc, color, icon: Icon }) => (
              <div key={layer} className={`layer-card border-l-4 ${color} hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-ink-400 tracking-widest uppercase">Layer {layer}</span>
                    <h3 className="font-serif text-xl text-ink-950 mt-1 font-medium">{label}</h3>
                    <span className="text-xs text-ink-500 italic">{type}</span>
                  </div>
                  <Icon className="w-5 h-5 text-accent-light mt-1 shrink-0" />
                </div>
                <div className="border-t border-parchment-300 pt-4 mt-4">
                  <p className="text-xs font-mono tracking-widest uppercase text-accent mb-2">Project-as-Proof</p>
                  <p className="text-sm font-semibold text-ink-800 mb-2">{proof}</p>
                  <p className="text-sm text-ink-500 leading-relaxed">{proofDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="ornament py-4">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16" id="data">
          <p className="section-label mb-6">VI. 12 Years of Data</p>
          <h2 className="pillar-h2">What Actually Happened</h2>
          <p className="pillar-p">The following is a condensed timeline of curriculum decisions mapped to observed outcomes. This is first-party longitudinal data — no competitor in this space has this specific dataset.</p>
          <div className="my-10 space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-parchment-300 mt-1" />}
                </div>
                <div className="pb-8">
                  <p className="font-mono text-xs tracking-widest uppercase text-accent mb-1">{m.year}</p>
                  <p className="text-ink-800 font-medium text-sm mb-1">{m.event}</p>
                  <p className="text-ink-500 text-sm italic">{m.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="ornament py-4">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16">
          <p className="section-label mb-6">VII. The Practical Framework</p>
          <h2 className="pillar-h2">Implementing Epistemic Depth: Daily Practice</h2>
          <p className="pillar-p">The most important implementation tool costs nothing. It is a question: "How do you know?" Applied consistently across every domain, every day, it rewires the default cognitive posture from passive reception to active interrogation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {[
              { title: "Daily Protocol", desc: "'How do you know?' as a non-negotiable routine across every subject and every claim." },
              { title: "Assessment Redesign", desc: "Portfolios, explanation protocols, and revision histories replace standardised tests as primary evidence of learning." },
              { title: "Content Selection", desc: "Materials are selected for epistemic exposure — they must reveal how the knowledge was constructed, not just what the knowledge is." },
              { title: "The Project Gate", desc: "No unit is complete until the learner produces a proof artifact. The gate is the mechanism; the project is the evidence." },
              { title: "Age-Stage Calibration", desc: "Epistemic demands are calibrated to developmental stage: 6 (what), 10 (how), 14 (why), 17 (how do we know, and what changes if wrong)." },
              { title: "Failure as Diagnostic", desc: "When a project stalls, it reveals the exact epistemic gap. Failure is not a setback; it is a high-resolution signal." },
            ].map(({ title, desc }) => (
              <div key={title} className="layer-card">
                <p className="font-medium text-ink-800 text-sm mb-2">{title}</p>
                <p className="text-ink-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="ornament py-4">✦ &nbsp; ✦ &nbsp; ✦</div>

        <article className="max-w-[72ch] mx-auto py-16">
          <p className="section-label mb-6">VIII. Closing</p>
          <h2 className="pillar-h2">The Transfer Thesis</h2>
          <p className="pillar-p">Epistemic depth transfers. This is not a claim; it is a finding from cognitive science, confirmed longitudinally in our own data. When a learner has been trained to ask "how do I know this?" in the context of molecular biology, they bring the same question to a news article, a cooking recipe, a piece of craft work, and eventually to their own beliefs about the world.</p>
          <p className="pillar-p">The long game is preparing for a world where knowledge changes faster than curricula can be written. The only durable preparation is a learner who can evaluate, integrate, and revise knowledge independently.</p>
          <p className="pillar-p">That is what twelve years of homeschooling built. Not a curriculum. An epistemology.</p>
        </article>

        <section id="projects" className="py-16"><ProjectGallery /></section>

        <section id="subscribe" className="max-w-2xl mx-auto py-20 text-center">
          <p className="section-label mb-4">Get the Data-Driven Playbook</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink-950 leading-tight mb-6">Twelve years of curriculum decisions,<br /><span className="italic text-accent">compressed into a playbook.</span></h2>
          <p className="text-ink-500 mb-8 leading-relaxed">Receive the complete framework: keyword cluster analysis, STOBLS lesson templates, the 4-Layer assessment rubric, and the first spoke article when published.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-white border border-parchment-300 rounded-sm text-ink-800 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-accent/40 text-sm" />
            <button type="submit" className="flex items-center justify-center gap-2 bg-ink-950 text-parchment px-6 py-3 rounded-sm hover:bg-ink-700 transition-colors text-sm font-medium">Subscribe <ArrowRight className="w-4 h-4" /></button>
          </form>
        </section>

      </main>

      <footer className="border-t border-parchment-300 bg-parchment-100 mt-8">
        <div className="max-w-screen-lg mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="max-w-xs">
              <p className="font-serif text-lg text-ink-950 mb-2">Mekalin Homeschool</p>
              <p className="text-sm text-ink-500 leading-relaxed">An authority engine built at the intersection of molecular biology, investigative journalism, and instructional design. Project Aurelia.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="font-medium text-ink-700 mb-3 text-xs font-mono tracking-widest uppercase">Methodology</p>
                <div className="space-y-2 text-ink-500">
                  <p>Epistemic Depth</p><p>STOBLS Framework</p><p>Project-as-Proof</p><p>Spiral Curriculum</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-ink-700 mb-3 text-xs font-mono tracking-widest uppercase">Evidence</p>
                <div className="space-y-2 text-ink-500">
                  <p>12 Years of Data</p><p>Project Gallery</p><p>Outcome Tracker</p><p>Research Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-parchment-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-400">
            <p>© 2026 Chaitanya Prabhu Hak. All rights reserved.</p>
            <p className="font-mono">Data last verified: July 2026 &nbsp;·&nbsp; mekalin-homeschool.com</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
