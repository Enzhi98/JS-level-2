const goods = [
    { title: 'Samsung A51', price: 23490, image: './img/a51.png' },
    { title: 'Samsung S20 FE', price: 45999, image: './img/s20FE.png' },
    { title: 'Samsung S21', price: 41329, image: './img/S21.jpg' },
    { title: 'Samsung A31', price: 16899, image: './img/a31.jpg' },
  ];
  
  const renderGoodsItem = (title, price, image) => {
    return `<div class="goods-item">
         <img class="goods-item-img" src="${image}">
         <div class="goods-item-txt"> 
          <h3 class="goods-item-txt-h">${title}</h3> 
          <p class="goods-item-txt-p">${price}</p>
         </div>      
        </div>`;
  };
  
  const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
  }
  
  renderGoodsList(goods);