<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// 4 Real-World Production Architecture Scenarios grounded in Rohan's actual engineering experience
const pipelines = [
  {
    id: 'agentic',
    title: 'Autonomous Agentic SDLC & CI/CD',
    shortTitle: 'Agentic CI/CD',
    icon: '🤖',
    color: '#a855f7',
    colorFrom: 'from-purple-500',
    colorTo: 'to-indigo-600',
    borderColor: 'border-purple-500/30',
    badge: 'Visa Production Automation',
    summary: 'Autonomous multi-agent orchestration for automated user story ingestion, TDD test synthesis, and DevSecOps vulnerability remediation with Human-in-the-Loop review.',
    stages: [
      {
        id: 'spec',
        number: '01',
        title: 'Spec & Jira Ingestion',
        category: 'Ingestion',
        tech: ['Python Asyncio', 'Jira API', 'Webhooks'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jira.svg'
        ],
        role: 'Autonomous Requirement Parsing',
        description: 'Ingests user stories, acceptance criteria, and edge-cases directly from Jira into structured JSON schemas using asynchronous Python event loops.',
        whyChosen: 'Asynchronous event piping allows ingestion without blocking concurrent webhook triggers during peak sprint planning.',
        metric: '< 150ms Ingestion Latency'
      },
      {
        id: 'langgraph',
        number: '02',
        title: 'LangGraph State Routing',
        category: 'Orchestration',
        tech: ['LangGraph', 'Python 3.11+', 'StateGraph'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg'
        ],
        role: 'Multi-Agent Cyclic State Machine',
        description: 'Orchestrates specialized sub-agents (architect, coder, reviewer) via cyclic graphs with persistent checkpoint state and rollback mechanisms.',
        whyChosen: 'Unlike linear chains, LangGraph allows conditional loops where code failing validation routes back to the authoring agent with compiler feedback.',
        metric: 'Persistent State Checkpoints'
      },
      {
        id: 'mcp',
        number: '03',
        title: 'MCP Standardized Tooling',
        category: 'Context & Tools',
        tech: ['Model Context Protocol', 'Claude CLI', 'Claude Skills'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg'
        ],
        role: 'Decoupled Environment Interfacing',
        description: 'Interfaces agents with code repositories, schema definitions, and shell runtimes through the Anthropic Model Context Protocol specification.',
        whyChosen: 'Standardized client/server protocol decouples agent reasoning from host execution, ensuring zero leaked API keys and sandboxed command execution.',
        metric: 'Zero-Privilege Sandboxing'
      },
      {
        id: 'tdd',
        number: '04',
        title: 'TDD Test Generation',
        category: 'Verification',
        tech: ['Test-Driven Development', 'JUnit 5', 'PyTest'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/junit5.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg'
        ],
        role: 'Behavioral Test Boundary Synthesis',
        description: 'Synthesizes exhaustive test suites and mocks edge cases before implementation code is allowed to compile or execute.',
        whyChosen: 'Enforcing TDD guarantees every agent-authored method has strict behavioral boundaries and eliminates hallucinated edge-case regressions.',
        metric: '100% Boundary Validation'
      },
      {
        id: 'devsecops',
        number: '05',
        title: 'DevSecOps Vulnerability Gate',
        category: 'Security',
        tech: ['SonarQube', 'Checkmarx', 'Nexus IQ'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonarqube.svg'
        ],
        role: 'Automated Security Remediation',
        description: 'Scans generated artifacts for OWASP Top 10 vulnerabilities, dependency licenses, and static code smells with automatic self-healing loops.',
        whyChosen: 'Remediates security vulnerabilities at the commit phase rather than during release, eliminating compliance friction.',
        metric: 'Zero High/Critical CVEs'
      },
      {
        id: 'hitl',
        number: '06',
        title: 'Human-In-The-Loop Delivery',
        category: 'Delivery',
        tech: ['Jenkins', 'Git & GitHub', 'Claude CLI'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        ],
        role: 'Interactive Review & Gated PRs',
        description: 'Generates clean Git pull requests with summarized diffs and rationale, awaiting final human engineer verification before automated merge.',
        whyChosen: 'Guarantees human engineers maintain complete agency and architectural oversight while eliminating 80% of routine boilerplate drafting.',
        metric: '75% SDLC Acceleration'
      }
    ]
  },
  {
    id: 'distributed',
    title: 'Distributed Event-Driven Architecture',
    shortTitle: 'Distributed Streaming',
    icon: '⚡',
    color: '#06b6d4',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600',
    borderColor: 'border-cyan-500/30',
    badge: 'Enterprise Infrastructure',
    summary: 'High-throughput, fault-tolerant ingestion pipeline combining Apache Kafka streaming, Hazelcast in-memory computing, reactive Vert.x event loops, and Spring Boot persistence.',
    stages: [
      {
        id: 'gateway',
        number: '01',
        title: 'API Gateway & Auth',
        category: 'Ingress',
        tech: ['REST / Sockets', 'SSO', 'Stateless JWT'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/auth0.svg'
        ],
        role: 'Edge Ingress & Identity Guard',
        description: 'Terminates inbound SSL/TLS, validates enterprise SSO identity tokens, and rate-limits concurrent client connections at the network edge.',
        whyChosen: 'Stateless dual-token rotation ensures instant session invalidation without central database lookups on every single microservice hop.',
        metric: '< 5ms Edge Latency'
      },
      {
        id: 'kafka',
        number: '02',
        title: 'Apache Kafka Event Log',
        category: 'Pub/Sub',
        tech: ['Apache Kafka', 'Partitioned Topics', 'Consumer Groups'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachekafka.svg'
        ],
        role: 'Distributed Durable Streaming',
        description: 'Ingests high-volume concurrent transaction events into partitioned, replicated append-only logs for reliable downstream processing.',
        whyChosen: 'Decouples high-volume burst traffic from slower transactional downstream processors, ensuring zero dropped messages under sudden spikes.',
        metric: '100k+ Msgs/Sec Throughput'
      },
      {
        id: 'hazelcast',
        number: '03',
        title: 'Hazelcast Memory Grid',
        category: 'In-Memory Compute',
        tech: ['Hazelcast', 'Distributed Cache', 'IMDG'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg'
        ],
        role: 'Low-Latency Clustered State',
        description: 'Distributes hot application state and frequently queried lookups across RAM clusters with automatic partition rebalancing and failover.',
        whyChosen: 'Sub-millisecond read/write access avoids relational database thrashing for rapidly fluctuating real-time session and transaction states.',
        metric: '< 1ms Memory Lookup'
      },
      {
        id: 'vertx',
        number: '04',
        title: 'Eclipse Vert.x Reactive Core',
        category: 'Event Loop',
        tech: ['Eclipse Vert.x', 'Non-blocking I/O', 'JVM'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vertx/vertx-original.svg'
        ],
        role: 'Asynchronous Event Handling',
        description: 'Processes asynchronous stream events on an event-driven, non-blocking reactor pattern running on the modern JVM.',
        whyChosen: 'Traditional thread-per-request architectures exhaust memory under heavy concurrency; Vert.x handles massive load with minimal OS threads.',
        metric: 'Zero Thread-Starvation'
      },
      {
        id: 'spring',
        number: '05',
        title: 'Spring Boot 3 Domain Core',
        category: 'Business Services',
        tech: ['Spring Boot 3', 'Java 21', 'JPA/Hibernate'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        ],
        role: 'Enterprise Domain Processing',
        description: 'Enforces transactional consistency, complex business validation rules, and dependency-injected enterprise service boundaries.',
        whyChosen: 'Spring ecosystem maturity offers rock-solid connection pooling, declarative @Transactional rollback guarantees, and seamless observability.',
        metric: 'ACID Guaranteed'
      },
      {
        id: 'db',
        number: '06',
        title: 'Normalized Persistence',
        category: 'Storage',
        tech: ['PostgreSQL / Supabase', 'RocksDB', 'Connection Pools'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        ],
        role: 'Durable Enterprise Storage',
        description: 'Persists structured data into normalized relational tables backed by HikariCP pooling and point-in-time recovery archives.',
        whyChosen: 'Relational integrity constraints prevent orphaned data while indexed foreign keys ensure lightning-fast join retrieval.',
        metric: '99.999% Data Durability'
      }
    ]
  },
  {
    id: 'forensics',
    title: 'Dual-Engine Forensic DeepFake Detection',
    shortTitle: 'Forensics & AI',
    icon: '👁️',
    color: '#f59e0b',
    colorFrom: 'from-amber-500',
    colorTo: 'to-orange-600',
    borderColor: 'border-amber-500/30',
    badge: '98.2% Validation Accuracy',
    summary: 'Forensic image verification pipeline combining DCT Error Level Analysis (ELA) with a deep convolutional neural model trained on 80,000+ benchmark faces.',
    stages: [
      {
        id: 'media',
        number: '01',
        title: 'Stateless Image Ingestion',
        category: 'Ingress',
        tech: ['Flask REST API', 'Stateless Memory Buffer'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
        ],
        role: 'Secure Media Ingestion',
        description: 'Accepts raw uploaded media or remote URLs, validating file headers and buffer integrity without persisting bytes to permanent disk.',
        whyChosen: 'Stateless processing ensures complete user privacy compliance, instantly purging bytes once analysis concludes.',
        metric: 'Zero Permanent Storage'
      },
      {
        id: 'ela',
        number: '02',
        title: 'Error Level Analysis (ELA)',
        category: 'Forensic Physics',
        tech: ['PIL / Pillow', '8x8 DCT Compression'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        ],
        role: 'Compression Discrepancy Extraction',
        description: 'Resaves images at known compression levels and subtracts pixel matrices to detect non-uniform JPEG error rates across spliced regions.',
        whyChosen: 'Synthetic edits and spliced facial swaps exhibit different compression artifacts compared to the surrounding authentic background.',
        metric: 'Frequency-Domain Discrepancy'
      },
      {
        id: 'vision',
        number: '03',
        title: 'Feature Extraction & Masks',
        category: 'Computer Vision',
        tech: ['OpenCV', 'Color Space Filtering'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'
        ],
        role: 'Spatial Boundary Isolation',
        description: 'Applies morphological filtering, edge sharpening, and HSV/YCrCb channel conversions to isolate synthetic boundary warping.',
        whyChosen: 'Exposes blending seams and unnatural gradients around eyes, facial boundaries, and hair fringes created by generative models.',
        metric: 'Multi-Channel Filtering'
      },
      {
        id: 'cnn',
        number: '04',
        title: 'Deep CNN Classifier',
        category: 'Deep Learning',
        tech: ['PyTorch', '80k+ Image Weights', 'TensorFlow'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
        ],
        role: 'Dual-Branch Neural Inference',
        description: 'Feeds raw tensors and ELA feature maps into convolutional neural networks trained on diverse authentic and deepfake facial datasets.',
        whyChosen: 'Dual-input branching ensures the model evaluates both high-level semantic facial realism and low-level compression discrepancies.',
        metric: '98.2% Validation Accuracy'
      },
      {
        id: 'heatmap',
        number: '05',
        title: 'Heatmap & Metric Scoring',
        category: 'Synthesis',
        tech: ['Probabilistic Scoring', 'Color Heatmaps'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        ],
        role: 'Forensic Visual Report Generation',
        description: 'Generates gradient confidence heatmaps pinpointing the exact modified pixels alongside an overall manipulation probability percentage.',
        whyChosen: 'Provides transparent, explainable forensic evidence that human investigators can visually scrutinize and audit.',
        metric: 'Instant Visual Evidence'
      }
    ]
  },
  {
    id: 'dsa',
    title: 'High-Performance Algorithmic Engine',
    shortTitle: 'Algorithms & DSA',
    icon: '🧩',
    color: '#10b981',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
    borderColor: 'border-emerald-500/30',
    badge: '1,720+ Problems Solved',
    summary: 'Systematic algorithmic problem-solving pipeline for breaking down complex competitive programming challenges into optimal time and space complexity boundaries.',
    stages: [
      {
        id: 'bounds',
        number: '01',
        title: 'Constraint Bounds Analysis',
        category: 'Decomposition',
        tech: ['Asymptotic Analysis', 'Time Complexity Budget'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        ],
        role: 'Feasible Complexity Derivation',
        description: 'Analyzes input constraints (e.g. N <= 2e5) to establish the theoretical upper bound—determining whether O(N), O(N log N), or O(1) is required.',
        whyChosen: 'Prevents wasted time on suboptimal approaches before a single line of implementation is written.',
        metric: '< 1.0s Execution Window'
      },
      {
        id: 'struct',
        number: '02',
        title: 'Advanced Data Structures',
        category: 'Modeling',
        tech: ['Segment Trees', 'Disjoint Set Union', 'Trie / Heaps'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg'
        ],
        role: 'Logarithmic State Indexing',
        description: 'Selects or synthesizes specialized data structures for range queries, disjoint set connectivity, or prefix-tree lookups.',
        whyChosen: 'Reduces brute-force O(N) linear operations to O(log N) or inverse Ackermann alpha(N) amortized time.',
        metric: 'O(log N) Range Operations'
      },
      {
        id: 'strategy',
        number: '03',
        title: 'Dynamic State Transitions',
        category: 'Strategy',
        tech: ['Dynamic Programming', 'Graph Theory', 'Greedy'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg'
        ],
        role: 'Optimal Substructure Transitions',
        description: 'Formulates state-space DAGs, multidimensional recurrence relations, or topological traversals to avoid redundant recomputation.',
        whyChosen: 'Memoization transforms exponential combinatorial search spaces into efficient polynomial-time state traversals.',
        metric: 'Zero Redundant Computations'
      },
      {
        id: 'stl',
        number: '04',
        title: 'C++ STL Zero-Overhead',
        category: 'Execution',
        tech: ['C++17 STL', 'Fast I/O', 'Cache Locality'],
        techIcons: [
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
        ],
        role: 'Minimal Overhead Runtime',
        description: 'Utilizes contiguous cache-friendly arrays, custom bitset operations, and direct memory allocation to minimize CPU instruction cycles.',
        whyChosen: 'C++ compiles directly to native machine code with zero garbage collection pauses and predictable microsecond execution.',
        metric: 'Microsecond CPU Runtime'
      },
      {
        id: 'test',
        number: '05',
        title: 'Stress Testing & Invariants',
        category: 'Verification',
        tech: ['Stress Scripting', 'Corner Case Validation'],
        techIcons: [
          'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg'
        ],
        role: 'Invariant Proof & Corner Tests',
        description: 'Automates stress testing with random case generators against naive brute-force oracles to prove corner cases and integer overflows.',
        whyChosen: 'Guarantees 100% acceptance on blind test suites by verifying edge cases (empty inputs, INT_MAX, disconnected graphs) beforehand.',
        metric: '100% First-Submission AC'
      }
    ]
  }
];

const selectedPipelineId = ref('agentic');
const selectedStageIndex = ref(0);

const currentPipeline = computed(() => {
  return pipelines.find(p => p.id === selectedPipelineId.value) || pipelines[0];
});

const currentStage = computed(() => {
  return currentPipeline.value.stages[selectedStageIndex.value] || currentPipeline.value.stages[0];
});

function selectPipeline(id) {
  selectedPipelineId.value = id;
  selectedStageIndex.value = 0;
}

function selectStage(index) {
  selectedStageIndex.value = index;
}

function nextStage() {
  if (selectedStageIndex.value < currentPipeline.value.stages.length - 1) {
    selectedStageIndex.value++;
  } else {
    selectedStageIndex.value = 0;
  }
}

function prevStage() {
  if (selectedStageIndex.value > 0) {
    selectedStageIndex.value--;
  } else {
    selectedStageIndex.value = currentPipeline.value.stages.length - 1;
  }
}
</script>

<template>
  <div class="blueprint-container relative w-full bg-slate-950/90 rounded-2xl border border-white/10 p-4 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden font-sans">
    <!-- Ambient Atmospheric Glows -->
    <div
      class="absolute -top-32 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
      :style="{ backgroundColor: currentPipeline.color + '12' }"
    />
    <div
      class="absolute -bottom-32 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-all duration-700"
      :style="{ backgroundColor: currentPipeline.color + '08' }"
    />

    <!-- Header: Scenario Selector Pills -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
      <div class="flex flex-wrap items-center gap-2">
        <button
          v-for="p in pipelines"
          :key="p.id"
          type="button"
          @click="selectPipeline(p.id)"
          class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer"
          :class="selectedPipelineId === p.id
            ? 'bg-white/10 text-white border-white/30 shadow-md ring-1'
            : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:border-white/20'"
          :style="selectedPipelineId === p.id ? { ringColor: p.color + '60' } : {}"
        >
          <span class="text-base">{{ p.icon }}</span>
          <span class="font-semibold">{{ p.shortTitle }}</span>
        </button>
      </div>

      <!-- Active Scenario Badge -->
      <div class="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border bg-slate-900/80"
        :style="{ borderColor: currentPipeline.color + '40', color: currentPipeline.color }"
      >
        <span class="inline-block w-2 h-2 rounded-full animate-pulse" :style="{ backgroundColor: currentPipeline.color }" />
        <span class="font-semibold">{{ currentPipeline.badge }}</span>
      </div>
    </div>

    <!-- Scenario Overview Summary -->
    <div class="relative z-10 mt-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Architecture Blueprint</span>
          <span class="text-xs text-slate-600">/</span>
          <span class="text-xs font-mono font-bold" :style="{ color: currentPipeline.color }">
            {{ currentPipeline.stages.length }} Connected Stages
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
          {{ currentPipeline.title }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
          {{ currentPipeline.summary }}
        </p>
      </div>

      <!-- Quick Nav Buttons -->
      <div class="flex items-center gap-2 self-start md:self-center flex-shrink-0">
        <button
          type="button"
          @click="prevStage"
          class="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          title="Previous Stage"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="text-xs font-mono text-slate-400 px-2">
          {{ selectedStageIndex + 1 }} / {{ currentPipeline.stages.length }}
        </span>
        <button
          type="button"
          @click="nextStage"
          class="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all cursor-pointer"
          title="Next Stage"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Interactive Connected Horizontal Flow Pipeline -->
    <div class="relative z-10 mt-6 overflow-x-auto pb-4 pt-2 -mx-2 px-2 custom-flow-scroll">
      <div class="flex items-stretch min-w-[760px] lg:min-w-0 justify-between gap-2 sm:gap-3">
        <template v-for="(stage, idx) in currentPipeline.stages" :key="stage.id">
          <!-- Stage Card -->
          <div
            @click="selectStage(idx)"
            class="flex-1 min-w-[130px] rounded-xl p-3 sm:p-4 border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative"
            :class="selectedStageIndex === idx
              ? 'bg-slate-900/95 shadow-xl scale-[1.02] z-10'
              : 'bg-slate-900/50 hover:bg-slate-900/80 border-white/5 hover:border-white/20'"
            :style="selectedStageIndex === idx ? {
              borderColor: currentPipeline.color + '80',
              boxShadow: `0 8px 25px -5px ${currentPipeline.color}25`
            } : {}"
          >
            <!-- Active Indicator Pip -->
            <div
              v-if="selectedStageIndex === idx"
              class="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-950 shadow-md"
              :style="{ backgroundColor: currentPipeline.color }"
            />

            <div>
              <!-- Top Row: Stage Number + Category -->
              <div class="flex items-center justify-between gap-1 mb-2">
                <span
                  class="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded"
                  :style="selectedStageIndex === idx ? {
                    backgroundColor: currentPipeline.color + '25',
                    color: currentPipeline.color
                  } : {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: '#94a3b8'
                  }"
                >
                  {{ stage.number }}
                </span>
                <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate">
                  {{ stage.category }}
                </span>
              </div>

              <!-- Stage Title -->
              <h4
                class="text-xs sm:text-sm font-bold tracking-tight leading-snug transition-colors"
                :class="selectedStageIndex === idx ? 'text-white' : 'text-slate-300 group-hover:text-white'"
              >
                {{ stage.title }}
              </h4>
            </div>

            <!-- Bottom: Primary Tech Badges -->
            <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
              <span class="text-[10px] font-mono text-slate-400 truncate max-w-[85px]">
                {{ stage.tech[0] }}
              </span>
              <div class="flex items-center -space-x-1 flex-shrink-0">
                <img
                  v-for="(iconUrl, iconIdx) in stage.techIcons.slice(0, 2)"
                  :key="iconIdx"
                  :src="iconUrl"
                  :alt="stage.tech[iconIdx]"
                  class="w-4 h-4 rounded object-contain bg-slate-800 p-0.5 border border-white/10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <!-- Flow Connector Arrow (between stages) -->
          <div
            v-if="idx < currentPipeline.stages.length - 1"
            class="flex items-center justify-center flex-shrink-0 w-4 sm:w-6 self-center relative"
          >
            <div class="w-full h-0.5 bg-slate-800 relative overflow-hidden">
              <!-- Animated glowing data packet pulse -->
              <div
                class="absolute inset-y-0 w-3 rounded-full animate-flow-pulse"
                :style="{ backgroundColor: currentPipeline.color }"
              />
            </div>
            <svg
              class="w-3 h-3 absolute right-0 -mr-1"
              :style="{ color: selectedStageIndex === idx ? currentPipeline.color : '#475569' }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </template>
      </div>
    </div>

    <!-- Detailed Stage Inspector Panel -->
    <div
      class="relative z-10 mt-6 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border shadow-xl transition-all duration-300"
      :style="{ borderColor: currentPipeline.color + '40' }"
    >
      <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/5">
        <div class="flex items-start gap-3.5">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 border shadow-sm"
            :style="{
              borderColor: currentPipeline.color + '60',
              backgroundColor: currentPipeline.color + '15',
              color: currentPipeline.color
            }"
          >
            {{ currentStage.number }}
          </div>

          <div>
            <div class="flex items-center gap-2.5 flex-wrap">
              <h4 class="text-base sm:text-lg font-bold text-white tracking-tight">
                {{ currentStage.title }}
              </h4>
              <span
                class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase font-semibold"
                :style="{
                  borderColor: currentPipeline.color + '40',
                  backgroundColor: currentPipeline.color + '15',
                  color: currentPipeline.color
                }"
              >
                {{ currentStage.category }} Stage
              </span>
            </div>
            <p class="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
              Role: {{ currentStage.role }}
            </p>
          </div>
        </div>

        <!-- Metric KPI Pill -->
        <div
          class="flex items-center gap-2 self-start md:self-center px-3.5 py-1.5 rounded-xl border font-mono text-xs font-bold"
          :style="{
            backgroundColor: currentPipeline.color + '10',
            borderColor: currentPipeline.color + '30',
            color: currentPipeline.color
          }"
        >
          <span class="w-2 h-2 rounded-full animate-ping" :style="{ backgroundColor: currentPipeline.color }" />
          <span>{{ currentStage.metric }}</span>
        </div>
      </div>

      <!-- 3-Column Architectural Breakdown -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <!-- 1. System Functionality -->
        <div class="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Stage Functionality</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ currentStage.description }}
            </p>
          </div>
        </div>

        <!-- 2. Tech Stack Deployed -->
        <div class="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>Technologies Deployed</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in currentStage.tech"
                :key="tech"
                class="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-white/10 font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- 3. Architectural Rationale -->
        <div class="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Architectural Rationale</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ currentStage.whyChosen }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blueprint-container {
  min-height: 540px;
}

@keyframes flowPulse {
  0% {
    left: -20%;
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0.2;
  }
}

.animate-flow-pulse {
  animation: flowPulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.custom-flow-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.custom-flow-scroll::-webkit-scrollbar {
  height: 4px;
}

.custom-flow-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.custom-flow-scroll::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}
</style>
