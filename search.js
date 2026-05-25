const mxSearchData = [
    {
        type: "Product",
        title: "Sidr Honey",
        collection: "First Batch",
        desc: "Premium Sidr Honey release by MelloraX.",
        image: "assets/product-1.jpg",
        url: "sidr-honey.html",
        keywords: "sidr honey first batch mellorax"
    },

    {
        type: "Collection",
        title: "First Batch",
        collection: "Current Release",
        desc: "Explore the current MelloraX collection.",
        image: "assets/product-1.jpg",
        url: "products.html",
        keywords: "collection products first batch"
    },

    {
        type: "Support",
        title: "WhatsApp Support",
        collection: "Customer Help",
        desc: "Get support regarding orders and products.",
        image: "",
        url: "contact.html",
        keywords: "support whatsapp contact"
    }
];

/* OPEN SEARCH */

function openMxSearch(){

    const overlay = document.getElementById("mxSearchOverlay");

    if(overlay){
        overlay.classList.add("active");
    }

    setTimeout(() => {

        const input = document.getElementById("mxSearchInput");

        if(input){
            input.focus();
        }

    },100);
}

/* CLOSE SEARCH */

function closeMxSearch(){

    const overlay = document.getElementById("mxSearchOverlay");

    if(overlay){
        overlay.classList.remove("active");
    }
}

/* SEARCH INPUT */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("mxSearchInput");

    const searchResults = document.getElementById("mxSearchResults");

    if(!searchInput || !searchResults) return;

    searchInput.addEventListener("input", function(){

        const q = this.value.toLowerCase().trim();

        if(!q){

            searchResults.innerHTML = `
                <div class="mx-search-empty">
                    Start typing to search products, collections, and support.
                </div>
            `;

            return;
        }

        const results = mxSearchData.filter(item =>

            item.title.toLowerCase().includes(q) ||

            item.collection.toLowerCase().includes(q) ||

            item.keywords.toLowerCase().includes(q)
        );

        if(results.length){

            searchResults.innerHTML = results.map(item => `

                <a class="mx-search-result" href="${item.url}">

                    ${item.image ? `<img src="${item.image}" alt="${item.title}">` : `<div class="mx-search-icon">?</div>`}

                    <div>

                        <small>${item.type} • ${item.collection}</small>

                        <h3>${item.title}</h3>

                        <p>${item.desc}</p>

                    </div>

                </a>

            `).join("");

        }else{

            searchResults.innerHTML = `
                <div class="mx-search-empty">
                    No matching result found.
                </div>
            `;
        }
    });

});function updateHeaderCartCount(){
    const cart = JSON.parse(localStorage.getItem("melloraxCart")) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    const cartCount = document.getElementById("cartCount");
    if(cartCount){
        cartCount.innerText = count;
    }
}

document.addEventListener("DOMContentLoaded", updateHeaderCartCount);