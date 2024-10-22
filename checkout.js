const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
};

const totalPrice = getQueryParam('totalPrice');
if (totalPrice) {
    document.getElementById('finalPrice').innerText = `$${totalPrice}`;
}