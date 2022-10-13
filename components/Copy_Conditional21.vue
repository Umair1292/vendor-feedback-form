<template>
  <div>
    <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
      <div class="card-body">
        <p class="text-lg py-7">
          What exactly did not meet your expectations?
        </p>
        <div class="flex justify-center items-center lg:gap-10 md:gap-7">
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" id="inlineCheckbox1" value="option1">
              <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox1">Response Time</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" id="inlineCheckbox2" value="option2">
              <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox2">Behaviour</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" id="inlineCheckbox3" value="option3">
              <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox3">Did not have sufficient information</label>
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox" id="inlineCheckbox4" value="option4" @input1="checkboxInput(n)">
              <label class="form-check-label inline-block text-gray-800" for="inlineCheckbox4">Other</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Conditional21",

  methods: {
    checkboxInput(value) {
      this.$store.commit('newStore/set_val_21', value)
    },
  }
}


</script>
