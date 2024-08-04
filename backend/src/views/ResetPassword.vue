<template>
    <GuestLayout title="Set New Password">
        <form class="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div>
                <label
                    for="new-password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >New Password</label
                >
                <div class="mt-2">
                    <input
                        id="new-password"
                        name="password"
                        type="password"
                        autocomplete="password"
                        required=""
                        placeholder="New Password"
                        class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <div>
                <label
                    for="password-repeat"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Repeat Password</label
                >
                <div class="mt-2">
                    <input
                        id="password-repeat"
                        name="password_repeat"
                        type="password"
                        autocomplete="password"
                        required=""
                        placeholder="Repeat Password"
                        class="bg-white block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <div class="text-sm mt-2">
                    <router-link
                        :to="{ name: 'Login' }"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                        >Go Back to Login</router-link
                    >
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </form>
    </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/GuestLayout.vue";
</script>
<style scoped></style>
