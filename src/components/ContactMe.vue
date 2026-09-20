<script setup>
import { reactive, ref } from "vue";
import { init, send } from "@emailjs/browser";
import { toast } from "vue3-toastify";
import { personalInfo, socialLinks } from "../data/portfolioData.js";

// Initialize EmailJS with Environment Variables
init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.subject = "";
  form.message = "";
  isSuccess.value = false;
};

const handleFormSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    toast.warning("Please complete your name, email, and message.");
    return;
  }

  isSubmitting.value = true;

  try {
    const names = form.name.trim().split(" ");
    const firstName = names[0] || form.name;
    const lastName = names.slice(1).join(" ") || "";

    await send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        first_name: firstName,
        last_name: lastName,
        email: form.email,
        phone: form.subject || "Portfolio Inquiry",
        company: form.subject || "General Inquiry",
        message: form.message
      }
    );

    isSuccess.value = true;
  } catch (err) {
    console.error("EmailJS submission error:", err);
    toast.error("Failed to send message. You can also reach me directly at " + personalInfo.email);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="scroll-mt-20 py-14 relative border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-8">
        <span class="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">Get In Touch</span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white mt-1.5 tracking-tight">
          Let's Connect & Collaborate
        </h2>
        <p class="text-sm sm:text-base text-slate-400 mt-3">
          Have an interesting project, opportunity, or research idea? Feel free to reach out directly.
        </p>
      </div>

      <!-- Upper Two Rectangles: Direct Contact Channels & Interactive Contact Form -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-6">
        <!-- Rectangle 1: Contact Channels -->
        <div class="lg:col-span-5 flex flex-col">
          <div class="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 h-full flex flex-col">
            <div class="mb-5">
              <div class="flex items-center gap-2.5 mb-2">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-bold text-white">Direct Contact Channels</h3>
              </div>
              <p class="text-xs text-slate-400 leading-relaxed mb-5">
                I am usually quickest to reply on LinkedIn and Email.
              </p>
            </div>

            <div class="flex flex-col flex-1 justify-between gap-3">
                <a
                  v-for="link in socialLinks"
                  :key="link.name"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all duration-200 group"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                      :class="{
                        'bg-[#0077b5]/15 text-[#0077b5] border border-[#0077b5]/30': link.icon === 'linkedin',
                        'bg-slate-800 text-slate-100 border border-white/10': link.icon === 'github',
                        'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30': link.icon === 'email',
                        'bg-[#5865F2]/15 text-[#5865F2] border border-[#5865F2]/30': link.icon === 'discord'
                      }"
                    >
                      <!-- LinkedIn SVG -->
                      <svg v-if="link.icon === 'linkedin'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <!-- GitHub SVG -->
                      <svg v-else-if="link.icon === 'github'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <!-- Email SVG -->
                      <svg v-else-if="link.icon === 'email'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <!-- Discord SVG -->
                      <svg v-else-if="link.icon === 'discord'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      <!-- Fallback -->
                      <span v-else class="text-xs font-bold">{{ link.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <span class="block text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {{ link.name }}
                      </span>
                      <span class="block text-[11px] text-slate-400 font-mono">
                        {{ link.handle }}
                      </span>
                    </div>
                  </div>

                  <svg class="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
          </div>
        </div>

        <!-- Rectangle 2: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="glass-card rounded-2xl p-7 sm:p-8 border border-white/5 h-full">
            <h3 class="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p class="text-xs text-slate-400 mb-6">
              Fill in the details below to send an email straight to my inbox.
            </p>

            <div class="relative">
            <form :class="{ 'opacity-0 pointer-events-none scale-95': isSuccess, 'opacity-100 scale-100': !isSuccess }" @submit.prevent="handleFormSubmit" class="space-y-4 transition-all duration-500">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label class="block text-xs font-medium text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1.5">Subject / Topic</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="e.g. Project Collaboration / Opportunity"
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-medium text-slate-300 mb-1.5">Message *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>



              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 transition-all duration-200 shadow-md shadow-indigo-500/20 cursor-pointer"
              >
                <svg v-if="isSubmitting" class="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
              </button>
            </form>

            <!-- Success State UI -->
            <div :class="{ 'opacity-100 scale-100 pointer-events-auto': isSuccess, 'opacity-0 scale-95 pointer-events-none': !isSuccess }" class="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500">
              <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 class="text-xl font-bold text-white mb-2 tracking-tight">Message Sent Successfully!</h4>
              <p class="text-sm text-slate-400 mb-7 max-w-sm">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
              <button 
                @click="resetForm" 
                class="px-6 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-white/10 transition-all duration-200"
              >
                Send Another Message
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lower Enlarged Banner: Same width as upper two rectangles combined! -->
      <div class="glass-card rounded-2xl p-6 sm:p-7 border border-cyan-500/25 bg-gradient-to-r from-slate-900/95 via-cyan-950/20 to-slate-900/95 shadow-xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-4 text-center sm:text-left">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 shadow-sm shadow-cyan-500/20">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <div class="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
                <h3 class="text-base sm:text-lg font-bold text-white tracking-tight">Based in Kolkata, India</h3>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Software Engineer at <span class="visa-highlight ml-1">Visa</span>
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-300 mt-1">
                Engineering autonomous AI agents, enterprise developer workflows, and secure SDLC platforms.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>
</template>