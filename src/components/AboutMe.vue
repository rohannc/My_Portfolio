<script setup>
import { ref } from "vue";

const designationLine1 = ref("Rohan Chakraborty");
const designationLine2 = ref("Computer Science Graduate || Software Developer || AI Enthusiast");
const textContent = ref("I’m an MCA student at Jadavpur University, with a love for cracking tough problems through code. My journey with Computer started at Bangabasi College, and now I’m diving deep into tech. I built a DeepFake detection tool with my team that hit 99.98% accuracy using Python and TensorFlow. I thrive in the buzz of hackathons like DoubleSlash 3.0 and coding contests like CodeCrafter, having tackled over 450 problems on LeetCode and GeeksforGeeks and other platforms. I’m always curious, always creating, and excited for what’s next—can’t wait to share more!");
const downloadGIF = ref("https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000");

// New reactive variable for alternate color
const useAltColor = ref(false);

// Function to toggle alternate color (can be called externally)
const toggleAltColor = () => {
    useAltColor.value = !useAltColor.value;
};

const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1dKuI_YY-HckpBuQ7AobFZnZBvkvHWCpg/view?usp=sharing', '_blank');
}
</script>

<template>
    <div
        class="flex flex-col md:flex-row px-[clamp(1rem,2vw,2rem)] mx-[clamp(1rem,2vw,2.5rem)] mb-[clamp(10rem,20vw,12.5rem)] mt-[clamp(5rem,8vw,6rem)] gap-[clamp(1rem,2vw,1.5rem)] typing-container">
        <!-- Right Div (part2) - Top on Mobile, Right on Desktop -->
        <div class="part2 div-border rounded-lg order-1 md:order-2 transition-colors duration-300"
            :class="{ 'alt-color': useAltColor }">
            <div class="pt-6 md:pt-10 w-full rounded-lg overflow-hidden text-center px-4">
                <div class="h-[clamp(10rem,30vw,14rem)] w-[clamp(10rem,30vw,14rem)] mx-auto rounded-lg">
                    <img src="../assets/ProfileImageCropped.jpg"
                        class="w-full h-full object-cover rounded-full border-[clamp(0.125rem,0.25vw,0.1875rem)] border-gray-500 light-mode:border-gray-300 transition-colors duration-300"
                        alt="Profile Image">
                </div>
                <div class="p-2 pt-4 mt-4 md:mt-6">
                    <p
                        class="m-0 text-[clamp(1.25rem,2.5vw,1.75rem)] pt-serif-bold-italic font-semibold text-gray-300 light-mode:text-gray-900 whitespace-nowrap transition-colors duration-300">
                        {{ designationLine1 }}
                    </p>
                    <p
                        class="mb-6 md:mb-10 text-[clamp(0.625rem,1.25vw,0.75rem)] pt-serif-bold-italic font-semibold text-gray-300 light-mode:text-gray-900 transition-colors duration-300">
                        {{ designationLine2 }}</p>
                </div>
                <!-- Download Resume Button (Mobile Only) -->
                <div class="pb-6 flex justify-center md:hidden">
                    <button @click="downloadResume" type="button"
                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-800 light-mode:bg-gradient-to-r light-mode:from-emerald-500 light-mode:via-emerald-600 light-mode:to-emerald-700 light-mode:focus:ring-emerald-300 pt-serif-bold-italic font-medium rounded-lg text-[clamp(0.625rem,1.25vw,0.75rem)] px-4 py-2 text-center transition-colors duration-300">
                        Resume
                    </button>
                </div>
            </div>
        </div>
        <!-- Left Div (part1) - Bottom on Mobile, Left on Desktop -->
        <div class="part1 div-border flex flex-col justify-between rounded-lg p-4 md:p-6 text-gray-300 text-left order-2 md:order-1 transition-colors duration-300"
            :class="{ 'alt-color': useAltColor }">
            <div class="mt-4 md:mt-8">
                <h1
                    class="pl-4 md:pl-6 text-[clamp(1.5rem,3vw,2rem)] playfair-display-regular light-mode:text-gray-900 transition-colors duration-300">
                    Hi, I'm Rohan Chakraborty
                </h1>
                <p
                    class="pl-4 md:pl-6 pt-4 md:pt-8 text-[clamp(0.875rem,1.75vw,1rem)] playfair-display-regular text-left tabbed-paragraph light-mode:text-gray-900 transition-colors duration-300">
                    {{ textContent }}
                </p>
            </div>
            <!-- Download Resume Button (Desktop Only) -->
            <div class="pt-4 md:pt-6 flex justify-center hidden md:flex">
                <button @click="downloadResume"
                    class="hover-button relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[clamp(0.75rem,1.5vw,0.875rem)] pt-serif-bold-italic font-medium text-white light-mode:text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 light-mode:from-violet-600 light-mode:to-blue-600 light-mode:group-hover:from-violet-600 light-mode:group-hover:to-blue-600 hover:text-white transition-colors duration-300">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 light-mode:bg-white rounded-md group-hover:bg-transparent">
                        <img class="icon" :src="downloadGIF" alt="Download" height="20px" width="20px">
                        <span class="hideText">Resume</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
/* Part1 and Part2 Background */
.part1,
.part2 {
    background-color: #1e2939;
    /* Dark gray for dark mode */
    transition: background-color 0.3s ease;
}

/* Hover Button Styles */
.hover-button {
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
}

.hover-button .hideText {
    position: relative;
}

.hover-button .icon {
    position: absolute;
    opacity: 0;
}

.hover-button:hover .hideText {
    opacity: 0;
    position: absolute;
}

.hover-button:hover .icon {
    opacity: 1;
    position: relative;
}

.hover-button .icon img {
    height: 24px;
    width: 24px;
}

/* Part1 and Part2 Layout */
.part1 {
    flex: clamp(1.5, 2 + 0.5 * ((100vw - 768px) / 1152), 2.5);
}

.part2 {
    flex: clamp(0.75, 1 + 0.25 * ((100vw - 768px) / 1152), 1.25);
}

/* Whitespace */
.whitespace-nowrap {
    white-space: nowrap;
}

/* Light Mode Styles */
.light-mode .part1,
.light-mode .part2 {
    background-color: #ffffff;
    /* White background for light mode */
    transition: background-color 0.3s ease;
}

.light-mode .part1 h1,
.light-mode .part1 p,
.light-mode .part2 p {
    color: #1f2937;
    /* Dark gray text for light mode */
    transition: color 0.3s ease;
}

.light-mode .part2 img {
    border-color: #d1d5db;
    /* Light gray border for profile image */
    transition: border-color 0.3s ease;
}

.light-mode .hover-button {
    color: #1f2937;
    /* Dark gray text for light mode */
    background-image: linear-gradient(to bottom right, #7c3aed, #3b82f6);
    /* Purple to blue gradient */
    transition: color 0.3s ease, background-image 0.3s ease;
}

.light-mode .hover-button span {
    background-color: #ffffff;
    /* White background for button content */
    transition: background-color 0.3s ease;
}

.light-mode .hover-button:hover span {
    background-color: transparent;
    /* Transparent on hover */
}

.light-mode .hover-button:hover {
    color: #ffffff;
    /* White text on hover */
}

.light-mode .part2 button {
    background-image: linear-gradient(to right, #10b981, #34d399, #6ee7b7);
    /* Green gradient for mobile button */
    transition: background-image 0.3s ease;
}

.light-mode .part2 button:focus {
    --tw-ring-color: #6ee7b7;
    /* Light green ring for focus */
}

/* Alternate Color Styles */
.alt-color.part1,
.alt-color.part2 {
    background-color: #4b5e8e;
    /* Darker blue-gray for dark mode */
    transition: background-color 0.3s ease;
}

.light-mode .alt-color.part1,
.light-mode .alt-color.part2 {
    background-color: #e0e7ff;
    /* Soft blue-gray for light mode */
}

.alt-color.part1 h1,
.alt-color.part1 p {
    color: #e5e7eb;
    /* Light gray text in dark mode */
    font-family: 'Playfair Display', serif;
    transition: color 0.3s ease;
}

.alt-color.part2 p {
    color: #e5e7eb;
    /* Light gray text in dark mode */
    font-family: 'PT Serif', serif;
    font-weight: 700;
    font-style: italic;
    transition: color 0.3s ease;
}

.light-mode .alt-color.part1 h1,
.light-mode .alt-color.part1 p {
    color: #1f2937;
    /* Dark gray text in light mode */
    font-family: 'Playfair Display', serif;
}

.light-mode .alt-color.part2 p {
    color: #1f2937;
    /* Dark gray text in light mode */
    font-family: 'PT Serif', serif;
    font-weight: 700;
    font-style: italic;
}

.alt-color.part2 img {
    border-color: #9ca3af;
    /* Gray border in dark mode */
    transition: border-color 0.3s ease;
}

.light-mode .alt-color.part2 img {
    border-color: #c7d2fe;
    /* Slightly darker blue-gray border in light mode */
}

/* Contrast Color Styles */
.contrast-color.part1,
.contrast-color.part2 {
    background-color: #64748b;
    /* Slate gray for dark mode */
    transition: background-color 0.3s ease;
}

.light-mode .contrast-color.part1,
.light-mode .contrast-color.part2 {
    background-color: #dbeafe;
    /* Light blue for light mode */
}

.contrast-color.part1 h1,
.contrast-color.part1 p {
    color: #e5e7eb;
    /* Light gray text in dark mode */
    font-family: 'Playfair Display', serif;
    transition: color 0.3s ease;
}

.contrast-color.part2 p {
    color: #e5e7eb;
    /* Light gray text in dark mode */
    font-family: 'PT Serif', serif;
    font-weight: 700;
    font-style: italic;
    transition: color 0.3s ease;
}

.light-mode .contrast-color.part1 h1,
.light-mode .contrast-color.part1 p {
    color: #1f2937;
    /* Dark gray text in light mode */
    font-family: 'Playfair Display', serif;
}

.light-mode .contrast-color.part2 p {
    color: #1f2937;
    /* Dark gray text in light mode */
    font-family: 'PT Serif', serif;
    font-weight: 700;
    font-style: italic;
}

.contrast-color.part2 img {
    border-color: #9ca3af;
    /* Gray border in dark mode */
    transition: border-color 0.3s ease;
}

.light-mode .contrast-color.part2 img {
    border-color: #bfdbfe;
    /* Slightly darker blue border in light mode */
}
</style>
