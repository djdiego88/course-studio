<template>
    <div class="relative">
        <Header />
        <div
            class="relative h-screen bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${require('./assets/hero-home2.jpg')})` }"
        >
            <div class="h-screen bg-opacity-50 bg-gradient-to-b from-black">
                <div class="container flex flex-col items-end justify-start gap-24 px-4 pt-20 mx-auto text-white max-w-7xl lg:pt-40 md:flex-row">
                    <div class="text-[9rem] text-light-yellow w-full md:w-1/2 font-bold leading-[7.5rem] tracking-tight">LOREM IPSUM. <strong>DOLORE AMET.</strong></div>
                    <div class="w-full text-3xl font-semibold text-light-yellow md:w-1/3"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="flex justify-center my-16">
                    <div class="flex items-center justify-center w-24 h-24 text-sm font-bold text-center text-white uppercase rounded-full bg-darker-gray">
                        <span>Scroll Down</span>
                    </div>
                </div>
                <div class="absolute inset-x-0 grid w-full grid-cols-1 text-center -bottom-16 place-items-center">
                    <FontAwesomeIcon icon="chevron-down" class="text-5xl text-white animate-bounce" />
                    <FontAwesomeIcon icon="chevron-down" class="text-5xl text-white animate-bounce" />
                    <FontAwesomeIcon icon="chevron-down" class="text-5xl text-white animate-bounce" />
                </div>

            </div>
        </div>
        <div class="bg-dark-light">
            <div class="container flex px-4 mx-auto text-white max-w-7xl lg:py-60 text-9">
                Aquí van un reguero de cosas más que pueden mostrarse debajo de la sección
                de hero y que también deben ser con buen diseño y animados de acuerdo al
                usuario hace scroll bajando por la ventana del navegador.
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faChevronDown)

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
            FontAwesomeIcon,
        },
    }
</script>

<style lang="postcss" scoped>
    .bg-dark-light {
        background: linear-gradient(180deg, #1d201f 50%, #fefbf2 50%);
    }
    strong {
        @apply text-brand;
        font-weight: inherit;
    }
</style>
