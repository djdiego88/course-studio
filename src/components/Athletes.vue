<template>
    <div id="athletes" class="bg-dark-light">
        <div class="container flex flex-col px-4 mx-auto text-white max-w-7xl lg:pb-60 lg:pt-20 text-9">
            <h3 class="font-semibold text-light-yellow lg:text-[4rem] lg:leading-[4.5rem] text-center lg:w-9/12 mx-auto lg:pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing.</h3>
            <div class="relative flex items-center lg:flex-row">
                <div class="relative lg:w-[30%]">
                    <img class="rounded-2xl" src="./../assets/athlete-placeholder-bg-basketball.jpg" alt="" />
                </div>
                <div class="relative lg:w-[40%]">
                    <img class="rounded-2xl" src="./../assets/athlete-placeholder-bg-boxing.jpg" alt="" />
                </div>
                <div class="relative lg:w-[30%]">
                    <img class="rounded-2xl" src="./../assets/athlete-placeholder-bg-basketball.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import { library } from '@fortawesome/fontawesome-svg-core'
    //import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    //import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    //library.add(faChevronDown)

    export default {
        name: 'Athletes',

        components: {
            //FontAwesomeIcon,
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
    .bg-dark-light {
        background: linear-gradient(180deg, #1d201f 50%, #fefbf2 50%);
    }
</style>
