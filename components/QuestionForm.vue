<template>
    <!-- To set main div's width -->
    <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
      <div class="card-body">
        <p class="text-lg py-7">
          How satisfied are you with your experience at <b>LAAM </b> ?
        </p>
        <div class="flex justify-center items-center lg:gap-10 md:gap-7">
          <div>Not at all likely</div>
          <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
            <div class="flex flex-col gap-2">
              <span>{{n}}</span>
              <input type="radio" name="radio-1" class="radio" @input="radioInput1(n)" />
            </div>
          </div>
          <div>Extremely likely</div>
        </div>
      </div>
    </div>
  <!-- <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
    <div class="card-body">
      <p class="text-lg py-7">
        What is the one thing we could do to make you happier/improve your experience?
      </p>
      <div class="flex justify-center items-center lg:gap-10 md:gap-7">
        <div>Not at all likely</div>
        <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
          <div class="flex flex-col gap-2">
            <span>{{n}}</span>
            <input type="radio" name="radio-1" class="radio" @input="radioInput([n, questionNumber.id])" />
          </div>
        </div>
        <div>Extremely likely</div>
      </div>
    </div>
  </div> -->
  <!-- <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
    <div class="card-body">
      <p class="text-lg py-7">
        What is the one thing we could do to make you happier/improve your experience?
      </p>
      <div class="flex justify-center items-center lg:gap-10 md:gap-7">
        <div>Not at all likely</div>
        <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
          <div class="flex flex-col gap-2">
            <span>{{n}}</span>
            <input type="radio" name="radio-1" class="radio" @input="radioInput([n, questionNumber.id])" />
          </div>
        </div>
        <div>Extremely likely</div>
      </div>
    </div>
  </div> -->
      <!-- <p class="text-lg py-7">
        How Helpful is your respective accout manager in resolving your issues?
      </p>
      <p class="text-lg py-7">
        What is the one thing we could do to make you happier/improve your experience?
      </p> -->
      <!-- if the type is of radio -->
      <!-- <div
        v-if="questionNumber.type === 'radio'"
        class="flex justify-center items-center lg:gap-10 md:gap-7"
      >
        <div>Not at all likely</div>
            <div 
            v-for="n in 5"
            class="flex lg:gap-10 md:gap-7"
            >
              <div class="flex flex-col gap-2">
                <span>{{n}}</span>
                <input type="radio" name="radio-1" class="radio" @input="radioInput([n, questionNumber.id])"/>
              </div>
            </div>
        <div>Extremely likely</div>
      </div> -->
      <!-- if the type is of text area -->
      <!-- <div v-else>
        <textarea
          class="textarea textarea-bordered w-full"
          placeholder="Your Suggestion"
        ></textarea>
      </div> -->
</template>

<script>
export default {
  name: "QuestionForm",

  // props: ["questionNumber"],
  methods: {
    radioInput1(value) {
      console.log("VALUE", value)
      // if(value = 1) {
      //   console.log('in val 1 question',  value)
      //   this.$store.commit('newStore/set_val_1', value)
      // }
      // if(value = 2) {
      //   console.log('in val 1 question1', value)
        this.$store.commit('newStore/set_val_1', value)
      if ((this.$store.state.newStore.val_1 === 3) || (this.$store.state.newStore.val_1 === 4) || (this.$store.state.newStore.val_1 === 5)) {
        console.log("Conditional-1", value)
        this.$store.commit('newStore/set_val_11', 0)
        this.$store.commit('newStore/set_val_12', 0)
        this.$store.commit('newStore/set_val_13', 0)
        this.$store.commit('newStore/set_val_14', 0)

      }
      // else {
      //   this.$store.commit('newStore/set_val_11', value)
      // }
      // }
            // this.$emit('rating',value); 
            // to send val to parent
      },
  }
}


</script>
