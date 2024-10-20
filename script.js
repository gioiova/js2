const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120
      }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259
      }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500
      }
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430
      }
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400
      }
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3.9,
        count: 70
      }
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 3,
        count: 400
      }
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 1.9,
        count: 100
      }
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203
      }
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470
      }
    },
];




let cartItems = []
const productPage = document.getElementById('main');


products.forEach((product) => {
    const { id, title, price, description, image, rating } = product;
    const singleProduct = document.createElement('div');
    
    singleProduct.classList.add("product_card");

    const rateFunct = (rate) => {
        if(rate< 3) {
            return "bg-red-900"
        }else {
            return "bg-green-700"
        }
    }

    const getStarRating = (rate) => {
      const stars = Math.round(rate);
      let starElements = '';
      for (let i = 0; i < 5; i++) {
          if (i < stars) {
              starElements += '<svg class="text-yellow-400 w-5 h-5" fill="currentColor"><path d="M9.049.662l1.885 5.797h6.055l-4.9 3.56 1.886 5.796L9.049 9.254 3.025 15.815l1.885-5.796-4.9-3.56h6.056L9.049.662z"/></svg>';
          } else {
              starElements += '<svg class="text-gray-300 w-5 h-5" fill="currentColor"><path d="M9.049.662l1.885 5.797h6.055l-4.9 3.56 1.886 5.796L9.049 9.254 3.025 15.815l1.885-5.796-4.9-3.56h6.056L9.049.662z"/></svg>';
          }
      }
      return starElements;
  };

  const discountPrice = (price) => {
    const discount = 0.2; 
    if (discount > 0) {
        if(price > 100) {
          const discountedPrice = (price - price * discount).toFixed(2);
          return `<span class="line-through mr-2 text-red-600">${price}</span><span class="text-green-700">${discountedPrice}</span>`;
        }
        
        
    }
    return price;
};





  

    singleProduct.innerHTML = `
        <div class="flex font-serif">
            <div class="flex-none w-52 relative">
                <img src="${image}" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110" loading="lazy" />

            </div>
            <form class="flex-auto p-6">
                <div class="flex flex-wrap items-baseline">
                    <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                        ${title}
                    </h1>
                   <div class="flex-auto text-lg font-medium text-slate-500">
                      ${discountPrice(price)}
                  </div>
                    <div class="text-xs p-4 ${rateFunct(rating.rate)} leading-6 font-medium uppercase text-white ">
                        ${rating.rate}
                    </div>
                    <div class="flex items-center mb-2">
                      ${getStarRating(rating.rate)}
                  </div>
                </div>
                <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 ">
                    <div class="space-x-1 flex text-sm font-medium ">
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                            <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                XS
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="s" />
                            <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                S
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="m" />
                            <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                M
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="l" />
                            <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                L
                            </div>
                        </label>
                        <label>
                            <input class="sr-only peer" name="size" type="radio" value="xl" />
                            <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                XL
                            </div>
                        </label>
                    </div>
                </div>
                <div class="flex space-x-4 mb-5 text-sm font-medium">
                    <div class="flex-auto flex space-x-4 pr-4">
                        <button class="buy_now flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white transition-transform duration-500 ease-in-out transform hover:scale-110 " type="submit">
                            Buy now
                        </button>
                        <button class="add_to_cart flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900 transition-transform duration-500 ease-in-out transform hover:scale-110" type="button"
                        onclick=" ">
                            Add to bag
                        </button>
                    </div>
                   <button class="like-btn flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
                      <svg class="heart-icon w-5 h-5" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                  </button>
                </div>
                <p class="text-sm text-slate-500">
                    Free shipping on all continental US orders.
                </p>
            </form>
        </div>
    `;


    document.addEventListener('DOMContentLoaded', () => {
      const likeButtons = document.querySelectorAll('.like-btn');
  
      likeButtons.forEach(button => {
          let isLiked = false;
          
          button.addEventListener('click', () => {
              isLiked = !isLiked;
              const heartIcon = button.querySelector('.heart-icon');
              heartIcon.style.color = isLiked ? '#ef4444' : '#cbd5e1';
          });
      });
  });


  
  singleProduct.querySelector(".add_to_cart").addEventListener("click",() => {
    addToCart(id)

  });

  singleProduct.querySelector(".buy_now").addEventListener("click",() => {
    navigaateToProductPage(id);
  });


    productPage.appendChild(singleProduct);
   
});


const addToCart = (id) => {
  const product = products.find((product) => product.id === id);
  cartItems.push(product);
  console.log(cartItems);
  updateCartUrl();
};

let url;
const updateCartUrl = () => {
  const cartItemsIds = cartItems.map((item) => item.id).join(",");
  const currentURL = new URL(window.location.href);
  currentURL.searchParams.set("cart",cartItemsIds);
  console.log(currentURL.search);
  const newURl = currentURL.search;
  url = `cart.html${newURl}`
  console.log(url)
};

const cartButton = document.getElementById("cart")


const navigaateToProductPage = () => {
  window.location.href = url;
}

cartButton.addEventListener("click",navigaateToProductPage);



