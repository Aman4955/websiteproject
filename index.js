
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

let cart = [];

const app = express();

//===== fix __dirname diclera done========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



//  EJS setup

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ================== TELEGRAM bot CONFIG ==================
const TOKEN = "8235443510:AAFOwrss_rNp3fyQXWBFjZ9pRGTlw5ws3Cc";   
const CHAT_ID = "8363575839";

// ===============Home=============
app.get('/', (req, res) => {

  const products = [
    { name: "iPhone 17 Pro", image: "/images/iphone17.jpg"  },
    { name: "Samsung Ultra", image: "/images/SamsungUltra.jpg" },
    { name: "Infinix Zore", image: "/images/InfinixZore.jpg" },
    { name: "Nothing Phone", image: "/images/NothingPhone.jpg" },
     { name: "vivo X200", image: "/images/vivoX200.jpg" },
    { name: " AI+ Nova 5G ", image: "/images/AI+Nova.jpg" }
  ];

 const ads = [
  { image: "/images/a1.jpg" },
  { image: "/images/a2.jpg" },
  { image: "/images/a3.jpg" },
  { image: "/images/a4.jpg" },
  { image: "/images/a5.jpg" },
  { image: "/images/a6.jpg" }
];

  //  IMPORTANT LINE
  res.render("index", { products, ads });
});


//============= Cart========
app.post("/add-to-cart", (req, res) => {
  const { name, image } = req.body;

  cart.push({ name, image });

  res.redirect("/");
});



//========= Payment============

app.get("/checkout", (req, res) => {
    res.render("checkout"); 
});

// 👉 ORDER + TELEGRAM
app.post("/pay", async (req, res) => {
  try {
    const data = req.body;

    console.log("🔥 ORDER:", data);

    const message = `
🛒 New Order

👤 Name: ${data.fullname}
📞 Phone: ${data.phone}

📍 Address:
${data.address}
${data.city}, ${data.state} - ${data.pincode}

💳 Payment: ${data.payment}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      })
    });

    const result = await response.json();
    console.log("📩 Telegram:", result);

    res.send("✅ Order Sent Successfully 🚀");

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.send("❌ Error sending order");
  }
});

// =========product===========

// Product page
app.get('/product', (req, res) => {
    res.render('product');
});

// Products
app.get('/infinix50', (req, res) => {
    res.render('infinix50');
});

app.get('/infinixedg', (req, res) => {
    res.render('infinixedg');
});

app.get('/nothing', (req, res) => {
    res.render('nothing');
});

app.get('/nothingpro', (req, res) => {
    res.render('nothingpro');
});

app.get('/samsungphone', (req, res) => {
    res.render('samsungphone');
});

// ==========login==============
// Login page
app.get('/login', (req, res) => {
    res.render('login');
});

// ✅ Login POST
app.post('/login', (req, res) => {
    const { username, userpassword } = req.body;

    console.log("Login:", username, userpassword);

    res.redirect('/');
});


// ==========sing=============
// Page open
app.get('/sign', (req, res) => {
    res.render('sign');
});

// Form submit
app.post('/sign', (req, res) => {
    const { username, userpassword } = req.body;
    console.log("Signup:", username, userpassword);
    res.redirect('/');
});




// Server start
app.listen(4000, () => {
    console.log("🔥 Server running on ");
});
