<template>
    <div>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <!-- <div class="sm:col-span-3">
                        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Type</label>
                        <div class="mt-2">
                            <select id="country" name="country" autocomplete="country-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                            </select>
                        </div>
                    </div> -->
                    <div class="flex">
                        <div :class="[expand ? 'left__col__expand' : 'left__col']"
                            class="transition-all duration-500 ease-in-out">
                            <div v-show="expand">
                                <h1>All Users</h1>
                            </div>
                        </div>
                        <div class="overflow-hidden transition-all duration-500 ease-in-out bg-white"
                            :class="[expand ? 'right__col__expand' : 'right__col']">
                            <button class="text-gray-400" style="padding: 8px !important; font-size: 20px !important"
                                @click="expand = !expand">
                                <svg v-if="expand" viewBox="64 64 896 896" focusable="false" data-icon="menu-fold"
                                    width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z">
                                    </path>
                                </svg>
                                <svg v-else viewBox="64 64 896 896" focusable="false" data-icon="menu-unfold" width="1em"
                                    height="1em" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z">
                                    </path>
                                </svg>
                            </button>
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">#</th>
                                        <th scope="col" class="px-6 py-4">First</th>
                                        <th scope="col" class="px-6 py-4">Last</th>
                                        <th scope="col" class="px-6 py-4">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(u, i) in users" :key="`user-${i}`"
                                        class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ u.id }}</td>
                                        <td class="whitespace-nowrap px-6 py-4">{{ u.first }}</td>
                                        <td class="whitespace-nowrap px-6 py-4">{{ u.last }}</td>
                                        <td class="whitespace-nowrap px-6 py-4">{{ u.handle }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            expand: true,
            users: []
        }
    },
    mounted() {
        for (let index = 0; index < 50; index++) {
            this.users.push({
                id: index,
                first: 'First ' + index,
                last: 'Last ' + index,
                handle: 'handle ' + index
            })

        }
    }
}
</script>
<style scoped>
.left__col {
    width: 0% !important;
}

.left__col__expand {
    width: 15% !important;
}

.right__col {
    width: 100% !important;
}

.right__col__expand {
    width: 85% !important;
}
</style>