//Gain Access to firebase
const auth = firebase.auth();
const db = firebase.firestore();

//get elements
const txtEmail = document.getElementById('email_input')
const txtPassword = document.getElementById('password_input')
const loginForm = document.querySelector('#signin-form')
const logoutForm = document.querySelector('#signOutBtn')




auth.signOut()
//sign in
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = txtEmail.value;
  const pass = txtPassword.value;

  auth.signInWithEmailAndPassword(email, pass).then(cred => {
    loginForm.reset();
    loginForm.querySelector('.error').innerHTML = " ";
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message;
    
  })

});

//sign out

// logoutForm.addEventListener('click', (e) => {
//   e.preventDefault();


//   auth.signOut()
  


// });



//checks if user is logged in or not and does things accordingly
firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser){ 
    console.log("logged in")
    window.location.href = "C:\Users\ASCStudent\Documents\TRUMNAPP\home\index.html";
}else {
    console.log('not logged in')
}
});
