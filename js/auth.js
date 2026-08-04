function checkPassword() {
  const password = document.getElementById("password").value;

  const correctPassword = "syu-web2026";

  if (password === correctPassword) {

    // 24時間後の有効期限を保存
    const expire =
      Date.now() + (24 * 60 * 60 * 1000);

    localStorage.setItem(
      "authExpire",
      expire
    );

    window.location.href = "index.html";

  } else {

    document.getElementById("error").textContent =
      "パスワードが違います。再度入力してください。";

  }
}