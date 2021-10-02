<template>
    <header
        ref="header"
        class="fixed inset-x-0 top-0 z-30 py-5 transition duration-500 ease-in-out md:py-6 lg:py-8"
        :class="{ 'bg-brand': isSticky, 'bg-transparent': !isSticky }"
    >
        <div
            class="container flex flex-row items-center justify-between px-4 mx-auto text-white max-w-7xl"
        >
            <div class="flex flex-col justify-start">
                <div class="flex logo-row flew-row">
                    <img
                        src="./../assets/logo-course.svg"
                        alt="Course"
                        class="z-20 w-auto h-8"
                    />
                    <transition
                        enter-active-class="transition duration-300 ease-in-out delay-300 transform"
                        enter-from-class="-translate-x-full opacity-0"
                        enter-to-class="-translate-x-px opacity-100"
                        leave-active-class="transition duration-300 ease-in-out transform"
                        leave-from-class="-translate-x-px opacity-100"
                        leave-to-class="-translate-x-full opacity-0"
                    >
                        <img
                            v-if="isSticky"
                            src="./../assets/logo-studio.svg"
                            alt="Studio"
                            class="w-auto h-8"
                        />
                    </transition>
                </div>
                <transition
                    enter-active-class="transition duration-300 ease-in-out delay-100 transform"
                    enter-from-class="-translate-y-full opacity-0"
                    enter-to-class="-translate-y-px opacity-100"
                    leave-active-class="transition duration-300 ease-in-out delay-100 transform"
                    leave-from-class="-translate-y-px opacity-100"
                    leave-to-class="-translate-y-full opacity-0"
                >
                    <div class="logo-col" v-if="!isSticky">
                        <img
                            src="./../assets/logo-studio.svg"
                            alt="Studio"
                            class="w-auto h-8"
                        />
                    </div>
                </transition>
            </div>
            <nav class="nav-menu">
                <ul
                    class="hidden md:flex justify-between font-bold uppercase text-[15px]"
                >
                    <li>
                        <a
                            class="px-4 py-2 cursor-pointer hover:underline last:!pr-0"
                            href="#"
                            >Athletes</a
                        >
                    </li>
                    <li>
                        <a
                            class="px-4 py-2 cursor-pointer hover:underline last:!pr-0"
                            href="#"
                            >Log In</a
                        >
                    </li>
                    <li>
                        <a
                            class="px-4 py-2 cursor-pointer hover:underline last:!pr-0"
                            href="#"
                            >Sign Up Now</a
                        >
                    </li>
                </ul>
                <!-- Mobile menu button -->
                <div class="flex items-center md:hidden">
                    <button
                        class="outline-none"
                        @click.prevent="() => (isOpen = !isOpen)"
                    >
                        <FontAwesomeIcon icon="bars" class="text-[2rem] text-white" />
                    </button>
                </div>
                <transition
                    enter-active-class="transition duration-300 ease-in-out transform"
                    enter-from-class="translate-x-full"
                    enter-to-class="translate-x-0"
                    leave-active-class="transition duration-300 ease-in-out transform"
                    leave-from-class="translate-x-0"
                    leave-to-class="translate-x-full"
                >
                    <div
                        class="fixed inset-x-0 top-0 bottom-0 z-50 h-screen overflow-hidden text-white md:hidden bg-brand"
                        v-if="isOpen"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div class="relative">
                            <div class="absolute top-4 right-4">
                                <button
                                    class="outline-none"
                                    @click.prevent="() => (isOpen = !isOpen)"
                                >
                                    <FontAwesomeIcon
                                        icon="times"
                                        class="text-[2rem] text-white"
                                    />
                                </button>
                            </div>
                            <ul
                                class="flex flex-col justify-center px-10 font-bold text-center uppercase divide-y py-14 divide-brand-dark"
                            >
                                <li>
                                    <a class="block px-4 py-4 cursor-pointer" href="#"
                                        >Athletes</a
                                    >
                                </li>
                                <li>
                                    <a class="block px-4 py-4 cursor-pointer" href="#"
                                        >Log In</a
                                    >
                                </li>
                                <li>
                                    <a class="block px-4 py-4 cursor-pointer" href="#"
                                        >Sign Up Now</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </nav>
        </div>
    </header>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faBars, faTimes)

    export default {
        name: 'Header',

        components: {
            FontAwesomeIcon,
        },

        data() {
            return {
                isSticky: false,
                isOpen: false,
            }
        },

        mounted() {
            window.document.onscroll = () => {
                if (window.scrollY > this.$refs.header.offsetHeight) {
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            }
        },
    }
</script>
