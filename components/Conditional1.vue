<template>
        <div class="card lg:w-[50rem] md:w-full bg-base-100 shadow-xl my-10">
            <div class="card-body">
                <p class="text-lg py-7">
                    How satisfied were you with your onboarding experience with Laam?
                </p>
                <div class="flex justify-center items-center lg:gap-10 md:gap-7">
                    <div>Not at all likely</div>
                    <div v-for="n in 5" class="flex lg:gap-10 md:gap-7">
                        <div class="flex flex-col gap-2">
                            <span>{{n}}</span>
                            <input type="radio" name="radio-11" class="radio" @input="radioInput11(n)" />
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
        radioInput11(value) {
            // // console.log("Conditional-1", this.$store.state.newStore.val_1)
            this.$store.commit('newStore/set_val_11', value)
            // if ((this.$store.state.newStore.val_1 === 3) || (this.$store.state.newStore.val_1 === 4) || (this.$store.state.newStore.val_1 === 5)) {
            //     console.log("Conditional-1", value)
            //     this.$store.commit('newStore/set_val_11', 0)

            // }
            // else {
            //     this.$store.commit('newStore/set_val_11', value)
            // }
        },
    }
}


</script>
