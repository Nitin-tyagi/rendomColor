const getcolor=()=>{
    const rendomNumber=Math.floor(Math.random()*16777215);
    const rendomCode="#" +rendomNumber.toString(16);
    // console.log(rendomNumber);
    // console.log(rendomCode);
    document.body.style.backgroundColor=rendomCode;
    document.getElementById("colorCode").innerText=rendomCode;
    navigator.clipboard.writeText(rendomCode);
}
// getcolor();

document.getElementById("btn").addEventListener("click",getcolor);

getcolor();