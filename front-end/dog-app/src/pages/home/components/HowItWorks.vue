<template>
    <section class="how-it-works">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <span>📌</span>
          <h3>Post a Lost/Found Pet</h3>
        </div>
        <div class="step">
          <span>🔍</span>
          <h3>Search Listings</h3>
        </div>
        <div class="step">
          <span>🎉</span>
          <h3>Reunite with Your Pet</h3>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  @media (max-width: 600px) {
    .steps {
      flex-direction: column;
    }
  }
  .how-it-works {
    text-align: center;
    padding: 2rem;
  }
  .steps {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    font-size: 2rem;
  }
  </style>
  