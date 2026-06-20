---
theme: apple-basic
layout: cover
routeAlias: intro
class: intro-slide
title: "Personality Is Not a Prompt: Toward Psychologically Grounded LLM Simulations of Personality"
author: Marco Cremaschi
aspectRatio: 16/9
canvasWidth: 1280
colorSchema: dark
background: images/backgrounds/aipp-cover.png
duration: 45min
drawings:
  persist: false
mdc: true
preloadImages: false
info: |
  Milan Workshop on Computational Methods For Mental Health and Well-Being 2026.
  University of Milano-Bicocca, Building U4 Tellus, Room 8: Aula Luisella Sironi.
  Tuesday, 23 June 2026, 11:45-12:05 CEST.
---

<section class="intro-cover">
  <img class="intro-logo" :src="$aippAsset('mindful-no-text.png')" alt="Mindful" />
  <div class="intro-copy">
    <h1>
      <span class="intro-gradient-text">Personality Is Not a Prompt:</span>
      <span class="intro-title-secondary">Toward Psychologically Grounded LLM Simulations of Personality</span>
    </h1>
  </div>
  <div class="intro-footer">
    <strong>Marco Cremaschi</strong>
    <span>Milan Workshop on Computational Methods For Mental Health and Well-Being 2026</span>
    <span>University of Milano-Bicocca, 23 June 2026</span>
  </div>
</section>


---
layout: two-cols
routeAlias: speaker
class: bio-slide
---

# Marco Cremaschi

Researcher at the University of Milano-Bicocca (Department of Informatics, Systems and Communication - DISCo) and at Whattadata, a university spin-off focused on digital mental health.

> **Perspective** Technological and interdisciplinary, focused on validation, clinical utility, safety, and responsibility.

::right::

**At the interface between intelligent systems, clinical data, and digital mental health**

- RAG and language models over clinical taxonomies such as ICD-11.
- Digital monitoring, longitudinal signals, and continuity of care.
- Applications for adherence, psychoeducation, and clinician support.
- LLMs applied to mental health: LLMind and LLMPatients.


---
layout: statement
routeAlias: whattadata
class: whattadata-slide
---

<section class="whattadata-hero">
  <img class="whattadata-mark" :src="$aippImage('brand/whattadata-logo.svg')" alt="Whattadata" />
  <div class="whattadata-copy">
    <div class="whattadata-kicker">Spin-off of the University of Milano-Bicocca</div>
    <h1>Whattadata</h1>
    <p>Data, models, and digital platforms for mental health: from design to field validation.</p>
  </div>
</section>


---
layout: default
routeAlias: dipps
class: dipps-intro-slide
---

# DIPPS

<section class="dipps-hero">
  <div class="dipps-main">
    <img class="dipps-lockup" :src="$aippImage('dipps/dipps-lockup.png')" alt="DIPPS - Digital Intervention in Psychiatric and Psychological Services" />
    <p>
      A digital ecosystem for mental health: patient, clinician, continuous
      monitoring, and decision support within a single workflow.
    </p>
    <div class="dipps-meta">
      <span>MIMIT call - Innovation Agreements</span>
      <span>March 2023 - February 2026</span>
      <span>investment ~€5.6M · CUP B49J23001840005</span>
    </div>
  </div>

  <aside class="dipps-partners" aria-label="DIPPS partnership">
    <h2>Partnership</h2>
    <div class="dipps-partner-list">
      <div class="dipps-partner">
        <img :src="$aippImage('dipps/partner-aton.png')" alt="Aton Informatica" />
        <strong>Aton IT Srl</strong>
      </div>
      <div class="dipps-partner">
        <img :src="$aippImage('dipps/partner-cefriel.png')" alt="Cefriel" />
        <strong>Cefriel S.Cons.R.L</strong>
      </div>
      <div class="dipps-partner">
        <img :src="$aippImage('dipps/partner-bicocca.png')" alt="University of Milano-Bicocca" />
        <span>
          <strong>University of Milano-Bicocca</strong>
          <em>Department of Informatics, Systems and Communication</em>
        </span>
      </div>
      <div class="dipps-partner">
        <img :src="$aippImage('dipps/partner-padova-seal.png')" alt="University of Padova" />
        <span>
          <strong>University of Padova</strong>
          <em>Department of General Psychology</em>
        </span>
      </div>
    </div>
  </aside>
</section>


---
layout: default
routeAlias: colloquio-scid-1
class: conversation-slide
---

<div class="chat-thread">
  <ChatBalloon role="therapist" speaker="Erika">
    Today we will continue with the SCID. It is a structured part of the consultation: it helps us better understand your difficulties and think together about next steps.
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    So it is a test. To get a "clearer picture" of all the ways I am broken, right?
  </ChatBalloon>
  <ChatBalloon role="therapist" speaker="Erika">
    Is it difficult for you to make everyday decisions without advice or reassurance?
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    Yes. Is that the right answer? I just want this part to be over. It makes me feel awful.
  </ChatBalloon>
  <ChatBalloon role="therapist" speaker="Erika">
    Can you give me some examples of decisions for which you ask for advice?
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    Stupid things. What to wear if I have to meet one of his friends. What to write so I do not sound crazy or desperate. That is all. Is that enough?
  </ChatBalloon>
</div>


---
layout: default
routeAlias: colloquio-scid-2
class: conversation-slide
---

<div class="chat-thread">
  <ChatBalloon role="therapist" speaker="Erika">
    Do you ever do unpleasant or unreasonable things just to keep someone from leaving?
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    Who takes care of me? No one. It is the opposite: I am the one doing things just to keep them from leaving.
  </ChatBalloon>
  <ChatBalloon role="therapist" speaker="Erika">
    Does being alone make you uncomfortable?
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    The silence gets very loud. Either I am empty, or I am full of noise. Both are frightening.
  </ChatBalloon>
  <ChatBalloon role="therapist" speaker="Erika">
    Is it because you need someone to take care of you?
  </ChatBalloon>
  <ChatBalloon role="patient" speaker="Giovanna">
    No. I pay the bills, I work. That is not it. If no one is there, it feels like I am not there either. As if I could disappear into the silence.
  </ChatBalloon>
</div>


---
layout: default
routeAlias: cosa-ha-giovanna
---

# What does Giovanna have?

| Instrument | Result | Clinical reading |
|---|---|---|
| <span class="questionnaire-name"><strong>PHQ-9</strong><small>Patient Health Questionnaire-9</small></span> | 27 / 27 | severe depressive symptoms |
| <span class="questionnaire-name"><strong>BES</strong><small>Binge Eating Scale</small></span> | 40 / 46 | severe-range binge eating |
| <span class="questionnaire-name"><strong>LPFS-BF 2.0</strong><small>Level of Personality Functioning Scale-Brief Form 2.0</small></span> | 47 / 48 | very high impairment; Self 24 / Interpersonal 23 |
| <span class="questionnaire-name"><strong>DSM-5-TR Level 1</strong><small>Self-Rated Level 1 Cross-Cutting Symptom Measure</small></span> | 12 domains above threshold | multi-domain profile: depression, anxiety, suicidal ideation, dissociation, substance use |
| <span class="questionnaire-name"><strong>SNAP-2</strong><small>Schedule for Nonadaptive and Adaptive Personality - 2nd Edition</small></span> | diffuse elevations | borderline T=103, dependent T=111, paranoid T=88, depressive T=85; self-harm T=104 |


---
layout: image-right
routeAlias: giovanna
class: giovanna-slide
image: images/patients/juanita-delgado/base-flat.png
---

# Giovanna

- 33 years old, social isolation, intense shame, fragile self-esteem.
- Recurrent major depressive episodes.
- Borderline personality disorder.
- Chronic suicidal ideation and previous self-harm behaviors.
- Binge eating in response to emptiness and affective dysregulation.
- Stress-related dissociation, interpersonal suspiciousness, and substance use.


---
layout: image-right
routeAlias: giovanna-ia
class: giovanna-slide
image: images/patients/juanita-delgado/base.png
---

# Giovanna is an AI

**A synthetic patient, not a real person.**

- The case is defined in a structured profile: clinical history, diagnoses, medications, goals, functioning, and emotional traits.
- At the start of the session, the app initializes an external patient and a therapy session.
- Each therapist intervention is sent to the model with clinical context, session step, and conversational memory.
- The response returns as an in-character message, with dominant emotion, topic, and temporal trace.
- Interactions are saved for review, error evaluation, and training.

> **Reference case** Adapted from DSM-5 Clinical Cases, case 18.5 "Fragile and Angry" (Juanita Delgado): borderline personality disorder, 301.83 / F60.3.


---
layout: default
routeAlias: llmpatients-sessione-chat
class: screenshot-slide
---

<AppScreenshot src="screenshots/sessione-chat-juanita-delgado.png" alt="Screenshot of Juanita Delgado's chat session" />


---
layout: default
routeAlias: llmpatients-esplora-pazienti
class: screenshot-slide
hide: true
---

<AppScreenshot src="screenshots/esplora-pazienti-griglia.png" alt="Screenshot of the patient exploration grid" />


---
layout: default
routeAlias: llmpatients-dashboard-percorsi-terapeutici
class: screenshot-slide
hide: true
---

<AppScreenshot src="screenshots/dashboard-percorsi-terapeutici.png" alt="Screenshot of the therapeutic pathways dashboard" />


---
layout: default
routeAlias: llmpatients-pazienti-simulati
class: patient-carousel-slide
hide: true
---

# LLMPatients: simulated patients

<div class="patient-bento">
  <PatientCard hero name="Juanita Delgado" image="patients/juanita-delgado/base.png" />
  <PatientCard name="Alex Carter" image="patients/alex-carter/base.png" />
  <PatientCard name="Crystal Smith" image="patients/crystal-smith/base.png" />
  <PatientCard name="Daniel Isherwood" image="patients/daniel-isherwood/base.png" />
  <PatientCard name="Jason Smith" image="patients/jason-smith/base.png" />
</div>


---
layout: default
routeAlias: colloquio-critica
class: conversation-slide critique-conversation-slide
---

<div class="critique-conversation">
  <figure class="critique-patient-photo">
    <img :src="$aippImage('patients/juanita-delgado/rage.png')" alt="Angry Giovanna">
    <figcaption>Giovanna</figcaption>
  </figure>

  <div class="chat-thread critique-chat">
    <ChatBalloon role="therapist" speaker='"Therapist" Marco'>
      It seems to me that you are experiencing this in a somewhat excessive way.
    </ChatBalloon>
    <ChatBalloon role="patient" speaker="Giovanna">
      There it is. I knew it. The moment I try to say it, it becomes too much. I am always too much.
    </ChatBalloon>
    <ChatBalloon role="therapist" speaker='"Therapist" Marco'>
      Yes, I am sorry. I phrased that badly. Let us continue: let's keep talking about your father.
    </ChatBalloon>
    <ChatBalloon role="patient" speaker="Giovanna">
      Why should I answer? If I speak, I get criticized. If I stay quiet, at least I am not bothering anyone.
    </ChatBalloon>
    <ChatBalloon role="therapist" speaker='"Therapist" Marco'>
      Okay, but now let us move on.
    </ChatBalloon>
    <ChatBalloon role="patient" speaker="Giovanna">
      You do not decide when we move on.
    </ChatBalloon>
  </div>
</div>


---
layout: default
routeAlias: indice
class: agenda-index-slide
---

# Talk outline

<div class="bento-grid bento-3 agenda-grid">
  <div class="bento-card agenda-card">
    <span class="agenda-num">01</span>
    <span class="bento-title">Virtual patients in the room</span>
    <p>A safe space for repeated practice, alliance work, and observable clinical reasoning.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">02</span>
    <span class="bento-title">Why prompts are not enough</span>
    <p>Multi-session identity, memory, safety, feedback, and interpretability as design requirements.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">03</span>
    <span class="bento-title">LLMPatients as a training environment</span>
    <p>Structured profiles, state, memory, orchestration, and supervised session workflows.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">04</span>
    <span class="bento-title">Evidence so far</span>
    <p>Usability, profile-coherence checks, and blinded expert annotation of therapeutic missteps.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">05</span>
    <span class="bento-title">A psychologically grounded model</span>
    <p>From prompt-based personas to structured personality, mental functioning, and symptoms/state.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">06</span>
    <span class="bento-title">Final thesis</span>
    <p>Virtual patients are useful when they remain interpretable, supervised, and testable.</p>
  </div>
</div>


---
layout: statement
routeAlias: virtual-patients-index
class: section-opener-slide ia-nella-stanza-index-slide section-01
---

# Virtual patients in the room

From standardized role-play to supervised, multi-session clinical simulation.


---
layout: default
routeAlias: virtual-patients-what-why
class: section-01
---

# Virtual patients: what and why

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s01-01-virtual-patient-control.png') }">
    <span class="bento-eyebrow">Definition</span>
    <span class="bento-title">A simulated patient is a controlled clinical encounter</span>
    <p>It is not a chatbot for care delivery: it is a training setting where learners can practise interviewing, alliance building, formulation and repair.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Repeatability</span>
    <p>The same presentation can be replayed, compared and supervised across learners.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Safety</span>
    <p>Students can make mistakes without exposing real patients to preventable harm.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Observability</span>
    <p>Turns, ruptures, repairs and clinical decisions become inspectable artefacts.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Deliberate practice</span>
    <p>Skills can be rehearsed over time with feedback, supervision and escalating complexity.</p>
  </div>
  <div class="bento-card bento-accent span-3 has-corner-icon education-goal-card">
    <img class="bento-corner-icon" :src="$aippImage('icons/bento/education-goal-pointer.png')" alt="" aria-hidden="true" />
    <span class="bento-title">The educational goal</span>
    <p>Not to replace clinical placements, but to bridge the gap between declarative knowledge and in-session competence.</p>
  </div>
</div>


---
layout: default
routeAlias: virtual-patients-sota
class: compact-table-slide section-01
---

# State of the art: virtual patients with LLMs

<table class="evidence-table">
  <thead>
    <tr>
      <th>System / work</th>
      <th>Continuity</th>
      <th>Patient model</th>
      <th>Feedback / evidence</th>
      <th>Limit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Fung & Laing</strong><br>typed CBT role-play</td>
      <td>Single case</td>
      <td>Prompted vignette</td>
      <td>Proof of concept for therapist training</td>
      <td>No structured memory or longitudinal patient</td>
    </tr>
    <tr>
      <td><strong>Holderried et al.</strong><br>history-taking patient</td>
      <td>Single encounter</td>
      <td>Case-specific simulation</td>
      <td>Automated feedback compared with human assessment</td>
      <td>Medical interview focus, not psychotherapy pathway</td>
    </tr>
    <tr>
      <td><strong>PATIENT-Psi</strong><br>CBT formulation training</td>
      <td>Single session</td>
      <td>Structured cognitive conceptualization</td>
      <td>Fidelity gains over GPT-4 baseline</td>
      <td>Not designed for extended relational continuity</td>
    </tr>
    <tr>
      <td><strong>SimPatient</strong><br>motivational interviewing</td>
      <td>Short pathway</td>
      <td>Persona + dynamic cognitive factors</td>
      <td>Usability, usefulness and realism evidence</td>
      <td>Protocol-specific; resistance and realism remain limited</td>
    </tr>
    <tr>
      <td><strong>CureFun</strong><br>clinical education</td>
      <td>Case-based</td>
      <td>Simulated medical patients</td>
      <td>Response evaluation tools</td>
      <td>General medical training, limited mental-disorder complexity</td>
    </tr>
    <tr>
      <td><strong>LLMPatients</strong></td>
      <td>Multi-session</td>
      <td>Personality &gt; Mental Functioning &gt; Symptoms/State</td>
      <td>Usability, coherence checks, expert misstep annotation</td>
      <td>Early-stage evidence; needs larger outcome studies</td>
    </tr>
  </tbody>
</table>


---
layout: statement
routeAlias: prompt-problems-index
class: section-opener-slide section-02
---

# Why prompts are not enough

The problem is not fluency. It is continuity, control and clinical meaning.


---
layout: default
routeAlias: prompt-problems
class: section-02
---

# The hard problems

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s02-01-prompt-fragility.png') }">
    <span class="bento-title">A plausible answer is not a stable patient</span>
    <p>Prompt-only personas can sound clinically credible while drifting across sessions, flattening conflict, or hiding why the patient responded that way.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Identity drift</span>
    <p>Names, relationships, symptoms and autobiographical details can shift over time.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Memory</span>
    <p>Context windows are not enough for therapeutic continuity and longitudinal repair.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Sycophancy</span>
    <p>Over-agreeable patients reduce the value of training on resistance and rupture.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Safety</span>
    <p>Role swaps, prompt injection and unsafe clinical advice need deterministic controls.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Feedback</span>
    <p>Training requires visible missteps, not just a fluent continuation of the dialogue.</p>
  </div>
  <div class="bento-card span-2">
    <span class="bento-title">Interpretability</span>
    <p>The lecturer must inspect the patient model, not infer it from generated text.</p>
  </div>
</div>


---
layout: statement
routeAlias: llmpatients-index
class: section-opener-slide section-03
---

# LLMPatients as a training environment

A supervised platform for multi-session psychotherapy simulation.


---
layout: default
routeAlias: llmpatients-solution
class: section-03
---

# The LLMPatients solution

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-01-training-infrastructure.png') }">
    <span class="bento-eyebrow">Positioning</span>
    <span class="bento-title">Educational infrastructure, not an autonomous clinical agent</span>
    <p>LLMPatients is designed for psychotherapy training: deliberate practice, case-based simulation, lecturer supervision and formative feedback.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Multi-session</span>
    <p>An 11-session therapeutic pathway supports continuity across encounters.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Structured patient</span>
    <p>Behaviour is constrained by explicit clinical, functional and state variables.</p>
  </div>
  <div class="bento-card span-2">
    <span class="bento-title">Supervised workflow</span>
    <p>Students interact with the patient; lecturers inspect sessions and feedback artefacts.</p>
  </div>
  <div class="bento-card bento-accent span-3" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-02-core-claim.png') }">
    <span class="bento-title">Core claim</span>
    <p>The LLM realizes language. The patient is represented by profile, state, memory, orchestration and logs.</p>
  </div>
</div>


---
layout: default
routeAlias: llmpatients-characteristics
class: section-03
---

# Core characteristics

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-03-pms-profile.png') }">
    <span class="bento-title">P &gt; M &gt; S profile</span>
    <p>Personality, mental functioning and symptoms/state define the clinical constraints.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Bio-psycho-social variables</span>
    <p>History, diagnoses, goals, medication, functioning and relational patterns.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Affective state</span>
    <p>Dominant emotion and relational stance shape the in-character response.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Multi-level memory</span>
    <p>Recent turns, episodic summaries and retrieved memories support continuity.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Safety and orchestration</span>
    <p>State graph, prompt builder and deterministic guardrails constrain the simulation.</p>
  </div>
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-04-misstep-feedback.png') }">
    <span class="bento-title">Misstep feedback</span>
    <p>Therapeutic errors become reviewable training artefacts for supervision.</p>
  </div>
</div>


---
layout: default
routeAlias: llmpatients-architecture
class: section-03
---

# Architecture

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-05-student-lecturer-ui.png') }">
    <span class="bento-eyebrow">Layer 01</span>
    <span class="bento-title">Student / lecturer UI</span>
    <p>Students conduct sessions; lecturers inspect patients, transcripts and feedback artefacts.</p>
  </div>
  <div class="bento-card">
    <span class="bento-eyebrow">Layer 02</span>
    <span class="bento-title">Session orchestrator</span>
    <p>Coordinates turn flow, pathway stage, safety checks and role boundaries.</p>
  </div>
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-06-patient-profile.png') }">
    <span class="bento-eyebrow">Layer 03</span>
    <span class="bento-title">Patient profile: P &gt; M &gt; S</span>
    <p>Personality, mental functioning and symptoms/state constrain the simulation.</p>
  </div>
  <div class="bento-card">
    <span class="bento-eyebrow">Layer 04</span>
    <span class="bento-title">State + memory</span>
    <p>Affective stance, recent turns and episodic summaries preserve continuity.</p>
  </div>
  <div class="bento-card">
    <span class="bento-eyebrow">Layer 05</span>
    <span class="bento-title">Prompt builder + LLM realizer</span>
    <p>The model renders language from explicit constraints; it is not the patient itself.</p>
  </div>
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s03-07-logging-analysis.png') }">
    <span class="bento-eyebrow">Layer 06</span>
    <span class="bento-title">Logging + misstep analysis</span>
    <p>Transcripts, telemetry and error categories become reviewable supervision material.</p>
  </div>
</div>


---
layout: statement
routeAlias: evidence-index
class: section-opener-slide section-04
---

# Evidence so far

Feasibility, formative usability, exploratory coherence and misstep annotation.


---
layout: default
routeAlias: usability-evidence
class: section-04
---

# Usability evidence

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-01-usability-evidence.png') }">
    <span class="bento-eyebrow">Formative evaluation</span>
    <span class="bento-title">Think Aloud + System Usability Scale</span>
    <p>The evaluation focused on clarity, interaction breakdowns and workflow comprehensibility in an early implemented interface.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">90/100</span>
    <span class="bento-label">Mean SUS</span>
    <p>Second iteration, small formative sample.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">n=4</span>
    <span class="bento-label">Participants</span>
    <p>Useful for redesign signals, not adoption claims.</p>
  </div>
  <div class="bento-card span-2">
    <span class="bento-title">What improved</span>
    <p>Navigation, task clarity, patient/session flow and feedback access.</p>
  </div>
  <div class="bento-card bento-accent span-3" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-02-usability-interpretation.png') }">
    <span class="bento-title">Interpretation</span>
    <p>Initial support for interface comprehensibility; larger independent studies are needed for effectiveness or deployment claims.</p>
  </div>
</div>


---
layout: default
routeAlias: clinical-coherence-evidence
class: section-04
---

# Clinical coherence checks

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-03-coherence-check.png') }">
    <span class="bento-eyebrow">Exploratory evidence</span>
    <span class="bento-title">Do simulated profiles express the expected differences?</span>
    <p>The paper checks whether profile-constrained patients produce coherent psychometric and interview patterns across five profiles.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Self-report instruments</span>
    <p>PHQ-9, BES, LPFS-BF 2.0, DSM-5-TR Level 1 and personality measures.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Selective interviews</span>
    <p>Targeted clinical probes check consistency with intended presentations.</p>
  </div>
  <div class="bento-card span-2">
    <span class="bento-title">Negative controls</span>
    <p>Profiles without clinical impairment should remain distinguishable from clinical cases.</p>
  </div>
  <div class="bento-card bento-accent span-3" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-04-boundary-condition.png') }">
    <span class="bento-title">Boundary condition</span>
    <p>This is profile-to-response alignment, not independent clinical validation of a real patient.</p>
  </div>
</div>


---
layout: default
routeAlias: misstep-validation
class: section-04
---

# Misstep validation

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-05-misstep-validation.png') }">
    <span class="bento-eyebrow">Blinded expert annotation</span>
    <span class="bento-title">Can clinicians identify deliberately seeded therapeutic errors?</span>
    <p>The corpus tested whether a misstep taxonomy can function as a supervision scaffold for psychotherapy training.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">20</span>
    <span class="bento-label">Transcripts</span>
    <p>Appropriate and seeded-misstep scripts.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">300</span>
    <span class="bento-label">Therapist turns</span>
    <p>Annotated by two blinded clinicians.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">1.00</span>
    <span class="bento-label">Recall</span>
    <p>Both raters identified all seeded misstep turns.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">.68 / .97</span>
    <span class="bento-label">Precision</span>
    <p>Thresholds differed substantially across raters.</p>
  </div>
  <div class="bento-card bento-stat span-3">
    <span class="bento-figure">.52</span>
    <span class="bento-label">Kappa</span>
    <p>Moderate binary agreement; category agreement 83.7% when both flagged a turn.</p>
  </div>
  <div class="bento-card bento-accent span-3" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s04-06-misstep-interpretation.png') }">
    <span class="bento-title">Interpretation</span>
    <p>The taxonomy is sensitive, but adjudication is needed before strong automated-feedback accuracy claims.</p>
  </div>
</div>


---
layout: statement
routeAlias: grounded-model-index
class: section-opener-slide section-05
---

# A psychologically grounded model

Personality is not a longer prompt. It is an explicit, inspectable state.


---
layout: default
routeAlias: beyond-persona-prompts
class: section-05 framework-slide
---

# Beyond persona prompts

<div class="framework-bento">
  <div class="fw-top">
    <div class="fw-hero">
      <div class="fw-hero-copy">
        <span class="bento-eyebrow">Working paper · modular socio-cognitive framework for LLM personality simulation</span>
        <p class="fw-thesis">Simulating personality is not writing a richer prompt: it requires an <strong>explicit, inspectable and self-regulating state</strong>. In the frame of Triadic Reciprocal Determinism, the LLM remains the <em>linguistic realizer</em> - not the seat of personality.</p>
      </div>
    </div>
    <div class="fw-triad">
      <img
        class="fw-triad-image"
        :src="$aippImage('diagrams/triadic-reciprocal-determinism.png')"
        alt="Triadic Reciprocal Determinism: Person, Environment and Behaviour"
      />
    </div>
  </div>

  <div class="fw-band">
    <span class="fw-band-label">Personological layer · who the person is</span>
    <div class="fw-cards">
      <div class="fw-card" style="--c:#e5484d"><span class="fw-num">1</span><span class="fw-text"><span class="fw-name">Identity Registry</span><span class="fw-desc">declarative identity</span></span></div>
      <div class="fw-card" style="--c:#f76b15"><span class="fw-num">2</span><span class="fw-text"><span class="fw-name">Autobiographical Invariants</span><span class="fw-desc">background, narrative identity</span></span></div>
      <div class="fw-card" style="--c:#f5a623"><span class="fw-num">3</span><span class="fw-text"><span class="fw-name">PersonalityState</span><span class="fw-desc">traits, values, standards</span></span></div>
      <div class="fw-card" style="--c:#46a758"><span class="fw-num">4</span><span class="fw-text"><span class="fw-name">Dynamic State</span><span class="fw-desc">affect, relationship, self-efficacy</span></span></div>
      <div class="fw-card" style="--c:#12a594"><span class="fw-num">5</span><span class="fw-text"><span class="fw-name">Appraisal Engine</span><span class="fw-desc">interprets input as an event</span></span></div>
      <div class="fw-card" style="--c:#0ea5cf"><span class="fw-num">6</span><span class="fw-text"><span class="fw-name">Policy Engine</span><span class="fw-desc">response and regulation strategies</span></span></div>
    </div>
  </div>

  <div class="fw-band fw-band-mid">
    <span class="fw-band-label">Continuity & transition · how the person changes over time</span>
    <div class="fw-cards fw-cards-2">
      <div class="fw-card" style="--c:#3e63dd"><span class="fw-num">7</span><span class="fw-text"><span class="fw-name">State Updater</span><span class="fw-desc">what consolidates and what remains transient after each turn</span></span></div>
      <div class="fw-card" style="--c:#5753c6"><span class="fw-num">8</span><span class="fw-text"><span class="fw-name">MemoryStore</span><span class="fw-desc">multi-level autobiographical memory with retrieval and controls</span></span></div>
    </div>
  </div>

  <div class="fw-band">
    <span class="fw-band-label">Infrastructure layer · how the system is governed</span>
    <div class="fw-cards">
      <div class="fw-card" style="--c:#7c6df2"><span class="fw-num">9</span><span class="fw-text"><span class="fw-name">Safety & Sanitization</span><span class="fw-desc">anti prompt-injection / role-swap</span></span></div>
      <div class="fw-card" style="--c:#8e4ec6"><span class="fw-num">10</span><span class="fw-text"><span class="fw-name">Prompt Orchestrator</span><span class="fw-desc">composes state, memory and policy</span></span></div>
      <div class="fw-card" style="--c:#a347ba"><span class="fw-num">11</span><span class="fw-text"><span class="fw-name">LLM Realizer</span><span class="fw-desc">renders language</span></span></div>
      <div class="fw-card" style="--c:#c44aa6"><span class="fw-num">12</span><span class="fw-text"><span class="fw-name">Logging & Replay</span><span class="fw-desc">inspectable traces</span></span></div>
      <div class="fw-card" style="--c:#d6409f"><span class="fw-num">13</span><span class="fw-text"><span class="fw-name">Evaluation Harness</span><span class="fw-desc">stability, validity, drift</span></span></div>
      <div class="fw-card" style="--c:#e93d82"><span class="fw-num">14</span><span class="fw-text"><span class="fw-name">Benchmark & Reporting</span><span class="fw-desc">reproducible protocols</span></span></div>
    </div>
  </div>
</div>


---
layout: statement
routeAlias: final-thesis-index
class: section-opener-slide tesi-finale-index-slide section-06
---

# Final thesis

Virtual patients are useful when they remain interpretable, supervised and testable.


---
layout: default
routeAlias: final-thesis
class: section-06
---

# Final thesis

<div class="bento-grid bento-3">
  <div class="bento-card bento-accent span-2" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s06-01-clinical-value.png') }">
    <span class="bento-title">The clinical value is not simulation for its own sake</span>
    <p>Virtual patients matter when they create a safe, repeatable and inspectable space for practising clinical judgement.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Interpretable</span>
    <p>The patient model must be explicit enough for lecturers to inspect and contest.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Supervised</span>
    <p>Simulation is embedded in teaching, feedback and professional responsibility.</p>
  </div>
  <div class="bento-card span-2">
    <span class="bento-title">Testable</span>
    <p>Claims require usability, coherence, expert review and learning-outcome evidence.</p>
  </div>
  <div class="bento-card bento-accent span-3" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s06-02-personality-not-prompt.png') }">
    <span class="bento-title">Personality is not a prompt</span>
    <p>A clinically useful virtual patient needs structured personality, memory, state and governance around the LLM.</p>
  </div>
</div>


---
layout: default
routeAlias: future-work
class: section-06
---

# Future work

<div class="bento-grid bento-3">
  <div class="bento-card">
    <span class="bento-title">Adjudicated reference labels</span>
    <p>Resolve expert disagreements before using misstep data as a benchmark.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Automated feedback benchmark</span>
    <p>Compare model-generated reports with adjudicated clinician labels.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Larger usability studies</span>
    <p>Move beyond formative samples toward independent students, trainees and supervisors.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Learning outcomes</span>
    <p>Test whether repeated use improves interviewing, formulation and repair skills.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Comparison with role-play</span>
    <p>Measure added value against conventional simulated-patient and peer role-play formats.</p>
  </div>
  <div class="bento-card bento-accent" :style="{ '--bento-card-icon': $aippCssImage('icons/bento/generated/s06-03-transfer-to-training.png') }">
    <span class="bento-title">Transfer to training</span>
    <p>Study how virtual-patient practice changes real supervision and clinical learning.</p>
  </div>
</div>

---
layout: statement
routeAlias: domande-discussione-index
class: section-opener-slide domande-discussione-index-slide section-06
---

# Domande e discussione

Apriamo il confronto: relazione, diagnosi, monitoraggio e responsabilità dell'errore.


---
layout: default
routeAlias: domande-discussione
class: section-06
hide: true
---

# Domande per aprire la discussione

- Se un chatbot riduce la solitudine, è già terapia?
- Se sembra più empatico del clinico, è più sicuro?
- Un algoritmo diagnostico in psicopatologia classifica un disturbo o una persona?
- Il digital phenotyping è prevenzione o sorveglianza?
- Dobbiamo prescrivere strumenti di IA validati?
- Chi risponde quando il modello sbaglia?


---
layout: center
routeAlias: grazie
class: grazie-slide section-06
---

# grazie



---
layout: default
routeAlias: bibliography-virtual-patients
class: section-06 bib-slide bib-dense
---

<span class="section-label">Essential references</span>

# Virtual patients and simulation

- Cremaschi M. et al. *LLMPatients: An Interpretable Multi-Session LLM Virtual Patient System for AI-Enabled Psychotherapy Training.* Preprint, 2026.
- Fung L., Laing R. *A proof of concept study on the use of large language models as a client in typed role plays for training therapists.* *Discover Psychology*, 2024. DOI: 10.1007/s44202-024-00302-7.
- Holderried F. et al. *A Language Model-Powered Simulated Patient With Automated Feedback for History Taking.* *JMIR Medical Education*, 2024. DOI: 10.2196/59213.
- Wang R. et al. *PATIENT-Psi: Using Large Language Models to Simulate Patients for Training Mental Health Professionals.* EMNLP, 2024. DOI: 10.18653/v1/2024.emnlp-main.711.
- Steenstra I. et al. *SimPatient: Virtual patient simulation for motivational interviewing training.* 2025.
- Li Y. et al. *Leveraging Large Language Model as Simulated Patients for Clinical Education (CureFun).* 2024. arXiv:2404.13066.
- Louie R. et al. *Can LLM-Simulated Practice and Feedback Upskill Human Counselors? A Randomized Study with 90+ Novice Counselors.* 2025. arXiv:2505.02428.


---
layout: default
routeAlias: bibliography-evaluation-grounding
class: section-06 bib-slide bib-dense
---

<span class="section-label">Essential references</span>

# Evaluation and clinical grounding

- Brooke J. *SUS: A quick and dirty usability scale.* In *Usability Evaluation in Industry*, 1996.
- Charters E. *The use of think-aloud methods in qualitative research: An introduction to think-aloud methods.* *Brock Education Journal*, 2003.
- Park H. S. et al. *Identification of potential therapist missteps in the context of engagement in public mental health.* 2025.
- First M. B. et al. *User's Guide for the SCID-5-PD: Structured Clinical Interview for DSM-5 Personality Disorders.* APA Publishing, 2016.
- American Psychiatric Association. *DSM-5-TR Self-Rated Level 1 Cross-Cutting Symptom Measure - Adult.* 2022.
- Clark L. A. et al. *Schedule for Nonadaptive and Adaptive Personality - Second Edition.* University of Notre Dame, 2014.
- Garon M. H. et al. *Best practices for teaching psychotherapy to medical students: A scoping review.* *Behavioral Sciences*, 2025.
- Klimkowski V. et al. *Psychotherapy training and clinical competence development.* 2024.


---
layout: center
routeAlias: arianne-feedback
class: arianne-feedback-slide section-06
---

<section class="arianne-feedback">
  <img class="arianne-feedback-logo" :src="$aippImage('brand/arianne-logo.svg')" alt="Arianne" />
  <img class="arianne-feedback-qr" :src="$aippImage('feedback/arianne-qr.svg')" alt="QR code for the Arianne questionnaire" />
</section>
