// Topic 3: Writing the Literature Review — 5 annotated lessons

export const lessons = [
  // ─── LESSON 1: Synthesis vs Summary ──────────────────────────────────────
  {
    slug: 'synthesis-vs-summary',
    title: 'Synthesis vs Summary',
    durationMins: 12,
    intro:
      'The most common feedback doctoral students receive on their literature review is: "This reads like an annotated bibliography." That means the review lists sources one by one — what Smith found, then what Jones found, then what Brown found — without weaving them together. Synthesis means identifying patterns, tensions, and relationships across sources and building an argument from them. These two extracts cover the same body of literature on attachment theory. Notice how differently they work.',
    extracts: [
      {
        discipline: 'Developmental Psychology — Attachment Theory',
        source: 'PhD thesis excerpt (summary style)',
        variant: 'weak',
        segments: [
          { t: 'Bowlby (1969) ' },
          { t: 'proposed that infants form attachment bonds with primary caregivers', a: 'a1' },
          { t: ' as a mechanism for survival. ' },
          { t: 'Ainsworth et al. (1978) subsequently identified three attachment patterns', a: 'a2' },
          { t: ' through the Strange Situation procedure: secure, anxious-ambivalent, and avoidant. ' },
          { t: 'Main and Solomon (1986) later added a fourth category, disorganised attachment', a: 'a3' },
          { t: ', characterised by contradictory and fearful behaviour. ' },
          { t: 'Sroufe (1988) found that early attachment security predicted later social competence.', a: 'a4' },
          { t: ' More recently, ' },
          { t: 'Fearon et al. (2010) conducted a meta-analysis demonstrating links between insecure attachment and externalising behaviour problems.', a: 'a5' },
        ],
        annotations: {
          a1: {
            label: 'Author as topic, not idea',
            color: 'rose',
            text: 'Each sentence begins with an author name. The source is foregrounded; the idea is secondary. This is the hallmark of summary writing.',
          },
          a2: {
            label: 'Chronological listing',
            color: 'rose',
            text: '"Subsequently" signals a timeline, not an argument. The review is organised by when things were published, not by what they mean together.',
          },
          a3: {
            label: 'Addition without integration',
            color: 'rose',
            text: '"Later added" treats Main and Solomon\'s contribution as another item in a list. No connection is drawn to Ainsworth\'s earlier typology or to a developing debate.',
          },
          a4: {
            label: 'Isolated finding',
            color: 'rose',
            text: 'Sroufe\'s finding is stated and dropped. There\'s no indication of how it relates to Bowlby\'s theory, to Ainsworth\'s categories, or to the paragraph\'s emerging argument.',
          },
          a5: {
            label: 'No synthesis',
            color: 'rose',
            text: 'The extract ends with another isolated finding. After five sentences, we don\'t know what the reviewer thinks about this literature or where it is heading.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Developmental Psychology — Attachment Theory',
        source: 'PhD thesis excerpt (synthesis style)',
        variant: 'strong',
        segments: [
          { t: 'A central debate within attachment research concerns ' },
          { t: 'the stability of early attachment classifications across development.', a: 'b1' },
          { t: ' While Bowlby\'s (1969) original formulation treated attachment as a relatively fixed internal working model, ' },
          { t: 'subsequent empirical work has complicated this view.', a: 'b2' },
          { t: ' Longitudinal studies report continuity rates ranging from 39% to 77%' },
          { t: ' (Hamilton, 2000; Waters et al., 2000), a variation that has prompted researchers to', a: 'b3' },
          { t: ' examine the conditions under which attachment security remains stable or shifts.' },
          { t: ' Life adversity — including parental loss, maltreatment, and family disruption — consistently emerges as a key disruptor', a: 'b4' },
          { t: ' (Weinfield et al., 2004; Roisman et al., 2006), ' },
          { t: 'suggesting that attachment is better conceptualised as a dynamic rather than fixed property of the person.', a: 'b5' },
        ],
        annotations: {
          b1: {
            label: 'Idea-first opening',
            color: 'emerald',
            text: 'The paragraph opens with the debate, not with an author. Sources will be recruited to illuminate this debate — they won\'t drive the paragraph.',
          },
          b2: {
            label: 'Tension established early',
            color: 'emerald',
            text: '"Has complicated this view" signals that the review will not simply report findings but will track how the field\'s understanding developed and where it is contested.',
          },
          b3: {
            label: 'Multiple sources grouped',
            color: 'emerald',
            text: 'Two studies are cited together in parentheses to establish a range. This is synthesis: using sources as evidence for a claim rather than as separate items to describe.',
          },
          b4: {
            label: 'Thematic organisation',
            color: 'emerald',
            text: '"Life adversity... consistently emerges" introduces a thematic category drawn from across studies. The reviewer is imposing intellectual order on the literature.',
          },
          b5: {
            label: 'Interpretive conclusion',
            color: 'emerald',
            text: '"Suggesting that..." is the reviewer\'s voice making an inference from the evidence. This is the essence of synthesis: using the literature to build a position.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
    ],
    activityPrompt:
      'Take a paragraph from your own literature review draft. Identify each sentence. Does it start with an author name? If more than half do, rewrite the paragraph starting from the central debate or theme, then bring sources in as evidence. Aim for no more than one sentence per paragraph that begins with an author name.',
    keyTakeaways: [
      'Summary tells you what each source says. Synthesis tells you what the sources mean together.',
      'Organise by idea, theme, or debate — not by author or publication date.',
      'Group sources parenthetically when they converge on the same point.',
      'Every paragraph should end with the reviewer\'s interpretation, not another citation.',
    ],
  },

  // ─── LESSON 2: Identifying the Research Gap ──────────────────────────────
  {
    slug: 'research-gap',
    title: 'Identifying the Research Gap',
    durationMins: 11,
    intro:
      'The research gap is not just a box to tick at the end of your literature review. It is the logical product of everything that came before: you have shown what is known, traced where the field has focused its attention, and now you reveal — precisely — what remains unresolved, unexplored, or under-examined. Two extracts below show how gap statements work across very different fields.',
    extracts: [
      {
        discipline: 'Social Policy — Housing and Child Development',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Despite a substantial body of work demonstrating the adverse effects of housing instability on child wellbeing' },
          { t: ' (Cutts et al., 2011; Desmond, 2016; Shelter, 2019), ', a: 'a1' },
          { t: 'the mechanisms through which residential mobility affects school-age children\'s cognitive development remain poorly understood.', a: 'a2' },
          { t: ' Existing studies have predominantly examined ' },
          { t: 'associations between homelessness and educational outcomes at aggregate level,', a: 'a3' },
          { t: ' leaving the intervening processes — including disruption to peer networks, teacher relationships, and curriculum continuity — ' },
          { t: 'largely unexamined at the level of the individual child.', a: 'a4' },
          { t: ' Furthermore, ' },
          { t: 'UK-based longitudinal work in this area is notably absent,', a: 'a5' },
          { t: ' with most evidence drawn from the United States context where welfare and housing systems differ substantially from those in England and Wales.' },
          { t: ' The present study addresses this gap by tracing the educational trajectories of ', a: 'a6' },
          { t: 'children in temporary accommodation across three local authorities in England.' },
        ],
        annotations: {
          a1: {
            label: 'Established ground',
            color: 'blue',
            text: 'The gap statement opens by acknowledging what is already known. This is essential: you can only identify a gap relative to what exists. Skipping this makes the gap seem invented.',
          },
          a2: {
            label: 'The gap stated precisely',
            color: 'emerald',
            text: '"Remain poorly understood" names the gap directly. Note how specific it is: not housing instability in general, but the mechanisms, and not all outcomes, but cognitive development in school-age children.',
          },
          a3: {
            label: 'Critiquing the existing approach',
            color: 'yellow',
            text: '"Predominantly examined... at aggregate level" shows that the gap isn\'t just about missing topics — it\'s about a methodological limitation in how the field has approached the question.',
          },
          a4: {
            label: 'Naming the unexamined processes',
            color: 'yellow',
            text: 'Listing the unexamined processes (peer networks, teacher relationships, curriculum continuity) makes the gap concrete. The reader can see exactly what the study will need to do.',
          },
          a5: {
            label: 'Geographical gap',
            color: 'violet',
            text: 'A second dimension of the gap: geographic transferability. The reviewer doesn\'t just say "UK studies are missing" — they explain why the US evidence can\'t simply be imported.',
          },
          a6: {
            label: 'Bridging to the study',
            color: 'emerald',
            text: '"The present study addresses this gap by..." closes the loop. The gap statement leads directly to the research design. The reader now understands why this study is necessary.',
          },
        },
      },
      {
        discipline: 'Computational Linguistics — Transformer Benchmarking',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Transformer-based language models have achieved state-of-the-art performance across a wide range of NLP benchmarks' },
          { t: ' (Devlin et al., 2019; Brown et al., 2020; Raffel et al., 2020). ', a: 'b1' },
          { t: 'However, ' },
          { t: 'the majority of these benchmarks evaluate performance on English-language tasks,', a: 'b2' },
          { t: ' and performance on morphologically rich, low-resource languages has received comparatively limited attention ' },
          { t: '(Lauscher et al., 2020; Pfeiffer et al., 2021). ', a: 'b3' },
          { t: 'Studies that do address multilingual models ' },
          { t: 'tend to focus on cross-lingual transfer rather than within-language performance', a: 'b4' },
          { t: ', treating low-resource languages as targets of transfer rather than as objects of study in their own right. ' },
          { t: 'Consequently, it remains unclear ' },
          { t: 'whether the architectural choices that drive performance in English — including tokenisation strategies and positional encoding — ', a: 'b5' },
          { t: 'generalise to agglutinative languages such as Swahili, Turkish, and Wolof. ' },
          { t: 'This thesis investigates that question through systematic evaluation of fine-tuned transformer variants across four agglutinative language families.', a: 'b6' },
        ],
        annotations: {
          b1: {
            label: 'State of the art acknowledged',
            color: 'blue',
            text: 'Three landmark papers establish what the field has achieved. The reviewer is not dismissing prior work — they\'re building on it. This intellectual honesty strengthens the gap claim.',
          },
          b2: {
            label: '"However" — the pivot',
            color: 'rose',
            text: '"However" signals the gap is coming. In technical fields, gaps often hinge on a limitation in scope: which languages, which datasets, which populations, which conditions.',
          },
          b3: {
            label: 'Gap quantified by scale',
            color: 'emerald',
            text: '"Comparatively limited attention" is qualified with two supporting citations — the reviewer isn\'t just asserting the gap, they\'re evidencing it.',
          },
          b4: {
            label: 'Reframing existing work\'s blind spot',
            color: 'yellow',
            text: 'This is a sophisticated gap move: it\'s not that multilingual NLP hasn\'t been studied, it\'s that it\'s been studied with a particular framing that distorts the question. The gap is conceptual, not just empirical.',
          },
          b5: {
            label: 'Technical specificity',
            color: 'violet',
            text: 'Naming the architectural choices (tokenisation, positional encoding) shows domain expertise and makes the gap technically credible. Vague gaps ("more research is needed") are never convincing.',
          },
          b6: {
            label: 'Study scoped precisely',
            color: 'emerald',
            text: 'The thesis is introduced with four concrete specifications: fine-tuned, transformer variants, four language families, agglutinative. The gap statement and the study design are perfectly aligned.',
          },
        },
      },
    ],
    activityPrompt:
      'Draft a three-sentence gap statement for your own thesis using this structure: (1) "Despite [what is established]..." (2) "[The specific limitation or absence]..." (3) "This study addresses this by..." — then check: is your gap specific enough that someone could design a study to fill it? If not, tighten it.',
    keyTakeaways: [
      'Always establish what is known before identifying what is missing — gaps only exist relative to a body of work.',
      'The strongest gaps are specific: a particular mechanism, population, method, context, or framing.',
      'A good gap statement explains why existing work cannot fill it — not just that it hasn\'t.',
      'The gap statement is the hinge between the literature review and the research design.',
    ],
  },

  // ─── LESSON 3: Critical Evaluation of Sources ────────────────────────────
  {
    slug: 'critical-evaluation',
    title: 'Critical Evaluation of Sources',
    durationMins: 12,
    intro:
      'Doctoral writing requires more than reporting what sources say — it requires evaluating how well they say it. Critical evaluation means examining a study\'s design, scope, methodology, and assumptions, then making a reasoned judgement about what it can and cannot tell us. This is not about being hostile to sources; it is about being intellectually honest. The two extracts below show critical evaluation in action across an education study and a sociological dataset.',
    extracts: [
      {
        discipline: 'Education Research — Meta-Analysis',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Hattie\'s (2009) synthesis of over 800 meta-analyses has been widely cited as evidence that ' },
          { t: 'direct instruction and feedback are among the most effective interventions in education.', a: 'a1' },
          { t: ' However, ' },
          { t: 'the aggregation method underpinning Visible Learning has attracted sustained methodological criticism.', a: 'a2' },
          { t: ' Snook et al. (2009) and Terhart (2011) both challenge ' },
          { t: 'the comparability of effect sizes drawn from studies with fundamentally different outcome measures,', a: 'a3' },
          { t: ' arguing that averaging across such heterogeneous samples produces effect size estimates of questionable validity.' },
          { t: ' Moreover, ' },
          { t: 'the absence of confidence intervals and variance estimates in Hattie\'s rankings', a: 'a4' },
          { t: ' makes it impossible to assess the reliability of any individual influence. ' },
          { t: 'These limitations do not invalidate the synthesis as a heuristic framework,' },
          { t: ' but they do caution against treating league-table rankings as precise empirical claims.', a: 'a5' },
        ],
        annotations: {
          a1: {
            label: 'Establishing the source\'s reach',
            color: 'blue',
            text: '"Widely cited" acknowledges Hattie\'s influence without overstating it. Beginning with what the source has achieved is fair before identifying its limits.',
          },
          a2: {
            label: 'Naming the critical target precisely',
            color: 'rose',
            text: 'The critique is aimed at the "aggregation method" — a specific methodological choice — not at the author or the general enterprise. Precision makes critique credible.',
          },
          a3: {
            label: 'Critique supported by named scholars',
            color: 'rose',
            text: 'The reviewer doesn\'t just assert a problem — they cite researchers who have made the argument. This shows the critique is not idiosyncratic but part of a scholarly conversation.',
          },
          a4: {
            label: 'Technical limitation identified',
            color: 'yellow',
            text: 'Absence of confidence intervals is a specific statistical objection, not a vague reservation. Domain-specific critique of this kind demonstrates methodological literacy.',
          },
          a5: {
            label: 'Calibrated conclusion',
            color: 'emerald',
            text: '"These limitations do not invalidate..." is intellectually balanced. The reviewer doesn\'t dismiss the source, just delimits how far it can be relied upon. This maturity is characteristic of strong doctoral writing.',
          },
        },
      },
      {
        discipline: 'Sociology — Poverty and Panel Data',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Robinson\'s (2013) analysis of Understanding Society data offers a valuable longitudinal perspective on ' },
          { t: 'the relationship between income poverty and social participation.', a: 'b1' },
          { t: ' The panel design allows Robinson to track transitions in and out of poverty across waves, ' },
          { t: 'addressing a key limitation of cross-sectional approaches.', a: 'b2' },
          { t: ' Nevertheless, ' },
          { t: 'the study\'s operationalisation of social participation as survey-reported club membership and voluntary activity', a: 'b3' },
          { t: ' risks capturing only formal, visible forms of engagement, ' },
          { t: 'potentially excluding informal social practices — neighbourly exchange, extended family networks — ' },
          { t: 'that may be of particular significance in low-income households', a: 'b4' },
          { t: ' (see also Shildrick and MacDonald, 2013). ' },
          { t: 'This conceptual narrowing is consequential for the present thesis, ' },
          { t: 'which is concerned precisely with informal social infrastructure', a: 'b5' },
          { t: ' in deprived communities.' },
        ],
        annotations: {
          b1: {
            label: 'Source introduced on its own terms',
            color: 'blue',
            text: '"Offers a valuable longitudinal perspective" — the reviewer begins with genuine acknowledgement of the source\'s contribution. Critical evaluation is not demolition; it\'s calibration.',
          },
          b2: {
            label: 'Strength identified first',
            color: 'emerald',
            text: 'Noting that the panel design improves on cross-sectional approaches shows the reviewer has evaluated the source fairly. Credible critique follows credible acknowledgement.',
          },
          b3: {
            label: 'Operationalisation questioned',
            color: 'rose',
            text: '"Operationalisation" is a key methodological term: it asks how an abstract concept was turned into a measurable variable. Questioning operationalisation is one of the most important forms of critical evaluation.',
          },
          b4: {
            label: 'Limitation contextualised',
            color: 'yellow',
            text: 'The reviewer doesn\'t just name the gap — they explain what it means for people who experience poverty. Connecting a methodological critique to a substantive concern demonstrates interpretive depth.',
          },
          b5: {
            label: 'Critique made relevant to the thesis',
            color: 'violet',
            text: '"This conceptual narrowing is consequential for the present thesis" closes the loop: critique is not performed for its own sake but to show why the current study needs to do something differently.',
          },
        },
      },
    ],
    activityPrompt:
      'Choose one key source from your literature review. Write a paragraph that: (1) acknowledges what the source contributes, (2) identifies one specific limitation — methodological, conceptual, or contextual — and (3) states what this means for how you will use (or go beyond) the source in your own research.',
    keyTakeaways: [
      'Critical evaluation is about calibration, not dismissal: acknowledge strengths before naming limitations.',
      'Target specific features — design, operationalisation, sample, statistical approach — not the author or general quality.',
      'Anchor your critique in the scholarly conversation: show that others share the concern.',
      'Always explain why a source\'s limitation matters for your own research question.',
    ],
  },


  // ─── LESSON 4: Structuring the Literature Thematically ───────────────────
  {
    slug: 'thematic-structure',
    title: 'Structuring the Literature Thematically',
    durationMins: 10,
    intro:
      'A chronological literature review tells a story of what was published when. A thematic literature review tells a story of what is debated and why it matters. Organising by theme means grouping sources by the ideas they contribute to — regardless of when they were published. This takes more intellectual work but produces a review that actually argues, rather than one that merely reports. The two extracts below show thematic organisation in sociological and biological writing.',
    extracts: [
      {
        discipline: 'Sociology — Comparative Welfare States',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Explanations for welfare state retrenchment fall broadly into ' },
          { t: 'three competing frameworks.', a: 'a1' },
          { t: ' The first, associated with power resources theory, ' },
          { t: 'attributes cutbacks to the declining electoral strength of labour movements', a: 'a2' },
          { t: ' (Korpi and Palme, 2003; Huber and Stephens, 2001). ' },
          { t: 'A second framework emphasises the role of ' },
          { t: 'institutional path dependency', a: 'a3' },
          { t: ', arguing that existing programme structures constrain the options available to reformers regardless of partisan preferences ' },
          { t: '(Pierson, 1994; 2001). ' },
          { t: 'A third strand, drawing on comparative political economy, ' },
          { t: 'foregrounds the pressures of economic globalisation', a: 'a4' },
          { t: ' and fiscal austerity as the primary drivers of retrenchment ' },
          { t: '(Starke, 2006; Vis, 2010). ' },
          { t: 'These frameworks are not mutually exclusive, ' },
          { t: 'and a growing body of work has sought to specify the conditions under which each exerts greater explanatory leverage', a: 'a5' },
          { t: ' (Häusermann et al., 2013; Béland and Schlager, 2019).' },
        ],
        annotations: {
          a1: {
            label: 'Thematic map announced upfront',
            color: 'emerald',
            text: '"Three competing frameworks" tells the reader immediately how the literature has been organised. This is an intellectual scaffold — the reader knows what is coming and can orient themselves.',
          },
          a2: {
            label: 'Theme 1 — sources grouped by argument',
            color: 'blue',
            text: 'Korpi, Palme, Huber, and Stephens are grouped because they share a theoretical position (power resources theory), not because they were published at the same time. This is thematic organisation.',
          },
          a3: {
            label: 'Theme 2 — conceptual label introduced',
            color: 'blue',
            text: '"Institutional path dependency" is the organising concept for theme 2. Naming the framework allows the reviewer to handle multiple sources under a single intellectual banner.',
          },
          a4: {
            label: 'Theme 3 — competing explanation',
            color: 'blue',
            text: 'The third framework is introduced in the same syntactic pattern ("A third strand..."). Parallelism in structure mirrors parallelism in argument: the reader can compare across the three positions.',
          },
          a5: {
            label: 'Meta-level synthesis',
            color: 'violet',
            text: '"These frameworks are not mutually exclusive" moves the reviewer to a meta-level, commenting not on any individual source but on the relationship between the three bodies of work. This is advanced synthesis.',
          },
        },
      },
      {
        discipline: 'Microbiology — Antibiotic Resistance',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Research into the mechanisms of antibiotic resistance can be organised around ' },
          { t: 'two interrelated but analytically distinct questions:', a: 'b1' },
          { t: ' how resistance genes emerge, and how they spread. ' },
          { t: 'Work on the emergence of resistance has focused on ' },
          { t: 'de novo mutation under selective pressure', a: 'b2' },
          { t: ', demonstrating that sub-therapeutic antibiotic exposure — particularly in agricultural settings — ' },
          { t: 'accelerates the emergence of resistant phenotypes ' },
          { t: '(van Boeckel et al., 2014; Singer et al., 2016). ' },
          { t: 'A parallel and increasingly prominent body of literature concerns ' },
          { t: 'the horizontal transfer of resistance genes via mobile genetic elements,', a: 'b3' },
          { t: ' including plasmids, transposons, and integrons ' },
          { t: '(Partridge et al., 2018; Rozwandowicz et al., 2018). ' },
          { t: 'Critically, these two processes are not sequential: ' },
          { t: 'resistance that emerges through mutation can subsequently be mobilised via horizontal transfer,', a: 'b4' },
          { t: ' meaning that selective pressure and genetic mobility interact in ways that ' },
          { t: 'amplify the rate of resistance dissemination across bacterial populations.', a: 'b5' },
        ],
        annotations: {
          b1: {
            label: 'Binary structure announced',
            color: 'emerald',
            text: '"Two interrelated but analytically distinct questions" provides the organising logic upfront. The literature review will follow the same two-part structure, making the organisation immediately transparent.',
          },
          b2: {
            label: 'First theme developed with evidence',
            color: 'blue',
            text: '"De novo mutation under selective pressure" is a precise scientific concept. The theme is named technically, then evidenced with studies. The thematic organisation doesn\'t simplify — it structures.',
          },
          b3: {
            label: 'Second theme introduced with contrast',
            color: 'blue',
            text: '"A parallel and increasingly prominent body of literature" signals the pivot to theme 2. "Parallel" indicates these are co-existing lines of research — the reviewer is mapping intellectual territory.',
          },
          b4: {
            label: 'Interaction between themes',
            color: 'violet',
            text: '"These two processes are not sequential" moves beyond describing the two themes to theorising the relationship between them. This is the highest form of thematic synthesis.',
          },
          b5: {
            label: 'Implication drawn',
            color: 'emerald',
            text: '"Amplify the rate of resistance dissemination" — the reviewer draws a substantive conclusion from the interaction of both themes. The literature review is now generating new insight, not just cataloguing existing work.',
          },
        },
      },
    ],
    activityPrompt:
      'Take the sources you have collected for one section of your literature review and sort them into clusters based on the argument or position they represent — not by year or author. Give each cluster a label (e.g. "structural accounts", "agency-based accounts"). Now draft an opening sentence for a paragraph on each cluster, following the pattern: "[Concept/framework] accounts emphasise [core claim] (Author, year; Author, year)."',
    keyTakeaways: [
      'Organise by intellectual position or theme, not by publication date or author name.',
      'Name each theme explicitly so the reader always knows which part of the map they are on.',
      'Group sources under a single theme when they share a common argument, regardless of when they appeared.',
      'The highest-level move is to theorise the relationship between themes — are they competing, complementary, or intersecting?',
    ],
  },


  // ─── LESSON 5: Common Literature Review Language ─────────────────────────
  {
    slug: 'lit-review-language',
    title: 'Common Literature Review Language',
    durationMins: 10,
    intro:
      'Literature reviews use a recognisable repertoire of language moves: establishing what is known, signalling a limitation, introducing a debate, distinguishing your position. Each move has characteristic vocabulary. Learning to use these phrases fluently — and to choose among them precisely — is part of developing your doctoral voice. The two extracts below, from law and human geography, show the full range of these moves in action.',
    extracts: [
      {
        discipline: 'Law — Public Law and Constitutional Review',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'It is now well established that ' },
          { t: 'proportionality has become the dominant standard of constitutional review across most liberal democracies', a: 'a1' },
          { t: ' (Stone Sweet and Mathews, 2008; Barak, 2012). ' },
          { t: 'Considerable attention has been paid to ' },
          { t: 'how courts structure and apply the proportionality test', a: 'a2' },
          { t: ', particularly in the German and Canadian constitutional traditions. ' },
          { t: 'Less explored, however, is the question of ' },
          { t: 'how legislatures anticipate and respond to judicial proportionality scrutiny at the drafting stage.', a: 'a3' },
          { t: ' Some scholars have argued that ' },
          { t: 'legislative actors engage in systematic pre-enactment review', a: 'a4' },
          { t: ' (Hiebert, 2002; Hunt, 2010), ' },
          { t: 'while others suggest that such engagement remains largely performative ' },
          { t: '(Gardbaum, 2013; Tushnet, 2008). ' },
          { t: 'This thesis contributes to this debate by examining ' },
          { t: 'the drafting practices and internal legal advice of three Westminster legislatures', a: 'a5' },
          { t: ', drawing on documents released under freedom of information legislation.' },
        ],
        annotations: {
          a1: {
            label: '"It is now well established that..."',
            color: 'blue',
            text: 'This phrase signals settled consensus. Use it for claims that no longer require extended argument. It is a "given" — the baseline from which the review departs.',
          },
          a2: {
            label: '"Considerable attention has been paid to..."',
            color: 'blue',
            text: 'This phrase establishes an active area of scholarship. It doesn\'t evaluate — it maps the terrain. Use it to show what the field has focused on before redirecting to what it has neglected.',
          },
          a3: {
            label: '"Less explored, however, is..."',
            color: 'rose',
            text: 'This is a classic gap-signalling phrase. "However" pivots from the established to the unexamined. "Less explored" is measured — the reviewer doesn\'t claim the topic is entirely absent, just underrepresented.',
          },
          a4: {
            label: '"Some scholars have argued that... while others suggest..."',
            color: 'yellow',
            text: 'This construction introduces a scholarly dispute. It distributes the debate fairly across two positions. Note the verb distinction: "argued" (stronger claim) vs "suggest" (more tentative).',
          },
          a5: {
            label: '"This thesis contributes to this debate by..."',
            color: 'emerald',
            text: '"Contributes to" is the appropriate register for doctoral work: modest but substantive. It positions the thesis as a contribution to an ongoing conversation rather than a definitive resolution.',
          },
        },
      },
      {
        discipline: 'Human Geography — Mobility and Place',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'There is broad agreement that ' },
          { t: 'the "mobility turn" in social science has productively reframed questions of movement, identity, and place', a: 'b1' },
          { t: ' (Urry, 2007; Sheller and Urry, 2006; Cresswell, 2010). ' },
          { t: 'A substantial body of work has since examined ' },
          { t: 'the differential mobilities of people across lines of class, gender, and race', a: 'b2' },
          { t: ', demonstrating that movement is not a neutral or equally accessible resource. ' },
          { t: 'Despite these advances, ' },
          { t: 'scholars have increasingly noted a tendency to privilege movement over dwelling,', a: 'b3' },
          { t: ' and to treat the sedentary as the residual category against which mobility is defined ' },
          { t: '(Merriman, 2012; Blunt, 2007). ' },
          { t: 'What remains underexplored are ' },
          { t: 'the relational entanglements of mobile and immobile practices within specific place-based communities', a: 'b4' },
          { t: ', particularly in contexts where everyday mobility is constrained by structural rather than individual factors. ' },
          { t: 'The present research seeks to address this by ', a: 'b5' },
          { t: 'tracing the relationship between infrastructure provision, forced immobility, and community attachment in two post-industrial towns in the North of England.' },
        ],
        annotations: {
          b1: {
            label: '"There is broad agreement that..."',
            color: 'blue',
            text: 'Slightly more hedged than "it is well established" — "broad agreement" acknowledges that consensus is not universal. Use this when the consensus is wide but not total.',
          },
          b2: {
            label: '"A substantial body of work has since examined..."',
            color: 'blue',
            text: '"Since" links this body of work to the framework established in the previous sentence — it maps out how the field developed after the mobility turn. "Substantial" acknowledges scale without claiming exhaustiveness.',
          },
          b3: {
            label: '"Despite these advances, scholars have increasingly noted..."',
            color: 'rose',
            text: '"Despite these advances" is respectful: it acknowledges progress before identifying a limit. "Increasingly noted" signals that the critique is gaining traction within the field — the reviewer is not alone in raising it.',
          },
          b4: {
            label: '"What remains underexplored are..."',
            color: 'rose',
            text: 'A variant of "less explored is..." — the subject-initial inversion ("What remains...") places the gap at the front of the sentence, giving it emphasis. Useful for foregrounding a specific conceptual absence.',
          },
          b5: {
            label: '"The present research seeks to address this by..."',
            color: 'emerald',
            text: '"Seeks to address" is appropriately tentative: the thesis aspires to fill the gap, not guarantee it. Doctoral writing should not overclaim. "Address" suggests engagement rather than resolution.',
          },
        },
      },
    ],
    activityPrompt:
      'Scan a section of your literature review draft and identify which language moves are present: establishing consensus, scoping focus, signalling a gap, introducing a debate, positioning your study. Are any missing? Draft one sentence using a phrase from each category that you have not yet used. Then read the section aloud — does the review feel like it is building an argument, or reporting information?',
    keyTakeaways: [
      '"It is well established / there is broad agreement" — use to set a baseline, not as filler.',
      '"Considerable attention has been paid to / a substantial body of work has examined" — use to map what exists before redirecting to what is absent.',
      '"Less explored / what remains underexplored" — the precise gap move; always follow with specifics.',
      '"Some argue... while others suggest" — use to introduce and map a scholarly debate.',
      '"This thesis contributes to / seeks to address" — modest but substantive positioning language for doctoral work.',
    ],
  },

];
