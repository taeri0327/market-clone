<form id="write-form">
  <header class="write-header">
    <div class="write-header__box">
      <div class="write-header__box-column">
        <a href="/"><img src="./assets/X-mark.svg" alt="picture" /></a>
      </div>
      <div class="write-header__box-column"><p>내 물건 팔기</p></div>
      <div class="write-header__box-column"><p>임시 저장</p></div>
    </div>
  </header>
  <main class="write-main">
    <div class="write-wrap-mainbox">
      <div class="write-main-child">
        <div class="write-img-box">
          <img src="./assets/camera.svg" alt="picture" />

          <label for="write-image" aria-placeholder="img">사진등록</label>
          <div><input type="file" id="write-image" name="image" /></div>
        </div>
      </div>
      <div class="write-main-child">
        <label for="write-title" class="write-label">제목</label>
        <input type="text" id="write-title" name="title" class="write-input" />
      </div>
      <div class="write-main-child">
        <label for="write-price">가격</label>
        <input
          type="write-number"
          id="price"
          name="price"
          class="write-input"
        />
      </div>
      <div class="write-main-child">
        <label class="write-label" for="write-description">설명</label>
        <textarea id="write-description" name="description" class="write-input"
        ></textarea>
      </div>
      <div class="write-main-child">
        <label for="write-place" class="write-label">장소</label>
        <input type="text" id="write-place" name="place" class="write-input" />
      </div>
    </div>
  </main>
  <footer class="write-footer">
    <div class="write-submit-box">
      <button type="submit" class="write-submit">작성 완료</button>
    </div>
  </footer>
</form>
<div class="media-info-msg">
  <div>
    <img src="./assets/alert.png" alt="alert" />
    <span>화면 사이즈를 줄여주세요.</span>
  </div>
</div>
