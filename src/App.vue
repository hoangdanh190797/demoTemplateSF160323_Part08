<script setup>
</script>

<template>
  <div class="bg-violet templateHome">
    <!-- header -->
    <div class="relative h-1/2">
      <header>
        <img class="absolute z-50 top-5 left-3" src="./assets/myLogo.svg" alt="LogoHuddle" width="150" height="">
      </header>
      <div>
        <img class="absolute z-0" src='./assets/bg-mobile.svg' alt="Bground" width="400" height="">
      </div>
      <div>
        <img class="absolute z-10 top-20 left-3" src="./assets/illustration-mockups.svg" alt="" width="350">
      </div>
    </div>
    <div class="text-center">
      <h1 class="text-white text-2xl font-bold">Build The Community Your Fans Will Love
      </h1>
      <br>
      <p class="text-white">Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
        Create connections
        with your users as you engage in genuine discussion</p>
      <br>
      <button class="rounded-full bg-white w-36 h-12 hover:bg-softmagenta"><span
          class="text-violet">Register</span></button>
    </div>
    <div>
      <div class="flex justify-center">
        <div class="rounded-full w-6 h-6 border static">
          <div class="absolute right-[198px]">
            <font-awesome-icon :icon="['fab', 'facebook-f']" size="1x" :style="{ color: 'white' }" />
          </div>
        </div>
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </div>

    </div>

  </div>
</template>

<style scoped>
.templateHome {
  height: 700px;
}
</style>
