<script setup>
import { reactive, ref } from "vue";
import { init, send } from "@emailjs/browser";
import { personalInfo, socialLinks } from "../data/portfolioData.js";

// Initialize EmailJS with Rohan's User ID
init("VVFBHi65kAeNjynhZ");

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const isSubmitting = ref(false);
const statusMessage = ref("");
const isSuccess = ref(false);

const handleFormSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    statusMessage.value = "Please complete your name, email, and message.";
    isSuccess.value = false;
    return;
  }

  isSubmitting.value = true;
  statusMessage.value = "";

  try {
    const names = form.name.trim().split(" ");
    const firstName = names[0] || form.name;
    const lastName = names.slice(1).join(" ") || "";

    await send("service_8kwda1d", "template_9lrlp3m", {
      first_name: firstName,
      last_name: lastName,
      email: form.email,
      phone: form.subject || "Portfolio Inquiry",
      company: form.subject || "General Inquiry",
      message: form.message
    });

    isSuccess.value = true;
    statusMessage.value = "Thank you! Your message has been sent successfully.";
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  } catch (err) {
    console.error("EmailJS submission error:", err);
    isSuccess.value = false;
    statusMessage.value = "Failed to send message. You can also reach me directly at " + personalInfo.email;
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

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <!-- Left Column: Contact Channels & Cards -->
        <div class="lg:col-span-5 space-y-4">
          <div class="glass-card rounded-2xl p-6 border border-white/5">
            <h3 class="text-lg font-bold text-white mb-2">Direct Contact Channels</h3>
            <p class="text-xs text-slate-400 leading-relaxed mb-6">
              I am usually quickest to reply on LinkedIn and Email.
            </p>

            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/70 transition-all duration-200 group"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono text-xs group-hover:text-cyan-300">
                    {{ link.name.charAt(0) }}
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

          <!-- Location & Availability Badge -->
          <div class="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <span class="block text-xs font-semibold text-slate-200">Based in Kolkata, India</span>
              <span class="block text-[11px] text-slate-400">Open for full-time engineering and internship roles</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="glass-card rounded-2xl p-7 sm:p-8 border border-white/5">
            <h3 class="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p class="text-xs text-slate-400 mb-6">
              Fill in the details below to send an email straight to my inbox.
            </p>

            <form @submit.prevent="handleFormSubmit" class="space-y-4">
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

              <!-- Feedback alert -->
              <div
                v-if="statusMessage"
                class="p-3 rounded-xl text-xs font-medium"
                :class="[
                  isSuccess
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
                ]"
              >
                {{ statusMessage }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 transition-all duration-200 shadow-md shadow-indigo-500/20"
              >
                <svg v-if="isSubmitting" class="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>{{ isSubmitting ? "Sending..." : "Send Message" }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>