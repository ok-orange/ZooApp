
/*---------- 動物の紹介文 ----------*/
/* ↓花形↓
  //
  "<h3><\h3>" + "\n" 
  +"<p><\p>" + "<br>" + "(生息地)" +"<br",
  
  "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
  +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>" + "<br>" + "<\p>",
*/
let AnimalData = [
    //入り口
    "<h2>「とくしまZooウォーカー」の使い方<\h2>" + "<br>" 
    +"<p>どうぶつの近くに行って地図の黄色い丸をタップすると、" + "<br>" + "どうぶつの紹介が読めるようになるよ！<\p>" + "<br>",

    //フライングゲージ
    "<h2>今はフライングゲージには入れないけど、外の壁に鳥たちの紹介があるよ！見てみてね。<\h2>"
    +"<p>(写真は、左からアフリカクロトキ、ホオジロカンムリヅル、ショウジョウトキだよ！)<\p>" + "<br>"
        +"<h3>ホオジロカンムリヅル<\h3>" + "\n" 
        +"<p>ツル目ツル科" + "<br>" + "(生息地) アフリカ大陸南部<\p>" + "<br>"
        +"<h3>ショウジョウトキ<\h3>" + "\n" 
        +"<p>コウノトリ目トキ科" + "<br>" + "(生息地) 南アメリカ北部<\p>" + "<br>"
        +"<h3>カルガモ<\h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) アジアの温帯～熱帯<\p>" + "<br>"
        +"<h3>クロエリセイタカシギ<\h3>" + "\n" 
        +"<p>チドリ目・セイタカシギ科" + "<br>" + "(生息地) 北アメリカ～コロンビア<\p>" + "<br>"
        +"<h3>アフリカクロトキ<\h3>" + "\n" 
        +"<p>コウノトリ目トキ科" + "<br>" + "(生息地) アフリカ大陸・イラク南西部<\p>" + "<br>"
        +"<h3>カンムリヅル<\h3>" + "\n" 
        +"<p>ツル目ツル科" + "<br>" + "(生息地) 西アフリカ<\p>" + "<br>"
        +"<h3>ケニアカンムリホロホロチョウ<\h3>" + "\n" 
        +"<p>キジ目キジ科" + "<br>" + "(生息地) タンザニア・ソマリア・ケニア<\p>" + "<br>"
        +"<h3>カナダガン<\h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) 北アメリカ<\p>" + "<br>"
        +"<h3>オシドリ<\h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) 東アジア<\p>" + "<br>"
        +"<h3>コウラウン<\h3>" + "\n" 
        +"<p>スズメ目ヒヨドリ科" + "<br>" + "(生息地) インド・中国・東南アジア<\p>" + "<br>",
    

    //ニホンカモシカ
    "<h2>名前：ハツヤ<\h2>" + "<br>"
    +"<h3>偶蹄目ウシ科" +"<br>" +"(生息地)日本の本州・四国・九州のブナやミズナラを中心とした落葉広葉樹林<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>主に単独で行動し、眼下線を擦り付ける臭い付けによりなわばりを主張する。" + "<br>" + "食性は草食性で、木の葉や芽、樹皮、果実などを食す。<\p>",

    
    //温帯プロムナード
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>" + "<br>" + "<\p>",


    //ツキノワグマ
    "<h2>Save The Island Bear　四国のツキノワグマを絶滅から救おう<\h2>" + "<br>" 
    +"<p>日本のツキノワグマのことが紹介されているよ。" + "<br>" + "かわいいLINEスタンプで募金もできるよ！<\p>" + "<br>"
    
    +"<h2>名前：よねこ<\h2>" +"<br>"
    +"<h3>食肉目(ネコ目)クマ科" +"<br>" +"(生息地)ユーラシア大陸東部から東アジアにかけて<\h3>" + "<br>"
  　+"<h3>～どんなどうぶつ？～<\h3>" + "\n"
    +"<p>ツキノワグマは森林に生息し、単独で夜行性が強いが日中も活動する。植物食傾向の強い雑食で、季節に応じて様々なものを食べている。12~4月ごろに冬眠し、メスは冬眠中に1,2頭の子を産む。" + "\n"
    + "ツキノワグマは７つの亜種に分類される。日本に分布するのは亜種ニホンツキノワグマで、本州・四国・九州に分布する。(九州では絶滅した可能性が高いと考えられている。)" + "\n"
    +"この種は亜種の中でも小型で、黒い体毛で覆われ、胸部に三日月型の白斑をもつ(ない個体もいる)。"+ "\n" + "体長120~180cm、体重50~150kg。" + "<br>" + "<\p>",


    //モンキープロムナード
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>" + "<br>" + "<\p>",


    //タイガープロムナード
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>" + "<br>" + "<\p>",


    //セイロンゾウ
    "<h2>名前：マリー (1990年うまれ)<\h2>" +"<br>"
    +"<h3>" +"<br>" +"(生息地)スリランカ<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n"
    +"<p>特徴：背中が丸く耳は小型。牙は短く、鼻の先端に突起を一つ持つ。前肢の蹄(ひづめ)は5本、後肢の蹄は4本。前肢の蹄(ひづめ)は5本、後肢の蹄は4本。" + "<br>"
    +"食性は草食で、10頭から30頭前後のメスと幼獣からなる群れを作る。主に、森林など山間部や深い森に生息している。スリランカでは、ゾウは神聖な動物として扱われている。" + "<br>"
    + "しかし、急速な人口増加や、それによる土地開拓などによる森林の伐採、また食用や象牙のための密猟などで、生息数や生息地の減少が、現在も問題視されている。<\p>",


    //ミーアキャット
    "<h3>食肉目(ネコ目)ジャコウネコ科" +"<br>" +"(生息地)アフリカ南部<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n"
    +"<p>乾燥したサバンナや荒れ地に、直径10cmくらいのトンネルや巣を掘って暮らしている。群れで生活し、日中は主に家族やペアで巣を出て、日暮れになると巣へ戻る。" + "\n"
    +"雑食性で、小さな哺乳類や爬虫類、昆虫、クモ、植物の根や果物などを食べる。" + "\n"
    +"尾で体のバランスをとりながら2本足で立ち上がり、あたりを見回す行動がよく見られるが、これはかれらの天敵となる猛禽類などの捕食者を早期発見するためである。" + "\n"
    +"危険が迫ると仲間へヒューッという警戒音を発したり、普段も絶えず鳴き声を発して相手の位置を確認するなど社会性の強い動物である。<\p>",


    //ライオン
    "<h2>名前：レオ(2010年生まれ、オス)、ムーン(2018年うまれ、メス)<\h2>" +"<br>"
    +"<h3>食肉目(ネコ目)ネコ科" +"<br>" +"(生息地)アフリカ中部・南東部<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n"
    +"<p>猫の仲間は単独生活する種類が多いが、ライオンは群れをつくって暮らしている。群れのメンバーは、1頭~3頭のオスと15頭くらいまでのメスと子どもたちで、群れの構成が一般のファミリーと違うことからプライドと呼び区別している。" + "<br>"
    +"1日に20時間は休息するライオンは、日没ごろ狩りに出ていき、多くはメスが獲物を捕らえる。狩りの成功率は4回に1回くらいである。" + "\n"
    +"5歳~6歳くらいのオスには立派なたてがみがある。<\p>",


    //サバンナ区
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>" + "<br>"
    +"<\p>",


    //フラミンゴ
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>" + "<br>"
    +"<\p>",


    //オオカミ
    "<h2>名前：ユウキ(2011年うまれ、オス)<\h2>" +"<br>"
    +"<p>みえないときは寝室か矢印の方向にいることがあるよ！<\p>" + "<br>"
    +"<h3>食肉目(ネコ目)イヌ科" +"<br>" +"(生息地)北アメリカ・カナダアラスカの森林地帯<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n"
    +"<p>オオカミは、オスの中でもっとも強いオス(アルファオス)とメスの中でもっとも強いメス(アルファメス)とがパック(群れ)を形成して暮らしている。群れの中では、社会的なきずなが発達しており、狩りや子育てなどいつも共同で行動している。" + "<br>"
    +"オオカミの遠吠え、群れの仲間との連絡、狩りの前触れ、縄張りの主張などの目的で行われ、それぞれ吠え方が異なる。"
    +"条件があえば、10km先まで届く。<\p>",


    //ホッキョクグマ
    "<h2>名前：イワン(2000年うまれ、オス)、ポロロ(2012年うまれ、メス)<\h2>" +"<br>"
    +"<h3>食肉目(ネコ目)クマ科" +"<br>" +"(生息地)北極圏周辺の沿岸や流氷<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>世界最大の肉食動物であり、オスの体重は300kg、最大で800kgになる。体の色は白いが、夏は日光による酸化で黄色っぽくなる。" + "<br>"
    +"厚い脂肪と密生した下毛や長い上毛で、マイナス45℃になる厳しい夜冬の寒さをしのぐ。また、泳ぎが得意で時速6.5kmで65km泳いだ、との報告がある。" + "\n"
    +"オスとメスは3月~6月の交尾期だけいっしょにいて、出産は11月~1月に1頭~4頭を出産する。冬ごもりする妊娠中のメス。<\p>",
    

    //アンデスコンドル
    "<h2>とくしま動物園のシンボルマーク！<\h2>" + "<br>" 
    +"<p>詳しくは、ベンチ近くの「アンデスコンドル　個体紹介」を見てみてね！<\p>" + "<br>"
    
    +"<h3>タカ目コンドル科" +"<br>" +"(生息地)アンデス山脈・パタゴニア沿岸の絶壁<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>広大なアンデス山脈一帯に群れで生息し、繁殖期にはツガイで生活している。体重が重いコンドルの飛翔はスズメやハトのように羽ばたくのではなく、上昇気流をたくみに利用し、高度4500mまで上昇することができ、上空から鋭い視覚で動物の死体を見つける。" + "<br>"
    +"飛ぶ鳥の中で一番大きく、翼を広げると3mに達し、大きいもので体重が14kgになる。" + "\n"
    +"オスは額に肉冠、あごに肉垂がある。メスの目は赤く、オスは灰かかった茶色である。猛禽類でオス・メスの形態が大きく違うのはアンデスコンドルだけである。<\p>",


    //こども動物園
    "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>" + "<br>"
    +"<\p>",


    //多目的広場(乗馬)
];