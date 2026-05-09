const firebaseConfig = {
    apiKey: "AIzaSyCoV9Euyih7yTyxraT1SsrcgnA5OlMlmBc",
    authDomain: "wesak-de80e.firebaseapp.com",
    projectId: "wesak-de80e",
    storageBucket: "wesak-de80e.firebasestorage.app",
    messagingSenderId: "653495153595",
    appId: "1:653495153595:web:25ff6a815f38c7d9714a9e",
    measurementId: "G-D6ZF7D1W2K"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const counterRef = db.collection('vesakData').doc('pahanCounter');

counterRef.onSnapshot((doc) => {
    if (doc.exists) {
        document.getElementById('pahanCount').innerText = doc.data().count.toLocaleString();
    } else {
        counterRef.set({ count: 0 });
    }
});

async function lightLamp() {
    try {
        await counterRef.set({
            count: firebase.firestore.FieldValue.increment(1)
        }, { merge: true });

        const container = document.getElementById('floating-lamps-container');
        const lamp = document.createElement('img');
        lamp.src = 'assets/lamp.png'; 
        lamp.classList.add('floating-lamp');
        lamp.style.left = (Math.floor(Math.random() * 80) + 10) + '%';
        container.appendChild(lamp);
        setTimeout(() => { lamp.remove(); }, 4000);
    } catch (error) {
        alert("දත්ත සේව් කරද්දී ගැටළුවක් ආවා. Firebase Rules පරීක්ෂා කරන්න.");
    }
}