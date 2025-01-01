<template>
    <div class="w-[200px] transition-all bg-indigo-700 text-white p-4">
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30">
            <span class="mr-2 text-gray-300"><HomeIcon class="w-5"/></span>
            <span>Dashboard</span>
        </router-link>
        <router-link :to="{name: 'app.users'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30">
            <span class="mr-2 text-gray-300"><UsersIcon class="w-5"/></span>
            <span>Users</span>
        </router-link>
        <router-link :to="{name: 'app.products'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30">
            <span class="mr-2 text-gray-300"><ViewListIcon class="w-5"/></span>
            <span>Products</span>
        </router-link>
        <router-link :to="{name: 'app.orders'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30">
            <span class="mr-2 text-gray-300"><ViewListIcon class="w-5"/></span>
            <span>Orders</span>
        </router-link>
        <router-link :to="{name: 'app.dashboard'}" class="flex items-center p-2 rounded transition-colors hover:bg-black/30">
            <span class="mr-2 text-gray-300"><ChartBarIcon class="w-5"/></span>
            <span>Reports</span>
        </router-link>

    </div>
</template>

<script setup>
import {HomeIcon, UsersIcon, ViewListIcon, ChartBarIcon} from '@heroicons/vue/outline'

</script>
<style scoped></style>
