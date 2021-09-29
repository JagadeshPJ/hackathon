let searchby = "BLUSH";

async function fetchData()
{
  let url='https://makeup-api.herokuapp.com/api/v1/products.json';
  try 
  {
    let res = await fetch(url);
    return await res.json();
  } 
  catch (error) 
  {
    console.log(error);
  }
}

async function getData() 
{
  let data= await fetchData();


  const grandDiv=document.createElement("div");
  grandDiv.setAttribute("class","bg-secondary");

  const headerDiv=document.createElement("div");
  headerDiv.setAttribute("class","bg-info p-5 header text-center");
  headerDiv.innerHTML=`Makeup Emporium`;

  const searchDiv=document.createElement("div");
  searchDiv.setAttribute("id","searchfield");

  const pTag=document.createElement("p");
  pTag.setAttribute("class","h4");
  pTag.setAttribute("id","search");
  pTag.innerHTML=`Search by `;

  const selectTag=document.createElement("select");
  selectTag.setAttribute("id","searchby");
  selectTag.setAttribute("onchange","searchData()");

  const optionTag1=document.createElement("option");
  optionTag1.value=`Blush`;
  optionTag1.innerHTML=`Blush`;
  const optionTag2=document.createElement("option");
  optionTag2.value=`Bronzer`;
  optionTag2.innerHTML=`Bronzer`;
  const optionTag3=document.createElement("option");
  optionTag3.value=`Eyebrow`;
  optionTag3.innerHTML=`Eyebrow`;
  const optionTag4=document.createElement("option");
  optionTag4.value=`Eyeliner`;
  optionTag4.innerHTML=`Eyeliner`;
  const optionTag5=document.createElement("option");
  optionTag5.value=`Eyeshadow`;
  optionTag5.innerHTML=`Eyeshadow`;
  const optionTag6=document.createElement("option");
  optionTag6.value=`Foundation`;
  optionTag6.innerHTML=`Foundation`;
  const optionTag7=document.createElement("option");
  optionTag7.value=`Lip_liner`;
  optionTag7.innerHTML=`Lip_liner`;
  const optionTag8=document.createElement("option");
  optionTag8.value=`Lipstick`;
  optionTag8.innerHTML=`Lipstick`;
  const optionTag9=document.createElement("option");
  optionTag9.value=`Mascara`;
  optionTag9.innerHTML=`Mascara`;
  const optionTag10=document.createElement("option");
  optionTag10.value=`Nail_polish`;
  optionTag10.innerHTML=`Nail_polish`;


  selectTag.appendChild(optionTag1);
  selectTag.appendChild(optionTag2);
  selectTag.appendChild(optionTag3);
  selectTag.appendChild(optionTag4);
  selectTag.appendChild(optionTag5);
  selectTag.appendChild(optionTag6);
  selectTag.appendChild(optionTag7);
  selectTag.appendChild(optionTag8);
  selectTag.appendChild(optionTag9);
  selectTag.appendChild(optionTag10);

  searchDiv.appendChild(pTag);
  searchDiv.appendChild(selectTag);

  const contentTag=document.createElement("div");
  contentTag.setAttribute("class","container-fluid m-2 row justify-content-center");
  contentTag.setAttribute("id","row");

  

  data.forEach((element) => {
    const div = document.createElement("div");
    div.className = "col-10 col-sm-3 col-lg-2";

    let bname=document.createElement("h4");
    bname.innerHTML=`${element.brand}`;
    div.appendChild(bname);

    let img=document.createElement("img");
    img.setAttribute("id","imagee");
    img.src=`${element.image_link}`;
    img.addEventListener("error", function(img) {
        img.src="https://64.media.tumblr.com/48181bdaca1f15562e87d63db6084ecd/tumblr_oxlz7hlQbb1vewxszo1_1280.jpg";
      });
    div.appendChild(img);

    let price=document.createElement("h4");
    price.innerHTML=`Price: ${element.price}`;
    div.appendChild(price);

    let name=document.createElement("h5");
    name.innerHTML=`Name : ${element.name}`;
    div.appendChild(name);

    let h=document.createElement("h5");
    let link=document.createElement("a");
    link.setAttribute("class","text-info");
    link.href=`${element.product_link}`;
    link.target=`_blank`;
    link.innerHTML=`Link`;
    h.appendChild(link);
    div.appendChild(h);

    let des=document.createElement("h5");
    des.innerHTML=`${element.description}`;
    div.appendChild(des);
  
    const type = document.createElement("p");
    type.innerHTML=`${element.product_type}`;
    
    div.appendChild(type);

    contentTag.appendChild(div);
  }
  );

  grandDiv.appendChild(headerDiv);
  grandDiv.appendChild(searchDiv);
  grandDiv.appendChild(contentTag);

  document.body.appendChild(grandDiv);
}

function searchData()
{
  let searchby = document.getElementById("searchby").value.toUpperCase();
  let middleDiv=document.getElementById("row");
  let innerDiv = middleDiv.getElementsByTagName("div");
  for (let i = 0; i < innerDiv.length; i++) 
  {
    let data = innerDiv[i].getElementsByTagName("p")[0].innerHTML;
    if(data.toUpperCase().indexOf(searchby) > -1)
    {
      innerDiv[i].style.display = "";
    }
    else
    {
      innerDiv[i].style.display = "none";
    }
  }
}

getData();
