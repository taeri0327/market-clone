/*list만들기 예시자료
 <div class="item-list">
    <div class="item-list__img">
        <img src="assets/img.svg" alt="img5" />
    </div>
    <div class="item-list__info">
          <div class="item-list__info-title">게이밍 PC 팝니다.</div>
          <div class="item-list__info-meta">역삼동 19초 전</div>
          <div class="item-list__info-price">100만원</div>
    </div>
      </div>  */

//   현재시간 추출
const calcTime = (timestamp) => {
  // 한국시간 = UTC+9시간 -> 세계시간 기준으로 맞추려면 9시간빼주기
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) return `${hour}시간 전`;
  else if (minute > 0) return `${minute}분 전`;
  else if (second > 0) return `${second}초 전`;
  else return "방금 전";
};

// 받아온 데이터 변환
const renderData = (data) => {
  const main = document.querySelector("main");
  //   데이터를 불러와서 obj에 연결
  data.reverse().forEach(async (obj) => {
    const div = document.createElement("div");
    div.className = "item-list";

    const ImgDiv = document.createElement("div");
    ImgDiv.className = "item-list__img";

    const InfoDiv = document.createElement("div");
    InfoDiv.className = "item-list__info";

    const img = document.createElement("img"); //img생성
    const res = await fetch(`/images/${obj.id}`); //이미지의 id불러오기
    const blob = await res.blob(); //이미지의 id를 이진법으로 변환
    const url = URL.createObjectURL(blob); //이진법으로 변환된 이미지의 id의 url생성
    img.src = url; //이미지주소 = 이진법으로 변환된 이미지의 id의 url

    const InfoTitleDiv = document.createElement("div");
    InfoTitleDiv.className = "item-list__info-title";
    InfoTitleDiv.innerText = obj.title;

    const InfoMetaDiv = document.createElement("div");
    InfoMetaDiv.className = "item-list__info-meta";
    InfoMetaDiv.innerText = obj.place + " " + calcTime(obj.insertAt);

    const InfoPriceDiv = document.createElement("div");
    InfoPriceDiv.className = "item-list__info-price";
    InfoPriceDiv.innerText = obj.price;

    ImgDiv.appendChild(img);
    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);
    div.appendChild(ImgDiv);
    div.appendChild(InfoDiv);

    // main 안에 div자식생성
    main.appendChild(div);
  });
};

// 서버로부터 index.html의 주석처리부분의 list(array)를 받아옴
const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
};

fetchList();
