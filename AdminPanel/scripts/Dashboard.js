import { admin } from "../components/Admin.js";

let ad = document.getElementById("body");
ad.innerHTML = admin();

const url = "http://localhost:3000/shampoo";
const Furl = "http://localhost:3000/facewash";
const Lurl = "http://localhost:3000/lipstick";
const Curl = "http://localhost:3000/cream";

// var Total_Products = 0;

const getProducts = async () => {
  try {
    let Total_Products = 0;

    let Sres = await fetch(`http://localhost:3000/shampoo`);
    let Sdata = await Sres.json();

    let Fres = await fetch(`http://localhost:3000/facewash`);
    let Fdata = await Fres.json();

    let Lres = await fetch(`http://localhost:3000/lipstick`);
    let Ldata = await Lres.json();

    let Cres = await fetch(`http://localhost:3000/cream`);
    let Cdata = await Cres.json();

    Total_Products += +Sdata.length;
    Total_Products += +Fdata.length;
    Total_Products += +Ldata.length;
    Total_Products += +Cdata.length;

    // appendProducts(data);
    // console.log("Data :", Sdata.length);

    let A_nam = document.getElementById("total_products");
    A_nam.innerText = Total_Products;

    // console.log("Total Registered Products :", Total_Products);
  } catch (err) {
    console.log(err);
  }
};
getProducts();

// const cardProduct = ({
//   name,
//   offerPrice,
//   description,
//   actualPrice,
//   img,
//   id,
// }) => {
//   let div = document.createElement("div");
//   div.className = "item";
//   let nam = document.createElement("h2");
//   nam.innerText = name;

//   let pri = document.createElement("h3");
//   pri.innerText = offerPrice;
//   pri.className = "product_price";

//   let des = document.createElement("h4");
//   des.innerText = description;

//   let apri = document.createElement("h4");
//   apri.innerText = actualPrice;

//   let im = document.createElement("img");
//   im.src = img;

//   div.append(im, nam, des, pri);
//   return div;
// };

// const appendProducts = (data) => {
//   let container = document.getElementById("container");
//   container.innerHTML = null;
//   data.forEach((el) => {
//     let card = cardProduct(el);
//     container.append(card);
//   });
// };

// let add_na = document.getElementById("Admin_name");
// add_na.addEventListener("click", function () {
//   Admin_name();
// });

function Admin_name() {
  let A_nam = document.getElementById("admin_name");
  A_nam.innerHTML = "Devendra Singh <span>Admin</span>";
}

Admin_name();
