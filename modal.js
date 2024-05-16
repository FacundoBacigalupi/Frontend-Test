var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
    shoppingCart.forEach(e => {
        document.getElementById("modal-grid").innerHTML += `<div class="flex justify-start max-w-32 my-2" id=${e.id}><img class="mx-2" src="${e.img}"><p class="text-md my-auto mx-auto">${e.price}$</p></div>`;
    })
    document.getElementById("modal-total").innerHTML += (Math.round(shoppingCart.reduce((partialSum, e) => partialSum + e.price, 0) * 100) / 100).toFixed(2) + "$";
}
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("modal-grid").innerHTML = "";
    document.getElementById("modal-total").innerHTML = "Total: ";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let shoppingCart = [];
function buy() {
    const btnClick = function () {
        const id = this.parentNode.parentNode.id;
        var index = shoppingCart.map(e => e.id).indexOf(id);
        if (index > -1) {
            shoppingCart.splice(index, 1);
            document.getElementById("total").innerHTML = (Math.round(shoppingCart.reduce((partialSum, e) => partialSum + e.price, 0) * 100) / 100).toFixed(2) + "$";
            this.innerHTML = "BUY NOW";
            this.style.backgroundColor = "#7AA65A";
        } else {
            const img = this.parentNode.parentNode.getElementsByTagName("img")[0].src;
            let price = this.parentNode.getElementsByTagName("p")[0].innerHTML;
            price = +(price.substring(0, price.length - 1));
            shoppingCart.push({ id: id, img: img, price: price});
            document.getElementById("total").innerHTML = (Math.round(shoppingCart.reduce((partialSum, e) => partialSum + e.price, 0) * 100) / 100).toFixed(2) + "$";
            this.innerHTML = "REMOVE";
            this.style.backgroundColor = "#A65557";
        }
        console.log(shoppingCart);
    };
    document.querySelectorAll(".buy-button").forEach(btn => btn.addEventListener('click', btnClick));
}
window.onload = buy;