let searchby = "BLUSH";
async function fetchData()
{
    let d =await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    let data=await d.json();
    return data;
}

async function getData() 
{
  let data= await fetchData();
  const row = document.getElementById("row");
  data.forEach((element) => {
    const div = document.createElement("div");
    div.className = "col-10 col-sm-3 col-lg-2";

    let bname=document.createElement("h4");
    bname.innerHTML=`${element.brand}`;
    div.appendChild(bname);

    let img=document.createElement("img");
    img.src=`${element.image_link}`;
    div.appendChild(img);

    let price=document.createElement("h4");
    price.innerHTML=`Price: ${element.price}`;
    div.appendChild(price);

    let name=document.createElement("h5");
    name.innerHTML=`Name :${element.name}`;
    div.appendChild(name);

    let link=document.createElement("h6");
    link.innerHTML=`${element.product_link}`;
    div.appendChild(link);

    let des=document.createElement("h6");
    des.innerHTML=`${element.description}`;
    div.appendChild(des);
  
    const type = document.createElement("p");
    
    div.appendChild(type);

    row.appendChild(div);
  });
}
function search1() {
  searchby = document.getElementById("searchby").value.toUpperCase();
  divelements = document.getElementById("row");
  innerdivs = divelements.getElementsByTagName("div");
  for (let i = 0; i < innerdivs.length; i++) {
    data = innerdivs[i].getElementsByTagName("p")[0];
    valu = data.innerHTML;
    if (valu.toUpperCase().indexOf(searchby) > -1)
      innerdivs[i].style.display = "";
    else innerdivs[i].style.display = "none";
  }
}

getData();
