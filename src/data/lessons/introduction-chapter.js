// Topic 6: Writing the Introduction Chapter — 4 annotated lessons

export const lessons = [
  // ─── LESSON 1: The CARS Model ─────────────────────────────────────────────
  {
    slug: 'cars-model',
    title: 'The CARS Model',
    durationMins: 10,
    intro:
      'Swales\'s CARS model (Create A Research Space) identifies three rhetorical moves that structure most academic introductions: establishing the territory, establishing a niche, and occupying the niche. Once you can see these moves, you will find them in almost every introduction you read — across disciplines, languages, and genres. More importantly, you can use them deliberately in your own writing. The two extracts below, from criminology and materials science, show the model in action across very different research contexts.',
    extracts: [
      {
        discipline: 'Criminology — Desistance and Custodial Sentences',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Desistance from crime has become one of the most productive research areas in criminology over the past three decades', a: 'a1' },
          { t: ' (Maruna, 2001; Laub and Sampson, 2003). ' },
          { t: 'Longitudinal studies have consistently demonstrated that the majority of those who offend in adolescence reduce their criminal activity substantially by their mid-twenties,', a: 'a2' },
          { t: ' with many achieving sustained desistance in early adulthood. ' },
          { t: 'However, most desistance research has focused on Western, predominantly Anglo-American contexts,', a: 'a3' },
          { t: ' and the mechanisms driving desistance — whether primarily cognitive, social, or structural — remain contested. ' },
          { t: 'Less attention has been paid to the role of institutional interventions in supporting desistance trajectories among those serving custodial sentences.', a: 'a4' },
          { t: ' This thesis examines the relationship between prison-based therapeutic communities and desistance trajectories in England and Wales,', a: 'a5' },
          { t: ' drawing on longitudinal qualitative data collected from thirty men across a six-year period. ' },
          { t: 'It argues that therapeutic communities function as a transitional identity resource', a: 'a6' },
          { t: ' that supports cognitive transformation before structural opportunities for desistance become available.' },
        ],
        annotations: {
          a1: {
            label: 'Move 1 — Territory: the field is active and significant',
            color: 'blue',
            text: '"One of the most productive research areas" — this opens by establishing that the field exists and matters. Move 1 creates the context the reader needs to understand why the research question is worth asking. It is not a literature review; it is a rhetorical claim about significance.',
          },
          a2: {
            label: 'Move 1 continued — consolidating the territory',
            color: 'blue',
            text: '"Longitudinal studies have consistently demonstrated..." consolidates the territory by citing established findings. The reader now knows what is known: the field exists, it has produced reliable results. Move 1 is complete.',
          },
          a3: {
            label: 'Move 2 — Niche: limitation in scope',
            color: 'rose',
            text: '"However, most desistance research has focused on Western... contexts" — "however" signals the pivot to Move 2. The niche here is a geographic and contextual limitation in the existing literature. This is one of Swales\'s sub-moves: indicating a gap by counter-claiming what existing work does not cover.',
          },
          a4: {
            label: 'Move 2 continued — narrowing to the specific gap',
            color: 'rose',
            text: '"Less attention has been paid to..." is a classic Move 2 phrase. It locates the niche precisely: not desistance in general, but institutional interventions, and specifically custodial settings. The gap statement is proportionate to the study — it doesn\'t claim the topic has never been studied, just that this dimension has received less attention.',
          },
          a5: {
            label: 'Move 3 — Occupying: the study announced',
            color: 'emerald',
            text: '"This thesis examines..." — Move 3 begins with the announcement of the study. Notice the sequence: the reader has been shown the territory (Move 1), the gap (Move 2), and now the study steps into that gap. The logic is cumulative: each move creates the need for the next.',
          },
          a6: {
            label: 'Move 3 continued — the argument stated',
            color: 'emerald',
            text: '"It argues that therapeutic communities function as a transitional identity resource..." — Move 3 doesn\'t just describe what the thesis does; it states what the thesis argues. This is occupying the niche fully: not merely addressing the gap, but claiming a specific answer.',
          },
        },
      },
      {
        discipline: 'Materials Science — Solid-State Battery Interfaces',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Lithium-ion batteries currently dominate portable energy storage, ' },
          { t: 'but their limitations — declining capacity retention on cycling and safety risks associated with liquid electrolytes —', a: 'b1' },
          { t: ' have driven intensive research into solid-state battery architectures ' },
          { t: '(Janek and Zeier, 2016; Manthiram et al., 2017). ', a: 'b2' },
          { t: 'Solid-state electrolytes offer improved thermal stability and the potential for higher energy density,', a: 'b3' },
          { t: ' yet the high ionic resistance at the electrode-electrolyte interface remains a fundamental obstacle to commercial viability, ' },
          { t: 'with interface resistance values typically one to two orders of magnitude higher than those achievable in liquid-electrolyte systems.', a: 'b4' },
          { t: ' This thesis investigates the use of ultrathin conformal coatings to reduce interfacial resistance in oxide-based solid-state batteries,', a: 'b5' },
          { t: ' characterising coating composition, thickness, and microstructure using aberration-corrected scanning transmission electron microscopy and energy-dispersive X-ray spectroscopy.' },
        ],
        annotations: {
          b1: {
            label: 'Move 1 — Territory established in one sentence',
            color: 'blue',
            text: 'In experimental sciences, Move 1 is often much more compressed than in social sciences or humanities. One sentence is sufficient to establish that the field is active and the problem is real. Scientific introductions prioritise efficiency over elaboration.',
          },
          b2: {
            label: 'Move 1 consolidated with landmark citations',
            color: 'blue',
            text: 'Two foundational review papers are cited to anchor the territory. In materials science, citing a key review article performs the same function as a paragraph of background in a social science introduction — it signals that the territory is established scholarship, not the writer\'s personal framing.',
          },
          b3: {
            label: 'Move 2 — Niche opened with "yet"',
            color: 'rose',
            text: '"Yet the high ionic resistance... remains a fundamental obstacle" — "yet" is the pivot to Move 2. In scientific writing, the gap is typically a specific technical problem rather than a conceptual or contextual gap. The niche is quantified: resistance "one to two orders of magnitude higher." Precision is Move 2 in scientific writing.',
          },
          b4: {
            label: 'Move 2 — Gap quantified',
            color: 'rose',
            text: 'In experimental sciences, the gap is typically expressed numerically when possible. "One to two orders of magnitude" makes the limitation concrete and measurable — and implies that the solution will also be measurable. Quantified gaps lead naturally to quantified contributions.',
          },
          b5: {
            label: 'Move 3 — Study announced with method',
            color: 'emerald',
            text: '"This thesis investigates... characterising... using..." — in scientific writing, Move 3 typically includes the method alongside the aim, because the method is part of what constitutes the contribution. Naming specific instruments (aberration-corrected STEM, EDX) signals technical mastery and situates the work within the capabilities of the field.',
          },
        },
      },
    ],
    activityPrompt:
      'Find a published journal article introduction in your field and label every sentence with its CARS move: M1 (territory), M2 (niche), or M3 (occupying). Note: moves can overlap, and Move 2 may have multiple sub-moves (gap, counter-claiming, questioning). Once you\'ve labelled it, do the same for the first two pages of your own thesis introduction. Which move is underdeveloped? Which is missing?',
    keyTakeaways: [
      'Move 1 (territory) establishes that the field exists and the problem matters — it is rhetorical groundwork, not a literature review.',
      'Move 2 (niche) identifies the gap, limitation, or unresolved question that the study addresses — "however", "yet", and "less attention has been paid to" are its characteristic signals.',
      'Move 3 (occupying) announces the study and, ideally, states the argument — not just what the thesis does but what it claims.',
      'In experimental sciences, all three moves may appear in 3–4 sentences; in humanities, they may span several pages. The moves are the same; the pace differs.',
    ],
  },

  // ─── LESSON 2: Establishing Your Territory ───────────────────────────────
  {
    slug: 'establishing-territory',
    title: 'Establishing Your Territory',
    durationMins: 8,
    intro:
      'The opening of your introduction has to do something specific: convince the reader that the field they are entering is active, significant, and contains a live problem worth addressing. This is not background for its own sake — it is the rhetorical condition for everything that follows. Without a well-established territory, the gap you identify will seem unimportant and your study arbitrary. The two extracts below, from climate adaptation and cognitive neuroscience, show how the same territory can be established weakly or with authority.',
    extracts: [
      {
        discipline: 'Climate Policy — Urban Infrastructure Adaptation',
        source: 'PhD thesis excerpt (weak territory)',
        variant: 'weak',
        segments: [
          { t: 'Climate change is one of the most important issues facing the world today.', a: 'a1' },
          { t: ' Rising temperatures, more frequent extreme weather events, and sea level rise are all consequences of increased greenhouse gas emissions. ' },
          { t: 'Many scientists have published research on this topic.', a: 'a2' },
          { t: ' There is an urgent need for more research into how cities can adapt to the impacts of climate change.', a: 'a3' },
          { t: ' This thesis examines urban infrastructure adaptation in the United Kingdom.', a: 'a4' },
        ],
        annotations: {
          a1: {
            label: 'Generic significance claim',
            color: 'rose',
            text: '"One of the most important issues facing the world today" — this is so broad as to be meaningless. The reader learns nothing about the specific scholarly territory. Any thesis on any topic could open with this sentence.',
          },
          a2: {
            label: 'Vague appeal to volume',
            color: 'rose',
            text: '"Many scientists have published research on this topic" describes the existence of a literature without engaging it. It signals that the writer has read widely but chosen not to show it — which reads as either laziness or lack of command.',
          },
          a3: {
            label: '"There is an urgent need" — asserted, not shown',
            color: 'rose',
            text: 'Urgency must be demonstrated, not asserted. "There is an urgent need" tells the reader nothing about what specifically is needed, why it is needed, or why now. This is where establishing territory fails: the need is stated but not evidenced.',
          },
          a4: {
            label: 'Study announced without motivation',
            color: 'rose',
            text: '"This thesis examines urban infrastructure adaptation" appears before any specific gap has been identified. The reader has no reason to think this particular study is necessary. Move 2 (niche) has been entirely skipped.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Climate Policy — Urban Infrastructure Adaptation',
        source: 'PhD thesis excerpt (authoritative territory)',
        variant: 'strong',
        segments: [
          { t: 'Urban infrastructure systems — water networks, transport, energy grids — face ' },
          { t: 'increasing exposure to climate-related hazards whose return periods and intensities are shifting faster than current engineering design standards can accommodate', a: 'b1' },
          { t: ' (IPCC, 2021; Milly et al., 2008). ' },
          { t: 'In the United Kingdom alone, the Environment Agency estimates that climate-related flooding causes over £1 billion in infrastructure damage annually,', a: 'b2' },
          { t: ' a figure projected to double by 2050 under intermediate emissions scenarios (Environment Agency, 2021). ' },
          { t: 'Yet infrastructure adaptation governance remains fragmented,', a: 'b3' },
          { t: ' distributed across regulatory bodies, asset owners, and local authorities with partially overlapping mandates and divergent planning horizons — ' },
          { t: 'a structural condition that produces chronic under-investment in adaptive capacity ', a: 'b4' },
          { t: 'even where the technical solutions are well understood ' },
          { t: '(Hall et al., 2019; Ranger et al., 2013).' },
        ],
        annotations: {
          b1: {
            label: 'Specific claim grounded in current debate',
            color: 'emerald',
            text: '"Shifting faster than current engineering design standards can accommodate" — this sentence makes a specific, citable claim about a mismatch between climate change and existing technical frameworks. The territory is not "climate change is important" but "there is a specific, documented tension between changing hazard profiles and current standards." This is precise enough to be contested, which makes it intellectually substantive.',
          },
          b2: {
            label: 'Quantified evidence for significance',
            color: 'emerald',
            text: '"£1 billion in infrastructure damage annually" — significance is demonstrated, not asserted. The reader now knows why this matters in concrete terms. The projection "to double by 2050" adds temporal urgency without the vague claim "there is an urgent need."',
          },
          b3: {
            label: '"Yet" — pivoting to the gap within the territory',
            color: 'rose',
            text: '"Yet infrastructure adaptation governance remains fragmented" — the territory opening pivots directly into the gap. The pivot is early and precise: not "more research is needed" but "governance is fragmented" — a specific structural diagnosis.',
          },
          b4: {
            label: 'Gap explained: mechanism identified',
            color: 'violet',
            text: '"A structural condition that produces chronic under-investment in adaptive capacity" — the gap is not just named but explained. The researcher tells us not only that there is fragmentation but why it matters: it causes under-investment even where solutions exist. This explanatory move is what turns a descriptive territory into an argumentative one.',
          },
        },
      },
    ],
    activityPrompt:
      'Draft or revise the opening paragraph of your thesis introduction. Read it against these three criteria: (1) Does it make a specific, evidenced claim about your field — or a generic assertion about importance? (2) Does it cite current, authoritative sources to anchor the territory? (3) Does it set up a specific gap — or does it just gesture at the need for more research? Rewrite until all three criteria are met.',
    keyTakeaways: [
      'Significance must be demonstrated with evidence, not asserted — "£1 billion in damages" is more convincing than "this is an important issue."',
      'Specific claims beat generic ones: "shifting faster than design standards can accommodate" is more authoritative than "climate change is a major challenge."',
      'The best territory openings already contain the seeds of the gap — they describe the field in a way that makes the unresolved question visible.',
      'Avoid sweeping openers ("Since the dawn of time...", "In today\'s rapidly changing world...") — anchor territory in the actual scholarly and empirical landscape of your field.',
    ],
  },

  // ─── LESSON 3: Scope, Limitations, and Chapter Outline ───────────────────
  {
    slug: 'scope-and-limits',
    title: 'Scope, Limitations, and Chapter Outline',
    durationMins: 8,
    intro:
      'A scope statement does two things: it tells the reader what the thesis is doing, and it protects the researcher from being faulted for things they never claimed to do. A chapter outline does something equally important: it gives the reader a map of how the argument will unfold, so they can follow the thesis as a cumulative structure rather than a series of separate pieces. The two extracts below show how scope statements and chapter outlines work at their best, in international relations and health psychology.',
    extracts: [
      {
        discipline: 'International Relations — EU Sanctions Policy',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The analysis is bounded in three ways. ' },
          { t: 'Geographically, it focuses on European Union sanctions regimes directed at third-country governments,', a: 'a1' },
          { t: ' and does not address unilateral Member State measures or sanctions administered by the United Nations Security Council. ' },
          { t: 'Temporally, the study covers the period from 2014 to 2022,', a: 'a2' },
          { t: ' a window that encompasses the expansion of sanctions use following the annexation of Crimea and allows for analysis of policy evolution across two full EU institutional cycles. ' },
          { t: 'Analytically, the thesis focuses on the compliance mechanisms of target states', a: 'a3' },
          { t: ' rather than on the signalling functions of sanctions for domestic EU audiences or the humanitarian consequences of economic restrictions, ' },
          { t: 'both of which fall outside the scope of the study and are better addressed by existing literature.', a: 'a4' },
          { t: ' These boundaries are not incidental: ', a: 'a5' },
          { t: 'they reflect the view that the compliance question has been under-theorised relative to the sanctions literature\'s focus on design and targeting, and that the EU case offers a distinctive institutional context whose dynamics are analytically separable from those of bilateral sanctions regimes.' },
        ],
        annotations: {
          a1: {
            label: 'Geographic boundary — stated as a decision',
            color: 'blue',
            text: '"Focuses on... and does not address..." — the researcher states both what is included and what is excluded. Naming exclusions is as important as naming inclusions: it pre-empts the examiner\'s question "why didn\'t you look at X?" by demonstrating that X was considered and deliberately set aside.',
          },
          a2: {
            label: 'Temporal boundary — with justification',
            color: 'blue',
            text: '"2014 to 2022... a window that encompasses..." — the timeframe is not just stated but justified. Why 2014? The annexation of Crimea. Why 2022? Two full institutional cycles. Justified boundaries are methodological decisions; unjustified ones look like arbitrary convenience.',
          },
          a3: {
            label: 'Analytical boundary — narrowing the question',
            color: 'yellow',
            text: '"Compliance mechanisms of target states rather than signalling functions... or humanitarian consequences" — this is the most important boundary: what kind of question the thesis asks. The researcher specifies which analytical angle they take and explicitly names two others they do not.',
          },
          a4: {
            label: 'Excluding acknowledged alternatives',
            color: 'yellow',
            text: '"Better addressed by existing literature" — acknowledging that excluded topics are already well covered is a graceful way to limit scope. It shows scholarly awareness of the field while explaining why the thesis does not need to revisit ground others have mapped.',
          },
          a5: {
            label: 'Boundaries justified theoretically',
            color: 'emerald',
            text: '"These boundaries are not incidental" — this sentence is key. The researcher insists that the scope boundaries are intellectually motivated, not arbitrary or practical. Explaining why these particular boundaries make analytical sense transforms scope statements from apologies into arguments.',
          },
        },
      },
      {
        discipline: 'Health Psychology — Chronic Illness and Identity',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The thesis is organised into six chapters. ' },
          { t: 'Chapter One reviews the theoretical literature on illness identity,', a: 'b1' },
          { t: ' critically evaluating the dominant illness cognition frameworks and identifying the relative neglect of narrative and temporal dimensions in existing accounts. ' },
          { t: 'Chapter Two presents the methodological rationale,', a: 'b2' },
          { t: ' justifying the use of longitudinal interpretive phenomenological analysis as the most appropriate means of capturing identity reconstruction as a process rather than a state. ' },
          { t: 'Chapters Three, Four, and Five form the analytic core of the thesis. ' },
          { t: 'Chapter Three examines how participants initially responded to diagnosis, ', a: 'b3' },
          { t: 'focusing on the disruption of biographical continuity and the strategies deployed to manage it. ' },
          { t: 'Chapter Four traces the process of illness integration across the first two years of the study,', a: 'b4' },
          { t: ' showing how participants drew on social relationships, occupational roles, and material practices to rebuild coherent illness narratives. ' },
          { t: 'Chapter Five examines long-term identity stabilisation and the conditions under which it either consolidates or breaks down. ', a: 'b5' },
          { t: 'Chapter Six synthesises the findings, develops a processual model of illness identity reconstruction, and considers its implications for psychological support interventions.', a: 'b6' },
        ],
        annotations: {
          b1: {
            label: 'Chapter 1: review + analytical finding',
            color: 'blue',
            text: '"Critically evaluating... and identifying the relative neglect of..." — this chapter outline doesn\'t just say "reviews the literature." It says what the review finds: a neglect of narrative and temporal dimensions. Good chapter outlines convey findings, not just activities.',
          },
          b2: {
            label: 'Chapter 2: method + justification',
            color: 'blue',
            text: '"Justifying the use of... as the most appropriate means of..." — the method chapter is characterised not by what it describes but by what it argues: that this method is best suited to capturing process rather than state. The outline conveys the chapter\'s argumentative function.',
          },
          b3: {
            label: 'Chapter 3: analytical focus stated',
            color: 'emerald',
            text: '"How participants initially responded... focusing on the disruption of biographical continuity" — the focus is specific: not just diagnosis, but biographical disruption and the strategies used to manage it. Vague chapter outlines ("Chapter Three examines the data") are useless; focused ones tell the reader what to look for.',
          },
          b4: {
            label: 'Chapter 4: process traced across time',
            color: 'emerald',
            text: '"Traces the process of illness integration across the first two years" — "traces" is active and implies longitudinal movement. The chapter does not just describe a state; it follows a development. The chapter outline reflects the methodological logic of the thesis: it is a process study.',
          },
          b5: {
            label: 'Chapter 5: condition for stabilisation/breakdown',
            color: 'emerald',
            text: '"The conditions under which it either consolidates or breaks down" — this is analytical precision in a chapter outline. The reader knows the chapter will not just describe outcomes but explain the conditions that produce them. This is causal language in a qualitative frame.',
          },
          b6: {
            label: 'Chapter 6: synthesis + model + implications',
            color: 'violet',
            text: '"Synthesises... develops a processual model... and considers its implications" — three distinct contributions in the final chapter. The outline makes clear that Chapter Six is not just a summary but the chapter where the original contribution is made: the processual model.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a scope statement for your thesis that specifies three boundaries: geographic/contextual, temporal, and analytical. For each boundary, write one sentence stating what is included and one stating what is excluded and why. Then write a chapter outline in which each entry has two parts: what the chapter does and what it establishes. Aim for the chapter entries to read like a chain — each one building on the last.',
    keyTakeaways: [
      'Scope boundaries should be stated as deliberate decisions, not apologetic omissions — each boundary should be justified on analytical grounds.',
      'Naming what you exclude is as important as naming what you include: pre-empting examiner challenges demonstrates methodological control.',
      'Chapter outlines should convey findings, not just activities — "Chapter Three examines X and argues Y" is more useful than "Chapter Three examines X."',
      'A well-written chapter outline reads like a compressed argument: each chapter establishes something that the next chapter needs.',
    ],
  },

  // ─── LESSON 4: Introduction Conventions Across Disciplines ───────────────
  {
    slug: 'intro-across-disciplines',
    title: 'Introduction Conventions Across Disciplines',
    durationMins: 10,
    intro:
      'The conventions of a thesis introduction differ substantially across disciplines — in length, structure, use of theory, density of citation, and how the contribution is framed. These differences are not arbitrary: they reflect what each discipline considers a legitimate research problem and a valid form of knowledge. Misreading your own discipline\'s conventions can result in an introduction that is competent by another field\'s standards but puzzling or unconvincing to your own examiners. The two extracts below, from biochemistry and cultural studies, illustrate just how differently introductions can be structured while still doing the same rhetorical work.',
    extracts: [
      {
        discipline: 'Biochemistry — Protein Misfolding in Neurodegeneration',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Misfolding and aggregation of the tau protein is a hallmark of several neurodegenerative disorders collectively termed tauopathies,', a: 'a1' },
          { t: ' including Alzheimer\'s disease, frontotemporal dementia, and progressive supranuclear palsy ' },
          { t: '(Goedert et al., 2017; Spillantini and Goedert, 2013). ' },
          { t: 'Tau aggregation follows a nucleation-dependent kinetic mechanism in which ', a: 'a2' },
          { t: 'monomeric tau undergoes conformational change to form oligomeric species that seed further aggregation, ultimately producing the neurofibrillary tangles characteristic of late-stage disease. ' },
          { t: 'While the structural features of mature tau filaments have been resolved at near-atomic resolution using cryo-electron microscopy (Fitzpatrick et al., 2017),', a: 'a3' },
          { t: ' the early oligomeric intermediates — which are increasingly implicated in neuronal toxicity — remain structurally and mechanistically poorly characterised. ' },
          { t: 'This thesis aims to characterise the structural properties and toxicity mechanisms of early-stage tau oligomers', a: 'a4' },
          { t: ' using a combination of native mass spectrometry, ion mobility spectrometry, and cell viability assays.' },
        ],
        annotations: {
          a1: {
            label: 'Territory: named disease context, landmark citations',
            color: 'blue',
            text: 'The introduction opens immediately with the specific protein and disease context. There is no broad framing ("neurodegeneration is a major public health challenge") — the reader is assumed to know the field. Biochemistry introductions assume disciplinary literacy from the first sentence.',
          },
          a2: {
            label: 'Mechanism described before the gap is named',
            color: 'blue',
            text: 'The aggregation mechanism is explained technically. In biochemistry, the gap must be located within a mechanistic framework — you cannot identify what is unknown without first specifying what is known at the molecular level. The technical description is not background; it is preparation for the gap.',
          },
          a3: {
            label: 'Gap: early oligomers vs mature filaments',
            color: 'rose',
            text: '"While mature filaments have been resolved... the early oligomers remain poorly characterised" — this is the gap, expressed as a contrast between what structural biology has achieved and what remains beyond its current reach. The gap is technical, specific, and located within a specific methodological moment (cryo-EM).',
          },
          a4: {
            label: 'Aims stated with method',
            color: 'emerald',
            text: '"This thesis aims to characterise... using a combination of native mass spectrometry, ion mobility spectrometry, and cell viability assays" — the aim and the method appear in the same sentence. In biochemistry, naming the specific instruments is the contribution: the thesis is justified partly by methodological novelty.',
          },
        },
      },
      {
        discipline: 'Cultural Studies — Nostalgia and Post-Industrial Identity',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'In 2016, a series of retrospective documentary exhibitions toured former coalfield communities across South Yorkshire. ' },
          { t: 'Visitors queued for hours.', a: 'b1' },
          { t: ' Photographs were shared widely on social media. ' },
          { t: 'People wept at images of their parents and grandparents standing outside pits that no longer exist. ' },
          { t: 'The intensity of this response invites — and, this thesis will argue, demands — ' },
          { t: 'a more rigorous theoretical account of what nostalgia does in communities whose industrial identity was violently interrupted by deindustrialisation.', a: 'b2' },
          { t: ' Existing cultural and sociological accounts of nostalgia have tended to treat it either as a pathology of backward-looking sentiment' },
          { t: ' or as a resource for community resilience (Boym, 2001; Bonnett, 2016).', a: 'b3' },
          { t: ' This thesis argues that both framings miss the agonistic and politically generative dimensions of post-industrial nostalgia —', a: 'b4' },
          { t: ' its capacity to articulate collective grievance, challenge dominant narratives of economic inevitability,', a: 'b5' },
          { t: ' and constitute forms of solidarity that conventional political categories fail to capture.' },
        ],
        annotations: {
          b1: {
            label: 'Anecdotal opening — culturally specific entry point',
            color: 'blue',
            text: '"Visitors queued for hours." — cultural studies introductions frequently begin with a specific cultural event or moment, not a statement about a field. This is the opposite of biochemistry\'s convention: the reader is drawn into a scene before the theoretical stakes are announced. Short sentences create immediacy.',
          },
          b2: {
            label: '"Demands" — the theoretical intervention announced as necessity',
            color: 'emerald',
            text: '"The intensity of this response... demands a more rigorous theoretical account" — the move from cultural observation to theoretical gap is explicit. The word "demands" signals that the thesis is motivated by an empirical puzzle: why did this happen, and what do existing theories fail to explain about it?',
          },
          b3: {
            label: 'Existing accounts mapped before being challenged',
            color: 'rose',
            text: '"Either as a pathology... or as a resource for resilience" — the existing literature is mapped as a binary, which the thesis will then challenge. In cultural studies, the gap is often framed as a theoretical binary that misses a third possibility. Both positions are acknowledged fairly before being surpassed.',
          },
          b4: {
            label: '"Both framings miss..." — the thesis statement',
            color: 'emerald',
            text: '"This thesis argues that both framings miss..." — the thesis statement arrives here, challenging the binary established in the previous sentence. Notice how the argument depends entirely on the preceding framing: you cannot say "both framings miss X" until you have established what the two framings are.',
          },
          b5: {
            label: 'Contribution: the agonistic third term',
            color: 'violet',
            text: '"Its capacity to articulate collective grievance... constitute forms of solidarity" — the contribution is the theoretical third term: nostalgia as politically generative, beyond both pathology and resilience. The contribution is interpretive and conceptual, not empirical or methodological.',
          },
        },
      },
    ],
    activityPrompt:
      'Find two recent PhD theses in your discipline and compare their introductions. For each, note: (1) how long the introduction is; (2) whether it opens with a scene, a claim, or a citation; (3) how theory is introduced — early, late, or not at all; (4) how the contribution is stated — as aims, as arguments, or as interpretations; (5) whether there is an explicit chapter outline. Which conventions are consistent across both? What does this tell you about your field\'s expectations?',
    keyTakeaways: [
      'Biochemistry and laboratory sciences: introductions are short, technically precise, method-forward, and assume disciplinary literacy from the first sentence.',
      'Cultural studies, literary studies, and humanities: introductions often open with a specific scene or cultural moment before developing theoretical stakes; they are longer, more discursive, and theory-forward.',
      'Social sciences occupy a middle ground: typically longer than STEM introductions but more structured than humanities ones, often combining empirical framing with theoretical positioning.',
      'Whatever your discipline, the three CARS moves must be present — what varies is the pace, the length, and the register in which they are made.',
    ],
  },

];
