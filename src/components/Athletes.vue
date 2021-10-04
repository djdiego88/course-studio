<template>
    <div id="athletes" class="bg-dark-light">
        <div
            class="container flex flex-col px-4 pt-10 pb-24 mx-auto text-white md:pt-16 max-w-7xl lg:pb-28 lg:pt-20 text-9"
        >
            <h3
                class="font-semibold text-light-yellow md:text-xl lg:text-[4rem] lg:leading-[4.5rem] text-center lg:w-9/12 mx-auto pb-10 lg:pb-20"
            >
                {{ athletes.title }}
            </h3>
            <vueper-slides
                class="overflow-hidden no-shadow md:py-16 md:px-14"
                :visible-slides="3"
                :slide-ratio="0.4"
                :dragging-distance="70"
                :breakpoints="{
                    640: { visibleSlides: 1, slideRatio: 1 },
                    768: { visibleSlides: 2, slideRatio: 0.4 },
                    1024: { visibleSlides: 2, slideRatio: 0.4 },
                }"
                :bullets="false"
                :init-slide="2"
            >
                <template #arrow-left>
                    <FontAwesomeIcon icon="chevron-circle-left" class="!w-8 !h-8 md:!w-12 md:!h-12 p-0" />
                </template>

                <template #arrow-right>
                    <FontAwesomeIcon
                        icon="chevron-circle-right"
                        class="!w-8 !h-8 md:!w-12 md:!h-12 p-0"
                    />
                </template>
                <vueper-slide
                    v-for="(athlete, i) in athletes.athletes"
                    :key="i"
                    :link="athlete.url"
                    :image="athlete.image"
                    class="transition opacity-0 bg-brand-light rounded-2xl"
                >
                    <template #content>
                        <div
                            class="relative flex flex-col justify-end h-full p-4 lg:px-9 lg:py-5 rounded-2xl"
                        >
                            <div
                                class="absolute inset-0 w-full h-full bg-black opacity-40 -z-10 rounded-2xl"
                            />
                            <span class="text-xs lg:text-xl slide-title">
                                Connect with
                                <span class="font-semibold underline">
                                    {{ athlete.name }}
                                </span>
                            </span>
                            <span
                                class="text-[0.6rem] lg:text-xs font-bold uppercase slide-subtitle"
                                >{{ athlete.category }}</span
                            >
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
            <div class="flex items-center justify-center text-center">
                <a
                    :href="athletes.more?.link"
                    :title="athletes.more?.text"
                    class="w-full px-8 py-4 mt-8 text-lg font-bold uppercase rounded-full bg-brand hover:bg-brand-dark text-light-yellow focus:outline-none sm:w-auto"
                    >{{ athletes.more?.text }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import {
        faChevronCircleRight,
        faChevronCircleLeft,
    } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faChevronCircleRight, faChevronCircleLeft)

    export default {
        name: 'Athletes',

        components: {
            FontAwesomeIcon,
            VueperSlides,
            VueperSlide,
        },

        data() {
            return {
                isSticky: false,
                isOpen: false,
                athletes: {},
            }
        },

        created() {
            fetch('/json/athletes.json')
                .then(response => response.json())
                .then(athletes => (this.athletes = athletes))
        },
    }
</script>

<style lang="postcss">
    .bg-dark-light {
        background: linear-gradient(180deg, #1d201f 50%, #fefbf2 50%);
    }
    .vueperslide--active {
        @apply transform scale-100 z-10;
    }
    .vueperslide--active .slide-title {
        @apply text-sm lg:!text-2xl;
    }
    .vueperslide--active .slide-subtitle {
        @apply text-[0.6rem] lg:!text-base;
    }
    .vueperslides__parallax-wrapper,
    .vueperslides__track {
        @apply !overflow-visible;
    }
    .vueperslide--visible {
        @apply !opacity-100;
    }
    .vueperslides__arrow {
        @apply rounded-full bg-gray-900;
    }
    .vueperslides__arrow svg {
        padding: 0 !important;
    }
    .vueperslides__arrow--prev {
        left: 0.5em !important;
    }
    .vueperslides__arrow--next {
        right: 0.5em !important;
    }
    @media screen(md) {
        .vueperslide--active {
            @apply transform scale-125 z-10;
        }
        .vueperslides__arrow--prev {
            left: -1.5em !important;
        }
        .vueperslides__arrow--next {
            right: -1.5em !important;
        }
    }
</style>
