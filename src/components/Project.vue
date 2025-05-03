<template>
    <ProjectNavbar />
    <div class="md:flex mx-20 mt-10">
        <ul
            class="tagesschrift-regular flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 flex flex-col items-center sidebar">
            <li v-for="tab in tabs" :key="tab.id" class="w-full">
                <button type="button"
                    class="inline-flex items-center justify-start px-5 py-2.5 rounded-lg w-full text-sm font-medium gap-2 cursor-pointer"
                    :class="{
                        'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800': activeTab === tab.id,
                        'text-gray-500 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white dark:text-gray-400': activeTab !== tab.id
                    }" @click="setActiveTab(tab.id)">
                    <img :src="tab.icon" alt="Icon" class="my-1 w-6 h-6 object-contain" />
                    <span class="my-1 pr-10">{{ tab.name }}</span>
                </button>
            </li>
        </ul>
        <div class="w-full min-h-[90vh]">
            <div id="introduction"
                class="min-h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col items-center"
                :class="{ 'hidden': activeTab !== 'Introduction' }">
                <h1
                    class="text-center mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">DeepFake
                    </span> Image Detection
                </h1>
                <swiper class="w-full max-w-4xl mb-8" :modules="modules" :slides-per-view="1" :space-between="0"
                    :loop="true" :autoplay="{ delay: 5000, disableOnInteraction: false }"
                    :pagination="{ clickable: true }" :navigation="true" :effect="'fade'"
                    :fade-effect="{ crossFade: true }">
                    <swiper-slide>
                        <img src="../assets/Website01.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Front Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website02.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Front Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website03.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Image Upload">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website04.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Output Page 01">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website05.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Output Page 02">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website06.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Model Output">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website07.png" class="w-full h-56 md:h-96 object-cover rounded-lg"
                            alt="Contact Page">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/Website08.png" class="w-fit h-56 md:h-96 object-cover rounded-lg"
                            alt="Responsive Design">
                    </swiper-slide>
                </swiper>
                <div class="mx-20 py-6">
                    <ul class="flex md:flex-row flex-col md:gap-8 gap-4 justify-center">
                        <li v-for="item in items" :key="item.name" class="flex items-center gap-4">
                            <img src="../assets/ProjectIcon1Cropper.jpg" alt="Profile picture"
                                class="w-10 h-10 rounded-full" />
                            <div class="font-medium text-sm dark:text-white">
                                {{ item.name }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="about"
                class="min-h-full p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg"
                :class="{ 'hidden': activeTab !== 'About' }">
                <div class="max-w-4xl mx-auto flex flex-col space-y-6">
                    <div>
                        <h2
                            class="text-2xl font-bold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=100&id=bCMIMDcgAmSp&format=png&color=000000"
                                alt="AI Icon" class="w-6 h-6">
                            DeepFake Image Detection
                        </h2>
                        <p class="mt-2 text-lg text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            The rise of deep learning and generative adversarial networks (GANs) has enabled the
                            creation of highly realistic "DeepFake" images and videos. These AI-generated manipulations
                            threaten the authenticity of digital content, facilitating misinformation, identity fraud,
                            and erosion of trust in media. As deepfake technology becomes more accessible, there is an
                            urgent need for robust detection frameworks to distinguish genuine images from manipulated
                            ones. The "Learning to Identify DeepFake Images" project addresses this by developing an
                            advanced detection system that combines state-of-the-art machine learning with forensic
                            analysis to safeguard digital integrity.
                        </p>
                    </div>
                    <div>
                        <h3
                            class="text-xl font-semibold text-gray-900 dark:text-white pt-serif-bold flex items-center gap-2">
                            <img src="https://img.icons8.com/?size=100&id=46721&format=png&color=000000"
                                alt="Project Icon" class="w-6 h-6">
                            Project Overview
                        </h3>
                        <p class="mt-2 text-base text-gray-500 dark:text-gray-400 tabbed-paragraph">
                            This project designs a comprehensive DeepFake Image Detection framework, integrating deep
                            learning and forensic techniques. Key components include:
                        </p>
                        <ul class="mt-3 space-y-3 text-base text-gray-500 dark:text-gray-400 list-none">
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-4 h-4 mt-1">
                                <span>
                                    <strong class="font-semibold">DeepFake Image Dataset</strong>: Utilizes a diverse
                                    dataset of authentic and deepfake images with various manipulations,
                                    transformations, and demographics to ensure robust model generalization.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-4 h-4 mt-1">
                                <span>
                                    <strong class="font-semibold">Two-Phase Deep Learning Architecture</strong>: Employs
                                    a CNN for feature extraction in the first phase, followed by a CNN classifier in the
                                    second phase to predict Real/Fake outcomes.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-4 h-4 mt-1">
                                <span>
                                    <strong class="font-semibold">Error Level Analysis (ELA)</strong>: Highlights JPEG
                                    compression discrepancies to identify manipulated regions, providing a visual
                                    heatmap for transparency.
                                </span>
                            </li>
                            <li class="flex items-start gap-2">
                                <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000"
                                    alt="Bullet" class="w-4 h-4 mt-1">
                                <span>
                                    <strong class="font-semibold">Web-Based Detection Interface</strong>: Offers a
                                    user-friendly web app for uploading images and receiving real-time classification
                                    results, enhancing accessibility.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p class="text-base text-gray-500 dark:text-gray-400 tabbed-paragraph">
                        By combining deep learning with forensic analysis, this project delivers a robust, interpretable
                        solution for DeepFake detection. It achieves high accuracy, provides visual explanations, and
                        supports efforts to combat synthetic media risks, ensuring trust in digital content.
                    </p>
                </div>
            </div>
            <div id="techstack"
                class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 min-h-[90vh]"
                :class="{ 'hidden': activeTab !== 'TechStack' }">
                <div style="background-color: #435168;" id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1" class="">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 transition-colors duration-200"
                            :class="{
                                'bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-950': activeAccordions.includes(1),
                                'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-4 border-gray-200 dark:border-slate-800': !activeAccordions.includes(1)
                            }" @click="toggleAccordion(1)" :aria-expanded="activeAccordions.includes(1)"
                            aria-controls="accordion-open-body-1">
                            <span class="flex items-center pt-serif-bold">
                                <img src="https://img.icons8.com/?size=100&id=42900&format=png&color=000000"
                                    alt="FrontEnd" class="w-6 h-6 mr-3">
                                FrontEnd
                            </span>
                            <img src="https://img.icons8.com/?size=100&id=44002&format=png&color=000000" alt="Expand"
                                class="w-6 h-6" :class="{ 'hidden': activeAccordions.includes(1) }">
                            <img src="https://img.icons8.com/?size=100&id=aweW6OloZ1wC&format=png&color=000000"
                                alt="Close" class="w-6 h-6" :class="{ 'hidden': !activeAccordions.includes(1) }">
                        </button>
                    </h2>
                    <div id="accordion-open-body-1" :class="{ 'hidden': !activeAccordions.includes(1) }"
                        aria-labelledby="accordion-open-heading-1">
                        <div class="p-5 bg-green-100 dark:bg-slate-800">
                            <div class="flex gap-4 flex-wrap comic-relief-bold">
                                <button v-for="button in frontendButtons" :key="button.text"
                                    class="relative inline-flex items-center justify-center p-0.5 mb-2 min-w-[150px] min-h-[48px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                                    @click="handleButtonClick(button.text)">
                                    <span
                                        class="relative px-12 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-4 whitespace-nowrap">
                                        <img :src="button.icon" alt="Icon" class="w-7 h-7 object-contain" />
                                        {{ button.text }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-2" class="">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 transition-colors duration-200"
                            :class="{
                                'bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-950': activeAccordions.includes(2),
                                'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-4 border-gray-200 dark:border-slate-800': !activeAccordions.includes(2)
                            }" @click="toggleAccordion(2)" :aria-expanded="activeAccordions.includes(2)"
                            aria-controls="accordion-open-body-2">
                            <span class="flex items-center pt-serif-bold">
                                <img src="https://img.icons8.com/?size=100&id=43653&format=png&color=000000"
                                    alt="BackEnd" class="w-6 h-6 mr-3">
                                BackEnd
                            </span>
                            <img src="https://img.icons8.com/?size=100&id=44002&format=png&color=000000" alt="Expand"
                                class="w-6 h-6" :class="{ 'hidden': activeAccordions.includes(2) }">
                            <img src="https://img.icons8.com/?size=100&id=aweW6OloZ1wC&format=png&color=000000"
                                alt="Close" class="w-6 h-6" :class="{ 'hidden': !activeAccordions.includes(2) }">
                        </button>
                    </h2>
                    <div id="accordion-open-body-2" :class="{ 'hidden': !activeAccordions.includes(2) }"
                        aria-labelledby="accordion-open-heading-2">
                        <div class="p-5 bg-green-100 dark:bg-slate-800">
                            <div class="flex gap-4 flex-wrap comic-relief-bold">
                                <button v-for="button in backendButtons" :key="button.text"
                                    class="relative inline-flex items-center justify-center p-0.5 mb-2 min-w-[150px] min-h-[48px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                                    @click="handleButtonClick(button.text)">
                                    <span
                                        class="relative px-12 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-4 whitespace-nowrap">
                                        <img :src="button.icon" alt="Icon" class="w-7 h-6 object-contain" />
                                        {{ button.text }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-3" class="">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 transition-colors duration-200"
                            :class="{
                                'bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-950': activeAccordions.includes(3),
                                'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-4 border-gray-200 dark:border-slate-800': !activeAccordions.includes(3)
                            }" @click="toggleAccordion(3)" :aria-expanded="activeAccordions.includes(3)"
                            aria-controls="accordion-open-body-3">
                            <span class="flex items-center pt-serif-bold">
                                <img src="https://img.icons8.com/?size=100&id=42918&format=png&color=000000"
                                    alt="Error Level Analysis" class="w-6 h-6 mr-3">
                                Error Level Analysis
                            </span>
                            <img src="https://img.icons8.com/?size=100&id=44002&format=png&color=000000" alt="Expand"
                                class="w-6 h-6" :class="{ 'hidden': activeAccordions.includes(3) }">
                            <img src="https://img.icons8.com/?size=100&id=aweW6OloZ1wC&format=png&color=000000"
                                alt="Close" class="w-6 h-6" :class="{ 'hidden': !activeAccordions.includes(3) }">
                        </button>
                    </h2>
                    <div id="accordion-open-body-3" :class="{ 'hidden': !activeAccordions.includes(3) }"
                        aria-labelledby="accordion-open-heading-3">
                        <div class="p-5 bg-green-100 dark:bg-slate-800">
                            <div class="flex gap-4 flex-wrap comic-relief-bold">
                                <button v-for="button in elaButtons" :key="button.text"
                                    class="relative inline-flex items-center justify-center p-0.5 mb-2 min-w-[150px] min-h-[48px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                                    @click="handleButtonClick(button.text)">
                                    <span
                                        class="relative px-12 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-4 whitespace-nowrap">
                                        <img :src="button.icon" alt="Icon" class="w-7 h-7 object-contain" />
                                        {{ button.text }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <h2 id="accordion-open-heading-4" class="">
                        <button type="button"
                            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 gap-3 transition-colors duration-200"
                            :class="{
                                'bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-950': activeAccordions.includes(4),
                                'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-b-4 border-gray-200 dark:border-slate-800': !activeAccordions.includes(4)
                            }" @click="toggleAccordion(4)" :aria-expanded="activeAccordions.includes(4)"
                            aria-controls="accordion-open-body-4">
                            <span class="flex items-center pt-serif-bold">
                                <img src="https://img.icons8.com/?size=100&id=xaquNfre75yC&format=png&color=000000"
                                    alt="Machine Learning" class="w-6 h-6 mr-3">
                                Machine Learning
                            </span>
                            <img src="https://img.icons8.com/?size=100&id=44002&format=png&color=000000" alt="Expand"
                                class="w-6 h-6" :class="{ 'hidden': activeAccordions.includes(4) }">
                            <img src="https://img.icons8.com/?size=100&id=aweW6OloZ1wC&format=png&color=000000"
                                alt="Close" class="w-6 h-6" :class="{ 'hidden': !activeAccordions.includes(4) }">
                        </button>
                    </h2>
                    <div id="accordion-open-body-4" :class="{ 'hidden': !activeAccordions.includes(4) }"
                        aria-labelledby="accordion-open-heading-4">
                        <div class="p-5 bg-green-100 dark:bg-slate-800">
                            <div class="flex gap-4 flex-wrap comic-relief-bold">
                                <button v-for="button in mlButtons" :key="button.text"
                                    class="relative inline-flex items-center justify-center p-0.5 mb-2 min-w-[150px] min-h-[48px] overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                                    @click="handleButtonClick(button.text)">
                                    <span
                                        class="relative px-12 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent flex items-center justify-center gap-4 whitespace-nowrap">
                                        <img :src="button.icon" alt="Icon" class="w-7 h-7 object-contain" />
                                        {{ button.text }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="link"
                class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg flex flex-col min-h-[90vh]"
                :class="{ 'hidden': activeTab !== 'Link' }">
                <div class="flex flex-col w-full">
                    <h3 class="mb-5 text-xl font-semibold text-gray-900 dark:text-white mb-4 pt-serif-bold">DeepFake
                        Defender || Github Repository</h3>
                    <div class="mb-4">
                        <p class="mb-2">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-4 h-4 inline-block mr-2">
                            Clone the repository:
                        </p>
                        <div
                            class="relative bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-sm text-gray-800 dark:text-gray-200">
                            <code>git clone https://github.com/rohannc/FinalYearProject_DeepFakeImageDetection.git</code>
                            <button @click="copyCommand('git clone https://github.com/username/repo.git', 0)"
                                class="absolute top-2 right-2 px-2 py-1 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center gap-1">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[0] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <p class="mb-2">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-4 h-4 inline-block mr-2">
                            Navigate to the project folder:
                        </p>
                        <div
                            class="relative bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-sm text-gray-800 dark:text-gray-200">
                            <code>cd [repo_name]</code>
                            <button @click="copyCommand('cd repo', 1)"
                                class="absolute top-2 right-2 px-2 py-1 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center gap-1">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[1] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <p class="mb-2">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-4 h-4 inline-block mr-2">
                            Install dependencies:
                        </p>
                        <div
                            class="relative bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-sm text-gray-800 dark:text-gray-200">
                            <code>npm install</code>
                            <button @click="copyCommand('npm install', 2)"
                                class="absolute top-2 right-2 px-2 py-1 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center gap-1">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[2] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                    <div class="mb-4">
                        <p class="mb-2">
                            <img src="https://img.icons8.com/?size=100&id=44053&format=png&color=000000" alt="Bullet"
                                class="w-4 h-4 inline-block mr-2">
                            Run the project:
                        </p>
                        <div
                            class="relative bg-gray-100 dark:bg-gray-900 rounded-md p-2 font-mono text-sm text-gray-800 dark:text-gray-200">
                            <code>npm run dev</code>
                            <button @click="copyCommand('npm run dev', 3)"
                                class="absolute top-2 right-2 px-2 py-1 bg-green-200 text-black hover:text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-700 text-xs flex items-center gap-1">
                                <img src="https://img.icons8.com/?size=100&id=43148&format=png&color=000000" alt="Copy"
                                    class="w-4 h-4">
                                <span>{{ copied[3] ? 'Copied!' : 'Copy' }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="buttonDownload mx-auto mt-10 flex justify-center cursor-pointer">
                    <button class="cursor-pointer">
                        Click Me to Visit the Github Repository!
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectNavbar from './ProjectNavbar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const copied = ref([false, false, false, false]);
const copyCommand = (command, index) => {
    navigator.clipboard.writeText(command).then(() => {
        copied.value[index] = true;
        setTimeout(() => {
            copied.value[index] = false;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
};

const modules = [Autoplay, Pagination, Navigation, EffectFade];

const tabs = [
    {
        id: 'Introduction',
        name: 'Introduction',
        icon: 'https://img.icons8.com/?size=100&id=104233&format=png&color=000000',
        content: {
            main: 'DeepFake Image Detection: Leveraging AI and Forensic Analysis\nA Robust System for Identifying Manipulated Images in the Age of Synthetic Media',
            secondary: ''
        }
    },
    {
        id: 'About',
        name: 'About',
        icon: 'https://img.icons8.com/?size=100&id=102326&format=png&color=000000',
        content: {
            main: 'DeepFake Image Detection: Leveraging AI and Forensic Analysis\nA Robust System for Identifying Manipulated Images in the Age of Synthetic Media',
            secondary: 'Check your progress and stay informed about your account status.'
        }
    },
    {
        id: 'TechStack',
        name: 'TechStack',
        icon: 'https://img.icons8.com/?size=100&id=19020&format=png&color=000000',
        content: {
            main: 'The Settings tab allows you to customize your experience. Adjust your notification preferences, privacy settings, and more.',
            secondary: 'Make changes to tailor the platform to your needs.'
        }
    },
    {
        id: 'Link',
        name: 'Link',
        icon: 'https://img.icons8.com/?size=100&id=43229&format=png&color=000000',
        content: {
            main: 'Get in touch with us through the Contact tab. Submit your questions, feedback, or support requests here.',
            secondary: 'Our team is here to assist you with any inquiries.'
        }
    }
];

const items = ref([
    {
        name: 'Rohan Chakraborty',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
        name: 'Adrika Ghosh',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
        name: 'Subhashis Mondal',
        image: 'https://images.unsplash.com/photo-1487412729047-8bef73b3f8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80'
    }
]);

const frontendButtons = ref([
    { text: 'HTML', icon: 'https://img.icons8.com/?size=100&id=46605&format=png&color=000007' },
    { text: 'CSS', icon: 'https://img.icons8.com/?size=100&id=107497&format=png&color=000000' },
    { text: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png&color=000000' },
    { text: 'Bootstrap', icon: 'https://img.icons8.com/?size=100&id=ZMc42tPbG32H&format=png&color=000000' }
]);

const backendButtons = ref([
    { text: 'Flask', icon: 'https://img.icons8.com/?size=100&id=ewGOClUtmFX4&format=png&color=000000' },
]);

const elaButtons = ref([
    { text: 'PIL', icon: 'https://img.icons8.com/?size=100&id=zLlZqaDdonl7&format=png&color=000000' },
    { text: 'OpenCV', icon: 'https://img.icons8.com/?size=100&id=bpip0gGiBLT1&format=png&color=000000' }
]);

const mlButtons = ref([
    { text: 'PyTorch', icon: 'https://img.icons8.com/?size=100&id=O6SWwpPIM0GB&format=png&color=000000' },
    { text: 'Scikit-learn', icon: 'https://img.icons8.com/?size=100&id=qfwWgmubuPUl&format=png&color=000000' },
    { text: 'NumPy', icon: 'https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000' }
]);

const activeTab = ref('Introduction');
const activeAccordions = ref([]);

const setActiveTab = (tabId) => {
    activeTab.value = tabId;
};

const toggleAccordion = (index) => {
    if (activeAccordions.value.includes(index)) {
        activeAccordions.value = activeAccordions.value.filter(i => i !== index);
    } else {
        activeAccordions.value.push(index);
    }
};

const handleButtonClick = (text) => {
    console.log(`Button clicked: ${text}`);
};
</script>

<style scoped>
.sidebar {
    width: 160px;
    /* Fixed width to match the largest button ("Introduction") */
}

.buttonDownload {
    width: 40%;
    --green: #1bfd9c;
    font-size: 15px;
    padding: 0.7em 2.7em;
    letter-spacing: 0.06em;
    position: relative;
    font-family: inherit;
    border-radius: 0.6em;
    overflow: hidden;
    transition: all 0.3s;
    line-height: 1.4em;
    border: 2px solid var(--green);
    background: linear-gradient(to right,
            rgba(27, 253, 156, 0.1) 1%,
            transparent 40%,
            transparent 60%,
            rgba(27, 253, 156, 0.1) 100%);
    color: var(--green);
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
        0 0 9px 3px rgba(27, 253, 156, 0.1);
}

.buttonDownload:hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
        0 0 9px 3px rgba(27, 253, 156, 0.2);
}

.buttonDownload:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(to right,
            transparent 1%,
            rgba(27, 253, 156, 0.1) 40%,
            rgba(27, 253, 156, 0.1) 60%,
            transparent 100%);
}

.buttonDownload:hover:before {
    transform: translateX(30em);
}

/* Swiper custom styles */
:deep(.swiper) {
    position: relative;
}

:deep(.swiper-slide) {
    display: flex;
    justify-content: center;
    align-items: center;
}

:deep(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: #fff;
    opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background: #fff;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: background 0.3s;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
    background: rgba(255, 255, 255, 0.5);
}

:deep(.swiper-button-prev:after),
:deep(.swiper-button-next:after) {
    font-size: 16px;
}

.tabbed-paragraph {
    text-indent: 40px;
    /* Indent the first line */
}
</style>