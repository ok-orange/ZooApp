/*---------- 動物の固定マーカー ----------*/
let markerData = [
  {
    title: "とくしま動物園へようこそ！(入り口)",
    pos: {lat: 34.0139, lng: 134.52075},
    img: "restaurant.JPG",
    num: 0
    //icon: "",
    //infoWindowOpen: true,
    //infoWindowContent: "入り口",
  },{
    title: "①フライングゲージ",
    pos: {lat: 34.01532, lng: 134.52141},
    img: "fly1.JPG",
    num: 1
  },{
    title: "②ニホンカモシカ",
    pos: {lat: 34.01442, lng: 134.52155},
    img: "kamoshika.JPG",
    num: 2
  },{
    title: "③温帯プロムナード",
    pos: {lat: 34.01435, lng: 134.52192},
    img: "lesserpanda1.JPG",
    num: 3
  },{
    title: "④ツキノワグマ",
    pos: {lat: 34.01405, lng: 134.5218},
    img: "tsukinowaguma0.JPG",
    num: 4
  },{
    title: "⑤モンキープロムナード",
    pos: {lat: 34.01395, lng: 134.522133},
    img: "waokitsunezaru1.JPG",
    num: 5
  },{
    title: "⑥タイガープロムナード",
    pos: {lat: 34.01435, lng: 134.5226},
    img: "tora1.JPG",
    num: 6
  },{
    title: "⑦セイロンゾウ",
    pos: {lat: 34.01465, lng: 134.52288},
    img: "zou1.JPG",
    num: 7
  },{
    title: "⑧ミーアキャット",
    pos: {lat: 34.0153, lng: 134.52306},
    img: "miacat3.JPG",
    num: 8
  },{
    title: "⑨ライオン",
    pos: {lat: 34.01532, lng: 134.52284},
    img: "lion.JPG",
    num: 9
  },{
    title: "⑩サバンナ区",
    pos: {lat: 34.0157, lng: 134.52256},
    img: "sabanna3.JPG",
    num: 10
  },{
    title: "⑪フラミンゴ",
    pos: {lat: 34.01487, lng: 134.522515},
    img: "flamingo1.JPG",
    num: 11
  },{
    title: "⑫オオカミ",
    pos: {lat: 34.01482, lng: 134.520447},
    img: "ookami1.JPG",
    num: 12
  },{
    title: "⑬ホッキョクグマ",
    pos: {lat: 34.01452, lng: 134.52031},
    img: "pololo4.JPG",
    num: 13
  },{
    title: "⑮アンデスコンドル",
    pos: {lat: 34.014425, lng: 134.51969},
    img: "condol.JPG",
    num: 14
  },{
    title: "⑯こども動物園",
    pos: {lat: 34.01425, lng: 134.51915},
    img: "hitsuji2.JPG",
    num: 15
  },{
    title: "多目的広場(乗馬体験)",
    pos: {lat: 34.0142900, lng: 134.5185},
    img: "pony1.JPG",
    num: 16
  }
];


/*---------- チェックポイントの判別用 ----------*/
//※50と100を並び替えてまとめる

let checkData = [
  {
    pos: {lat: 34.01532, lng: 134.52141},  //とり
    r: 38
  },{
    pos: {lat: 34.01442, lng: 134.52155},  //カモシカ
    r: 20
  },{
    pos: {lat: 34.01435, lng: 134.52192},  //温帯 50
    r: 23
  },{
    pos: {lat: 34.01405, lng: 134.5218},  //くま 40
    r: 20
  },{
    pos: {lat: 34.01395, lng: 134.522133}, //さる 50
    r: 23
  },{
    pos: {lat: 34.01435, lng: 134.5226},  //とら 60
    r: 30
  },{
    pos: {lat: 34.01465, lng: 134.52288},  //ゾウ 60
    r: 33
  },{
    pos: {lat: 34.0153, lng: 134.52306},  //ミーア 50
    r: 18
  },{
    pos: {lat: 34.01532, lng: 134.52284},  //ライオン 40
    r: 18
  },{
    pos: {lat: 34.0157, lng: 134.52256},  //サバンナ 120　※要調整
    r: 50
  },{
    pos: {lat: 34.01487, lng: 134.522515},  //フラミンゴ 50
    r: 25
  },{
    pos: {lat: 34.01482, lng: 134.520447},  //オオカミ 40
    r: 20
  },{
    pos: {lat: 34.01452, lng: 134.52031},  //ホッキョクグマ 40
    r: 22
  },{
    pos: {lat: 34.014425, lng: 134.51969},  //コンドル 40
    r: 22
  },{
    pos: {lat: 34.01425, lng: 134.51915},  //こども動物園 90
    r: 38
  }
];


/*---------- メッシュ ----------*/
var mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9, mesh10,mesh11, mesh12;
const meshData = [
  mesh1 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01555, lng: 134.5183},{lat: 34.01490, lng: 134.5183},
     {lat: 34.01490, lng: 134.5195},{lat: 34.01555, lng: 134.5195}],
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FF0000",
    fillOpacity: 0.12,
  }), 
  mesh2 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01555, lng: 134.5195},{lat: 34.01490, lng: 134.5195},
     {lat: 34.01490, lng: 134.5207},{lat: 34.01555, lng: 134.5207}],
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FF0000",
    fillOpacity: 0.12,
  }), 
  mesh3 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01555, lng: 134.5207},{lat: 34.01490, lng: 134.5207},
     {lat: 34.01490, lng: 134.5219},{lat: 34.01555, lng: 134.5219}],
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FF0000",
    fillOpacity: 0.12,
  }),
  mesh4 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01555, lng: 134.5219},{lat: 34.01490, lng: 134.5219},
     {lat: 34.01490, lng: 134.5231},{lat: 34.01555, lng: 134.5231}],
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FF0000",
    fillOpacity: 0.12,
  }),
  mesh5 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01490, lng: 134.5183},{lat: 34.01425, lng: 134.5183},   //左 上・下
     {lat: 34.01425, lng: 134.5195},{lat: 34.01490, lng: 134.5195}],  //右 上・下
    strokeColor: "#FFFFFF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FFFFFF",
    fillOpacity: 0.12,
  }), 
  mesh6 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01490, lng: 134.5195},{lat: 34.01425, lng: 134.5195},
     {lat: 34.01425, lng: 134.5207},{lat: 34.01490, lng: 134.5207}],
    strokeColor: "#FFFFFF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FFFFFF",
    fillOpacity: 0.12,
  }), 
  mesh7 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01490, lng: 134.5207},{lat: 34.01425, lng: 134.5207},
     {lat: 34.01425, lng: 134.5219},{lat: 34.01490, lng: 134.5219}],
    strokeColor: "#FFFFFF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FFFFFF",
    fillOpacity: 0.12,
  }),
  mesh8 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01490, lng: 134.5219},{lat: 34.01425, lng: 134.5219},
    {lat: 34.01425, lng: 134.5231},{lat: 34.01490, lng: 134.5231}],
    strokeColor: "#FFFFFF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#FFFFFF",
    fillOpacity: 0.12,
  }),
  mesh9 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01425, lng: 134.5183},{lat: 34.01360, lng: 134.5183},   //左 上・下
     {lat: 34.01360, lng: 134.5195},{lat: 34.01425, lng: 134.5195}],  //右 上・下
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#0000FF",
    fillOpacity: 0.12,
  }), 
  mesh10 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01425, lng: 134.5195},{lat: 34.01360, lng: 134.5195},
     {lat: 34.01360, lng: 134.5207},{lat: 34.01425, lng: 134.5207}],
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#0000FF",
    fillOpacity: 0.12,
  }), 
  mesh11 = new google.maps.Polygon({
    paths:
    [{lat: 34.01425, lng: 134.5207},{lat: 34.01360, lng: 134.5207},
     {lat: 34.01360, lng: 134.5219},{lat: 34.01425, lng: 134.5219}],
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#0000FF",
    fillOpacity: 0.12,
 }),
  mesh12 = new google.maps.Polygon({
    paths: 
    [{lat: 34.01425, lng: 134.5219},{lat: 34.01360, lng: 134.5219},
    {lat: 34.01360, lng: 134.5231},{lat: 34.01425, lng: 134.5231}],
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 0.7,
    fillColor: "#0000FF",
    fillOpacity: 0.12,
  })];

/* 区切り ----------------------------
{ pos: {lat: 34.01555, lng: 134.5195},
},{
  pos: {lat: 34.01555, lng: 134.5207},
},{
  pos: {lat: 34.01555, lng: 134.5219},
}
------------------------------------*/