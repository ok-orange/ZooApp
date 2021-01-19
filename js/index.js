var map;
var watchId;
var Mark;
var stock_f = 0;    //Intervalを１度だけ使うフラグ
var position_timer;
var posi_f = 0;
var check_circle;
var sousa=[];     //操作回数を格納
var b_f = 0;
var t_f = 0;
var bench=[];
var toilet = [];
var currentInfoWindow = null;

$.cookie('markerData', JSON.stringify(markerData), {secure:true});
"use strict";

window.onload = () =>{
  getPosition();    //最初に現在位置を取得しておく
  initMap();
  for(let i=0; i<markerData.length; i++){
    sousa[i] = 0;
  } 
}

/*---------- メインの関数 --------------------------------------------------------------
・AnimalData(mark_title, mark_img)
・initMap()
-------------------------------------------------------------------------------------*/

//チェックポイント判別で表示・非表示
function AnimalInformation(mark_title, mark_img, mark_num, s){
  var geo_text1 = "<h1>" + mark_title +"<\h1>";
  var img = document.getElementById("text_img");
  
  if(s > 0){
    var geo_text2 = AnimalData[mark_num];
  }else{
    //var geo_text2 = "<h4>動物の近くに行くと、情報が見られるようになるよ。"+"<br>"+mark_title+"を見に行こう！<\h4>";
    //テスト用⇓
    var geo_text2 = AnimalData[mark_num];
  }
  img.src = mark_img;
  document.getElementById("text_title").innerHTML = geo_text1;   
  document.getElementById("text_ae").innerHTML = geo_text2;
}


/*----- 現在地とチェックポイントとの距離測定 -----*/
function checkDistance(lat1, lng1, lat2, lng2){
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
  let d = checkDistance(pos.latitude, pos.longitude, cp_lat, cp_lng);
  let rslt = 0;
  
  if(mark_num == 10){
    if(d < (checkCircle[mark_num].r)){
      rslt = 1;
    }else if(checkDistance(pos.latitude, pos.longitude, checkCircle[0].lat, checkCircle[0].lng) < checkCircle[0].r){
      rslt = 1;
    }else{
      rslt = 0;
  }}else{
    if(d < (checkCircle[mark_num].r)){
      rslt = 1;
    }else{
      rslt = 0;
  }}
  
  if(rslt == 1){
    sousa[mark_num] += 1;
    //alert("sousa["+mark_num+"]= "+sousa[mark_num]);
  }else{}
  AnimalInformation(mark_title, mark_img, mark_num, sousa[mark_num]);
}


/////*-------------------- initMap() --------------------*/////
function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: {lat: 34.01460, lng: 134.52115},
        mapTypeId: "satellite",
        gestureHandling: 'greedy'
  });
  
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
          if(currentInfoWindow != null){
            currentInfoWindow.close();
          }
          currentInfoWindow = infoWindow_fixed;
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
  if(error.code == 1){
    alert("位置情報をオンにしてください。");
}};
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
      PointCheck(Mark);
    }());}, error, option);
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
  alert("StockLS：" + localStorage.getItem("Data"));
}


var CL = checkCircle.length;
var cp_f = 0;
var cp_num = 0;
var inTime = 0;
/*---------- 定期取得時のチェックポイント判別 ----------*/
function PointCheck(pos){
  if(cp_f == 0){  //外側
    for(var i=0; i<CL; i++){
      if(cp_f == 0){
        let d = checkDistance(pos.latitude, pos.longitude, checkCircle[i].lat, checkCircle[i].lng);
          if(d < (checkCircle[i].r)){
            if(i == 0){ cp_num = 10; }else{ cp_num = i; }
            cp_f = 1;
            alert("Now in!"+"\n"+"cp_f:"+cp_f+"\n"+"cp_num=:"+cp_num +"  inTime: "+inTime);
          }else{
      }}else{
        break;
    }}
  }else{    //内側
    let d = checkDistance(pos.latitude, pos.longitude, checkCircle[cp_num].lat, checkCircle[cp_num].lng);
    if(d < (checkCircle[cp_num].r)){
      inTime ++;
    }else{  //出たとき
      let outTime = pos.timestamp;
      let s = sousa[cp_num];
      let DataToLS = {cp_num, inTime, outTime, s};
      StockLS(DataToLS);
      inTime = 0;
      cp_f = 0;
      //alert("Now out!"+"\n"+"cp_f: "+cp_f+"\n"+"cp_num: "+cp_num+"  inTime: "+inTime+"  outTime: "+outTime);
    }
  //alert("cp_f: "+cp_f+"\n"+"cp_num: "+cp_num+"  inTime: "+inTime+"  outTime: "+outTime);
}}


/*---------- 定期的に位置情報を取得→ポイント内：Localstrageに格納 ----------*/
function StockPosition(){
  if(stock_f == 0){
    position_timer = setInterval(function(){
      getPosition();
    }, 3000);  stock_f = 1;
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
}}


/*---------- ベンチマーカーの設置・消去 ---------*/
function SetBench(){
  for(let i=0; i<benchData.length; i++){
    let bench_ = new google.maps.Marker({
      position: benchData[i].pos,
      num: benchData[i].num,
      icon: {
        url: "./pic/bench2.png",
        scaledSize: new google.maps.Size(18, 18)
      },
      map: map
    });
    bench.push(bench_);
    bench[i].setMap(map);
}}
function ClearBench(){
  for(let i=0; i<benchData.length; i++){
    bench[i].setMap(null);
  }bench = [];}

/*---------- トイレマーカーの設置・消去 ---------*/
function SetToilet(){
  for(let i=0; i<toiletData.length; i++){
    let toilet_ = new google.maps.Marker({
      position: toiletData[i].pos,
      num: toiletData[i].num,
      icon: {
        url: "./pic//toilet3.png",
        scaledSize: new google.maps.Size(18, 18)
      },
      map: map
    });
    toilet.push(toilet_);
    toilet[i].setMap(map);
}}
function ClearToilet(){
  for(let i=0; i<toiletData.length; i++){
    toilet[i].setMap(null);
  }toilet = [];}


/*----- ベンチマーカーを表示・非表示 -----*/
function ShowBench(){
  if(b_f == 0){
    SetBench();
    b_f = 1;
  }else{
    ClearBench();
    b_f = 0;
}}
/*----- トイレマーカーを表示・非表示 -----*/
function ShowToilet(){
  if(t_f == 0){
    SetToilet();
    t_f = 1;
  }else{
    ClearToilet();
    t_f = 0;
}}


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
