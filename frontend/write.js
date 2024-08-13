//form 변수는 도큐먼트에서 write-form이라는 id값을 가져옴
const form = document.getElementById("write-form");

const handleSubmitForm = async (e) => {
  e.preventDefault(); //submit의 리로드를 막음
  // body에 폼데이터를 담아 보내는걸 선언
  const body = new FormData(form);
  // form데이터에 insertAt을 추가하고 new Date().getTime()의 값을 넣음
  // 세계시간기준으로 보냄
  body.append("insertAt", new Date().getTime());
  // try라는 로직 실행후 에러 발생시 catch로직 실행
  try {
    // 서버쪽에 items라는 API로
    const res = await fetch("/items", {
      // POST메소드를 보냄
      method: "POST",
      // body에 위에서 선언한 body를 보내줌
      body,
    });
    const data = await res.json();
    // 만약 data가 입력되어서 200이 return되면 주소를 루트(홈)로 변경
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    // 아니면 콘솔에 에러 출력
    console.error(e);
  }

  console.log();
};

//form이 제출되면(submit) handleSubmitForm실행
form.addEventListener("submit", handleSubmitForm);
