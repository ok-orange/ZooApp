
/*---------- 動物の紹介文 ----------*/
/* ↓花形↓
  //
  "<h3><\h3>" + "\n" 
  +"<p><\p>" + "<br>" + "(生息地)" +"<br",
  
  "<h3>" +"<br>" +"(生息地)<\h3>" + "<br>"
  +"<h3>～どんなどうぶつ？～<\h3>" + "\n" +"<p>" + "<br>" + "<\p>",

  +"<br>"
    +"<br>"
    +"<h2><\h2>"
    +"<h3><\h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～<\h3>" + "\n" 
    +"<p>"+"<br>"
    +""+"<br>"
    +""+"<br>"
    +"<\p>"
*/
let AnimalData = [
    //入り口
    "<h3>どうぶつたちの動画が見られるよ！"+"<br>"+" → "
    +"<a href='https://www.city.tokushima.tokushima.jp/zoo/sonota/dogamoku.html'>園内動物動画 配信一覧</h3></a>"+"<br>"+"<br>"
    +"<a href='https://www.city.tokushima.tokushima.jp/zoo/'><p>とくしま動物園 HP</p></a>"+"<br>"+"<br>"+"<br>"+"<br>"
    ,


    //フライングゲージ
    "<h3>今はフライングゲージには入れないけど、外の壁に鳥たちの紹介があるよ。見てみてね！</h3>"
    +"<p>(写真：左からアフリカクロトキ、ホオジロカンムリヅル、ショウジョウトキ)</p>" + "<br>"
        +"<h3>ホオジロカンムリヅル</h3>" + "\n" 
        +"<p>ツル目ツル科" + "<br>" + "(生息地) アフリカ大陸南部</p>" + "<br>"
        +"<h3>ショウジョウトキ</h3>" + "\n" 
        +"<p>コウノトリ目トキ科" + "<br>" + "(生息地) 南アメリカ北部</p>" + "<br>"
        +"<h3>カルガモ</h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) アジアの温帯～熱帯</p>" + "<br>"
        +"<h3>クロエリセイタカシギ</h3>" + "\n" 
        +"<p>チドリ目・セイタカシギ科" + "<br>" + "(生息地) 北アメリカ～コロンビア</p>" + "<br>"
        +"<h3>アフリカクロトキ</h3>" + "\n" 
        +"<p>コウノトリ目トキ科" + "<br>" + "(生息地) アフリカ大陸・イラク南西部</p>" + "<br>"
        +"<h3>カンムリヅル</h3>" + "\n" 
        +"<p>ツル目ツル科" + "<br>" + "(生息地) 西アフリカ</p>" + "<br>"
        +"<h3>ケニアカンムリホロホロチョウ</h3>" + "\n" 
        +"<p>キジ目キジ科" + "<br>" + "(生息地) タンザニア・ソマリア・ケニア</p>" + "<br>"
        +"<h3>カナダガン</h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) 北アメリカ</p>" + "<br>"
        +"<h3>オシドリ</h3>" + "\n" 
        +"<p>カモ目カモ科" + "<br>" + "(生息地) 東アジア</p>" + "<br>"
        +"<h3>コウラウン</h3>" + "\n" 
        +"<p>スズメ目ヒヨドリ科" + "<br>" + "(生息地) インド・中国・東南アジア</p>" + "<br>"+"<br>"+"<br>"+"<br>",
    

    //ニホンカモシカ
    "<h3>偶蹄目ウシ科"
    +"<p>(生息地)日本の本州・四国・九州の、"+"<br>"+"ブナやミズナラを中心とした落葉広葉樹林</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" +"<p>主に単独で行動し、眼下線をこすり付ける「臭い付け」によりなわばりを主張する。" + "<br>" 
    + "食性は草食性で、木の葉や芽、樹皮、果実などを食す。</p>"+"<br>"+"<br>"+"<br>"+"<br>",

    
    //温帯プロムナード
    "<h2>レッサーパンダ</h2>"
    +"<h3>食肉目(ネコ目)アライグマ科</h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>標高1800～4000mの森林や竹林に、親子以外は1頭で暮らしている。" + "<br>" 
    +"ジャイアントパンダほどではないが、手首に特殊な突起があり、この突起と他の指を使って主食の細い竹の枝などをつかんで食べる。"+"<br>"
    + "カギ爪や長い尾をたくみに使って木に登り、樹上を移動する。"+"<br>"
    +"地上を歩くときは人間やクマのように足の裏全体をつけて歩く。"+"<br>"+"<br>"
    +"※「アカハナグマの仲間～アライグマ科の紹介～」も見てみてね！</p>"+"<br>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/tanuki.JPG' width='80%'></div>"
    +"<h2>ホンドタヌキ（なまえ：マービー）</h2>"
    +"<h3>食肉目(ネコ目)イヌ科</h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>日本では北海道・本州・四国・九州に住んでいて、北海道にいるものをエゾタヌキという。"+"<br>"
    +"夜行性で、人の影響の少ない場所では日中も活動する。"+"<br>"
    +"イヌ科の仲間では例外的に木登りが上手で、決まった場所にフンをし、これをタヌキの「ためフン」という。フンは巣穴の外でするため、巣穴はいつも清潔である。"+"<br>"+"<br>"
    +"野外の研究者たちはこのフンを分析し、タヌキが何を食べているか調べており、雑食性で植物、昆虫、ネズミの骨などもよく見られる。"+"<br>"
    +"寒冷地や積雪の多い地方では土の穴や樹洞で冬ごもりする。"+"<br>"
    +"<br>"
    +"※「もっとも原始的なイヌ科動物」も見てみてね！</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/kawauso.JPG' width='80%'></div>"
    +"<h2>コツメカワウソ</h2>"
    +"<h3>食肉目(ネコ目)イタチ科</h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>コツメカワウソはカワウソ類の中で最も小型な種類である。"+"<br>"
    +"カワウソの仲間は水陸両生的な生活ができる動物で、主に水中で餌を採り、細長く湾曲したしなやかな体は泳ぐのに適している。"+"<br>"
    +"水掻きは前あしの一部にしかなく、ずんぐりとした指をしており、爪は痕跡程度の小さなものである。"+"<br>"+"<br>"
    +"カエルやザリガニなどの獲物を捕らえる時は手を前にのばして追い、必ず前あしでつかむ。"+"<br>"
    +"手先が器用でビンの蓋をあけることができるが、しめることはできない。"+"<br>"
    +"よく鳴くのもコツメカワウソの特徴で、大きな家族群で生活し、雄が子供の養育を手伝う。"+"<br>"
    +"<br>"
    +"※「カワウソの秘密～器用な手や口について～」も見てみてね！</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //ツキノワグマ
    "<h2>Save The Island Bear"+"<br>"
    +"<p>四国のツキノワグマを絶滅から救おう</p></h2>" + "\n" 
    +"<p>日本のツキノワグマのことが紹介されているよ。" + "<br>" + "かわいいLINEスタンプで募金もできるよ！</p>" + "<br>"+"<br>"
    
    +"<h2>なまえ：よねこ</h2>" +"<br>"
    +"<h3>食肉目(ネコ目)クマ科" +"<br>" 
    +"<p>(生息地)"+"<br>"+"ユーラシア大陸東部から東アジアにかけて</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n"
    +"<p>ツキノワグマは森林に生息し、単独で夜行性が強いが日中も活動する。"+"<br>"
    +"植物食傾向の強い雑食で、季節に応じて様々なものを食べている。"+"<br>"
    +"12～4月ごろに冬眠し、メスは冬眠中に1、2～頭の子を産む。" + "<br>"+ "<br>"
    +"また、ツキノワグマは７つの亜種に分類される。"+ "<br>"
    +"日本に分布するのは亜種ニホンツキノワグマで、本州・四国・九州に分布する。(九州では絶滅した可能性が高いと考えられている。)" + "<br>"
    +"この種は亜種の中でも小型で、黒い体毛で覆われ、胸部に三日月型の白斑をもつ(ない個体もいる)。"+"<br>" 
    +"体長120～180cm、体重50～150kg。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //モンキープロムナード
    "<h2>シシオザル</h2>"
    +"<h3>霊長目オナガザル科"+"<br>"
    +"<p>(生息地)インド南西部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>顔の周りの灰色の長い毛以外は全身真っ黒の毛でおおわれ、しっぽの先端がライオンのように房状になっている。"+"<br>"
    +"熱帯林に10～20頭の群れでくらし、1日の活動時間のうち採食に54%、休けいに27%、移動に15%、その他に4%費やす。"+"<br>"+"<br>"
    +"樹上性が強く、出角木に移動するときは地上を歩くが、普段はめったに地上に滞在しない。"+"<br>"
    +"群れには縄張りがあり、雄は大きな鳴き声(ラウドコール)を出して自分たちの縄張りを知らせて、他の群れとの距離を調整する。"+"<br>"
    +"メスは成熟した後も群れにとどまって雨季に子を出産し、オスは群れを離れてくらすようになる。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/butaozaru5.JPG' width='80%'></div>"
    +"<h2>ブタオザル</h2>"
    +"<h3>霊長目オナガザル科"+"<br>"
    +"<p>(生息地)東南アジア</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>ニホンザルと似た群れ社会をつくって生活しており、メスは基本的に生まれた群れにとどまるが、オスは若ものになると生まれた群れから出ていく。"+"<br>"
    +"群れの大きさは、20～30頭、多いもので80頭程度で、海岸から内陸林、低地から高地の森林に広く分布している。"+"<br>"
    +"移動のときは地上を使うが、木登りは得意である。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/nihonzaru1.JPG' width='80%'></div>"
    +"<h2>ニホンザル</h2>"
    +"<h3>霊長目オナガザル科"+"<br>"
    +"<p>(生息地)日本</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>ふつう数十頭から数百頭の群れで生活しており、群れは、おとなのオスとメスが複数で生活している。"+"<br>"
    +"その群れは母と子が中心となった母系集団で形成され、オスザルは4歳から6歳になると群れから出ていき、群れの間を移動する。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/chinpanzi5.JPG' width='80%'></div>"
    +"<h2>チンパンジー</h2>"
    +"<h3>霊長目オランウータン科"+"<br>"
    +"<p>(生息地)アフリカ中部・西部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>チンパンジーは離合集散をくりかえし、15頭～100頭の群れで生活している。"+"<br>"
    +"ニホンザルの群れとちがってメスは性成熟すると別の群れに移り、オスが群れに残ることが多い。"+"<br>"+"<br>"
    +"食物は果実をはじめとする植物質が主食だが、ほかのサルや小型のカモシカを捕まえて食べることもある。"+"<br>"
    +"アリ塚の内部に細い枝を入れて棒にくっついてくるシロアリを食べたり、石をつかって実を割って食べるなど、道具の使用が知られている。"+"<br>"
    +"地域によって3亜種に分けられる。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/waokitsunezaru2.JPG' width='80%'></div>"
    +"<h2>ワオキツネザル</h2>"
    +"<h3>霊長目キツネザル科"+"<br>"
    +"<p>(生息地)マダガスカル南部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>乾燥した森や川辺の林に生息しており、木や枝の間をジャンプして飛び回ったり、地上を長い尾を立てて歩いて移動したりする。"+"<br>"
    +"樹上で眠り、早朝には太陽に体を向けて日光浴する。気温の高い昼間は木陰で寝る。"+"<br>"+"<br>"
    +"5頭～20数頭の群れで生活し、オス・メスどちらにも優劣順位があり、ふつうメスはオスよりも優位である。"+"<br>"
    +"前肢や腋の下に特殊な分泌腺をもっていて、この分泌液を尾の先にこすりつけたり、枝などにつけてマーキングし、自分のテリトリーを主張する行動がみられる。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/dogerahihi2.JPG' width='80%'></div>"
    +"<h2>ドグエラヒヒ</h2>"
    +"<h3>霊長目オナガザル科"+"<br>"
    +"<p>(生息地)アフリカ中部・東部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>群れの構成はオスとメスが混合するニホンザル型で、オスは若者になると生まれた群れから出て他の群れに移る。"+"<br>"
    +"オスはメスの二倍近くの体重があり強力な犬歯をもっている。"+"<br>"
    +"集団の大きさは30頭から150頭で、群れの行動域の一部は重複している。"+"<br>"+"<br>"
    +"日中はサバンナの地上で生活しているが、夜間は川辺林やアカシアの大きな枝に登って眠る。"+"<br>"
    +"植物中心の雑食性で昆虫、トカゲ、ノウサギやカモシカのこどもを食べることもある。"+"<br>"
    +"オスはあくびをして大きな犬歯を誇示する。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/mantohihi.JPG' width='80%'></div>"
    +"<h2>マントヒヒ</h2>"
    +"<h3>霊長目オナガザル科"+"<br>"
    +"<p>(生息地)アフリカ東部・アラビア半島西南部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>日中は海岸部の低木がまばらに生えている荒れ地や半砂漠地帯・草原ですごし、夜は険しい崖や垂直な岩場にのぼり、外敵から身を守りながら眠る。"+"<br>"+"<br>"
    +"群れは一夫多妻のグループが集まって構成されている。"+"<br>"
    +"最小の社会単位はワンメイル・ユニットと呼ばれ、これが2～3集まった集団をクランと呼ぶ。クランと単独のオスが集合すると、バンドと呼ぶ大集団となる。"+"<br>"
    +"おとなのオスにだけ立派なマントがある。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //タイガープロムナード
    "<h2>ベンガルトラ</h2>"
    +"<h3>食肉目(ネコ目)ネコ科"+"<br>"
    +"<p>(生息地)インド</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>夜行性で森林に広いなわばりをつくって、母子以外は単独で行動する。"+"<br>"
    +"暑いときは体を冷やすために水辺で休んだり、水中に入ったりし、泳ぎは得意である。"+"<br>"+"<br>"
    +"獲物となる動物は、シカ、イノシシ、カメ、昆虫、魚などで、一日にふつう6kg～7kg食べるが、1回に25kg食べることもある。"+"<br>"
    +"獲物をねらうとき、体のしま模様が林や茂みの中でトラの姿を隠してしまう。"+"<br>"
    +"なわばり内では尿をうしろに飛ばし臭いをつける。"+"<br>"+"<br>"
    +"※「絶滅の危機に瀕しているトラたち」「世界最大のネコ科～トラの狩りについて～」も見てみてね！</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/kitsune1.JPG' width='80%'></div>"
    +"<h2>ホンドギツネ</h2>"
    +"<h3>食肉目(ネコ目)イヌ科"+"<br>"
    +"<p>(生息地)日本の本州・四国・九州</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>ホンドギツネはアカギツネの亜種で、毛色は赤みを帯びた黄色から褐色で、一般的にキツネ色と呼ばれる色をしている。"+"<br>"
    +"平野から高地の森林などに生息しているが、人里近くの農耕地にも姿を見せるが性質は用心深く、なかなか人前に現れることは少ない。"+"<br>"+"<br>"
    +"食性は季節や生息環境により変化するが、肉食傾向の強い雑食性で、ネズミや鳥類を好むが果物などの植物質の物も食べる。"+"<br>"
    +"体長は54cmから79cm、長い尾も特徴で32cmから48ｃｍ程度ある。体重は3.3kgから6.8kg程度である。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/kogatawani.JPG' width='80%'></div>"
    +"<h2>ニシアフリカコガタワニ</h2>"
    +"<h3>ワニ目クロコダイル科"+"<br>"
    +"<p>(生息地)サハラ砂漠以南のアフリカ大陸西部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>全長約2mで、サハラ砂漠以南のアフリカ大陸西部に分布し、海水内で発見されることもある。"+"<br>"
    +"頭部は吻(ふん)が短く、後端が切れ上がりクルミ割り状の形態をしており、貝類や甲殻類を捕食するために特殊化した結果と考えられる。"+"<br>"
    +"子供には黄色い横縞(よこじま)があるが、大人になるとこの縞は消え、黒っぽい体になる。"+"<br>"+"<br>"
    +"6～8月に塚を作って約20個産卵し、卵は約100日でふ化する。"+"<br>"
    +"クロコダイル科では比較的原始的な形態を持ち、陸棲(りくせい)傾向が強いため、クロコダイル科の祖先の性質を残すものと考えられる。</p>"+"<br>"
    +"<p>※「クロコダイルとアリゲーター」も見てみてね！</p>"+"<br>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/meganekaiman.JPG' width='80%'></div>"
    +"<h2>メガネカイマン</h2>"
    +"<h3>ワニ目アリゲーター科"+"<br>"
    +"<p>(生息地)中央アメリカ、南アメリカの北部・中部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>ワニ類は、他のどんな爬虫類よりも進化した構造の脳と心臓を持っており、体は固いヨロイの様なウロコに包まれ非常に頑丈である。"+"<br>"
    +"カイマンを含むアリゲーター化のワニは口先が丸みがかっており、クロコダイル科のワニは細くとがっている。"+"<br>"+"<br>"
    +"また、下あごの４番目の歯が上あごのくぼみにすっぽりと収まり、口を閉じた時に外から見えないため、歯が出ているクロコダイル科のワニとは区別できる。"+"<br>"
    +"獲物はあまり泳ぎの速くない魚が中心だが、鳥類・哺乳類・両生類や爬虫類も捕食する。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/rikugame2.JPG' width='80%'></div>"
    +"<h2>ケヅメリクガメ</h2>"
    +"<h3>カメ目リクガメ科"+"<br>"
    +"<p>(生息地)アフリカ東部・中部・西部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>最大甲長72cmで、背甲は褐色で模様はなく、臀部(でんぶ)の大きなうろこが蹴爪(けづめ)状に発達する。"+"<br>"+"<br>"
    +"砂漠の周辺やサバンナなどの開けた乾燥したところに生息し、日中は厚さを避けて深い穴を掘って隠れ、夜明けや日没後に活動する。"+"<br>"
    +"草食性で主に多肉植物を食べ、水分もエサから摂取する。"+"<br>"
    +"</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/pyuma.JPG' width='80%'></div>"
    +"<h2>ピューマ</h2>"
    +"<h3>食肉目(ネコ目)ネコ科</h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>ヤマネコ類では最大級の大きさを誇り、体の大きさの割に敏捷(びんしょう)で瞬発力に優れ、高さ4m、幅12mほどの跳躍記録を持っている。"+"<br>"+"<br>"
    +"主に夜行性で、シカなどの大型哺乳類を中心として捕食するが、ネズミなどの小型哺乳類やバッタといった昆虫も食べる。"+"<br>"
    +"平地から標高約4000mの高地、湿地の森林地帯から砂漠地方まで、非常に幅広い範囲に生息している。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/namakemono.JPG' width='80%'></div>"
    +"<h2>フタユビナマケモノ"+"<br>"+"（なまえ：ビリー）</h2>"
    +"<h3>ナマケモノ亜目フタユビナマケモノ科" +"<br>"
    +"<p>南米ガイアナうまれ</p></h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>そのゆったりした動作から「ナマケモノ」という呼び名のついた動物で、食事から睡眠、出産にいたるまで樹にぶら下がったまま行う。"+"<br>"
    +"活動は主に夜間で、1日の2/3以上を寝て過ごすため体が苔むす事もある。"+"<br>"
    +"地球と一体化した省エネ動物と言えるかもしれない。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //セイロンゾウ
    "<h2>なまえ：マリー (1990年うまれ)</h2>"
    +"<h3>長鼻目ゾウ科" +"<br>" 
    +"<p>(生息地)スリランカ</p></h3>"+ "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" 
    +"セイロンゾウは、インド南東に位置する国・スリランカにのみ生息するゾウであり、特徴は背中が丸く耳は小型、牙は短く鼻の先端に突起を一つ持つ点である。"+"<br>"
    +"前肢の蹄(ひづめ)は5本、後肢の蹄は4本。前肢の蹄(ひづめ)は5本、後肢の蹄は4本。" + "<br>"
    +"<br>"
    +"食性は草食で、10頭から30頭前後のメスと幼獣からなる群れを作る。"+"<br>"
    +"主に森林など山間部や深い森に生息しており、スリランカではゾウは神聖な動物として扱われている。" + "<br>"
    +"しかし、急速な人口増加や、それによる土地開拓などによる森林の伐採、また食用や象牙のための密猟などで、生息数や生息地の減少が、現在も問題視されている。</p>"+"<br>"
    +"<p>現在アジアゾウは、インドゾウ・ボルネオゾウ・スマトラゾウ・そしてセイロンゾウの4種が確認されている。"+"<br>"+"<br>"+"<br>"+"<br>",


    //ミーアキャット
    "<h3>食肉目(ネコ目)ジャコウネコ科" +"<br>" 
    +"<p>(生息地)アフリカ南部</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n"
    +"<p>乾燥したサバンナや荒れ地に、直径10cmくらいのトンネルや巣を掘って暮らしている。"+"<br>"
    +"群れで生活し、日中は主に家族やペアで巣を出て、日暮れになると巣へ戻る。" + "<br>"+"<br>"
    +"雑食性で、小さな哺乳類や爬虫類、昆虫、クモ、植物の根や果物などを食べる。" + "<br>"+"<br>"
    +"尾で体のバランスをとりながら2本足で立ち上がり、あたりを見回す行動がよく見られるが、これはかれらの天敵となる猛禽類などの捕食者を早期発見するためである。" + "<br>"
    +"危険が迫ると仲間へヒューッという警戒音を発したり、普段も絶えず鳴き声を発して相手の位置を確認するなど社会性の強い動物である。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //ライオン
    "<h2>なまえ："+"<br>"
        +"レオ(オス、2010年うまれ)"+"<br>"
        +"ムーン(メス、2018年うまれ)</h2>" +"<br>"
    +"<h3>食肉目(ネコ目)ネコ科" +"<br>" 
    +"<p>(生息地)アフリカ中部・南東部</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n"
    +"<p>猫の仲間は単独生活する種類が多いが、ライオンは群れをつくって暮らしている。"+"<br>"
    +"群れのメンバーは、1頭～3頭のオスと15頭くらいまでのメスと子どもたちで、群れの構成が一般のファミリーと違うことからプライドと呼び区別している。" + "<br>"+"<br>"
    +"1日に20時間は休息するライオンは、日没ごろ狩りに出ていき、多くはメスが獲物を捕らえる。"+"<br>"
    +"狩りの成功率は4回に1回くらいである。" + "<br>"
    +"5歳～6歳くらいのオスには立派なたてがみがある。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //サバンナ区
    "<h3>とくしま動物園は、日本で一番カピバラが多い動物園だよ！</h3>"+"<br>"
    +"<h2>カピバラ</h2>"
    +"<h3>齧歯目(げっしもく)テンジクネズミ科"+"<br>" 
    +"<P>(生息地)南アメリカ東部</p></h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>オスには「モリージョ」という、においを出すコブがある。"+"<br>"
    +"野生のカピバラは一夫多妻制の群れ生活をおくり、水辺のイネ科の植物を食べるが、とくしま動物園では野菜や果物などを食べている。"+"<br>"+"<br>"
    +"また、鳴き声は用途によって変わる。(カピバラの紹介ボードに詳しく書いてあるよ！)"+"<br>"
    +"生まれてすぐの赤ちゃんでも泳げるくらい泳ぎが上手で、足の肉球はハート型になっておりチャームポイント。"+"<br>"
    +"前歯は上下2本ずつで奥歯もある。"+"<br>"
    +"一生伸び続けるため、木の茎や石ころを噛んで削ったり折ったりする。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
    +"<h2>チャップマンシマウマ</h2>"
    +"<h3>奇蹄目(ウマ目)ウマ科</h3>" +"<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>1頭のおとなのオスと2～3頭のメスの生涯変わらないハーレムをつくり、それぞれの行動圏を持っている。"+"<br>"
    +"乾期にはハーレムが集まり大きな集団となり移動する。"+"<br>"
    +"亜種によって縞の模様がちがう。</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //フラミンゴ
    "<h2>フラミンゴ</h2>"
    +"<h3>フラミンゴ目フラミンゴ科"+"<br>"
    +"<p>(生息地)アフリカ、南ヨーロッパ、中南米の塩湖や干潟</p></h3>"+"<br>"+"<br>"+"<br>"+"<br>",


    //オオカミ
    "<h3>みえないときは寝室か矢印の方向にいることがあるよ！</h3>" + "<br>"
    +"<h2>なまえ：ユウキ (2011年うまれ)</h2>" +"<br>"
    +"<h3>食肉目(ネコ目)イヌ科" +"<br>" 
    +"<p>(生息地)北アメリカ・カナダアラスカの森林地帯</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n"
    +"<p>オオカミは、オスの中でもっとも強いオス(アルファオス)とメスの中でもっとも強いメス(アルファメス)とがパック(群れ)を形成して暮らしている。"+"<br>"
    +"群れの中では、社会的なきずなが発達しており、狩りや子育てなどいつも共同で行動している。" + "<br>"+ "<br>"
    +"オオカミの遠吠えは、群れの仲間との連絡、狩りの前触れ、縄張りの主張などの目的で行われ、それぞれ吠え方が異なる。"+"<br>"
    +"条件があえば、10km先まで届く。"+"<br>"
    +"※「オオカミの特徴」についても見てみてね！</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //ホッキョクグマ
    "<h3>観覧時間は9:30～16:00だよ！</h3>" + "<br>" 
    +"<h2>なまえ：ポロロ (メス、2012年うまれ)"+"<br>"
        +"イワン (オス、2000年うまれ)</h2>" +"<br>"
    +"<h3>食肉目(ネコ目)クマ科" +"<br>" 
    +"<p>(生息地)北極圏周辺の沿岸や流氷</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n"
    +"<p>世界最大の肉食動物であり、オスの体重は300kg、最大で800kgになる。"+"<br>"
    +"体の色は白いが、夏は日光による酸化で黄色っぽくなる。" + "<br>"
    +"厚い脂肪と密生した下毛や長い上毛で、マイナス45℃になる厳しい夜冬の寒さをしのぐ。"+"</br>"
    +"また、泳ぎが得意で時速6.5kmで65km泳いだ、との報告がある。" + "<br>"+ "<br>"
    +"オスとメスは3月～6月の交尾期だけいっしょにいて、出産は11月～1月に1頭～4頭を出産する。"+"<br>"
    +"冬ごもりするのは妊娠中のメスである。"+"<br>"+"<br>"
    +"※「最強ホッキョクグマの敵！！　地球温暖化」「ポロロ移動大作戦」も見てみてね！"+"<br>"
    +"ホッキョクグマと背比べしてみよう！</p>"+"<br>"+"<br>"+"<br>"+"<br>",
    

    //アンデスコンドル
    "<h3>とくしま動物園のシンボルマーク！</h3>"
    +"<p>詳しくは、ベンチ近くの「アンデスコンドル　個体紹介」を見てみてね！</p>" + "<br>"
    
    +"<h3>タカ目コンドル科" +"<br>" 
    +"<p>(生息地)アンデス山脈・パタゴニア沿岸の絶壁</p></h3>" + "<br>"
    +"<h3>～どんなどうぶつ？～</h3>" + "\n" 
    +"<p>広大なアンデス山脈一帯に群れで生息し、繁殖期にはツガイで生活している。"+"<br>"
    +"体重が重いコンドルの飛翔はスズメやハトのように羽ばたくのではなく、上昇気流をたくみに利用し、高度4500mまで上昇することができ、上空から鋭い視覚で動物の死体を見つける。" + "<br>"+ "<br>"
    +"飛ぶ鳥の中で一番大きく、翼を広げると3mに達し、大きいもので体重が14kgになる。" + "<br>"
    +"オスは額に肉冠、あごに肉垂がある。"+"<br>"
    +"メスの目は赤く、オスは灰かかった茶色である。"+"<br>"
    +"猛禽類でオス・メスの形態が大きく違うのはアンデスコンドルだけである。"+"<br>" + "<br>" 
    +"※水・金・日曜日の13時～：食事風景が見られるよ！</p>"+"<br>"+"<br>"+"<br>"+"<br>",


    //こども動物園
    "<h2>フンボルトペンギン</h2>"
    +"<h3>ペンギン目ペンギン科"+"<br>"
    +"<p>(生息地)南米の太平洋沿岸域</p></h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>18種のペンギンたちが生息する地域は南半球だけだが、極寒の南極から赤道直下の熱帯までとバラエティに富んでいる。"+"<br>"
    +"フンボルトペンギンは温暖な地域に分布する代表種である。"+"<br>"
    +"太平洋沿岸のフンボルト海流に沿って生息し、地中や岩穴につくった巣と海を一年中往復する。"+"<br>"+"<br>"
    +"ペンギンがフリッパー(翼)を上下に羽ばたかせて水中を進む姿は空を飛ぶ鳥ににていて、まるで水中を飛んでいるように見える。"+"<br>"
    +"空を飛ぶ鳥の骨は中が空洞でとても軽くできているが、ペンギンの骨は深く潜水しても水圧で骨がつぶれないようにしっかりとしている"+"<br>"+"<br>"
    +"そして、重い体を支える丈夫な足をもっている。"+"<br>"
    +"ペンギンは1年に一回、換毛(かんもう)といって体の羽毛が全て生えかわる。"+"<br>"+"</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/liszal.JPG' width='80%'></div>"
    +"<h2>リスザル</h2>"
    +"<h3>霊長目オマキザル科"+"<br>"
    +"<p>(生息地)南米の太平洋沿岸域</p></h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>川沿いの森やマングローブ林、山間地など湿潤な森林に生息している。"+"<br>"
    +"樹上にすみ、昼間行動する。"+"<br>"
    +"体重1kgに満たない身軽な体で、とても俊敏にうごきまわる。"+"<br>"+"<br>"
    +"長い尾は物に巻き付けることはできないが、虫を採るときに空中に跳ね上がって、枝先から枝先へとジャンプする時などバランスをとるのに役立っている。"+"<br>"
    +"雌雄複数の群れをつくって行動し、50頭以上の大きな群れを形成することもある。"+"<br>"+"<br>"
    +"アメリカの人工衛星に乗って最初に宇宙旅行したサルとして有目である。"+"<br>"+"</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/usagi.JPG' width='80%'></div>"
    +"<h2>ウサギ</h2>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>スペイン地方にすむアナウサギを家畜化したものを「カイウサギ」と呼び、野生のウサギと区別している。"+"<br>"
    +"自分でほった穴にすみ、夜行性で巣穴を夕方出て活動し、早朝にもどる。"+"<br>"
    +"草食性で小枝や樹皮などを食べることもある。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/mara.JPG' width='80%'></div>"
    +"<h2>マーラ</h2>"
    +"<h3>齧歯目テンジクネズミ科</h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>野生ではアンデルセンの平原にすんでいる。"+"<br>"
    +"昼間は小さな群れで行動し、夜は地面にほった巣穴で休む。"+"<br>"
    +"世界で2番目に大きいネズミと言われている。"+"<br>"
    +"(1番目はカピバラ！)</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/minibuta.JPG' width='80%'></div>"
    +"<h2>ミニブタ（なまえ：ココア）</h2>"
    +"<h3>偶蹄目イノシシ科</h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>体重100kg以下のブタのことを、ミニブタという。"+"<br>"
    +"視力は弱いが、嗅覚と聴覚は人間の何倍もすぐれている。"+"<br>"
    +"とても頭がよく、「お座り」や「まて」などができる。"+"<br>"
    +"寿命は10年～15年。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/lama1.JPG' width='80%'></div>"
    +"<h2>ラマ（なまえ：チャコ）</h2>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>ラマは南米のアンデス山地など乾燥した環境で飼育されている家畜である。"+"<br>"
    +"肉や毛皮の他に、荷物を運んだり、乗用に利用されるが、メスは乳もしぼる。"+"<br>"
    +"体重を足の裏の肉球で支えている。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/hitsuji2.JPG' width='80%'></div>"
  +"<h2>ヒツジ</h2>"+"<br>"
    +"<h3>偶蹄目ウシ科ヒツジ属</h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>何千年も前から家畜化されている。"+"<br>"
    +"肉、毛皮、乳などさまざまな用途で用いられている。"+"<br>"
    +"性格は警戒心が強く、とても臆病である。寿命は10年～12年。</p>"
    +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/gatyou.JPG' width='80%'></div>"
    +"<h2>ガチョウ</h2>"
    +"<h3>カモ目カモ科</h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>ニワトリと同じくらい古くから、人と生活をしてきた。"+"<br>"
    +"体が大きいため飛ぶことはできない。"+"<br>"
    +"警戒心が強く、人や動物をみると大声でさわぐので、昔から番犬のかわりになっていた。</p>"
  +"<br>"
    +"<br>"
    +"<br>"
  +"<div style='text-align: center'><img src='./pic/pony.JPG' width='80%'></div>"
    +"<h2>ポニー</h2>"+"<br>"
    +"<h3>奇蹄目ウマ科</h3>"+"<br>"
    +"<h3>～どんなどうぶつ？～</h3>"
    +"<p>体高147cm以下のウマのことを「ポニー」という。"+"<br>"
    +"体はがっしりとしていて、小さいわりには力が強い。"+"<br>"
    +"頭がよく、性格はやさしい。"+"<br>"
    +"寿命は20年～30年。"+"</p>"
    +"<br>"+"<br>"+"<br>"+"<br>",
];
