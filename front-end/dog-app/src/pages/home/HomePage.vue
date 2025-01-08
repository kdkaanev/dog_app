
<template>
   
    <article class="slogan">
        Where Lost Paws Find Their Way Home
    </article>
    <article>
      <div class="cart">
        <div class="catr-pics">
            <img class="pics"  src="https://img.freepik.com/free-vector/flat-chihuahua-silhouette_23-2150346441.jpg?t=st=1736242964~exp=1736246564~hmac=601eb78949914a0a27390f7e2b9457edea4ac71a5b38bbae4a49cd7317ea457c&w=740" alt="chihua">
            <h2>Name</h2>
        </div>
       
      </div>
      <div class="cart">
        <div class="catr-pics">
            <img class="pics"  src="https://img.freepik.com/free-vector/flat-chihuahua-silhouette_23-2150346441.jpg?t=st=1736242964~exp=1736246564~hmac=601eb78949914a0a27390f7e2b9457edea4ac71a5b38bbae4a49cd7317ea457c&w=740" alt="chihua">
            <h2>Name</h2>
        </div>
       
      </div>
      <div class="cart">
        <div class="catr-pics">
            <img class="pics"  src="https://img.freepik.com/free-vector/flat-chihuahua-silhouette_23-2150346441.jpg?t=st=1736242964~exp=1736246564~hmac=601eb78949914a0a27390f7e2b9457edea4ac71a5b38bbae4a49cd7317ea457c&w=740" alt="chihua">
            <h2>Name</h2>
        </div>
       
      </div>
      <div class="cart">
        <div class="catr-pics">
            <img class="pics"  src="https://img.freepik.com/free-vector/flat-chihuahua-silhouette_23-2150346441.jpg?t=st=1736242964~exp=1736246564~hmac=601eb78949914a0a27390f7e2b9457edea4ac71a5b38bbae4a49cd7317ea457c&w=740" alt="chihua">
            <h2>Name</h2>
        </div>
       
      </div>
      <div class="cart">
        <div class="catr-pics">
            <img class="pics"  src="https://img.freepik.com/free-vector/flat-chihuahua-silhouette_23-2150346441.jpg?t=st=1736242964~exp=1736246564~hmac=601eb78949914a0a27390f7e2b9457edea4ac71a5b38bbae4a49cd7317ea457c&w=740" alt="chihua">
            <h2>Name</h2>
        </div>
       
      </div>

    </article>

  <!--   <article>
    <img :src="product.images" :alt="product.title">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p><b>Price</b>: {{ product.price }}</p>

    <button type="button" class="secondary outline" @click="cartStore.addToCart(product)">
      Add to cart 🛒
    </button>
    <button
      v-if="userStore.isUserLoged"
      type="button" class="contrast" :class="[isFavorite ? '' : 'outline']"
      @click="favoritiesStore.toggleFavorite(product.id)"
    >
      Favorite {{ isFavorite ? '💙' : '🤍' }}
    </button>
  </article> -->

</template>

<style scoped>
article{
    background-color:rgb(217 254 249);
    display: grid;

    grid-template-columns: repeat(auto-fill,240px);
    justify-content: start;
    gap:32px;
}
.pics{
   
width: 100%;
padding: 1rem;
}
.cart{
    border-radius: 8px;
    width: 240px;
    background-color:rgb(238 222 196);
    text-align: center;
}
.slogan {
font-family: "Playwrite AU SA", serif;
  font-optical-sizing: auto;
  font-weight:bold;
  font-style: normal;
}

</style>
