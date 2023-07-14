<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full">
          <div class="">
            <div
              :class="[expand ? 'left__col__expand' : 'left__col']"
              class="transition-all duration-500 ease-in-out fixed"
            >
              <div v-show="expand">
                <h1>All Users transition-all duration-500 ease-in-out fixed transition-all duration-500 ease-in-out fixed transition-all duration-500 ease-in-out fixed</h1>
              </div>
            </div>
            <div
              class="overflow-hidden transition-all duration-500 ease-in-out bg-gray-100"
              :class="[expand ? 'right__col__expand' : 'right__col']"
            >
              <button
                class="text-gray-400"                
                @click="expand = !expand"
              >
              <img v-if="expand" src="../assets/icons/left-arrow.svg">
              <img v-else src="../assets/icons/right-arrow.svg">
                
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
                  <tr
                    v-for="(u, i) in users"
                    :key="`user-${i}`"
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                  >
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      {{ u.id }}
                    </td>
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
      users: [],
    };
  },
  mounted() {
    for (let index = 0; index < 50; index++) {
      this.users.push({
        id: index,
        first: "First " + index,
        last: "Last " + index,
        handle: "handle " + index,
      });
    }
  },
};
</script>
<style scoped>
.left__col {
  width: 0% !important;
}

.left__col__expand {
  width: 13% !important;
}

.right__col {
  width: 100% !important;
}

.right__col__expand {
  width: 85% !important;
  margin-left: 15% !important;
}
</style>