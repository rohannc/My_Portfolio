```vue
<script setup>
import { ref } from "vue";

const designationLine1 = ref("Rohan Chakraborty");
const designationLine2 = ref("Computer Science Graduate || Software Developer || AI Enthusiast");
const textContent = ref("I’m an MCA student at Jadavpur University, with a love for cracking tough problems through code. My journey with Computer started at Bangabasi College, and now I’m diving deep into tech. I built a DeepFake detection tool with my team that hit 99.98% accuracy using Python and TensorFlow. I thrive in the buzz of hackathons like DoubleSlash 3.0 and coding contests like CodeCrafter, having tackled over 450 problems on LeetCode and GeeksforGeeks and other platforms. I’m always curious, always creating, and excited for what’s next—can’t wait to share more!");
const downloadGIF = ref("https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000");

const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1kglTL7wUMt2hYZ5Rjb5SlouAge9DAURT/view?usp=drive_link', '_blank');
}
</script>

<template>
    <div class="flex flex-col md:flex-row px-4 md:px-8 mx-4 md:mx-10 mb-20 mt-30 gap-4 md:gap-6 typing-container">
        <!-- Right Div (part2) - Top on Mobile, Right on Desktop -->
        <div class="part2 rounded-lg order-1 md:order-2" style="background-color: rgb(30, 41, 57)">
            <div class="pt-6 md:pt-10 w-full rounded-lg overflow-hidden text-center px-4">
                <div class="h-48 w-48 md:h-64 md:w-64 mx-auto rounded-lg">
                    <img src="../assets/ProfileImageCropped.jpg"
                        class="w-full h-full object-cover rounded-full border-2 border-gray-300 dark:border-gray-500"
                        alt="Profile Image">
                </div>
                <div class="p-2 pt-4 mt-4 md:mt-6">
                    <p
                        class="m-0 text-xl md:text-3xl pt-serif-bold-italic font-semibold text-gray-300 whitespace-nowrap">
                        {{ designationLine1 }}
                    </p>
                    <p class="mb-6 md:mb-10 text-xs md:text-sm font-semibold text-gray-300">{{ designationLine2 }}</p>
                </div>
                <!-- Download Resume Button (Mobile Only) -->
                <div class="pb-6 flex justify-center md:hidden">
                    <button @click="downloadResume" type="button"
                        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xs px-4 py-2 text-center">
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
        <!-- Left Div (part1) - Bottom on Mobile, Left on Desktop -->
        <div class="part1 flex flex-col justify-between rounded-lg p-4 md:p-6 text-gray-300 text-left order-2 md:order-1"
            style="background-color: rgb(30, 41, 57)">
            <div class="mt-4 md:mt-8">
                <h1 class="pl-4 md:pl-6 text-2xl md:text-4xl playfair-display-regular">Hi, I'm Rohan Chakraborty</h1>
                <p class="pl-4 md:pl-6 pt-4 md:pt-8 text-sm md:text-base text-left tabbed-paragraph">
                    {{ textContent }}
                </p>
            </div>
            <!-- Download Resume Button (Desktop Only) -->
            <div class="pt-4 md:pt-6 flex justify-center hidden md:flex">
                <button @click="downloadResume"
                    class="hover-button relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white">
                    <span
                        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                        <img class="icon" :src="downloadGIF" alt="Download" height="20px" width="20px">
                        <span class="hideText">Download Resume</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
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

.part1 {
    flex: 2;
}

.part2 {
    flex: 1;
}

.whitespace-nowrap {
    white-space: nowrap;
}
</style>
```