<template>
  <!-- component -->
  <div>
    <div class="flex flex-wrap w-full h-screen">
      <div
        :class="[expand ? 'left__column__expand' : 'left__column']"
        class="bg-white rounded shadow-lg transition-all duration-500 ease-in-out h-screen fixed"
      >
        <div class="p-3 border-b border-solid border-gray-200">
          <div
            class="flex items-center justify-center"
            style="height: 40px !important"
          >
            <button
              class="text-gray-400"
              style="padding: 8px !important; font-size: 20px !important"
              @click="expand = !expand"
            >
               <svg
                v-if="expand"
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="menu-fold"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"
                ></path>
              </svg> 
              
               <svg
                v-else
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="menu-unfold"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"
                ></path>
              </svg> 
            </button>
            <div class="flex items-center justify-center w-full">
              <img
                v-show="expand"
                class="h-10 w-auto"
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              />
            </div>
          </div>
        </div>
        <ul class="space-y-2 text-sm p-3">
          <li v-for="(nav, i) in navs" :key="`nav-item-${i}`">
            <router-link
              :to="nav.to"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-gray-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span v-if="expand">{{ nav.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>

      <div
        :class="[expand ? 'right__column__expand' : 'right__column']"
        class="transition-all duration-500 ease-in-out right__column_expand"
      >
        <div class="text-gray-600">
          <div
            :class="[expand ? 'header__top__expand' : 'header__top']"
            class="flex justify-between fixed bg-white border-b border-l"
            style="padding: 8px !important; height: 65px !important"
          >
            <h1 class="text-2xl flex items-center justify-center">Users</h1>
            <div>
              <span>
                <img
                  class="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div style="padding-top: 65px">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PrivateLayout",
  data: () => {
    return {
      expand: false,
      navs: [
        {
          text: "Dashboard",
          to: "/dashboard",
          icon: "",
        },
        {
          text: "Users",
          to: "/users",
          icon: "",
        },
      ],
    };
  },
  mounted() {
    console.log(process.env.VUE_APP_TITLE);
  },
};
</script>
<style scoped>
.left__column {
  width: 3% !important;
}
.right__column {
  width: 99% !important;
  padding-left: 3% !important;
}
.left__column__expand {
  width: 15% !important;
}

.right__column__expand {
  width: 99% !important;
  padding-left: 15% !important;
}

.header__top {
  width: 96% !important;
}
.header__top__expand {
  width: 84% !important;
}
</style>