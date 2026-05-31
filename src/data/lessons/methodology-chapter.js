// Topic 7: Writing the Methodology Chapter — 5 annotated lessons

export const lessons = [
  // ─── LESSON 1: Philosophical Framing ─────────────────────────────────────
  {
    slug: 'philosophical-framing',
    title: 'Philosophical Framing: Ontology and Epistemology',
    durationMins: 12,
    intro:
      'The methodology chapter is not simply a description of what you did — it is a justification of why you did it that way. That justification rests on a chain of reasoning that runs from philosophical assumptions about the nature of reality (ontology) through beliefs about how knowledge of that reality can be obtained (epistemology) down to the specific methodological choices that follow from those beliefs. These two extracts, from urban geography and health sciences, show what that chain looks like when it is made explicit — in interpretivist and post-positivist registers.',
    extracts: [
      {
        discipline: 'Human Geography — Urban Displacement',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'This study is grounded in a constructivist ontological position,', a: 'a1' },
          { t: ' which holds that social reality is not a fixed, observer-independent structure but is continuously produced and reproduced through the meanings, practices, and interactions of social actors. ' },
          { t: 'From this ontological position, ', a: 'a2' },
          { t: 'an interpretivist epistemology follows: knowledge of the social world is necessarily partial and perspectival, ' },
          { t: 'situated within the specific contexts from which it is generated,', a: 'a3' },
          { t: ' and cannot be obtained through measurement and statistical generalisation alone. ' },
          { t: 'These philosophical commitments direct the study toward ', a: 'a4' },
          { t: 'an ethnographic methodology, which is uniquely suited to generating the kind of thick, contextually embedded knowledge that constructivism demands — ' },
          { t: 'knowledge of how residents in areas of active regeneration understand, negotiate, and contest displacement', a: 'a5' },
          { t: ' in their everyday lives and interactions.' },
        ],
        annotations: {
          a1: {
            label: 'Ontological position named and defined',
            color: 'blue',
            text: '"Constructivist ontological position" is named first, then defined in a subordinate clause. Naming the position without defining it is not sufficient — the examiner needs to see that you understand what the label means and have not merely borrowed it. The definition here ("not a fixed, observer-independent structure but continuously produced...") shows genuine understanding.',
          },
          a2: {
            label: '"From this ontological position... follows"',
            color: 'emerald',
            text: '"From this ontological position, an interpretivist epistemology follows" — the word "follows" is doing critical work. It signals that the epistemological position is not arbitrary but derives from the ontological one. The chain of justification is made explicit: ontology → epistemology. This logical dependency is what makes the philosophical framing coherent rather than decorative.',
          },
          a3: {
            label: 'Epistemological consequence specified',
            color: 'emerald',
            text: '"Situated within the specific contexts from which it is generated" — the epistemological position has a concrete consequence: it rules out certain approaches (measurement and statistical generalisation) and demands others. This consequence is what connects epistemology to methodology.',
          },
          a4: {
            label: '"These philosophical commitments direct the study toward..."',
            color: 'violet',
            text: '"Direct the study toward ethnographic methodology" — the methodological choice is presented as the necessary consequence of the philosophical commitments, not a free choice or a matter of convenience. This is the third link in the chain: ontology → epistemology → methodology.',
          },
          a5: {
            label: 'Research question re-anchored to the philosophical frame',
            color: 'yellow',
            text: '"Knowledge of how residents... understand, negotiate, and contest displacement" — the philosophical framing closes by reconnecting to the specific research question. This shows that the philosophical chain is not abstract box-ticking but directly shapes what kind of knowledge the study will produce.',
          },
        },
      },
      {
        discipline: 'Health Sciences — Dietary Behaviour and Chronic Disease',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The study adopts a post-positivist ontological position,', a: 'b1' },
          { t: ' which holds that an objective reality exists independently of human perception, ' },
          { t: 'but that our knowledge of it is necessarily approximate, theory-laden, and subject to revision in light of new evidence. ' },
          { t: 'Epistemologically, this position supports ', a: 'b2' },
          { t: 'a critical realist approach to knowledge generation: ' },
          { t: 'empirical regularities are taken as evidence of underlying causal mechanisms,', a: 'b3' },
          { t: ' but the relationship between observed associations and causal inference is probabilistic rather than deterministic, ' },
          { t: 'and subject to the confounding structures that characterise observational research in human populations. ' },
          { t: 'These commitments justify ', a: 'b4' },
          { t: 'a prospective cohort design with standardised dietary assessment instruments and pre-registered analytical protocols, ' },
          { t: 'which maximises internal validity while acknowledging the limitations of observational inference', a: 'b5' },
          { t: ' that a randomised design would partially, though not fully, resolve.' },
        ],
        annotations: {
          b1: {
            label: 'Post-positivist — between positivism and constructivism',
            color: 'blue',
            text: '"Post-positivist" occupies a different philosophical space from constructivism. The key phrase is "objective reality exists... but our knowledge of it is necessarily approximate." Post-positivism does not deny an external reality; it accepts that access to it is imperfect. This distinction matters for how the study\'s findings are presented.',
          },
          b2: {
            label: 'Critical realism — named epistemological position',
            color: 'emerald',
            text: '"Critical realist approach to knowledge generation" — the epistemological position is named. Critical realism holds that empirical regularities reflect underlying causal mechanisms but that these mechanisms cannot be directly observed. This position sits between naive empiricism and pure constructivism, and it has specific implications for how causal claims are made.',
          },
          b3: {
            label: 'Epistemological consequence: probabilistic causal inference',
            color: 'emerald',
            text: '"Probabilistic rather than deterministic" — the epistemological commitment produces a specific consequence for the study\'s claims: causal inference is possible but hedged. The confounding structures are named as a known constraint, not an oversight. This is philosophical framing being methodologically honest.',
          },
          b4: {
            label: '"These commitments justify..." — method as consequence',
            color: 'violet',
            text: '"These commitments justify a prospective cohort design" — the same structural move as in the interpretivist extract: philosophical commitments lead to a specific methodological choice. The justification is not "prospective cohorts are commonly used in this field" but "this design follows from the study\'s epistemological position."',
          },
          b5: {
            label: 'Honest acknowledgement of design limits',
            color: 'yellow',
            text: '"Maximises internal validity while acknowledging the limitations of observational inference" — the design is not presented as perfect but as the best available given the constraints. This is critical realism in practice: the study claims what it can claim and acknowledges what remains beyond its reach.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a paragraph for your methodology chapter that works through the chain explicitly. Start with: "This study is grounded in a [name] ontological position, which holds that [define it in your own words]." Then: "From this position, a [name] epistemological approach follows, because [explain the connection]." Then: "These commitments direct the study toward [methodology], which is suited to [the kind of knowledge your research question requires]." If you find the chain breaks at any point — if the methodology doesn\'t clearly follow from the epistemology — investigate why.',
    keyTakeaways: [
      'The philosophical framing chain runs: ontology (what is) → epistemology (how we know) → methodology (how we study). Each step must follow logically from the one before.',
      'Naming a philosophical position is not enough — define it in your own words to show genuine understanding rather than borrowed vocabulary.',
      'Post-positivist and constructivist positions lead to different research designs because they make different claims about what kind of evidence counts and what kind of inference is legitimate.',
      'The philosophical framing should reconnect to the specific research question — show that the chain is not abstract but directly shapes what knowledge the study can produce.',
    ],
  },

  // ─── LESSON 2: Justifying Your Methods ───────────────────────────────────
  {
    slug: 'justifying-methods',
    title: 'Justifying Your Methods',
    durationMins: 10,
    intro:
      'In the methodology chapter, every significant methodological choice must be justified — not described. Justification means demonstrating that the method chosen is the most appropriate available means of answering the research question, and doing so by engaging with the alternatives. These two extracts, from education research and political science, show what method justification looks like in qualitative and theoretically-driven research.',
    extracts: [
      {
        discipline: 'Education Research — Teacher Professional Identity',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Semi-structured interviews were selected as the primary data collection method ', a: 'a1' },
          { t: 'because the research question requires access to participants\' interpretive frameworks — ' },
          { t: 'the meanings teachers attach to professional identity and the ways they narrate their trajectories across career phases.', a: 'a2' },
          { t: ' Survey instruments, while efficient for capturing attitudinal patterns across large samples,', a: 'a3' },
          { t: ' impose pre-defined categories that constrain the range of responses available to participants ' },
          { t: 'and cannot accommodate the contextual complexity and temporal texture that identity accounts require. ' },
          { t: 'Focus groups were considered and rejected on the grounds that ', a: 'a4' },
          { t: 'professional identity is a topic about which participants may hold socially unacceptable or professionally risky views, ' },
          { t: 'making the one-to-one interview context more conducive to candid disclosure. ' },
          { t: 'The semi-structured format — rather than a fully standardised or fully unstructured interview — ', a: 'a5' },
          { t: 'was chosen to provide sufficient consistency across participants for comparative analysis ' },
          { t: 'while preserving the flexibility to pursue emergent themes specific to individual cases.' },
        ],
        annotations: {
          a1: {
            label: 'Method announced with "because" — justification is immediate',
            color: 'emerald',
            text: '"Semi-structured interviews were selected... because" — the justification follows directly from the announcement. Describing a method before explaining why it was chosen inverts the logic: in a methodology chapter, why always precedes or immediately follows what.',
          },
          a2: {
            label: 'Justification tied directly to the research question',
            color: 'emerald',
            text: '"The research question requires access to participants\' interpretive frameworks" — the justification is made in terms of what the research question needs. Not "interviews are commonly used in qualitative research" but "this question requires this kind of access." The method is a servant to the question.',
          },
          a3: {
            label: 'Alternative considered and rejected: surveys',
            color: 'yellow',
            text: '"Survey instruments, while efficient... impose pre-defined categories that constrain..." — acknowledging the most obvious alternative (surveys) and explaining specifically why it was rejected demonstrates methodological awareness. The rejection is not dismissive: the efficiency of surveys is acknowledged before the specific limitation is named.',
          },
          a4: {
            label: 'Second alternative considered and rejected: focus groups',
            color: 'yellow',
            text: '"Focus groups were considered and rejected on the grounds that..." — the researcher considered multiple alternatives. The rejection of focus groups is based on the specific topic: professional identity may involve views that participants are reluctant to share in a group. The justification is topic-specific, not generic.',
          },
          a5: {
            label: 'Internal variation justified: why semi-structured vs other interview types',
            color: 'blue',
            text: '"Rather than a fully standardised or fully unstructured interview" — the justification goes down to the level of sub-variants within the chosen method. This level of precision shows genuine methodological thinking, not just method-labelling.',
          },
        },
      },
      {
        discipline: 'Political Science — EU Accession Conditionality',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Process tracing was selected as the primary analytical method ', a: 'b1' },
          { t: 'because the research question asks not whether EU conditionality affected domestic reform but how — ' },
          { t: 'through which causal mechanisms, under which conditions, and via which sequences of events', a: 'b2' },
          { t: ' in two contrasting candidate state contexts. ' },
          { t: 'Large-N statistical approaches cannot address this question adequately,', a: 'b3' },
          { t: ' because they are optimised for assessing whether a relationship holds across cases ' },
          { t: 'rather than for tracing the causal logic within a given case. ' },
          { t: 'Comparative case study designs were considered,', a: 'b4' },
          { t: ' but they typically rely on cross-case comparison as the primary inferential strategy, ' },
          { t: 'whereas process tracing locates causal inference within the case itself ' },
          { t: 'by identifying theoretically predicted observable implications — causal process observations — ', a: 'b5' },
          { t: 'and testing their presence or absence against the evidentiary record.' },
        ],
        annotations: {
          b1: {
            label: 'Method + the specific question it is designed to answer',
            color: 'emerald',
            text: '"Process tracing was selected... because the research question asks not whether... but how" — the distinction between "whether" and "how" questions is the entire justification for the method choice. Different questions require different methods, and naming the type of question makes the method choice inevitable.',
          },
          b2: {
            label: 'Three specifications of the "how" question',
            color: 'emerald',
            text: '"Through which causal mechanisms, under which conditions, and via which sequences" — the how-question is itself unpacked into three components. This precision tells the reader exactly what process tracing is needed to do and signals that the researcher understands the method\'s specific capabilities.',
          },
          b3: {
            label: 'Statistical alternative rejected on question-type grounds',
            color: 'yellow',
            text: '"Large-N statistical approaches... are optimised for assessing whether a relationship holds... rather than for tracing causal logic within a given case" — the rejection is principled: statistics answer a different type of question. The argument is not "statistics are less rigorous" but "statistics are the wrong tool for this type of inferential task."',
          },
          b4: {
            label: 'Comparative case study considered and distinguished',
            color: 'yellow',
            text: '"Comparative case study designs were considered, but they typically rely on cross-case comparison as the primary inferential strategy" — the distinction between process tracing and comparative case study is subtle, showing genuine methodological expertise. The researcher is not rejecting a straw man but a genuine alternative.',
          },
          b5: {
            label: 'Method\'s specific inferential mechanism named',
            color: 'blue',
            text: '"Causal process observations" is a technical term from process tracing methodology (Bennett and Checkel, 2015). Naming the specific inferential mechanism — the observable implications derived from theory and tested against the evidentiary record — signals mastery of the method\'s logic, not just its label.',
          },
        },
      },
    ],
    activityPrompt:
      'For each data collection or analysis method you use, write a justification paragraph using this structure: (1) state the method and immediately say "because the research question requires..."; (2) name the most obvious alternative and explain specifically why it is less suited to the question; (3) if you have chosen a sub-variant (e.g. semi-structured rather than unstructured), justify that choice too. The paragraph should make the method feel like the only defensible choice for this specific question.',
    keyTakeaways: [
      'Every method must be justified in relation to your specific research question, not defended as generally appropriate for qualitative/quantitative research.',
      'Engaging with alternatives — acknowledging them fairly and then explaining why they are less suited — is what separates justification from description.',
      'Different question types require different methods: "whether" questions suit statistical approaches; "how" and "why" questions suit process tracing, case study, and interpretive methods.',
      'Justifying sub-variants (semi-structured vs unstructured interviews; process tracing vs comparative case study) signals genuine methodological literacy.',
    ],
  },

  // ─── LESSON 3: Reflexivity and Positionality ─────────────────────────────
  {
    slug: 'positionality',
    title: 'Reflexivity and Positionality',
    durationMins: 10,
    intro:
      'A positionality statement is not a confession of bias. It is an act of scholarly transparency: an acknowledgement that the researcher is not a neutral observer but a person with a history, a perspective, and a relationship to the subject matter — and that these things shape what can be seen and how it is interpreted. In qualitative, ethnographic, and participatory research, positionality is expected; in other traditions, it is increasingly valued. The two extracts below, from social anthropology and health services research, show what reflexive engagement with positionality looks like in practice.',
    extracts: [
      {
        discipline: 'Social Anthropology — Urban Youth and Gang Affiliation',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'I grew up in the same neighbourhood as the young men I studied,', a: 'a1' },
          { t: ' attended the same secondary school as several participants, ' },
          { t: 'and share aspects of the social biography — including experiences of poverty and contact with the criminal justice system — ', a: 'a2' },
          { t: 'that the research seeks to understand. ' },
          { t: 'This shared background facilitated access and, at times, produced a quality of disclosure', a: 'a3' },
          { t: ' that I do not believe would have been available to a researcher positioned differently. ' },
          { t: 'It also introduced specific analytical risks.', a: 'a4' },
          { t: ' My familiarity with the cultural codes of the neighbourhood could produce a false confidence in interpretation — ' },
          { t: 'a sense of already knowing what observations mean before they have been adequately interrogated.', a: 'a5' },
          { t: ' To manage this, I maintained a field journal in which I regularly documented my interpretive assumptions ', a: 'a6' },
          { t: 'and submitted draft analyses to two participants for member-checking at key stages of the study.' },
        ],
        annotations: {
          a1: {
            label: 'Insider position stated directly',
            color: 'blue',
            text: '"I grew up in the same neighbourhood" — the positionality statement opens with the most significant fact about the researcher\'s relationship to the field. Insider research is neither inherently superior nor inferior to outsider research — but its specific implications (for access, interpretation, and validity) must be addressed explicitly.',
          },
          a2: {
            label: 'Shared biography specified',
            color: 'blue',
            text: '"Shared aspects of the social biography — including experiences of poverty and contact with the criminal justice system" — the researcher specifies which aspects of their position are relevant. Not every aspect of a researcher\'s biography matters for every study; selectivity shows analytical judgment about what is consequential for this particular research.',
          },
          a3: {
            label: 'Benefit of positionality acknowledged',
            color: 'emerald',
            text: '"Facilitated access and... produced a quality of disclosure" — the positionality statement acknowledges advantages, not just risks. A good reflexivity section is analytically even-handed: insider position created both opportunities and challenges.',
          },
          a4: {
            label: 'Risk of positionality acknowledged',
            color: 'rose',
            text: '"Introduced specific analytical risks" — the pivot from benefit to risk. "Specific" is important here: vague acknowledgements of "potential bias" are not useful. The researcher is about to name the specific risk that their positionality creates.',
          },
          a5: {
            label: 'The specific risk named',
            color: 'rose',
            text: '"False confidence in interpretation — a sense of already knowing what observations mean before they have been adequately interrogated" — this is precise. The risk is not generic bias but over-familiarity: the assumption that understanding a culture means understanding this observation. Naming the specific risk allows a specific management strategy.',
          },
          a6: {
            label: 'Management strategy described',
            color: 'violet',
            text: '"Field journal... documenting my interpretive assumptions... member-checking at key stages" — two concrete strategies are named. Positionality statements that name the risk but offer no management response are incomplete. The reader needs to know not just that the researcher was aware of the problem but what they did about it.',
          },
        },
      },
      {
        discipline: 'Health Services Research — Mental Health Nursing Practice',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'I bring to this research a clinical background of eleven years as a mental health nurse,', a: 'b1' },
          { t: ' including eight years working in community crisis teams with the patient population that forms the focus of the study. ' },
          { t: 'This background informed the design of the research in substantive ways:', a: 'b2' },
          { t: ' it shaped the selection of interview topics, the interpretation of clinical terminology, ' },
          { t: 'and my sense of which aspects of nursing decision-making are most opaque to outside observers. ' },
          { t: 'At the same time, my professional socialisation', a: 'b3' },
          { t: ' means I carry assumptions about what constitutes good or appropriate nursing practice — assumptions that I did not always share with participants, ' },
          { t: 'and that required active monitoring throughout data collection and analysis. ' },
          { t: 'During data collection, I made use of reflective memo-writing after each interview,', a: 'b4' },
          { t: ' noting where my professional judgements felt activated and where I was at risk of normalising practices that participants described as problematic. ' },
          { t: 'These memos were incorporated into the analytical process ', a: 'b5' },
          { t: 'as data in their own right, following the constant comparative method of grounded theory.' },
        ],
        annotations: {
          b1: {
            label: 'Professional positionality — named and quantified',
            color: 'blue',
            text: '"Eleven years as a mental health nurse... eight years in community crisis teams" — the professional position is named specifically. The specificity (eleven years, eight years, community crisis teams) is not self-promotion: it explains the precise nature of the shared context and therefore the precise nature of the analytical risks.',
          },
          b2: {
            label: 'Positionality as analytical resource',
            color: 'emerald',
            text: '"Informed the design of the research in substantive ways" — the professional background is presented as an asset: it shaped interview design, interpretation of technical language, and recognition of what outsiders cannot easily see. The framing is constructive: positionality contributed to the study.',
          },
          b3: {
            label: 'Professional socialisation as a source of assumption',
            color: 'rose',
            text: '"Professional socialisation means I carry assumptions about what constitutes good or appropriate nursing practice" — this is analytically sophisticated. The risk is not personal bias but professional formation: years of training and practice create frameworks for evaluation that operate below the level of conscious reasoning.',
          },
          b4: {
            label: 'Reflective memo-writing as management strategy',
            color: 'violet',
            text: '"Reflective memo-writing after each interview, noting where my professional judgements felt activated" — a concrete and credible management strategy. The memos track not just the interview content but the researcher\'s own interpretive reactions — making implicit professional responses visible and available for examination.',
          },
          b5: {
            label: 'Memos as analytical data — methodological integration',
            color: 'violet',
            text: '"Incorporated into the analytical process as data in their own right" — this is the most sophisticated move: the reflexivity is not just a protective disclaimer but an integral part of the analysis. Turning reflective memos into data transforms positionality from a problem to be managed into a resource to be used.',
          },
        },
      },
    ],
    activityPrompt:
      'Write a positionality statement of 200–250 words for your methodology chapter. Cover: (1) the relevant aspects of your background, experience, or identity in relation to your research topic; (2) at least one specific way this positionality was an asset to the research; (3) at least one specific analytical risk it introduced; (4) the concrete step(s) you took to monitor or manage that risk. Avoid vague assertions of "awareness" — name what you did.',
    keyTakeaways: [
      'Positionality is not a confession of bias but a transparent account of the researcher\'s relationship to the subject matter — it is evidence of intellectual honesty, not a weakness.',
      'Be specific about which aspects of your position matter for this particular research — not every element of your biography is relevant.',
      'Acknowledge both the assets and the risks your position creates: positionality statements that only acknowledge risks are incomplete and risk reading as performative.',
      'Name a concrete management strategy — reflective memos, member-checking, supervision — not just an aspiration toward awareness.',
    ],
  },

  // ─── LESSON 4: Writing About Limitations ─────────────────────────────────
  {
    slug: 'limitations',
    title: 'Writing About Limitations',
    durationMins: 8,
    intro:
      'Writing about limitations is one of the places where doctoral researchers most often either over-apologise or under-engage. Limitations are not failures — they are the honest boundaries of what your evidence can support. Identifying them demonstrates methodological maturity, and framing them as deliberate constraints rather than deficiencies is a rhetorical and intellectual skill. The two extracts below, from social work research, show the difference between a vague apology and a methodologically rigorous account of constraint.',
    extracts: [
      {
        discipline: 'Social Work Research — Ethical Decision-Making in Child Protection',
        source: 'PhD thesis excerpt (vague limitations)',
        variant: 'weak',
        segments: [
          { t: 'The study has a number of limitations that should be noted.', a: 'a1' },
          { t: ' The sample size was relatively small, which means the findings may not be representative.', a: 'a2' },
          { t: ' Time constraints affected the data collection process. ' },
          { t: 'As with all interview-based research, ', a: 'a3' },
          { t: 'the findings may be affected by social desirability bias, ' },
          { t: 'as participants may have presented themselves in a more favourable light. ' },
          { t: 'Despite these limitations, the study provides useful insights into the topic.', a: 'a4' },
        ],
        annotations: {
          a1: {
            label: '"Should be noted" — defensive framing',
            color: 'rose',
            text: '"Should be noted" signals that the limitations section is being treated as a formal obligation rather than an analytical opportunity. The phrase is a warning sign that what follows will be vague and apologetic rather than specific and intellectually engaged.',
          },
          a2: {
            label: 'Vague without impact',
            color: 'rose',
            text: '"May not be representative" — of what? In what sense? Which aspect of the findings is affected and to what degree? A limitation stated without specifying its impact on interpretation is not an analytical claim; it is a hedge.',
          },
          a3: {
            label: '"As with all interview-based research" — generic disclaimer',
            color: 'rose',
            text: 'This phrase acknowledges a limitation that applies to every qualitative interview study in history. It contributes nothing to understanding the specific constraints of this particular study. Limitations should be specific to the study, not imported wholesale from the methods literature.',
          },
          a4: {
            label: '"Despite these limitations" — dismissive close',
            color: 'rose',
            text: '"Despite these limitations, the study provides useful insights" — this sentence attempts to recover the study after the limitations section but only underlines the problem: the limitations were treated as something to get past rather than something to engage with analytically. A strong limitations section ends with understanding, not reassurance.',
          },
        },
        activityPrompt: null,
        keyTakeaways: null,
      },
      {
        discipline: 'Social Work Research — Ethical Decision-Making in Child Protection',
        source: 'PhD thesis excerpt (specific limitations)',
        variant: 'strong',
        segments: [
          { t: 'Three limitations constrain the conclusions that can be drawn from this study.', a: 'b1' },
          { t: ' First, the sample is bounded to early-career social workers employed by local authorities in one metropolitan region,', a: 'b2' },
          { t: ' which limits transferability to different regulatory contexts, practice cultures, or organisational structures, ' },
          { t: 'and to the experiences of more senior practitioners for whom ethical frameworks may operate differently. ' },
          { t: 'Second, interviews were conducted at a single time point,', a: 'b3' },
          { t: ' which means the study captures participants\' retrospective accounts of decision-making ' },
          { t: 'rather than real-time reasoning processes; ' },
          { t: 'think-aloud protocols during casework or longitudinal shadowing would be better suited to the latter but were not feasible within the study\'s resource constraints. ' },
          { t: 'Third, participants were recruited through their employing organisations,', a: 'b4' },
          { t: ' which may have introduced a selection effect toward practitioners who felt confident discussing their practice — ' },
          { t: 'potentially excluding those for whom ethical uncertainty is most acute,', a: 'b5' },
          { t: ' and who may therefore represent the population of greatest theoretical interest.' },
        ],
        annotations: {
          b1: {
            label: 'Three specific limitations — announced upfront',
            color: 'emerald',
            text: '"Three limitations constrain the conclusions" — the number is announced so the reader knows what to expect, and the framing is "constrain conclusions" (analytical) rather than "affect the study" (vague). Numbering limitations is a structural courtesy: it tells the reader where they are.',
          },
          b2: {
            label: 'Limitation 1: scope of transferability specified',
            color: 'blue',
            text: '"Limits transferability to different regulatory contexts, practice cultures, or organisational structures" — three specific dimensions along which the findings cannot be extended are named. This is the opposite of "may not be representative": it tells the reader precisely what the findings cannot claim.',
          },
          b3: {
            label: 'Limitation 2: design constraint acknowledged with the better alternative',
            color: 'blue',
            text: '"Think-aloud protocols during casework or longitudinal shadowing would be better suited... but were not feasible" — naming the better alternative demonstrates that the researcher knows the limitation and understands what would address it. This is not apologetic; it is analytically honest and practically aware.',
          },
          b4: {
            label: 'Limitation 3: recruitment mechanism and its probable effect',
            color: 'blue',
            text: '"Recruited through their employing organisations... may have introduced a selection effect toward practitioners who felt confident" — the limitation is specific to the recruitment method, and its probable direction of effect is named. The reader can now assess how this might affect the findings, rather than just noting that "bias may exist."',
          },
          b5: {
            label: 'Intellectual consequence drawn',
            color: 'violet',
            text: '"Those for whom ethical uncertainty is most acute... may represent the population of greatest theoretical interest" — the limitation closes with its theoretical consequence. This is the highest-level move in a limitations section: showing that the excluded population is not just different but analytically significant. The limitation becomes a direction for future research.',
          },
        },
      },
    ],
    activityPrompt:
      'List three limitations of your study and write each using this template: "[Limitation X] means that [specific aspect of the findings] cannot be extended to [specific context, population, or claim]. [The better alternative] would have addressed this but was not feasible because [reason]. Future research should therefore consider [how this could be resolved]." Compare your draft with the vague version in this lesson — which sentences does yours still share with the weak extract?',
    keyTakeaways: [
      'Limitations are analytical constraints, not apologies — state them in terms of what specific conclusions cannot be drawn, not in terms of what went wrong.',
      'Generic limitations ("small sample", "social desirability bias") that apply to all studies of a type contribute nothing — limitations must be specific to your study.',
      'Naming the better alternative demonstrates methodological awareness: you know what the limitation is and what would address it.',
      'The strongest limitations sections turn constraints into directions for future research — what the study couldn\'t do becomes what the field should do next.',
    ],
  },

  // ─── LESSON 5: Methodology Conventions Across Disciplines ────────────────
  {
    slug: 'methods-across-disciplines',
    title: 'Methodology Conventions Across Disciplines',
    durationMins: 10,
    intro:
      'What a methodology chapter looks like varies enormously across disciplines. A laboratory neuroscience thesis may have a methods section of three pages, written in past tense, describing procedures with no philosophical framing and no positionality statement. An ethnographic thesis may have a methodology chapter of forty pages, written partly in first person, exploring the philosophical, ethical, and relational dimensions of the research encounter. Both are doing the same rhetorical work — justifying the research design — but through radically different conventions. The two extracts below show how these differences operate in practice.',
    extracts: [
      {
        discipline: 'Clinical Neuroscience — EEG and Cognitive Load',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'Twenty-four healthy adult participants (12 female, mean age 24.3 years, SD 3.1) were recruited ', a: 'a1' },
          { t: 'through the university participant pool. ' },
          { t: 'All participants had normal or corrected-to-normal vision and reported no history of neurological or psychiatric disorder. ', a: 'a2' },
          { t: 'EEG data were acquired using a 64-channel active electrode system (BrainProducts actiCHamp) at a sampling rate of 1000 Hz. ' },
          { t: 'Electrode impedances were maintained below 10 kΩ throughout recording.', a: 'a3' },
          { t: ' Stimuli were presented using Psychtoolbox-3 running under MATLAB, ', a: 'a4' },
          { t: 'with a stimulus-onset asynchrony of 1000 ms and a jittered inter-trial interval of 800–1200 ms. ' },
          { t: 'Data were pre-processed using EEGLAB: ', a: 'a5' },
          { t: 'continuous data were re-referenced to the average of all electrodes, filtered with a 0.1–40 Hz bandpass filter, ' },
          { t: 'and epoched from −200 to 800 ms relative to stimulus onset.' },
        ],
        annotations: {
          a1: {
            label: 'Participants described statistically — no narrative',
            color: 'blue',
            text: '"Twenty-four healthy adult participants (12 female, mean age 24.3 years, SD 3.1)" — participants are described in demographic and statistical terms. In experimental neuroscience, the methodology section gives a reader enough information to replicate the study. There is no exploration of the researcher\'s relationship to participants or the meaning of the research encounter.',
          },
          a2: {
            label: 'Eligibility criteria — inclusion and exclusion',
            color: 'blue',
            text: '"Normal or corrected-to-normal vision... no history of neurological or psychiatric disorder" — these are the inclusion and exclusion criteria. In clinical and experimental research, these criteria are part of the methodological justification: they define the valid population for the study\'s inferences.',
          },
          a3: {
            label: 'Technical specification — instrument, settings, quality threshold',
            color: 'yellow',
            text: '"64-channel active electrode system... 1000 Hz... impedances maintained below 10 kΩ" — three layers of specification: the equipment, the setting, and the quality control criterion. This level of detail is necessary in experimental neuroscience because replicability depends on precise procedural specification.',
          },
          a4: {
            label: 'Software and stimulus parameters named',
            color: 'yellow',
            text: 'Psychtoolbox-3, MATLAB, stimulus-onset asynchrony, inter-trial interval — every parameter that could affect the experimental results is named and quantified. In experimental methodology, undisclosed parameters are methodological omissions, not stylistic choices.',
          },
          a5: {
            label: 'Pre-processing pipeline specified',
            color: 'yellow',
            text: '"Re-referenced, filtered, epoched" — the analytical pre-processing steps are described in sequence using past tense passive voice. This is standard in experimental sciences: the passive voice de-emphasises the agent (the researcher) and foregrounds the procedure, signalling that the procedure could be reproduced independently of the researcher who performed it.',
          },
        },
      },
      {
        discipline: 'Political Ecology — Land Dispossession and Indigenous Communities',
        source: 'PhD thesis excerpt',
        segments: [
          { t: 'The fieldwork for this study took place over fourteen months across three research sites in lowland Bolivia.', a: 'b1' },
          { t: ' I entered the field as an outsider to the communities I studied — ' },
          { t: 'neither Bolivian nor indigenous — and the terms of my presence were negotiated explicitly with community leaders', a: 'b2' },
          { t: ' over several weeks before any formal data collection began. ' },
          { t: 'These negotiations produced a set of research protocols that differed in important ways from what I had specified in my ethics application:', a: 'b3' },
          { t: ' several community members requested that certain discussions be treated as background context rather than quotable data, ' },
          { t: 'and two planned interview topics were identified by community leaders as potentially harmful to ongoing land rights litigation', a: 'b4' },
          { t: ' and were withdrawn from the study. ' },
          { t: 'I have recorded these modifications and their rationale in the research diary that accompanies this thesis,', a: 'b5' },
          { t: ' which I treat as a methodological document rather than a personal one: ' },
          { t: 'it is the record of how the research was actually done, rather than how it was originally designed.' },
        ],
        annotations: {
          b1: {
            label: 'Duration and location of fieldwork — grounded in place and time',
            color: 'blue',
            text: '"Fourteen months across three research sites" — like the neuroscience extract, the methodology opens with basic parameters. But immediately the register shifts: "research sites" implies communities with histories, not controlled laboratory conditions.',
          },
          b2: {
            label: 'Researcher position in the field — explicitly stated',
            color: 'violet',
            text: '"Neither Bolivian nor indigenous" — the outsider position is named directly. In ethnographic and political ecology research, the researcher\'s positionality in the field is part of the methodology: it affects access, interpretation, and the politics of the research encounter itself.',
          },
          b3: {
            label: 'Protocol negotiations produced deviations from the ethics application',
            color: 'rose',
            text: '"Differed in important ways from what I had specified in my ethics application" — this is a remarkable level of transparency. The researcher acknowledges that the fieldwork deviated from the approved protocol, and explains why. In participatory research, this kind of adaptive renegotiation is expected and should be documented, not concealed.',
          },
          b4: {
            label: 'Community agency in shaping the research',
            color: 'rose',
            text: '"Identified by community leaders as potentially harmful to ongoing land rights litigation and were withdrawn" — the community exercised veto power over aspects of the research design. In decolonial and community-based research methodologies, this is not a limitation but an ethical requirement: communities have the right to shape research conducted in their name.',
          },
          b5: {
            label: 'Research diary as methodological document',
            color: 'emerald',
            text: '"A methodological document rather than a personal one: it is the record of how the research was actually done, rather than how it was originally designed" — this is a sophisticated methodological move. The research diary is elevated to the status of methodological evidence, acknowledging that in qualitative fieldwork, the "method" is not fixed at the start but evolves through the encounter.',
          },
        },
      },
    ],
    activityPrompt:
      'Find two methodology chapters from recent theses in your discipline. For each, note: (1) the length of the chapter; (2) whether it uses first or third person; (3) whether there is a philosophical framing section; (4) whether positionality is addressed; (5) how the limitations are handled — briefly or at length, specific or general. Compare your findings with a thesis from a different discipline. What does the contrast tell you about what your field considers methodologically significant?',
    keyTakeaways: [
      'Experimental sciences prioritise procedural replicability: methods sections are precise, past-tense, passive-voice, and focused on parameters that could affect results.',
      'Ethnographic and participatory research traditions prioritise relational transparency: methodology chapters are discursive, first-person, and attend to the politics of the research encounter.',
      'Both traditions are doing the same job — justifying the research design — but through conventions that reflect different assumptions about what knowledge is and how it is produced.',
      'Whatever your discipline, the methodology chapter must answer: why this design, why these methods, why this sample, and what constraints apply to the conclusions.',
    ],
  },

];
