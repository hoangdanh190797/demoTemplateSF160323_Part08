<script setup>
</script>
<template>
  <div class="bg-violet h-[667px] laptop:h-[788px]">
    <div class="relative h-20 laptop:h-36">
      <header>
        <img class="z-50 p-6 laptop:w-[250px] laptop:top-10 laptop:left-10 laptop:p-12 laptop:w-80" src="./assets/myLogo.svg" alt="LogoHuddle"
          width="150" height="">
      </header>
      <div class="block laptop:hidden">
        <img class="z-0 absolute top-0 left-0" src='./assets/bg-mobile.svg' alt="Background-mobile" width="400" height="">
      </div>
      <div class="hidden laptop:block">
        <img class="z-0 absolute top-0 left-0" src='./assets/bg-desktop.svg' alt="Background-desktop" width="1295" height="">
      </div>
    </div>

    <!-- header -->


    <!-- main -->
    <div class="relative">
      <div class="flex flex-col laptop:flex laptop:flex-row">
        <div class="laptop:basis-1/2">
          <img class="z-10 laptop:w-[100%] pl-6" src="./assets/illustration-mockups.svg" alt="" width="350">
        </div>
        <div class="px-10 laptop:basis-1/2 text-center laptop:text-left laptop:pt-24 laptop:pr-44 laptop:pl-20">
          <h1 class="text-white text-2xl font-bold laptop:text-4xl">Build The Community Your Fans Will Love
          </h1>
          <br>
          <p class="text-white">Huddle re-imagines the way we build communities. You have a voice, but so does your
            audience.
            Create connections
            with your users as you engage in genuine discussion</p>
          <br>
          <button class="rounded-full bg-white w-36 h-12 hover:bg-softmagenta"><span
              class="text-violet">Register</span></button>
        </div>

      </div>
    </div>

    <!-- Footer -->
    <footer class="relative">
      <div class="flex justify-center laptop:justify-end">
        <div class="rounded-full w-6 h-6 border static mr-4 mt-4 hover:bg-softmagenta laptop:">
          <div class="absolute right-[230px]">
            <font-awesome-icon :icon="['fab', 'facebook-f']" size="1x" :style="{ color: 'white' }" />
          </div>
        </div>
        <div class="rounded-full w-6 h-6 border static mr-4 mt-4 hover:bg-softmagenta laptop:">
          <div class="absolute right-[185px]">
            <font-awesome-icon :icon="['fab', 'twitter']" size="1x" :style="{ color: 'white' }" />
          </div>
        </div>
        <div class="rounded-full w-6 h-6 border static mr-4 mt-4 hover:bg-softmagenta laptop:mr-[142px]">
          <div class="absolute right-[148px]">
            <font-awesome-icon :icon="['fab', 'instagram']" size="1x" :style="{ color: 'white' }" />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
