<script>
export default {
  data: function () {
    return {
      concertImages: [
        {
          src: require("~/assets/images/archive/HachinoheClarinet.jpg"),
          size: "half",
          title: "八戸アンサンブルカンパニーさんコンサート",
          description: "なんとコントラバスクラで！！"
        },
        {
          src: require("~/assets/images/archive/Oyako1st.jpg"),
          size: "half",
          title: "第１回親子コンサート",
          description: "泣いても走り回ってもいいコンサートをやりたくて企画してみました。育自サークルjunonさんに主催してもらいました"
        },
        {
          src: require("~/assets/images/archive/Oyako2nd.png"),
          size: "half",
          title: "第２回親子コンサート",
          description: "泣いても走り回ってもいいコンサートその２です"
        },
        {
          src: require("~/assets/images/archive/oyako3rd.jpg"),
          size: "half",
          title: "第3回親子コンサート",
          description: "泣いても走り回ってもいいコンサートその3です"
        },
         {
          src: require("~/assets/images/archive/MWBT10th.jpg"),
          size: "half",
          title: "Marble Wind Brass TIKYO 第8回定期演奏会チラシ",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のチラシです。演出もがんばりました。"
        },
        {
          src: require("~/assets/images/archive/MWBT10in.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYO 第10回定期演奏会パンフレット中身",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のパンフレット中身です。演出もがんばりました。"
        },
        {
          src: require("~/assets/images/archive/MWBT10out.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYO 第10回定期演奏会パンフレット外身",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のパンフレット外身です。演出もがんばりました。"
        },
        {
          src: require("~/assets/images/archive/MWBT8.png"),
          size: "half",
          title: "Marble Wind Brass TIKYO 第8回定期演奏会チラシ",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第10回定期演奏会のチラシです。バスクラ吹きました。"
        },
        {
          src: require("~/assets/images/archive/MWBT8in.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYO 第8回定期演奏会パンフレット中",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第8回定期演奏会のパンフレットのパンフレットの中身です"
        },
        {
          src: require("~/assets/images/archive/MWBT8out.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYO 第8回定期演奏会パンフレットそと",
          description: "都内で活動する吹奏楽団体、Marble Wind Brass TIKYOの第8回定期演奏会のパンフレットのパンフレットの外身です"
        },
        {
          src: require("~/assets/images/archive/sakura.png"),
          size: "half",
          title: "川崎さくら吹奏楽団第２回定期演奏会チラシ",
          description: "川崎さくら吹奏楽団第２回定期演奏会チラシです。バスクラ吹きました。"
        },
        {
          src: require("~/assets/images/archive/sakura4thout.png"),
          size: "normal",
          title: "川崎さくら吹奏楽団第4回定期演奏会パンフレット外側",
          description: "川崎さくら吹奏楽団第4回定期演奏会パンフレットです〜オペラ座の怪人がメインということで"
        },
        {
          src: require("~/assets/images/archive/sakura4th.png"),
          size: "normal",
          title: "川崎さくら吹奏楽団第4回定期演奏会パンフレット内側",
          description: "川崎さくら吹奏楽団第4回定期演奏会パンフレットです〜オペラ座の怪人がメインということで"
        },
        {
          src: require("~/assets/images/archive/famicon.png"),
          size: "half",
          title: "Marble Wind Brass TIKYOファミリーコンサート2016チラシ",
          description: "Marble Wind Brass TIKYOファミリーコンサート2016チラシです。バスクラ吹きました。"
        },
        {
          src: require("~/assets/images/archive/famiconIn.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット中身",
          description: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット中身です。バスクラ吹きました。"
        },
        {
          src: require("~/assets/images/archive/famiconOut.png"),
          size: "normal",
          title: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット外見",
          description: "Marble Wind Brass TIKYOファミリーコンサート2016パンフレット外身です。バスクラ吹きました。"
        },
        {
          src: require("~/assets/images/archive/famicon2017.png"),
          size: "half",
          title: "Marble Wind Brass TIKYOファミリーコンサート2017チラシ",
          description: "Marble Wind Brass TIKYOファミリーコンサート2017チラシです。バスクラ吹きました。司会もした気がする"
        },
        {
          src: require("~/assets/images/archive/famicon2019.png"),
          size: "half",
          title: "Marble Wind Brass TIKYOファミリーコンサート2017チラシ",
          description: "Marble Wind Brass TIKYOファミリーコンサート2019チラシです。当日朝にバスクラが壊れる悲劇"
        },
        {
          src: require("~/assets/images/archive/asks.png"),
          size: "half",
          title: "大人の文化祭チラシ",
          description: "M大人の文化祭チラシです。"
        },
      ],
      shinrinyokuImages: [
         {
          src: require("~/assets/images/archive/sinrinyoku01-01.png"),
          size: "half",
          title: "NPO法人森林浴音楽会ポスター",
          description: "お手伝いしているNPO法人森林浴音楽会ポスター1です"
        },
        {
          src: require("~/assets/images/archive/sinrinyoku02-01.png"),
          size: "half",
          title: "NPO法人森林浴音楽会ポスター",
          description: "お手伝いしているNPO法人森林浴音楽会ポスター2です"
        },
        {
          src: require("~/assets/images/archive/sinrinyoku03-01.png"),
          size: "half",
          title: "NPO法人森林浴音楽会ポスター",
          description: "お手伝いしているNPO法人森林浴音楽会ポスター3です"
        },
        {
          src: require("~/assets/images/archive/sinrinyoku04-01.png"),
          size: "half",
          title: "NPO法人森林浴音楽会ポスター",
          description: "お手伝いしているNPO法人森林浴音楽会ポスター4です"
        },
        {
          src: require("~/assets/images/archive/sinrinyokuOut.jpg"),
          size: "normal",
          title: "NPO法人森林浴音楽会折パンフレット",
          description: "お手伝いしているNPO法人森林浴音楽会折パンフレットです。内容が薄くて困った"
        },
        {
          src: require("~/assets/images/archive/sinrinyokuIn.jpg"),
          size: "normal",
          title: "NPO法人森林浴音楽会折パンフレット",
          description: "お手伝いしているNPO法人森林浴音楽会折パンフレットです。内容が薄くて困った"
        },
      ],
      illustImages: [
         {
          src: require("~/assets/images/archive/silk2.png"),
          size: "half",
          title: "クリアファイル作った時のしるくちゃん",
          description: "クリアファイル作った時のしるくちゃんす"
        },
        {
          src: require("~/assets/images/archive/silkPrin2.png"),
          size: "normal",
          title: "クリアファイル作った時のしるくちゃんとぷりんちゃん",
          description: "クリアファイル作った時のしるくちゃんとぷりんちゃん"
        },
        {
          src: require("~/assets/images/archive/azarasi.png"),
          size: "half",
          title: "クリアファイル作った時のアザラシ",
          description: "クリアファイル作った時のアザラシ"
        },
      ],
      mfcgImages: [
        {
          src: require("~/assets/images/archive/mfcgOut.jpg"),
          size: "normal",
          title: "ミャンマーファミリークリニックさんの会報のお手伝い",
          description: "ミャンマーファミリークリニックさんの会報の外面。これ文字多くて大変だったなぁ・・"
        },
        {
          src: require("~/assets/images/archive/mfcgIn.jpg"),
          size: "normal",
          title: "ミャンマーファミリークリニックさんの会報のお手伝い",
          description: "ミャンマーファミリークリニックさんの会報の中面。これ文字多くて大変だったなぁ・・"
        },
        {
          src: require("~/assets/images/archive/mfcg12out.jpg"),
          size: "normal",
          title: "ミャンマーファミリークリニックさんの会報12号のお手伝い",
          description: "ミャンマーファミリークリニックさんの会報12号の外面。これまた文字多くて大変だったなぁ・・"
        },
        {
          src: require("~/assets/images/archive/mfcg12.jpg"),
          size: "normal",
          title: "ミャンマーファミリークリニックさんの会報12号のお手伝い",
          description: "ミャンマーファミリークリニックさんの会報12号の中面。これまた文字多くて大変だったなぁ・・"
        },
      ],
      teanaImages: [
         {
          src: require("~/assets/images/archive/teana-in.png"),
          size: "normal",
          title: "エステサロンの三つ折りチラシ",
          description: "エステサロンの三つ折りチラシ中ですね"
        },
        {
          src: require("~/assets/images/archive/teana-out.png"),
          size: "normal",
          title: "エステサロンの三つ折りチラシ",
          description: "エステサロンの三つ折りチラシ外です"
        },
      ],
    }
  }
}
</script>
