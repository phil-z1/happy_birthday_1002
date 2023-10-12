// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的宝贝大哥！🐷",  // 同上...
        "虽然！宝宝的生日已经过了~💕",
        "但！说好的还是要补上的！🙈",
        "已经好久好久没见宝宝！😭",
        "你都不想回来的！！哼！！😢 ",
        "这是我们在一起的🍭",
        "第一个生日！（好像也算第二个了）🍬",
        "这半年多来，我见过你🤗",
        "美丽的样子💕",
        "可爱的样子😋",
        "生气的样子🤬",
        "认真的样子🤓",
        "搞怪的样子😎",
        "都是我喜欢的样子！❤️",
        "对了，礼物会有的噢！（搓搓手）🤲",
        "接下来的一年里我们要一起加油！💪",
        "我们已经一起度过了一段迷茫的日子！✊",
        "我们以后的路还长着呢！🚩",
        "还要一起去旅游！📍",
        "一起去看话剧！🎥",
        "一起去打游戏！🕹",
        "一起去吃好多好吃的！🍨",
        "嗯！一定要好好吃饭！",
        "吃饱饱的😋",
        "然后才有力气干活📝",
        "和想我！💕",
        "生日快乐~~~~~🍭🎂💕",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我": "./imgs/photo/haimati.jpg",
        "亲爱的宝贝大哥！🐷": "./imgs/photo/haimati_1.jpg",
        "虽然！宝宝的生日已经过了~💕": "./imgs/photo/haimati_2.jpg",
        "但！说好的还是要补上的！🙈": "./imgs/photo/busy.jpg",
        "已经好久好久没见宝宝！😭": "./imgs/photo/sad_cry.jpg",
        "你都不想回来的！！哼！！😢 ": "./imgs/photo/video_call.jpg",
        "这是我们在一起的🍭": "./imgs/photo/bike.jpg",
        "第一个生日！（好像也算第二个了）🍬": "./imgs/photo/wish.jpg",
        "这半年多来，我见过你🤗": "./imgs/photo/curiosity.jpg",
        "美丽的样子💕": "./imgs/photo/elegant.jpg",
        "可爱的样子😋": "./imgs/photo/shy.jpg",
        "生气的样子🤬": "./imgs/photo/you_done.jpg",
        "认真的样子🤓": "./imgs/photo/work_hard.jpg",
        "搞怪的样子😎": "./imgs/photo/sun_coat.jpg",
        "都是我喜欢的样子❤️": "./imgs/photo/subway_2.jpg",
        "对了，礼物会有的噢！（搓搓手）🤲": "./imgs/photo/babe.jpg",
        "接下来的一年里我们要一起加油！💪": "./imgs/photo/pingpong_3.jpg",
        "我们已经一起度过了一段迷茫的日子！✊": "./imgs/photo/alone.jpg",
        "我们以后的路还长着呢！🚩": "./imgs/photo/night.jpg",
        "还要一起去旅游！📍": "./imgs/photo/pingpong.jpg",
        "一起去看话剧！🎥": "./imgs/photo/pingpong_1.jpg",
        "一起去打游戏！🕹": "./imgs/photo/pingpong_2.jpg",
        "一起去吃好多好吃的！🍨": "./imgs/photo/pingpong_3.jpg",        
        "嗯！一定要好好吃饭！": "./imgs/photo/rain_coat.jpg",        
        "吃饱饱的😋": "./imgs/photo/lunch.jpg",        
        "然后才有力气干活📝": "./imgs/photo/reading.jpg",        
        "和想我！💕": "./imgs/photo/subway_1.jpg",
        "生日快乐~~~~~🍭🎂💕": "./imgs/photo/yeah.jpg",
    },
    
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "点我开始",
        play: "音乐在哪里！",
        bannar_coming: "搞点颜色",
        balloons_flying: "好像还少点东西",
        cake_fadein: "我的蛋糕呢？",
        light_candle: "蜡烛呢？",
        wish_message: "生日快乐～快点悄咪咪许个愿~",
        story: "给我亲爱的宝贝大哥~~~",
    },

    // 结束语
    loveText: '爱你的🐷小弟~'
};
