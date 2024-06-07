var gender = 0;
var select_value = 0;
var select_parants = 0;
var reciever_name = "";


function fnCheckGender(num) {
  gender = num;
}


function fnName() {
  reciever_name = document.getElementById('name').value;
}


function fnCheckSelect(num) {
  select_value = num;
}


function fnCheckParants(num) {
  select_parants = num;
}


function fnReciever() {
  document.getElementById('reciever').innerText = reciever_name;
}


function fnMovePage(id, nextID) {
  if (nextID == 'name&gender') {
    if (reciever_name == "") {
      alert("이름을 입력해주세요");
    }
    else if (gender == 0) {
      alert("성별을 선택해주세요");
    }
    else {
      fnMovePage('#gender_container', '#difficult_container');
    }
  }

  else if (nextID == 'start') {
        if (select_value == 1) {
          fnMovePage('#difficult_container', '#fruit_num1');
        }
        else if (select_value == 2) {
          fnMovePage('#difficult_container', '#manager_num1');
        }
        else if (select_value == 3) {
          fnMovePage('#difficult_container', '#family_num1');
        }
        else {
          alert("힘들었던 것 한 가지를 선택해주세요");
        }
    }

  else if (nextID == 'reciever') {
    if (select_value == 1) {
      fnMovePage('#fruit_num5', '#letter');
      fnReciever();
    }
    else if (select_value == 2) {
      fnMovePage('#manager_num4', '#letter');
      fnReciever();
    }
    else if (select_value == 3) {
      fnMovePage('#family_num5', '#letter');
      fnReciever();
    }
  }

  else if (nextID == 'last') {
      if (select_value == 1 && gender == 1) {
        document.getElementById('background-video').src = "./video/son_fruit.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 1 && gender == 2) {
        document.getElementById('background-video').src = "./video/daughter_fruit.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 2 && gender == 1) {
        document.getElementById('background-video').src = "./video/son_missionary.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 2 && gender == 2) {
        document.getElementById('background-video').src = "./video/daughter_missionary.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 1 && select_parants == 1) {
        document.getElementById('background-video').src = "./video/father_son.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 1 && select_parants == 2) {
        document.getElementById('background-video').src = "./video/mother_son.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 2 && select_parants == 1) {
        document.getElementById('background-video').src = "./video/father_daughter.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
      else if (select_value == 3 && gender == 2 && select_parants == 2) {
        document.getElementById('background-video').src = "./video/mother_daughter.mp4";
        fnMovePage('#letter', '#letter_from_god');
      }
  }

  else {
    $(id).addClass("none");
    $(nextID).removeClass("none", "");
}
}