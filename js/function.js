var stone_text1 = '';
var stone_text2 = '';
var stone_text3 = '';

var enter_cnt = 0;
var check_enter_cnt = false;

$(function(){

  $('body').keypress(function(event){
    let key_code = event.which;
    //console.log(key_code);
    let video_src = "/video/IMG_5365.MP4";
    if(key_code == 13 && check_enter_cnt == true){
      enter_cnt = enter_cnt + 1;
      console.log("enter_cnt: "+enter_cnt);

      

      if (enter_cnt == 1){
        $('#text1').hide();
        
        video_src = "/video/IMG_5365.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();

      }else if(enter_cnt == 2){
        $('#background-video').trigger('play');
      }else if(enter_cnt == 3){
        $('#text2').hide();
        video_src = "/video/IMG_5366.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 4){
        video_src = "/video/IMG_5366.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        $('#background-video').trigger('play');

      }else if(enter_cnt == 5){
        $('#text3').hide();
        
        video_src = "/video/IMG_5367.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 6){
        $('#text4').hide();
        
        video_src = "/video/IMG_5367.MP4";
        $('#background-video source').attr('src', video_src);
        $('#background-video')[0].load();
        
      }else if(enter_cnt == 7){
        $('#background-video').trigger('play');

      }else if(enter_cnt == 8){
        alert("미션 클리어!! 다음 스탭으로 이동해주세요!");
        $('#game_container').addClass("none");
        $('#end_page').removeClass("none");
        $('#logo_area').addClass("none");

      }else if(enter_cnt == 9){
        alert("다시 시작해보시겠어요?");
        $('#logo_area').removeClass("none");
        $('#form_container').removeClass("none");
        $('#end_page').addClass("none");
        
        check_enter_cnt = false;
        enter_cnt = 0;  
      }
    }

  });
});

function fnStartBtn(){
  enter_cnt = 0; 

  var sentence1 = document.getElementById("sentence1");
  var sentence2 = document.getElementById("sentence2");
  var sentence3 = document.getElementById("sentence3");
  

  if (sentence1.value.trim() == "" || sentence2.value.trim() == "" || sentence3.value.trim() == ""){
    alert("내 마음 속의 3가지 돌덩이들을 모두 작성하셨나요?");
    return false;

  } else {
    stone_text1 = sentence1.value;
    stone_text2 = sentence2.value;
    stone_text3 = sentence2.value;

    console.log(stone_text1 + " / " + stone_text2 + " / " + stone_text3 + " / ");
    $('#text1').text(stone_text1);
    $('#text2').text(stone_text2);
    $('#text3').text(stone_text3);
    $('#text4').text(stone_text1);
    
    $('#form_container').addClass("none");
    $('#game_container').removeClass("none");
    
    $('#text1').show();
    $('#text2').show();
    $('#text3').show();
    $('#text4').show();
    

    check_enter_cnt = true;
  }
};

