const router = require("express").Router();
const userCollection = require("./User");
const bcrypt = require("bcryptjs");
router.get("/", (req, res) => {
  res.render("loginandsignup");
});
router.get("/display-shop-page",(req,res)=>{
res.render("shop")
})
router.get("/display-home-page",(req,res)=>{
res.render("index")
})
router.get("/display-about-page",(req,res)=>{
res.render("about")
})
router.get("/display-contact-page",(req,res)=>{
res.render("contact")
})
router.get("/display-faq-page",(req,res)=>{
res.render("faq")
})
router.post("/signup", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSaltSync(10);
  const hashedPass = await bcrypt.hashSync(req.body.password, salt);
  const data = {
    name: req.body.name,
    password: hashedPass,
    email: req.body.email,
    // role: "admin"
  };


await userCollection.create(data);

res.render("index");

  })

 
router.post("/login", async (req, res) => {
  try {
    const check = await userCollection.findOne({ email: req.body.email });
    
    if (
      bcrypt.compareSync(req.body.password, check.password) &&
      check !== null
    ) {  

      console.log("Logged in");
    //   console.log(req.session.user);
      res.render("index")
    } else {
      res.send("wrong password");
    }
  } catch {
    res.send("wrong details");
  }

});

module.exports = router;
