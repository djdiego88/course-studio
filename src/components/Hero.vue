<template>
    <div
        class="relative h-screen bg-center bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url(${require('./../assets/hero-home2.jpg')})` }"
    >
        <div class="h-screen bg-opacity-50 bg-gradient-to-b from-black">
            <div
                class="container flex flex-col items-end justify-start gap-8 px-4 mx-auto text-white md:gap-12 lg:gap-24 pt-28 md:pt-32 lg:pt-40 max-w-7xl md:flex-row"
            >
                <div
                    class="text-4xl md:text-8xl lg:text-9xl xl:text-[9rem] text-light-yellow w-full md:w-1/2 font-bold xl:leading-[7.5rem] tracking-tight text-center md:text-left"
                >
                    LOREM IPSUM. <strong>DOLORE AMET.</strong>
                </div>
                <div
                    class="w-full text-base font-semibold text-center md:text-2xl lg:text-3xl text-light-yellow md:w-1/3 md:text-left"
                >
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </div>
            </div>
            <div class="flex justify-center my-8 md:my-14">
                <div
                    class="flex items-center justify-center w-16 h-16 text-xs font-semibold text-center text-white uppercase rounded-full md:font-bold md:w-24 md:h-24 md:text-sm bg-darker-gray"
                >
                    <span>Scroll Down</span>
                </div>
            </div>
            <div
                class="absolute inset-x-0 grid w-full grid-cols-1 text-2xl text-center text-white md:text-5xl -bottom-8 md:-bottom-16 place-items-center "
            >
                <FontAwesomeIcon icon="chevron-down" class="animate-bounce" />
                <FontAwesomeIcon icon="chevron-down" class="animate-bounce" />
                <FontAwesomeIcon icon="chevron-down" class="animate-bounce" />
            </div>
        </div>
    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faChevronDown)

    export default {
        name: 'Hero',

        components: {
            FontAwesomeIcon,
        },

        data() {
            return {
                isSticky: false,
                isOpen: false,
            }
        },
    }
</script>

<style lang="postcss" scoped>
    strong {
        @apply text-brand;
        font-weight: inherit;
    }
</style>
