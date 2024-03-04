const API = "https://www.themealdb.com/api/json/v1/1/categories.php";

let content = document.querySelector(".content")

async function getCategory() {
    try{
        const res = await fetch(API)

        const data = await res.json()

        console.log(data.categories);

    }catch(error) {
        console.log(error);
    }
}

function showCategory(data) {
    content.innerHTML = data.map((item) => {
        return`
        <div class="card">
            <div class="image"> <img src="${item.strCategoryThumb}" alt=""></div>
            <div class="info"> 
                <h2>Title</h2>
                <p>desc</p>
                <div>1200</div>
            </div>
        </div>
        `
    })
}