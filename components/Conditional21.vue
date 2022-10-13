<template>
  <div>
    <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
      <div class="card-body">
        <p class="text-lg py-7">
          What exactly did not meet your expectations?
          <!-- {{ CheckBoxOptions }} -->
        </p>
        <div class="flex justify-center items-center lg:gap-10 md:gap-7">
          <div v-for="option in CheckBoxOptions">
            <div class="form-check form-check-inline">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" :id=option.id v-model="checkedNames">
              <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox1">{{ option.text }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from 'vue'

const checkedNames = ref([])

// props: ["CheckBoxOptions"]

// const options = ref([
//   { text: 'Response Time', value: 'A' },
//   { text: 'Behaviour', value: 'B' },
//   { text: 'Did not have sufficient information', value: 'C' },
//   { text: 'Other', value: 'D' }
// ])
  export default {
    // props: ["CheckBoxOptions"],
    name: "Conditional21",
  data() {
    return {
      CheckBoxOptions: [
        {
          id: 1,
          type: "checkbox",
          text: "Response time",
        },
        {
          id: 2,
          type: "checkbox",
          text: "Behavior",
        },
        {
          id: 3,
          type: "checkbox",
          text: "Did not have sufficient information",
        },
        {
          id: 4,
          type: "checkbox",
          text: "Other",
        },
      ],
    };
  },


    methods: {
      checkboxInput(value) {
        this.$store.commit('newStore/set_val_21', value)
      },
    }
  }


</script>
