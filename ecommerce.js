function ecommerceEvents(){
  window.dataLayer = window.dataLayer || [];

    document.addEventListener('DOMContentLoaded', () => {
        
        // view_promotion e select_promotion na home
        if(window.location.pathname == '/Lorenzo-Site/' || window.location.pathname == '/index.html'){
            window.dataLayer.push(
              {
                event: "view_promotion",
                creative_name: "creative_name",
                creative_slot: "creative_slot",
                promotion_id: "promotion_id",
                promotion_name: "promotion_name",
                items: [
                  {
                    item_id: "item_id_1",
                    item_name: "item_name_1",
                    affiliation: "affilitation_1",
                    coupon: "coupon_1",
                    creative_name: "creative_name_1",
                    creative_slot: "creative_slot_1",
                    discount: 2.22,
                    index: 0,
                    item_brand: "item_brand_1",
                    item_list_id: "item_list_id_1",
                    item_list_name: "item_list_name_1",
                    price: 9.99,
                    promotion_id: "promotion_id_1",
                    promotion_name: "promotion_name_1",
                    quantity: 1
                  },
                  {
                    item_id: "item_id_2",
                    item_name: "item_name_2",
                    affiliation: "affilitation_2",
                    coupon: "coupon_2",
                    creative_name: "creative_name_2",
                    creative_slot: "creative_slot_2",
                    discount: 10.90,
                    index: 1,
                    item_brand: "item_brand_2",
                    item_list_id: "item_list_id_2",
                    item_list_name: "item_list_name_2",
                    price: 18.98,
                    promotion_id: "promotion_id_2",
                    promotion_name: "promotion_name_2",
                    quantity: 1
                  }
                ]
              });

        // select_promotion na home ao clicar em um dos botões
        document.querySelector('#promotion1').addEventListener('click', () => {
            window.dataLayer.push(
              {
                event: "select_promotion", 
                creative_name: "creative_name",
                creative_slot: "creative_slot",
                promotion_id: "promotion_id",
                promotion_name: "promotion_name",
                items: [
                  {
                    item_id: "item_id_1",
                    item_name: "item_name_1",
                    affiliation: "affilitation_1",
                    coupon: "coupon_1",
                    creative_name: "creative_name_1",
                    creative_slot: "creative_slot_1",
                    discount: 2.22,
                    index: 0,
                    item_brand: "item_brand_1",
                    item_list_id: "item_list_id_1",
                    item_list_name: "item_list_name_1",
                    price: 9.99,
                    promotion_id: "promotion_id_1",
                    promotion_name: "promotion_name_1",
                    quantity: 1
                  }]
        })
        })
        document.querySelector('#promotion2').addEventListener('click', () => {
            window.dataLayer.push(
              {
                event: "select_promotion",
                creative_name: "creative_name",
                creative_slot: "creative_slot",
                promotion_id: "promotion_id",
                promotion_name: "promotion_name",
                items: [
                  {
                    item_id: "item_id_2",
                    item_name: "item_name_2",
                    affiliation: "affilitation_2",
                    coupon: "coupon_2",
                    creative_name: "creative_name_2",
                    creative_slot: "creative_slot_2",
                    discount: 10.90,
                    index: 1,
                    item_brand: "item_brand_2",
                    item_list_id: "item_list_id_2",
                    item_list_name: "item_list_name_2",
                    price: 18.98,
                    promotion_id: "promotion_id_2",
                    promotion_name: "promotion_name_2",
                    quantity: 1
                  }
                ]
        })
        })
        }

        // view_item_list e select_item em itemListPage.html
        if(window.location.pathname.includes("itemListPage.html")){
              window.dataLayer.push(
                {
                  event: "view_item_list",
                  item_list_id: "item_list_id",
                  item_list_name: "item_list_name",
                  items: [
                    {
                      item_id: "item_id_1",
                      item_name: "item_name_1",
                      affiliation: "affilitation_1",
                      coupon: "coupon_1",
                      discount: 2.22,
                      index: 0,
                      item_brand: "item_brand_1",
                      item_list_id: "item_list_id_1",
                      item_list_name: "item_list_name_1",
                      price: 9.99,
                      promotion_id: "promotion_id_1",
                      promotion_name: "promotion_name_1",
                      quantity: 1
                    },
                    {
                      item_id: "item_id_2",
                      item_name: "item_name_2",
                      affiliation: "affilitation_2",
                      coupon: "coupon_2",
                      creative_name: "creative_name_2",
                      creative_slot: "creative_slot_2",
                      discount: 10.90,
                      index: 1,
                      item_brand: "item_brand_2",
                      item_list_id: "item_list_id_2",
                      item_list_name: "item_list_name_2",
                      price: 18.98,
                      promotion_id: "promotion_id_2",
                      promotion_name: "promotion_name_2",
                      quantity: 1
                    }
                  ]
                })

        // select_item em itemListPage.html
        document.querySelector('#item1').addEventListener('click', () => {
            window.dataLayer.push(
              {
                event: "select_item",
                item_list_id: "item_list_id",
                item_list_name: "item_list_name",
                items: [
                  {
                    item_id: "item_id_1",
                    item_name: "item_name_1",
                    affiliation: "affilitation_1",
                    coupon: "coupon_1",
                    discount: 2.22,
                    index: 0,
                    item_brand: "item_brand_1",
                    item_list_id: "item_list_id_1",
                    item_list_name: "item_list_name_1",
                    price: 9.99,
                    promotion_id: "promotion_id_1",
                    promotion_name: "promotion_name_1",
                    quantity: 1
                  }
                ]
              });
        })
        document.querySelector('#item2').addEventListener('click', () => {
            window.dataLayer.push(
              {
                event: "select_item",
                item_list_id: "item_list_id_2",
                item_list_name: "item_list_name_2",
                items: [
                  {
                    item_id: "item_id_2",
                    item_name: "item_name_2",
                    affiliation: "affilitation_2",
                    coupon: "coupon_2",
                    discount: 10.90,
                    index: 1,
                    item_brand: "item_brand_2",
                    item_list_id: "item_list_id_2",
                    item_list_name: "item_list_name_2",
                    price: 18.98,
                    promotion_id: "promotion_id_2",
                    promotion_name: "promotion_name_2",
                    quantity: 1
                  }
                ]
              });
          })
        };

        // view_item e add_to_cart em pageDetail1 e pageDetail2
        if(window.location.pathname.includes("pageDetail1.html")){
            window.dataLayer.push(
              {
                event: "view_item",
                currency: "BRL",
                value: 9.99,
                items: [
                  {
                    item_id: "item_id_1",
                    item_name: "item_name_1",
                    affiliation: "affilitation_1",
                    coupon: "coupon_1",
                    discount: 2.22,
                    index: 0,
                    item_brand: "item_brand_1",
                    item_list_id: "item_list_id_1",
                    item_list_name: "item_list_name_1",
                    price: 9.99,
                    promotion_id: "promotion_id_1",
                    promotion_name: "promotion_name_1",
                    quantity: 1
                  }
                ]
            });

            // add_to_cart item 1
            document.querySelector('#addtocart1').addEventListener('click', () => {
                localStorage.setItem('itemClicked', JSON.stringify('item_1'));
                window.dataLayer.push(
                  {
                    event: "add_to_cart",
                    currency: "BRL",
                    value: 9.99,
                    items: [
                      {
                        item_id: "item_id_1",
                        item_name: "item_name_1",
                        affiliation: "affilitation_1",
                        coupon: "coupon_1",
                        discount: 2.22,
                        index: 0,
                        item_brand: "item_brand_1",
                        item_list_id: "item_list_id_1",
                        item_list_name: "item_list_name_1",
                        price: 9.99,
                        promotion_id: "promotion_id_1",
                        promotion_name: "promotion_name_1",
                        quantity: 1
                      }
                    ]
                });
            })
        }
        if(window.location.pathname.includes("pageDetail2.html")){
            window.dataLayer.push(
              {
                event: "view_item",
                currency: "BRL",
                value: 18.98,
                items: [
                  {
                    item_id: "item_id_2",
                    item_name: "item_name_2",
                    affiliation: "affilitation_2",
                    coupon: "coupon_2",
                    discount: 10.90,
                    index: 0,
                    item_brand: "item_brand_2",
                    item_list_id: "item_list_id_2",
                    item_list_name: "item_list_name_2",
                    price: 18.98,
                    promotion_id: "promotion_id_2",
                    promotion_name: "promotion_name_2",
                    quantity: 1
                  }
                ]
            });

            // add_to_cart item 2
            document.querySelector('#addtocart2').addEventListener('click', () => {
                localStorage.setItem('itemClicked', JSON.stringify('item_2'));
                window.dataLayer.push(
                  {
                    event: "add_to_cart",
                    currency: "BRL",
                    value: 18.98,
                    items: [
                      {
                        item_id: "item_id_2",
                        item_name: "item_name_2",
                        affiliation: "affilitation_2",
                        coupon: "coupon_2",
                        discount: 10.90,
                        index: 0,
                        item_brand: "item_brand_2",
                        item_list_id: "item_list_id_2",
                        item_list_name: "item_list_name_2",
                        price: 18.98,
                        promotion_id: "promotion_id_2",
                        promotion_name: "promotion_name_2",
                        quantity: 1
                      }
                    ]
                });
            })
        }

        // purchase
        if(window.location.pathname.includes("purchase.html")){
          new Promise((resolve, reject) => {
            resolve(window.localStorage)
          }).then(() => {
            const itemClicked = JSON.parse(localStorage.getItem('itemClicked'));
            const randNum = () => { return Math.floor(Math.random() * 100000 + 1) }
            if(itemClicked == 'item_1'){
                window.dataLayer.push(
                  {
                    event: "purchase",
                    transaction_id: "T_" + randNum(),
                    value: 9.99,
                    shipping: 5.99,
                    currency: "BRL",
                    coupon: "coupon",
                    items: [
                     {
                        item_id: "item_id_1",
                        item_name: "item_name_1",
                        affiliation: "affilitation_1",
                        coupon: "coupon_1",
                        discount: 2.22,
                        index: 0,
                        item_brand: "item_brand_1",
                        item_list_id: "item_list_id_1",
                        item_list_name: "item_list_name_1",
                        price: 9.99,
                        promotion_id: "promotion_id_1",
                        promotion_name: "promotion_name_1",
                        quantity: 1
                    }]
                })
            }
            if(itemClicked == 'item_2'){
                window.dataLayer.push(
                  {
                    event: "purchase",
                    transaction_id: "T_" + randNum(),
                    value: 18.98,
                    shipping: 5.99,
                    currency: "BRL",
                    coupon: "coupon",
                    items: [
                     {
                        item_id: "item_id_2",
                        item_name: "item_name_2",
                        affiliation: "affilitation_2",
                        coupon: "coupon_2",
                        discount: 10.90,
                        index: 0,
                        item_brand: "item_brand_2",
                        item_list_id: "item_list_id_2",
                        item_list_name: "item_list_name_2",
                        price: 18.98,
                        promotion_id: "promotion_id_2",
                        promotion_name: "promotion_name_2",
                        quantity: 1
                    }]
                })
            }
        }
          )} 
           

})}
ecommerceEvents();