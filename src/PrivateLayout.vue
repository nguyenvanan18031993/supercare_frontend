<template>
  <!-- component -->
<div class="flex flex-wrap w-full h-screen">
    <div :class="[expand ? 'w-2/12' : 'w-1/12']" class=" bg-white rounded p-3 shadow-lg transition-all duration-500 
                ease-in-out ">
        <div class="flex items-center space-x-4 p-2 mb-5">
            <img class="h-12 rounded-full" src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta">
            <div>
                <h4 class="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James Bhatta</h4>
                <span class="text-sm tracking-wide flex items-center space-x-1">
                    <svg class="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg><span class="text-gray-600">Verified</span>
                </span>
            </div>
        </div>
        <ul class="space-y-2 text-sm">
            <li v-for="(nav, i) in navs" :key="`nav-item-${i}`">
                <!-- <router-link to="/dashboard" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"> -->
                <router-link :to="nav.to" class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                    <span class="text-gray-600">
                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <span>{{nav.text}}</span>
                </router-link>
            </li>
            
        </ul>
        <button @click="expand=!expand">c</button>
    </div>

    <div :class="[expand ? 'w-10/12' : 'w-11/12']" class="transition-all duration-500 ease-in-out">
        <div class="p-4 text-gray-500">
            <router-view/>
        </div>
    </div>
</div>
</template>
<script >
export default {
    data(){
        return {
            expand: false,
            navs : [
                {
                    text:'Dashboard',
                    to:'/dashboard',
                    icon:''
                },
                {
                    text:'Users',
                    to:'/users',
                    icon:''
                }
            ]
        }
    }
}
</script>