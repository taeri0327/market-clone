<form id="login-form" action="/login" method="POST">
  <h2 class="login-h2">로그인</h2>
  <div class="login-sub_box">
    <label class="login-label" for="login-id">아이디</label>
    <input
      type="text"
      id="login-id"
      name="id"
      placeholder="아이디를 입력해주세요."
      required
      class="login-input"
    />
  </div>
  <div class="login-sub_box">
    <label class="login-label" for="login-password">패스워드</label>
    <input
      type="password"
      id="login-password"
      name="password"
      placeholder="특수문자, 숫자, 영문자 조합된 8 이상의 문자."
      required
      class="login-input"
    />
  </div>
  <div class="login-submit-box">
    <input type="submit" value="로그인" class="login-submit" />
  </div>
  <div id="info_box"><div id="info"></div></div>
</form>
<div class="media-info-msg">
  <div>
    <img src="./assets/alert.png" alt="alert" />
    <span>화면 사이즈를 줄여주세요.</span>
  </div>
</div>
