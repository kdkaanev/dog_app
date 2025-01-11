<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        errors: {
            type: Array,
            required: true,
        },
        requred: Boolean,
        disabled: Boolean,
            
        
    },
};

</script>


<template>
    <fieldset :disabled="disabled">
        <label>
            <span>{{ title }} <i v-if="requred">*</i> </span>
            <slot/>
        </label>
        <div class="errorContainer">
      <strong
        v-for="error of errors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </strong>
    </div>
    </fieldset>
</template>


<style scoped>
   span {
       display: block;
       i{
           color: red;
       }
   }
   fieldset label {
    margin: 0;
   }
    .errorContainer {
     display: flex;
     flex-wrap: wrap;
     font-size: o.75rem;
     font-weight: bold;
     gap: 0.25rem;
     color: red;

    }
</style>