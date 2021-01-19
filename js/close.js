/*---------- Google FormsのURLにデータを付加 ----------*/
function PlusURL(){
    alert("ご利用ありがとうございました！"+"\n"+"最後に数分だけ、アンケートへご協力をお願いします。");
    var plusData = "「送信」ボタンを押してください。　　　　　";
    var data = localStorage.getItem('Data');
    if(data == null){
    }else{
      plusData += data;
    }
    alert("plusData： " + plusData);
    return plusData;
  }
