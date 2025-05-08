<script setup>
</script>

<template>
    <!-- Desktop View -->
    <div class="hidden md:block border-b border-gray-200 dark:border-gray-700 mx-[clamp(1rem,2vw,2.5rem)]">
        <ul
            class="flex flex-wrap -mb-px text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium text-center text-gray-500 dark:text-gray-400">
            <li class="me-2">
                <a href="#"
                    class="inline-flex items-center justify-center p-[clamp(0.75rem,1.5vw,1rem)] border-b-2 border-gray-300 text-gray-600 rounded-t-lg active dark:text-gray-300 dark:border-gray-300 group">
                    <img src="https://img.icons8.com/?size=100&id=Oob3tccMxkBI&format=png&color=000000" alt="Icon"
                        class="w-[clamp(1.5rem,3vw,1.75rem)] h-[clamp(1.5rem,3vw,1.75rem)] mr-[clamp(0.375rem,0.75vw,0.5rem)]">
                    Project 01
                </a>
            </li>
        </ul>
    </div>
    <!-- Mobile View -->
    <div class="block md:hidden w-[80%] mx-auto border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
                <a href="#"
                    class="inline-flex items-center justify-start p-2 text-gray-600 dark:text-gray-300 group border-b-2 border-gray-300 rounded-t-lg active dark:border-gray-300 group">
                    <img src="https://img.icons8.com/?size=100&id=Oob3tccMxkBI&format=png&color=000000" alt="Icon"
                        width="35px" class="mr-2">
                    Project 01
                </a>
            </li>
        </ul>
    </div>
</template>

<style></style>