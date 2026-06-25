$(document).ready(function () {

  $("#show-password").click(function () {
    var input = $("#password");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).text("Hide");
    } else {
      input.attr("type", "password");
      $(this).text("Show");
    }
  });

  $("#show-confirm").click(function () {
    var input = $("#confirm");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).text("Hide");
    } else {
      input.attr("type", "password");
      $(this).text("Show");
    }
  });

  $("#phone").on("input", function () {
    var value = $(this).val();
    value = value.replace(/[^0-9]/g, "");
    $(this).val(value);
  });

  function checkName() {
    var name = $("#name").val().trim();
    if (name === "") {
      $("#name").removeClass("valid").addClass("invalid");
      $("#name-error").text("Full name is required.");
      return false;
    }
    $("#name").removeClass("invalid").addClass("valid");
    $("#name-error").text("");
    return true;
  }

  function checkEmail() {
    var email = $("#email").val().trim();
    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      $("#email").removeClass("valid").addClass("invalid");
      $("#email-error").text("Email is required.");
      return false;
    }
    if (!emailFormat.test(email)) {
      $("#email").removeClass("valid").addClass("invalid");
      $("#email-error").text("Enter a valid email like user@example.com");
      return false;
    }
    $("#email").removeClass("invalid").addClass("valid");
    $("#email-error").text("");
    return true;
  }

  function checkPhone() {
    var phone = $("#phone").val().trim();
    if (phone === "") {
      $("#phone").removeClass("valid").addClass("invalid");
      $("#phone-error").text("Phone number is required.");
      return false;
    }
    if (phone.length !== 10) {
      $("#phone").removeClass("valid").addClass("invalid");
      $("#phone-error").text("Phone number must be exactly 10 digits.");
      return false;
    }
    $("#phone").removeClass("invalid").addClass("valid");
    $("#phone-error").text("");
    return true;
  }

  function checkPassword() {
    var password = $("#password").val();
    var strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (password === "") {
      $("#password").removeClass("valid").addClass("invalid");
      $("#password-error").text("Password is required.");
      return false;
    }
    if (!strongPassword.test(password)) {
      $("#password").removeClass("valid").addClass("invalid");
      $("#password-error").text("Password must be 8+ characters with uppercase, lowercase, and a number.");
      return false;
    }
    $("#password").removeClass("invalid").addClass("valid");
    $("#password-error").text("");
    return true;
  }

  function checkConfirm() {
    var password = $("#password").val();
    var confirm = $("#confirm").val();
    if (confirm === "") {
      $("#confirm").removeClass("valid").addClass("invalid");
      $("#confirm-error").text("Please confirm your password.");
      return false;
    }
    if (password !== confirm) {
      $("#confirm").removeClass("valid").addClass("invalid");
      $("#confirm-error").text("Passwords do not match.");
      return false;
    }
    $("#confirm").removeClass("invalid").addClass("valid");
    $("#confirm-error").text("");
    return true;
  }

  $("#name").blur(function () { checkName(); });
  $("#email").blur(function () { checkEmail(); });
  $("#phone").blur(function () { checkPhone(); });
  $("#password").blur(function () { checkPassword(); });
  $("#confirm").blur(function () { checkConfirm(); });

  $("#myForm").submit(function (e) {
    e.preventDefault();

    var isNameOk     = checkName();
    var isEmailOk    = checkEmail();
    var isPhoneOk    = checkPhone();
    var isPasswordOk = checkPassword();
    var isConfirmOk  = checkConfirm();

    if (!isNameOk || !isEmailOk || !isPhoneOk || !isPasswordOk || !isConfirmOk) {
      $("#message").removeClass("success").addClass("error").text("Please fix the errors above.").show();
      return;
    }

    $("#message").removeClass("error").addClass("success").text("Account created successfully! Welcome!").show();

    $("#myForm")[0].reset();
    $("input").removeClass("valid invalid");
  });

});
