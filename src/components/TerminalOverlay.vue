<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';

const isOpen = ref(false);
const inputCommand = ref('');
const output = ref([
  { type: 'system', text: 'RohanOS v1.0.0 ( tty1 )' },
  { type: 'system', text: 'Type "help" to see available commands.' }
]);
const terminalInput = ref(null);
const terminalBody = ref(null);
let keyCombo = '';
let comboTimeout = null;

// Handle keyboard shortcut to open terminal (Ctrl+` or typing 'sudo')
const handleGlobalKeydown = (e) => {
  if (e.ctrlKey && e.key === '`') {
    e.preventDefault();
    toggleTerminal();
    return;
  }
  
  if (!isOpen.value) {
    if (e.key.length === 1) {
      keyCombo += e.key;
      clearTimeout(comboTimeout);
      comboTimeout = setTimeout(() => { keyCombo = ''; }, 1000);
      
      if (keyCombo.endsWith('sudo')) {
        e.preventDefault();
        toggleTerminal();
        keyCombo = '';
      }
    }
  }
};

const toggleTerminal = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    nextTick(() => {
      terminalInput.value?.focus();
      scrollToBottom();
    });
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
};

const scrollToBottom = () => {
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight;
  }
};

const executeCommand = () => {
  const cmd = inputCommand.value.trim();
  if (!cmd) return;
  
  output.value.push({ type: 'input', text: `$ ${cmd}` });
  
  const args = cmd.toLowerCase().split(' ');
  const command = args[0];
  
  switch (command) {
    case 'help':
      output.value.push({ type: 'system', text: 'Available commands:' });
      output.value.push({ type: 'system', text: '  whoareyou  - Display portfolio owner info & background' });
      output.value.push({ type: 'system', text: '  skills     - List technical competencies & agentic tools' });
      output.value.push({ type: 'system', text: '  projects   - Show featured engineering systems' });
      output.value.push({ type: 'system', text: '  stats      - Display live competitive DSA & hackathon metrics' });
      output.value.push({ type: 'system', text: '  resume     - Open official resume in a new tab' });
      output.value.push({ type: 'system', text: '  contact    - Scroll to contact section / show direct email' });
      output.value.push({ type: 'system', text: '  clear      - Clear terminal output' });
      output.value.push({ type: 'system', text: '  sudo       - Superuser privileges test' });
      output.value.push({ type: 'system', text: '  exit       - Close terminal' });
      break;
    case 'whoareyou':
      output.value.push({ type: 'success', text: 'Rohan Chakraborty' });
      output.value.push({ type: 'system', text: 'Role: Software Engineer @ Visa (Bengaluru)' });
      output.value.push({ type: 'system', text: 'Education: Master of Computer Applications, Jadavpur University' });
      output.value.push({ type: 'system', text: 'Focus: Autonomous AI Agents, LangGraph, Distributed Systems, DevSecOps' });
      break;
    case 'skills':
      output.value.push({ type: 'success', text: 'Core Engineering Stack:' });
      output.value.push({ type: 'system', text: '⚡ Agentic AI: LangGraph, Model Context Protocol ( MCP ), Claude Code, OpenAI API' });
      output.value.push({ type: 'system', text: '⚡ Languages: Python (Asyncio), Java, SQL, C++, JavaScript' });
      output.value.push({ type: 'system', text: '⚡ Frameworks: Spring Boot, Vert.x, Vue.js, Node.js' });
      output.value.push({ type: 'system', text: '⚡ Cloud & Ops: Kubernetes, Jenkins, Docker, Kafka, Hazelcast' });
      output.value.push({ type: 'system', text: '⚡ Security: SonarQube, Checkmarx, Nexus IQ, HITL CI/CD Pipelines' });
      break;
    case 'projects':
      output.value.push({ type: 'success', text: 'Featured Project:' });
      output.value.push({ type: 'system', text: '🔍 DeepFake Image Detection System (92.8% Validation Accuracy)' });
      output.value.push({ type: 'system', text: '   Tech: PyTorch, Error Level Analysis ( ELA ), Python, Streamlit, ResNet' });
      output.value.push({ type: 'system', text: '   URL: github.com/rohannc/Deepfake-Image-Detection' });
      break;
    case 'stats':
      output.value.push({ type: 'success', text: 'Live Competitive Metrics:' });
      output.value.push({ type: 'system', text: '🔥 Problems Solved: 1,700+ (LeetCode, Codeforces, GeeksforGeeks, CodeChef)' });
      output.value.push({ type: 'system', text: '🏆 State Entrance Rank: WBJECA 2024 - Rank 17' });
      output.value.push({ type: 'system', text: '🏅 Milestones: 9+ Hackathons & Inter-College Coding Championships' });
      break;
    case 'resume':
      output.value.push({ type: 'success', text: 'Opening official resume in new tab...' });
      window.open('https://drive.google.com/file/d/19UzkhTtntELmvFp6c0OTfz8GoNirav87/view?usp=sharing', '_blank');
      break;
    case 'contact':
      output.value.push({ type: 'success', text: 'Direct Contacts:' });
      output.value.push({ type: 'system', text: '✉️  Email: chakrabortyrohan.abc01@gmail.com' });
      output.value.push({ type: 'system', text: '💼 LinkedIn: linkedin.com/in/rohanchakraborty0108' });
      output.value.push({ type: 'system', text: '🐙 GitHub: github.com/rohannc' });
      break;
    case 'clear':
      output.value = [{ type: 'system', text: 'RohanOS v1.0.0 ( tty1 )' }];
      break;
    case 'sudo':
      if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
        output.value.push({ type: 'error', text: 'Permission denied: Nice try though!' });
      } else {
        output.value.push({ type: 'error', text: 'You are not in the sudoers file. This incident will be reported to Visa Security.' });
      }
      break;
    case 'exit':
      toggleTerminal();
      break;
    default:
      output.value.push({ type: 'error', text: `Command not found: "${command}". Type "help" for valid commands.` });
  }
  
  inputCommand.value = '';
  nextTick(() => {
    scrollToBottom();
  });
};

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeydown);
});
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/60 backdrop-blur-md transition-all duration-300" @click.self="toggleTerminal">
    <div class="w-full max-w-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-[15px] animate-fade-in-up ring-1 ring-white/5">
      <!-- Title Bar -->
      <div class="bg-slate-900/50 px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
        <div class="flex gap-2.5">
          <button @click="toggleTerminal" class="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-400 border border-rose-600/50 transition-colors"></button>
          <div class="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-400 border border-amber-600/50 transition-colors"></div>
          <div class="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 border border-emerald-600/50 transition-colors"></div>
        </div>
        <div class="text-slate-400 text-xs font-semibold tracking-wider">guest@rohanOS: ~</div>
        <div class="w-14"></div> <!-- spacer -->
      </div>
      
      <!-- Terminal Body -->
      <div 
        ref="terminalBody"
        class="h-[60vh] max-h-[420px] sm:h-[400px] overflow-y-auto overscroll-contain p-4 sm:p-5 bg-transparent text-slate-300 custom-scrollbar text-xs sm:text-[15px]"
        @click="terminalInput?.focus()"
      >
        <div v-for="(line, index) in output" :key="index" class="mb-1.5 leading-relaxed tracking-wide">
          <span v-if="line.type === 'input'" class="text-emerald-400 font-semibold">{{ line.text }}</span>
          <span v-else-if="line.type === 'error'" class="text-rose-400">{{ line.text }}</span>
          <span v-else-if="line.type === 'success'" class="text-cyan-400">{{ line.text }}</span>
          <span v-else class="text-slate-300">{{ line.text }}</span>
        </div>
        
        <div class="flex items-center mt-3">
          <span class="text-emerald-400 mr-2.5 font-semibold">$</span>
          <input 
            ref="terminalInput"
            v-model="inputCommand"
            @keyup.enter="executeCommand"
            type="text" 
            class="flex-1 bg-transparent border-none outline-none text-slate-100 caret-cyan-400 tracking-wide"
            spellcheck="false"
            autocomplete="off"
            autofocus
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 1);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(71, 85, 105, 1);
  border-radius: 3px;
}
</style>
