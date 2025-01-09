<template>
    <div class="form">
      <article>
        <form>
         <fieldset>
            <legend>Signup</legend>
            <div>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <button type="submit">Signup</button>
         </fieldset>
        </form>
      </article>
    </div>
  </template>


<style scoped>
.form  {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.form article {
  width: 100%;
  max-width: 500px;

}
</style>