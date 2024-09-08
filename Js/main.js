
window.onload = () => {
  const token = document.cookie?.split('; ')?.find(cookie => cookie.startsWith('token='))?.split('=')[1];
  console.log(token)
  if (token !== 'one-hand1234' || token == undefined) {
    setTimeout(() => {
      window.location.href = "login.html";
 
    }, 2000);
    document.body.innerHTML =`<section> 
        <h1>Please log in</h1> 
        <h2>You don't have access here you will be redirected to the login page after few seconds</h2>
        </section>`
  } else{
    return null
  }
}
