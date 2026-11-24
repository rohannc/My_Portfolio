<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// 4 Real-World Pipelines Strictly Grounded in Rohan's Profile & Experience
const pipelines = [
  {
    id: 'agentic',
    title: 'Autonomous AI Agents & CI/CD Pipeline',
    shortTitle: 'AI Agents & CI/CD',
    icon: '🤖',
    color: '#a855f7',
    colorFrom: 'from-purple-500',
    colorTo: 'to-indigo-600',
    accent: '#c084fc',
    badge: 'Visa Production Experience',
    summary: 'Optimizing the SDLC using autonomous AI agents with Python Asyncio, LangGraph, and MCP to automate Jira requirement extraction, TDD implementation, and security vulnerability remediation with Human-in-the-Loop review.',
    stages: [
      {
        id: 'spec',
        number: '01',
        title: 'Jira Requirement Extraction',
        category: 'Ingress',
        input: 'Jira User Story & Acceptance Criteria',
        output: 'Structured Requirements & Task Schema',
        role: 'Autonomous Requirement Extraction',
        description: 'Extracts user stories, acceptance criteria, and technical requirements directly from Jira using asynchronous Python event loops to prepare automated development tasks.',
        whyChosen: 'Automates manual requirement parsing and eliminates sprint kickoff delays without human bottlenecks.',
        metric: 'Automated Extraction',
        technologies: [
          { name: 'Python Asyncio', role: 'Async Event Handling', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Jira Automation', role: 'Issue Tracking API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jira.svg' },
          { name: 'Git', role: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
        ]
      },
      {
        id: 'langgraph',
        number: '02',
        title: 'LangGraph Agent Orchestration',
        category: 'Orchestration',
        input: 'Extracted Requirements & Codebase Context',
        output: 'Multi-Step Execution Graph with Checkpoints',
        role: 'Stateful Agent Workflows',
        description: 'Orchestrates autonomous agents through cyclic state graphs, allowing agents to iteratively draft solutions, inspect compiler output, and self-correct logic.',
        whyChosen: 'State graphs provide checkpoints and cyclic loops so agents can retry and fix errors based on test feedback.',
        metric: 'Stateful Checkpoints',
        technologies: [
          { name: 'LangGraph', role: 'Stateful Agent Routing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/langchain.svg' },
          { name: 'Python', role: 'Core Agent Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'Autonomous Agents', role: 'Workflow Automation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg' }
        ]
      },
      {
        id: 'mcp',
        number: '03',
        title: 'Model Context Protocol (MCP)',
        category: 'Tooling',
        input: 'Agent Tool Calls & File System Queries',
        output: 'Repository Inspection & Code Modifications',
        role: 'Standardized Tool Integration',
        description: 'Connects autonomous agents with development environments, code repositories, and execution tools using Anthropic\'s Model Context Protocol (MCP).',
        whyChosen: 'Provides a standardized, secure interface for agents to read files, run terminal commands, and apply code patches.',
        metric: 'Standardized Tooling',
        technologies: [
          { name: 'Model Context Protocol', role: 'MCP Client/Server', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' },
          { name: 'Claude CLI', role: 'Agent CLI Tooling', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' },
          { name: 'Claude Skills', role: 'Reusable Skills', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg' }
        ]
      },
      {
        id: 'tdd',
        number: '04',
        title: 'Test-Driven Development (TDD)',
        category: 'Testing',
        input: 'Method Contracts & Functional Specifications',
        output: 'Passing Unit & Integration Test Suites',
        role: 'Automated Test Implementation',
        description: 'Enforces strict Test-Driven Development (TDD) by writing unit and integration tests to validate software behavior and prevent edge-case regressions.',
        whyChosen: 'Guarantees that newly generated features adhere to expected contracts and pass automated test suites before committing.',
        metric: 'High Test Coverage',
        technologies: [
          { name: 'JUnit 5', role: 'Java Unit Testing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/junit5.svg' },
          { name: 'PyTest', role: 'Python Test Suite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg' },
          { name: 'TDD Methodology', role: 'Quality Assurance', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' }
        ]
      },
      {
        id: 'devsecops',
        number: '05',
        title: 'Automated Security Remediation',
        category: 'Security',
        input: 'Generated Pull Requests & Code Patches',
        output: 'Vulnerability Scan & Remediation Patches',
        role: 'DevSecOps Quality Gate',
        description: 'Integrates enterprise scanning tools directly into the pipeline to detect security flaws, code smells, and dependency vulnerabilities early in development.',
        whyChosen: 'Automates vulnerability detection and remediation early in the SDLC, drastically reducing release bottlenecks.',
        metric: 'Zero Security Smells',
        technologies: [
          { name: 'SonarQube', role: 'Code Quality & Vulnerabilities', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonarqube.svg' },
          { name: 'Checkmarx', role: 'Static Code Analysis (SAST)', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/securityscorecard.svg' },
          { name: 'Nexus IQ', role: 'Dependency Governance', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sonatype.svg' }
        ]
      },
      {
        id: 'hitl',
        number: '06',
        title: 'Human-In-The-Loop Delivery',
        category: 'Deployment',
        input: 'Tested & Scanned Git Branch',
        output: 'Reviewed Pull Request & CI/CD Deployment',
        role: 'Verified Release Pipeline',
        description: 'Generates Git pull requests with clear diffs and summary notes, presenting them for human engineer review and triggering automated Jenkins builds.',
        whyChosen: 'Keeps engineers in full control through Human-in-the-Loop review while automating 80% of routine implementation work.',
        metric: 'Fast Feature Delivery',
        technologies: [
          { name: 'Jenkins', role: 'CI/CD Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
          { name: 'Git & GitHub', role: 'Pull Request Review', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
          { name: 'Human In The Loop', role: 'Engineering Oversight', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/githubactions.svg' }
        ]
      }
    ]
  },
  {
    id: 'distributed',
    title: 'Enterprise Backend & Distributed Systems',
    shortTitle: 'Distributed Systems',
    icon: '⚡',
    color: '#06b6d4',
    colorFrom: 'from-cyan-500',
    colorTo: 'to-blue-600',
    accent: '#22d3ee',
    badge: 'Enterprise Architecture',
    summary: 'Scalable enterprise microservices and event-driven architecture combining Spring Boot, Apache Kafka streaming, Hazelcast in-memory computing, reactive Vert.x, and PostgreSQL.',
    stages: [
      {
        id: 'gateway',
        number: '01',
        title: 'API Gateway & Authentication',
        category: 'Ingress',
        input: 'Inbound Client Requests (REST / Sockets)',
        output: 'Authenticated Session & Validated Tokens',
        role: 'Edge Ingress & Auth Guard',
        description: 'Handles client ingress, enterprise Single Sign-On (SSO), and stateless dual-token JWT rotation to authenticate incoming service requests.',
        whyChosen: 'Stateless JWT auto-rotation provides secure authentication across microservices without continuous database lookups.',
        metric: 'Fast Token Validation',
        technologies: [
          { name: 'SSO / Auth0', role: 'Single Sign-On', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/auth0.svg' },
          { name: 'JWT Auth', role: 'Dual-Token Rotation', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/jsonwebtokens.svg' },
          { name: 'REST APIs', role: 'Service Endpoints', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/postman.svg' }
        ]
      },
      {
        id: 'kafka',
        number: '02',
        title: 'Event Streaming with Kafka',
        category: 'Streaming',
        input: 'Asynchronous Business Events',
        output: 'Partitioned Durable Event Log',
        role: 'High-Throughput Event Streaming',
        description: 'Streams asynchronous transaction events across distributed services through partitioned, fault-tolerant Kafka topics.',
        whyChosen: 'Decouples service communication and buffers peak message bursts reliably without dropping transactions.',
        metric: 'High-Throughput Streaming',
        technologies: [
          { name: 'Apache Kafka', role: 'Distributed Event Streaming', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apachekafka.svg' },
          { name: 'Kafka Topics', role: 'Partitioned Messaging', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apache.svg' },
          { name: 'Docker / K8s', role: 'Container Orchestration', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
        ]
      },
      {
        id: 'hazelcast',
        number: '03',
        title: 'In-Memory Grid with Hazelcast',
        category: 'Caching',
        input: 'Hot State Keys & Session Lookups',
        output: 'Sub-Millisecond Memory Responses',
        role: 'Low-Latency In-Memory Caching',
        description: 'Caches frequently accessed application state and session data across a distributed in-memory data grid using Hazelcast.',
        whyChosen: 'Provides sub-millisecond data retrieval and reduces load on persistent relational databases.',
        metric: 'Sub-Millisecond Latency',
        technologies: [
          { name: 'Hazelcast', role: 'In-Memory Data Grid', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg' },
          { name: 'Distributed Cache', role: 'Low-Latency State', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
          { name: 'Linux / OS', role: 'Host Environment', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
        ]
      },
      {
        id: 'vertx',
        number: '04',
        title: 'Reactive Microservices with Vert.x',
        category: 'Reactive',
        input: 'Asynchronous Stream Triggers',
        output: 'Non-Blocking Processed Futures',
        role: 'Reactive Event Handling',
        description: 'Executes reactive, non-blocking asynchronous event pipelines on the JVM using Eclipse Vert.x to process concurrent workloads efficiently.',
        whyChosen: 'Vert.x event-loop model handles high concurrency with minimal thread overhead, preventing resource starvation.',
        metric: 'Non-Blocking JVM',
        technologies: [
          { name: 'Eclipse Vert.x', role: 'Reactive Event Loop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vertx/vertx-original.svg' },
          { name: 'Java', role: 'Strongly-Typed OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Mountebank', role: 'Service Virtualization', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/testinglibrary.svg' }
        ]
      },
      {
        id: 'spring',
        number: '05',
        title: 'Core Backend with Spring Boot',
        category: 'Backend',
        input: 'Validated Business Commands & DTOs',
        output: 'Domain Model Updates & Response Payloads',
        role: 'Enterprise Domain Logic',
        description: 'Implements core enterprise business logic, dependency injection, and REST controllers with Spring Boot 3 and Java 21.',
        whyChosen: 'Provides robust transactional management, enterprise security, and seamless database integration with Hibernate/JPA.',
        metric: 'Transactional Integrity',
        technologies: [
          { name: 'Spring Boot 3', role: 'Backend Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
          { name: 'Java 21', role: 'Modern Java Concurrency', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Hibernate / JPA', role: 'ORM & Data Mapping', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hibernate.svg' }
        ]
      },
      {
        id: 'db',
        number: '06',
        title: 'Relational Database Persistence',
        category: 'Database',
        input: 'Normalized Domain Entities',
        output: 'Persistent ACID Transactions',
        role: 'Durable Enterprise Persistence',
        description: 'Stores application data in normalized relational tables on PostgreSQL and Supabase with connection pooling and ACID guarantees.',
        whyChosen: 'Ensures data integrity, structured relations, and reliable querying for multi-tenant enterprise applications.',
        metric: 'ACID Guarantees',
        technologies: [
          { name: 'PostgreSQL', role: 'Relational Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
          { name: 'Supabase Cloud', role: 'Cloud PostgreSQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/supabase.svg' },
          { name: 'Rocks DB', role: 'Embedded Key-Value', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/surrealdb.svg' }
        ]
      }
    ]
  },
  {
    id: 'forensics',
    title: 'DeepFake Image Detection System',
    shortTitle: 'DeepFake Forensics',
    icon: '👁️',
    color: '#f59e0b',
    colorFrom: 'from-amber-500',
    colorTo: 'to-orange-600',
    accent: '#fbbf24',
    badge: 'Research Project · 98.2% Accuracy',
    summary: 'A high-precision forensic platform combining Error Level Analysis (ELA) and deep convolutional neural models trained on 80,000+ benchmark images to identify manipulated media.',
    stages: [
      {
        id: 'media',
        number: '01',
        title: 'Image Upload & Ingestion',
        category: 'Ingestion',
        input: 'Uploaded Image File or Image URL',
        output: 'Validated In-Memory Pixel Array',
        role: 'Stateless Image Ingestion',
        description: 'Accepts direct user image uploads or remote URLs through a lightweight Flask API, validating file integrity in memory without permanent disk storage.',
        whyChosen: 'Ensures complete user privacy with zero permanent file storage on the server.',
        metric: 'Privacy-First Ingestion',
        technologies: [
          { name: 'Flask', role: 'Python Web Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
          { name: 'Python', role: 'Backend Runtime', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
          { name: 'JavaScript', role: 'Frontend API Requests', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
        ]
      },
      {
        id: 'ela',
        number: '02',
        title: 'Error Level Analysis (ELA)',
        category: 'Forensics',
        input: 'Raw JPEG/PNG Image Stream',
        output: 'Compression Discrepancy Error Map',
        role: 'Forensic Compression Analysis',
        description: 'Resaves images at a specific compression level and calculates pixel-level differences to expose non-uniform compression rates typical of image tampering.',
        whyChosen: 'Manipulated and spliced regions retain different compression artifacts compared to the original image background.',
        metric: 'Artifact Discrepancy',
        technologies: [
          { name: 'OpenCV & PIL', role: 'Image Forensics & ELA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'Pillow / PIL', role: 'JPEG Rescaling', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pypi.svg' },
          { name: 'Python', role: 'Matrix Computations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
        ]
      },
      {
        id: 'vision',
        number: '03',
        title: 'Image Feature Preprocessing',
        category: 'Vision',
        input: 'Raw Images & ELA Discrepancy Maps',
        output: 'Normalized Feature Tensors',
        role: 'Boundary & Color Analysis',
        description: 'Extracts color channel features, normalizes pixel matrices, and isolates potential boundary blending discrepancies with OpenCV.',
        whyChosen: 'Helps the neural model focus on unnatural boundary edges and facial seams created during manipulation.',
        metric: 'Feature Extraction',
        technologies: [
          { name: 'OpenCV', role: 'Computer Vision Filters', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'Color Space Masks', role: 'Channel Transformations', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'PIL', role: 'Image Formatting', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pypi.svg' }
        ]
      },
      {
        id: 'cnn',
        number: '04',
        title: 'Deep Neural Network Model',
        category: 'Deep Learning',
        input: 'Normalized Image & ELA Input Tensors',
        output: 'Probabilistic Classification Output',
        role: 'Deep Learning Classification',
        description: 'Processes inputs through deep convolutional neural networks trained on over 80,000 real and fake facial images to detect synthesis patterns.',
        whyChosen: 'Combines deep learned visual features with ELA compression maps for reliable, dual-method detection accuracy.',
        metric: '98.2% Accuracy',
        technologies: [
          { name: 'PyTorch', role: 'Deep Learning Model', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
          { name: 'TensorFlow', role: 'Neural Architectures', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
          { name: 'Scikit-Learn', role: 'Validation Metrics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' }
        ]
      },
      {
        id: 'heatmap',
        number: '05',
        title: 'Forensic Heatmap Generation',
        category: 'Visualization',
        input: 'Model Probability & Pixel Anomalies',
        output: 'Visual Heatmap & Evidence Breakdown',
        role: 'Visual Evidence Generation',
        description: 'Generates intuitive visual heatmaps that highlight tampered facial areas so users can clearly see where manipulation was detected.',
        whyChosen: 'Provides transparent, understandable visual evidence alongside the classification score.',
        metric: 'Explainable Heatmaps',
        technologies: [
          { name: 'OpenCV & PIL', role: 'Heatmap Rendering', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
          { name: 'Flask', role: 'API Result Delivery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
          { name: 'Python', role: 'Data Formatting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
        ]
      },
      {
        id: 'results',
        number: '06',
        title: 'Verification & Results Portal',
        category: 'Presentation',
        input: 'Classification Score & Heatmap Artifacts',
        output: 'Interactive Result Dashboard',
        role: 'User Result Presentation',
        description: 'Presents detailed verification results and confidence metrics to the user through an intuitive web interface with clear visual feedback.',
        whyChosen: 'Gives users clear, actionable answers on whether media has been altered or remains authentic.',
        metric: '98.2% Validation',
        technologies: [
          { name: 'HTML5 & CSS3', role: 'Responsive Web UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
          { name: 'JavaScript', role: 'Interactive Controls', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
          { name: 'Flask', role: 'Backend API Service', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }
        ]
      }
    ]
  },
  {
    id: 'dsa',
    title: 'Competitive Programming & Problem Solving',
    shortTitle: 'Algorithms & DSA',
    icon: '🧩',
    color: '#10b981',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-600',
    accent: '#34d399',
    badge: '1,720+ Problems Solved',
    summary: 'Systematic problem-solving methodology breaking down competitive algorithmic challenges into optimal data structures and time/space complexity bounds.',
    stages: [
      {
        id: 'bounds',
        number: '01',
        title: 'Problem & Constraint Analysis',
        category: 'Analysis',
        input: 'Problem Statement & Input Bounds',
        output: 'Target Complexity (e.g. O(N log N))',
        role: 'Complexity Derivation',
        description: 'Analyzes input constraints (e.g., N <= 2e5) to determine the feasible time and space complexity needed to pass within the execution limit.',
        whyChosen: 'Prevents suboptimal approaches by identifying the correct complexity target before writing implementation code.',
        metric: 'Optimal Time Bounds',
        technologies: [
          { name: 'Complexity Analysis', role: 'Big-O Analysis', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'C++', role: 'Fast Execution', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Problem Solving', role: 'Analytical Logic', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
        ]
      },
      {
        id: 'struct',
        number: '02',
        title: 'Data Structure Selection',
        category: 'Data Structures',
        input: 'Interval Queries & Dynamic Data',
        output: 'Optimized Data Structure Choice',
        role: 'Efficient State Representation',
        description: 'Selects or builds specialized data structures (Segment Trees, Disjoint Set Union, Tries, Heaps) to perform queries and updates efficiently.',
        whyChosen: 'Transforms brute-force operations into logarithmic O(log N) or constant O(1) operations.',
        metric: 'O(log N) Efficiency',
        technologies: [
          { name: 'Segment Trees', role: 'Range Queries', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'Disjoint Set Union', role: 'Connectivity Queries', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'Heaps & Trees', role: 'Priority & Ordering', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
        ]
      },
      {
        id: 'strategy',
        number: '03',
        title: 'Dynamic Programming & Graph Logic',
        category: 'Algorithms',
        input: 'Subproblem Invariants & Relations',
        output: 'Recurrence Relations & Graph Traversals',
        role: 'Algorithmic Strategy',
        description: 'Formulates dynamic programming state transitions, memoization tables, or graph traversal algorithms (BFS, DFS, Dijkstra) to solve complex problems.',
        whyChosen: 'Eliminates redundant calculations by storing intermediate states, turning exponential search spaces into polynomial time.',
        metric: 'Optimal Transitions',
        technologies: [
          { name: 'Dynamic Programming', role: 'State Transitions', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'Graph Algorithms', role: 'Shortest Path & TopoSort', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' },
          { name: 'Two Pointers', role: 'Sliding Windows', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
        ]
      },
      {
        id: 'stl',
        number: '04',
        title: 'High-Performance Implementation',
        category: 'Coding',
        input: 'Algorithmic Logic & Formulas',
        output: 'Fast, Memory-Efficient Source Code',
        role: 'High-Performance Coding',
        description: 'Implements solutions in C++ with standard library (STL) containers and fast I/O to achieve minimal runtime and memory footprint.',
        whyChosen: 'C++ compiles directly to native code with no garbage collection pauses, ideal for strict time constraints in competitive programming.',
        metric: 'Microsecond Runtimes',
        technologies: [
          { name: 'C++ STL', role: 'Vectors, Sets & Maps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Java', role: 'Enterprise Problem Solving', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
          { name: 'Fast I/O', role: 'I/O Optimization', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' }
        ]
      },
      {
        id: 'test',
        number: '05',
        title: 'Corner Case & Invariant Testing',
        category: 'Validation',
        input: 'Boundary Inputs & Corner Cases',
        output: 'Verified Correctness Against Oracles',
        role: 'Stress Testing & Edge Cases',
        description: 'Tests solutions against edge cases (boundary values, integer overflows, empty inputs, disconnected graphs) to ensure complete correctness.',
        whyChosen: 'Prevents common competitive programming penalties by validating assumptions prior to final submission.',
        metric: 'Zero Overflows',
        technologies: [
          { name: 'Edge Case Testing', role: 'Boundary Verification', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' },
          { name: 'C++ Invariants', role: 'Correctness Checking', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
          { name: 'Data Structures', role: 'Integrity Verification', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/thealgorithms.svg' }
        ]
      },
      {
        id: 'submission',
        number: '06',
        title: 'Platform Mastery & Contests',
        category: 'Platforms',
        input: 'Accepted Submissions on Online Judges',
        output: '1,720+ Problems Solved Overall',
        role: 'Competitive Coding Mastery',
        description: 'Demonstrates consistent, disciplined algorithmic problem solving across competitive coding platforms with over 1,720 problems solved.',
        whyChosen: 'Highlights sustained analytical problem-solving skills, speed, and algorithmic depth.',
        metric: '1,720+ Total Solved',
        technologies: [
          { name: 'Codolio', role: 'Competitive Profile', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'LeetCode', role: 'Coding Platform', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/leetcode.svg' },
          { name: 'GeeksforGeeks', role: 'DSA Platform', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/geeksforgeeks.svg' }
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

    <!-- Header Status Bar -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 text-xs font-mono">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-cyan-400 font-semibold tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM ARCHITECTURE
        </span>
        <span class="text-slate-400 hidden sm:inline">
          ENGINEERING & RESEARCH BLUEPRINTS
        </span>
      </div>

      <div class="flex items-center gap-3">
        <!-- Live Flow Simulator Toggle -->
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
          <span>{{ isSimulating ? 'PAUSE FLOW' : '⚡ SIMULATE FLOW' }}</span>
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
          data-tooltip="Previous Stage"
          data-tooltip-pos="top"
          aria-label="Previous Stage"
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
          data-tooltip="Next Stage"
          data-tooltip-pos="top"
          aria-label="Next Stage"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 3 × 2 Spacious Architecture Grid -->
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
        <!-- Top Accent Line -->
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

          <!-- Stage Description -->
          <p class="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-2">
            {{ stage.description }}
          </p>
        </div>

        <!-- Middle: Technologies Shelf -->
        <div class="mt-4 pt-3.5 border-t border-white/10">
          <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
            Technologies
          </div>

          <div class="flex flex-wrap gap-2">
            <div
              v-for="tech in stage.technologies"
              :key="tech.name"
              class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-xs font-mono text-slate-200 shadow-sm hover:border-cyan-400/40 transition-colors"
            >
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

        <!-- Bottom: Target Metric Footer -->
        <div class="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <span class="text-slate-400 text-[11px]">Target</span>
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

    <!-- Architecture Telemetry & Details Inspector -->
    <div
      class="telemetry-console relative z-10 mt-8 rounded-2xl bg-slate-950/90 border shadow-2xl transition-all duration-300 overflow-hidden"
      :style="{ borderColor: currentPipeline.color + '50' }"
    >
      <!-- Top Window Bar -->
      <div class="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span class="text-xs font-mono font-bold text-slate-300">
            STAGE {{ currentStage.number }} // {{ currentStage.title }}
          </span>
        </div>

        <div class="flex items-center gap-3">
          <!-- Active Status Badge -->
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
            <span>STATUS: ACTIVE</span>
          </div>

          <!-- Metric Pill -->
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

      <!-- Inspector Body: 3 Clean Structured Panes -->
      <div class="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        <!-- Pane 1: Workflow & Data Flow -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Workflow & Data Flow</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              {{ currentStage.description }}
            </p>

            <div class="space-y-2 text-xs font-mono pt-3 border-t border-white/10">
              <div class="flex items-start gap-2">
                <span class="text-cyan-400 font-bold flex-shrink-0">Input:</span>
                <span class="text-slate-300 break-words">{{ currentStage.input }}</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold flex-shrink-0">Output:</span>
                <span class="text-slate-300 break-words">{{ currentStage.output }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pane 2: Technologies -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Technologies</span>
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

        <!-- Pane 3: Why This Approach -->
        <div class="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Why This Approach</span>
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
.circuit-blueprint {
  min-height: 560px;
}

/* Precision Engineering Dot Matrix Background */
.blueprint-dot-grid {
  background-size: 24px 24px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px);
}
</style>
