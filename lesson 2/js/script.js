class Basket {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
  addProduct() { }
  deleteProduct() {}
  countProductPlus() {}
  countProductMinus() {}
}

class GoodsItem {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
  render() {
    return `<div class="goods-item">
      <img class="goods-item-img" src="${this.image}">
      <div class="goods-item-txt"> 
        <h3 class="goods-item-txt-h">${this.title}</h3> 
        <p class="goods-item-txt-p">${this.price}</p>
        </div>      
    </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Samsung A51', price: 23490, image: './img/a51.png' },
      { title: 'Samsung S20 FE', price: 45999, image: './img/s20FE.png' },
      { title: 'Samsung S21', price: 41329, image: './img/S21.jpg' },
      { title: 'Samsung A31', price: 16899, image: './img/a31.jpg' },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good=>{
      const goodItem = new GoodsItem(good.title, good.price, good.image);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  sumAllProduct() {
    let sum = 0;
    this.goods.forEach (good=> {
      //console.log(good.price);
      sum += good.price;
    });
    document.querySelector('.sum-basket').innerHTML = sum; 
    console.log(sum);
  }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumAllProduct();


