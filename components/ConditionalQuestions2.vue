<template>
  <!-- To set main div's width -->
  <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
    <div class="card-body">
      <p class="text-lg py-7">
        {{ questionNumber2.question }}
      </p>
      <!-- if the type is of radio -->
      <div class="flex justify-center items-center lg:gap-10 md:gap-7">
        <div>Not at all likely</div>
            <div 
            v-for="n in 5"
            class="flex lg:gap-10 md:gap-7"
            >
              <div class="flex flex-col gap-2">
                <span>{{n}}</span>
                <input type="radio" name="radio-1" class="radio" @input1="radioInput(n)"/>
              </div>
            </div>
        <div>Extremely likely</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["questionNumber2"],
    }


</script>
