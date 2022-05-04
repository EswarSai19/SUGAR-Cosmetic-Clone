

let navbar = ()=>{
    return `<div id="temp">
    <div id="navmain">
      <div id="navlogo">
        <img
          src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png"
          alt=""
        />
      </div>
      <div id="navsearch">
        <input type="text" id="search" placeholder="Try Liquid Liptick" />
       <div><button id="nav_btn">Search</button></div> 
      </div>
      <div id="signappend"></div>
      <div id="navlogin">
        <p>
          <span><i class="fa-solid fa-user"></i></span>Login/Register
        </p>
      </div>
      <div id="navcart">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
        <img
          src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
          alt=""
          style="width: 18px"
        />
      </div>
    </div>
  </div>
  <div id="navcat">
    <div id="maincat">
      <div class="navdropdwn">
        <p class="navdropbtn">MAKEUP</p>
        <div class="dropdwn-content">
          <a href="">Lips</a>
          <a href="">Face</a>
          <a href="">Eyes</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">BRUSHES</p>
        <div class="dropdwn-content">
          <a href="">FACE BRUSHES</a>
          <a href="">EYES BRUSHES</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">SKINCARE</p>
        <div class="dropdwn-content">
          <a href="">MOISTURIZERS</a>
          <a href="">MASKS</a>
          <a href="">SETTING MISTS</a>
          <a href="">COFFEE CULTURE RANGE</a>
          <a href="">SHEET MASK COMBO</a>
          <a href="">AQUAHOLIC RANGE</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">TRENDING</p>
        <div class="dropdwn-content">
          <a href="">SUGAR MERCH STATION</a>
          <a href="">MAKEUP KITS</a>
          <a href="">BESTSELLERS</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">BLOG</p>
        <div class="dropdwn-content">
          <a href="">FEATURED</a>
          <a href="">MAKEUP</a>
          <a href="">SKINCARE</a>
        </div>
      </div>
      <div class="navdropdwn">
        <p class="navdropbtn">OFFERS</p>
        <div class="dropdwn-content">
          <a href="">Lips</a>
          <a href="">Face</a>
          <a href="">Eyes</a>
        </div>
      </div>
    </div>
  </div>`
}

let fotter = ()=>{
  return `<div id="mainbottom">
  <div id="bottomlogo">
    <img
      src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
      width="120px"
      height="120px"
    />
  </div>
  <div id="bottomsocial">
    <div class="social_logo">
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/facebook.svg"
          width="18px"
          height="18px"
        />
      </div>
      <div id="mailbot"><i class="fa-solid fa-envelope"></i></div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Instagram.svg"
          width="18px"
          height="18px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Pinterest.svg"
          width="20px"
          height="20px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Tumblr.svg"
          width="20px"
          height="20px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/desc-images/Youtube.svg"
          width="20px"
          height="20px"
        />
      </div>
    </div>
  </div>
  <div id="underlogo">
    <div class="bottomp">
      <p>SUBSCRIBE TO OUR NEWSLETTER</p>
    </div>
    <div class="bottomp">
      <p>GET THE NEW SUGAR APP TODAY.</p>
    </div>
  </div>
  <div id="googleplay">
    <div class="gogp1">
      <div class="bottinput"><input type="text" /></div>
      <br />
      <button id="bottbtn">SIGNUP</button>
    </div>
    <div class="gogp">
      <div class="subgogp">Tap into a better shopping experience.</div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/playstore.png"
          width="100px"
          height="30px"
        />
      </div>
      <div>
        <img
          src="https://in.sugarcosmetics.com/apple-store.png"
          width="100px"
          height="30px"
        />
      </div>
    </div>
  </div>
  <p id="info">INFORMATION</p>
  <div id="aboutus">
    <div>Contact Us</div>
    <div>Terms & Conditions</div>
    <div>Returns</div>
    <div>FAQs</div>
    <div>About Us</div>
  </div>
  <p id="touch">GET IN TOUCH</p>
  <div id="last">
    <div class="contact">
      <div class="subcontact">
        <img
          src="https://in.sugarcosmetics.com/desc-images/phone_android_white.svg"
          alt=""
        />
        <p>Call us at</p>
      </div>
      <p>1800-209-9933</p>
      <p>Monday to Friday : 9 AM to 7 PM</p>
    </div>
    <div>
      <p>Support</p>
      <p>hello@sugarcosmetics.com</p>
    </div>
    <div>
      <p>WORK WITH US</p>
      <p>careers@sugarcosmetics.com</p>
    </div>
    <div>
      <p>PRESS & MEDIA</p>
      <p>pr@sugarcosmetics.com</p>
    </div>
    <div>
      <p>INFLUENCER COLLAB</p>
      <p>JOIN US</p>
    </div>
  </div>
  <div id="bottomhr"></div>
  <p class="bottxt">Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
</div>`
}
export {navbar,fotter}