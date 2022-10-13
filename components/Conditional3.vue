<template>
        <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
            <div class="card-body">
                <p class="text-lg py-7">
                    How satisfied are you with LAAM’s payments process?
                </p>
                <div class="flex justify-center items-center lg:gap-10 md:gap-7">
                    <div>Not at all likely</div>
                    <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
                        <div class="flex flex-col gap-2">
                            <span>{{n}}</span>
                            <input type="radio" name="radio-13" class="radio" @input="radioInput13(n)" />
                        </div>
                    </div>
                    <div>Extremely likely</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "QuestionForm",
  methods: {
    radioInput13(value) {
      console.log("VALUE", value)
      this.$store.commit('newStore/set_val_13', value)
    },
  }
}


</script>>
