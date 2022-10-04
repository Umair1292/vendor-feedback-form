<template>
  <div class="bg-[#F4F4FA] min-h-screen">
    <Navbar />
    <div class="container mx-auto w-[50rem] py-10 text-center">
      <h3 class="text-3xl font-semibold text-center">
        We would love your feedback
      </h3>
      <!-- need add if condition o icoming_val -->
      <p class="pt-3 text-lg">This feedback form is for vendors only</p>
      <div v-for="questionNumber in questionsArray" :key="questionNumber">
        <!-- <p>{{key}}</p> -->
        <QuestionForm :questionNumber="questionNumber" @rating="getRating" />
        <p>question{{ questionNumber.id }}</p>
        <p>radio{{ incoming_val }}</p>
        <span v-if="questionNumber.id === 1">
          <span v-if="incoming_val === 1 || incoming_val === 2">
            <div
              v-for="questionNumber1 in conditionalQuestionsArray"
              :key="questionNumber1.id"
            >
              <ConditionalQuestions1 :questionNumber1="questionNumber1" />
            </div>
          </span>
        </span>
        <span v-else-if="questionNumber.id === 2">
          <span v-if="incoming_val === 1 || incoming_val === 2">
            <p>Hello</p>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckboxQuestion from "./checkboxQuestion.vue";
import CheckboxQuestion1 from "./checkboxQuestion.vue";
export default {
  name: "VendorForm",
  methods: {
    getRating(value) {
      this.incoming_val = value;
      console.log("parent");
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
          conditionalQuestions: [
            {
              id: 1-1,
              type: "radio",
              question:
                "How satisfied were you with your onboarding experience with Laam?",
                  conditionalQuestions: [
                      {
                          id: 1-1-1,
                          type: "textarea",
                          question:
                              "Please mention reason",
                      },
                  ]
            },
            {
              id: 1-2,
              type: "radio",
              question: "How satisfied are you with LAAM’s payments process?",
                conditionalQuestions: [
                    {
                        id: 1-2-1,
                        type: "textarea",
                        question:
                            "Please mention reason",
                    },
                ]
            },
            {
              id: 1-3,
              type: "radio",
              question:
                "How satisfied are you with LAAM’s order pick-up and delivery system?",
                conditionalQuestions: [
                    {
                        id: 1-3-1,
                        type: "textarea",
                        question:
                            "Please mention reason",
                    },
                ]
            },
          ],
        },
        {
          id: 2,
          type: "radio",
          question:
            "How helpful is the Account Management team in resolving your issues?",
            conditionalQuestions: [
                {
                    id: 2-1,
                    type: "checkbox",
                    question:
                        "What exactly did not meet your expectations?",
                    options: ["Response time", "Behavior", "Did not have sufficient information", "Other"]
                },
            ]
        },
        {
          id: 3,
          type: "textarea",
          question:
            "What is the one thing we could do to make you happier/improve your experience?",
        },
      ],
    };
  },
  components: { CheckboxQuestion, CheckboxQuestion1 },
};
</script>
