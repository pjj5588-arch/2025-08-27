// -------------------------------
// localStorage에 글쓴이 데이터 저장
// -------------------------------
const authors = ["홍길동", "김철수", "이영희"];
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("authors")) {
    try {
      localStorage.setItem("authors", JSON.stringify(authors));
    } catch (err) {
      console.warn("Storage 접근 불가:", err);
    }
  }

  const authorSelect = document.getElementById("author");
  authorSelect.focus();
});


// -------------------------------
// Form 제출 이벤트
// -------------------------------
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 기본 제출 막기

  if (!this.checkValidity()) {
    alert("입력값을 확인해주세요!");
    return;
  }

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  data.category = formData.getAll("category"); // 체크박스 여러 개
  console.log("제출 데이터:", JSON.stringify(data, null, 2));
  alert("게시물이 등록되었습니다!");

  // Form Elements 상세 출력
  const elements = this.elements;
  console.log("===== Form Elements 상세 출력 =====");
  for (let el of elements) {
    if (!el.name && !el.id) continue;
    let info = `[${el.tagName}] id="${el.id}" name="${el.name}" type="${el.type}"`;
    if (el.type === "checkbox" || el.type === "radio") {
      info += ` | value="${el.value}" | checked=${el.checked}`;
    } else {
      info += ` | value="${el.value}"`;
    }
    console.log(info);
  }
  console.log("================================");

  // author_print 호출
  author_print();
});

// -------------------------------
// 엔터키 입력 시 submit 트리거
// -------------------------------
form.addEventListener("keydown", function (e) {
  // 최신 브라우저 → e.key === "Enter"
  // 구버전 호환 → e.keyCode === 13
  if ((e.key === "Enter" || e.keyCode === 13) && e.target.tagName !== "TEXTAREA") {
    e.preventDefault(); // textarea에서는 줄바꿈 허용
    form.requestSubmit(); // 최신 브라우저용
    // form.dispatchEvent(new Event("submit")); // 구버전 fallback
  }
});
// -------------------------------
function author_print() {
  console.log("author_print -- getElementById - ", document.getElementById("title1"));
  console.log("author_print -- querySelector - ", document.querySelector("#title1"));
  console.log("author_print -- getElementsByName - ", document.getElementsByName("title1"));
  console.log("author_print -- getElementsByClassName - ", document.getElementsByClassName("title1"));
}


const authorSelect = document.getElementById("author"); // 선언 필요
authorSelect.focus(); // 이제 정상 동작
