import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Routes (EJS render)

// Home
app.get('/', (req, res) => {

  const products = [
    { name: "iPhone 17 Pro", image: "/images/iphone.png" },
    { name: "Samsung Ultra", image: "/images/samsung.png" },
    { name: "Infinix Note", image: "/images/infinix.png" },
    { name: "Nothing Phone", image: "/images/nothing.png" },
     { name: "vivo X200", image: "/images/infinix.png" },
    { name: " AI+ Nova 5G ", image: "/images/nothing.png" }
  ];

  res.render("index", { products });  // 🔥 IMPORTANT
});
// Cart
app.post("/add-to-cart", (req, res) => {
  const { name, image } = req.body;

  cart.push({ name, image });

  res.redirect("/");
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

// Payment
app.get('/pay', (req, res) => {
    res.render('pay');
});

// Product page
app.get('/product', (req, res) => {
    res.render('product');
});

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