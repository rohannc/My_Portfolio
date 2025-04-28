<script setup>
import { reactive } from 'vue';

const achievements = [
    {
        icon1: "https://img.icons8.com/?size=100&id=VfUsAOqMZCj5&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000",
        position: "General Merit Rank: 17",
        color: "#0d9fcf",
        name: "WBJECA 2024",
        institute: "West Bengal Joint Entrance Examination Board",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=46669&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=8946&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "EUREKA - Mystery Solving Competition 2023",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=33486&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=11220&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "Sherlocked, Srijan'25",
        institute: "Faculty of Engineering and Technology, Jadavpur University",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=YpZH52a9GdnR&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000",
        position: "Winner",
        color: "#ffbf00",
        name: "Error 404, Envision 2k25",
        institute: "Ramakrishna Mission Residential College, Narendrapur, Kolkata",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=KL1txQ7JoYvd&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "CodeCrafter, IgniteX 1.0",
        institute: "International Institute of Management, Kolkata",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=J7CvaM9VdM3e&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "Rahasyabhedi - Mystery Solving Competition, Nirdesh 2024",
        institute: "Ramakrishna Mission Vivekananda Centenary College, Rahara, Kolkata",
        description: "",
    },
    {
        icon1: "https://img.icons8.com/?size=100&id=23875&format=png&color=000000",
        icon2: "https://img.icons8.com/?size=100&id=Ib9FADThtmSf&format=png&color=000000",
        position: "First Runner-Up",
        color: "#bc7335",
        name: "The Turing Show, Perceptron 2025",
        institute: "Ramakrishna Mission Vivekananda Educational and Research Institute",
        description: "",
    }
];

// Use reactive to make tooltipVisible reactive, scoped to each v-for item
const tooltipVisible = reactive({});

const showTooltip = (item, buttonId) => {
    if (!tooltipVisible[item]) {
        tooltipVisible[item] = { 1: false, 2: false };
    }
    tooltipVisible[item][1] = false;
    tooltipVisible[item][2] = false;
    tooltipVisible[item][buttonId] = true;
};

const hideTooltip = (item, buttonId) => {
    if (tooltipVisible[item]) {
        tooltipVisible[item][buttonId] = false;
    }
};
</script>

<template>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 10px;" class="mx-15">
        <div v-for="(item, index) in achievements" :key="index"
            style="max-width: 24rem; background-color: rgb(28, 36, 50); border: 1px solid rgb(28, 36, 50); border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); margin-bottom: 15px; display: flex; flex-direction: column; min-height: 300px;">
            <a href="#">
                <div style="overflow: hidden;">
                    <div class="mx-10" style="display: flex; justify-content: space-between; padding: 10px 5px;">
                        <img :src="item.icon1" alt="Image 1"
                            style="width: 35%; height: auto; border-radius: 0.5rem 0 0 0;" />
                        <img :src="item.icon2" alt="Image 2"
                            style="width: 35%; height: auto; border-radius: 0 0.5rem 0 0;" />
                    </div>
                </div>
            </a>
            <div
                style="padding: 1rem; text-align: center; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <h5 style="margin-bottom: 0.2rem; font-size: 1.8rem; font-weight: 700;"
                        :style="{ color: item.color }">
                        {{ item.position }}
                    </h5>
                    <h5 style="margin-bottom: 0.7rem; font-size: 1.5rem; font-weight: 600; color: #d35757;">
                        {{ item.name }}
                    </h5>
                    <h3 style="margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 400; color: #16e607;">
                        {{ item.institute }}
                    </h3>
                    <p style="margin-bottom: 1rem; font-size: 1.2rem; font-weight: 400; color: #2aba93;">
                        {{ item.description || 'No description available' }}
                    </p>
                </div>
                <div style="display: flex; gap: 80px; justify-content: center; margin-top: auto; padding-top: 1rem;">
                    <!-- Button 1 -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 1)"
                        @mouseleave="hideTooltip(index, 1)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img src="https://img.icons8.com/?size=100&id=Psrfh0UtjRyD&format=png&color=000000"
                                alt="Image 1" style="width: 40px; height: auto; padding-top: 4px;" />
                        </button>
                        <div v-if="tooltipVisible[index]?.[1]"
                            style="position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); z-index: 10; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            View
                            <div
                                style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                    <!-- Button 2 -->
                    <div style="position: relative;" @mouseover="showTooltip(index, 2)"
                        @mouseleave="hideTooltip(index, 2)">
                        <button
                            style="background: none; border: none; cursor: pointer; padding: 3px; transition: transform 0.2s;">
                            <img src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000" alt="Image 2"
                                style="width: 50px; height: auto;" />
                        </button>
                        <div v-if="tooltipVisible[index]?.[2]"
                            style="position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); z-index: 10; padding: 6px 10px; font-size: 14px; color: #fff; background-color: #293246; border-radius: 0.25rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); transition: opacity 0.3s; opacity: 1; white-space: nowrap;">
                            Visit LinkedIn
                            <div
                                style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border-width: 5px; border-style: solid; border-color: #293246 transparent transparent transparent;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.card-container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-buttons {
    margin-top: auto;
    padding-top: 1rem;
}
</style>