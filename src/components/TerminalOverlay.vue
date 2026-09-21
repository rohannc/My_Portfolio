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
      output.value.push({ type: 'system', text: '  whoareyou - Display portfolio owner info' });
      output.value.push({ type: 'system', text: '  skills    - List core competencies' });
      output.value.push({ type: 'system', text: '  clear     - Clear terminal output' });
      output.value.push({ type: 'system', text: '  sudo      - Execute a command as superuser' });
      output.value.push({ type: 'system', text: '  exit      - Close terminal' });
      break;
    case 'whoareyou':
      output.value.push({ type: 'success', text: 'rohan_chakraborty' });
      output.value.push({ type: 'system', text: 'Role: Software Engineer @ Visa' });
      output.value.push({ type: 'system', text: 'Location: Bengaluru, India' });
      break;
    case 'skills':
      output.value.push({ type: 'success', text: 'Loading skills...' });
      output.value.push({ type: 'system', text: '✓ Python (Advanced)' });
      output.value.push({ type: 'system', text: '✓ Java (Advanced)' });
      output.value.push({ type: 'system', text: '✓ LangGraph & AI Agents' });
      output.value.push({ type: 'system', text: '✓ CI/CD & DevSecOps' });
      break;
    case 'clear':
      output.value = [{ type: 'system', text: 'RohanOS v1.0.0 ( tty1 )' }];
      break;
    case 'sudo':
      if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
        output.value.push({ type: 'error', text: 'Permission denied: Nice try though!' });
      } else {
        output.value.push({ type: 'error', text: 'You are not in the sudoers file. This incident will be reported.' });
      }
      break;
    case 'exit':
      toggleTerminal();
      break;
    default:
      output.value.push({ type: 'error', text: `Command not found: ${command}` });
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
        class="h-[400px] overflow-y-auto overscroll-contain p-5 bg-transparent text-slate-300 custom-scrollbar"
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
