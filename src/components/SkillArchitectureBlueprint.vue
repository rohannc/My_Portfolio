<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// 4 Real-World Production Architecture Scenarios with Rich Tech Badges & Icons
const pipelines = [
  {
    id: 'agentic',
    title: 'Autonomous Multi-Agent SDLC & CI/CD Pipeline',
    shortTitle: 'Agentic CI/CD',
    icon: '🤖',
    color: '#a855f7',
    colorFrom: 'from-purple-500',
    colorTo: 'to-indigo-600',
    accent: '#c084fc',
    badge: 'Visa Production Automation',
    summary: 'Autonomous multi-agent orchestration for automated user story ingestion, cyclic state routing, TDD test synthesis, and DevSecOps vulnerability remediation with Human-in-the-Loop review.',
    stages: [
      {
        id: 'spec',
        number: '01',
        title: 'Spec & Jira Ingestion',
        category: 'Ingress',
        input: 'Jira User Story & Webhook Event',
        output: 'Normalized AST & Constraint Schema',
        role: 'Autonomous Requirement Parsing',
        description: 'Ingests user stories, acceptance criteria, and edge-cases directly from Jira into structured JSON schemas using asynchronous Python event loops.',
        whyChosen: 'Asynchronous event piping allows ingestion without blocking concurrent webhook triggers during peak sprint planning.',
        metric: '< 150ms Ingestion Latency',
        technologies: [
          { name: 'Python Asyncio', role: 'Event Loop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Jira API', role: 'Backlog Ingestion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jira.svg' },
          { name: 'Webhooks', role: 'Event Ingress', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg' }
        ]
      },
      {
        id: 'langgraph',
        number: '02',
        title: 'LangGraph State Routing',
        category: 'Orchestration',
        input: 'Normalized Requirements & Repo Context',
        output: 'Cyclic Agent Execution Graph & Checkpoints',
        role: 'Multi-Agent Cyclic State Machine',
        description: 'Orchestrates specialized sub-agents (architect, coder, reviewer) via cyclic graphs with persistent checkpoint state and rollback mechanisms.',
        whyChosen: 'Unlike linear chains, LangGraph allows conditional loops where code failing validation routes back to the authoring agent with compiler feedback.',
        metric: 'Persistent State Checkpoints',
        technologies: [
          { name: 'LangGraph', role: 'Cyclic State Routing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg' },
          { name: 'Python 3.11+', role: 'Agent Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Multi-Agent', role: 'Role Separation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg' }
        ]
      },
      {
        id: 'mcp',
        number: '03',
        title: 'MCP Standardized Tooling',
        category: 'Environment',
        input: 'Tool Invocation Requests (Read/Write/Exec)',
        output: 'Sandboxed Context & Diff Patches',
        role: 'Decoupled Environment Interfacing',
        description: 'Interfaces agents with code repositories, schema definitions, and shell runtimes through the Anthropic Model Context Protocol specification.',
        whyChosen: 'Standardized client/server protocol decouples agent reasoning from host execution, ensuring zero leaked API keys and sandboxed command execution.',
        metric: 'Zero-Privilege Sandboxing',
        technologies: [
          { name: 'MCP Protocol', role: 'Context Protocol', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' },
          { name: 'Claude CLI', role: 'Autonomous Execution', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' },
          { name: 'Claude Skills', role: 'Tool Registry', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' }
        ]
      },
      {
        id: 'tdd',
        number: '04',
        title: 'TDD Test Generation',
        category: 'Verification',
        input: 'Behavioral Contract & Method Signatures',
        output: 'Automated Regression Suite (Red Phase)',
        role: 'Behavioral Test Boundary Synthesis',
        description: 'Synthesizes exhaustive test suites and mocks edge cases before implementation code is allowed to compile or execute.',
        whyChosen: 'Enforcing TDD guarantees every agent-authored method has strict behavioral boundaries and eliminates hallucinated edge-case regressions.',
        metric: '100% Boundary Validation',
        technologies: [
          { name: 'JUnit 5', role: 'Java Unit Testing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/junit5.svg' },
          { name: 'PyTest', role: 'Python Testing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
          { name: 'TDD', role: 'Contract Enforcement', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' }
        ]
      },
      {
        id: 'devsecops',
        number: '05',
        title: 'DevSecOps Vulnerability Gate',
        category: 'Security Gate',
        input: 'Candidate Patches & Dependency Manifests',
        output: 'SAST Audit Report & Automated Remediation',
        role: 'Automated Security Remediation',
        description: 'Scans generated artifacts for OWASP Top 10 vulnerabilities, dependency licenses, and static code smells with automatic self-healing loops.',
        whyChosen: 'Remediates security vulnerabilities at the commit phase rather than during release, eliminating compliance friction.',
        metric: 'Zero High/Critical CVEs',
        technologies: [
          { name: 'SonarQube', role: 'Static Code Analysis', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonarqube.svg' },
          { name: 'Checkmarx', role: 'SAST Security Gate', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/securityscorecard.svg' },
          { name: 'Nexus IQ', role: 'Open Source Governance', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonatype.svg' }
        ]
      },
      {
        id: 'hitl',
        number: '06',
        title: 'Human-In-The-Loop Delivery',
        category: 'Release',
        input: 'Verified Clean Branch & Summary Brief',
        output: 'Reviewed PR & Automated Pipeline Trigger',
        role: 'Interactive Review & Gated PRs',
        description: 'Generates clean Git pull requests with summarized diffs and rationale, awaiting final human engineer verification before automated merge.',
        whyChosen: 'Guarantees human engineers maintain complete agency and architectural oversight while eliminating 80% of routine boilerplate drafting.',
        metric: '75% SDLC Acceleration',
        technologies: [
          { name: 'Jenkins', role: 'CI/CD Pipelines', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
          { name: 'Git & GitHub', role: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'GitHub Actions', role: 'Workflow Automation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubactions.svg' }
        ]
      }
    ]
  },
  {
    id: 'distributed',
    title: 'High-Throughput Distributed Microservices Architecture',
    shortTitle: 'Distributed Streaming',
    icon: '⚡',
    color: '#06b6d4',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600',
    accent: '#22d3ee',
    badge: 'Enterprise Infrastructure',
    summary: 'Resilient event-driven ingestion pipeline combining Apache Kafka streaming, Hazelcast in-memory computing, reactive Vert.x event loops, and Spring Boot persistence.',
    stages: [
      {
        id: 'gateway',
        number: '01',
        title: 'API Gateway & Auth',
        category: 'Ingress',
        input: 'Encrypted HTTPS / WebSocket Requests',
        output: 'Validated JWT Session & Rate-Metered Stream',
        role: 'Edge Ingress & Identity Guard',
        description: 'Terminates inbound SSL/TLS, validates enterprise SSO identity tokens, and rate-limits concurrent client connections at the network edge.',
        whyChosen: 'Stateless dual-token rotation ensures instant session invalidation without central database lookups on every single microservice hop.',
        metric: '< 5ms Edge Latency',
        technologies: [
          { name: 'Auth0 / SSO', role: 'Identity Provider', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/auth0.svg' },
          { name: 'Stateless JWT', role: 'Dual-Token Rotation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jsonwebtokens.svg' },
          { name: 'REST / Sockets', role: 'Gateway Routing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg' }
        ]
      },
      {
        id: 'kafka',
        number: '02',
        title: 'Apache Kafka Event Log',
        category: 'Pub/Sub',
        input: 'Concurrent Transaction Ingestion Events',
        output: 'Partitioned Append-Only Immutable Records',
        role: 'Distributed Durable Streaming',
        description: 'Ingests high-volume concurrent transaction events into partitioned, replicated append-only logs for reliable downstream processing.',
        whyChosen: 'Decouples high-volume burst traffic from slower transactional downstream processors, ensuring zero dropped messages under sudden spikes.',
        metric: '100k+ Msgs/Sec Throughput',
        technologies: [
          { name: 'Apache Kafka', role: 'Distributed Event Log', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachekafka.svg' },
          { name: 'Partitioned Topics', role: 'Parallel Consumption', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apache.svg' },
          { name: 'Docker / K8s', role: 'Cluster Deployments', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
        ]
      },
      {
        id: 'hazelcast',
        number: '03',
        title: 'Hazelcast Memory Grid',
        category: 'In-Memory Compute',
        input: 'Partition Keys & Distributed State Lookups',
        output: 'Sub-Millisecond In-Memory Object State',
        role: 'Low-Latency Clustered State',
        description: 'Distributes hot application state and frequently queried lookups across RAM clusters with automatic partition rebalancing and failover.',
        whyChosen: 'Sub-millisecond read/write access avoids relational database thrashing for rapidly fluctuating real-time session and transaction states.',
        metric: '< 1ms Memory Lookup',
        technologies: [
          { name: 'Hazelcast IMDG', role: 'In-Memory Compute Grid', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg' },
          { name: 'Distributed Cache', role: 'Low-Latency Store', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
          { name: 'Cluster Sync', role: 'Partition Rebalancing', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
        ]
      },
      {
        id: 'vertx',
        number: '04',
        title: 'Eclipse Vert.x Reactive Core',
        category: 'Event Loop',
        input: 'Asynchronous Stream Events',
        output: 'Non-Blocking Processed Event Futures',
        role: 'Asynchronous Event Handling',
        description: 'Processes asynchronous stream events on an event-driven, non-blocking reactor pattern running on the modern JVM.',
        whyChosen: 'Traditional thread-per-request architectures exhaust memory under heavy concurrency; Vert.x handles massive load with minimal OS threads.',
        metric: 'Zero Thread-Starvation',
        technologies: [
          { name: 'Eclipse Vert.x', role: 'Reactive Event Loop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vertx/vertx-original.svg' },
          { name: 'Java 21', role: 'Modern JVM Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Non-Blocking I/O', role: 'Reactor Pattern', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
        ]
      },
      {
        id: 'spring',
        number: '05',
        title: 'Spring Boot 3 Domain Core',
        category: 'Business Services',
        input: 'Decoded Event Payloads & Commands',
        output: 'ACID Transaction Logs & Audited State',
        role: 'Enterprise Domain Processing',
        description: 'Enforces transactional consistency, complex business validation rules, and dependency-injected enterprise service boundaries.',
        whyChosen: 'Spring ecosystem maturity offers rock-solid connection pooling, declarative @Transactional rollback guarantees, and seamless observability.',
        metric: 'ACID Guaranteed',
        technologies: [
          { name: 'Spring Boot 3', role: 'Enterprise Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
          { name: 'Hibernate / JPA', role: 'ORM & Query Mapping', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hibernate.svg' },
          { name: 'Maven', role: 'Build Architecture', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' }
        ]
      },
      {
        id: 'db',
        number: '06',
        title: 'Normalized Persistence',
        category: 'Storage',
        input: 'Validated Domain Entities',
        output: 'Replicated Relational Commit & WAL Archive',
        role: 'Durable Enterprise Storage',
        description: 'Persists structured data into normalized relational tables backed by HikariCP pooling and point-in-time recovery archives.',
        whyChosen: 'Relational integrity constraints prevent orphaned data while indexed foreign keys ensure lightning-fast join retrieval.',
        metric: '99.999% Data Durability',
        technologies: [
          { name: 'PostgreSQL', role: 'ACID Relational Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'Supabase Cloud', role: 'Cloud Persistence', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/supabase.svg' },
          { name: 'RocksDB', role: 'Key-Value Engine', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg' }
        ]
      }
    ]
  },
  {
    id: 'forensics',
    title: 'Dual-Engine Forensic DeepFake Detection Pipeline',
    shortTitle: 'Forensics & AI',
    icon: '👁️',
    color: '#f59e0b',
    colorFrom: 'from-amber-500',
    colorTo: 'to-orange-600',
    accent: '#fbbf24',
    badge: '98.2% Validation Accuracy',
    summary: 'Forensic image verification pipeline combining DCT Error Level Analysis (ELA) with a deep convolutional neural model trained on 80,000+ benchmark faces.',
    stages: [
      {
        id: 'media',
        number: '01',
        title: 'Stateless Image Ingestion',
        category: 'Ingress',
        input: 'Raw Image Stream (Upload / Remote URL)',
        output: 'Validated In-Memory Byte Tensor',
        role: 'Secure Media Ingestion',
        description: 'Accepts raw uploaded media or remote URLs, validating file headers and buffer integrity without persisting bytes to permanent disk.',
        whyChosen: 'Stateless processing ensures complete user privacy compliance, instantly purging bytes once analysis concludes.',
        metric: 'Zero Permanent Storage',
        technologies: [
          { name: 'Flask REST API', role: 'Micro-Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
          { name: 'Python 3', role: 'Runtime Engine', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Memory Buffer', role: 'Stateless Security', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/securityscorecard.svg' }
        ]
      },
      {
        id: 'ela',
        number: '02',
        title: 'Error Level Analysis (ELA)',
        category: 'Forensics',
        input: 'Lossless RGB Pixel Matrix',
        output: '8x8 DCT Compression Discrepancy Map',
        role: 'Compression Discrepancy Extraction',
        description: 'Resaves images at known compression levels and subtracts pixel matrices to detect non-uniform JPEG error rates across spliced regions.',
        whyChosen: 'Synthetic edits and spliced facial swaps exhibit different compression artifacts compared to the surrounding authentic background.',
        metric: 'Frequency-Domain Discrepancy',
        technologies: [
          { name: 'Pillow / PIL', role: 'Image Processing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pypi.svg' },
          { name: 'JPEG DCT', role: 'Frequency Analysis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'NumPy', role: 'Array Computations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
        ]
      },
      {
        id: 'vision',
        number: '03',
        title: 'Feature Extraction & Masks',
        category: 'Vision',
        input: 'Color Channels & ELA Matrices',
        output: 'Morphological Artifact Masks',
        role: 'Spatial Boundary Isolation',
        description: 'Applies morphological filtering, edge sharpening, and HSV/YCrCb channel conversions to isolate synthetic boundary warping.',
        whyChosen: 'Exposes blending seams and unnatural gradients around eyes, facial boundaries, and hair fringes created by generative models.',
        metric: 'Multi-Channel Filtering',
        technologies: [
          { name: 'OpenCV', role: 'Computer Vision', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'Color Space Masks', role: 'HSV/YCrCb Filters', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'Edge Morphing', role: 'Gradient Laplacian', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' }
        ]
      },
      {
        id: 'cnn',
        number: '04',
        title: 'Deep CNN Classifier',
        category: 'Deep Learning',
        input: 'Dual-Branch Input: Raw Image + ELA Map',
        output: 'Logits & Latent Anomaly Embeddings',
        role: 'Dual-Branch Neural Inference',
        description: 'Feeds raw tensors and ELA feature maps into convolutional neural networks trained on diverse authentic and deepfake facial datasets.',
        whyChosen: 'Dual-input branching ensures the model evaluates both high-level semantic facial realism and low-level compression discrepancies.',
        metric: '98.2% Validation Accuracy',
        technologies: [
          { name: 'PyTorch', role: 'Neural Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
          { name: 'TensorFlow', role: 'Model Architecture', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'Scikit-Learn', role: 'Evaluation Metrics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' }
        ]
      },
      {
        id: 'heatmap',
        number: '05',
        title: 'Heatmap & Metric Scoring',
        category: 'Synthesis',
        input: 'Model Probability Logits',
        output: 'Visual Heatmap & Explainable Report',
        role: 'Forensic Visual Report Generation',
        description: 'Generates gradient confidence heatmaps pinpointing the exact modified pixels alongside an overall manipulation probability percentage.',
        whyChosen: 'Provides transparent, explainable forensic evidence that human investigators can visually scrutinize and audit.',
        metric: 'Instant Visual Evidence',
        technologies: [
          { name: 'Matplotlib', role: 'Heatmap Plotting', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/plotly.svg' },
          { name: 'Vue 3 UI', role: 'Frontend Presentation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
          { name: 'Tailwind CSS', role: 'Report Styling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
        ]
      },
      {
        id: 'audit',
        number: '06',
        title: 'Forensic Audit & Wiping',
        category: 'Compliance',
        input: 'Generated Evidence Record',
        output: 'Audited Verdict & Memory Purge',
        role: 'Privacy-Preserving Destruction',
        description: 'Cryptographically seals the diagnostic confidence score, formats the client response, and aggressively overwrites volatile memory buffers.',
        whyChosen: 'Ensures zero sensitive biometric data persists in RAM or caches following diagnosis, strictly adhering to global forensic privacy standards.',
        metric: 'Zero-Retention Guarantee',
        technologies: [
          { name: 'Secure Wipe', role: 'Memory Overwrite', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/securityscorecard.svg' },
          { name: 'JSON REST', role: 'Verdict Payload', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg' },
          { name: 'Docker', role: 'Isolated Container', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
        ]
      }
    ]
  },
  {
    id: 'dsa',
    title: 'High-Performance Algorithmic Synthesis & Optimization',
    shortTitle: 'Algorithms & DSA',
    icon: '🧩',
    color: '#10b981',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
    accent: '#34d399',
    badge: '1,720+ Problems Solved',
    summary: 'Systematic algorithmic problem-solving pipeline for breaking down complex competitive programming challenges into optimal time and space complexity boundaries.',
    stages: [
      {
        id: 'bounds',
        number: '01',
        title: 'Constraint Bounds Analysis',
        category: 'Analysis',
        input: 'Problem Bounds (N <= 2e5, Q <= 1e5)',
        output: 'Time/Memory Budget: O(N log N) / 256MB',
        role: 'Feasible Complexity Derivation',
        description: 'Analyzes input constraints (e.g. N <= 2e5) to establish the theoretical upper bound—determining whether O(N), O(N log N), or O(1) is required.',
        whyChosen: 'Prevents wasted time on suboptimal approaches before a single line of implementation is written.',
        metric: '< 1.0s Execution Window',
        technologies: [
          { name: 'C++17', role: 'Competitive Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Complexity Math', role: 'Asymptotics', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'Bit Tricks', role: 'O(1) Evaluation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
        ]
      },
      {
        id: 'struct',
        number: '02',
        title: 'Advanced Data Structures',
        category: 'Modeling',
        input: 'Continuous Interval Queries & Mutex Ops',
        output: 'Segment Tree / Disjoint Set Graph Topology',
        role: 'Logarithmic State Indexing',
        description: 'Selects or synthesizes specialized data structures for range queries, disjoint set connectivity, or prefix-tree lookups.',
        whyChosen: 'Reduces brute-force O(N) linear operations to O(log N) or inverse Ackermann alpha(N) amortized time.',
        metric: 'O(log N) Range Operations',
        technologies: [
          { name: 'Segment Trees', role: 'Range Queries', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'Disjoint Sets', role: 'Connectivity Union', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'Trie / Heaps', role: 'Prefix Indexing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
        ]
      },
      {
        id: 'strategy',
        number: '03',
        title: 'Dynamic State Transitions',
        category: 'Strategy',
        input: 'Overlapping Subproblems & Invariants',
        output: 'Recurrence Equation & Memoization Table',
        role: 'Optimal Substructure Transitions',
        description: 'Formulates state-space DAGs, multidimensional recurrence relations, or topological traversals to avoid redundant recomputation.',
        whyChosen: 'Memoization transforms exponential combinatorial search spaces into efficient polynomial-time state traversals.',
        metric: 'Zero Redundant Computations',
        technologies: [
          { name: 'Dynamic Prog', role: 'Memoization Tables', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'Graph Theory', role: 'Dijkstra / TopoSort', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'Two Pointers', role: 'Sliding Windows', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
        ]
      },
      {
        id: 'stl',
        number: '04',
        title: 'C++ STL Zero-Overhead',
        category: 'Execution',
        input: 'Mathematical Equations & Recurrences',
        output: 'Cache-Friendly Binary Machine Code',
        role: 'Minimal Overhead Runtime',
        description: 'Utilizes contiguous cache-friendly arrays, custom bitset operations, and direct memory allocation to minimize CPU instruction cycles.',
        whyChosen: 'C++ compiles directly to native machine code with zero garbage collection pauses and predictable microsecond execution.',
        metric: 'Microsecond CPU Runtime',
        technologies: [
          { name: 'C++ STL Containers', role: 'Vectors & Maps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Fast I/O', role: 'Stream Optimization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
          { name: 'Cache Locality', role: 'Memory Optimization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
        ]
      },
      {
        id: 'test',
        number: '05',
        title: 'Stress Testing & Invariants',
        category: 'Proof',
        input: 'Corner Bounds, INT_MAX, Empty/Disconnected Inputs',
        output: 'Automated 10,000-Case Oracle Verification',
        role: 'Invariant Proof & Corner Tests',
        description: 'Automates stress testing with random case generators against naive brute-force oracles to prove corner cases and integer overflows.',
        whyChosen: 'Guarantees 100% acceptance on blind test suites by verifying edge cases (empty inputs, INT_MAX, disconnected graphs) beforehand.',
        metric: '100% First-Submission AC',
        technologies: [
          { name: 'Stress Scripting', role: 'Automated Generators', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg' },
          { name: 'Oracle Verifier', role: 'Brute-Force Check', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' },
          { name: 'Invariants', role: 'Mathematical Proof', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' }
        ]
      },
      {
        id: 'submission',
        number: '06',
        title: 'Production Contest Submission',
        category: 'Victory',
        input: 'Optimized Source Code (C++ / Java)',
        output: '0ms Accepted (AC) Verdict',
        role: 'Algorithmic Mastery & Speed',
        description: 'Deploys clean, modular code to online judges, achieving consistent 99th-percentile runtimes and optimal memory consumption.',
        whyChosen: 'Over 1,720 problems solved across LeetCode, Codeforces, and GeeksforGeeks demonstrate sustained problem-solving discipline.',
        metric: '1,720+ Total Solved',
        technologies: [
          { name: 'LeetCode', role: 'Online Judge', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'GeeksforGeeks', role: 'Platform Mastery', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' },
          { name: 'Codeforces', role: 'Global Contests', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/codeforces.svg' }
        ]
      }
    ]
  }
];

const selectedPipelineId = ref('agentic');
const selectedStageIndex = ref(0);
const isSimulating = ref(false);
let simulationTimer = null;

const currentPipeline = computed(() => {
  return pipelines.find(p => p.id === selectedPipelineId.value) || pipelines[0];
});

const currentStage = computed(() => {
  return currentPipeline.value.stages[selectedStageIndex.value] || currentPipeline.value.stages[0];
});

function selectPipeline(id) {
  stopSimulation();
  selectedPipelineId.value = id;
  selectedStageIndex.value = 0;
}

function selectStage(index) {
  selectedStageIndex.value = index;
}

function toggleSimulation() {
  if (isSimulating.value) {
    stopSimulation();
  } else {
    startSimulation();
  }
}

function startSimulation() {
  isSimulating.value = true;
  if (simulationTimer) clearInterval(simulationTimer);
  simulationTimer = setInterval(() => {
    if (selectedStageIndex.value < currentPipeline.value.stages.length - 1) {
      selectedStageIndex.value++;
    } else {
      selectedStageIndex.value = 0;
    }
  }, 2400);
}

function stopSimulation() {
  isSimulating.value = false;
  if (simulationTimer) {
    clearInterval(simulationTimer);
    simulationTimer = null;
  }
}

function nextStage() {
  stopSimulation();
  if (selectedStageIndex.value < currentPipeline.value.stages.length - 1) {
    selectedStageIndex.value++;
  } else {
    selectedStageIndex.value = 0;
  }
}

function prevStage() {
  stopSimulation();
  if (selectedStageIndex.value > 0) {
    selectedStageIndex.value--;
  } else {
    selectedStageIndex.value = currentPipeline.value.stages.length - 1;
  }
}

onUnmounted(() => {
  stopSimulation();
});
</script>

<template>
  <div class="circuit-blueprint relative w-full bg-[#070b14] rounded-3xl border border-white/10 p-5 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden font-sans">
    
    <!-- Precision Engineering Blueprint Dot Grid -->
    <div class="absolute inset-0 blueprint-dot-grid pointer-events-none opacity-40" />

    <!-- Corner Engineering Crosshairs -->
    <div class="absolute top-3 left-3 text-cyan-400/40 text-xs font-mono pointer-events-none select-none">+</div>
    <div class="absolute top-3 right-3 text-cyan-400/40 text-xs font-mono pointer-events-none select-none">+</div>
    <div class="absolute bottom-3 left-3 text-cyan-400/40 text-xs font-mono pointer-events-none select-none">+</div>
    <div class="absolute bottom-3 right-3 text-cyan-400/40 text-xs font-mono pointer-events-none select-none">+</div>

    <!-- Atmospheric Radiant Ambient Glows -->
    <div
      class="absolute -top-36 left-16 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-20"
      :style="{ backgroundColor: currentPipeline.color }"
    />
    <div
      class="absolute -bottom-36 right-16 w-[450px] h-[450px] rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-15"
      :style="{ backgroundColor: currentPipeline.color }"
    />

    <!-- Header Telemetry Bar -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 text-xs font-mono">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-cyan-400 font-semibold tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYS_ARCH.V3
        </span>
        <span class="text-slate-400 hidden sm:inline">
          PRODUCTION ARCHITECTURE BLUEPRINT
        </span>
      </div>

      <div class="flex items-center gap-3">
        <!-- Live Trace Simulator Toggle -->
        <button
          type="button"
          @click="toggleSimulation"
          class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono font-semibold transition-all cursor-pointer shadow-sm"
          :class="isSimulating
            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
            : 'bg-slate-900/80 text-slate-300 border-white/10 hover:text-white hover:border-white/30'"
        >
          <span
            class="w-2 h-2 rounded-full"
            :class="isSimulating ? 'bg-cyan-400 animate-ping' : 'bg-slate-500'"
          />
          <span>{{ isSimulating ? 'PAUSE SIMULATION' : '⚡ SIMULATE FLOW' }}</span>
        </button>
      </div>
    </div>

    <!-- Scenario Selector Pills (Segmented Dock) -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-inner">
        <button
          v-for="p in pipelines"
          :key="p.id"
          type="button"
          @click="selectPipeline(p.id)"
          class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer relative"
          :class="selectedPipelineId === p.id
            ? 'bg-white/10 text-white shadow-lg border border-white/20'
            : 'text-slate-400 hover:text-white border border-transparent'"
        >
          <span class="text-base">{{ p.icon }}</span>
          <span class="font-semibold">{{ p.shortTitle }}</span>
          <span
            v-if="selectedPipelineId === p.id"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
            :style="{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}` }"
          />
        </button>
      </div>

      <!-- Domain Badge -->
      <div
        class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold self-start md:self-center"
        :style="{
          backgroundColor: currentPipeline.color + '15',
          borderColor: currentPipeline.color + '40',
          color: currentPipeline.accent
        }"
      >
        <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: currentPipeline.color }" />
        <span>{{ currentPipeline.badge }}</span>
      </div>
    </div>

    <!-- Pipeline Title and Description -->
    <div class="relative z-10 mt-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <div>
        <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
          <span>{{ currentPipeline.title }}</span>
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
          {{ currentPipeline.summary }}
        </p>
      </div>

      <!-- Stepper Controls -->
      <div class="flex items-center gap-2 self-start md:self-center flex-shrink-0">
        <button
          type="button"
          @click="prevStage"
          class="p-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-sm"
          title="Previous Stage"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 font-semibold">
          STAGE {{ selectedStageIndex + 1 }} / {{ currentPipeline.stages.length }}
        </span>
        <button
          type="button"
          @click="nextStage"
          class="p-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-sm"
          title="Next Stage"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 3 × 2 SPACIOUS ARCHITECTURE CIRCUIT GRID (Option A) -->
    <!-- Replaces congested 6-column line with spacious 3-col x 2-row layout where each stage is wide and prominent -->
    <div class="relative z-10 mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="(stage, idx) in currentPipeline.stages"
        :key="stage.id"
        @click="selectStage(idx)"
        class="stage-card rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
        :class="selectedStageIndex === idx
          ? 'is-active bg-slate-900/95 shadow-2xl scale-[1.02] z-20'
          : 'bg-slate-950/75 hover:bg-slate-900/75 border-white/10 hover:border-white/20'"
        :style="selectedStageIndex === idx ? {
          borderColor: currentPipeline.color,
          boxShadow: `0 14px 40px -8px ${currentPipeline.color}40, 0 0 0 1px ${currentPipeline.color}80`
        } : {}"
      >
        <!-- Top Neon Circuit Accent Line -->
        <div
          class="absolute top-0 inset-x-0 h-1 transition-all duration-300"
          :style="{
            backgroundColor: selectedStageIndex === idx ? currentPipeline.color : 'transparent',
            boxShadow: selectedStageIndex === idx ? `0 0 12px ${currentPipeline.color}` : 'none'
          }"
        />

        <!-- Top Header of Card: Stage Number + Status Badge + Category -->
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span
                class="text-xs font-mono font-extrabold px-2 py-0.5 rounded transition-colors"
                :style="selectedStageIndex === idx ? {
                  backgroundColor: currentPipeline.color,
                  color: '#070b14'
                } : {
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#94a3b8'
                }"
              >
                STAGE {{ stage.number }}
              </span>

              <!-- Live Dual-Layer Radar Pill in Theme Color -->
              <span
                v-if="selectedStageIndex === idx"
                class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border transition-all duration-300 shadow-sm"
                :style="{
                  backgroundColor: currentPipeline.color + '18',
                  borderColor: currentPipeline.color + '50',
                  color: currentPipeline.accent
                }"
              >
                <span class="relative flex h-2 w-2">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    :style="{ backgroundColor: currentPipeline.color }"
                  />
                  <span
                    class="relative inline-flex rounded-full h-2 w-2"
                    :style="{ backgroundColor: currentPipeline.color }"
                  />
                </span>
                <span>ACTIVE</span>
              </span>
            </div>

            <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/5">
              {{ stage.category }}
            </span>
          </div>

          <!-- Stage Title -->
          <h4
            class="text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors"
            :class="selectedStageIndex === idx ? 'text-white' : 'text-slate-200 group-hover:text-white'"
          >
            {{ stage.title }}
          </h4>
          <p class="text-xs font-mono text-cyan-300/80 mt-1">
            {{ stage.role }}
          </p>

          <!-- Stage Description Snippet -->
          <p class="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
            {{ stage.description }}
          </p>
        </div>

        <!-- Middle: PROMINENT VISIBLE TECH STACK SHELF -->
        <div class="mt-4 pt-3.5 border-t border-white/10">
          <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
            Technologies Deployed
          </div>

          <div class="flex flex-wrap gap-2">
            <div
              v-for="tech in stage.technologies"
              :key="tech.name"
              class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-200 shadow-sm hover:border-cyan-400/40 transition-colors"
            >
              <!-- Large Visible 20px Tech Icon -->
              <img
                :src="tech.icon"
                :alt="tech.name"
                class="w-5 h-5 object-contain flex-shrink-0"
                loading="lazy"
              />
              <span class="font-semibold text-slate-100">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom: Metric SLA Footer -->
        <div class="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
          <span class="text-slate-400 text-[11px]">SLA Target</span>
          <span
            class="font-bold text-[11px] px-2 py-0.5 rounded"
            :style="{
              backgroundColor: currentPipeline.color + '15',
              color: currentPipeline.accent
            }"
          >
            {{ stage.metric }}
          </span>
        </div>
      </div>
    </div>

    <!-- Architecture Telemetry & Spec Inspector (Console Style) -->
    <div
      class="telemetry-console relative z-10 mt-8 rounded-2xl bg-slate-950/90 border shadow-2xl transition-all duration-300 overflow-hidden"
      :style="{ borderColor: currentPipeline.color + '50' }"
    >
      <!-- Telemetry Console Top Window Bar -->
      <div class="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <!-- Terminal Status Lights -->
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span class="text-xs font-mono font-bold text-slate-300">
            STAGE_TELEMETRY // {{ currentStage.number }}_{{ currentStage.title.toUpperCase().replace(/\s+/g, '_') }}
          </span>
        </div>

        <div class="flex items-center gap-3">
          <!-- Live Execution Status Badge in Theme Color -->
          <div
            class="flex items-center gap-2 px-2.5 py-1 rounded-lg border text-[11px] font-mono font-semibold"
            :style="{
              backgroundColor: currentPipeline.color + '15',
              borderColor: currentPipeline.color + '40',
              color: currentPipeline.accent
            }"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                :style="{ backgroundColor: currentPipeline.color }"
              />
              <span
                class="relative inline-flex rounded-full h-2 w-2"
                :style="{ backgroundColor: currentPipeline.color }"
              />
            </span>
            <span>EXECUTION_STATE: ACTIVE</span>
          </div>

          <!-- KPI Metric Pill -->
          <div
            class="flex items-center gap-2 px-3 py-1 rounded-lg border font-mono text-xs font-bold shadow-sm"
            :style="{
              backgroundColor: currentPipeline.color + '20',
              borderColor: currentPipeline.color + '50',
              color: currentPipeline.accent
            }"
          >
            <span>{{ currentStage.metric }}</span>
          </div>
        </div>
      </div>

      <!-- Telemetry Console Body: 3 Structured Engineering Panes -->
      <div class="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        <!-- Pane 1: Execution Mechanics & I/O Contract -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Execution Contract & I/O</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {{ currentStage.description }}
            </p>

            <!-- Input/Output Schemas -->
            <div class="space-y-2 text-xs font-mono pt-3 border-t border-white/10">
              <div class="flex items-start gap-2">
                <span class="text-cyan-400 font-bold flex-shrink-0">IN:</span>
                <span class="text-slate-300 break-words">{{ currentStage.input }}</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold flex-shrink-0">OUT:</span>
                <span class="text-slate-300 break-words">{{ currentStage.output }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pane 2: Deployed Stack with Large Prominent Icons -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Technologies Deployed</span>
            </div>

            <p class="text-xs font-mono text-slate-400 mb-3">
              Role: <span class="text-slate-200 font-semibold">{{ currentStage.role }}</span>
            </p>

            <div class="flex flex-col gap-2">
              <div
                v-for="tech in currentStage.technologies"
                :key="tech.name"
                class="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-white/10 text-xs font-mono text-slate-200 shadow-sm"
              >
                <div class="flex items-center gap-2.5">
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-6 h-6 object-contain p-0.5 bg-slate-900 rounded"
                    loading="lazy"
                  />
                  <span class="font-bold text-white">{{ tech.name }}</span>
                </div>
                <span class="text-[11px] text-slate-400 font-mono">{{ tech.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pane 3: Architectural Rationale & Tradeoffs -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Architectural Rationale</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ currentStage.whyChosen }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>STAGE VERIFIED</span>
            <span class="text-emerald-400 font-semibold">100% HEALTH</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.circuit-blueprint {
  min-height: 560px;
}

/* Precision Engineering Dot Matrix Background */
.blueprint-dot-grid {
  background-size: 24px 24px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
}
</style>
