<!-- <template>
  <div class="bg-[#F4F4FA] w-full">
    <Navbar />
    <div class="container mx-auto lg:w-[50rem] md:w-full py-10 text-center">
      <h3 class="text-3xl font-semibold text-center">
        We would love your feedback
      </h3>
      //need add if condition o icoming_val 
      <p class="pt-3 text-lg">This feedback form is for vendors only</p>
      <div class="container" v-for="questionNumber in questionsArray" :key="questionNumber">
        //<p>{{key}}</p>
        <QuestionForm :questionNumber="questionNumber" @rating="getRating"/>
        <p>question{{questionNumber.id}}</p>
        //<p>radio{{incoming_val}}</p>
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
      </div>
      <button class="btn btn-active">Submit</button>
    </div>
  </div>
</template> -->

<!-- <script>
import CheckboxQuestion from './checkboxQuestion.vue';
import CheckboxQuestion1 from './checkboxQuestion.vue';
export default {
    name: "VendorForm",

    methods: {
        getRating(value) {
            this.incoming_val = value;
            console.log(this.incoming_val)
        },
    },
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
    components: { CheckboxQuestion, CheckboxQuestion1 }
};
</script> -->
