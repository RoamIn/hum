import React from 'react'

import './index.scss'

interface ArticleProps {}

class Article extends React.Component<ArticleProps> {
  state = {
    content: `        我外婆说，我舅舅小时候性子很揪。跟我外公吵完架，就把眼镜布塞眼镜盒里，拿几本书塞进书包，气哼哼的出门，在门口还会吼一声：我这就去美国！再也不回来了！

        
        外婆说，每到这时，她就叹一口气，走进厨房。打两个鸡蛋，坠在碗里的面粉上，加水，拌，加点盐，加点糖。直到面、鸡蛋、盐、糖勾兑好了感情，像鸡蛋那样能流、能坠、能在碗里滑了，就洒一把葱。倒油在锅里，转一圈，起火。看着葱都沉没到面里头了，把面粉碗绕着圈倒进锅里，铺满锅底。一会儿，有一面煎微黄、有滋滋声、有面香了，她就把面翻个儿。两面都煎黄略黑、泛甜焦香时，她把饼起锅，再洒一点儿白糖。糖落在热饼上，会变成甜味的云。这时候，我舅舅准靠着门边儿站着，右手食指挠嘴角。我外婆说：吃吧。我舅舅就溜进来，捧着一碗面饼，拿双筷子，吃去了。
        
        
        我爸说，我以前在房间里看书时，就像进了螺蛳壳，总是听不见叫喊我吃饭的声音。每当这时，他就叹一口气，走进厨房。往锅里倒油，叉着腰等油热起来，打下一个鸡蛋，叉着腰等，看着蛋白边儿被油煎得黑黄卷了，翻个面儿，往锅里点酱油、一小点糖和水，听着荷包蛋在酱油里咕嘟咕嘟声。等酱油和糖的香味把我抓到厨房门口时，他关火，把荷包蛋连酱汁一起装碗，扣在我的热白米饭上。指指：吃。
        
        
        我妈说，我爸以前痴迷于麻将。中午出门，说好下午回来做饭，可是到天黑了都不见人。我妈说，每到这时，她就叹一口气，走进厨房。烧一铫子水，等沸了，一半倒进大广口瓶里，再往广口瓶里插一瓶黄酒，另一半浇上她刚抓的花生，摇一摇，把水倒了。倒油进凉锅，洒花生，起火。花生们像进了温泉，嘴里发出丝丝拉拉的声音。不管，拿铲子翻着炒，花生们怕烫了，开始劈里啪啦的叫疼，我妈很有同情心，就把火关了，就着油继续炒它们。等花生发出一片唏嘘声，我妈就把它们请出来，倒进一个洒了盐的碗里。顺手把黄酒瓶从广口瓶里拿出来，开盖儿。黄酒和花生的香魂半空搅着。这时候，我爸准就开始敲门了。
        
        
        我爸说，我妈怀着我时，脾气大，常嫌他懒散，一生气就摔门而出，去厂里值夜班。每当这时，他就叹一口气，去菜场买三个鲢鱼头——那时鲢鱼头、鸡爪子这些还很便宜。我爸走进厨房，把每个鱼头剖两半，洗干净，尽去其腥。炒锅里下油，一点黄酒，煎。鱼头怕疼，发出呲呲求饶声，脸色发黄，我爸就关火，换个大瓷锅，把炒锅里的油、酒、鱼头一起倒进去，加水，起慢火，开始等。鱼头没警惕，在温热的汤水里睡着了。我爸像个巫师一样，看着星辰，算着时间，掀锅盖看见汤变得白浓，一勺下去都挂浆连丝了，就口念咒语，念句马里马里哄，洒葱叶。我妈就飕的一声，出现在门口了。
        
        
        我爸说，以前周末，我时常赖床到中午。拎不醒，叫不听。每当这时，他就叹一口气，走进厨房。把冷米饭加点水，加一块年糕，一起煮着；拿一块睡得和我一样沉的豆腐，点几滴香麻油，点几滴酱油，加一点盐，切点葱花，拿筷子一划拉，豆腐就醒了，变成一堆冷艳香浓的拌豆腐；拿两片五香豆腐干，切成薄片，扔进滚水里烫一下，没等豆腐干喊疼就捞起来，趁热倒上三合油，顺手把煮泡饭的火关掉，看泡饭米粒快和年糕融一起了。他说这时候，我准已经衣冠整齐，坐在桌前了。
        
        
        我以前，有那么两年，每当心情不好，好像要在太阳穴那儿凝结成块诱发头疼时，就去买香肠、鸡蛋、青豆、青椒、毛豆和胡萝卜。在锅里下一遍油，把青椒下去，炒出一点味道，捞走；把五个鸡蛋打进青椒油里，看着它们起泡；再下一遍油，把冷饭下去，拿铲子切了米饭，让鸡蛋卷裹着；再下一遍油，把切好的香肠和胡萝卜，外加青豆和青椒倒下去。我妈这时就在远方开个窗提示我：别下那么多油！鸡蛋要分块儿！我不理她，继续炒。等蛋炒得浓黄香，眼看要焦黑时，停火起锅。把炒饭盛一大盆，花一小时吃完，一边抹嘴边的油，一边烧水煮茶。喝一口热普洱，打一个饱满的油香十足的嗝后，不好的心情就飘走了。
        
        我妈说，每当她想我回无锡了，就去菜场买一只体格壮硕油头肥厚的鸡，洗干净了，放水里煮。鸡很生气，吐了许多浮泡儿，刮了。为了让鸡服气，她下了点姜和酒，放下锅盖慢火闷，把鸡只吃不锻炼的油都熬出来，浓黄的浮成一片一片。又拿一个锅，加点儿水，把一块块的五花肉搁进去，煮得五花肉见灰白了，去了水，下酱油、糖和黄酒，放下锅盖慢火闷，让肉慢慢闷红。她自己一旁继续扫地、逗狗、收拾沙发垫去。
        ——她说，这时候，我在上海，或者其他天涯海角的街上，不管走着还是坐着还是站着，准会忽然一皱眉，一耸鼻子，抬头仰望许久，然后对身旁的某人说：“我觉得，我妈好像在炖鸡汤和红烧肉。”
        `
  }

  render() {
    return (
      <section className="workspace__article">
        <header />
        <div className="article-body">
          {this.state.content}
        </div>
      </section>
    )
  }
}

export default Article
