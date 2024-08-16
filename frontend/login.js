// signup-form이라는 id를 가진 form
const form = document.querySelector("#login-form");

let accessToken = null;

// handleSubmit함수 할당 및 이벤트 적용
const handleSubmit = async (event) => {
  //이벤트의 바로전송(redirect) 막기
  event.preventDefault();

  const formData = new FormData(form);
  //formData의 password라는 값을 가져와서 sha256으로 암호화
  const sha256Password = sha256(formData.get("password"));
  //formData의 password라는 값(input의 name)에 sha256으로 변환한 값 넣기
  formData.set("password", sha256Password);

  // login주소로
  const res = await fetch("/login", {
    // 보낼거임(post)
    method: "POST",
    //뭐(body)를? formData를 body에 담아서 서버로 보낼거임
    // 터미널에서 확인
    body: formData,
  });

  //로그인 성공or실패
  const data = await res.json();

  //   if (res.status === 200) {
  //     alert("로그인에 성공했습니다!");
  //     // 루트페이지로~
  //     window.location.pathname = "/";
  //   } else if (res.status === 401) {
  //     alert("id 혹은 password가 틀렸습니다.");
  //   }

  //로그인 완료시 update
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  //   window.sessionStorage.setItem("token", accessToken);
  alert("로그인 되었습니다!");

  window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerText = "상품 가져오기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       //accessToken이라는 값을 갖는
  //       //authorization이라는 header를 추가
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  //   infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);
