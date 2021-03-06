/**
 * @api {get} {url}/api/people/:peo_id 获取人物详细信息
 * @apiName getPeopleInfo
 * @apiGroup People
 *
 * @apiParamExample Request API
 *      /api/people/1
 *
 * @apiSuccessExample OK
 *      {
 *        "status": "OK",
 *        "data": {
 *          "peo_id": 1,
 *          "name": "彭浩翔",
 *          "gender": 1,
 *          "job": "编剧 / 制片 / 导演 / 演员 / 摄影",
 *          "birthday": "1973-09-21T16:00:00.000Z",
 *          "imgUrl": "https://img1.doubanio.com/img/celebrity/medium/39.jpg",
 *          "description": "<span class=\"all hidden\" style=\"display: inline;\">　　彭浩翔电影集合黑色幽默、恐怖、离奇荒诞与警匪等元素。自幼热爱电影，14岁时曾用兄长的录像机自导自演短片《智勇三雄》，中学时为了看一场阿诺·施瓦辛格的电影而跟自己女友分手。毕业后曾经修读台大先修班，回港后曾在亚洲电视担任喜剧综艺科的节目编剧，并在报纸与杂志撰写影评及小说。 1995年，他为林海峰执导的电影《天空小说》撰写剧本。在1997年，他转职香港商业电台的节目主持兼且出版长篇小说《全职杀手》，并在2001年被拍成同名电影。1999年，他自资拍摄及执导短片《暑期作业》，获提名角逐台湾金马奖最佳短片及获邀参加多个国际影展。 2001年彭浩翔拍摄首部长片《买兇拍人》，获得香港电影金紫荆奖最佳编剧及获提名香港电影金像奖最佳编剧。2003年拍摄了第二部电影《大丈夫》，讲述四名小男人瞒着妻子女友嫖妓的故事，获得香港电影金像奖最佳新晋导演。2004年，他凭《公主复仇记》获邀参加东京国际电影节。2005年，《AV》讲述一群青年学生為实现自己的梦想，向青少年创业基金筹钱拍片，请来日本AV女优拍摄成人电影。 2006年拍摄的《伊莎贝拉》则成为德国第56届柏林国际电影节唯一入围竞赛单元部份的华语电影，最后该部电影的配乐人金培达获得柏林电影节最佳电影配乐银熊奖。 2007年9月上映的《出埃及记》的剧情含有港式粗言秽语的对白，而电检处却把《出埃及记》归类IIB级程度的标准，故此《出埃及记》的审检过程与电检处的审检準则受到广泛报导。2007年电影作品《破事儿》被坊间评为一部紧贴当代香港城市人生活风貌的电影。 2010年《志明与春娇》，电影讲述新修订禁烟条例实施后，烟民围在户外烟灰缸吸烟，因而产生的一段男女关系。彭浩翔与拍档麦曦茵凭此电影获得第30届香港电影金像奖最佳编剧奖。同年电影《维多利亚壹号》成為乌甸尼斯远东电影节开幕电影作全球首映，以香港楼市为题材，描述一位努力工作仍难以在楼价飞涨下买楼的女子，导致精神崩溃变成连环杀手的故事。</span>"
 *        },
 *        "time": "2017-04-30T13:01:17.012Z",
 *        "msg": "人物信息获取成功",
 *        "user": null
 *      }
 *
 * @apiErrorExample PARAM_ERROR
 *      {
 *        "status": "PARAM_ERROR",
 *        "data": null,
 *        "time": "2017-04-30T13:04:51.255Z",
 *        "msg": "人物不存在",
 *        "user": null
 *      }
 */