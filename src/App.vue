<template>
    <div class="relative">
        <Header />
        <Hero :info="info.hero" />
        <Athletes />
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Hero from './components/Hero'
    import Athletes from './components/Athletes'

    export default {
        name: 'App',

        components: {
            Header,
            Footer,
            Hero,
            Athletes,
        },

        data() {
            return {
                info: {
                    hero: {}
                },
            }
        },

        created() {
            fetch('/json/cs.json')
                .then(response => response.json())
                .then(info => (this.info = info))
        },
    }
</script>
