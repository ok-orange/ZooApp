var map;
var watchId;
var Mark;
var stock_f = 0;    //Intervalを１度だけ使うフラグ
var position_timer;
var posi_f = 0;
var mesh_f = 0;
var mesh_num = 0;
var check_circle;
var test_i = 0;
var test_i2 = 0;
// meshData1, meshData2, meshData3;
//let mesh1, mesh2, mesh3;

/*
let markerData = [];*/
//↓{secure:true}があるとhttp通信だとできない？(12/09 解決)
$.cookie('markerData', JSON.stringify(markerData), {secure:true});



"use strict";

window.onload = () =>{
  getPosition();    //最初に現在位置を取得しておく
  initMap();
  /*if(stock_f == 0){
    StockPosition();
  }*/
}

/*---------- メインの関数 --------------------------------------------------------------
・AnimalData(mark_title, mark_img)
・initMap()
-------------------------------------------------------------------------------------*/

function AnimalExplain(num){
  return AnimalData[num];
}

function AnimalInformation(mark_title, mark_img, mark_num){
  /*var geo_text2 = "<h3>ここに" + mark_title + "の説明文が表示されます。<\h3>" + "\n"
                  + "<h3>表示されている画像は" + mark_img + "です。<\h3>" + "\n";*/
  var geo_text1 = "<h1>" + mark_title +"<\h1>";
  //mark_numに対応する紹介文を表示←別ファイル作成←関数作成
  var geo_text2 = "<h3>" +  AnimalExplain(mark_num) + "<\h3>";
  document.getElementById("text_title").innerHTML = geo_text1;   
  document.getElementById("text_ae").innerHTML = geo_text2;   

  var img = document.getElementById("text_img");
  img.src = mark_img;
}

var check_rectangle;
function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: {lat: 34.0145, lng: 134.5208},
        mapTypeId: "satellite"
  });

  /*----- チェックポイントの確認用(ポリゴン) -----*/
  for(const check of checkData){
    (function(){
      check_circle = new google.maps.Circle({
        fillOpacity: 0.0,
        strokeWeight: 0.8,
        radius: check.r,
        map: map,
        center: check.pos,
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
          AnimalInformation(mark.title, mark.img, mark.num);
      });}
  }());}

  const checkCoords = [
    { lat: 34.01565, lng: 134.5218},
    { lat: 34.01496, lng: 134.5218},
    { lat: 34.01496, lng: 134.521},
    { lat: 34.01565, lng: 134.521}
  ];
  check_rectangle= new google.maps.Polygon({
    paths: checkCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35
  });
  check_rectangle.setMap(map);
}


/*----- テスト用関数 ----------------------------------------------------------------*/
/*----- チェックポイント判定 -----*/
function JudgeCP(pos){
  const result_cp = google.maps.geometry.poly.containsLocation(
    pos,
    check_rectangle
  ) ? 1 : 0;    //A ? B : c; → AがtrueならB,falseならCを返す
  alert("judge：" + result_cp);
  return result_cp;
}

/*----- チェックテスト用のマーカー表示 -----*/
let mark_ctest;
var marker_ctest;
var test_j = 0;
var pos;

function PositionForCheck(){
  if(test_i == 0){
    test_i = 1;
    if(test_j == 0){
      pos = new google.maps.LatLng(34.015313, 134.5213);
      test_j = 1;
    }else{
      pos = new google.maps.LatLng(34.015313, 134.5185);
      test_j = 0;
    }
    marker_ctest = new google.maps.Marker({
      position: pos,    map: map,
      icon: {
        fillcolor: "white",     fillOpacity: 0.2,
        strokeColor: "white",   strokeWeight: 0.5,
        scale: 10,
    }});marker_ctest.setMap(map);
  }else{
    test_i = 0;
    marker_ctest.setMap(null);    //マーカーを非表示にする
  }
  //var a = JudgeCP(pos);   alert("a:" + a);
}


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
        //heading: position.coords.heading,
        //speed: position.coords.speed,
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
  alert("localstrage：" + Object.values(localStorage));
}


/*---------- チェックポイント判定してLS格納値を返す ----------*
//マーカータップしたときのみ判別でもいいかも
//マーカーのaddListenerに追加
function checkPoint(座標){
 if(チェックポイント内){
  return 1;
 }else{
  return 0;
}}
*/


/*---------- 定期的に位置情報を取得＆Localstrageに格納 ----------*/
function StockPosition(){
  if(stock_f == 0){
  position_timer = setInterval(function(){
    SaveData(getPosition());
    alert("stock position.");
    }, 3000);
    stock_f = 1;
  }else{
    alert("unstocked...");
}}


/*---------- 定期的に位置情報を取得＆Localstrageに格納 ----------*
function StockPosition(){
  if(stock_f == 0){
    position_timer = setInterval(function(){
      //↓ 項目ごとに入れなおす？　→　受け渡し楽かも
      var cp = checkPoint(getPosition());
      //チェックポイント出るときに送信データ完成、判別
      if(cp == 1){
        //↓ シンプルなデータの格納に書き換え
        SaveData(チェックポイント、時間、操作);
        alert("cp = " + cp);
      }else{}
    }, 3000); stock_f = 1;
  }
  else{
    alert("unstocked...");
}}
*/

/*---------- データをサーバに送信 ----------*/
function SendData(data){
  var csrf_token = Cookies.get('csrftoken');
  const XHR = new XMLHttpRequest();

  //リクエストをセットアップ
  XHR.open('POST', 'https://localhost:8000/polls/');
  //フォームのデータのPOSTリクエストを扱うために必要なHTTPヘッダを追加
  XHR.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
  XHR.setRequestHeader("X-CSRFToken", csrf_token);
  //データ送信('キー='+データの中身)
  XHR.send('data='+data);

  //データ受信が成功したとき
  XHR.onload = function(){
    alert("データ受信完了！");
  }
}


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
  }alert("posi_f=" + posi_f);
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





/*
var mesh1,・・・,mesh12;
const meshData = [・・・];
*/
/*---------- メッシュマップ ----------*/
function ShowMesh(){
for (let i=0; i<meshData.length; i++){
  meshData[i].setMap(map);
}
if(mesh_f == 0){
  for(let i=0; i<meshData.length; i++){
    meshData[i].setVisible(true);
  } mesh_f = 1;    mesh_num++;
}else if(mesh_f == 1){
  for(let i=0; i<meshData.length; i++){
    meshData[i].setVisible(false);
  } mesh_f = 0;
}//alert("mesh_f = " + mesh_f + "\n" + "mesh_num = " + mesh_num);
}
