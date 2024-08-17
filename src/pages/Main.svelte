<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <a class="menu-bar__location-link" href="#/menu-bar_location">
      <div class="menu-bar__location">
        <span>역삼1동</span>
        <img src="assets/down_arrow.svg" alt="arrow1" />
      </div>
    </a>
    <div class="menu-bar__icons">
      <img src="assets/magnifier.svg" alt="mafnifier" />
      <img src="assets/bar3.svg" alt="bars-3" />
      <img src="assets/bell.svg" alt="bell" />
    </div>
  </div>
</header>

<main>
  <a class="write-button" href="#/write">+ 글쓰기</a>
</main>
<!-- ----- -->
<footer>
  <div class="footer-block">
    <div class="footer-icons_nolink">
      <img src="assets/home.svg" alt="home" />
      <p>홈</p>
    </div>
    <div class="footer-icons_nolink">
      <img src="assets/document.svg" alt="location-life" />
      <p>동네생활</p>
    </div>
    <div class="footer-icons_nolink">
      <img src="assets/map.svg" alt="map" />
      <p>내 근처</p>
    </div>
    <a href="#/chatting" target="_parent" class="footer-chatting-link">
      <div class="footer-icons">
        <img src="assets/chatting.svg" alt="chatting" />
        <p class="footer-chatting__click">채팅</p>
      </div>
    </a>
    <a href="#/signup" target="_parent" class="footer-signup-link">
      <div class="footer-icons">
        <img src="assets/user.svg" alt="mypage" />
        <p>나의 당근</p>
      </div>
    </a>
  </div>

  <div class="media-info-msg">
    <div>
      <img src="assets/alert.png" alt="alert" />
      <span>화면 사이즈를 줄여주세요.</span>
    </div>
  </div>
</footer>
