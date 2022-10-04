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
        <QuestionForm />
        <!-- <p>{{$store.state.newStore.val_1}}</p> -->
            <span v-if="$store.state.newStore.val_1 === 1 || $store.state.newStore.val_1 === 2">
                <Conditional1 />
                <span v-if="$store.state.newStore.val_11 === 1 || $store.state.newStore.val_11 === 2">
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
      <!-- <div class="container" v-for="questionNumber in questionsArray" :key="questionNumber">
        <p>{{key}}</p>
        <QuestionForm :questionNumber="questionNumber" @rating="getRating"/>
        <p>question{{questionNumber.id}}</p>
        <p>radio{{incoming_val}}</p>
        <span v-if="questionNumber.id === 1">
          <span v-if="incoming_val === 1 || incoming_val === 2">
            <div v-for="questionNumber1 in conditionalQuestionsArray" :key="questionNumber1.id">
            <ConditionalQuestions1 :questionNumber1="questionNumber1" />
            </div>
          </span>
        </span>
        <span v-else-if="questionNumber.id === 2">
          <span v-if="incoming_val === 1 || incoming_val === 2">
              <div v-for="questionNumber2 in conditionalQuestion2" :key="questionNumber2.id">
                <ConditionalQuestions2 :questionNumber2="questionNumber2" />
              </div>
          </span>
        </span> 
      </div> -->
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
// import ConditionalQuestions2 from './CondistionalQuestions2.vue';
// import QuestionForm from "./QuestionForm.vue";

export default {
    name: "VendorForm",
    // methods: {
    //     getRating(value) {
    //         this.incoming_val = value;
    //         console.log(this.incoming_val)
    //     },
    // },
    data() {
        return {
            incoming_val: 0,
            questionsArray: [
                {
                    id: 1,
                    type: "radio",
                    question: "How likey you would recommend LAAM to other brands?",
                },
                {
                    id: 2,
                    type: "radio",
                    question: "How Helpful is your respective accout manager in resolving your issues?",
                },
                {
                    id: 3,
                    type: "textarea",
                    question: "What is the one thing we could do to make you happier/improve your experience?",
                },
            ],
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
