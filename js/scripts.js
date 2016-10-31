//business logic
function Contact(first, last, email, phone) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phone = phone;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedPhone = $("input#new-phone").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPhone);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-email").val("");
    $("input#new-phone").val("");
  });
});
