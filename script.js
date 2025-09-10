function checkPassword() {
  const input = document.getElementById("password").value;
  const errorMsg = document.getElementById("error");

  const secret = "123321"; // كلمة السر

  if (input === secret) {
    window.location.href = "friends.html"; // يفتح صفحة الأصدقاء
  } else {
    errorMsg.style.display = "block";
  }
}