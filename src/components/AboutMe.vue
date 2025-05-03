<script setup>
import { ref } from "vue";

const imageUrl = ref("../../assets/ProfileImageCropped.jpg");
const designationLine1 = ref("Rohan Chakraborty");
const designationLine2 = ref("Computer Science Graduate || Software Developer || AI Enthusiast");
const textContent = ref("I’m an MCA student at Jadavpur University, with a love for cracking tough problems through code. My journey with Computer started at Bangabasi College, and now I’m diving deep into tech. I built a DeepFake detection tool with my team that hit 99.98% accuracy using Python and TensorFlow. I thrive in the buzz of hackathons like DoubleSlash 3.0 and coding contests like CodeCrafter, having tackled over 450 problems on LeetCode and GeeksforGeeks and other platforms. I’m always curious, always creating, and excited for what’s next—can’t wait to share more!");
const downloadGIF = ref("https://img.icons8.com/?size=100&id=aO3W9kKC9PMv&format=png&color=000000");

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '../assets/Rohan_s_Resume_2025.pdf';
    link.download = 'Rohan_Chakraborty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
</script>

<template>
    <div class="flex relative px-8 mx-10 mb-20 mt-30 gap-6 typing-container">
        <div class="part1 flex flex-col justify-between rounded-lg p-6 text-gray-300 text-left"
            style="background-color: rgb(30, 41, 57)">
            <div class="mt-8">
                <h1 class="pl-6 text-4xl playfair-display-regular">Hi, I'm Rohan Chakraborty</h1>
                <p class="pl-6 pt-8 text-base text-left tabbed-paragraph">
                    {{ textContent }}
                </p>
            </div>
            <div class="pt-6 flex justify-center">
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
        <div class="part2 rounded-lg" style="background-color: rgb(30, 41, 57)">
            <div class="pt-10 w-full rounded-lg overflow-hidden text-center px-4">
                <div class="h-64 w-64 mx-auto rounded-lg">
                    <img src="../assets/ProfileImageCropped.jpg"
                        class="w-full h-full object-cover rounded-full border-2 border-gray-300 dark:border-gray-500"
                        alt="Profile Image">
                </div>
                <div class="p-2 pt-4 mt-6">
                    <p class="m-0 text-3xl pt-serif-bold-italic font-semibold text-gray-300 whitespace-nowrap">{{
                        designationLine1 }}</p>
                    <p class="mb-10 text-sm font-semibold text-gray-300">{{ designationLine2 }}</p>
                </div>
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