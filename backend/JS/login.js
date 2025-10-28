// Tu configuración de Firebase (la obtienes desde la consola del proyecto)
const firebaseConfig = {
    apiKey: "AIzaSyCv16d9Ai9AlqA1PQl4VcjB9pYB_hTMhS8",
    authDomain: "usuarios-proudec.firebaseapp.com",
    projectId: "usuarios-proudec",
    storageBucket: "usuarios-proudec.firebasestorage.app",
    messagingSenderId: "991811261460",
    appId: "1:991811261460:web:f2deb2c0712a8c1ebcc301"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("correo").value.trim();
    const password = document.getElementById("contrasenia").value;

    try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    alert(`Inicio de sesión exitoso: ${user.email}`);
    window.location.href = "inicio.html";
    } catch (error) {
    alert(`Error: El usuario no está registrado`);
    }
});