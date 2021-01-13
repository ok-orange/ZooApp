var map;
var watchId;
var Mark;
var stock_f = 0;    //Intervalを１度だけ使うフラグ
var position_timer;
var posi_f = 0;
var mesh_f = 0;
var mesh_num = 0;
var check_rectangle;
var check_circle;
var test_i = 0;
var test_i2 = 0;

//↓{secure:true}があるとhttp通信だとできない？(12/09 解決)
$.cookie('markerData', JSON.stringify(markerData), {secure:true});

"use strict";

window.onload = () =>{
  getPosition();    //最初に現在位置を取得しておく
  initMap();
}

/*---------- メインの関数 --------------------------------------------------------------
・AnimalData(mark_title, mark_img)
・initMap()
-------------------------------------------------------------------------------------*/

//チェックポイント判別で表示・非表示
function AnimalInformation(mark_title, mark_img, mark_num, rslt){
  var geo_text1 = "<h1>" + mark_title +"<\h1>";   //var geo_text2 = "<h3>" +  AnimalExplain(mark_num) + "<\h3>";
  var img = document.getElementById("text_img");
  
  if(rslt == 1){
    var geo_text2 = AnimalData[mark_num];
  }else{
    var geo_text2 = "<h4>動物の近くに行くと、情報が見られるようになるよ。"+"<br>"+mark_title+"を見に行こう！<\h4>";
  }
  img.src = mark_img;
  document.getElementById("text_title").innerHTML = geo_text1;   
  document.getElementById("text_ae").innerHTML = geo_text2;
}

/*----- 現在地とチェックポイントとの距離測定 -----*/
function checkDistance(lat1, lng1, lat2, lng2){
  //誤差 1m 程！！(比：Google Map)
  lat1 *= Math.PI / 180;
  lng1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  lng2 *= Math.PI / 180;
  let m = 6371000 * Math.acos(Math.cos(lat1)*Math.cos(lat2)*Math.cos(lng2-lng1) + Math.sin(lat1)*Math.sin(lat2));
  return Math.floor(m * 10)/10;
}
/*----- チェックポイント判定 -----*/
function PointCheck_Mark(mark_title, mark_img, mark_num){
  let cp_lat = checkCircle[mark_num].lat;
  let cp_lng = checkCircle[mark_num].lng;
  let pos = Mark;
  //let pos = {latitude: 34.01520, longitude: 134.52230};
  let d = checkDistance(pos.latitude, pos.longitude, cp_lat, cp_lng);
  let rslt = 0;
  
  if(mark_num == 10){
    if(d < (checkCircle[mark_num].r + 10)){
      rslt = 1;
    }else if(checkDistance(pos.latitude, pos.longitude, checkCircle[0].lat, checkCircle[0].lng) < checkCircle[0].r){
      rslt = 1;
    }else{
      rslt = 0;
  }}else{
    if(d < (checkCircle[mark_num].r + 10)){
      rslt = 1;
    }else{
      rslt = 0;
  }}
  AnimalInformation(mark_title, mark_img, mark_num, rslt);
}


/////*-------------------- initMap() --------------------*/////
function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: {lat: 34.0147, lng: 134.5208},
        mapTypeId: "satellite"
  });

  /*----- チェックポイントの確認用(円) -----*/
  for(const check_c of checkCircle){
    (function(){
      check_circle = new google.maps.Circle({
        fillOpacity: 0.0,
        strokeWeight: 0.8,
        radius: check_c.r,
        map: map,
        center: {lat:check_c.lat, lng:check_c.lng}
      });
  }());}
  
  /*----- 動物マーカー -----*/
  const markerData = JSON.parse($.cookie('markerData'));
  for(const mark of markerData){
    (function(){
      const marker_fixed = new google.maps.Marker({
        position: mark.pos,
        title: mark.title,
        icon: {
          fillColor: "#ffd700",
          fillOpacity: 1.0,
          path: google.maps.SymbolPath.CIRCLE,
          scale: 6,
          strokeColor: "#000000",
          strokeWeight: 1.0   },
        map: map
      });
      if(mark.title){
        const infoWindow_fixed = new google.maps.InfoWindow({
          content: mark.title
        });
        marker_fixed.addListener('click', function(){
          infoWindow_fixed.open(map, marker_fixed);
          PointCheck_Mark(mark.title, mark.img, mark.num);
      });}
  }());}
}


/*----- テスト用関数(1/8 4:00削除) ----------------------------------------------------*/
/*---------- サブの関数 ----------------------------------------------------------------
・getPosition()
・SaveData(data)
・StockPosition()
・SendData(data)
・SendLS()
・StopGetPosition()
・ShowPosition()
・ShowMesh()
・PlusURL()
-------------------------------------------------------------------------------------*/
var error = function (error) {
  var result = '<tr>' +
    '<td>' + error.code + '</td>' +
    '<td>' + error.message + '</td>' +
    '</tr>';
  console.error(result);
};
var option = {
  enableHighAccuracy: true,
  timeout : 10000,
  maximumAge: 0
};

/*---------- 位置情報の取得 ----------*/
function getPosition(){
  watchId = navigator.geolocation.getCurrentPosition(function(position){
    (function(){
      let mark = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp
      };
      Mark = mark;
      data = Mark;
      //data = move();
      PointCheck(data);
    }());}, error, option);
  return Mark;
}


/*---------- LocalStrageにデータを格納 ----------*/
function StockLS(data){
  let Data = JSON.parse(localStorage.getItem('Data'));

  if(Data == null){
    Data = [];
  }if(Data.length > 0){
    Data = Data.length > 2880 ? Data.slice(-10) : Data;
  }
  Data.push(data);
  localStorage.setItem('Data', JSON.stringify(Data));
  alert("Save：" + JSON.parse(localStorage.getItem("Data")));
}


var CL = checkCircle.length;
var cp_f = 0;
var cp_num = 0;
var inTime = 0;
/*---------- 定期取得時のチェックポイント判別 ----------*/
function PointCheck(pos){
  //alert("PointCheck.");
  if(cp_f == 0){  //外側
    for(var i=0; i<CL; i++){
      if(cp_f == 0){
        let d = checkDistance(pos.latitude, pos.longitude, checkCircle[i].lat, checkCircle[i].lng);
          if(d < (checkCircle[i].r + 10)){
            if(i == 0){ cp_num = 10; }else{ cp_num = i; }
            cp_f = 1;
            alert("cp_f:"+cp_f+"\n"+"cp_num=:"+cp_num +"  inTime: "+inTime);
          }else{
            alert("out");
      }}else{
        alert("for out!");
        break;
      }
    }
  }else{    //内側
    let d = checkDistance(pos.latitude, pos.longitude, checkCircle[cp_num].lat, checkCircle[cp_num].lng);
    if(d < (checkCircle[cp_num].r + 10)){
      inTime ++;
    }else{  //出たとき
      //LSに格納：{チェックポイントNo, アウト・滞在時間、操作->紹介機能フラグ？}
      let outTime = pos.timestamp;
      let DataToLS = {cp_num, inTime, outTime};
      StockLS(DataToLS);
      inTime = 0;
      cp_f = 0;
    }
  alert("cp_f: "+cp_f+"\n"+"cp_num: "+cp_num+"  inTime: "+inTime);
}}


var move_i = 0;
/*----- チェックポイントテスト用 -----*/
function move(){
  let mark;
  if(move_i == 0){    //外
    mark = {
      latitude: 34.01535,
      longitude: 134.52100,
      //timestamp: position.timestamp   
    };
  }else if(move_i == 1){    //とり
    mark = {
      latitude: 34.01531,
      longitude: 134.52138,
      //timestamp: position.timestamp   
    };
  }else if(move_i == 2){    //とり
    mark = {
      latitude: 34.01531,
      longitude: 134.52138,
      //timestamp: position.timestamp   
    };
  }else if(move_i == 3){    //外：サバンナ近く
    mark = {
      latitude: 34.01531,
      longitude: 134.52230,
      //timestamp: position.timestamp   
    };
  }else if(move_i == 4){    //外：サバンナ近く
    mark = {
      latitude: 34.01531,
      longitude: 134.52230,
      //timestamp: position.timestamp   
    };
  }else if(move_i == 5){    //サバンナ２
    mark = {
      latitude: 34.01540,
      longitude: 134.52260,
      //timestamp: position.timestamp   
    };
    move_i = -1;
  }
  //alert("move from "+move_i);
  move_i ++;
  return mark;
}


/*---------- 定期的に位置情報を取得→ポイント内：Localstrageに格納 ----------*/
function StockPosition(){
  var data;
  if(stock_f == 0){
    position_timer = setInterval(function(){
      // ↓ 本番
      //data = getPosition();
      getPosition();
    }, 5000);  stock_f = 1;
  }else{
}}


/*---------- 位置情報の取得停止 ----------*/
function StopGetPosition(){
  clearInterval(position_timer);
  stock_f = 0;
}


/*---------- 現在地のマーカーを表示 ----------*/
let mark;
var marker;
function ShowPosition(){
  if(posi_f == 0){
    posi_f = 1;
    mark = Mark; 
    marker = new google.maps.Marker({
      position: {lat: mark.latitude, lng: mark.longitude},
      map: map,
      title: "Present Location",
      animation: google.maps.Animation.DROP,
      visible: true
    });
    marker.setMap(map);
    infoWindow = new google.maps.InfoWindow({
      content: '<div class="marker_info">現在位置</div>'
    });infoWindow.open(map, marker);
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
  }else{
    posi_f = 0;
    marker.setMap(null);    //マーカーを非表示にする
  }
}


/*---------- Google FormsのURLにデータを付加 ----------*/
function PlusURL(){
  alert("ご利用ありがとうございました！"+"\n"+"最後に数分だけ、アンケートへご協力をお願いします。");
  var plusData = "「送信」ボタンを押してください。　　　　　";
  var data = localStorage.getItem('Data');
  if(data == null){
  }else{
    plusData += data;
  }
  alert("plusData： "+plusData);
  return plusData;
}


/*---------- ハンバーガーメニュー ----------*/
$(function(){
  $('.hamburger').click(function(){
    $(this).toggleClass('active');

    if($(this).hasClass('active')){
      $('.globalMenu').addClass('active');
    }else{
      $('.globalMenu').removeClass('active');
    }
  })
})
