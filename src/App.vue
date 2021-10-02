<template>
    <div class="relative">
        <Header />
        <Hero />
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
    }
</script>
