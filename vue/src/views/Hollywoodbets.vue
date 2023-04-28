<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>  

<template>

 
  
  <div class="min-w-fit">
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="min-w-fit">
              <img class="h-8 w-8" src="https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/322596815_859197731996900_9009854986590706102_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZKwZNwSE22gAX8wYtRQ&_nc_ht=scontent-jnb1-1.xx&oh=00_AfC8-pfppnaJGf6NX47y9UiFN_opHRgwQgs9dDKcplxH7A&oe=64514831" alt="Your Company" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div class="border-t border-gray-700 pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
              <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
            </div>
            <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1 px-2">
            <DisclosureButton v-for="item in userNavigation" :key="item.name" as="a" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">{{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Hollywoodbets</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
 <div class="container mt-4" id="app">

<table class="table table-bordered">
  <thead>
   
  </thead>
  <tbody>
    <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[0].title }}</td>
<td>{{ myRacecard.races[0].distance }}</td>
<td>{{ myRacecard.races[0].stake }}</td>
<td>{{ myRacecard.races[0].course }}</td>
<td>{{ myRacecard.races[0].club }}</td>
</tr>

    

     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[0].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>

     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[1].title }}</td>
<td>{{ myRacecard.races[1].distance }}</td>
<td>{{ myRacecard.races[1].stake }}</td>
<td>{{ myRacecard.races[1].course }}</td>
<td>{{ myRacecard.races[1].club }}</td>
</tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[1].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[2].title }}</td>
<td>{{ myRacecard.races[2].distance }}</td>
<td>{{ myRacecard.races[2].stake }}</td>
<td>{{ myRacecard.races[2].course }}</td>
<td>{{ myRacecard.races[2].club }}</td>
</tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[2].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[3].title }}</td>
<td>{{ myRacecard.races[3].distance }}</td>
<td>{{ myRacecard.races[3].stake }}</td>
<td>{{ myRacecard.races[3].course }}</td>
<td>{{ myRacecard.races[3].club }}</td>
</tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[3].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[4].title }}</td>
<td>{{ myRacecard.races[4].distance }}</td>
<td>{{ myRacecard.races[4].stake }}</td>
<td>{{ myRacecard.races[4].course }}</td>
<td>{{ myRacecard.races[4].club }}</td>
</tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[4].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
    <tr>
<td>{{ myRacecard.races[5].title }}</td>
<td>{{ myRacecard.races[5].distance }}</td>
<td>{{ myRacecard.races[5].stake }}</td>
<td>{{ myRacecard.races[5].course }}</td>
<td>{{ myRacecard.races[5].club }}</td>
</tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">Horse Number</th>
      <th scope="col">Horse Name</th>
      <th scope="col">Draw</th>
      <th scope="col">Jockey Name</th>
      <th scope="col">Trainer Name</th>
      <th scope="col">weight</th>
     
    </tr>
     <tr v-for="horse, index in myRacecard.races[5].horses">
      <td scope="row">{{ horse.horseNo }}</td>
      <td>{{ horse.horseName }}</td>
      <td>{{ horse.draw }}</td>
      <td>{{ horse.jockeyName }}</td>
      <td>{{ horse.trainerName }}</td>
      <td>{{ horse.weight }}</td>
     </tr>
     <tr class="border-2 rounded-r-xl m-24">
      <th scope="col">RaceTitle</th>
      <th scope="col">Distance</th>
      <th scope="col">Stake</th>
      <th scope="col">Course</th>
      <th scope="col">Club</th>
      
     
    </tr>
   

   
  </tbody>
</table>
</div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  name: 'Ryno Du Toit',
  email: 'ryno952@gmail.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
{ name: 'Redcliffe', href: '/redcliffe', current: true },
  { name: 'Lyon-Parilly', href: '/lyon', current: false },
  { name: 'Hollywoodbets Greyville', href: '/holly', current: false },
  
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },

]





</script>
<script>
import json from "/public/3.json";

export default {
  name: "App",
  data: () => ({ RaceCard_C3R: "racecard" }),
  computed: {
    myRacecard: function () {
      return json[this.RaceCard_C3R] || {};
    },
  },
};

</script>