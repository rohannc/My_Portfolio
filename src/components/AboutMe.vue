<script setup>

import { ref } from "vue";

const imageUrl = ref("src\\assets\\ProfileImageCropped.jpg");
const designationLine1 = ref("Rohan Chakraborty");
const designationLine2 = ref("Computer Science Graduate || Software Developer || AI Enthusiast");
const textContent = ref("I’m an MCA student at Jadavpur University, with a love for cracking tough problems through code. My journey with Computer started at Bangabasi College, and now I’m diving deep into tech. I built a DeepFake detection tool with my team that hit 99.98% accuracy using Python and TensorFlow. I thrive in the buzz of hackathons like DoubleSlash 3.0 and coding contests like CodeCrafter, having tackled over 450 problems on LeetCode and GeeksforGeeks and other platforms. I’m always curious, always creating, and excited for what’s next—can’t wait to share more!");

</script>

<template>
    <div class="flex relative px-8 mx-25 my-20 typing-container">
        <div class="part1 text-gray-300 text-left pt-30">
            <h1 class="typing playfair-display-regular">Hi, I'm Rohan Chakraborty</h1>
            <p class="intro-text text-base">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {{ textContent }}
            </p>
        </div>
        <div class="part2">
            <div class="pt-10 w-full rounded-lg overflow-hidden text-center pl-10">
                <div class="w-full h-80 overflow-hidden">
                    <img :src="imageUrl" class="w-full h-full object-cover rounded-full" alt="Profile Image">
                </div>
                <div class="p-2 pt-4">
                    <p class="m-0 text-3xl pt-serif-bold-italic font-semibold text-gray-300">{{ designationLine1 }}
                    </p>
                    <p class="m-0 text-sm font-semibold text-gray-300">{{ designationLine2 }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    height: 200px;
}

.part1 {
    flex: 2;
}

.part2 {
    flex: 1;
}

.typing-container {
    text-align: center;
}

.typing {
    font-size: 2.5em;
    font-weight: bold;
    overflow: hidden;
    border-right: 0.15em solid rgb(209, 213, 220);
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.15em;
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: rgb(209, 213, 220);
    }
}

.intro-text {
    margin-top: 20px;
    max-width: 600px;
}

</style>