
const loginForm = document.getElementById('loginForm');
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


const sendRequest = async userId => {
  await axios.post(`https://one-hand/login?uid=${userId}`, {
    email,
    password,
  }, {
    headers: {
      'X-secret-key': 'OH2024'
    }
  }).then(
    document.cookie = "token=one-hand1234",
    window.location.href = "/index.html"
  )
   
  // } catch (error) {
  //   // throw new Error("Login failed" ,error);
  // }
};


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const uid = new URLSearchParams(window.location.search).get('uid') || '1231';
    sendRequest(uid)
})