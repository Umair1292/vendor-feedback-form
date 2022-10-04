<!-- <template>
  To set main div's width
  <div>
    <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
      <div class="card-body">
        <p class="text-lg py-7">
          How satisfied were you with your onboarding experience with Laam?
        </p>
        <div class="flex justify-center items-center lg:gap-10 md:gap-7">
          <div>Not at all likely</div>
              <div 
              v-for="n in 5"
              class="flex lg:gap-10 md:gap-7"
              >
                <div class="flex flex-col gap-2">
                  <span>{{n}}</span>
                  <input type="radio" v-model="rating" name="radio-1"  class="radio"/>
                </div>
              </div>
          <div>Extremely likely</div>
        </div>
      if the type is of text area
    </div>
  </div>
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
              <input type="radio" v-model="rating" name="radio-1" class="radio" />
            </div>
          </div>
          <div>Extremely likely</div>
        </div>
        if the type is of text area
      </div>
    </div>
      <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
        <div class="card-body">
          <p class="text-lg py-7">
            How satisfied are you with LAAM’s order pick-up and delivery system?
          </p>
          <div class="flex justify-center items-center lg:gap-10 md:gap-7">
            <div>Not at all likely</div>
            <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
              <div class="flex flex-col gap-2">
                <span>{{n}}</span>
                <input type="radio" v-model="rating" name="radio-1" class="radio" />
              </div>
            </div>
            <div>Extremely likely</div>
          </div>
          if the type is of text area
        </div>
      </div>
    </div>
</template>

<script>
export default {
  // name: ConditionalQuestions1,
  methods: {
    radioInput(rating) {
      this.$emit(rating);
      // to send val to parent
    },
  },
  }
  


</script> -->
