var EAOA1285 = {
  init: function () {
    this.mainJS();
  },

  mainJS: function () {
    let parentofTargetMenuArea = document.querySelectorAll(
      ".main-menu-custom__inner-list.submenu.main-menu-custom__inner-list--level1.after-background.ui-menu.ui-widget.ui-widget-content.ui-front"
    );
    let parentofTargetMobileMenuArea = document.querySelector("#ui-id-5");
    let cartButton = document.querySelector("#minicart > div > a");

    let productList = document.querySelectorAll(
      "#mini-cart li.item.product.product-item"
    );
    let productItemDom = "";

    productList.forEach((product, index) => {
      if (index > 1) {
        return false;
      }
      productItemDom += `<div class="product-card">
      <div class="product-image">
        <img
          src="${
            product.querySelector(".product span.product-image-wrapper img").src
          }"
          alt=""
        />
      </div>
      <div class="product-name">
        <p>${
          product.querySelector(".product .product-item-name").textContent
        }</p>
      </div>
      <div class="product-varient">
        <p>${
          product.querySelector(".product .device-tarrif-info").innerHTML
        }</p>
      </div>
    </div>`;
    });

    let cartDataWithButtons =
      `
		
		<li class="product-with-buttons">
		  <div class="area-header">
		    <h4>Recently Carted</h4>
		  </div>
		  <div class="product-card-area"> ` +
      productItemDom +
      ` </div>
		
		  <div class="go-to-basket-button-area main-menu-custom__inner-item main-menu-custom__inner-item--level2 ui-menu-item">
		    <a
		      class="action secondary viewcart"  
		      data-bind="attr: {href: shoppingCartUrl}"
		      href="${cartButton.href}"
		    >
		      <span class="icon icon-trolley"></span>
		      <span data-bind="i18n: 'Go to basket'">Go to basket</span>
		    </a>
		  </div>
		</li>
		
		`;

    parentofTargetMenuArea.forEach((target, index) => {
      if (index !== 2) {
        target.insertAdjacentHTML("beforeend", cartDataWithButtons);
      }
    });

    if (window.innerWidth < 1009) {
      parentofTargetMobileMenuArea.insertAdjacentHTML(
        "afterend",
        cartDataWithButtons
      );
    }
  },
};
(function pollForEAOA1285() {
  if (
    document.querySelectorAll(
      "#mini-cart > li > div.product > div.image-title-holder > a > span > span > img"
    ).length
  ) {
    try {
      if (!document.querySelector("body").classList.contains("EAOA1285")) {
        document.querySelector("body").classList.add("EAOA1285");
        EAOA1285.init();
      }
    } catch (error) {
      console.log("Initialization error:", error);
    }
  } else {
    setTimeout(pollForEAOA1285, 25);
  }
})();
