<script setup>
import { reactive } from 'vue';
import { init, send } from '@emailjs/browser';

// Initialize EmailJS with your User ID (replace 'YOUR_USER_ID' with your actual EmailJS User ID)
init('VVFBHi65kAeNjynhZ');

// Social media links
const socialLinks = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rohanchakraborty0108/',
        icon: 'https://img.icons8.com/?size=100&id=44019&format=png&color=000000',
        tooltip: 'Visit LinkedIn'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/rohannc',
        icon: 'https://img.icons8.com/?size=100&id=12598&format=png&color=000000',
        tooltip: 'Visit GitHub'
    },
    {
        name: 'Email',
        url: 'mailto:chakrabortyrohan.abc01@gmail.com',
        icon: 'https://img.icons8.com/?size=100&id=YbPqIO0gOrT3&format=png&color=000000',
        tooltip: 'Mail Me'
    },
    {
        name: 'Discord',
        url: 'https://discordapp.com/users/rohanchakraborty.',
        icon: 'https://img.icons8.com/?size=100&id=zdrZ4QdvVaBZ&format=png&color=000000',
        tooltip: 'Visit Discord'
    },
    {
        name: 'X',
        url: 'https://x.com/RohanCh07687035',
        icon: 'https://img.icons8.com/?size=100&id=bG29Ckcdp6YP&format=png&color=000000',
        tooltip: 'Visit X'
    }
];

// Reactive state for tooltips and form
const tooltipVisible = reactive({});
const formState = reactive({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    company: '',
    message: '',
    loading: false,
    error: null,
    success: null
});

// Tooltip handlers
const showTooltip = (index, buttonId) => {
    if (!tooltipVisible[index]) {
        tooltipVisible[index] = {};
    }
    Object.keys(tooltipVisible[index]).forEach(key => {
        tooltipVisible[index][key] = false;
    });
    tooltipVisible[index][buttonId] = true;
};

const hideTooltip = (index, buttonId) => {
    if (tooltipVisible[index]) {
        tooltipVisible[index][buttonId] = false;
    }
};

// Form submission handler
const handleSubmit = async (event) => {
    event.preventDefault();
    formState.loading = true;
    formState.error = null;
    formState.success = null;

    // Basic validation
    if (
        !formState.email ||
        !formState.first_name ||
        !formState.last_name ||
        !formState.phone ||
        !formState.company ||
        !formState.message
    ) {
        formState.error = 'Please fill in all required fields.';
        formState.loading = false;
        return;
    }

    try {
        // Send email via EmailJS
        const response = await send(
            'service_8kwda1d', // Replace with your EmailJS Service ID
            'template_9lrlp3m', // Replace with your EmailJS Template ID
            {
                email: formState.email,
                first_name: formState.first_name,
                last_name: formState.last_name,
                phone: formState.phone,
                company: formState.company,
                message: formState.message
            }
        );
        formState.success = 'Email sent successfully!';
        // Reset form
        formState.email = '';
        formState.first_name = '';
        formState.last_name = '';
        formState.phone = '';
        formState.company = '';
        formState.message = '';
    } catch (error) {
        formState.error = 'Failed to send email. Please try again.';
        console.error('EmailJS error:', error);
    } finally {
        formState.loading = false;
    }
};
</script>

<template>
    <div id="contact"></div>
    <div class="container mx-auto px-7 py-8 mt-50">
        <div class="grid grid-cols-3 gap-6">
            <!-- Mobile View: Social Icons Only -->
            <div class="md:hidden col-span-3 bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col">
                <h2 class="text-2xl font-bold text-white mb-4 mx-auto">Contact Me</h2>
                <div class="flex justify-center gap-3 pt-6 pb-6">
                    <div v-for="(link, btnIndex) in socialLinks" :key="btnIndex" class="relative"
                        @mouseover="showTooltip(0, btnIndex)" @mouseleave="hideTooltip(0, btnIndex)">
                        <a :href="link.url" target="_blank">
                            <button
                                class="bg-transparent border-none cursor-pointer p-2 hover:scale-110 transition-transform">
                                <img :src="link.icon" :alt="link.name" class="w-8" />
                            </button>
                        </a>
                        <div v-if="tooltipVisible[0]?.[btnIndex]"
                            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap">
                            {{ link.tooltip }}
                            <div
                                class="absolute top-full left-1/2 -translate-x-1/2 border-5 border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Desktop View: First Card (2/3 width) -->
            <div
                class="hidden md:flex col-span-2 bg-gray-800 rounded-xl shadow-lg p-6 flex-col max-h-[500px] md:p-6 md:max-h-[500px]">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 mx-auto">Contact Me</h2>
                <p class="text-lg text-gray-500 dark:text-gray-400">
                    Hello, I'm Rohan Chakraborty!
                </p>
                <p class="text-base text-gray-500 dark:text-gray-400 tabbed-paragraph my-2">
                    I'm currently pursuing my Master of Computer Applications (MCA) at Jadavpur University, building on
                    my 2024 graduation from Bangabasi College, Kolkata. Passionate about technology, innovation, and
                    creating impactful solutions, I’m always eager to explore new challenges and collaborate on exciting
                    projects.
                </p>
                <p class="text-base text-gray-500 dark:text-gray-400">
                    Whether you have a project idea, a collaboration opportunity, or just want to connect, I’d love to
                    hear from you! Let’s work together to turn ideas into reality or discuss the latest in tech. Feel
                    free to reach out via email or connect with me on LinkedIn.
                </p>
                <div class="mt-auto flex justify-center gap-6 pt-6 md:gap-6 md:pt-6 md:pb-6">
                    <div v-for="(link, btnIndex) in socialLinks" :key="btnIndex" class="relative"
                        @mouseover="showTooltip(0, btnIndex)" @mouseleave="hideTooltip(0, btnIndex)">
                        <a :href="link.url" target="_blank">
                            <button
                                class="bg-transparent border-none cursor-pointer p-2 hover:scale-110 transition-transform md:p-2">
                                <img :src="link.icon" :alt="link.name" class="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        </a>
                        <div v-if="tooltipVisible[0]?.[btnIndex]"
                            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10 px-3 py-1 text-sm text-gray-100 bg-gray-700 rounded shadow opacity-100 transition-opacity whitespace-nowrap">
                            {{ link.tooltip }}
                            <div
                                class="absolute top-full left-1/2 -translate-x-1/2 border-5 border-t-gray-700 border-x-transparent border-b-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Card (1/3 width) -->
            <div class="col-span-3 md:col-span-1 bg-gray-800 rounded-xl shadow-lg p-4 md:p-6">
                <form class="max-w-md mx-auto" @submit="handleSubmit">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" v-model="formState.email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                            address</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_first_name" id="floating_first_name"
                                v-model="formState.first_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_first_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                name</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_last_name" id="floating_last_name"
                                v-model="formState.last_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_last_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                name</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="[6-9][0-9]{9}" name="floating_phone" id="floating_phone"
                                v-model="formState.phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                number</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_company" id="floating_company" v-model="formState.company"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_company"
                                class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company
                                (Ex. Google)</label>
                        </div>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <textarea id="message" name="message" v-model="formState.message"
                            class="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                            placeholder=" " required></textarea>
                        <label for="message"
                            class="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your
                            message</label>
                    </div>
                    <div class="flex justify-center mt-6">
                        <button class="Subscribe-btn" :disabled="formState.loading">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 38 15"
                                class="arrow">
                                <path
                                    d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.150-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.920.439-1.673.743-2.221.870-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.070.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.950.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.150-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.020-.151-.135-.198-.895-.046-.734.034-1.887.380-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.080-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.100.013-.010.013.781.624zm5.204-3.381c.989-.413 1.791-.420 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z">
                                </path>
                            </svg>
                            Send
                        </button>
                    </div>
                    <!-- Feedback Messages -->
                    <div v-if="formState.error" class="mt-4 text-red-500 text-center text-sm">
                        {{ formState.error }}
                    </div>
                    <div v-if="formState.success" class="mt-4 text-green-500 text-center text-sm">
                        {{ formState.success }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ensure tooltips are styled consistently */
.tooltip {
    opacity: 1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .col-span-3 {
        grid-column: span 1;
    }
}

.Subscribe-btn {
    height: 45px;
    width: 95px;
    border: none;
    border-radius: 15px;
    color: rgb(0, 0, 0);
    cursor: pointer;
    background-color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s;
}

.Subscribe-btn:hover {
    color: #F0F2F5;
}

.Subscribe-btn:active {
    transform: scale(0.9);
}

.Subscribe-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.arrow {
    position: absolute;
    margin-right: 150px;
    transition: all 0.3s;
}

.Subscribe-btn:hover .arrow {
    margin-right: 0;
    animation: jello-vertical 0.9s both;
    transform-origin: right;
}

@keyframes jello-vertical {
    0% {
        transform: scale3d(1, 1, 1);
    }

    30% {
        transform: scale3d(0.75, 1.25, 1);
    }

    40% {
        transform: scale3d(1.25, 0.75, 1);
    }

    50% {
        transform: scale3d(0.85, 1.15, 1);
    }

    65% {
        transform: scale3d(1.05, 0.95, 1);
    }

    75% {
        transform: scale3d(0.95, 1.05, 1);
    }

    100% {
        transform: scale3d(1, 1, 1);
    }
}

textarea#message {
    height: 96px;
    /* Fixed height for 4 lines (4 * 21px line-height + 10px padding + 2px border) */
    resize: none;
    /* Prevent resizing */
    overflow-y: auto;
    /* Vertical scrollbar when content overflows */
    padding-left: 8px;
    /* Add left padding */
    padding-right: 8px;
    /* Add right padding */
}

textarea#message::-webkit-scrollbar {
    width: 6px;
}

textarea#message::-webkit-scrollbar-track {
    background: #e5e7eb;
    /* gray-300 */
    border-radius: 3px;
}

textarea#message::-webkit-scrollbar-thumb {
    background: #2563eb;
    /* blue-600 */
    border-radius: 3px;
}

textarea#message::-webkit-scrollbar-thumb:hover {
    background: #1d4ed8;
    /* blue-700 */
}

.dark textarea#message::-webkit-scrollbar-track {
    background: #4b5563;
    /* gray-600 */
}

.dark textarea#message::-webkit-scrollbar-thumb {
    background: #3b82f6;
    /* blue-500 */
}

.dark textarea#message::-webkit-scrollbar-thumb:hover {
    background: #2563eb;
    /* blue-600 */
}
</style>