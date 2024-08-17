<form id="signup-form" action="/signup" method="POST">
  <h2 class="signup-h2">회원가입</h2>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-id">아이디</label>
    <input
      type="text"
      id="signup-id"
      name="id"
      placeholder="아이디를 입력해주세요."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-password">패스워드</label>
    <input
      type="password"
      id="signup-password"
      name="password"
      placeholder="특수문자, 숫자, 영문자 조합된 8 이상의 문자."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-password2">패스워드 확인</label>
    <input
      type="password"
      id="signup-password2"
      name="password2"
      placeholder="동일한 비밀번호를 다시 입력해주세요."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-name">이름</label>
    <input
      type="text"
      id="signup-name"
      name="name"
      placeholder="이름을 입력해주세요."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-email">이메일</label>
    <input
      type="email"
      id="signup-email"
      name="email"
      placeholder="이메일을 입력해주세요."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-sub_box">
    <label class="signup-label" for="signup-phone">휴대폰번호</label>
    <input
      type="number"
      id="signup-phone"
      name="phone"
      placeholder="휴대폰 번호를 입력해주세요."
      required
      class="signup-input"
    />
  </div>
  <div class="signup-submitbox">
    <input type="submit" value="회원 가입하기" class="signup-submit" />
  </div>
  <div class="signup-alink-box">
    <a href="/#/login" class="signup-alink"
      >이미 계정이 있으신가요?<span class="signup-login">로그인</span></a
    >
  </div>
  <div id="signup-info_box"><div id="signup-info"></div></div>
</form>
<div class="media-info-msg">
  <div>
    <img src="./assets/alert.png" alt="alert" />
    <span>화면 사이즈를 줄여주세요.</span>
  </div>
</div>
