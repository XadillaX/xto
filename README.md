# (X)TO

[![xto](http://img.shields.io/npm/v/xto.svg)](https://www.npmjs.com/package/xto)
[![Dependency Status](https://img.shields.io/david/XadillaX/xto.svg)](https://david-dm.org/xadillax/xto)
[![TravisCI](https://img.shields.io/travis/XadillaX/xto/master.svg)](https://travis-ci.org/XadillaX/xto)
[![Coveralls](https://img.shields.io/coveralls/XadillaX/xto/master.svg)](https://coveralls.io/r/XadillaX/xto)
[![License](https://img.shields.io/npm/l/xto.svg?style=flat)](https://www.npmjs.org/package/xto)
[![Star at GitHub](https://img.shields.io/github/stars/XadillaX/xto.svg?style=social&label=Star)](https://github.com/xadillax/xto)

[![Join the chat at https://gitter.im/XadillaX/xto](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/XadillaX/xto?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Just an API for Node.js to query each express with ♥.

Because many Chinese express companies are called [*]to (eg: sto, zto, gto, etc.), I call this project XTO.

## ESSENCE

It just simply call the "SEEM-PRIVATE" API of [kuaidi100](http://www.kuaidi100.com/).

## INSTALLATION

```shell
$ npm install xto --save
```

## USAGE

The code below is base usage:

```javascript
var xto = require("xto");

xto.query(NUMBER, COMPANY_NAME, function(err, express) {
    //... Do something
});
```

> The `NUMBER` is the express id of each express company.
>
> The `COMPANY_NAME` may be the company's name, short name or code.

You can even get a company's information:

```javascript
var info = xto.getCompanyInfo(COMPANY_NAME);
```

And you have to know the `state` field in the json by using:

```javascript
var text = xto.stateToText(express["state"]);
```

## CONTACT ME

If you want contribute to this project, you can fork it!

And if you have some question, you can post it to ISSUES or contact me:

  + Email: admin#xcoder.in
  + Website: http://xcoder.in

## COMPANIES SUPPORTED

You can use one company's name, shortname and english code to query. Here's a list for the companies:

  + 申通快递（申通，shentong）
  + EMS（EMS，ems）
  + 顺丰速运（顺丰，shunfeng）
  + 韵达快递（韵达，yunda）
  + 圆通速递（圆通，yuantong）
  + 中通快递（中通，zhongtong）
  + 百世汇通（汇通，huitongkuaidi）
  + 天天快递（天天，tiantian）
  + 宅急送（宅急送，zhaijisong）
  + 鑫飞鸿（鑫飞鸿，xinhongyukuaidi）
  + CCES/国通快递（CCES，cces）
  + 全一快递（全一，quanyikuaidi）
  + 彪记快递（彪记，biaojikuaidi）
  + 星晨急便（星晨急便，xingchengjibian）
  + 亚风速递（亚风，yafengsudi）
  + 源伟丰（源伟丰，yuanweifeng）
  + 全日通（全日通，quanritongkuaidi）
  + 安信达（安信达，anxindakuaixi）
  + 民航快递（民航，minghangkuaidi）
  + 凤凰快递（凤凰，fenghuangkuaidi）
  + 京广速递（京广，jinguangsudikuaijian）
  + 配思货运（配思，peisihuoyunkuaidi）
  + 中铁物流（中铁，ztky）
  + UPS（UPS，ups）
  + FedEx-国际件（FedEx，fedex）
  + DHL-中国件（DHL，dhl）
  + AAE-中国件（AAE，aae）
  + 大田物流（大田，datianwuliu）
  + 德邦物流（德邦，debangwuliu）
  + 新邦物流（新邦，xinbangwuliu）
  + 龙邦速递（龙邦，longbanwuliu）
  + 一邦速递（一邦，yibangwuliu）
  + 速尔快递（速尔，suer）
  + 联昊通（联昊通，lianhaowuliu）
  + 广东邮政（广东邮政，guangdongyouzhengwuliu）
  + 中邮物流（中邮，zhongyouwuliu）
  + 天地华宇（华宇，tiandihuayu）
  + 盛辉物流（盛辉，shenghuiwuliu）
  + 长宇物流（长宇，changyuwuliu）
  + 飞康达（飞康达，feikangda）
  + 元智捷诚（元智捷诚，yuanzhijiecheng）
  + 邮政包裹/平邮（邮政国内，youzhengguonei）
  + 国际包裹（邮政国际，youzhengguoji）
  + 万家物流（万家，wanjiawuliu）
  + 远成物流（远成，yuanchengwuliu）
  + 信丰物流（信丰，xinfengwuliu）
  + 文捷航空（文捷，wenjiesudi）
  + 全晨快递（全晨，quanchenkuaidi）
  + 佳怡物流（佳怡，jiayiwuliu）
  + 优速物流（优速，youshuwuliu）
  + 快捷速递（快捷，kuaijiesudi）
  + D速快递（D速，dsukuaidi）
  + 全际通（全际通，quanjitong）
  + 能达速递（能达，ganzhongnengda）
  + 青岛安捷快递（安捷，anjiekuaidi）
  + 越丰物流（越丰，yuefengwuliu）
  + DPEX（DPEX，dpex）
  + 急先达（急先达，jixianda）
  + 百福东方（百福东方，baifudongfang）
  + BHT（BHT，bht）
  + 伍圆速递（伍圆，wuyuansudi）
  + 蓝镖快递（蓝镖，lanbiaokuaidi）
  + COE（COE，coe）
  + 南京100（南京100，nanjing）
  + 恒路物流（恒路，hengluwuliu）
  + 金大物流（金大，jindawuliu）
  + 华夏龙（华夏龙，huaxialongwuliu）
  + 运通中港（运通，yuntongkuaidi）
  + 佳吉快运（佳吉，jiajiwuliu）
  + 盛丰物流（盛丰，shengfengwuliu）
  + 源安达（源安达，yuananda）
  + 加运美（加运美，jiayunmeiwuliu）
  + 万象物流（万象，wanxiangwuliu）
  + 宏品物流（宏品，hongpinwuliu）
  + GLS（GLS，gls）
  + 上大物流（上大，shangda）
  + 中铁快运（中铁，zhongtiewuliu）
  + 原飞航（原飞航，yuanfeihangwuliu）
  + 海外环球（海外环球，haiwaihuanqiu）
  + 三态速递（三态，santaisudi）
  + 晋越快递（晋越，jinyuekuaidi）
  + 联邦快递（联邦，lianbangkuaidi）
  + 飞快达（飞快达，feikuaida）
  + 全峰快递（全峰，quanfengkuaidi）
  + 如风达（如风达，rufengda）
  + 乐捷递（乐捷递，lejiedi）
  + 忠信达（忠信达，zhongxinda）
  + 芝麻开门（芝麻开门，zhimakaimen）
  + 赛澳递（赛澳递，saiaodi）
  + 海红网送（海红网送，haihongwangsong）
  + 共速达（共速达，gongsuda）
  + 嘉里大通（嘉里大通，jialidatong）
  + OCS（OCS，ocs）
  + USPS（USPS，usps）
  + 美国快递（美国，meiguokuaidi）
  + 成都立即送（立即送，lijisong）
  + 银捷速递（银捷，yinjiesudi）
  + 门对门（门对门，menduimen）
  + 递四方（递四方，disifang）
  + 郑州建华（郑州建华，zhengzhoujianhua）
  + 河北建华（河北建华，hebeijianhua）
  + 微特派（微特派，weitepai）
  + DHL-德国件（DHL Deutschland）（dhlde，dhlde）
  + 通和天下（通和天下，tonghetianxia）
  + EMS-国际件（EMS-国际件，emsguoji）
  + FedEx-美国件（FedEx，fedexus）
  + 风行天下（风行天下，fengxingtianxia）
  + 康力物流（康力，kangliwuliu）
  + 跨越速递（跨越，kuayue）
  + 海盟速递（海盟，haimengsudi）
  + 圣安物流（圣安，shenganwuliu）
  + 一统飞鸿（一统飞鸿，yitongfeihong）
  + 中速快递（中速，zhongsukuaidi）
  + 新蛋奥硕（新蛋奥硕，neweggozzo）
  + OnTrac（OnTrac，ontrac）
  + 七天连锁（七天连锁，sevendays）
  + 明亮物流（明亮，mingliangwuliu）
  + 凡客配送（作废）（凡客，vancl）
  + 华企快运（华企，huaqikuaiyun）
  + 城市100（城市100，city100）
  + 红马甲物流（红马甲，sxhongmajia）
  + 穗佳物流（穗佳，suijiawuliu）
  + 飞豹快递（飞豹，feibaokuaidi）
  + 传喜物流（传喜，chuanxiwuliu）
  + 捷特快递（捷特，jietekuaidi）
  + 隆浪快递（隆浪，longlangkuaidi）
  + EMS-英文（EMS-英文，emsen）
  + 中天万运（中天万运，zhongtianwanyun）
  + 香港(HongKong Post)（香港邮政，hkpost）
  + 邦送物流（邦送，bangsongwuliu）
  + 国通快递（国通，guotongkuaidi）
  + 澳大利亚(Australia Post)（auspost，auspost）
  + 加拿大(Canada Post)（加拿大邮政，canpost）
  + 加拿大邮政（加拿大邮政，canpostfr）
  + UPS-全球件（UPS-全球件，upsen）
  + TNT-全球件（TNT-全球件，tnten）
  + DHL-全球件（DHL，dhlen）
  + 顺丰-美国件（顺丰-美国件，shunfengen）
  + 汇强快递（汇强，huiqiangkuaidi）
  + 希优特（希优特，xiyoutekuaidi）
  + 昊盛物流（昊盛，haoshengwuliu）
  + 尚橙物流（尚橙，shangcheng）
  + 亿领速运（亿领，yilingsuyun）
  + 大洋物流（大洋，dayangwuliu）
  + 递达速运（递达，didasuyun）
  + 易通达（易通达，yitongda）
  + 邮必佳（邮必佳，youbijia）
  + 亿顺航（亿顺航，yishunhang）
  + 飞狐快递（飞狐，feihukuaidi）
  + 潇湘晨报（潇湘晨报，xiaoxiangchenbao）
  + 巴伦支（巴伦支，balunzhi）
  + Aramex（Aramex，aramex）
  + 闽盛快递（闽盛，minshengkuaidi）
  + 佳惠尔（佳惠尔，syjiahuier）
  + 民邦速递（民邦，minbangsudi）
  + 上海快通（上海快通，shanghaikuaitong）
  + 北青小红帽（北青小红帽，xiaohongmao）
  + GSM（GSM，gsm）
  + 安能物流（安能，annengwuliu）
  + KCS（KCS，kcs）
  + City-Link（City-Link，citylink）
  + 店通快递（店通，diantongkuaidi）
  + 凡宇快递（凡宇，fanyukuaidi）
  + 平安达腾飞（平安达腾飞，pingandatengfei）
  + 广东通路（广东通路，guangdongtonglu）
  + 中睿速递（中睿，zhongruisudi）
  + 快达物流（快达，kuaidawuliu）
  + 佳吉快递（佳吉，jiajikuaidi）
  + ADP国际快递（ADP，adp）
  + 颿达国际快递（颿达，fardarww）
  + 颿达国际快递-英文（颿达国际，fandaguoji）
  + 林道国际快递（林道，shlindao）
  + 中外运速递-中文（中外运，sinoex）
  + 中外运速递（中外运速递，zhongwaiyun）
  + 深圳德创物流（深圳德创，dechuangwuliu）
  + 林道国际快递-英文（林道国际快递-英文，ldxpres）
  + 瑞典（Sweden Post）（瑞典邮政，ruidianyouzheng）
  + PostNord(Posten AB)（Posten AB，postenab）
  + 偌亚奥国际快递（偌亚奥，nuoyaao）
  + 城际速递（城际，chengjisudi）
  + 祥龙运通物流（祥龙运通，xianglongyuntong）
  + 品速心达快递（品速心达，pinsuxinda）
  + 宇鑫物流（宇鑫，yuxinwuliu）
  + 陪行物流（陪行物流，peixingwuliu）
  + 户通物流（户通物流，hutongwuliu）
  + 西安城联速递（西安城联速递，xianchengliansudi）
  + 煜嘉物流（煜嘉物流，yujiawuliu）
  + 一柒国际物流（一柒国际物流，yiqiguojiwuliu）
  + Fedex-国际件-中文（Fedex-国际件-中文，fedexcn）
  + 联邦快递-英文（联邦，lianbangkuaidien）
  + 中通（带电话）（中通（带电话），zhongtongphone）
  + 赛澳递for买卖宝（赛澳递for买卖宝，saiaodimmb）
  + 上海无疆for买卖宝（上海无疆for买卖宝，shanghaiwujiangmmb）
  + 新加坡小包(Singapore Post)（新加坡邮政，singpost）
  + 音素快运（音素快运，yinsu）
  + 南方传媒物流（南方传媒物流，ndwl）
  + 速呈宅配（速呈宅配，sucheng）
  + 创一快递（创一快递，chuangyi）
  + 云南滇驿物流（云南滇驿物流，dianyi）
  + 重庆星程快递（重庆星程快递，cqxingcheng）
  + 四川星程快递（四川星程快递，scxingcheng）
  + 贵州星程快递（贵州星程快递，gzxingcheng）
  + 运通中港快递(作废)（运通中港快递，ytkd）
  + Gati-英文（gati官网英文通道，gatien）
  + Gati-中文（gati官网中文通道，gaticn）
  + jcex（jcex官网通道，jcex）
  + 派尔快递（派尔快递官网通道，peex）
  + 凯信达（凯信达官网通道，kxda）
  + 安达信（安达信官网通道，advancing）
  + 汇文（汇文官网通道，huiwen）
  + 亿翔（亿翔官网通道，yxexpress）
  + 东红物流（东红合作通道，donghong）
  + 飞远配送（飞远配送，feiyuanvipshop）
  + 好运来（好运来，hlyex）
  + Toll（Toll Global Express，dpexen）
  + 增益速递（增益速递，zengyisudi）
  + 四川快优达速递（四川快优达速递，kuaiyouda）
  + 日昱物流（日昱物流，riyuwuliu）
  + 速通物流（速通物流，sutongwuliu）
  + 晟邦物流（晟邦物流，nanjingshengbang）
  + 爱尔兰(An Post)（爱尔兰邮政，anposten）
  + 日本（Japan Post）（日本邮政JapanPost，japanposten）
  + 丹麦(Post Denmark)（丹麦邮政，postdanmarken）
  + 巴西(Brazil Post/Correios)（巴西邮政Brazil Post，brazilposten）
  + 荷兰挂号信(PostNL international registered mail)（荷兰邮政，postnlcn）
  + 荷兰挂号信(PostNL international registered mail)（荷兰邮政，postnl）
  + 乌克兰EMS-中文(EMS Ukraine)（乌克兰EMS，emsukrainecn）
  + 乌克兰EMS(EMS Ukraine)（EMS Ukraine，emsukraine）
  + 乌克兰邮政包裹（乌克兰邮政包裹，ukrpostcn）
  + 乌克兰小包、大包(UkrPost)（UkrPost，ukrpost）
  + 海红for买卖宝（海红for买卖宝，haihongmmb）
  + FedEx-英国件（FedEx UK)（FedEx UK，fedexuk）
  + FedEx-英国件（FedEx-英国件，fedexukcn）
  + 叮咚快递（叮咚快递，dingdong）
  + DPD（DPD，dpd）
  + UPS Freight（UPS Freight，upsfreight）
  + ABF（ABF，abf）
  + Purolator（Purolator，purolator）
  + 比利时（Bpost）（Bpost，bpost）
  + 比利时国际(Bpost international)（bpostint，bpostinter）
  + LaserShip（LaserShip，lasership）
  + 英国大包、EMS（Parcel Force）（Parcel Force，parcelforce）
  + 英国邮政大包EMS（英国邮政大包EMS，parcelforcecn）
  + YODEL（YODEL，yodel）
  + DHL-荷兰（DHL Netherlands）（DHL Netherlands，dhlnetherlands）
  + MyHermes（MyHermes，myhermes）
  + DPD Germany（DPD Germany，dpdgermany）
  + Fastway Ireland（Fastway Ireland，fastway）
  + 法国大包、EMS-法文（Chronopost France）（Chronopost France，chronopostfra）
  + Selektvracht（Selektvracht，selektvracht）
  + 蓝弧快递（蓝弧快递，lanhukuaidi）
  + 比利时(Belgium Post)（Belgium Post，belgiumpost）
  + UPS Mail Innovations（UPS Mail Innovations，upsmailinno）
  + 挪威（Posten Norge）（Posten Norge，postennorge）
  + 瑞士邮政（瑞士邮政，swisspostcn）
  + 瑞士(Swiss Post)（Swiss Post，swisspost）
  + 英国邮政小包（英国邮政小包，royalmailcn）
  + 英国小包（Royal Mail）（Royal Mail，royalmail）
  + DHL Benelux（DHL Benelux，dhlbenelux）
  + Nova Poshta（Nova Poshta，novaposhta）
  + DHL-波兰（DHL Poland）（DHL Poland，dhlpoland）
  + Estes（Estes，estes）
  + TNT UK（TNT UK，tntuk）
  + Deltec Courier（Deltec Courier，deltec）
  + OPEK（OPEK，opek）
  + DPD Poland（DPD Poland，dpdpoland）
  + Italy SDA（Italy SDA，italysad）
  + MRW（MRW，mrw）
  + Chronopost Portugal（Chronopost Portugal，chronopostport）
  + 西班牙(Correos de Espa?a)（Correos de Espa?a，correosdees）
  + Direct Link（Direct Link，directlink）
  + ELTA Hellenic Post（ELTA Hellenic Post，eltahell）
  + 捷克（?eská po?ta）（ceskaposta，ceskaposta）
  + Siodemka（Siodemka，siodemka）
  + International Seur（International Seur，seur）
  + 久易快递（久易快递，jiuyicn）
  + 克罗地亚（Hrvatska Posta）（Hrvatska Posta，hrvatska）
  + 保加利亚（Bulgarian Posts）（Bulgarian Posts，bulgarian）
  + Portugal Seur（Portugal Seur，portugalseur）
  + EC-Firstclass（EC-Firstclass，ecfirstclass）
  + DTDC India（DTDC India，dtdcindia）
  + Safexpress（Safexpress，safexpress）
  + 韩国（Korea Post）（Korea Post，koreapost）
  + TNT Australia（TNT Australia，tntau）
  + 泰国（Thailand Thai Post）（Thailand Thai Post，thailand）
  + SkyNet Malaysia（SkyNet Malaysia，skynetmalaysia）
  + 马来西亚小包（Malaysia Post(Registered)）（Malaysia Post(Registered)，malaysiapost）
  + 马来西亚大包、EMS（Malaysia Post(parcel,EMS)）（Malaysia Post (parcel,EMS)，malaysiaems）
  + 京东（京东，jd）
  + 沙特阿拉伯(Saudi Post)（Saudi Post，saudipost）
  + 南非（South African Post Office）（South African Post Office，southafrican）
  + OCA Argentina（OCA Argentina，ocaargen）
  + 尼日利亚(Nigerian Postal)（Nigerian Postal，nigerianpost）
  + 智利(Correos Chile)（Correos Chile，chile）
  + 以色列(Israel Post)（Israel Post，israelpost）
  + Toll Priority(Toll Online)（Toll Priority，tollpriority）
  + Estafeta（Estafeta，estafeta）
  + 港快速递（港快速递，gdkd）
  + 墨西哥（Correos de Mexico）（Correos de Mexico，mexico）
  + 罗马尼亚（Posta Romanian）（Posta Romanian，romanian）
  + TNT Italy（TNT Italy，tntitaly）
  + Mexico Multipack（Mexico Multipack，multipack）
  + 葡萄牙（Portugal CTT）（Portugal CTT，portugalctt）
  + Interlink Express（Interlink Express，interlink）
  + DPD UK（DPD UK，dpduk）
  + 华航快递（华航快递，hzpl）
  + Gati-KWE（Gati-KWE，gatikwe）
  + Red Express（Red Express，redexpress）
  + Mexico Senda Express（Mexico Senda Express，mexicodenda）
  + TCI XPS（TCI XPS，tcixps）
  + 高铁速递（高铁速递，hre）
  + 新加坡EMS、大包(Singapore Speedpost)（Singapore Speedpost，speedpost）
  + EMS-国际件-英文（EMS-国际件-英文，emsinten）
  + Asendia USA（Asendia USA，asendiausa）
  + 法国大包、EMS-英文(Chronopost France)（Chronopost France，chronopostfren）
  + 意大利(Poste Italiane)（Poste Italiane Paccocelere，italiane）
  + 冠达快递（冠达快递，gda）
  + 出口易（出口易，chukou1）
  + 黄马甲（黄马甲，huangmajia）
  + 新干线快递（新干线快递，anlexpress）
  + 飞洋快递（飞洋快递，shipgce）
  + 贝海国际速递（贝海国际速递，xlobo）
  + 阿联酋(Emirates Post)（阿联酋邮政，emirates）
  + 新顺丰（NSF）（新顺丰（NSF），nsf）
  + 巴基斯坦(Pakistan Post)（巴基斯坦邮政，pakistan）
  + 世运快递（世运快递，shiyunkuaidi）
  + 合众速递(UCS）（合众速递(UCS），ucs）
  + 阿富汗(Afghan Post)（阿富汗邮政，afghan）
  + 白俄罗斯(Belpochta)（白俄罗斯，belpost）
  + 全通快运（全通快运，quantwl）
  + 宅急便（宅急便，zhaijibian）
  + EFS Post（efs，efs）
  + TNT Post（tntpostcn，tntpostcn）
  + 英脉物流（英脉物流，gml）
  + 广通速递（广通速递，gtongsudi）
  + 东瀚物流（东瀚物流，donghanwl）
  + rpx（rpx，rpx）
  + 日日顺物流（日日顺物流，rrs）
  + 黑猫雅玛多（黑猫雅玛多，yamato）
  + 华通快运（华通快运，htongexpress）
  + 吉尔吉斯斯坦(Kyrgyz Post)（kyrgyzpost，kyrgyzpost）
  + 拉脱维亚(Latvijas Pasts)（拉脱维亚，latvia）
  + 黎巴嫩(Liban Post)（黎巴嫩，libanpost）
  + 立陶宛（Lietuvos pa?tas）（立陶宛，lithuania）
  + 马尔代夫(Maldives Post)（马尔代夫，maldives）
  + 马耳他（Malta Post）（马耳他，malta）
  + 马其顿(Macedonian Post)（马其顿，macedonia）
  + 新西兰（New Zealand Post）（New Zealand Post，newzealand）
  + 摩尔多瓦(Posta Moldovei)（摩尔多瓦，moldova）
  + 孟加拉国(EMS)（孟加拉国(EMS)，bangladesh）
  + 塞尔维亚(PE Post of Serbia)（塞尔维亚，serbia）
  + 塞浦路斯(Cyprus Post)（塞浦路斯，cypruspost）
  + 突尼斯EMS(Rapid-Poste)（突尼斯，tunisia）
  + 乌兹别克斯坦(Post of Uzbekistan)（乌兹别克斯坦，uzbekistan）
  + 新喀里多尼亚[法国](New Caledonia)（新喀里多尼亚[法国]，caledonia）
  + 叙利亚(Syrian Post)（叙利亚，republic）
  + 亚美尼亚(Haypost-Armenian Postal)（亚美尼亚，haypost）
  + 也门(Yemen Post)（也门，yemen）
  + 印度(India Post)（印度，india）
  + 英国(大包,EMS)（英国(大包,EMS)，england）
  + 约旦(Jordan Post)（约旦，jordan）
  + 越南小包(Vietnam Posts)（越南，vietnam）
  + 黑山(Po?ta Crne Gore)（黑山，montenegro）
  + 哥斯达黎加(Correos de Costa Rica)（哥斯达黎加，correos）
  + 西安喜来快递（西安喜来快递，xilaikd）
  + 格陵兰[丹麦]（TELE Greenland A/S）（格陵兰[丹麦]，greenland）
  + 菲律宾（Philippine Postal）（菲律宾，phlpost）
  + 厄瓜多尔(Correos del Ecuador)（厄瓜多尔，ecuador）
  + 冰岛(Iceland Post)（冰岛，iceland）
  + 波兰小包(Poczta Polska)（波兰，emonitoring）
  + 阿尔巴尼亚(Posta shqipatre)（阿尔巴尼亚，albania）
  + 阿鲁巴[荷兰]（Post Aruba）（阿鲁巴[荷兰]，aruba）
  + 埃及（Egypt Post）（埃及，egypt）
  + 爱尔兰(An Post)（爱尔兰，ireland）
  + 爱沙尼亚(Eesti Post)（爱沙尼亚，omniva）
  + 云豹国际货运（云豹国际货运，leopard）
  + 中外运空运（中外运空运，sinoairinex）
  + 上海昊宏国际货物（上海昊宏国际货物，hyk）
  + 城晓国际快递（城晓国际快递，ckeex）
  + 匈牙利（Magyar Posta）（匈牙利，hungary）
  + 澳门(Macau Post)（澳门，macao）
  + 台湾（中华邮政）（台湾，postserv）
  + 北京EMS（北京EMS，bjemstckj）
  + 快淘快递（快淘快递，kuaitao）
  + 秘鲁(SERPOST)（秘鲁，peru）
  + 印度尼西亚EMS(Pos Indonesia-EMS)（印度尼西亚EMS，indonesia）
  + 哈萨克斯坦(Kazpost)（哈萨克斯坦，kazpost）
  + 立白宝凯物流（立白宝凯物流，lbbk）
  + 百千诚物流（百千诚物流，bqcwl）
  + 皇家物流（皇家物流，pfcexpress）
  + 法国(La Poste)（法国(小包)，csuivi）
  + 奥地利(Austrian Post)（奥地利，austria）
  + 乌克兰小包、大包(UkrPoshta)（乌克兰(小包,大包)，ukraine）
  + 乌干达(Posta Uganda)（乌干达，uganda）
  + 阿塞拜疆EMS(EMS AzerExpressPost)（阿塞拜疆，azerbaijan）
  + 芬兰(Itella Posti Oy)（芬兰，finland）
  + 斯洛伐克(Slovenská Posta)（斯洛伐克，slovak）
  + 埃塞俄比亚(Ethiopian postal)（埃塞俄比亚，ethiopia）
  + 卢森堡(Luxembourg Post)（卢森堡，luxembourg）
  + 毛里求斯(Mauritius Post)（毛里求斯，mauritius）
  + 文莱(Brunei Postal)（文莱，brunei）
  + Quantium（Quantium，quantium）
  + 坦桑尼亚(Tanzania Posts)（坦桑尼亚，tanzania）
  + 阿曼(Oman Post)（阿曼，oman）
  + 直布罗陀[英国]( Royal Gibraltar Post)（直布罗陀[英国]，gibraltar）
  + 博源恒通（博源恒通，byht）
  + 越南EMS(VNPost Express)（越南EMS，vnpost）
  + 安迅物流（安迅物流，anxl）
  + 达方物流（达方物流，dfpost）
  + 兰州伙伴物流（兰州伙伴物流，huoban）
  + 天纵物流（天纵物流，tianzong）
  + 波黑(JP BH Posta)（波黑，bohei）
  + 玻利维亚（玻利维亚，bolivia）
  + 柬埔寨(Cambodia Post)（柬埔寨，cambodia）
  + 巴林(Bahrain Post)（巴林，bahrain）
  + 纳米比亚(NamPost)（纳米比亚，namibia）
  + 卢旺达(Rwanda i-posita)（卢旺达，rwanda）
  + 莱索托(Lesotho Post)（莱索托，lesotho）
  + 肯尼亚(POSTA KENYA)（肯尼亚，kenya）
  + 喀麦隆(CAMPOST)（喀麦隆，cameroon）
  + 伯利兹(Belize Postal)（伯利兹，belize）
  + 巴拉圭(Correo Paraguayo)（巴拉圭，paraguay）
  + 十方通物流（十方通物流，sfift）
  + 飞鹰物流（飞鹰物流，hnfy）
  + UPS i-parcle（UPS i-parcle，iparcel）
  + 鑫锐达（鑫锐达，bjxsrd）
  + 麦力快递（麦力快递，mailikuaidi）
  + 瑞丰速递（瑞丰速递，rfsd）
  + 美联快递（美联快递，letseml）
  + CNPEX中邮快递（CNPEX中邮快递，cnpex）
  + 鑫世锐达（鑫世锐达，xsrd）
  + 同舟行物流（同舟行物流，chinatzx）
  + 秦邦快运（秦邦快运，qbexpress）
  + 大达物流（大达物流，idada）
  + skynet（skynet，skynet）
  + 红马速递（红马速递，nedahm）
  + 云南中诚（云南中诚，czwlyn）
  + 万博快递（万博快递，wanboex）
  + 腾达速递（腾达速递，nntengda）
  + 郑州速捷（郑州速捷，sujievip）
  + UBI Australia（UBI Australia，gotoubi）
  + ECMS Express（ecmsglobal，ecmsglobal）
  + 速派快递(FastGo)（FastGo，fastgo）
  + 易客满（易客满，ecmscn）
  + 俄顺达（俄顺达，eshunda）
  + 广东速腾物流（广东速腾物流，suteng）
  + 新鹏快递（新鹏快递，gdxp）
  + 美国韵达（美国韵达，yundaexus）
  + Toll（Toll，toll）
  + 深圳DPEX（Toll，szdpex）
  + 百世物流（百世物流，baishiwuliu）
  + 荷兰包裹(PostNL International Parcels)（荷兰包裹，postnlpacle）
  + 乐天速递（乐天速递，ltexp）
  + 智通物流（智通物流，ztong）
  + 鑫通宝物流（鑫通宝物流，xtb）
  + airpak expresss（airpak expresss，airpak）
  + 荷兰邮政-中国件（荷兰邮政-中国件，postnlchina）
  + 法国小包（colissimo）（colissimo，colissimo）
  + PCA Express（PCA Express，pcaexpress）
  + 韩润（韩润，hanrun）
  + TNT（TNT，tnt）
  + 中远e环球（中远e环球，cosco）
  + 顺达快递（顺达快递，sundarexpress）
  + 捷记方舟（捷记方舟，ajexpress）
  + 方舟速递（方舟速递，arkexpress）
  + 明大快递（明大快递，adaexpress）
  + 长江国际速递（长江国际速递，changjiang）
  + 八达通（八达通，bdatong）
  + 美国申通（美国申通，stoexpress）
  + 泛捷国际速递（泛捷国际速递，epanex）
  + 顺捷丰达（顺捷丰达，shunjiefengda）
  + 华赫物流（华赫物流，nmhuahe）
  + 德国(Deutsche Post)（德国(Deutsche Post)，deutschepost）
  + 百腾物流（百腾物流，baitengwuliu）
  + 品骏快递（品骏快递，pjbest）
  + 全速通（全速通，quansutong）
  + 中技物流（中技物流，zhongjiwuliu）
  + 九曳供应链（九曳供应链，jiuyescm）
  + 天翼快递（天翼快递，tykd）
  + 德意思（德意思，dabei）
  + 城际快递（城际快递，chengji）
  + 程光快递（程光快递，chengguangkuaidi）
  + 佐川急便（佐川急便，sagawa）
  + 蓝天快递（蓝天快递，lantiankuaidi）
  + 永昌物流（永昌物流，yongchangwuliu）
  + 笨鸟海淘（笨鸟海淘，birdex）
  + 一正达速运（一正达速运，yizhengdasuyun）
