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
  alert("AnimalInformation");
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
  let pos = getPosition();
  //let pos = {latitude: 34.01520, longitude: 134.52230};
  let d = checkDistance(pos.latitude, pos.longitude, cp_lat, cp_lng);
  //var d = 10
  let rslt = 0;
  
  if(mark_num == 10){
    if(d < checkCircle[mark_num].r){
      rslt = 1;
      alert("サバンナ2");
    }else if(checkDistance(pos.latitude, pos.longitude, checkCircle[0].lat, checkCircle[0].lng) < checkCircle[0].r){
      rslt = 1;
      alert("サバンナ1");
    }else{
      rslt = 0;
      alert("サバンナ０");
  }}else{
    if(d < checkCircle[mark_num].r){
      rslt = 1;
    }else{
      rslt = 0;
  }}  //alert("rslt = " + rslt + "\n" + mark_num + "\n" + d);
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
          //AnimalInformation(mark.title, mark.img, mark.num);
          //チェックポイント判別
          //PointCheck_Mark(mark.num);
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
        //↓わかりやすく変換
        timestamp: position.timestamp
      };
      //各項目で変数に入れなおす？
      Mark = mark;
    }());}, error, option);   //alert("return Mark = " + Object.values(Mark));
  return Mark;
}


/*---------- LocalStrageにデータを格納 ----------*/
function SaveData(data){
  let LocationData = JSON.parse(localStorage.getItem('LocationData'));
  if(LocationData == null){
      LocationData = [];
  }if(LocationData.length > 0){
      LocationData = LocationData.length > 2880 ? LocationData.slice(-10) : LocationData;
  }LocationData.push(data);
  localStorage.setItem('LocationData', JSON.stringify(LocationData));
  //alert("localstrage：" + Object.values(localStorage));
  alert("Save Data.");
}


var CL = checkCircle.length;
var cp_f = 0;
var cp_num = 0;
var inTime = 0;
/*---------- 定期取得時のチェックポイント判別 ----------*/
function PointCheck(pos){
  alert("PointCheck.");
  //var i = 0;
    if(cp_f == 0){
      for(var i=0; i<CL; i++){
        let d = checkDistance(pos.latitude, pos.longitude, checkCircle[i].lat, checkCircle[i].lng);
          if(d < checkCircle[i].r){
            if(i == 0){ cp_num = 10; }else{ cp_num = i; 
              }alert("i=" + i +" cp_num=" + cp_num +" cp_f=" + cp_f + "inTime" +inTime);
            inTime ++;
            cp_f = 1;
          }else{}
  }}else{    //内側
    let d = checkDistance(pos.latitude, pos.longitude, checkCircle[cp_num].lat, checkCircle[cp_num].lng);
    alert("ok!"+"\n"+" cp_num=" + cp_num +" cp_f=" + cp_f + " inTime" +inTime);
      if(d < checkCircle[cp_num].r){
        alert("ok"+"\n"+" cp_num=" + cp_num +" cp_f=" + cp_f + " inTime" +inTime);
        inTime ++;
      }else{  //出たとき
        //LSに番号、滞在・アウト時間、操作保存
        //localStorage.setItem('data',cp_num);
        alert("cp_num:" + cp_num + "cp_f:" + cp_f + "\n"
        + "inTime:" + inTime);
        inTime = 0;
        cp_f = 0;
  }}
}

function PointCheck_Fixed(){

}

/*---------- 定期的に位置情報を取得＆Localstrageに格納 ----------*/
function StockPosition(){
  var data = {latitude: 34.01432, longitude: 134.52191};
  if(stock_f == 0){
    position_timer = setInterval(function(){
      //if(cp_f == 0){
        alert("stock position.");
        //PointCheck(getPosition());
        PointCheck(data);
      //LSに格納する型
      //{チェックポイントNo, チェックイン時間, 滞在時間}
      //DataToLS = {};
    }, 5000);  stock_f = 1;
  }else{
}}


/*---------- LocalStrageのPOST(確認用) ----------*/
function SendLS(){
  let data = getPosition();
  SaveData(data);
  alert("StockPosition-Mark : " + Object.values(data));
  SendData(localStorage);
  alert("Object.values(localStorage) = " + Object.values(localStorage) + "\n" + "localStrage.length = " + Object.keys(localStorage).length);
}


/*---------- 位置情報の取得停止 ----------*/
function StopGetPosition(){
  clearInterval(position_timer);
  //SendLS(FormsのURLに乗せるデータ);
}


/*---------- 現在地のマーカーを表示 ----------*/
let mark;
var marker;
function ShowPosition(){
  if(posi_f == 0){
    posi_f = 1;
    mark = getPosition(); 
    marker = new google.maps.Marker({
      position: {lat: mark.latitude, lng: mark.longitude},
      map: map,
      title: "Present Location",
      animation: google.maps.Animation.DROP,
      visible: true
    });    //alert("ShowPosition" + "\n" + "mark：" + Object.values(mark));
    marker.setMap(map);
    infoWindow = new google.maps.InfoWindow({
      content: '<div class="marker_info">現在位置</div>'  //+ '<img src = "/media/pic1.png" width="100" height="100"　alt="写真">'
    });infoWindow.open(map, marker);
    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
  }else{
    posi_f = 0;
    marker.setMap(null);    //マーカーを非表示にする
  }//alert("posi_f=" + posi_f);
}


/*---------- Google FormsのURLにデータをつける ----------*/
function PlusURL(){
  alert("Plus URL.");
  return "aiM1PahW2fWihPdX6";
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
