/*---------- 動物の固定マーカー ----------*/
let markerData = [
  {
    title: "とくしま動物園へようこそ！(入り口)",
    pos: {lat: 34.0139, lng: 134.52075},
    img: "./pic/restaurant.JPG",
    num: 0
  },{
    title: "①フライングゲージ",
    pos: {lat: 34.01531, lng: 134.52141},
    img: "./pic/fly1.JPG",
    num: 1
  },{
    title: "②ニホンカモシカ",
    pos: {lat: 34.01442, lng: 134.52155},
    img: "./pic/kamoshika.JPG",
    num: 2
  },{
    title: "③温帯プロムナード",
    pos: {lat: 34.01435, lng: 134.52192},
    img: "./pic/lesserpanda1.JPG",
    num: 3
  },{
    title: "④ツキノワグマ",
    pos: {lat: 34.01405, lng: 134.5218},
    img: "./pic/tsukinowaguma0.JPG",
    num: 4
  },{
    title: "⑤モンキープロムナード",
    pos: {lat: 34.01395, lng: 134.522133},
    img: "./pic/waokitsunezaru1.JPG",
    num: 5
  },{
    title: "⑥タイガープロムナード",
    pos: {lat: 34.01435, lng: 134.5226},
    img: "./pic/tora1.JPG",
    num: 6
  },{
    title: "⑦セイロンゾウ",
    pos: {lat: 34.01465, lng: 134.52288},
    img: "./pic/zou1.JPG",
    num: 7
  },{
    title: "⑧ミーアキャット",
    pos: {lat: 34.0153, lng: 134.52306},
    img: "./pic/miacat3.JPG",
    num: 8
  },{
    title: "⑨ライオン",
    pos: {lat: 34.01532, lng: 134.52284},
    img: "./pic/lion.JPG",
    num: 9
  },{
    title: "⑩サバンナ区",
    pos: {lat: 34.0157, lng: 134.52256},
    img: "./pic/sabanna3.JPG",
    num: 10
  },{
    title: "⑪フラミンゴ",
    pos: {lat: 34.01487, lng: 134.52250},
    img: "./pic/flamingo1.JPG",
    num: 11
  },{
    title: "⑫オオカミ",
    pos: {lat: 34.01482, lng: 134.520447},
    img: "./pic/ookami1.JPG",
    num: 12
  },{
    title: "⑬ホッキョクグマ",
    pos: {lat: 34.01452, lng: 134.52031},
    img: "./pic/pololo4.JPG",
    num: 13
  },{
    title: "⑮アンデスコンドル",
    pos: {lat: 34.014425, lng: 134.51969},
    img: "./pic/condol.JPG",
    num: 14
  },{
    title: "⑯こども動物園",
    pos: {lat: 34.01425, lng: 134.51915},
    img: "./pic/hitsuji2.JPG",
    num: 15
  },{
    title: "多目的広場(乗馬体験)",
    pos: {lat: 34.0142900, lng: 134.5185},
    img: "./pic/pony1.JPG",
    num: 16
  }
];


/*---------- チェックポイントの目安円 ----------*/
//サバンナ区がチェックポイント２つのため、
//markerDataとの番号合わせに片方をcheckCircle[0]とする
let checkCircle = [
  { lat: 34.01541, lng: 134.52263,  //サバンナ１
    r: 15
  },{
    lat: 34.01529, lng: 134.52138,  //とり
    r: 35
  },{
    lat: 34.01444, lng: 134.52157,  //カモシカ
    r: 13
  },{
    lat: 34.01436, lng: 134.52193,  //温帯
    r: 21
  },{
    lat: 34.01404, lng: 134.52183,  //くま
    r: 15
  },{
    lat: 34.01394, lng: 134.52219, //さる
    r: 19.5
  },{
    lat: 34.01423, lng: 134.52255,  //とら
    r: 26
  },{
    lat: 34.01467, lng: 134.52293,  //ゾウ
    r: 32.5
  },{
    lat: 34.01527, lng: 134.52308,  //ミーア
    r: 11
  },{
    lat: 34.01524, lng: 134.52284,  //ライオン
    r: 11
  },{
    lat: 34.01518, lng: 134.52230,  //サバンナ２
    r: 15
  },{
    lat: 34.01487, lng: 134.52246,  //フラミンゴ
    r: 16
  },{
    lat: 34.01480, lng: 134.52047,  //オオカミ
    r: 13
  },{
    lat: 34.01455, lng: 134.52031,  //ホッキョクグマ
    r: 18
  },{
    lat: 34.01436, lng: 134.51973,  //コンドル
    r: 16
  },{
    lat: 34.01430, lng: 134.51911,  //こども動物園
    r: 41
  },{
    lat: 34.01430, lng: 134.51911,  //こども動物園
    r: 41
  }
];


/*---------- チェックポイント(Polygon) ----------*
const checkCoords = [
  { lat: 34.01564, lng: 134.5218},    //右上
  { lat: 34.01497, lng: 134.5218},    //右下
  { lat: 34.01497, lng: 134.521},     //左下
  { lat: 34.01564, lng: 134.521}      //左上
];
*/
let checkData = [

];