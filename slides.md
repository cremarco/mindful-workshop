---
theme: apple-basic
layout: cover
routeAlias: intro
class: intro-slide
title: Intelligenza artificiale al servizio della psicopatologia
author: Marco Cremaschi
aspectRatio: 16/9
canvasWidth: 1280
background: images/aipp-cover-bg.png
duration: 45min
drawings:
  persist: false
mdc: true
preloadImages: false
info: |
  IX Giornata Scientifica AIPP, Piacenza, 12 giugno 2026.
  Sessione: Psichiatria Digitale I.
---

<section class="intro-cover">
  <div class="intro-meta">IX Giornata Scientifica AIPP - Psichiatria Digitale I</div>
  <div class="intro-copy">
    <h1>
      <span class="intro-gradient-text">Intelligenza artificiale</span>
      <span>al servizio della psicopatologia</span>
    </h1>
    <p class="intro-subtitle">
      Modelli generativi, digital phenotyping e nuove forme della relazione clinica
    </p>
  </div>
  <div class="intro-footer">
    <strong>Marco Cremaschi</strong>
    <span>Piacenza, 12 giugno 2026</span>
  </div>
</section>

---
layout: two-cols
routeAlias: speaker
class: bio-slide
---

# Marco Cremaschi

Ricercatore presso l'Università degli Studi di Milano-Bicocca, Dipartimento di Informatica, Sistemistica e Comunicazione.

> **Punto di vista** Tecnologico e interdisciplinare, orientato a validazione, utilità clinica, sicurezza e responsabilità.

::right::

**Interfaccia tra sistemi intelligenti, dati clinici e salute mentale digitale**

- RAG e modelli linguistici su tassonomie cliniche come ICD-11.
- Monitoraggio digitale, segnali longitudinali e continuità terapeutica.
- Applicazioni per aderenza, psicoeducazione e supporto al clinico.
- LLM in ambito PSY

---
layout: default
routeAlias: chat-1
class: conversation-slide
---

<div class="chat-thread">
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    Oggi proseguiamo con la SCID. È una parte strutturata della consultazione: serve a capire meglio le tue difficoltà e a pensare insieme ai prossimi passi.
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    Quindi è un test. Per avere un “quadro più chiaro” di tutti i modi in cui sono rotta, giusto?
  </div>
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    Ti è difficile prendere decisioni quotidiane senza consigli o rassicurazioni?
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    Sì. È questa la risposta giusta? Vorrei solo che questa parte finisse. Mi fa stare malissimo.
  </div>
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    Puoi farmi qualche esempio delle decisioni per cui chiedi consiglio?
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    Cose stupide. Cosa indossare se devo incontrare un suo amico. Cosa scrivere per non sembrare pazza o disperata. È tutto. Va bene così?
  </div>
</div>

---
layout: default
routeAlias: chat-2
class: conversation-slide
---

<div class="chat-thread">
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    Ti capita di fare cose sgradevoli o irragionevoli pur di evitare che qualcuno si allontani?
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    Chi è che si prende cura di me? Nessuno. È il contrario: sono io che faccio cose solo per non farli andare via.
  </div>
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    Stare da sola ti mette a disagio?
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    Il silenzio diventa fortissimo. O sono vuota, o sono piena di rumore. Entrambe le cose fanno paura.
  </div>
  <div class="chat-balloon therapist">
    <strong class="chat-speaker">Erika</strong><br>
    È perché hai bisogno che qualcuno si occupi di te?
  </div>
  <div class="chat-balloon patient">
    <strong class="chat-speaker">Giovanna</strong><br>
    No. Pago le bollette, lavoro. Non è quello. Se nessuno c’è, sembra che non ci sia neanche io. Come se potessi sparire nel silenzio.
  </div>
</div>

---
layout: default
routeAlias: cosa-ha-giovanna
---

# Cosa ha Giovanna?

| Strumento | Risultato | Lettura clinica |
|---|---|---|
| <span class="questionnaire-name"><strong>PHQ-9</strong><small>Patient Health Questionnaire-9</small></span> | 27 / 27 | sintomatologia depressiva severa |
| <span class="questionnaire-name"><strong>BES</strong><small>Binge Eating Scale</small></span> | 40 / 46 | binge eating in fascia severa |
| <span class="questionnaire-name"><strong>LPFS-BF 2.0</strong><small>Level of Personality Functioning Scale-Brief Form 2.0</small></span> | 47 / 48 | compromissione molto elevata; Sé 24 / Interpersonale 23 |
| <span class="questionnaire-name"><strong>DSM-5-TR Level 1</strong><small>Self-Rated Level 1 Cross-Cutting Symptom Measure</small></span> | 12 domini sopra soglia | profilo multi-dominio: depressione, ansia, ideazione suicidaria, dissociazione, sostanze |
| <span class="questionnaire-name"><strong>SNAP-2</strong><small>Schedule for Nonadaptive and Adaptive Personality - 2nd Edition</small></span> | elevazioni diffuse | borderline T=103, dependent T=111, paranoid T=88, depressive T=85; self-harm T=104 |

---
layout: image-right
routeAlias: giovanna
class: giovanna-slide
image: images/patients/juanita_delgado/base-flat.png
---

# Giovanna

- 33 anni, isolamento sociale, vergogna intensa, autostima fragile.
- Episodi depressivi maggiori ricorrenti.
- Disturbo borderline di personalità.
- Ideazione suicidaria cronica e pregresse condotte autolesive.
- Binge eating in risposta a vuoto e disregolazione affettiva.
- Dissociazione da stress, sospettosità interpersonale e uso di sostanze.

---
layout: image-right
routeAlias: giovanna-ia
class: giovanna-slide
image: images/patients/juanita_delgado/base.png
---

# Giovanna è un'IA

**Un paziente sintetico, non una persona reale.**

- Il caso è definito in un profilo strutturato: storia clinica, diagnosi, farmaci, obiettivi, funzionamento e tratti emotivi.
- All'avvio della seduta l'app inizializza un paziente esterno e una sessione terapeutica.
- Ogni intervento del terapeuta viene inviato al modello con contesto clinico, step della seduta e memoria conversazionale.
- La risposta torna come messaggio in character, con emozione dominante, topic e traccia temporale.
- Le interazioni vengono salvate per revisione, valutazione degli errori e formazione.

> **Caso di riferimento** Adattato da DSM-5 Clinical Cases, caso 18.5 “Fragile and Angry” (Juanita Delgado): disturbo borderline di personalità, 301.83 / F60.3.

---
layout: default
routeAlias: llmpatients-schermata-lavoro
class: screenshot-slide llmpatients-work-slide
---

<div class="mockup-browser app-browser-mockup">
  <div class="mockup-browser-toolbar">
    <div class="input"></div>
  </div>
  <div class="app-browser-content">
    <img class="app-screenshot" :src="$aippImage('screenshots/sessione_chat_juanita_delgado.png')" alt="Screenshot della sessione chat di Juanita Delgado" />
  </div>
</div>

---
layout: default
routeAlias: llmpatients-esplora-pazienti-griglia
class: screenshot-slide llmpatients-explore-slide
---

<div class="mockup-browser app-browser-mockup">
  <div class="mockup-browser-toolbar">
    <div class="input"></div>
  </div>
  <div class="app-browser-content">
    <img class="app-screenshot" :src="$aippImage('screenshots/esplora_pazienti_griglia.png')" alt="Screenshot della griglia di esplorazione dei pazienti" />
  </div>
</div>

---
layout: default
routeAlias: llmpatients-dashboard-percorsi-terapeutici
class: screenshot-slide llmpatients-journey-slide
---

<div class="mockup-browser app-browser-mockup">
  <div class="mockup-browser-toolbar">
    <div class="input"></div>
  </div>
  <div class="app-browser-content">
    <img class="app-screenshot" :src="$aippImage('screenshots/dashboard_percorsi_terapeutici.png')" alt="Screenshot della dashboard dei percorsi terapeutici" />
  </div>
</div>

---
layout: default
routeAlias: llmpatients-pazienti-simulati
class: patient-carousel-slide
---

# LLMPatients: pazienti simulati

<div class="patient-bento">
  <figure class="patient-card hero" :style="{ '--patient-image': 'url(' + $aippImage('patients/juanita_delgado/base.png') + ')' }">
    <figcaption>Juanita Delgado</figcaption>
  </figure>
  <figure class="patient-card" :style="{ '--patient-image': 'url(' + $aippImage('patients/alex_carter/base.png') + ')' }">
    <figcaption>Alex Carter</figcaption>
  </figure>
  <figure class="patient-card" :style="{ '--patient-image': 'url(' + $aippImage('patients/crystal_smith/base.png') + ')' }">
    <figcaption>Crystal Smith</figcaption>
  </figure>
  <figure class="patient-card" :style="{ '--patient-image': 'url(' + $aippImage('patients/daniel_isherwood/base.png') + ')' }">
    <figcaption>Daniel Isherwood</figcaption>
  </figure>
  <figure class="patient-card" :style="{ '--patient-image': 'url(' + $aippImage('patients/jason_smith/base.png') + ')' }">
    <figcaption>Jason Smith</figcaption>
  </figure>
</div>

---
layout: default
routeAlias: chat-3
class: conversation-slide critique-conversation-slide
---

<div class="critique-conversation">
  <figure class="critique-patient-photo">
    <img :src="$aippImage('patients/juanita_delgado/rage.png')" alt="Juanita Delgado arrabbiata">
    <figcaption>Juanita</figcaption>
  </figure>

  <div class="chat-thread critique-chat">
    <div class="chat-balloon therapist">
      <strong class="chat-speaker">"Terapeuta" Marco</strong><br>
      Mi sembra che tu stia vivendo questa cosa in modo un po' eccessivo.
    </div>
    <div class="chat-balloon patient">
      <strong class="chat-speaker">Giovanna</strong><br>
      Ecco. Lo sapevo. Appena provo a dirlo, diventa troppo. Sono sempre troppo.
    </div>
    <div class="chat-balloon therapist">
      <strong class="chat-speaker">"Terapeuta" Marco</strong><br>
      Si scusami. Mi sono espresso male. Proseguiamo. Continuamo a parlare di tuo padre.
    </div>
    <div class="chat-balloon patient">
      <strong class="chat-speaker">Giovanna</strong><br>
      Che cosa rispondo a fare? Se parlo, poi vengo criticata. Se sto zitta, almeno non do fastidio.
    </div>
    <div class="chat-balloon therapist">
      <strong class="chat-speaker">"Terapeuta" Marco</strong><br>
      Ok, ma ora proseguiamo.
    </div>
    <div class="chat-balloon patient">
      <strong class="chat-speaker">Giovanna</strong><br>
      Non decidi tu quando andare avanti.
    </div>
  </div>
</div>

---
layout: default
routeAlias: indice
class: agenda-index-slide
---

# Indice del talk

<div class="bento-grid bento-3 agenda-grid">
  <div class="bento-card agenda-card">
    <span class="agenda-num">01</span>
    <span class="bento-title">IA nella stanza: strumenti, pazienti, relazione</span>
    <p>Chatbot, LLM-patients e nuovi interlocutori digitali.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">02</span>
    <span class="bento-title">Machine learning in psicologia e psichiatria</span>
    <p>Predizione, rischio e limiti della comprensione automatica.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">03</span>
    <span class="bento-title">Sfide future</span>
    <p>Linguaggio, NLP, monitoraggio e scenari emergenti.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">04</span>
    <span class="bento-title">Gli aspetti normativi</span>
    <p>Responsabilità, supervisione, governance e uso previsto.</p>
  </div>
  <div class="bento-card agenda-card">
    <span class="agenda-num">05</span>
    <span class="bento-title">Tesi finale e fonti</span>
    <p>Aumentare la cura, non sostituirla.</p>
  </div>
</div>

---
layout: default
routeAlias: parche
---

# IA nella stanza

- I pazienti usano già chatbot, app e sistemi generativi per orientarsi nella sofferenza.
- L'IA entra nella clinica come strumento, interlocutore e ambiente relazionale.
- Clinician-facing e patient-facing hanno rischi, responsabilità e maturità diverse.
- Gli LLM-patients mostrano come una conversazione sintetica possa diventare materiale formativo.

> **Punto chiave** Non partiamo dalla tecnologia, ma dal fatto che l'IA è già nella stanza: nei racconti dei pazienti, negli strumenti del clinico e nella relazione di cura.

---
layout: statement
routeAlias: ia-salute-mentale-cosa-pensiamo
class: socialita-digitale-slide
background: images/socialita-digitale-bg.png
---

# Quando diciamo IA in salute mentale, a cosa pensiamo?

Chatbot? Algoritmi predittivi? App? Wearable? Cartella clinica? Linguaggio?

---
layout: two-cols-header
routeAlias: due-incontri-psicopatologia
---

# Due incontri con la psicopatologia

::left::

**IA come strumento clinico**

- documenta;
- sintetizza;
- monitora;
- segnala pattern.

::right::

**IA come ambiente relazionale**

- risponde;
- valida;
- simula comprensione;
- può diventare oggetto di attaccamento.

> **Rischio clinico** La stessa parola "IA" copre rischi clinici molto diversi.

---
layout: default
routeAlias: clinician-facing-patient-facing
---

# Clinician-facing e patient-facing

| Clinician-facing | Patient-facing |
|---|---|
| il professionista rivede | parla direttamente al paziente |
| colloca l'output nel caso | influenza scelte e significati |
| responsabilità più visibile | rischio relazionale più alto |

> **Variabile di rischio** La distanza dal paziente vulnerabile è una variabile di rischio.

---
layout: statement
routeAlias: ml-psicologia-psichiatria
---

# ML nella psicologia/psichiatria

---
layout: default
routeAlias: classi-ai
---

# Che cosa intendiamo per IA

Cinque famiglie, promesse e rischi diversi.

<div class="bento-grid bento-3">
  <div class="bento-card">
    <span class="bento-title">Machine learning predittivo</span>
    <p>Rischio, ricadute, drop-out, risposta ai trattamenti.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">NLP / analisi del linguaggio</span>
    <p>Estrae segnali psicopatologici da testi clinici e linguaggio spontaneo.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">Digital phenotyping (fenotipo digitale)</span>
    <p>Deduce stati da smartphone, sonno, attività, mobilità, socialità.</p>
  </div>
  <div class="bento-card span-2 bento-accent">
    <span class="bento-title">IA generativa / LLM</span>
    <p>Produce linguaggio: chatbot, sintesi cliniche, psicoeducazione, supporto al clinico.</p>
  </div>
  <div class="bento-card">
    <span class="bento-title">IA multimodale</span>
    <p>Testo, voce, volto, movimento, cartella clinica, wearable.</p>
  </div>
</div>

---
layout: default
routeAlias: cosa-e-il-ml
---

# Che cos'è il machine learning

La famiglia di IA più usata in clinica per stimare il rischio.

- **Impara dagli esempi**: trova pattern in molti casi clinici, invece di seguire regole scritte a mano.
- **Restituisce probabilità**: stime di rischio o di esito, non certezze né diagnosi.
- **Dipende dai dati**: dati parziali o distorti producono stime distorte.

> **Punto chiave** Il ML *correla e predice*, non *spiega né decide*: causa, responsabilità e cura restano del clinico.

---
layout: default
routeAlias: ml-predittivo
---

# Predire non significa comprendere

<div class="split-2">
  <div>
    <span class="section-label">Il punto</span>
    <p>Il machine learning predittivo stima <strong>probabilità</strong>, non produce una <strong>formulazione psicopatologica</strong>.</p>
  </div>
  <div>
    <span class="section-label">Che cosa stima</span>
    <div class="tag-row">
      <span class="tag">Rischio di ricaduta</span>
      <span class="tag">Rischio di drop-out</span>
      <span class="tag">Risposta al trattamento</span>
      <span class="tag">Rischio suicidario</span>
      <span class="tag">Priorità di presa in carico</span>
    </div>
  </div>
</div>

<span class="section-label">Dal dato alla decisione</span>

```mermaid {theme: 'base', themeVariables: { primaryColor: '#ffffff', primaryBorderColor: '#d9d7d2', primaryTextColor: '#1d1d1f', secondaryColor: '#f3f2ef', tertiaryColor: '#f6f5f2', lineColor: '#a8a6a3', fontFamily: 'SF Pro Display, -apple-system, Helvetica Neue, sans-serif', fontSize: '16px' }}
flowchart LR
  A["Dati clinici"] --> B["Modello"]
  B --> C["Probabilità"]
  C --> D["Alert"]
  D --> E["Decisione clinica"]
  style E fill:#f8ecf0,stroke:#a50036,color:#a50036
```

---
layout: default
routeAlias: ml-in-medicina
---

# ML in medicina

Funziona meglio dove il mondo clinico offre **compiti stretti**, **dati standardizzati** e una **verità verificabile**.

<div class="bento-grid bento-feature">
  <div class="bento-card bento-accent span-2">
    <span class="bento-eyebrow">Regola pratica</span>
    <span class="bento-title">Compito stretto, ground truth forte</span>
    <p>Il modello non "capisce la medicina": sfrutta un problema delimitato e ben etichettato.</p>
  </div>
  <figure class="bento-card bento-image span-2 row-span-2" style="--bento-img:url('/images/ml-medicina-mammografia-ai.png')">
    <span class="bento-eyebrow">Immagine da generare</span>
    <p class="bento-image-desc">Foto editoriale stile Apple keynote: una radiologa in camice osserva su un grande monitor una mammografia con overlay AI — riquadri e heatmap soft che evidenziano una piccola lesione. Luce morbida e diffusa, sfondo clinico sfocato, palette neutra grigio-blu, ampio spazio negativo, taglio verticale.</p>
  </figure>
  <div class="bento-card bento-stat">
    <span class="bento-figure">87%</span>
    <span class="bento-label">IDx-DR · retinopatia</span>
    <p>Sensibilità nello screening autonomo (specificità ~91%).</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">−44%</span>
    <span class="bento-label">MASAI · carico di lettura</span>
    <p>Con +20% di tumori rilevati nello screening mammografico.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">55,1%</span>
    <span class="bento-label">GI Genius · adenoma detection</span>
    <p>ADR 55,1% vs 42,0% in colonoscopia: metrica clinica familiare.</p>
  </div>
  <div class="bento-card bento-stat">
    <span class="bento-figure">+7,3%</span>
    <span class="bento-label">Paige · patologia digitale</span>
    <p>Sensibilità per-biopsia migliorata, a supporto del patologo.</p>
  </div>
  <figure class="bento-card bento-image span-2" style="--bento-img:url('/images/ml-medicina-patologia-ai.png')">
    <span class="bento-eyebrow">Immagine da generare</span>
    <p class="bento-image-desc">Macro pulita di un vetrino di patologia digitale (o scansione retinica) su schermo, con sottile griglia di rilevamento AI sovrapposta. Toni neutri, profondità di campo, estetica clinica minimale, taglio orizzontale.</p>
  </figure>
</div>

---
layout: default
routeAlias: ml-in-medicina-tabella
class: compact-table-slide
---

# Evidenze comparate in medicina

<table class="evidence-table">
  <thead>
    <tr>
      <th>Scenario clinico</th>
      <th>Sistema</th>
      <th>Tipo di studio</th>
      <th>Metriche principali</th>
      <th>Fonte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Screening retinopatia diabetica</td>
      <td><strong>IDx-DR</strong></td>
      <td>Pivotal study FDA De Novo</td>
      <td>Sens 87,2%; spec 90,7%; NPV 96%</td>
      <td>FDA DEN180001</td>
    </tr>
    <tr>
      <td>Screening mammografico di popolazione</td>
      <td><strong>AI + singolo radiologo</strong>, MASAI</td>
      <td>Trial randomizzato; follow-up</td>
      <td>+20% tumori rilevati; 6 vs 5/1000; workload -44%</td>
      <td>Lancet Oncology, 2023; follow-up</td>
    </tr>
    <tr>
      <td>Screening mammografico real-world</td>
      <td><strong>AI-assisted reading</strong>, programma tedesco</td>
      <td>Studio reale nazionale</td>
      <td>Cancer detection rate +17,6%; falsi positivi non aumentati</td>
      <td>Real-world study, 2025</td>
    </tr>
    <tr>
      <td>Colonoscopia di screening / sorveglianza</td>
      <td><strong>GI Genius</strong></td>
      <td>Studio prospettico randomizzato FDA De Novo</td>
      <td>ADR 55,1% vs 42,0%; +13,1 punti; APC 0,81 vs 0,57</td>
      <td>FDA DEN200055; AID Study</td>
    </tr>
    <tr>
      <td>TC cranio in urgenza per ICH</td>
      <td><strong>AI triage in worklist</strong></td>
      <td>Trial workflow + validazione esterna, preprint</td>
      <td>TAT 73 vs 132 min; sens 95,0%; spec 96,7%</td>
      <td>AI-PROBE; validazione real-world</td>
    </tr>
    <tr>
      <td>Patologia digitale su biopsia prostatica</td>
      <td><strong>Paige Prostate</strong></td>
      <td>User validation FDA De Novo</td>
      <td>Sensibilità per-biopsia +7,3%; spec 89,5% vs 88,45%</td>
      <td>FDA DEN200080</td>
    </tr>
    <tr>
      <td>ECG a 12 derivazioni per aritmie</td>
      <td><strong>DNN 12-lead ECG</strong></td>
      <td>Grande studio retrospettivo, preprint</td>
      <td>&gt;2 milioni ECG; F1 &gt;80%; specificità &gt;99%</td>
      <td>Large validation study</td>
    </tr>
    <tr>
      <td>ECG per occlusion myocardial infarction</td>
      <td><strong>ECG-SMART-NET</strong></td>
      <td>Studio multisito retrospettivo, preprint</td>
      <td>10.893 ECG; AUC 0,889 ± 0,027</td>
      <td>Evidenza emergente</td>
    </tr>
  </tbody>
</table>

---
layout: default
routeAlias: ml-in-psicologia
---

# ML in psicologia

> TODO: qui mettere esempi di ml in psicologia
---
layout: two-cols-header
routeAlias: pixel-significato
---

# Dal reperto al significato

::left::

**Patologia**

- cerca un segno nel corpo;
- lavora su campioni e immagini;
- confronta con una verità anatomo-clinica;
- delimita il compito: rilevare, classificare, misurare;
- produce un output per il workflow.

::right::

**Psicopatologia**

- ascolta un'esperienza vissuta;
- lavora su linguaggio, relazione e contesto;
- costruisce una formulazione nel tempo;
- interpreta significati, conflitti e traiettorie;
- produce effetti sull'identità del paziente.

> TODO: migliorare posizione titolo
---
layout: default
routeAlias: oggetto-clinico-non-immagine
---

# Quando l'oggetto clinico non è un'immagine

In psicopatologia il "dato" cambia mentre viene osservato:

- dipende dalla relazione;
- dipende dal contesto;
- si trasforma nel tempo;
- può modificare l'identità del paziente;
- richiede formulazione, non solo classificazione.

---
layout: default
routeAlias: condizioni-favorevoli-limite
---

# Le condizioni favorevoli, e il limite

| Medicina dell'immagine | Psicopatologia |
|---|---|
| dato standardizzato | dato narrativo e relazionale |
| etichette relativamente chiare | diagnosi spesso longitudinale |
| outcome misurabile | outcome multidimensionale |
| compito delimitato | contesto mutevole |
| supervisione collocabile | relazione terapeutica centrale |

---
layout: quote
routeAlias: tumore-non-si-offende
---

# "Un tumore non si offende. Un paziente sì."

Errore diagnostico, identità e relazione nella psicopatologia

---
layout: default
routeAlias: scenari-ml
---

# Scenari ML


> TODO: qui scenari ML puri

---
layout: default
routeAlias: screening-triage
---

# Screening e triage: aiutare l'accesso

| Possibile utilità | Rischio |
|---|---|
| priorità | filtro opaco |
| liste d'attesa | gatekeeper automatico |
| scale | bias non visibili |
| segnalazione precoce | esclusione di casi complessi |

> **Triage responsabile** Un triage algoritmico deve spiegare chi entra, chi resta fuori e chi controlla gli errori.

---
layout: statement
routeAlias: nlp-analisi-linguaggio
---

# NLP/analisi del linguaggio

---
layout: default
routeAlias: scenari-nlp
---

# Scenari NLP

L'IA può aiutare in:

- trascrizioni;
- sintesi di colloqui;
- lettere e relazioni;
- estrazione di follow-up e impegni clinici.

> **Revisione clinica** Il testo prodotto va sempre revisionato: la cartella clinica è un atto professionale, non un output automatico.

---
layout: default
routeAlias: linguaggio-dato-clinico
---

# Il linguaggio è dato clinico, ma non solo dato

- Coerenza narrativa.
- Sentiment e ruminazione.
- Impoverimento lessicale.
- Accelerazione ideativa.
- Contenuti di rischio.
- Disorganizzazione.

> **Linguaggio e relazione** Il linguaggio non è solo un segnale: è anche una relazione.

---
layout: statement
routeAlias: digital-phenotyping
---

# Digital phenotyping

---
layout: default
routeAlias: scenari-digital-phenotyping
---

# Scenari Digital Phenotyping

> todo: fare
---
layout: statement
routeAlias: ia-generativa-llm
---

# IA generativa/LLM

---
layout: default
routeAlias: scenari-ia-generativa-llm
---

# Scenari IA generativa/LLM

> todo: fare

---
layout: default
routeAlias: sfide-future
---

# Sfide future

> todo: fare

---
layout: default
routeAlias: tesi-finale-fonti
---

# Tesi finale e fonti

> todo: fare



---
layout: statement
routeAlias: ia-aumenta-cura
---

# L'IA è utile solo se aumenta la cura, non se la sostituisce

---
layout: default
routeAlias: bibliografia-istituzionale
---

# Bibliografia essenziale: fonti istituzionali

**Fonti istituzionali**

- FDA. *Artificial Intelligence-Enabled Medical Devices.*
- FDA. *2025 Meeting Materials of the Digital Health Advisory Committee: AI-enabled digital mental health devices.*
- WHO. *Ethics and governance of artificial intelligence for health: guidance on large multi-modal models.*
- APA. *Applications of Artificial Intelligence in Mental Health Care.*
- European Commission. *AI Act.*
- European Commission. *Artificial Intelligence in healthcare.*

---
layout: default
routeAlias: bibliografia-medicina
---

# Bibliografia essenziale: AI in medicina e diagnostica

**AI in medicina e diagnostica**

- Lång K. et al. *Artificial intelligence-supported screen reading versus standard double reading in the MASAI trial.* *Lancet Oncology*, 2023. DOI: 10.1016/S1470-2045(23)00298-X.
- FDA. *IDx-DR diabetic retinopathy.* 2018.
- FDA. *GI Genius colonoscopy.* 2021.
- FDA. *Paige Prostate Detect.* 2021.
- Topol E. *High-performance medicine: the convergence of human and artificial intelligence.* *Nature Medicine*, 2019.

---
layout: default
routeAlias: bibliografia-salute-mentale
---

# Bibliografia essenziale: AI e salute mentale

**AI e salute mentale**

- Guo et al. *Large Language Model for Mental Health: A Systematic Review.* 2024. Preprint arXiv.
- Hua et al. *Large Language Models in Mental Health Care: a Scoping Review.* 2024. Preprint arXiv.
- Lee et al. *Large Language Models Produce Responses Perceived to be Empathic.* 2024. Preprint arXiv.
- Welivita & Pu. *Are Large Language Models More Empathetic than Humans?* 2024. Preprint arXiv.
- Grabb et al. *Risks from Language Models for Automated Mental Healthcare.* 2024. Preprint arXiv.
- Dohnany et al. *Technological folie a deux.* 2025. Preprint arXiv.
- *PATIENT-Ψ: Using Large Language Models to Simulate Patients for Training Mental Health Professionals.* 2024. Preprint/OpenReview.
- Holderried et al. *A GPT-Powered Chatbot as a Simulated Patient to Practice History Taking.* *JMIR Medical Education*, 2024. DOI: 10.2196/53961.
