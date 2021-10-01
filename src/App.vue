<template>
    <div class="relative">
        <Header />
        <div
            class="relative h-screen bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${require('./assets/hero-home2.jpg')})` }"
        >
            <div class="h-screen bg-opacity-50 bg-gradient-to-b from-black">
                <div class="container flex flex-col items-end px-4 pt-20 mx-auto text-white max-w-7xl lg:pt-36 md:flex-row">
                    <div class="text-[170px] text-light-yellow w-full md:w-2/3 font-bold leading-[9rem] tracking-tight">LOREM IPSUM. <strong>DOLORE AMET.</strong></div>
                    <div class="w-full text-3xl font-semibold text-light-yellow md:w-1/3"><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
            </div>
        </div>
        <div class="bg-dark-light">
            <div class="container flex px-4 mx-auto text-white max-w-7xl lg:py-60">
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

    export default {
        name: 'App',
        components: {
            Header,
            Footer,
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
