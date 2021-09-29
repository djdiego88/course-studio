<template>
    <div class="bg-yellow-50">
        <Header />
        <div
            class="relative h-screen bg-fixed bg-center bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${require('./assets/hero-home2.jpg')})` }"
        >
            <div class="h-screen bg-opacity-50 bg-gradient-to-b from-black">
                <div class="container flex mx-auto text-white max-w-7xl lg:pt-36">
                    Aquí va el contenido del hero
                </div>
            </div>
        </div>
        <div class="bg-dark-light">
            <div
                class="container flex mx-auto text-whitemax-w-7xl lg:py-60"
            >
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
  background: linear-gradient(180deg, #27272A 50%, #FEFCE8 50%);
}
</style>
