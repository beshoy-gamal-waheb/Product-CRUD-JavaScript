var productNameInput = document.getElementById('productName');
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescriptionInput = document.getElementById('productDescription');
var productImageInput = document.getElementById('productImage');

var rowData = document.getElementById("rowData");

var productList = [];

if(localStorage.getItem("productContainer") !== null){
    productList = JSON.parse(localStorage.getItem("productContainer"));
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        description: productDescriptionInput.value,
        image: productImageInput.files[0] ? `images/${productImageInput.files[0].name}` : "images/1.jpg"
    }
    productList.push(product);
    localStorage.setItem("productContainer", JSON.stringify(productList));
    displayData();
    clearForm();
}

function displayData() {
    var cartona = "";
    for (var i = 0; i < productList.length; i++) {
        cartona += `<div class="col">
                        <div class="card">
                            <img class="card-img-top" src="${productList[i].image}" alt="${productList[i].name}" />
                            <div class="card-body">
                                <span class="badge bg-info">Index: ${i}</span>
                                <h3 class="card-title h6">ProductName: ${productList[i].name}</h3>
                                <div class="d-flex flex-column gap-2">
                                    <span class="card-text small">ProductPrice: ${productList[i].price}</span>
                                    <span class="card-text small">productCategory: ${productList[i].category}</span>
                                    <span class="card-text small">productDescription: ${productList[i].description}</span>
                                </div>
                            </div>

                            <div class="card-footer text-center d-flex gap-2 justify-content-center">
                                <button class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                                <button class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                            </div>
                        </div>
                    </div>`;
    }
    rowData.innerHTML = cartona;
}


function clearForm(){
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescriptionInput.value = null;
    productImageInput.value = null;
}