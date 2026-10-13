<script setup>
import { ref, computed } from 'vue';

// 5 Curated Architectural Constellations with carefully tuned, non-overlapping coordinates (ViewBox: 1000 x 600)
const domains = [
  { id: 'all', label: 'All Architectures', color: '#38bdf8' },
  { id: 'distributed', label: 'Distributed Systems', color: '#06b6d4' },
  { id: 'agentic', label: 'Agentic AI & LLMs', color: '#a855f7' },
  { id: 'enterprise', label: 'Enterprise Java & Cloud', color: '#10b981' },
  { id: 'cv', label: 'Forensics & Deep Learning', color: '#f59e0b' },
  { id: 'dsa', label: 'Competitive Algorithms', color: '#ec4899' },
];

const selectedDomain = ref('all');
const hoveredNode = ref(null);
const activeNode = ref(null);

// Nodes placed with generous spacing and dedicated label clearances
const nodes = [
  // 5 Major Core Hubs
  {
    id: 'hub-distributed',
    name: 'Distributed Systems',
    domain: 'distributed',
    domainLabel: 'Distributed Systems',
    type: 'hub',
    x: 500,
    y: 160,
    r: 34,
    color: '#06b6d4',
    icon: '⚡',
    desc: 'High-throughput event streaming, non-blocking reactive pipelines, and resilient distributed microservices.',
    role: 'Core Enterprise Infrastructure'
  },
  {
    id: 'hub-agentic',
    name: 'Agentic AI & LLMs',
    domain: 'agentic',
    domainLabel: 'Agentic AI & Workflows',
    type: 'hub',
    x: 210,
    y: 190,
    r: 34,
    color: '#a855f7',
    icon: '🤖',
    desc: 'Autonomous multi-agent orchestration, stateful graph routing, and standardized Model Context Protocol (MCP) tooling.',
    role: 'Autonomous Workflows & HITL CI/CD'
  },
  {
    id: 'hub-enterprise',
    name: 'Enterprise Backend',
    domain: 'enterprise',
    domainLabel: 'Enterprise Java & Cloud',
    type: 'hub',
    x: 790,
    y: 190,
    r: 34,
    color: '#10b981',
    icon: '☕',
    desc: 'Mission-critical enterprise services, transaction security, ACID persistence, and resilient cloud deployments.',
    role: 'Production Enterprise Systems'
  },
  {
    id: 'hub-cv',
    name: 'Computer Vision & AI',
    domain: 'cv',
    domainLabel: 'Forensics & Deep Learning',
    type: 'hub',
    x: 290,
    y: 430,
    r: 34,
    color: '#f59e0b',
    icon: '👁️',
    desc: 'Image forensics, digital compression discrepancy extraction (Error Level Analysis), and deepfake artifact detection.',
    role: 'DeepFake Detection Research'
  },
  {
    id: 'hub-dsa',
    name: 'Competitive Algorithms',
    domain: 'dsa',
    domainLabel: 'Competitive Algorithms',
    type: 'hub',
    x: 710,
    y: 430,
    r: 34,
    color: '#ec4899',
    icon: '🧩',
    desc: 'Complex data structures, dynamic programming state transitions, graph theory, and algorithmic optimization (1,720+ solved).',
    role: '1,720+ Problems Solved'
  },

  // Satellites: Distributed Systems Cluster (Top-Center)
  { id: 'tech-vertx', name: 'Eclipse Vert.x', domain: 'distributed', x: 410, y: 70, r: 20, color: '#06b6d4', desc: 'Reactive, non-blocking asynchronous event loop running on JVM' },
  { id: 'tech-kafka', name: 'Apache Kafka', domain: 'distributed', x: 590, y: 70, r: 21, color: '#06b6d4', desc: 'Distributed fault-tolerant event pub/sub log and high-throughput stream processing' },
  { id: 'tech-hazelcast', name: 'Hazelcast Grid', domain: 'distributed', x: 380, y: 240, r: 19, color: '#06b6d4', desc: 'In-memory distributed computing, clustering, and low-latency cache' },
  { id: 'tech-k8s', name: 'Kubernetes & Docker', domain: 'distributed', x: 620, y: 240, r: 21, color: '#06b6d4', desc: 'Container orchestration, self-healing pod clusters, and automated scaling' },

  // Satellites: Agentic AI Cluster (Left)
  { id: 'tech-langgraph', name: 'LangGraph', domain: 'agentic', x: 80, y: 110, r: 20, color: '#a855f7', desc: 'Cyclic graph-based stateful agent orchestration framework with persistent checkpoints' },
  { id: 'tech-mcp', name: 'MCP Protocol', domain: 'agentic', x: 210, y: 80, r: 20, color: '#a855f7', desc: 'Anthropic standardized client/server protocol for real-time tool context sharing' },
  { id: 'tech-asyncio', name: 'Python Asyncio', domain: 'agentic', x: 70, y: 240, r: 19, color: '#a855f7', desc: 'Concurrent event-loop async execution, coroutines, and task piping' },
  { id: 'tech-claude', name: 'Claude CLI & Skills', domain: 'agentic', x: 170, y: 310, r: 20, color: '#a855f7', desc: 'Autonomous agent CLI integration in CI/CD pipelines with tool usage' },

  // Satellites: Enterprise Backend Cluster (Right)
  { id: 'tech-spring', name: 'Spring Boot', domain: 'enterprise', x: 920, y: 110, r: 21, color: '#10b981', desc: 'Production microservices, IoC container, dependency injection, and REST controllers' },
  { id: 'tech-java', name: 'Java (17+)', domain: 'enterprise', x: 790, y: 80, r: 21, color: '#10b981', desc: 'Strongly typed OOP architecture, modern concurrency, and JVM performance tuning' },
  { id: 'tech-devsecops', name: 'DevSecOps & CI/CD', domain: 'enterprise', x: 930, y: 240, r: 20, color: '#10b981', desc: 'Automated vulnerability scanning: SonarQube, Checkmarx, and Nexus IQ gates' },
  { id: 'tech-sql', name: 'SQL & DBMS', domain: 'enterprise', x: 830, y: 310, r: 19, color: '#10b981', desc: 'Relational data modeling, schema normalization, ACID guarantees, and indexing' },

  // Satellites: Computer Vision Cluster (Bottom-Left)
  { id: 'tech-pytorch', name: 'PyTorch / TF', domain: 'cv', x: 140, y: 440, r: 21, color: '#f59e0b', desc: 'Deep neural networks, backpropagation, and tensor image feature extraction' },
  { id: 'tech-ela', name: 'ELA Forensics', domain: 'cv', x: 260, y: 535, r: 20, color: '#f59e0b', desc: 'Error Level Analysis for detecting localized compression anomalies in media' },
  { id: 'tech-opencv', name: 'OpenCV & PIL', domain: 'cv', x: 410, y: 495, r: 20, color: '#f59e0b', desc: 'Digital image transformation, morphology, color space filters, and matrix masks' },

  // Satellites: Competitive Algorithms Cluster (Bottom-Right)
  { id: 'tech-dp', name: 'Dynamic Programming', domain: 'dsa', x: 590, y: 520, r: 20, color: '#ec4899', desc: 'Optimal substructure, memoization tables, multidimensional state transitions' },
  { id: 'tech-graphs', name: 'Graph Topologies', domain: 'dsa', x: 740, y: 540, r: 20, color: '#ec4899', desc: 'BFS/DFS, Dijkstra, Segment Trees, Topological Sorting, Disjoint Sets' },
  { id: 'tech-cpp', name: 'C++ STL', domain: 'dsa', x: 870, y: 450, r: 21, color: '#ec4899', desc: 'Algorithmic problem solving with minimal runtime overhead and STL containers' },
];

// Curated Links between nodes
const links = [
  // Inter-hub structural backbone highways
  { source: 'hub-distributed', target: 'hub-enterprise', type: 'bridge' },
  { source: 'hub-distributed', target: 'hub-agentic', type: 'bridge' },
  { source: 'hub-agentic', target: 'hub-cv', type: 'bridge' },
  { source: 'hub-distributed', target: 'hub-dsa', type: 'bridge' },
  { source: 'hub-enterprise', target: 'hub-dsa', type: 'bridge' },

  // Distributed Systems
  { source: 'hub-distributed', target: 'tech-vertx' },
  { source: 'hub-distributed', target: 'tech-kafka' },
  { source: 'hub-distributed', target: 'tech-hazelcast' },
  { source: 'hub-distributed', target: 'tech-k8s' },
  { source: 'tech-vertx', target: 'tech-java' },
  { source: 'tech-kafka', target: 'tech-spring' },

  // Agentic AI
  { source: 'hub-agentic', target: 'tech-langgraph' },
  { source: 'hub-agentic', target: 'tech-mcp' },
  { source: 'hub-agentic', target: 'tech-asyncio' },
  { source: 'hub-agentic', target: 'tech-claude' },
  { source: 'tech-langgraph', target: 'tech-mcp' },
  { source: 'tech-claude', target: 'tech-devsecops' },

  // Enterprise Backend
  { source: 'hub-enterprise', target: 'tech-spring' },
  { source: 'hub-enterprise', target: 'tech-java' },
  { source: 'hub-enterprise', target: 'tech-devsecops' },
  { source: 'hub-enterprise', target: 'tech-sql' },

  // Computer Vision
  { source: 'hub-cv', target: 'tech-pytorch' },
  { source: 'hub-cv', target: 'tech-ela' },
  { source: 'hub-cv', target: 'tech-opencv' },
  { source: 'tech-ela', target: 'tech-opencv' },

  // DSA
  { source: 'hub-dsa', target: 'tech-dp' },
  { source: 'hub-dsa', target: 'tech-graphs' },
  { source: 'hub-dsa', target: 'tech-cpp' },
  { source: 'tech-cpp', target: 'tech-graphs' },
];

const nodeMap = computed(() => {
  const map = new Map();
  nodes.forEach(n => map.set(n.id, n));
  return map;
});

const hoveredLink = ref(null);

const isLinkHighlighted = (link) => {
  const sNode = nodeMap.value.get(link.source);
  const tNode = nodeMap.value.get(link.target);
  if (!sNode || !tNode) return false;

  // Domain filtering
  if (selectedDomain.value !== 'all') {
    if (sNode.domain !== selectedDomain.value && tNode.domain !== selectedDomain.value) {
      return false;
    }
  }

  // If a specific link is hovered directly
  if (hoveredLink.value) {
    return hoveredLink.value.source === link.source && hoveredLink.value.target === link.target;
  }

  // If a node is hovered or active
  const focus = hoveredNode.value || activeNode.value;
  if (!focus) return true;
  return link.source === focus.id || link.target === focus.id;
};

// Strict rule: If any edge is highlighted, BOTH connected nodes MUST be highlighted
const isNodeHighlighted = (node) => {
  if (selectedDomain.value !== 'all' && node.domain !== selectedDomain.value) {
    return false;
  }

  // If hovering an edge directly: highlight exactly both source & target nodes
  if (hoveredLink.value) {
    return hoveredLink.value.source === node.id || hoveredLink.value.target === node.id;
  }

  // Any node connected to any currently highlighted link is highlighted
  const focus = hoveredNode.value || activeNode.value;
  if (!focus) return true;
  if (focus.id === node.id) return true;

  // Check if node is endpoint of any active highlighted link
  return links.some(l => 
    (l.source === focus.id && l.target === node.id) ||
    (l.target === focus.id && l.source === node.id)
  );
};

const currentInspection = computed(() => {
  if (hoveredLink.value) {
    const s = nodeMap.value.get(hoveredLink.value.source);
    const t = nodeMap.value.get(hoveredLink.value.target);
    if (s && t) {
      return {
        id: `link-${s.id}-${t.id}`,
        name: `${s.name} ⟷ ${t.name}`,
        domain: `${s.domainLabel || s.domain} / ${t.domainLabel || t.domain}`,
        domainLabel: 'Architectural Bridge',
        color: '#38bdf8',
        icon: '🔗',
        desc: `Active architectural link connecting ${s.name} (${s.domainLabel || s.domain}) and ${t.name} (${t.domainLabel || t.domain}).`,
        type: 'edge'
      };
    }
  }
  return hoveredNode.value || activeNode.value || nodes[0];
});

function selectNode(node) {
  activeNode.value = node;
  hoveredLink.value = null;
}
</script>

<template>
  <div class="topology-container relative w-full bg-slate-950/90 rounded-2xl border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden font-sans">
    <!-- Atmospheric Ambient Backdrops -->
    <div class="absolute -top-32 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -bottom-32 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

    <!-- Top Domain Filter Badges -->
    <div class="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
      <div class="flex flex-wrap items-center gap-2">
        <button
          v-for="domain in domains"
          :key="domain.id"
          type="button"
          @click="selectedDomain = domain.id"
          class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border cursor-pointer"
          :class="selectedDomain === domain.id 
            ? 'bg-white/10 text-white border-white/30 shadow-sm' 
            : 'bg-slate-900/60 text-slate-400 border-white/5 hover:text-white hover:border-white/20'"
        >
          <span 
            v-if="domain.id !== 'all'" 
            class="inline-block w-2 h-2 rounded-full mr-1.5"
            :style="{ backgroundColor: domain.color }"
          />
          {{ domain.label }}
        </button>
      </div>

      <div class="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-cyan-500/20">
        <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>Hover or click any node to illuminate connections</span>
      </div>
    </div>

    <!-- Static Crisp SVG Architectural Canvas -->
    <div class="relative w-full overflow-x-auto mt-4 rounded-xl bg-slate-950/80 border border-white/5 p-2 flex justify-center">
      <svg 
        viewBox="0 0 1000 600" 
        class="w-full max-w-[1000px] h-auto select-none transition-all duration-300"
        style="min-width: 720px;"
      >
        <defs>
          <!-- Radial gradient glowing halos -->
          <radialGradient id="halo-cyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="halo-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#a855f7" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#a855f7" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="halo-green" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="halo-amber" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="halo-pink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ec4899" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#ec4899" stop-opacity="0" />
          </radialGradient>

          <!-- Crisp Neon Glow Filter -->
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Static Curved & Straight Interconnection Links -->
        <g class="network-links">
          <g 
            v-for="(link, idx) in links" 
            :key="'link-' + idx"
            class="link-group cursor-pointer"
            @mouseenter="hoveredLink = link"
            @mouseleave="hoveredLink = null"
          >
            <!-- Invisible wide stroke hitbox for effortless hover/click on the line -->
            <line
              :x1="nodeMap.get(link.source)?.x"
              :y1="nodeMap.get(link.source)?.y"
              :x2="nodeMap.get(link.target)?.x"
              :y2="nodeMap.get(link.target)?.y"
              stroke="transparent"
              stroke-width="14"
            />
            <!-- Visual visible line -->
            <line
              :x1="nodeMap.get(link.source)?.x"
              :y1="nodeMap.get(link.source)?.y"
              :x2="nodeMap.get(link.target)?.x"
              :y2="nodeMap.get(link.target)?.y"
              :stroke="isLinkHighlighted(link) ? (link.type === 'bridge' ? '#38bdf8' : (nodeMap.get(link.source)?.color || '#38bdf8')) : '#334155'"
              :stroke-width="isLinkHighlighted(link) ? (link.type === 'bridge' ? 3.2 : 2.5) : 1"
              :stroke-opacity="isLinkHighlighted(link) ? 1 : 0.15"
              :stroke-dasharray="link.type === 'bridge' ? '5,5' : 'none'"
              :filter="isLinkHighlighted(link) ? 'url(#neon-glow)' : 'none'"
              class="transition-all duration-200 pointer-events-none"
            />
          </g>
        </g>

        <!-- Static Positioned Nodes with Dedicated Label Badges -->
        <g class="network-nodes">
          <g
            v-for="node in nodes"
            :key="node.id"
            class="node-group cursor-pointer transition-all duration-300"
            :class="isNodeHighlighted(node) ? 'opacity-100' : 'opacity-25'"
            @mouseenter="hoveredNode = node"
            @mouseleave="hoveredNode = null"
            @click="selectNode(node)"
          >
            <!-- Glowing Halo for Hub Nodes -->
            <circle
              v-if="node.type === 'hub'"
              :cx="node.x"
              :cy="node.y"
              :r="node.r * 1.9"
              :fill="'url(#halo-' + (node.domain === 'distributed' ? 'cyan' : node.domain === 'agentic' ? 'purple' : node.domain === 'enterprise' ? 'green' : node.domain === 'cv' ? 'amber' : 'pink') + ')'"
              class="pointer-events-none"
            />

            <!-- Outer Hover Accent Ring (Static, no spinning animation) -->
            <circle
              v-if="hoveredNode?.id === node.id || activeNode?.id === node.id"
              :cx="node.x"
              :cy="node.y"
              :r="node.r + 6"
              fill="none"
              :stroke="node.color"
              stroke-width="1.5"
              stroke-dasharray="3,3"
              class="pointer-events-none"
            />

            <!-- Circle Node Body -->
            <circle
              :cx="node.x"
              :cy="node.y"
              :r="node.r"
              :fill="node.type === 'hub' ? '#090d16' : '#0f172a'"
              :stroke="node.color"
              :stroke-width="hoveredNode?.id === node.id || activeNode?.id === node.id ? 2.5 : (node.type === 'hub' ? 2 : 1.2)"
              class="transition-colors"
            />

            <!-- Hub Emoji / Icon -->
            <text
              v-if="node.icon"
              :x="node.x"
              :y="node.y + 7"
              text-anchor="middle"
              class="text-base select-none pointer-events-none"
            >
              {{ node.icon }}
            </text>

            <!-- Satellite Center Core Dot -->
            <circle
              v-else
              :cx="node.x"
              :cy="node.y"
              r="4"
              :fill="node.color"
              class="pointer-events-none"
            />

            <!-- Clean Floating Label with Crisp Typography & Contrast Text Shadow -->
            <g class="pointer-events-none">
              <text
                :x="node.x"
                :y="node.y + node.r + 17"
                text-anchor="middle"
                class="node-label-bg select-none"
              >
                {{ node.name }}
              </text>
              <text
                :x="node.x"
                :y="node.y + node.r + 17"
                text-anchor="middle"
                class="node-label-fg select-none"
                :class="[
                  node.type === 'hub' ? 'font-bold text-[12px] fill-white' : 'font-medium text-[11px] fill-slate-200',
                  hoveredNode?.id === node.id ? 'fill-cyan-300 font-semibold' : ''
                ]"
              >
                {{ node.name }}
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <!-- Dedicated Separate Description Space Below Canvas Border -->
    <div 
      v-if="currentInspection" 
      class="mt-4 p-4 sm:p-5 rounded-xl bg-slate-900/80 border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      <div class="flex items-start md:items-center gap-3.5">
        <div 
          class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base flex-shrink-0 border shadow-sm"
          :style="{ 
            borderColor: currentInspection.color + '60', 
            backgroundColor: currentInspection.color + '20',
            color: currentInspection.color 
          }"
        >
          {{ currentInspection.icon || currentInspection.name.charAt(0) }}
        </div>

        <div class="flex flex-col">
          <div class="flex items-center gap-2.5 flex-wrap">
            <h4 class="text-base font-bold text-white tracking-tight">
              {{ currentInspection.name }}
            </h4>
            <span 
              class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase font-medium"
              :style="{ 
                borderColor: currentInspection.color + '40', 
                backgroundColor: currentInspection.color + '15',
                color: currentInspection.color 
              }"
            >
              {{ currentInspection.domainLabel || currentInspection.domain }}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {{ currentInspection.desc }}
          </p>
        </div>
      </div>

      <!-- Context Role Indicator -->
      <div class="flex items-center gap-2 self-start md:self-center flex-shrink-0 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-white/5">
        <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: currentInspection.color }" />
        <span>{{ currentInspection.type === 'hub' ? 'Core Architecture Pillar' : 'Technology Stack' }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topology-container {
  min-height: 520px;
}

/* Crisp text halo outline for 100% legibility on any dark background without boxy pills */
.node-label-bg {
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  stroke: #020617;
  stroke-width: 3.5px;
  stroke-linejoin: round;
  fill: #020617;
}

.node-label-fg {
  font-family: inherit;
  letter-spacing: 0.01em;
}
</style>
