// signup-form이라는 id를 가진 form
const form = document.querySelector("#signup-form");
const div = document.querySelector("#info_box");
const divInner = document.querySelector("#info");

const checkPassword = () => {
  const formData = new FormData(form);
  //두 값 비교
  const password1 = formData.get("password");
  const password2 = formData.get("password2");
  if (password1 == password2) {
    return true;
  } else return false;
};

// handleSubmit함수 할당 및 이벤트 적용
const handleSubmit = async (event) => {
  //이벤트의 바로전송(redirect) 막기
  event.preventDefault();

  const formData = new FormData(form);
  //formData의 password라는 값을 가져와서 sha256으로 암호화
  const sha256Password = sha256(formData.get("password"));
  //formData의 password라는 값(input의 name)에 sha256으로 변환한 값 넣기
  formData.set("password", sha256Password);

  //만약 비밀번호와 비밀번호확인이 같으면
  if (checkPassword()) {
    // signup주소로
    const res = await fetch("/signup", {
      // 보낼거임(post)
      method: "POST",
      //뭐(body)를? formData를 body에 담아서 서버로 보낼거임
      // 터미널에서 확인
      body: formData,
    });

    //중첩if문
    //비밀번호가 같고 데이터가 200이면!(서버에서 성공했다 메시지를 받으면)
    const data = await res.json();
    if (data === "200") {
      div.style.display = "flex";
      divInner.innerHTML =
        "회원가입에 성공했습니다.<br></br><a style='color:black' href='login.html'><img src='assets/smile.svg'>로그인하기 CLICK!</a> ";
      div.style.color = "blue";
    }

    //비밀번호와 비밀번호확인이 다르면 #info에 아래메세지 출력
  } else {
    div.style.display = "flex";
    divInner.innerHTML =
      "비밀번호가 같지 않습니다.<br></br><a style='color:black' href='signup.html'><img src='assets/u.u.svg'>다시입력하기 CLICK!</a>";
    div.style.color = "red";
  }
};

// signup-form이라는 id를 가진 form이 제출되면
// handleSubmit함수 실행
form.addEventListener("submit", handleSubmit);
