const getMeme = async (page) => {
    try {
        const response = await fetch(
            `https://api.imgflip.com/get_memes${page ? `page=${page}` : ""}`
        );

        const result = await response.json();
        console.log(result);

        console.log(result.data.memes); //.map((value, index) => value.url || value.name)
        return result.data.memes;
    } catch (error) {
        console.log(error);
    }
};

let page = "1";
const contentDiv = document.getElementById("root");
const pageInput = document.getElementById("page");

const createCard = (data) => {
    return `<div
    style="
      width: 400px;
      min-height: 100px;
      border: 1px solid black;
      margin: 10px;
      padding: 20px;
    "
   >
  <p>
     ${data.name}
 </p>
    <img src="${data.url}" style="width:420px;
    height: 500px;"

    
    
    > 
   </div>`;
};

getMeme().then((result) => {
    result.forEach((data) => {
        console.log(contentDiv.innerHTML);
        contentDiv.innerHTML =
            contentDiv.innerHTML + createCard(data);
    });

});
getMeme();
