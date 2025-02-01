var submit_button = document.getElementById('submit');
var users = [['gazni.shahrad@gmail.com', 'smartprogrammer'], ['shahrad', 'smartprogrammer'], ['rezaei@sutech.ac.ir', '654321']]
submit_button.addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  users.forEach((value, index) => {
    let _username = value[0];
    let _password = value[1];
    if(username == _username && password == _password){
      alert('Correct!');
    }
    else{
      alert('Username or Password is incorrect!');
    }
  });
});
