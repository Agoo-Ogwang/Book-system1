window.onload = function () {
  //Buttons
  var quickAddBtn = document.getElementById("QuickAdd");
  var addBtn = document.getElementById("Add");
  var cancelBtn = document.getElementById("cancel");
  var quickAddFormDiv = document.querySelector(".quickAddForm");
  //document.getElementByClassName("quickAddForm") [0]

  //Form Details
  var fullname = document.getElementById("FullName");
  var phone = document.getElementById("Phone");
  var address = document.getElementById("Address");
  var town = document.getElementById("Town");
  var email = document.getElementById("E-mail");

  //Address Book Display
  var addBookDiv = document.querySelector(".addBook");

  //Create Storage Array
  var addressBook = [];

  //Event Listners
  quickAddBtn.addEventListener("click", function () {
    quickAddFormDiv.style.display = "block";
  });

  cancelBtn.addEventListener("click", function () {
    quickAddFormDiv.style.display = "none";
  });

  AddBtn.addEventListener("click", addToBook);

  addBookDiv.addEventListner("click", removeEntry);

  function jsonstructure(fullname, phone, address, town, email) {
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.town = town;
    this.email = email;
  }
  function addToBook() {
    var isNull =
      fullname.value != "" &&
      phone.value != "" &&
      address.value != "" &&
      town.value != "" &&
      email.value != "";
    console.log(isNull);
    if (isNull) {
      // Add the contents of the form to the array & local storage

      var obj = new jsonStructure(
        fullname.value,
        phone.value,
        address.value,
        town.value,
        email.value
      );
      addressBook.push(obj);
      localStorage["addbook"] = JSON.sytringyfy(addressBook);
      //Hide the form panel
      quickAddFormDiv.style.display = "none";
      // clear the form
      clearform();
      //updating & displaying allrecords in the addressbook
      showAddressBook();
    }
  }
  function removeEntry(e) {
    if (e.target.classlist.contains("delbutton")) {
      var remID = e.target.getAttribute("data-id");
      //Remove JSon from the array with the index num = remID;
      addressBook.splice(remID, 1);
      localSorage["addBook"] = JSon.sytringyfy(addressBook);
      showAddressBook();
    }
  }

  function clearform() {
    var frm = document.querySelectorAll("formdetails");
    for (var i in frm) {
      frm[i].value = "";
    }
  }
  function showAddressBook() {
    // check if the key 'addbook' exists in localStorage or else create it
    //if it exiists, load contents from the localStorage and loop > display it on the page.
    if (localSorage["addbook"] === undefined) {
      localStorage["addbook"] = "[]";
    } else {
      addressBook = JSON.parse(localStorage["addbook"]);
      addBookDiv.innerHTML = "";
      for (var n in addressBook) {
        var str = '<div class = "entry">';
        str += '<div class="name"><P>' + addressBook[n].fullname + "</p></div>";
        str += '<div class="phone"><p>' + addressBook[n].phone + "</p></div>";
        str +=
          '<div class="address"><p>' + addresssBook[n].address + "</p><>/div>";
        str += '<div class="town"><p>' + addressBook[n].town + "</p></div>";
        str += '<div class="email"><p>' + addressBook[n].email + "</p></div>";
        str +=
          '<div class="del"><a href="#" class="delbutton" data-id ="' +
          n +
          '">delete</a></div>';
        str += "</div>";
        addBookDiv.innerHTML += str;
      }
    }
  }
};
showAddressBook();
