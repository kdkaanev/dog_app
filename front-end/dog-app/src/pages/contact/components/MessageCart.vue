<script>
export default {
  props: {
    message: Object,
  },
};


</script>

<template>

    <div >
      <h2>{{ message.sender.full_name }}</h2>
        <h3>{{ message.message }}</h3>
        
       
        
       
    </div>
</template>