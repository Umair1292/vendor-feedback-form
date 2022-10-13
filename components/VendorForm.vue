<template>
  <div class="bg-[#F4F4FA] w-full">
    <Navbar />
    <div class="container mx-auto lg:w-[50rem] md:w-full py-10 text-center">
      <h3 class="text-3xl font-semibold text-center">
        We would love your feedback
      </h3>
      <!-- need add if condition o icoming_val -->
      <p class="pt-3 text-lg">This feedback form is for vendors only</p>
      <div class="container">
        <!-- 1st Question -->
        <QuestionForm />
            <span v-if="$store.state.newStore.val_1 === 1 || $store.state.newStore.val_1 === 2">
                <!-- 1st conditional question -->
                <Conditional1 />
                <span v-if="$store.state.newStore.val_11 === 1 || $store.state.newStore.val_11 === 2">
                  <!-- Textarea  -->
                  <Conditional11 />
                </span>
                <Conditional2 />
                <span v-if="$store.state.newStore.val_12 === 1 || $store.state.newStore.val_12 === 2">
                  <Conditional11 />
                </span>
                <Conditional3 />
                <span v-if="$store.state.newStore.val_13 === 1 || $store.state.newStore.val_13 === 2">
                  <Conditional11 />
                </span>
                <Conditional4 />
                <span v-if="$store.state.newStore.val_14 === 1 || $store.state.newStore.val_14 === 2">
                  <Conditional11 />
                </span>
            </span>
        <QuestionForm1 />
            <span v-if="$store.state.newStore.val_2 === 1 || $store.state.newStore.val_2 === 2">
              <Conditional21 />
                <span v-if="$store.state.newStore.val_21 === 'option4'">
                  <Conditional11 />
                </span>
            </span>
        <QuestionForm2 />
      </div>
      <button class="btn btn-active">Submit</button>
    </div>
  </div>
</template>

<script>
import CheckboxQuestion from './checkboxQuestion.vue';
import CheckboxQuestion1 from './checkboxQuestion.vue';
import QuestionForm from "../components/QuestionForm.vue";
import QuestionForm1 from "../components/QuestionForm1.vue";
import QuestionForm2 from "../components/QuestionForm2.vue";
import Conditional1 from "../components/Conditional1.vue";
import Conditional11 from './Conditional11.vue';
import Conditional21 from './Conditional21.vue';

export default {
    name: "VendorForm",
    data() {
        return {
            //incoming_val: 0,
            conditionalQuestionsArray: [
                {
                    id: 4,
                    type: "radio",
                    question: "How satisfied were you with your onboarding experience with Laam?",
                },
                {
                    id: 5,
                    type: "radio",
                    question: "How satisfied are you with LAAM’s payments process?",
                },
                {
                    id: 6,
                    type: "radio",
                    question: "How satisfied are you with LAAM’s order pick-up and delivery system?",
                },
            ],
          conditionalQuestion2: [
            {
              id: 7,
              type: "checkbox",
              question:
                "What exactly did not meet your expectations?",
              options: ["Response time", "Behavior", "Did not have sufficient information", "Other"]
            },
          ]
        };
    },
    components: { CheckboxQuestion, CheckboxQuestion1, Conditional11, Conditional21 }
};
</script>
