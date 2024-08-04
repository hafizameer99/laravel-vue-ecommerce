<template>
    <div v-if="currentUser.id" class="min-h-full flex bg-gray-200 min-h-full">
          <!-- Sidebar -->
         <Sidebar :class="{'-ml-[200px]': !sidebarOpened}" />
          <!-- Header -->
          <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar" />
          <!-- Content -->
            <main class="p-6">
              <router-view></router-view>
            </main>
          <!-- Content -->
          </div>
            <!-- <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                {{ title }}
            </h2> -->
    </div>
    <div v-else class="min-h-full bg-gray-200 flex items-center justify-center">
      <Spinner />
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue'
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import store from '../store';
import Spinner from "./core/Spinner.vue";
const { title } = defineProps({
    title: String,
});

const currentUser = computed(() => store.state.user.data)

const sidebarOpened = ref(true)

const toggleSidebar = () => {
 sidebarOpened.value = !sidebarOpened.value
}

onMounted( () => {
  store.dispatch('getUser');
  handleSidebarOpened();
  window.addEventListener('resize', handleSidebarOpened)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleSidebarOpened)
})

const handleSidebarOpened = () => {
  sidebarOpened.value = window.outerWidth > 768
}
</script>
<style scoped></style>
