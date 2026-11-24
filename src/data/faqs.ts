// src/data/faqs.ts
// 2026 最新常见问题解答 (FAQ) 深度权威知识库 - 77篇全量专业解答

export interface FaqItem {
  id: string;
  slug: string;
  question: string;
  shortAnswer: string;
  category: string;
  categorySlug: string;
  tags: string[];
  updatedAt: string;
  views?: string;
  detail: {
    overview: string;
    sections: {
      title: string;
      content: string;
      listItems?: string[];
    }[];
    faqs?: {
      q: string;
      a: string;
    }[];
    summaryTips?: string;
  };
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    "id": "what-is-iplc-iepl",
    "slug": "what-is-iplc-iepl",
    "question": "什么是专线（IPLC / IEPL）机场？相比普通中转好在哪里？",
    "shortAnswer": "IPLC/IEPL 是不经过 GFW 防火墙的端到端内网物理光纤专线，晚高峰不卡顿、超低延迟、零丢包，是外贸高刚需和流媒体追剧的首选。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "IPLC专线",
      "IEPL专线",
      "晚高峰不降速",
      "专线原理"
    ],
    "updatedAt": "2026年最新",
    "views": "16,840",
    "detail": {
      "overview": "IPLC（International Private Leased Circuit）与 IEPL 属于纯内网点对点物理光缆专线。国内机房与境外机房之间是内网私有通信，全程不经过公网国际出口，因此彻底绕开了 GFW 防火墙的深度包检测（DPI）。",
      "sections": [
        {
          "title": "一、专线物理网络架构解析：它是如何实现不走公网的？",
          "content": "普通直连或普通公网中转梯子在出境时，数据必须流经国家的公网国际出口路由器（即 GFW 防火墙）。晚高峰（20:00-23:00）公网带宽拥挤，且 GFW 对未识别流量进行随机限速与丢包审查。<br><br>而 IPLC/IEPL 专线是运营商在物理层面铺设的内网光缆（如深港专线、沪日专线）。数据从入口机房打上内网标签，如同封闭的“地下高铁隧道”直达境外机房，不走公网出口，具有极高可靠性。"
        },
        {
          "title": "二、专线机场 vs 普通公网中转 vs 直连梯子 核心指标对比",
          "content": "三种主流网络架构的性能差异对照：",
          "listItems": [
            "<strong>IPLC/IEPL 顶级专线</strong>：延迟 15ms~45ms（以深港为例），晚高峰丢包率 < 0.1%，敏感时期 100% 畅通无阻，成本较高。",
            "<strong>普通公网中转（BGP/中继）</strong>：延迟 40ms~90ms，晚高峰丢包率 2%~8%，平稳期表现尚可，但在敏感时期入口服务器易遭封锁。",
            "<strong>直连节点（普通VPS自建）</strong>：延迟 > 150ms，晚高峰丢包率经常高达 30% 以上，极易被阻断封锁，维护成本高。"
          ]
        },
        {
          "title": "三、哪些人群必须优先考虑选择专线机场？",
          "content": "如果您的使用场景包含以下任意一项，专线是唯一能提供高满意度体验的方案：",
          "listItems": [
            "<strong>跨国视频会议与远程办公</strong>：Zoom、Teams、Google Meet 实时会议对丢包极其敏感，专线可保证音视频无杂音、不掉线。",
            "<strong>4K / 8K 高码率流媒体追剧</strong>：YouTube 4K、Netflix 4K、Disney+ 秒开不缓冲，拖动进度条无需等待。",
            "<strong>跨境电商与外贸运营</strong>：TikTok 直播带货、亚马逊后台高频管理、Shopify 运营，绝不能承受突发断网。",
            "<strong>外服游戏联机加速</strong>：Steam、PlayStation、Nintendo Switch 外服联机对战，专线提供媲美游戏加速器的超低 Ping 值。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "IPLC 和 IEPL 到底有什么细微区别？",
          "a": "对于终端用户而言，两者体验几乎完全一致。技术上 IPLC 基于时分复用（TDM），IEPL 基于以太网协议。IEPL 扩容带宽更灵活，均为顶级物理专线级别。"
        }
      ],
      "summaryTips": "工作外贸与追剧刚需用户，强烈推荐将 IPLC/IEPL 专线机场作为主力使用，彻底告别敏感时期断网焦虑。"
    }
  },
  {
    "id": "monthly-vs-yearly",
    "slug": "monthly-vs-yearly",
    "question": "新用户应该选择「月付」还是「年付」套餐？有跑路风险吗？",
    "shortAnswer": "新接触任何机场时，强烈建议先买月付测试晚高峰满意度；老牌稳定机场在确认满意后可升级年付享受折扣（通常有7~8折特惠）。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "月付套餐",
      "年付优惠",
      "避坑指南",
      "跑路风险"
    ],
    "updatedAt": "2026年最新",
    "views": "14,200",
    "detail": {
      "overview": "机场稳定性不仅取决于服务商线路，还与用户本地宽带（电信、联通、移动）与入口机房的互联路由密切相关。因此选购遵循“小步快跑、先试后买”是最理智的避坑法则。",
      "sections": [
        {
          "title": "一、月付与年付的优劣势全方位拆解",
          "content": "<strong>月付优势</strong>：资金占用极少（通常只需 ¥15~¥25），试错成本几乎为零。一旦发现该机场在自己家中的移动宽带下延迟偏高，可以次月随时更换，完全不受约束。<br><br><strong>年付优势</strong>：绝大多数机场对年付用户提供慷慨优惠，通常相当于 8 折甚至 7 折，且年付套餐往往赠送更大的月度流量池或更高优先级的 VIP 专线节点。<br><br><strong>年付风险</strong>：如果遇到小作坊不良商家跑路或线路质量中途劣化，剩余月份的资金无法追回。"
        },
        {
          "title": "二、科学选购的“三步递进法则”",
          "content": "建议每位用户在选购新机场时按照以下三步执行：",
          "listItems": [
            "<strong>第一步：购入试用月付包</strong>：花费十几元购买一个月体验包，重点在晚上 20:00~23:00 测试 YouTube 4K、网页打开速度与丢包情况。",
            "<strong>第二步：全场景多终端测试</strong>：在自己的手机 5G、公司 WiFi、家里宽带分别测试，确认各环境下均能秒连。",
            "<strong>第三步：评估转为季度付或年付</strong>：确认连续两到三周网络质量稳定、客服工单响应及时后，再在逢年过节或促销期升级为长周期套餐。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "如果买了年付套餐，中途不想用了可以退款吗？",
          "a": "绝大多数机场服务商由于数字产品的特殊性，在服务开通且产生流量消耗后均不支持无理由退款。因此更显现出先月付测试的重要性。"
        }
      ],
      "summaryTips": "新机场一律先买月付！确认晚高峰稳定且服务良好后，再根据预算选择季度付或年付以获取最大性价比折扣。"
    }
  },
  {
    "id": "pay-as-you-go",
    "slug": "pay-as-you-go",
    "question": "按量计费（不限时流量包）适合什么样的人群？",
    "shortAnswer": "按量计费包购买后流量永久有效、不设月度清零，最适合轻度用户、偶尔出差查阅资料、以及为主力梯子配备应急后备的用户。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "按量计费",
      "不限时流量",
      "备用机场",
      "永久不过期"
    ],
    "updatedAt": "2026年最新",
    "views": "11,540",
    "detail": {
      "overview": "传统的周期订阅套餐（月付/年付）通常要求在 30 天内使用完毕，月底剩余流量自动清零。而「按量计费（不限时买断包）」通常是一次性付费购买固定额度（如 100GB、300GB、500GB），只要账号未注销，流量永久有效，用完为止。",
      "sections": [
        {
          "title": "一、按量计费套餐的核心特点",
          "content": "按量计费最大的魅力在于“零时间焦虑”。你不用为了赶在月底把流量用完而刻意挂机，也不用担心这个月出差回国没用梯子而白白浪费了月费。对于轻度使用场景，100GB 流量足以支持日常查阅维基百科、学术文献和海外收发邮件长达一至两年。"
        },
        {
          "title": "二、按量包的最佳实践：构建永不断网的“双轨制”",
          "content": "资深网络玩家普遍采用“周期主力 + 按量备用”的黄金组合：<br>1. 购买一个性价比高的专线月付/年付套餐作为主力，日常追剧、AI 对话和视频通话全走它；<br>2. 在 Clash 中同时导入一个按量付费备用机场的订阅；<br>3. 一旦主力机场遭遇突发网络抖动或节点维护，在客户端中只需一秒切换至备用按量节点，即可保证业务完全不中断。"
        }
      ],
      "faqs": [
        {
          "q": "按量计费节点的节点质量和速度会比月付差吗？",
          "a": "不会。正规机场的按量套餐与订阅套餐使用的通常是完全相同的 IPLC/IEPL 专线服务器与出口节点，测速和解锁能力完全一致。"
        }
      ],
      "summaryTips": "不常翻墙但关键时刻又必须能连上的朋友，按量计费是性价比最高的选择；对于重度用户，它也是成本极低的完美备胎。"
    }
  },
  {
    "id": "node-multiplier",
    "slug": "node-multiplier",
    "question": "节点倍率（如 0.2x、1.0x、3.0x）是什么意思？如何避免流量快速耗尽？",
    "shortAnswer": "倍率是消耗流量的计算系数。用 1GB 流量，在 0.2x 节点仅扣 200MB，而在 3.0x 节点会扣除 3GB。看高码率视频时务必选 1.0x 节点以防流量偷跑。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "节点倍率",
      "流量扣除",
      "避坑常识",
      "4K省流"
    ],
    "updatedAt": "2026年最新",
    "views": "10,600",
    "detail": {
      "overview": "节点倍率是机场服务商根据不同机房线路的实际租用成本所设定的流量计费乘数。其实际扣除流量的数学公式为：实际扣费流量 = 实际产生网络传输量 × 节点倍率。",
      "sections": [
        {
          "title": "一、常见倍率节点分类与应用场景规划",
          "content": "合理搭配不同倍率的节点，可以让你的套餐流量使用效率提升数倍：",
          "listItems": [
            "<strong>0.1x ~ 0.5x 低倍率节点</strong>：通常为普通公网大带宽中转。非常适合 Steam/Epic 游戏大文件更新、GitHub 代码克隆、网盘备份下载等吞吐量极大但对微小延迟不敏感的场景。",
            "<strong>1.0x 标准倍率节点</strong>：绝大多数专线机场的主力配置。适合全天候日常网页浏览、刷推特、看 YouTube 4K、观看 Netflix 等。",
            "<strong>2.0x ~ 5.0x 超高倍率专线节点</strong>：通常为昂贵的顶级物理专线（如沪日/深港企业级低延时链路）。专为外服即时对战竞技网游、外汇高频交易等对延迟要求苛刻的场景设立。"
          ]
        },
        {
          "title": "二、为什么看了一部电影流量扣了 50G？如何排查？",
          "content": "很多用户反馈“我才看了两小时 YouTube，怎么 50GB 流量就见底了？”90% 的原因是不小心勾选了列表里的 3x 或 5x 高倍率节点！在观看 4K 高画质视频时，两小时视频本身会产生约 15GB 数据流量，若乘上 3.5 倍率，就会直接扣掉 50GB 以上。请务必检查 Clash 当前选中节点的倍率标签。"
        }
      ],
      "faqs": [
        {
          "q": "低倍率节点会不会网速很慢？",
          "a": "不一定。许多低倍率节点带宽上限很高（如 1Gbps~2.5Gbps），用来下载大文件速度飞快，只是在晚高峰时期其抗丢包能力可能稍逊于 1.0x 物理专线。"
        }
      ],
      "summaryTips": "日常看剧工作推荐锁定 1.0x 标准节点；下载大文件优先切换 0.2x 羊毛省流节点；切勿在不知情时长时间挂载高倍率专线！"
    }
  },
  {
    "id": "bgp-relay-vs-direct",
    "slug": "bgp-relay-vs-direct",
    "question": "BGP 中继（隧道中转）和直连节点有什么区别？入口机房为什么重要？",
    "shortAnswer": "BGP中继通过国内优质多线机房汇聚流量再中转出境，解决本地电信/联通/移动跨网互联差与高丢包；直连节点由本地直连海外，晚高峰极易断流。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "BGP中继",
      "隧道中转",
      "入口机房",
      "直连对比"
    ],
    "updatedAt": "2026年最新",
    "views": "8,760",
    "detail": {
      "overview": "很多人不理解为什么翻墙还需要“国内入口服务器”。中国三大运营商（电信 163、联通 169、移动 CMI）的国际出口路由各不相同，且晚高峰公网极易拥塞。BGP 优质多线入口是平价中转机场保证稳定性的命脉。",
      "sections": [
        {
          "title": "一、BGP 隧道中转的运行机制",
          "content": "当你连接一个香港节点时，数据并不是从你家电脑直接飞去香港，而是先发送到机场部署在广州、上海或徐州的 BGP 多线高防机房。BGP 入口机房同时接入了电信、联通、移动光纤，保证三大运营商用户进入机房的延迟都在 10ms~25ms 以内，然后再经由加密隧道中转出境。"
        },
        {
          "title": "二、为什么北方移动用户连直连节点经常全红？",
          "content": "中国移动在北方部分省份的公网国际出口路由极其恶劣，直连欧美或香港 VPS 丢包率常年高达 40% 以上。而接入了国内 BGP 优质中继的机场，能将流量先在国内引流至广州或上海骨干网，从而彻底解决移动宽带用户的断流难题。"
        }
      ],
      "faqs": [
        {
          "q": "BGP 隧道和 IPLC 专线是一回事吗？",
          "a": "不是。BGP 隧道通常指出境部分仍走公网加密隧道或中继专线；而纯 IPLC 专线是全程不过 GFW 的物理光缆内网，等级与成本更高。"
        }
      ],
      "summaryTips": "挑选机场不仅要看出境带宽，更要看其国内入口是否拥有高质量 BGP 三网优化机房！"
    }
  },
  {
    "id": "how-to-spot-scam-airports",
    "slug": "how-to-spot-scam-airports",
    "question": "如何鉴别“跑路云”与劣质机场？选购时应看重哪些资质与特征？",
    "shortAnswer": "警惕反常的超低价“终身买断”（如¥39永久包）、TG群全员禁言、无售后工单系统、开业不足半年的小作坊；认准运营2年以上的老牌品牌。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "跑路云",
      "鉴别技巧",
      "避坑指南",
      "老牌机场"
    ],
    "updatedAt": "2026年最新",
    "views": "15,400",
    "detail": {
      "overview": "随着建站面板门槛降低，许多投机者花费几百元租用廉价单线 VPS 搭建“跑路云”，通过在论坛和贴吧打广告狂揽一波年费后人间蒸发。学会看穿黑心商家的伎俩能保住你的钱包和网络安全。",
      "sections": [
        {
          "title": "一、黑心“跑路云”最典型的 4 个行骗套路",
          "content": "如果遇到以下特征，请 100% 绕道而行：",
          "listItems": [
            "<strong>超低价终身套餐</strong>：宣传“¥39 / ¥59 终身无限流量”，带宽和服务器每月都在产生真实租金，没有任何商业实体能做到终身免费提供，这纯属非法集资跑路盘；",
            "<strong>官方交流群永久禁言</strong>：只开单向广播频道，禁止用户发言交流，一旦线路大面积断线没人能反馈；",
            "<strong>开业时间极短但大肆做营销</strong>：域名注册时间不足 3 个月，在各群疯狂群发低价拉人；",
            "<strong>节点经常改名换姓</strong>：忽悠用户把节点名称改来改去，掩盖服务器频繁被封的事实。"
          ]
        },
        {
          "title": "二、优质老牌机场的 4 大健康体征",
          "content": "1. <strong>运营时间真实超过 2 年以上</strong>；<br>2. <strong>具备完善的自动化工单系统与技术客服</strong>；<br>3. <strong>线路架构清晰透明</strong>（明确标注 IPLC、IEPL 或 BGP 隧道）；<br>4. <strong>支持灵活的月付模式</strong>，不强迫捆绑长周期消费。"
        }
      ],
      "faqs": [
        {
          "q": "跑路前几天通常会有哪些信号？",
          "a": "节点大面积超时超一周不修复、突然开启全站 2~3 折骨折年付促销、管理人员长期离线不回工单。"
        }
      ],
      "summaryTips": "不贪小便宜就不会被割韭菜！首选运营时间长、口碑坚挺的老牌成熟服务商。"
    }
  },
  {
    "id": "airport-vs-self-built-vps",
    "slug": "airport-vs-self-built-vps",
    "question": "为什么现在普遍推荐买机场而不是自己租 VPS 搭梯子？",
    "shortAnswer": "自建VPS成本高（单台机月费至少$5）、单IP易遭GFW精准阻断且被封后换IP需收费；商业机场拥有全球数十个专线节点、多IP负载均衡与专人运维。",
    "category": "🛫 机场选购、专线原理与避坑",
    "categorySlug": "purchase",
    "tags": [
      "自建VPS",
      "买机场对比",
      "IP被封",
      "性价比"
    ],
    "updatedAt": "2026年最新",
    "views": "19,100",
    "detail": {
      "overview": "五六年前很多技术人员热衷于购买搬瓦工、Vultr 或 Linode 自建 Shadowsocks/V2Ray。但在 GFW 引入 AI 行为识别与全端口主动探测后，自建 VPS 的时代已经彻底终结。",
      "sections": [
        {
          "title": "一、自建 VPS 面临的 3 大致命痛点",
          "content": "<strong>1. 极高的被封锁成本</strong>：自建 VPS 只有一个公网 IP。一旦流量特征被 GFW 识别阻断，整台机器瞬间变砖，向机房申请更换一个干净 IP 往往需要支付 $3~$8 美元。<br><br><strong>2. 晚高峰网络劣化严重</strong>：普通便宜 VPS（如 $5/月的机房）使用的是普通国际公网链路，一到晚上 20:00 丢包率高达 30% 以上，看 1080P 视频都卡顿。<br><br><strong>3. 单一节点无容灾</strong>：自建节点只有一个地区。想看 Netflix 日本区得买日本机，想用 ChatGPT 得买美区机，多台机器开销月均上百元。"
        },
        {
          "title": "二、购买专业机场的压倒性优势",
          "content": "专业机场采购的是百兆、千兆级的骨干专线与 BGP 资源：",
          "listItems": [
            "<strong>节点遍布全球</strong>：花十几元月费即可同时获得香港、台湾、日本、新加坡、美国、英国等数十个甚至上百个节点；",
            "<strong>专线容灾不惧封锁</strong>：即使某台服务器维护，后端有自动化调度与多出口自动切换，用户端完全无感；",
            "<strong>原生 IP 解锁保障</strong>：机场会定期采购原生住宅 IP 维护流媒体和 AI 的解锁状态，省去个人折腾时间。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "自建梯子在安全性上会比买机场更高吗？",
          "a": "除非你自己编写加密协议并在境外有独立实体，否则自建 VPS 协议特征更单一、更容易被 GFW 盯上。对 99.9% 的普通用户而言，专业商业专线机场体验远胜自建。"
        }
      ],
      "summaryTips": "把专业的事情交给专业团队。花十几元钱买现成专线机场，省下的折腾时间远比自建踩坑划算得多。"
    }
  },
  {
    "id": "clash-subscription-import",
    "slug": "clash-subscription-import",
    "question": "购买机场后，如何把节点导入到客户端中？(支持一键导入与手动复制)",
    "shortAnswer": "最省心的方法是在机场仪表盘点击「一键导入 Clash」唤醒软件；若无法唤醒，点击「复制 Clash 订阅链接」在软件的配置页面粘贴下载即可。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "Clash导入",
      "一键订阅",
      "订阅链接",
      "配置教程"
    ],
    "updatedAt": "2026年最新",
    "views": "18,300",
    "detail": {
      "overview": "订阅链接（Subscription URL）是一个加密的数据接口，包含了该账号可用的所有节点名称、协议密码、加密方式与服务器出口参数。将此链接导入 Clash 客户端后，软件会自动解析生成本地节点配置文件。",
      "sections": [
        {
          "title": "一、一键自动唤醒导入（新手最推荐）",
          "content": "1. 确保电脑已安装好 Clash Verge Rev 或 Mihomo Party 并打开运行；<br>2. 登录机场后台，在用户仪表盘找到「便捷导入」或「一键订阅」；<br>3. 点击「一键导入 Clash」，浏览器会弹窗询问是否打开关联程序，点击“确定/允许”；<br>4. 客户端将自动唤起并在“订阅配置”中开始下载并保存节点列表。"
        },
        {
          "title": "二、手动复制链接导入（适用各类平台与防出错）",
          "content": "1. 在机场仪表盘点击「复制 Clash 订阅链接」；<br>2. 打开 Clash 客户端，进入左侧 <strong>「配置 (Profiles)」</strong> 页面；<br>3. 在顶部的 URL 栏内粘贴刚才复制的链接；<br>4. 点击右侧 <strong>「导入 (Import) / 保存」</strong>，等待进度条下载完毕；<br>5. 右键或点击该订阅卡片，选中其为当前激活使用的配置文件。"
        }
      ],
      "faqs": [
        {
          "q": "提示 Network Error 怎么办？",
          "a": "先排查本地宽带是否能打开机场官网；若打不开，可开启手机 5G 热点让电脑连接热点后重试下载。"
        }
      ],
      "summaryTips": "先开软件，后导链接！一键唤醒失败就手动粘贴复制，两步搞定节点同步。"
    }
  },
  {
    "id": "clash-core-verge-mihomo-difference",
    "slug": "clash-core-verge-mihomo-difference",
    "question": "Clash Verge、Mihomo Party、Clash for Windows 与 Clash Meta 有什么区别？",
    "shortAnswer": "原版 Clash for Windows 已停更弃用；当前 2026 年主流首选是基于开源 Meta 内核的【Clash Verge Rev】和界面现代化的【Mihomo Party】。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "ClashVerge",
      "MihomoParty",
      "CFW停更",
      "内核区别"
    ],
    "updatedAt": "2026年最新",
    "views": "22,400",
    "detail": {
      "overview": "很多刚入坑的新手会被网上五花八门的 Clash 名字搞得晕头转向。了解 Clash 的开源生态演变，能帮你快速选对现代、安全且无漏洞的客户端。",
      "sections": [
        {
          "title": "一、Clash 生态演化历史与现状",
          "content": "• <strong>Clash for Windows (CFW)</strong>：曾是装机量最大的客户端，因作者于 2023 年底删库已彻底停止维护，请勿在第三方网站下载带有木马的破解版 CFW；<br>• <strong>Clash Meta (现更名 Mihomo)</strong>：由全球开源社区接力维护的现代代理核心，全面支持 VLESS、Hysteria2、TUIC、SSH 等现代新协议与智能分流；<br>• <strong>Clash Verge Rev</strong>：基于 Tauri 框架打造的轻量级桌面客户端，内置最新的 Mihomo 内核，内存占用低（仅 50MB 左右），是 2026 年最推荐的 Windows/Mac 首选；<br>• <strong>Mihomo Party</strong>：采用全新 Electron 设计的现代化美观客户端，支持丰富的可视化节点测速与分流规则链管理。"
        },
        {
          "title": "二、不同平台推荐客户端一览表",
          "content": "为了不踩坑，请按照您的设备平台对号入座：",
          "listItems": [
            "<strong>Windows 电脑</strong>：强烈首选 <strong>Clash Verge Rev</strong> 或 <strong>Mihomo Party</strong>；",
            "<strong>macOS 苹果电脑</strong>：首选 <strong>Clash Verge Rev (支持 M 系列与 Intel)</strong>；",
            "<strong>Android 安卓手机</strong>：首选 <strong>Clash Meta for Android (CMFA)</strong> 或 <strong>Flclash</strong>；",
            "<strong>iOS 苹果手机</strong>：首选 <strong>Shadowrocket (小火箭)</strong>、<strong>Loon</strong> 或 <strong>Stash (Clash iOS版)</strong>。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "为什么老版 CFW 测速全是 Timeout？",
          "a": "老版 CFW 采用的内核过旧，不支持现在机场广泛采用的 VLESS 或新加密套件，强烈建议迁移至 Clash Verge Rev。"
        }
      ],
      "summaryTips": "果断告别老旧的 CFW！全面拥抱 Clash Verge Rev 与 Mihomo 现代内核，速度更快更安全。"
    }
  },
  {
    "id": "ios-shadowrocket-clash-guide",
    "slug": "ios-shadowrocket-clash-guide",
    "question": "苹果 iPhone / iPad (iOS) 用户没有小火箭（Shadowrocket）美区账号怎么办？",
    "shortAnswer": "iOS 用户需使用非国区（美区/港区）Apple ID 在 App Store 下载 Shadowrocket 或 Stash。可自行注册免费美区账号或使用机场提供的共享账号。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "Shadowrocket",
      "小火箭",
      "美区AppleID",
      "iOS客户端"
    ],
    "updatedAt": "2026年最新",
    "views": "25,100",
    "detail": {
      "overview": "受苹果 App Store 区域合规政策影响，所有科学上网客户端（Shadowrocket、Stash、Quantumult X、Loon）均无法在中国大陆区 App Store 上架。苹果用户必须登录海外 Apple ID 才能下载安装。",
      "sections": [
        {
          "title": "一、解决海外 Apple ID 的 3 种途径",
          "content": "<strong>途径 1：使用机场后台提供的免费共享美区 Apple ID（最省事）</strong>：<br>绝大多数优质机场（如隐形人、可信云等）都在用户后台的「下载客户端」页面免费为付费会员提供已购买小火箭的海外共享 Apple ID，直接按教程登录即可下载。<br><br><strong>途径 2：自己免费注册一个美区 Apple ID（最安全长久）</strong>：<br>在电脑浏览器打开 appleid.apple.com，国家选美国，支付方式选“None（无）”，地址使用美国免税州地址生成器填写，绑定自己的国内邮箱即可成功注册。<br><br><strong>途径 3：在各大电商平台购买独享美区已购账号</strong>：<br>花费约 ¥10~¥15 元购买一个带小火箭下载资格的独享海外 ID。"
        },
        {
          "title": "二、重要安全警告：千万不要在「设置」中登录共享 ID！",
          "content": "使用他人或机场提供的共享 Apple ID 时，<strong>切记只能在【App Store】内部登录</strong>！绝对不能在手机主页面的【设置 -> iCloud】中登录！否则一旦账号被锁，您的手机可能会被恶意锁定变成砖头！下载完成后请立即在 App Store 点击退出，切回自己的国内日常账号。"
        }
      ],
      "faqs": [
        {
          "q": "下载完小火箭后退出海外账号，软件还能继续用吗？",
          "a": "完全可以正常使用！软件已永久安装在你的手机上，除非你主动卸载，否则只要不升级版本即可永久正常运行。"
        }
      ],
      "summaryTips": "只在 App Store 登录海外 ID，下载完立即退出！安全第一，远离 iCloud 登录陷阱。"
    }
  },
  {
    "id": "android-clash-client-recommend",
    "slug": "android-clash-client-recommend",
    "question": "安卓手机有哪些好用的 Clash 客户端？后台总是被系统杀进程怎么办？",
    "shortAnswer": "推荐使用 Clash Meta for Android (CMFA) 或 Flclash；后台断流需在手机电池管理中将客户端设为“允许后台运行并无限制耗电”，开启自启动并在多任务栏加锁。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "安卓Clash",
      "CMFA",
      "后台杀进程",
      "防断连"
    ],
    "updatedAt": "2026年最新",
    "views": "12,700",
    "detail": {
      "overview": "国产安卓系统（如小米 HyperOS、华为 HarmonyOS、vivo OriginOS、OPPO ColorOS）为了省电，内置了极其严格的后台进程清理机制，导致 Clash 经常在灭屏或息屏 10 分钟后自动断网。",
      "sections": [
        {
          "title": "一、安卓平台客户端首选推荐",
          "content": "• <strong>Clash Meta for Android (CMFA)</strong>：功能最完备的安卓版，支持分应用代理、定时测速与深色模式；<br>• <strong>Flclash</strong>：基于 Flutter 开发的跨平台高颜值客户端，多端界面完全一致，操作直观。"
        },
        {
          "title": "二、彻底解决安卓后台杀进程断流的 4 步设置",
          "content": "1. <strong>设置电池无限制</strong>：长按 Clash 图标 -> 应用信息 -> 省电策略/电池优化 -> 改为“无限制 / 不受限制”；<br>2. <strong>开启自启动权限</strong>：在应用权限设置中，允许“自启动”和“关联启动”；<br>3. <strong>后台多任务卡片加锁</strong>：划出手机多任务后台界面，下拉 Clash 卡片，点击“小锁头”图标锁定进程；<br>4. <strong>开启常驻通知栏</strong>：在 Clash 设置中勾选“前台服务 (Foreground Service)”，保证系统状态栏常驻 VPN 钥匙图标。"
        }
      ],
      "faqs": [
        {
          "q": "为什么手机顶部没有 VPN 钥匙图标也能上网？",
          "a": "部分系统如果开启了特定无障碍代理模式可能隐藏图标，但只要 Clash 处于 Connected 状态，流量即走节点转发。"
        }
      ],
      "summaryTips": "安卓手机必做「加锁 + 无限制省电」，从此锁屏听歌推特推送秒达，彻底杜绝掉线。"
    }
  },
  {
    "id": "mac-clash-verge-permissions",
    "slug": "mac-clash-verge-permissions",
    "question": "Mac 苹果电脑安装 Clash 提示“无法打开，因为无法验证开发者”怎么办？",
    "shortAnswer": "在 Mac「系统设置 -> 隐私与安全性」页面底部点击「仍要打开」；或在终端执行 sudo xattr -rd com.apple.quarantine /Applications/Clash\\ Verge.app 绕过 Gatekeeper。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "Mac安装",
      "未验证开发者",
      "Gatekeeper",
      "ClashVergeMac"
    ],
    "updatedAt": "2026年最新",
    "views": "9,850",
    "detail": {
      "overview": "macOS 拥有严格的 Gatekeeper 安全隔离机制。由于许多开源科学上网软件由个人开发者自发编译，未向苹果官方缴纳高额年费购买公证签名证书，Mac 会默认拦截并弹窗警告。",
      "sections": [
        {
          "title": "一、图形化界面一键解除（最简单）",
          "content": "1. 双击打开安装的 Clash Verge，当系统弹出“无法打开”提示时，点击“取消”；<br>2. 打开 Mac 左上角的 <strong>苹果图标 -> 系统设置 (System Settings)</strong>；<br>3. 在左侧选择 <strong>「隐私与安全性 (Privacy & Security)」</strong>，向下滑动到“安全性”栏目；<br>4. 你会看到提示：“已阻止使用 Clash Verge，因为来自身份不明的开发者”，点击右侧的 <strong>「仍要打开 (Open Anyway)」</strong> 按钮；<br>5. 输入 Mac 开机密码即可永久正常使用。"
        },
        {
          "title": "二、终端命令终极解除法（彻底清除隔离属性）",
          "content": "若系统提示“App 已损坏，应该移到废纸篓”，打开终端（Terminal）粘贴以下命令并回车：<br><code>sudo xattr -rd com.apple.quarantine /Applications/Clash\\ Verge.app</code><br>输入开机密码回车确认，即可彻底移除苹果隔离属性。"
        }
      ],
      "faqs": [
        {
          "q": "Mac M1/M2/M3/M4 芯片选哪个安装包？",
          "a": "苹果 Apple Silicon 芯片（M系列）务必下载文件名带 `aarch64` 或 `arm64` 的 dmg 安装包，Intel 老款处理器请下载带 `x64` 的包。"
        }
      ],
      "summaryTips": "遇到 Mac 拦截勿恐慌，进入隐私安全性点击「仍要打开」，或一条终端命令轻松搞定。"
    }
  },
  {
    "id": "how-to-update-subscription",
    "slug": "how-to-update-subscription",
    "question": "为什么需要定期更新订阅？如何开启 Clash 定时自动拉取节点？",
    "shortAnswer": "机场会根据网络情况轮换出口IP、维护专线及新增节点；定期更新可获取最新可用线路。在配置页面右键订阅开启“定时更新”即可自动化运行。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "更新订阅",
      "自动更新",
      "节点失效",
      "订阅维护"
    ],
    "updatedAt": "2026年最新",
    "views": "8,320",
    "detail": {
      "overview": "很多用户初次导入订阅后连续使用数月从未更新，直到某天节点全部失效才以为机场跑路了。其实是机场早就发布了更优的专线入口，客户端未同步更新导致连上了旧 IP。",
      "sections": [
        {
          "title": "一、定期更新订阅的 3 大必要性",
          "content": "1. <strong>获取最新的流媒体解锁 IP</strong>：Netflix 和 ChatGPT 封锁频繁，机场管理员会随时替换出口住宅 IP；<br>2. <strong>同步最新的分流规则列表</strong>：国内新出的小程序和网站能自动直连，避免被误判消耗套餐流量；<br>3. <strong>移除故障维护节点，新增高速节点</strong>。"
        },
        {
          "title": "二、设置 Clash 定时自动更新实操",
          "content": "以 Clash Verge Rev 为例：<br>1. 点击进入左侧 <strong>「订阅 (Profiles)」</strong> 菜单；<br>2. 找到当前正在使用的订阅卡片，右键选择 <strong>「编辑 (Edit)」</strong>；<br>3. 在弹出窗口中找到 <strong>「更新间隔 (Update Interval)」</strong>，将其设置为 <code>1440</code> 分钟（即 24 小时）或 <code>720</code> 分钟（12 小时）；<br>4. 点击保存。软件将在每天后台静默同步最新节点列表，完全无需人工干预。"
        }
      ],
      "faqs": [
        {
          "q": "手动立即强制更新怎么点？",
          "a": "在订阅列表界面，直接点击订阅卡片右侧的小刷新图标（双向环形箭头），数秒内即可完成更新。"
        }
      ],
      "summaryTips": "养成设置 24 小时自动更新的好习惯，让你的客户端节点与分流策略永远保持最新最稳！"
    }
  },
  {
    "id": "subconverter-security",
    "slug": "subconverter-security",
    "question": "什么是订阅转换？使用第三方公开转换工具有泄露订阅的风险吗？",
    "shortAnswer": "订阅转换用于把 SS/V2Ray/Trojan 链接转为 Clash 格式；使用不知名公共转换网站极易被盗取订阅流量，强烈建议使用机场原生 Clash 链接或本地转换。",
    "category": "⚙️ 客户端安装、订阅导入与配置",
    "categorySlug": "client",
    "tags": [
      "订阅转换",
      "安全风险",
      "流量盗用",
      "Subconverter"
    ],
    "updatedAt": "2026年最新",
    "views": "13,400",
    "detail": {
      "overview": "订阅转换工具（如 subconverter）能够将不同代理协议格式自由转换。但由于网络请求经过第三方后端，许多免费的公共转换站会在后台静默记录用户提交的订阅 URL，从而盗用你的昂贵流量。",
      "sections": [
        {
          "title": "一、公共订阅转换网站的潜在风险",
          "content": "当你把专属的订阅链接粘贴到某第三方转换网站并点击生成时：<br>• 网站服务器完全掌握了你的完整订阅 Token；<br>• 不良站长或黑客可以编写自动化脚本在后台批量提取这些订阅，挂载到其他盗号平台低价分发；<br>• 导致你的套餐流量在不知情的情况下被数千人同时消耗殆尽，甚至被机场系统检测到异地滥用而直接封号。"
        },
        {
          "title": "二、安全的最佳应对方案",
          "content": "1. <strong>首选机场自带的 Clash 原生订阅</strong>：正规成熟机场后台 100% 具备直接导出 Clash 配置的功能，根本无需第三方转换；<br>2. <strong>使用 Clash 客户端内置的本地转换功能</strong>：Clash Verge 等现代客户端内置了转换模块，所有解析全部在本地电脑内存中进行，不向外网发送任何数据；<br>3. <strong>自己使用 Docker 搭建私人 subconverter 服务</strong>。"
        }
      ],
      "faqs": [
        {
          "q": "如果我已经在网上公共转换站用过了怎么办？",
          "a": "立即登录机场用户中心，点击「重置订阅链接 (Reset Token)」，旧的链接会立刻失效，生成全新的安全 Token。"
        }
      ],
      "summaryTips": "切勿将自己的订阅随手粘贴给不知名第三方网站！直接使用机场后台原装 Clash 链接最安全。"
    }
  },
  {
    "id": "timeout-troubleshooting",
    "slug": "timeout-troubleshooting",
    "question": "节点测速全部显示红色 Timeout 超时怎么办？(3步排查法)",
    "shortAnswer": "第一步：检查并同步电脑系统时间（误差超60秒导致SSL握手失败）；第二步：确认订阅未过期且有流量；第三步：检查杀毒软件是否拦截了代理核心组件。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "节点超时",
      "Timeout排查",
      "时间同步",
      "订阅更新"
    ],
    "updatedAt": "2026年最新",
    "views": "28,400",
    "detail": {
      "overview": "在 Clash 中点击节点测速时，如果所有节点无一例外全部显示红色“Timeout”或延迟为负数，这绝大多数不是所有节点同时坏了，而是本地系统环境或安全阻断引起的握手失败。",
      "sections": [
        {
          "title": "排查第 1 步：校准并同步操作系统时间（最常见元凶！）",
          "content": "现代加密代理协议（如 VMess、VLESS、Trojan、Shadowsocks）在建立 TLS 安全握手时，对时间同步有极其严苛的要求。如果您的电脑或手机系统时间与北京时间标准时间偏差超过 <strong>60 秒~90 秒</strong>，所有的握手数据包都会被服务器直接安全拒绝！<br><br><strong>操作方法</strong>：<br>• <strong>Windows 用户</strong>：右键右下角时钟 -> 选择「调整日期和时间」 -> 开启「自动设置时间」 -> 点击下方的 <strong>「立即同步」</strong> 按钮；<br>• <strong>macOS 用户</strong>：系统设置 -> 通用 -> 日期与时间 -> 开启自动通过 Apple 服务器同步时间。"
        },
        {
          "title": "排查第 2 步：核对机场订阅状态与流量余额",
          "content": "登录您的机场后台，检查以下关键信息：",
          "listItems": [
            "<strong>套餐是否已到期</strong>：很多用户到期未察觉，导致订阅服务器停止提供代理凭据；",
            "<strong>套餐流量是否已耗尽</strong>：当月流量用完后，节点会自动停止服务；",
            "<strong>更新节点列表</strong>：在 Clash 的订阅列表右键点击「更新 (Update)」，确保节点 IP 没有发生变更。"
          ]
        },
        {
          "title": "排查第 3 步：检查安全软件拦截与代理端口冲突",
          "content": "1. <strong>杀毒软件拦截</strong>：部分第三方杀毒软件（如 360 安全卫士、火绒、迈克菲）可能会误报并拦截 Clash 核心进程（mihomo.exe 或 clash-core.exe）的本地监听回环。<br>2. <strong>端口被其他程序占用</strong>：检查 Clash 默认端口（如 7890）是否被其它开发工具或历史残留代理软件占用，可在设置中尝试更换为 7895 或 10808 测试。"
        }
      ],
      "faqs": [
        {
          "q": "只有部分节点超时，个别节点能用是怎么回事？",
          "a": "这属于正常现象。表明机场某几个特定出口服务器正在例行维护或网络抖动，切换到测速正常的绿色低延迟节点使用即可。"
        }
      ],
      "summaryTips": "全红超时莫慌张，90% 都是系统时间偏差惹的祸！立即点开 Windows 时间设置点击同步，立刻满血复活。"
    }
  },
  {
    "id": "cant-open-web-but-speedtest-works",
    "slug": "cant-open-web-but-speedtest-works",
    "question": "为什么 YouTube 测速正常，但部分国内或海外网页打不开？(DNS与系统代理排查)",
    "shortAnswer": "常见原因为本地 DNS 缓存污染或浏览器安装了第三方代理插件抢占了流量。一键开启 Clash 的 TUN 虚拟网卡模式通常可彻底根治此类疑难杂症。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "网页打不开",
      "DNS污染",
      "系统代理",
      "TUN模式"
    ],
    "updatedAt": "2026年最新",
    "views": "12,100",
    "detail": {
      "overview": "“明明在 Clash 里节点测速显示延时 30ms，但打开网页却提示无法访问此网站”，这种“通而不达”的现象通常是由 DNS 解析失败、系统代理开关未同步或浏览器插件冲突引起的。",
      "sections": [
        {
          "title": "一、核心原因 1：Windows / macOS 系统代理开关未正常打开",
          "content": "启动 Clash 后，必须确保软件主界面的 <strong>「系统代理 (System Proxy)」</strong> 开关处于勾选/激活状态（通常呈现绿色）。如果未勾选该开关，代理软件仅在后台静默运行，浏览器发送的网络请求并未真正接入代理端口。"
        },
        {
          "title": "二、核心原因 2：浏览器第三方代理扩展（如 SwitchyOmega）冲突",
          "content": "很多开发人员或老手在 Chrome / Edge 中安装过 Proxy SwitchyOmega 等插件。若该插件处于开启状态，它会强行接管浏览器的网络栈，导致 Clash 无法接管流量。解决办法：将浏览器插件切换为“系统代理”模式，或者在排查时先临时禁用该扩展插件。"
        },
        {
          "title": "三、终极救砖神器：开启 TUN 虚拟网卡模式",
          "content": "TUN 模式（TUN Mode）是目前最干净利落的代理技术方案。它会在操作系统内部安装一个虚拟网络适配器，从内核驱动层面接管电脑上的所有 TCP/UDP 流量，自动完成透明 DNS 解析，彻底绕过 Windows 复杂的本地代理设置。<br><br><strong>开启方法</strong>：<br>在 Clash Verge Rev 或 Mihomo Party 设置中，找到 <strong>「TUN 模式」</strong>，点击开启（首次开启会弹出管理员 UAC 授权，点击允许即可）。"
        }
      ],
      "faqs": [
        {
          "q": "微信打得开但网页打不开是什么原因？",
          "a": "微信客户端内部有内置的独立 IP 直连策略，而浏览器极度依赖系统 DNS 解析。如果在 Windows CMD 运行 `ipconfig /flushdns` 刷新本地 DNS 缓存，通常可立即修复。"
        }
      ],
      "summaryTips": "遇到网页打不开先查「系统代理」开关是否变绿，排查扩展插件冲突；若仍异常，一键开启 TUN 模式即可完美解决。"
    }
  },
  {
    "id": "rule-vs-global-mode",
    "slug": "rule-vs-global-mode",
    "question": "规则模式 (Rule) 与全局模式 (Global) 有什么区别？为什么推荐规则模式？",
    "shortAnswer": "【规则模式 (强烈推荐)】国内网站自动直连不费流量，境外受阻网站才走代理；【全局模式】全部流量无差别走代理，易造成国内App变慢或异地风控。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "规则模式",
      "全局模式",
      "直连分流",
      "避坑指南"
    ],
    "updatedAt": "2026年最新",
    "views": "15,400",
    "detail": {
      "overview": "Clash 之所以被全球技术爱好者公认为最优雅的代理客户端，核心就在于其强大的「规则路由分流引擎（Rule-based Routing）」。正确理解并选择代理模式，能够彻底解决“翻了墙之后微信打不开、淘宝变慢”的尴尬问题。",
      "sections": [
        {
          "title": "一、两种核心模式的运作原理与流量走向",
          "content": "<strong>1. 规则模式 (Rule Mode - 强烈建议默认保持开启)</strong>：<br>客户端内置了数万条经过长期维护的域名与 IP 分流规则库（GeoIP 与域名规则列表）。<br>• 当你访问百度、微信、网易云音乐、Bilibili、淘宝时，软件识别为国内服务，流量<strong>直接通过本地宽带直连</strong>，速度最快且完全不扣除机场流量；<br>• 当你访问 Google、YouTube、GitHub、ChatGPT 时，软件自动判定为需要代理的境外服务，流量被<strong>精准引导至海外专线节点</strong>转发。<br><br><strong>2. 全局模式 (Global Mode)</strong>：<br>不论你访问什么网址，哪怕是查百度或刷抖音，所有网络数据包都会强制绕道境外机场节点。这会导致国内网站加载缓慢，甚至触发网银、微信账号的“异地登录/异常 IP 风控”，同时还会成倍消耗你的机场套餐流量。"
        },
        {
          "title": "二、什么极端情况下才需要临时切换到全局模式？",
          "content": "只有在以下极少数特定调试场景中，才建议短暂开启全局模式：",
          "listItems": [
            "<strong>访问某些冷门或新兴的海外小众网站</strong>：该网址尚未被收录在主流规则分流列表（如 ACL4SSR 或 Loyalsoldier 规则）中，规则模式下走了直连导致打不开；",
            "<strong>排查节点连通性故障</strong>：为了验证当前节点本身是否可用，可切换到全局模式访问测试页面，排除分流规则配置引起的干扰；",
            "<strong>使用全局完成特定软件注册后，请务必立即切回规则模式！</strong>"
          ]
        }
      ],
      "faqs": [
        {
          "q": "为什么开启规则模式后，个别海外冷门学术网站打不开？",
          "a": "可以在客户端的「自定义分流规则」中添加一条例如 `DOMAIN-SUFFIX,yoursite.com,PROXY` 的规则，或者在节点选择组中临时切换到全局模式解决。"
        }
      ],
      "summaryTips": "99.9% 的使用时间请认准「规则模式 (Rule)」！既保证国内秒开且不费流量，又能流畅自由访问全球网络。"
    }
  },
  {
    "id": "tun-mode-explained",
    "slug": "tun-mode-explained",
    "question": "什么是 TUN 虚拟网卡模式？它与普通系统代理有什么区别？何时必须开启？",
    "shortAnswer": "TUN 模式接管整机所有网络流量（包括不支持系统代理的命令行、外服游戏、Docker）；普通系统代理只接管浏览器，不接管CMD终端与游戏应用。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "TUN模式",
      "虚拟网卡",
      "全局代理",
      "终端加速"
    ],
    "updatedAt": "2026年最新",
    "views": "16,300",
    "detail": {
      "overview": "很多用户发现自己在浏览器里可以正常访问 Google，但在终端运行 `git clone`、`npm install`、`pip install` 或打外服游戏时依然龟速断连。这是因为普通系统代理只适用于支持系统代理设置的应用，而 TUN 模式才是真正的整机全接管。",
      "sections": [
        {
          "title": "一、系统代理 (System Proxy) vs TUN 模式深度对比",
          "content": "• <strong>系统代理模式</strong>：本质上是在 Windows Internet 选项中设置了一个本地代理端口（如 127.0.0.1:7890）。Chrome、Edge、Firefox 会主动读取该设置走代理；但很多桌面游戏、命令行终端、代码包管理器（Git/Docker/Curl）会彻底无视该设置！<br>• <strong>TUN 模式</strong>：Clash 在操作系统内核中虚拟出一块专属网卡适配器。操作系统的所有网络数据包都会强制流入该虚拟网卡，无论软件是否支持代理，都由内核统一接管分流！"
        },
        {
          "title": "二、必须开启 TUN 模式的 4 大高频场景",
          "content": "1. <strong>开发人员使用 Git、Docker、Node.js、Python 拉取海外依赖</strong>；<br>2. <strong>玩 Steam、Epic、战网国际服、外服竞技联机游戏</strong>；<br>3. <strong>桌面端 Spotify、Telegram 或特定的金融炒币软件经常连不上</strong>；<br>4. <strong>局域网打印机或公司内网 VPN 与 Clash 产生端口冲突时</strong>。"
        }
      ],
      "faqs": [
        {
          "q": "开启 TUN 模式会导致国内软件变慢吗？",
          "a": "不会！因为 TUN 模式依然严格遵循 Clash 内置的规则分流体系，国内流量依然在虚拟网卡内走直连出口，速度不受影响。"
        }
      ],
      "summaryTips": "程序员和游戏玩家强烈建议长年开启 TUN 模式，免去为各种命令行软件单独配置 proxy 的繁琐折磨。"
    }
  },
  {
    "id": "clash-service-mode-install-failed",
    "slug": "clash-service-mode-install-failed",
    "question": "Clash Verge 安装服务模式（Service Mode）或 TUN 模式失败怎么解决？",
    "shortAnswer": "最常见原因是权限不足或被杀毒软件拦截服务注册。右键以管理员身份运行 Clash Verge，并确认火绒/360防火墙未阻止 ClashCoreService 服务安装。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "服务模式",
      "TUN失败",
      "管理员权限",
      "ServiceMode"
    ],
    "updatedAt": "2026年最新",
    "views": "9,600",
    "detail": {
      "overview": "TUN 模式需要操作系统底层的网络驱动级支持，因此 Clash Verge 需要注册名为 ClashCoreService 的 Windows 系统后台服务。如果权限受限或被安全防护软件拦截，就会提示安装失败或红字报错。",
      "sections": [
        {
          "title": "一、解决服务模式安装失败的 3 步排查",
          "content": "1. <strong>退出软件并以管理员身份重启</strong>：完全退出右下角托盘中的 Clash Verge，在桌面快捷方式上右键点击 <strong>「以管理员身份运行」</strong>；<br>2. <strong>暂时退出或信任杀毒软件</strong>：火绒、360 等工具在检测到程序向系统注入虚拟驱动（wintun.dll）时会默认静默阻止，请在弹窗时选择“始终允许”；<br>3. <strong>重新点击安装服务模式</strong>：进入设置 -> 点击「服务模式」右侧的「安装 (Install)」，看到旁边绿灯亮起即代表成功。"
        },
        {
          "title": "二、检查 Windows 的虚拟网卡适配器",
          "content": "进入 Windows 控制面板 -> 网络和共享中心 -> 更改适配器设置，检查列表中是否存在名为 <code>Meta</code> 或 <code>wintun</code> 的虚拟适配器。如果显示已被禁用，右键点击“启用”即可。"
        }
      ],
      "faqs": [
        {
          "q": "安装服务模式需要每次开机都重新点一次吗？",
          "a": "不需要！服务安装一次后即注册进 Windows 服务列表，以后开机自动以最高权限在后台待命。"
        }
      ],
      "summaryTips": "牢记「管理员运行 + 杀软放行」两大黄金法则，TUN 服务模式秒级成功安装。"
    }
  },
  {
    "id": "port-conflict-7890",
    "slug": "port-conflict-7890",
    "question": "Clash 启动提示 7890 端口被占用（Port In Use）怎么办？",
    "shortAnswer": "在 Clash 设置中将 Mixed Port（混合端口）从 7890 修改为未被占用的端口（如 7895 或 10808），点击保存即可秒级解决端口冲突。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "7890端口占用",
      "端口冲突",
      "MixedPort",
      "配置排错"
    ],
    "updatedAt": "2026年最新",
    "views": "11,200",
    "detail": {
      "overview": "7890 是 Clash 默认的混合本地监听端口（HTTP/SOCKS5）。如果电脑上同时开着其他代理软件（如 V2RayN、Charles 抓包工具）或者上次 Clash 异常退出后后台僵尸进程未释放该端口，就会弹窗提示冲突无法启动。",
      "sections": [
        {
          "title": "一、最快解决方法：修改端口号（推荐，10秒搞定）",
          "content": "1. 打开 Clash Verge，点击左侧 <strong>「设置 (Settings)」</strong> 菜单；<br>2. 找到 <strong>「Mixed Port / 混合端口」</strong> 输入框；<br>3. 将默认的 <code>7890</code> 修改为任意一个不冲突的高位端口，例如 <code>7895</code>、<code>10808</code> 或 <code>20808</code>；<br>4. 点击保存或刷新，核心代理进程将立即在新端口上恢复正常监听。"
        },
        {
          "title": "二、强力方法：杀死占用 7890 端口的残留进程",
          "content": "如果必须使用 7890 端口，可通过 Windows 终端强制清理：<br>1. 按下 <code>Win + X</code> 选择以管理员身份打开终端 / PowerShell；<br>2. 输入命令查询占用端口的 PID：<code>netstat -ano | findstr :7890</code>；<br>3. 查看输出最后一位的 PID 数字（例如 12345），执行强制终止：<code>taskkill /F /PID 12345</code>。"
        }
      ],
      "faqs": [
        {
          "q": "修改了混合端口，浏览器需要跟着改吗？",
          "a": "不需要！当你开启「系统代理」开关时，Clash 会自动通知 Windows 系统代理注册表使用最新的端口号，浏览器完全无感。"
        }
      ],
      "summaryTips": "端口冲突不要慌，在设置里随手把 7890 改成 7895，立竿见影彻底解决。"
    }
  },
  {
    "id": "dns-leak-and-clean-browsing",
    "slug": "dns-leak-and-clean-browsing",
    "question": "什么是 DNS 泄漏？如何在 Clash 中配置安全加密 DNS (DoH/DoT)？",
    "shortAnswer": "DNS 泄漏指域名查询请求未走代理而是泄露给了本地运营商DNS，导致访问记录被运营商捕获；配置使用 Cloudflare/Google 加密 DoH 可彻底消除泄漏。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "DNS泄漏",
      "DoH",
      "DoT",
      "隐私防范",
      "DNS污染"
    ],
    "updatedAt": "2026年最新",
    "views": "8,900",
    "detail": {
      "overview": "很多人虽然翻了墙，但在进行敏感访问时，设备却依然向本地电信/联通的 114.114.114.114 发送未加密的明文 UDP 53 端口查询。这不仅会导致运营商轻易获取你的域名访问足迹，还会引发严重的 DNS 投毒污染。",
      "sections": [
        {
          "title": "一、如何测试自己的设备是否存在 DNS 泄漏？",
          "content": "开启科学上网节点后，在浏览器访问权威国际检测站点 <code>dnsleaktest.com</code>，点击「Standard Test」：<br>• <strong>安全结果</strong>：检测出的 DNS 服务器全部位于美国、日本或新加坡（即节点机房所在地）；<br>• <strong>存在泄漏</strong>：列表中赫然出现了中国电信、中国联通或你所在城市的本地 DNS 服务器，说明你的真实访问正处于明文暴露状态！"
        },
        {
          "title": "二、在 Clash 中开启现代加密 DNS 防泄漏配置",
          "content": "在 Clash Verge Rev 或订阅配置中，将默认的明文 DNS 替换为基于 HTTPS 加密的 DoH 方案：<br>• <strong>境外解析推荐</strong>：<code>https://1.1.1.1/dns-query</code> (Cloudflare) 或 <code>https://dns.google/dns-query</code> (Google)；<br>• <strong>国内解析推荐</strong>：<code>https://223.5.5.5/dns-query</code> (阿里公共 DNS)；<br>结合 Fake-IP 模式，客户端本地直接响应虚构 IP，彻底阻断真实 DNS 查询外泄。"
        }
      ],
      "faqs": [
        {
          "q": "什么是 Fake-IP 模式？",
          "a": "Fake-IP 是 Clash 的专利级技术。对于所有海外域名，本地直接返回一个虚构的 198.18.0.0/16 地址，真实域名打包发送给境外专线节点代为解析，实现真正的 0 泄漏与秒级响应。"
        }
      ],
      "summaryTips": "认准 Fake-IP 与加密 DoH，彻底告别电信联通明文抓包，打造绝对纯净的隐私保护网。"
    }
  },
  {
    "id": "high-latency-evening-peak",
    "slug": "high-latency-evening-peak",
    "question": "为什么白天速度飞快，一到晚上 20 点至 23 点就疯狂卡顿丢包？",
    "shortAnswer": "晚上 8~11 点是全国公网国际出口晚高峰，普通中转机房公网带宽挤爆且丢包严重；只有不经过国际公网的 IPLC/IEPL 物理专线才能保障晚高峰满速。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "晚高峰卡顿",
      "网络拥塞",
      "丢包率",
      "专线对比"
    ],
    "updatedAt": "2026年最新",
    "views": "17,600",
    "detail": {
      "overview": "很多使用平价廉价机场的用户都有同感：上午看 4K 秒开丝滑，一到晚上 8 点连网页都打不开。这正是普通公网中转与高品质物理专线之间无法逾越的本质鸿沟。",
      "sections": [
        {
          "title": "一、晚高峰国际出口拥堵的底层原因",
          "content": "中国大陆对外连接的总公网国际出口带宽是极其有限的。每晚 20:00~23:00 是全国网民集中上网追剧、打游戏的高峰期。<br>• 普通梯子走的是公网民用骨干网，数据包必须在骨干网节点排队挤独木桥，导致丢包率飙升至 30%~50%，TCP 发生灾难性拥塞重传；<br>• GFW 在晚高峰时段由于处理能力承载过大，会主动对未识别的异常流量进行大比例随机丢包策略。"
        },
        {
          "title": "二、为什么 IPLC/IEPL 专线在晚高峰能够稳如泰山？",
          "content": "IPLC/IEPL 专线是服务商直接向中国电信、联通或中移动购买的<strong>端到端私有光纤物理带宽</strong>。无论公网怎么挤、怎么断，专线光缆内的通道始终具有独享 SLA 保障，全天 24 小时丢包率稳定在 0.1% 以下，这也是为什么专线机场单价相对更高的根本原因。"
        }
      ],
      "faqs": [
        {
          "q": "如果我不想换机场，晚高峰有什么缓解卡顿的方法？",
          "a": "尝试切换到冷门小众地区的节点（如菲律宾、马来西亚、英国、德国等），避开香港、日本、新加坡等大家都挤着用的热门出口。"
        }
      ],
      "summaryTips": "受够了晚高峰转圈圈，请果断升级为「IPLC/IEPL 物理专线机场」，晚高峰看 4K 拖拽进度条毫无压力。"
    }
  },
  {
    "id": "clash-disconnect-no-internet",
    "slug": "clash-disconnect-no-internet",
    "question": "关闭 Clash 之后电脑彻底连不上网、微信打不开怎么办？(代理未还原修复)",
    "shortAnswer": "原因是在未关闭“系统代理”的情况下直接强退了软件，导致 Windows 本地代理死锁。进入 Windows 网络设置关闭手动代理，或重新打开 Clash 规范退出即可修复。",
    "category": "🛠️ 故障排查、全红超时与连不上网",
    "categorySlug": "troubleshooting",
    "tags": [
      "断网排查",
      "代理残留",
      "无法上网",
      "死锁修复"
    ],
    "updatedAt": "2026年最新",
    "views": "31,200",
    "detail": {
      "overview": "这是新手使用 Clash 最常碰到的“惊魂时刻”：“我一关代理软件，结果连百度和微信都断网了！”其实电脑硬件和宽带没有任何问题，只是 Windows 系统注册表里的本地代理开关没有被正常还原。",
      "sections": [
        {
          "title": "一、一秒自救法：重新打开 Clash 然后规范关闭（最快）",
          "content": "1. 重新启动打开你的 Clash 客户端；<br>2. 观察主界面的 <strong>「系统代理 (System Proxy)」</strong> 开关；<br>3. <strong>先手动点击关闭「系统代理」开关</strong>（开关由绿色变成灰色）；<br>4. 然后右键右下角托盘图标，选择 <strong>「退出 (Quit)」</strong>。<br>此时 Windows 代理注册表已被软件规范清空，网络立即自动恢复正常！"
        },
        {
          "title": "二、系统设置手动排错法（软件已卸载或打不开时）",
          "content": "• <strong>Windows 10 / 11 用户</strong>：<br>1. 按下快捷键 <code>Win + i</code> 打开「设置」；<br>2. 点击「网络和 Internet」 -> 在左侧/列表中点击「代理 (Proxy)」；<br>3. 在“手动设置代理”选项下，将 <strong>「使用代理服务器」开关彻底关闭为“关 (Off)”</strong>；<br>4. 刷新网页，网络瞬间秒恢复！"
        }
      ],
      "faqs": [
        {
          "q": "怎样才能避免下次再遇到断网？",
          "a": "切记不要在任务管理器中强制结束 Clash 进程，关机或不用代理前，先在客户端把系统代理开关点灰关闭。"
        }
      ],
      "summaryTips": "关代理后断网别慌，只是注册表开关未还原！进 Windows 代理设置关掉手动代理，立刻满血复活。"
    }
  },
  {
    "id": "chatgpt-access-denied",
    "slug": "chatgpt-access-denied",
    "question": "为什么连上节点后，ChatGPT 提示「Access Denied」或限制访问？",
    "shortAnswer": "OpenAI 封锁了常见的机房商用 IP。解决办法：切换带有「原生」、「ChatGPT」或「解锁」字样的专用节点，并清除浏览器 OpenAI 缓存。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "ChatGPT解锁",
      "Access Denied",
      "OpenAI风控",
      "原生IP"
    ],
    "updatedAt": "2026年最新",
    "views": "26,700",
    "detail": {
      "overview": "OpenAI 拥有全球最严苛的 IP 风险控制系统（与 Cloudflare 合作部署深度威胁识别）。当大量翻墙用户聚集在同一个数据中心机房（Data Center）IP 访问 ChatGPT 时，该 IP 段就会被标记为高危爬虫/代理，直接返回“Access Denied (1020)”或“Oops! Something went wrong”。",
      "sections": [
        {
          "title": "一、OpenAI 对访问节点的底层风控机制",
          "content": "OpenAI 会对每一个请求的 IP 属性进行交叉校验：",
          "listItems": [
            "<strong>数据中心机房 IP (Hosting/DataCenter)</strong>：绝大多数便宜 VPS、机房直连 IP 都在此列，最容易被拦截；",
            "<strong>原生住宅 IP (Residential / ISP)</strong>：由境外真实宽带运营商分配的家庭 IP，被判定为真实人类用户，解锁通过率高达 99.9%；",
            "<strong>WebRTC 泄漏真实地理位置</strong>：如果浏览器存在语言、时区或 WebRTC 真实 IP 泄漏，也会被风控系统逮个正着。"
          ]
        },
        {
          "title": "二、一步到位的 3 步排错实操方案",
          "content": "<strong>第一步：在 Clash 中精选专用解锁节点</strong><br>优质机场通常会专门配置经过住宅 IP 池伪装的 AI 解锁通道。在节点列表中寻找标有 <code>ChatGPT</code>、<code>OpenAI</code>、<code>原生</code>、<code>解锁</code> 或 <code>US 原生</code> 的节点进行连接。<br><br><strong>第二步：彻底清理浏览器相关缓存 Cookie</strong><br>即使你换对了节点，如果浏览器里还保留着上次报错时的 Session Cookie，OpenAI 仍会根据旧标识拒绝访问！最简单的办法是：打开 Chrome <strong>「无痕窗口 (Incognito Window)」</strong> 重新登录访问，或者在设置中清除 openai.com 的所有站点数据。<br><br><strong>第三步：优先选用美国、新加坡、日本或英国节点</strong><br>尽量避免使用香港节点访问 ChatGPT（OpenAI 官方从未对中国香港地区开放服务，因此香港节点访问通常需要服务商做特殊反向代理转发）。"
        }
      ],
      "faqs": [
        {
          "q": "为什么 ChatGPT 手机 App 提示所在国家不支持？",
          "a": "iOS 或 Android 客户端会读取 Apple ID 注册区域与手机运营商信息，确保连接的节点为美区，且手机时区与语言设置为海外。"
        }
      ],
      "summaryTips": "用 ChatGPT 务必认准美日新原生解锁节点，避开香港节点，遇到拦截立即开 Chrome 无痕模式重新登录！"
    }
  },
  {
    "id": "chatgpt-plus-payment-failed",
    "slug": "chatgpt-plus-payment-failed",
    "question": "订阅 ChatGPT Plus / Claude Pro 信用卡支付总被拒绝风控怎么解决？",
    "shortAnswer": "Stripe 会校验绑卡 IP 的欺诈分值与账单地址一致性。使用纯净美国家庭原生住宅 IP、在无痕模式下绑定支持海外商户的虚拟信用卡或开通美区卡即可成功。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "ChatGPTPlus",
      "Claude订阅",
      "Stripe拒卡",
      "虚拟信用卡"
    ],
    "updatedAt": "2026年最新",
    "views": "19,500",
    "detail": {
      "overview": "无数技术人员卡在订阅 ChatGPT Plus 或 Claude 3.5 Sonnet 的最后一步：输入卡号后提示“Your card has been declined（您的银行卡已被拒绝）”。国内发行的双币信用卡 100% 无法直接通过 Stripe 的风控拦截。",
      "sections": [
        {
          "title": "一、Stripe 支付风控的拦截逻辑",
          "content": "OpenAI 使用的 Stripe 支付网关采用雷达（Radar）风控算法，主要核验两个硬性指标：<br>1. <strong>发卡行国家必须为允许区域</strong>：绝不支持银联、中国大陆地区发行的 Visa / MasterCard；<br>2. <strong>绑卡时的 IP 纯净度（Fraud Score 欺诈评分）</strong>：如果当前节点被上万人用来反复尝试绑卡，Stripe 会直接将该 IP 拉黑，即便卡内余额充足也会直接秒拒。"
        },
        {
          "title": "二、成功开通 Plus / Pro 的标准作业流程",
          "content": "1. <strong>获取合规外币卡</strong>：使用合规的海外虚拟卡服务（如 Dupay、WildCard、Nobepay）或海外真实银行卡（如 Wise、华美 Velo）；<br>2. <strong>使用免税州真实账单地址</strong>：在网上搜索美国俄勒冈（Oregon）或特拉华（Delaware）真实邮编与地址生成账单信息；<br>3. <strong>连接美国纯净专线节点</strong>：先在 <code>whoer.net</code> 检查节点伪装度达到 100%；<br>4. <strong>全流程在 Chrome 无痕模式下操作</strong>：避免旧 Cookie 引起风控交叉污染。"
        }
      ],
      "faqs": [
        {
          "q": "苹果手机可以通过 App Store 内购 ChatGPT Plus 吗？",
          "a": "这是最稳妥的替代方案！使用美区 Apple ID，在支付宝购买美区 Apple 礼品卡充值进账户，直接在 iPhone 上点击订阅即可 100% 成功，完全绕过银行卡风控。"
        }
      ],
      "summaryTips": "绑卡被拒莫反复重试以免封号！首选「美区 Apple 礼品卡内购」，或配合纯净美区原生专线绑定虚拟卡。"
    }
  },
  {
    "id": "netflix-proxy-error",
    "slug": "netflix-proxy-error",
    "question": "观看 Netflix 提示「您似乎正在使用解除封锁工具或代理」怎么办？",
    "shortAnswer": "Netflix 检测到了机房公网 IP。请在 Clash 中切换带有「NF」或「Netflix」标识的专用原生解锁专线，并刷新播放页面。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "Netflix解锁",
      "奈飞代理报错",
      "4K超清",
      "流媒体分流"
    ],
    "updatedAt": "2026年最新",
    "views": "16,800",
    "detail": {
      "overview": "Netflix（奈飞）由于受制于好莱坞影视公司的严格版权地域协议，必须在技术上严格封杀所有试图通过网络代理突破地域限制的用户。当 Netflix 发现某个 IP 流量异常且属于知名 IDC 云服务商时，便会弹出“解除封锁工具”警告并强制中断播放。",
      "sections": [
        {
          "title": "一、原生剧 vs 非原生版权剧的区别",
          "content": "有些用户会发现：“为什么《怪奇物语》能看，但《绝命毒师》或者某些日本动漫搜不到？”<br><br>• <strong>Netflix 自制剧（原生剧）</strong>：Netflix 拥有全球完整版权，对 IP 限制相对宽松，只要能连上节点基本都能看；<br>• <strong>第三方版权剧（非原生剧）</strong>：仅在特定国家/地区拥有播放授权，只有在连接了<strong>真正支持原生解锁 (Fully Unblocked)</strong> 的高质量节点时，才能被搜索并播放。"
        },
        {
          "title": "二、Netflix 报错与锁区极速修复指南",
          "content": "1. <strong>认准节点标识</strong>：在节点列表中选择标注有 <code>NF</code>、<code>Netflix</code>、<code>原生</code> 的专线节点（如新加坡 NF、日本 NF、香港 NF、台湾 NF）；<br>2. <strong>关闭跨国自动跳跃</strong>：在节点选择组中，不要频繁在香港、日本、美国之间来回快速切换，否则会被 Netflix 判定为多地并发盗播异常；<br>3. <strong>清除 App 或浏览器缓存</strong>：在手机端强制关闭 Netflix App 重新打开，在电脑浏览器中按下 <code>Ctrl + F5</code> 强制刷新。"
        }
      ],
      "faqs": [
        {
          "q": "为什么同样一个节点，有时候能看有时候又报错？",
          "a": "Netflix 每天都在全网自动扫描封禁机房 IP 池，优质机场会有专人自动化监控并在几分钟内轮换新的住宅解锁 IP，遇到波动稍候刷新即可。"
        }
      ],
      "summaryTips": "看奈飞必须选用具备「原生流媒体解锁」保障的高品质专线机场，认准 NF 专属节点，告别代理警告。"
    }
  },
  {
    "id": "tiktok-black-screen",
    "slug": "tiktok-black-screen",
    "question": "TikTok 为什么黑屏或者零播放？如何设置纯净网络环境？",
    "shortAnswer": "TikTok 会强行检测国内 SIM 卡、系统语言与纯净度。手机端需拔出国内 SIM 卡，修改系统时区语言与节点一致，并配合原生纯净专线。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "TikTok黑屏",
      "零播放",
      "拔卡环境",
      "伪装度"
    ],
    "updatedAt": "2026年最新",
    "views": "18,900",
    "detail": {
      "overview": "TikTok 与抖音属于同一母公司字节跳动，为了符合国际与国内法规要求，TikTok 在客户端内部设计了一套极其严密的技术锁链，专门阻断中国大陆用户访问海外版 TikTok。",
      "sections": [
        {
          "title": "一、TikTok 检测国内用户的 4 大核心维度",
          "content": "只要命中以下任意一项，TikTok 就会直接黑屏（无法加载视频）或者发布的作品始终保持 0 播放：",
          "listItems": [
            "<strong>SIM 卡国家代码 (MCC/MNC)</strong>：只要手机插有中国移动、中国联通、中国电信的电话卡，直接百分百黑屏；",
            "<strong>系统语言与国家地区</strong>：手机系统地区为“中国”，系统语言为“简体中文”，容易被判定为非目标国家受众；",
            "<strong>系统时区与定位权限</strong>：手机时区为北京时间（GMT+8），而连的是美西节点（GMT-8），产生巨大时空冲突；",
            "<strong>节点 IP 纯净度与欺诈分数</strong>：使用被上万人共用的劣质机房广播 IP，欺诈分数（Fraud Score）过高。"
          ]
        },
        {
          "title": "二、跨境出海标准的 4 步无忧环境搭建",
          "content": "1. <strong>拔除手机国内 SIM 卡</strong>：建议准备一台闲置手机专门作为跨境专用机，拔掉电话卡（或者插海外原生卡）；<br>2. <strong>关闭手机 GPS 定位服务</strong>：在手机隐私设置中彻底关闭定位服务权限；<br>3. <strong>修改手机时区与语言</strong>：若打算运营美区 TikTok，将手机语言设为 English，时区设为美西（如洛杉矶）或美东；<br>4. <strong>连接纯净专线节点并检测伪装度</strong>：连接机场专线后，先用手机浏览器打开 <code>whoer.net</code>，检查伪装度得分是否达到 100%。"
        }
      ],
      "faqs": [
        {
          "q": "电脑网页版刷 TikTok 也会黑屏吗？",
          "a": "不会！电脑网页版没有 SIM 卡检测机制。使用电脑浏览器配合 Clash 规则模式，只要连接正常专线节点，即可直接秒开 TikTok 官方网页观看视频。"
        }
      ],
      "summaryTips": "手机玩 TikTok 核心就是「拔卡 + 改时区 + 关定位 + 纯净节点」；电脑网页端则可直接畅看无阻。"
    }
  },
  {
    "id": "native-ip-vs-broadcast-ip",
    "slug": "native-ip-vs-broadcast-ip",
    "question": "什么是原生 IP？原生 IP 与广播 IP 对解锁流媒体与 AI 有何区别？",
    "shortAnswer": "原生 IP 是注册地与机房物理所在地一致的优质 IP，不被流媒体标记为异地机房，解锁 Netflix 4K、Disney+ 与 ChatGPT 成功率极高。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "原生IP",
      "广播IP",
      "双ISP",
      "纯净度",
      "流媒体解锁"
    ],
    "updatedAt": "2026年最新",
    "views": "13,200",
    "detail": {
      "overview": "在选购高品质机场时，常常会看到服务商将「原生 IP」、「双 ISP 原生纯净出口」作为核心卖点。理解原生 IP 与广播 IP 的底层差异，有助于帮助大家挑选到真正靠谱的海外访问节点。",
      "sections": [
        {
          "title": "一、原生 IP (Native IP) 与广播 IP (Broadcast IP) 的技术本质",
          "content": "• <strong>原生 IP（原生机房）</strong>：指由该地区的当地互联网管理组织（如亚太 APNIC、美洲 ARIN）直接向本地机房分配的 IP。其注册国家、机房物理机房、DNS 归属地三者百分之百完全一致。<br>• <strong>广播 IP（BGP 宣告借用）</strong>：服务商为了节省购买当地昂贵 IP 的成本，将其他便宜国家（如拉美、非洲）的闲置 IP 块，通过 BGP 路由广播宣告到香港或日本服务器上使用。虽然测速显示延迟低，但在数据库查询中会露出“假原生地”的马脚。"
        },
        {
          "title": "二、为什么解锁 ChatGPT 和流媒体必须选原生 IP？",
          "content": "Netflix、Disney+、OpenAI、TikTok、PayPal 等风控体系对 IP 库进行实时多库比对（MaxMind、IP2Location、DB-IP）。一旦发现该 IP 的路由宣告与注册档案存在地域冲突，便会自动认定该 IP 为“商业代理中继机房”，从而进行全面功能降级或直接拦截封禁。"
        }
      ],
      "faqs": [
        {
          "q": "平时只看普通海外网页和查资料，需要强求原生 IP 吗？",
          "a": "不需要。访问维基百科、技术博客、StackOverflow 等常规网站，普通广播中转与原生 IP 体验毫无差异，普通节点即可满足。"
        }
      ],
      "summaryTips": "追剧炒币玩 AI，原生专线是标配；只查资料看新闻，普通高性价比节点足够用。"
    }
  },
  {
    "id": "disney-plus-error-code",
    "slug": "disney-plus-error-code",
    "question": "Disney+ 提示 Error 83 或黑屏转圈无法播放怎么排查解决？",
    "shortAnswer": "Error 83 代表设备与 IP 被判定为不合规。切换至带有 Disney+/解锁标识的原生专线节点，并确保浏览器开启了广色域与 DRM 保护支持。",
    "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    "categorySlug": "streaming",
    "tags": [
      "Disney+",
      "Error83",
      "流媒体解锁",
      "漫威4K"
    ],
    "updatedAt": "2026年最新",
    "views": "7,800",
    "detail": {
      "overview": "Disney+（迪士尼流媒体）汇聚了漫威、星球大战、国家地理等超高清影视。但其对代理检测的严密程度甚至不亚于 Netflix，其中最臭名昭著的就是 Error 83 报错。",
      "sections": [
        {
          "title": "一、Disney+ 常见三大报错代码",
          "content": "• <strong>Error 83 (未知设备/网络错误)</strong>：90% 的情况是当前节点 IP 被 Disney+ 风控标记为代理；<br>• <strong>Error 73 (地区不可用)</strong>：所连接节点的归属国家暂未开放 Disney+ 服务；<br>• <strong>一直蓝底 Logo 转圈</strong>：DNS 解析超时或 IPv6 流量泄漏导致验证卡死。"
        },
        {
          "title": "二、快速恢复播放的 3 个关键技巧",
          "content": "1. <strong>首选新加坡、香港、美国原生节点</strong>：这三地的 Disney+ 影视库最全且包含完整官方繁简中文字幕；<br>2. <strong>在 Clash 中禁用 IPv6 开关</strong>：进入客户端设置关闭 IPv6，防止国内 IPv6 地址直连迪士尼验证服务器造成拦截；<br>3. <strong>电视端（Apple TV / 索尼电视）清除 App 缓存</strong>后重启应用。"
        }
      ],
      "faqs": [
        {
          "q": "为什么有声音但画面黑屏？",
          "a": "电脑浏览器需要开启硬件加速（Hardware Acceleration），且显示器线缆需支持 HDCP 数字版权保护协议。"
        }
      ],
      "summaryTips": "遇到迪士尼转圈 Error 83，关掉 IPv6 并切到新加坡或香港原生解锁专线，秒进 4K HDR 视界。"
    }
  },
  {
    "id": "simultaneous-device-limit",
    "slug": "simultaneous-device-limit",
    "question": "机场套餐的「在线设备数」是如何计算的？多设备同时连会封号吗？",
    "shortAnswer": "主要依据同一时刻发起有效 TCP/UDP 连接的客户端公网 IP 或连接数统计；同一家庭 WiFi 下多台设备通常只算 1 个公网出口，不会封号。",
    "category": "🎮 跨设备、软路由与游戏加速",
    "categorySlug": "devices",
    "tags": [
      "在线设备",
      "设备并发",
      "软路由",
      "多端共享"
    ],
    "updatedAt": "2026年最新",
    "views": "11,200",
    "detail": {
      "overview": "大部分机场套餐都会标明“限制 2 台设备”、“限制 5 台设备”或“不限设备并发”。了解在线设备的统计逻辑，可以帮助大家在家庭、宿舍及办公场景下更合理地共享网络，避免因超限被临时断网。",
      "sections": [
        {
          "title": "一、机场后台是如何统计“同时在线设备”的？",
          "content": "不同的机场后端架构统计逻辑主要有两种：<br><br><strong>1. 按外部公网出口 IP 统计（最常见）</strong>：<br>如果你的手机、电脑、iPad 都连在同一个家庭无线路由器的 WiFi 下，虽然设备有 3 台，但在外部服务器看来，它们都来自同一个电信/联通宽带的公网 IP。在这种情况下，很多机场后台将其视作为 <strong>1 个在线设备</strong>。<br><br><strong>2. 按活跃连接会话 / 客户端 ID 统计</strong>：<br>如果手机用 5G 数据网络，电脑连家庭宽带，iPad 连公司网络，由于分别来自三个不同的公网 IP，此时就会被计为 <strong>3 台在线设备</strong>。"
        },
        {
          "title": "二、超过设备限制会有什么后果？会封号吗？",
          "content": "正规机场不会因为临时多连了一台设备而直接封号！<br>常见的系统处理机制是：<br>• <strong>后连者被拒绝握手</strong>：前几台设备继续正常上网，超出限制的第 N 台设备测速超时或打不开网页；<br>• <strong>旧连接被踢下线</strong>：新设备连上后，最久未活动的旧设备被自动注销断开连接；<br>• 只要断开多余的设备，几分钟后即可完全恢复正常。"
        },
        {
          "title": "三、全家设备多？如何用软路由 / 代理共享突破限制？",
          "content": "如果家里有电视机、扫地机器人、PS5、多台电脑和手机需要同时科学上网，推荐在路由器（如 OpenWrt 软路由）上安装 Clash (PassWall/OpenClash)。整个家庭只需路由器一台设备与机场建立专线连接，屋里所有的数十台智能设备都能无感畅享高速外网，且在机场后台仅占用 1 个设备名额！"
        }
      ],
      "faqs": [
        {
          "q": "可以把自己的订阅链接分享给好朋友使用吗？",
          "a": "偶尔分享给信得过的密友测试没有问题，但严禁在公开网络（如贴吧、群聊）公开发布，否则海量连接会导致账号触发风控甚至被系统永久封禁。"
        }
      ],
      "summaryTips": "家庭多端共享首选「不限设备」套餐或搭配软路由使用；多地同时使用请选择支持多并发的进阶方案。"
    }
  },
  {
    "id": "openwrt-soft-router-clash",
    "slug": "openwrt-soft-router-clash",
    "question": "家用 OpenWrt 软路由 / 旁路由如何配置 Clash 全屋无感科学上网？",
    "shortAnswer": "在 OpenWrt 安装 OpenClash 或 PassWall 插件，导入订阅后开启 Fake-IP 混合模式，全屋电视、音箱、游戏机无需任何设置即可秒开油管与外网。",
    "category": "🎮 跨设备、软路由与游戏加速",
    "categorySlug": "devices",
    "tags": [
      "OpenWrt",
      "软路由",
      "OpenClash",
      "全屋科学上网"
    ],
    "updatedAt": "2026年最新",
    "views": "19,800",
    "detail": {
      "overview": "对于数码极客与品质家庭而言，在每台手机电脑上手动开关梯子非常麻烦，且 Apple TV、Switch 掌机、智能音箱等设备根本无法安装客户端。软路由/旁路由是终极的全屋透明翻墙方案。",
      "sections": [
        {
          "title": "一、主路由 vs 旁路由（单臂路由）组网模式选择",
          "content": "• <strong>主路由模式</strong>：软路由直接插光猫拨号，承担全屋 DHCP 与网关分发，性能极致强劲；<br>• <strong>旁路由模式（推荐新手）</strong>：原有硬路由（如小米/华硕）继续负责拨号发 WiFi，将软路由用网线插在硬路由 LAN 口。想翻墙的设备只需在 WiFi 设置中将「网关与 DNS」手动修改为软路由 IP，不影响家人正常看国内电视。"
        },
        {
          "title": "二、OpenClash 核心模式配置技巧",
          "content": "1. <strong>运行模式首选「Fake-IP (TUN 模式)」</strong>：解析速度极快，彻底阻断全屋 DNS 污染；<br>2. <strong>勾选「仅代理常用端口」或绕过局域网</strong>：确保 NAS 局域网传输（SMB/NFS）跑满千兆带宽不经过代理核心；<br>3. <strong>配置节点自动切换保活策略</strong>。"
        }
      ],
      "faqs": [
        {
          "q": "软路由翻墙会导致银行 App 异地登录警告吗？",
          "a": "只要分流规则配置完善（如 GEOIP,CN 走 DIRECT 直连），国内网银和微信完全走本地直连，绝不会触发异地警告。"
        }
      ],
      "summaryTips": "折腾一次享受三年！软路由配置 OpenClash 是实现全家电视、手机、游戏主机无感畅联的最高境界。"
    }
  },
  {
    "id": "steam-switch-ps5-game-proxy",
    "slug": "steam-switch-ps5-game-proxy",
    "question": "玩 Steam、PlayStation 5 或 Switch 外服联机如何利用 Clash 加速？",
    "shortAnswer": "电脑端开启 Clash 的 TUN 模式或允许局域网连接；主机端（PS5/Switch）在网络设置中配置电脑的本地 IP 与 7890 代理端口，选择低延迟专线畅玩。",
    "category": "🎮 跨设备、软路由与游戏加速",
    "categorySlug": "devices",
    "tags": [
      "Steam加速",
      "PS5",
      "Switch联机",
      "游戏专线",
      "低延迟NAT"
    ],
    "updatedAt": "2026年最新",
    "views": "14,900",
    "detail": {
      "overview": "很多主机玩家每月花费三四十元购买 UU、腾讯等游戏加速器。其实如果你已经订阅了高品质 IPLC/IEPL 专线机场，完全可以利用 Clash 实现全平台游戏联机加速，NAT 类型直冲 NAT 1 / NAT 2 (A/B)。",
      "sections": [
        {
          "title": "一、PC 电脑端 Steam / Epic 联机与商店加速",
          "content": "直接在 Clash Verge Rev 中开启 <strong>「TUN 模式」</strong> 即可。TUN 模式会从网卡底层透明劫持游戏进程的 UDP 数据包。选用香港、日本或新加坡的 0 丢包专线节点，Steam 社区秒开，下载跑满百兆宽带，Apex / CS2 联机延迟稳定在 30ms 左右。"
        },
        {
          "title": "二、PS5 / Nintendo Switch 主机端代理配置步骤",
          "content": "1. 确保电脑与游戏主机连接在同一个家庭 WiFi 下；<br>2. 打开电脑端 Clash Verge -> 设置 -> 开启 <strong>「允许局域网连接 (Allow LAN)」</strong>；<br>3. 在电脑按下 <code>Win + R</code> 输入 <code>cmd</code>，执行 <code>ipconfig</code>，记下电脑的 IPv4 地址（如 192.168.1.100）；<br>4. 打开 PS5 或 Switch -> 网络设置 -> 选中当前 WiFi -> 更改设置 -> 找到「代理服务器」改为“启用”；<br>5. 填入电脑 IP（192.168.1.100）与端口（7890），保存测速！"
        }
      ],
      "faqs": [
        {
          "q": "为什么 Switch 联机报错 NAT 类型为 D/F 无法加入房间？",
          "a": "Switch 联机要求 Full Cone NAT。请在节点列表中切换标有「低延迟」、「游戏」或「FullCone」的原生专线节点即可变回 NAT A/B。"
        }
      ],
      "summaryTips": "用好 Clash 局域网共享与 TUN 模式，立省每年数百元游戏加速器年费，主机与 PC 畅快联机。"
    }
  },
  {
    "id": "lan-proxy-share",
    "slug": "lan-proxy-share",
    "question": "如何把电脑上的 Clash 代理共享给同一局域网的电视机或手机？",
    "shortAnswer": "在电脑端勾选“允许局域网连接 (Allow LAN)”，在电视或手机的 WiFi 代理设置中填入电脑的局域网 IP 与端口 7890 即可畅享大屏 4K 油管。",
    "category": "🎮 跨设备、软路由与游戏加速",
    "categorySlug": "devices",
    "tags": [
      "局域网共享",
      "电视盒子",
      "AppleTV",
      "AllowLAN"
    ],
    "updatedAt": "2026年最新",
    "views": "12,300",
    "detail": {
      "overview": "很多人家里买了索尼电视、小米电视或者 Apple TV，但电视系统上安装配置客户端较为繁琐。通过一台长期开机的电脑分享代理，是低成本看大屏 4K YouTube 的极速方案。",
      "sections": [
        {
          "title": "一、电脑端一键开启局域网共享服务",
          "content": "1. 打开电脑上的 Clash Verge / Mihomo Party；<br>2. 在主界面或设置页面找到 <strong>「允许局域网连接 (Allow LAN)」</strong> 开关，点击开启；<br>3. 记住默认的混合监听端口（默认通常是 <code>7890</code>）；<br>4. 查看电脑当前的内网 IP（例如：192.168.31.50）。"
        },
        {
          "title": "二、电视端 / 手机端极速对接操作",
          "content": "1. 打开智能电视或手机的无线网络设置；<br>2. 进入当前已连接 WiFi 的详情页面；<br>3. 找到「HTTP 代理 / 代理设置」，将模式从“无”修改为 <strong>「手动 (Manual)」</strong>；<br>4. 服务器主机名填写电脑 IP（如 192.168.31.50），端口填写 <code>7890</code>；<br>5. 点击保存，打开电视上的 SmartTube 或 YouTube 客户端，立刻秒开 4K！"
        }
      ],
      "faqs": [
        {
          "q": "为什么设置后电视还是无法联网？",
          "a": "排查电脑上的 Windows Defender 防火墙是否拦截了局域网入站请求。在控制面板防火墙中为 Clash 程序勾选允许专用网络入站通信。"
        }
      ],
      "summaryTips": "一台电脑开着 Clash，全屋手机电视共享加速，无需繁琐安装额外软件。"
    }
  },
  {
    "id": "telegram-connection-fix",
    "slug": "telegram-connection-fix",
    "question": "电脑连上了梯子，但 Telegram (电报) 依然一直转圈 Connecting 连不上怎么办？",
    "shortAnswer": "Telegram 桌面端默认不读取 Windows 系统代理。需在 Telegram「设置 -> 高级 -> 连接类型」中手动添加 SOCKS5 代理：127.0.0.1:7890，即可秒连。",
    "category": "🎮 跨设备、软路由与游戏加速",
    "categorySlug": "devices",
    "tags": [
      "Telegram转圈",
      "电报连不上",
      "Connecting",
      "SOCKS5代理"
    ],
    "updatedAt": "2026年最新",
    "views": "33,500",
    "detail": {
      "overview": "“浏览器看油管秒开 4K，但 Telegram 电脑版却一直转圈显示 Updating / Connecting”，这是超过 80% 的电报新手都曾遇到过的经典配置死锁难题。",
      "sections": [
        {
          "title": "一、为什么 Telegram 会无视 Windows 系统代理？",
          "content": "Telegram 桌面端（Telegram Desktop）为了极致的通信隐私与防追踪，默认采用了独立的网络连接栈，完全忽略了操作系统注册表中的 HTTP 代理设置。必须在电报内部手动指定代理端口，或者开启 TUN 模式从内核接管。"
        },
        {
          "title": "二、两种最彻底的秒连解决方案",
          "content": "<strong>方案 1：在 Telegram 内部手动填入 SOCKS5 代理（推荐）</strong>：<br>1. 打开 Telegram -> 点击左上角三道杠图标 -> 进入 <strong>「Settings (设置)」</strong>；<br>2. 点击 <strong>「Advanced (高级)」</strong> -> 选择第一项 <strong>「Connection type (连接类型)」</strong>；<br>3. 将模式从“Default”修改为 <strong>「Use custom proxy (使用自定义代理)」</strong> -> 点击「Add proxy (添加代理)」；<br>4. 选择 <strong>SOCKS5</strong> 协议，Hostname 填写 <code>127.0.0.1</code>，Port 填写 <code>7890</code>（若修改过端口请填你设置的端口）；<br>5. 点击保存！看到状态从 Connecting 瞬间变绿显示“Online”，聊天记录秒级加载！<br><br><strong>方案 2：开启 Clash 的 TUN 模式</strong>：<br>在 Clash Verge 中直接勾选 TUN 模式，所有应用无需任何设置自动穿透。"
        }
      ],
      "faqs": [
        {
          "q": "手机端 Telegram 怎么设置？",
          "a": "手机端只要 Clash 处于已连接状态（VPN 钥匙在顶栏），通常会自动接管；若转圈，同样在 Telegram 数据与存储 -> 代理设置中添加 SOCKS5 127.0.0.1:7890 即可。"
        }
      ],
      "summaryTips": "电报转圈别抓狂，进 Settings 填个 127.0.0.1:7890，一秒畅快收发群消息。"
    }
  },
  {
    "id": "privacy-security-risk",
    "slug": "privacy-security-risk",
    "question": "使用科学上网机场会有隐私安全风险吗？密码与支付信息会被截获吗？",
    "shortAnswer": "现代互联网全面基于端到端 TLS/HTTPS 高度加密，机场节点无法看到任何银行卡、密码与聊天内容；但建议避开未知免费节点以防 DNS 劫持。",
    "category": "🛡️ 隐私安全、协议原理与合规常识",
    "categorySlug": "security",
    "tags": [
      "隐私安全",
      "HTTPS加密",
      "密码安全",
      "银行卡支付"
    ],
    "updatedAt": "2026年最新",
    "views": "16,800",
    "detail": {
      "overview": "很多人在第一次使用机场翻墙时，都会有一个天然的顾虑：“我的所有流量都经过了机场的服务器，那我的谷歌密码、微信聊天、网银支付信息会不会被机场老板偷看呢？”答案从技术层面讲是非常明确的：绝对不会。",
      "sections": [
        {
          "title": "一、现代互联网的基石：HTTPS / TLS 端到端加密",
          "content": "当你在浏览器地址栏看到锁头标志（HTTPS）时，表明你的设备与目标网站服务器（如 google.com、paypal.com）之间建立了一条基于现代密码学（AES-256、ChaCha20）的专用加密信道。<br><br><strong>机场节点能看到什么？</strong><br>• 机场服务器只能看到你<strong>访问了哪个域名</strong>（例如知道你在访问 google.com）以及产生的<strong>数据包大小和时间戳</strong>。<br><br><strong>机场节点绝对看不到什么？</strong><br>• 你的登录账号与密码；<br>• 你的搜索关键词；<br>• 网页的具体聊天文字、图片与视频内容；<br>• 银行卡账号、CVV 码及支付交易详情。"
        },
        {
          "title": "二、真正的安全隐患有哪些？如何防范？",
          "content": "虽然加密保护了内容，但仍有两点需要引起警惕：",
          "listItems": [
            "<strong>不要使用来源不明的野鸡免费梯子</strong>：某些恶意免费节点可能会通过篡改未加密的 DNS 查询，诱导你点击虚假仿冒钓鱼网站；",
            "<strong>注意浏览器证书警告</strong>：如果访问任何网站时浏览器弹出“证书无效”或“此连接不安全”红色警告，切勿点击继续，应立即断开该节点；",
            "<strong>开启重要账户的两步验证 (2FA)</strong>：无论在何种网络环境下，为 Google、GitHub 等关键账户绑定 TOTP 手机验证器（如 Google Authenticator）是防盗的最强铠甲。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "机场后台会记录我的上网历史并长期保存吗？",
          "a": "正规专业机场每天承载数十甚至上百 TB 的庞大流量，服务器通常开启无日志（No-Logs）模式运行在内存中，根本没有物理硬盘空间去存储每个用户的访问历史。"
        }
      ],
      "summaryTips": "认准主流付费专线机场，结合现代 HTTPS 全站加密，您的账号密码与支付数据固若金汤，完全无需担忧信息泄露。"
    }
  },
  {
    "id": "shadowsocks-trojan-vless-protocols",
    "slug": "shadowsocks-trojan-vless-protocols",
    "question": "Shadowsocks、Trojan、VLESS、Hysteria2 协议有什么技术区别？哪个更快更稳？",
    "shortAnswer": "专线环境下 Shadowsocks/Trojan 性能最优且开销极小；公网高丢包环境下基于 UDP 的 Hysteria2 爆发力最强；综合全平台兼容性首选 Trojan / VLESS。",
    "category": "🛡️ 隐私安全、协议原理与合规常识",
    "categorySlug": "security",
    "tags": [
      "协议对比",
      "Shadowsocks",
      "Trojan",
      "VLESS",
      "Hysteria2"
    ],
    "updatedAt": "2026年最新",
    "views": "21,500",
    "detail": {
      "overview": "从最早的 SS/SSR 到后来的 V2Ray (VMess)、Trojan、VLESS 以及最新的 UDP 协议 Hysteria2，翻墙加密协议历经了数代迭代演进。理解协议特性有助于选择最适合自己网络环境的节点。",
      "sections": [
        {
          "title": "一、四大核心协议技术特征与优劣分析",
          "content": "• <strong>Shadowsocks (SS)</strong>：纯对称加密轻量协议。特点是头部无特征、CPU 计算损耗极低。在 IPLC/IEPL 内网专线环境下是当之无愧的性能之王，单节点轻松跑满 2.5Gbps；但在公网直连时容易被 GFW 识别主动探测。<br><br>• <strong>Trojan</strong>：完全模仿互联网最广泛的 HTTPS/TLS 握手通信。将加密流量完美伪装成正常的网站 HTTPS 访问，抗封锁性极强，全平台客户端支持极其完善成熟。<br><br>• <strong>VLESS (Meta/Xray)</strong>：去除了复杂的旧版加密校验，采用轻量化协议头，支持结合 XTLS / Reality 偷取真实海外大厂证书（如 Yahoo、Apple），在公网中继和直连环境下隐蔽性极高。<br><br>• <strong>Hysteria2 (歇斯底里)</strong>：基于 UDP / QUIC 协议定制的黑科技。拥有极度暴力主动的丢包重传算法。适合在校园网、劣质移动宽带等丢包率高达 30% 以上的恶劣环境下强行提速拉满带宽。"
        },
        {
          "title": "二、日常选购与节点连接建议",
          "content": "1. <strong>在 IPLC/IEPL 专线机场中</strong>：放心使用 <code>Shadowsocks</code> 或 <code>Trojan</code>，稳定不卡、省电省发热；<br>2. <strong>在普通公网中转中</strong>：优先选择 <code>Trojan</code> 或 <code>VLESS</code> 提高存活率；<br>3. <strong>在恶劣劣质弱网环境下</strong>：尝试 <code>Hysteria2</code> 体验起死回生。"
        }
      ],
      "faqs": [
        {
          "q": "协议会影响解锁流媒体吗？",
          "a": "不会！流媒体和 ChatGPT 解锁取决于出口机房的 IP 属性（原生家庭宽带 vs 广播机房），与隧道采用何种协议毫无关系。"
        }
      ],
      "summaryTips": "专线认准 SS/Trojan 极致轻快，弱网公网首选 VLESS/Hysteria2 强力抗阻。"
    }
  },
  {
    "id": "airport-runaway-warning",
    "slug": "airport-runaway-warning",
    "question": "机场跑路前通常有哪些征兆？如何规避资金与断网风险？",
    "shortAnswer": "反常征兆包括：突然推出“骨折级”低价终身套餐狂卷资金、Telegram 官方群开启全体禁言、节点大面积超时持续数周不维护等。",
    "category": "🛡️ 隐私安全、协议原理与合规常识",
    "categorySlug": "security",
    "tags": [
      "机场跑路",
      "跑路征兆",
      "风险防范",
      "备用节点"
    ],
    "updatedAt": "2026年最新",
    "views": "19,400",
    "detail": {
      "overview": "机场属于去中心化的第三方服务行业，行业门槛有高有低。从几万元成本的个人小作坊到拥有数百万级骨干专线的大型服务商并存。掌握机场“跑路前兆”，能让你在危险降临前及时止损并做好容灾。",
      "sections": [
        {
          "title": "一、机场跑路前的 5 大经典反常征兆",
          "content": "当一家机场出现以下两项以上的异常行为时，务必提高警惕：",
          "listItems": [
            "<strong>异常超低价促销疯狂吸金</strong>：平时年付 ¥200 的套餐，突然搞“限时 3 折”、“¥59 永久买断不限时”等反常识大促销，通常是最后割一波韭菜走人的前兆；",
            "<strong>官方 Telegram 群开启全员禁言</strong>：原本活跃的交流群突然被管理员设置为永久禁言，或者删除了历史所有讨论，只留单向公告频道；",
            "<strong>节点大面积变红长达一周以上无人修复</strong>：工单系统提问后几天没有客服答复，只推托说“在被黑客攻击”；",
            "<strong>官方网站频繁更换域名甚至无法解析</strong>：主站打不开，备用网址也无法加载；",
            "<strong>核心管理人员失联</strong>：TG 管理员长时间离线或销号。"
          ]
        },
        {
          "title": "二、保障网络永不失联的黄金避险法则",
          "content": "1. <strong>坚持选购运营时间久（2-3年以上）的老牌机场</strong>：老牌机场客户池稳定，每月有源源不断的可观续费收入，没有卷款跑路的动力；<br>2. <strong>坚持按周期支付，避免过长跨度投入</strong>：无论商家宣传多么天花乱坠，单笔投入最好控制在自己能够承受的试错范围内；<br>3. <strong>随时保留应急梯子（双机场准备）</strong>：在电脑中保留至少两家不同服务商的配置，鸡蛋绝不放在同一个篮子里。"
        }
      ],
      "faqs": [
        {
          "q": "如果机场真的跑路了，还能把钱追回来吗？",
          "a": "由于数字商品及海外支付网关结算的不可逆性，一旦无良商家跑路，资金几乎无法追回。因此防范于未然比事后维权重要一百倍。"
        }
      ],
      "summaryTips": "不贪图超低价“永久买断”，认准成熟老字号品牌；建立冷备方案，从容应对任何突发网络变故。"
    }
  },
  {
    "id": "wechat-alipay-usdt-payment-safety",
    "slug": "wechat-alipay-usdt-payment-safety",
    "question": "机场购买支持微信/支付宝/USDT，哪种支付方式更安全隐秘？",
    "shortAnswer": "微信与支付宝由第三方发卡/免签网关代收，账单仅显示普通日用商户名称；USDT加密货币具备最高等级的隐私匿名性，适合大额或极度注重隐私的用户。",
    "category": "🛡️ 隐私安全、协议原理与合规常识",
    "categorySlug": "security",
    "tags": [
      "支付安全",
      "微信支付",
      "支付宝",
      "USDT加密货币"
    ],
    "updatedAt": "2026年最新",
    "views": "15,600",
    "detail": {
      "overview": "在购买机场订阅结账时，通常会看到【微信支付】、【支付宝支付】以及【USDT-TRC20 加密数字货币】等选项。许多用户担心使用微信或支付宝付款是否会被网警查水表。",
      "sections": [
        {
          "title": "一、微信与支付宝在国内支付的真实机制",
          "content": "机场后台绝不会直接使用站长个人微信收款。正规机场通常接入境外的第三方免签收单网关或聚合支付通道：<br>• 当你扫码付款时，微信/支付宝账单上显示的商户名称通常是类似于“某某网络科技工作室”、“某某日用品超市”、“数字技术订阅服务”等普通商户流水；<br>• 在支付平台数据库中，这只是一笔普通的微额数字化消费，普通日常使用完全无需担心。"
        },
        {
          "title": "二、什么时候强烈推荐使用 USDT-TRC20？",
          "content": "• <strong>从事高频跨境大额交易或大宗采购</strong>；<br>• <strong>购买海外团队定制商业专线</strong>；<br>• <strong>对个人数字足迹隐私具有极致严苛要求的技术极客</strong>。<br>USDT 基于区块链去中心化钱包转账，无需绑定身份证、银行卡与手机号，提供真正的金融级隐私隔离。"
        }
      ],
      "faqs": [
        {
          "q": "支付宝购买会有被风控的风险吗？",
          "a": "偶有部分第三方收款码被支付宝系统提示“防欺诈风险提醒”，通常点击确认继续即可；如果多次拦截，可切换为微信通道或 USDT 付款。"
        }
      ],
      "summaryTips": "普通用户日常使用微信与支付宝支付完全安全省心；高隐私追求者首选 USDT 链上结账。"
    }
  },
  {
    "id": "compliance-disclaimer",
    "slug": "compliance-disclaimer",
    "question": "网站合规与使用声明是什么？如何合法合规使用网络？",
    "shortAnswer": "本站资讯与技术评测仅供计算机学术研究、文献检索及跨境商务外贸使用。请广大用户自觉遵守国家法律法规，文明健康使用互联网。",
    "category": "🛡️ 隐私安全、协议原理与合规常识",
    "categorySlug": "security",
    "tags": [
      "合规声明",
      "学术科研",
      "跨境商务",
      "文明上网"
    ],
    "updatedAt": "2026年最新",
    "views": "8,500",
    "detail": {
      "overview": "「机场clash (jichang-clash.xyz)」致力于为需要查阅全球学术文献、开源代码仓库、跨境电子商务以及国际商务交流的技术从业者提供客观、公正的网络工具性能评测与配置教程。",
      "sections": [
        {
          "title": "一、本站服务定位与免责声明",
          "content": "1. 本站为纯公益性质的计算机网络技术探索与资讯分享平台，<strong>本站自身不运营、不销售、不托管任何服务器节点或网络代理服务</strong>；<br>2. 站内所收录的机场品牌资料、测速截图与价格配套信息均采集自互联网公开资讯，仅作为网络性能测试横向参考，不对任何第三方服务商的商业行为与网络可用性承担连带担保责任；<br>3. 请用户在选购第三方网络服务时自行审慎甄别风险。"
        },
        {
          "title": "二、依法合规使用互联网倡议",
          "content": "我们强烈呼吁所有读者严格遵守所在国家与地区的法律法规，文明合规使用互联网：",
          "listItems": [
            "严禁利用海外网络工具从事任何危害国家安全、泄露国家机密、损害国家利益的行为；",
            "严禁浏览、传播散布任何涉及政治谣言、暴力恐怖、色情低俗或封建迷信的内容；",
            "尊重知识产权与数字版权，不参与非法侵权传播；",
            "合理利用全球优质开放教育与科研资源（如 Google Scholar、arXiv、GitHub、Coursera 等），赋能个人职业成长与科学技术研发。"
          ]
        }
      ],
      "faqs": [
        {
          "q": "外贸从业者与科研人员使用翻墙工具有法律风险吗？",
          "a": "企业与高校机构开展跨国商业外贸和科研文献检索，建议按照规范向电信运营商申报国际专线合规通道，自觉在学术与业务边界内文明合规使用。"
        }
      ],
      "summaryTips": "网络无界，法治有界。文明上网、合规自律，让前沿技术工具真正服务于科研创新与跨境经贸发展。"
    }
  },
    {
      "id": "transit-entry-speed-isp",
      "slug": "transit-entry-speed-isp",
      "question": "电信、联通、移动三大运营商对机场入口有何影响？为什么移动宽带特别挑机场？",
      "shortAnswer": "移动宽带由于国际公网出口带宽极度紧张，晚高峰丢包严重，对机场前置入口（如 CMIN2/BGP 三网聚合）要求极高；电信用户建议选择带 CN2/163 优化入口，联通用户国际互联最平顺。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "运营商宽带",
        "移动宽带",
        "电信CN2",
        "联通骨干网",
        "机场入口"
      ],
      "updatedAt": "2026年最新",
      "views": "18,920",
      "detail": {
        "overview": "很多用户购买了口碑极佳的机场却频繁卡顿，根本原因不是境外节点不给力，而是本地运营商（电信、移动、联通）到机场国内机房「前置入口」的网络互联质量差异悬殊。",
        "sections": [
          {
            "title": "一、三大运营商与机场国内入口的网络特性深度剖析",
            "content": "理解三大运营商的出入境网络路由差异是解决卡顿的第一步：",
            "listItems": [
              "<strong>中国移动（最挑机场）</strong>：移动骨干网（AS9808）庞大但国际公网出口极小，跨网到电信/联通机房晚高峰丢包高达 15%~30%。移动用户必须选择支持【移动专属 CMIN2 入口】或【华南 BGP 多线融合】的机场。",
              "<strong>中国电信（晚高峰拥堵两极分化）</strong>：普通 163 骨干网（AS4134）晚高峰国际出口极度拥堵；但电信自建了顶级高质量企业级 CN2 GIA（AS4809）网络。选择国内入口部署在上海/广州电信 CN2 节点的机场体验极佳。",
              "<strong>中国联通（国际互联相对最好）</strong>：联通 169 骨干网（AS4837）和高端 AS9929 对欧洲和美洲方向互联相对宽裕，抗封锁丢包表现均衡，适应性最广。"
            ]
          },
          {
            "title": "二、优质机场的「BGP 三网前置入口」是如何工作的？",
            "content": "廉价中转机场通常只租用单一电信机房作为全国唯一入口，移动用户接入时必须「跨运营商跨省绕行」，导致延迟从 20ms 飙升至 120ms。<br><br>优质机场会在广州、深圳、上海、徐州部署【BGP 多线机房】，电信走电信、移动走移动，就近直接打上内部 MPLS 标签接入跨境专线光纤，确保三大运营商用户无死角低延迟。"
          },
          {
            "title": "三、移动宽带用户的专项选购建议",
            "content": "移动宽带用户如果预算有限，务必牢记以下避坑准则：",
            "listItems": [
              "先购买 1 个月套餐，在晚上 20:30~22:30 高峰期进行实测，不要相信白天的测速图。",
              "优先使用节点列表里标记了「广移、深移、CMIN2」专属前缀的节点。",
              "如果当前节点卡顿，不要反复重测，直接切换至 BGP 智能分流入口。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "北方联通用户买深港专线延迟会不会太高？",
            "a": "北方地区（北京、山东、辽宁等）到深圳有大约 25~35ms 的国内物理传输耗时，总体延迟在 50~65ms 左右，对于看 4K 视频毫无影响；游戏用户更推荐选择沪日专线或京德专线。"
          }
        ],
        "summaryTips": "挑机场核心看本地运营商。移动用户选 CMIN2/BGP，电信用户选 CN2/专线，联通用户基本通吃。"
      }
    },
    {
      "id": "airport-fair-use-policy-fup",
      "slug": "airport-fair-use-policy-fup",
      "question": "什么是机场的「公平使用原则 (FUP)」？为什么不限量或大流量套餐有隐藏限制？",
      "shortAnswer": "跨境物理专线带宽成本极其昂贵，机场为避免个别极客 24 小时开 PT/BT 挂机占满千兆物理带宽造成晚高峰集体卡顿，会制定合理的单日峰值限速或连接线程限制机制。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "公平使用原则",
        "FUP政策",
        "不限速防刷",
        "机场限速",
        "大流量套餐"
      ],
      "updatedAt": "2026年最新",
      "views": "13,410",
      "detail": {
        "overview": "公平使用原则（Fair Use Policy, 简称 FUP）是全球电信运营商与优质商业机场通用的资源调配法则，旨在保障绝大多数正常用户的晚高峰带宽权益。",
        "sections": [
          {
            "title": "一、为什么专线机场不可能真正实现「无限制疯狂下载」？",
            "content": "家庭宽带的 1000M 是共享下行，而机房的跨境独享内网光纤带宽是按兆（Mbps）向中国电信或香港 PCCW 每月付费的。10Gbps 的物理专线光纤，如果允许 5 个人跑满 1000M 离线 BT 下载，就会直接霸占整条专线 50% 的带宽，导致其他数千名普通办公和刷视频的用户全线卡死。"
          },
          {
            "title": "二、商业机场常见的 FUP 限制手段",
            "content": "良性透明的机场会在服务条款中明文约定以下规则：",
            "listItems": [
              "<strong>单日流量消耗阶梯限速</strong>：如单日消耗超过 100GB，当日速率临时限制在 50Mbps，次日 0 点自动恢复满血千兆。",
              "<strong>并发连接线程数限制</strong>：限制每个订阅同时建立的 TCP 连接并发数（通常为 1000~3000 个），有效拦截自动化扫描和 P2P 泛洪攻击。",
              "<strong>自动化审计脚本</strong>：严禁使用节点进行 BT 种子做种、迅雷挂机与邮件垃圾群发。"
            ]
          },
          {
            "title": "三、正常用户如何避免触发 FUP 限制？",
            "content": "日常观看 YouTube 4K、Netflix 追剧、ChatGPT 与跨国远程会议，单日流量很少超过 30GB，永远不会触发 FUP。只要不在海外节点上挂载迅雷、qBittorrent 或搭建公开代理服务，均可享受全天候不限速待遇。"
          }
        ],
        "faqs": [
          {
            "q": "如果真要下载几十 GB 的海外大型游戏安装包怎么办？",
            "a": "Steam、Epic、PlayStation 均在境内部署了 CDN 加速，建议使用分流规则直接直连下载，不仅速度能跑满家庭千兆千兆宽带，还不扣除机场的珍贵专线流量。"
          }
        ],
        "summaryTips": "FUP 是保障晚高峰人人不卡的良性机制，尊重合规规则，让专线物尽其用。"
      }
    },
    {
      "id": "why-nodes-show-hk-tw-jp-sg-us",
      "slug": "why-nodes-show-hk-tw-jp-sg-us",
      "question": "为什么机场主流节点都是港/台/日/新/美？冷门国家节点（土耳其、阿根廷、尼日利亚）有何用途？",
      "shortAnswer": "港台日新美是全球海底光缆枢纽与云服务机房最密集的区域，延迟极低且网络冗余高；冷门地区节点主要用于流媒体跨区低价订阅、特定游戏锁区与当地电商运营。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "冷门节点",
        "香港节点",
        "流媒体跨区",
        "低价区订阅",
        "节点选择"
      ],
      "updatedAt": "2026年最新",
      "views": "15,830",
      "detail": {
        "overview": "打开任何机场的节点列表，排在最前面的几乎永远是香港、台湾、日本、新加坡和美国。理解不同节点的分工，能帮助你做出最合理的代理分流配置。",
        "sections": [
          {
            "title": "一、五大主力节点（港台日新美）的定位分工",
            "content": "各大主力节点在日常使用中的优势各不相同：",
            "listItems": [
              "<strong>香港（Hong Kong）</strong>：大陆直连物理延迟最低（深港仅 5~15ms），访问外贸网站首选，但因政策原因通常无法直接访问 ChatGPT 原版服务。",
              "<strong>台湾（Taiwan）</strong>：延迟在 30~45ms 之间，拥有独家动画疯（巴哈姆特）、繁体中文流媒体版权，且完美支持原生 ChatGPT 交互。",
              "<strong>日本（Japan）</strong>：国际出口带宽极其充沛，是玩外服游戏、看 DMM、AbemaTV 和 Google 全家桶的极佳中枢。",
              "<strong>新加坡（Singapore）</strong>：东南亚核心枢纽，IP 极其干净，绝大多数海外企业云端 SaaS 和 ChatGPT 均部署在此。",
              "<strong>美国（United States）</strong>：全球互联网中心，版权库最全（Netflix美区、Max、Hulu），也是办理海外银行开户和 AI 首发功能的首选。"
            ]
          },
          {
            "title": "二、土耳其、阿根廷、尼日利亚等冷门节点有何神效？",
            "content": "冷门节点平时不适合主力刷网页（延迟高达 200~350ms），但具有极高的商业与羊毛价值：",
            "listItems": [
              "<strong>数字游民低价区订阅</strong>：Spotify、YouTube Premium、Steam 换区在不同国家的官方定价相差数倍，冷门节点是换区不可或缺的工具。",
              "<strong>跨境电商本土化选品</strong>：Shopee、Lazada、美客多（Mercado Libre）商家需要模拟真实本土网络环境进行广告投放和价格监控。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "平时日常应该常驻哪种节点？",
            "a": "日常浏览建议常驻香港（延迟最低）或日本/新加坡（无任何 AI 服务阻断）。可在规则中配置 ChatGPT/Claude 走日本/新加坡，国内网站走直连。"
          }
        ],
        "summaryTips": "办公追剧选港台日新美，换区薅羊毛与特殊业务选冷门小众国家节点。"
      }
    },
    {
      "id": "clash-node-auto-switch-url-test",
      "slug": "clash-node-auto-switch-url-test",
      "question": "URL-Test（自动根据延迟选节点）好用吗？为什么经常导致网页突然断流或登录状态掉线？",
      "shortAnswer": "URL-Test 过于频繁依据毫秒级延迟波动切换节点，导致公网出口 IP 瞬间改变，触发网站异地安全风控强制登出或文件下载被阻断。日常推荐使用 Fallback（故障转移）或手动选择。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "URL-Test",
        "自动选节点",
        "断流掉线",
        "策略组配置",
        "Fallback"
      ],
      "updatedAt": "2026年最新",
      "views": "17,210",
      "detail": {
        "overview": "许多新手在 Clash 中迷信「自动选择 (URL-Test)」策略组，以为这能始终获得最快网速。实际上，盲目使用 URL-Test 是导致网络漂移、网站频繁要求验证码和网页加载到一半卡住的头号元凶。",
        "sections": [
          {
            "title": "一、URL-Test 的底层运行机制与缺陷",
            "content": "URL-Test 每隔一段时间（如 300 秒）向 Google 或 Cloudflare 测速链接发起并发 HTTP 请求，挑选返回最快的节点作为当前代理。<br><br>但互联网存在瞬时抖动。上一秒香港节点 30ms，下一秒日本节点 28ms，Clash 就会瞬间将流量切往日本。此时你的公网 IP 瞬间由香港跳到日本，浏览器保持的 TCP 长连接被强行切断，造成下载任务失败，银行或币安等金融后台直接判定账号被盗并强制踢出下线。"
          },
          {
            "title": "二、为什么 Fallback（故障转移）更适合作为主力策略？",
            "content": "与 URL-Test 的频繁漂移不同，Fallback 策略组按你设定的节点优先级排序工作：",
            "listItems": [
              "始终优先固定使用排在第 1 位的优质专线节点，只要该节点存活，绝不乱切，保证 IP 绝对稳定。",
              "仅当第 1 位节点发生物理故障彻底无法握手时，才在 2 秒内无缝滑行至第 2 位备用节点。",
              "一旦首选节点恢复健康，自动平滑切回。既保证了高可用，又消除了 IP 漂移风险。"
            ]
          },
          {
            "title": "三、最佳实操建议",
            "content": "办公或游戏用户，强烈建议直接在策略组中手动指定一条稳定高质量的专线节点；对于流媒体播放，可选用带有容差阈值（tolerance: 50ms）的平缓 URL-Test 策略组。"
          }
        ],
        "faqs": [
          {
            "q": "如何修改配置让 URL-Test 不那么敏感？",
            "a": "在配置文件策略组中加入 `tolerance: 80`（容差 80ms 以内不切换）并将 `interval: 600`（测速间隔延长至 10 分钟），可大幅减轻 IP 漂移。"
          }
        ],
        "summaryTips": "日常使用别无脑开 URL-Test，手动优选或 Fallback 故障转移才是网络稳定的长久之计。"
      }
    },
    {
      "id": "direct-vs-relay-iplc-cost",
      "slug": "direct-vs-relay-iplc-cost",
      "question": "为什么 IPLC/IEPL 顶级专线机场比普通公网中转贵 3-5 倍？机场带宽成本结构深度揭秘",
      "shortAnswer": "正规电信运营商跨境物理内网光纤带宽月租高达数百元/Mbps，加上前置 BGP 三网机房租金与两端冗余备用线路，刚性基础设施投入决定了专线机场的定价。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "专线成本",
        "IPLC带宽价格",
        "内网光缆",
        "机房中转",
        "机场揭秘"
      ],
      "updatedAt": "2026年最新",
      "views": "14,900",
      "detail": {
        "overview": "市面上机场价格悬殊，有的 5 元 1000G，有的 30 元 100G。许多用户疑惑为什么 IPLC 专线这么贵。深入了解机场背后的网络供应链与成本构成，能帮助你避开低价陷阱。",
        "sections": [
          {
            "title": "一、跨境物理专线光纤的刚性成本揭秘",
            "content": "IPLC/IEPL 是通过正规资质从中国电信、中国联通或香港 PCCW/HKT 租用的物理过境光缆。在企业级市场上，正规深港或沪日 1Gbps 专线的月租高达 2~4 万元人民币（约 20~40 元/Mbps/月）。<br><br>相比之下，普通境外 VPS 机房的公网带宽批发成本可能只要几毛钱 1TB。1000GB 的真实专线流量，单是底层光缆物理成本就占到了 15~20 元以上。"
          },
          {
            "title": "二、优质专线机场的隐藏配套成本",
            "content": "除了光纤租金，一家高可用机场还需维持昂贵的上下游架构：",
            "listItems": [
              "<strong>前置国内 BGP 接入点</strong>：多线 BGP 机房机柜托管费和防御 DDoS 的高防盾月租。",
              "<strong>双活光纤热备冗余</strong>：为主干专线购买第二条备用专线（如深港+广港互备），防止海底施工或光缆被挖断时业务停摆。",
              "<strong>境外优质落地机房</strong>：租用纯净原生双 ISP IP 网段用于解锁 Netflix 与 ChatGPT，月租费远超廉价机房 IP。"
            ]
          },
          {
            "title": "三、为什么 5 元 1000G 的超廉价机场容易跑路？",
            "content": "这类机场全部采用超售模式，一条公网小水管卖给数万人，白天或许能跑跑，一到晚上 8 点全员晚高峰立刻降至几 KB 甚至断网。一旦遇到机房查封，入不敷出往往直接关停跑路。"
          }
        ],
        "faqs": [
          {
            "q": "学生党买不起昂贵专线怎么办？",
            "a": "学生党和轻度用户建议选择提供「按量付费」或提供「小流量年付版（如 60GB/月 约8元/月）」的稳定专线机场，用量少但每次用都是极致稳定。"
          }
        ],
        "summaryTips": "一分钱一分货在网络世界是铁律。物理光缆成本摆在那里，宁要 100G 专线，不要 1TB 垃圾中转。"
      }
    },
    {
      "id": "airport-panel-vboard-sspanel",
      "slug": "airport-panel-vboard-sspanel",
      "question": "机场常见的 SSPanel 与 V2Board/Xboard 网站面板有什么区别？如何查看自己真实的在线设备与节点日志？",
      "shortAnswer": "V2Board/Xboard 采用前后端分离与高性能 API 架构，抗高并发防黑客攻击更佳；登录机场后台「个人中心 -> 审计日志/使用统计」可清晰查到近期连接客户端的公网 IP 及各节点消耗流量。",
      "category": "🛫 机场选购、专线原理与避坑",
      "categorySlug": "purchase",
      "tags": [
        "SSPanel",
        "V2Board",
        "Xboard",
        "机场面板",
        "在线设备查看"
      ],
      "updatedAt": "2026年最新",
      "views": "11,850",
      "detail": {
        "overview": "无论机场前端网站外观如何变化，后端管理核心主要基于开源的 SSPanel-UIM、V2Board 及其分支 Xboard 构建。掌握面板后台功能，能帮助你清晰掌控账户安全与设备并发情况。",
        "sections": [
          {
            "title": "一、主流机场面板的技术演进与特性对比",
            "content": "不同面板的技术栈与用户体验对比：",
            "listItems": [
              "<strong>SSPanel-UIM（经典老牌）</strong>：基于 PHP 开发的经典系统，节点列表展示丰富，支持每 1 小时流量折线图，但应对超大规模并发时后台容易卡顿。",
              "<strong>V2Board / Xboard（现代主流）</strong>：采用 Laravel + Vue/React 前后端分离架构，界面简洁现代，订阅下发速度极快，自带多币种结算与更严格的权限审计。"
            ]
          },
          {
            "title": "二、如何在面板后台排查「设备数超限」或「流量被盗」？",
            "content": "如果系统提示「超出允许的最大在线设备数」：",
            "listItems": [
              "登录机场官网，进入【个人中心】或【使用记录 / 订阅审计】。",
              "查看【在线客户端 IP 列表】，确认是否有未知的省份或 IP 在持续拉取节点。",
              "若怀疑订阅泄露，立即在面板点击【重置订阅链接 (Reset Token)】，原有的配置链接将立即失效，重新在客户端导入即可剔除盗用者。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "重置订阅后，我之前连接的节点会立刻断开吗？",
            "a": "不会立即断开已建立的连接，但下次客户端自动刷新节点列表或节点过期时就会失效。重置后在自己的客户端重新一键导入即可无缝接续。"
          }
        ],
        "summaryTips": "养成定期在面板后台查看在线设备与重置订阅的良好习惯，能彻底杜绝账号共享盗刷风险。"
      }
    },
    {
      "id": "clash-verge-rev-migration",
      "slug": "clash-verge-rev-migration",
      "question": "老版 Clash for Windows (CFW) 停止维护后，如何一键无缝迁移到 Clash Verge Rev 或 Mihomo Party？",
      "shortAnswer": "直接下载安装开源活跃的 Clash Verge Rev，复制原有机场订阅链接导入，选择 Mihomo 核心，原有的分流规则和节点 100% 兼容，并获得更低的系统占用与现代协议支持。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Clash for Windows",
        "Clash Verge Rev",
        "Mihomo Party",
        "软件迁移",
        "开源客户端"
      ],
      "updatedAt": "2026年最新",
      "views": "21,430",
      "detail": {
        "overview": "2023年末 Clash for Windows 核心作者宣布停止维护删库。很多用户电脑里仍残留老版 CFW，存在潜在系统兼容隐患且无法支持最新的 Reality/Hysteria2 协议。迁移至现代客户端极为简单且完全免费。",
        "sections": [
          {
            "title": "一、为什么必须淘汰老旧的 Clash for Windows？",
            "content": "停止维护带来的核心短板：",
            "listItems": [
              "<strong>底层 Electron 框架陈旧</strong>：老版 CFW 依赖极老版本的 Chromium，存在已知内存泄漏和远程代码执行安全隐患。",
              "<strong>不支持现代代理协议</strong>：新一代专线和防封节点大量使用 VLESS Reality、Hysteria2、TUIC 协议，老版 CFW 核心完全无法解析识别，导致节点全红超时。",
              "<strong>Windows 11 适配不佳</strong>：在 Windows 11 最新版本上经常出现虚拟网卡驱动崩溃或系统代理无法自动还原的问题。"
            ]
          },
          {
            "title": "二、三分钟无痛迁移实操流程（以 Clash Verge Rev 为例）",
            "content": "完整无损迁移步骤如下：",
            "listItems": [
              "<strong>第 1 步：彻底退出老客户端</strong>：右键退出旧版 Clash for Windows，确保任务栏托盘无图标，关闭并重置 Windows 系统代理。",
              "<strong>第 2 步：下载 Clash Verge Rev</strong>：访问 GitHub 官方开源发布页（Clash-Verge-Rev/clash-verge-rev），下载最新 `.msi` 或 64 位安装程序。",
              "<strong>第 3 步：导入原有订阅</strong>：打开软件，在左侧点击【订阅 (Profiles)】，将机场官网复制的 Clash 订阅链接粘贴进去并保存更新。",
              "<strong>第 4 步：开启系统代理与服务模式</strong>：在设置里安装【服务模式 (Service Mode)】，开启【TUN 模式】或【系统代理】开关，即可立即畅享加速。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Clash Verge Rev 和 Mihomo Party 有什么区别？",
            "a": "两者底层都使用现代高性能的 Mihomo (原 Clash.Meta) 核心。Clash Verge Rev 界面经典稳重，Mihomo Party UI 更现代灵动，两者体验均完胜老旧 CFW。"
          }
        ],
        "summaryTips": "拥抱开源社区活跃维护的 Clash Verge Rev，三分钟迁移彻底告别老软件兼容报错。"
      }
    },
    {
      "id": "sing-box-client-guide",
      "slug": "sing-box-client-guide",
      "question": "新一代 Sing-box 客户端与 Clash 相比有什么优缺点？普通用户有必要换吗？",
      "shortAnswer": "Sing-box 内存占用极度轻巧（仅20-30MB），对 Reality 和 Hysteria2 支持最底层；但其 JSON 配置门槛较高，生态可视化界面不如 Clash Verge 成熟。普通用户使用 Clash Verge Rev 最省心。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Sing-box",
        "Clash对比",
        "内存占用",
        "Reality协议",
        "客户端选型"
      ],
      "updatedAt": "2026年最新",
      "views": "16,770",
      "detail": {
        "overview": "Sing-box 是近年来声名鹊起的跨平台通用代理平台，被视为继 Shadowsocks、V2Ray、Clash 之后的第四代网络代理核心。在技术极客圈备受推崇，但对小白用户存在一定上手门槛。",
        "sections": [
          {
            "title": "一、Sing-box 的核心技术杀手锏",
            "content": "Sing-box 之所以受到众多高阶玩家喜爱，源于其纯粹底层的架构设计：",
            "listItems": [
              "<strong>极度省电与超低系统占用</strong>：完全用 Go 语言编写且杜绝冗余中间层，iOS/Android 待机几乎不耗电，PC 上后台仅占 15MB~30MB 内存。",
              "<strong>对新协议的第一方原生支持</strong>：VLESS-Reality、TUIC、Hysteria2 等前沿抗审查协议均在第一梯队原生完美支持。",
              "<strong>跨平台内核一致性</strong>：macOS、Windows、Linux、iOS、Android 乃至 Apple TV，全部使用同一套路由逻辑引擎。"
            ]
          },
          {
            "title": "二、普通用户为什么更建议坚守 Clash Verge Rev？",
            "content": "Sing-box 的最大短板在于「交互门槛」：",
            "listItems": [
              "<strong>配置文件门槛高</strong>：Sing-box 采用纯 JSON 格式，层级复杂严苛，稍漏一个逗号就会直接报错闪退。",
              "<strong>图形界面生态仍需磨合</strong>：相比 Clash 拥有十余年成熟的分流规则组和傻瓜化桌面客户端，Sing-box 官方 GUI 交互对新手相对硬核。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "什么情况下我应该考虑改用 Sing-box？",
            "a": "当你在老旧 Android 电视盒或内存仅有 512MB 的超低配 Linux VPS 软路由上运行时，Sing-box 的极低内存占用优势将无可替代。"
          }
        ],
        "summaryTips": "追求极致省电低占用选 Sing-box；日常 PC/Mac 图形化操作与看剧办公，Clash Verge Rev 依然是体验王者。"
      }
    },
    {
      "id": "apple-tv-proxy-guide",
      "slug": "apple-tv-proxy-guide",
      "question": "Apple TV (tvOS 17+) 如何免软路由直接实现全家大屏 4K 零配置科学上网？",
      "shortAnswer": "tvOS 17 原生开放了系统级 VPN 框架。只需在 Apple TV 登录美区/港区 App Store 下载 Shadowrocket、Surge 或 Loon，导入机场订阅并开启连接，客厅大屏电视即可秒开 4K Netflix 与 YouTube。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Apple TV",
        "tvOS 17",
        "Shadowrocket",
        "Surge tvOS",
        "家庭影院4K"
      ],
      "updatedAt": "2026年最新",
      "views": "19,850",
      "detail": {
        "overview": "在以前，想要在 Apple TV 上观看外网 4K 流媒体必须折腾复杂的旁路由、软路由或主路由刷固件。自苹果发布 tvOS 17 之后，系统正式开放了 VPN 网络扩展接口，让 Apple TV 独立运行代理软件成为现实。",
        "sections": [
          {
            "title": "一、tvOS 原生翻墙的前置准备",
            "content": "搭建独立大屏加速环境仅需满足以下三个条件：",
            "listItems": [
              "<strong>Apple TV 系统固件</strong>：确认系统已升级至 tvOS 17.0 或更高版本。",
              "<strong>境外 Apple ID</strong>：拥有美区、港区、日区等已购买 Shadowrocket（小火箭）或 Surge / Loon 的苹果账号。",
              "<strong>优质专线机场订阅</strong>：支持香港、台湾、日本、美国流媒体解锁的高速节点。"
            ]
          },
          {
            "title": "二、保姆级配置图文步骤（以小火箭 Shadowrocket 为例）",
            "content": "操作全程无需电脑连接：",
            "listItems": [
              "在 Apple TV 的【设置 -> 用户与账户】中添加你的美区 Apple ID，进入 App Store 下载 Shadowrocket。",
              "打开 Apple TV 端小火箭，屏幕会显示一个配置二维码或本地局域网管理网页地址（如 `http://192.168.1.100:8080`）。",
              "手机或电脑连入相同 WiFi，打开浏览器访问该地址，将你的机场订阅链接粘贴进去并点击同步更新。",
              "在电视上选择一个解锁良好的台湾或日本专线节点，点击连接开启系统 VPN。大屏打开 YouTube、Netflix、Disney+ 即可直接点播 4K 杜比视界高码率影片。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Apple TV 运行小火箭会影响客厅其他设备上网吗？",
            "a": "完全不会。tvOS 的 VPN 只在 Apple TV 本机生效，不改变路由器任何参数，手机和电脑依然走正常家庭 WiFi，互不干扰。"
          }
        ],
        "summaryTips": "tvOS 17 彻底终结了软路由时代，大屏电视买个小火箭直接实现 4K 零门槛追剧。"
      }
    },
    {
      "id": "clash-rules-geosite-geoip-update",
      "slug": "clash-rules-geosite-geoip-update",
      "question": "什么是 GeoSite 与 GeoIP 规则数据库？为什么建议定期自动更新？",
      "shortAnswer": "GeoSite 记录最新域名分类规则，GeoIP 记录全球 IP 归属地。海外 AI 与流媒体平台经常扩充新域名与 CDN 服务器网段，定期更新数据库能彻底避免境外服务被误走国内或国内直连变卡。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "GeoSite",
        "GeoIP",
        "分流规则库",
        "规则自动更新",
        "国内直连"
      ],
      "updatedAt": "2026年最新",
      "views": "15,100",
      "detail": {
        "overview": "Clash 之所以能聪明地区分「百度直连、Google 走香港、Netflix 走美区」，完全依赖于本地内置的 GeoSite (域名数据库) 和 GeoIP (IP 数据库)。它们相当于 Clash 的智能导航地图。",
        "sections": [
          {
            "title": "一、长期不更新规则数据库会引发的灵异现象",
            "content": "如果不定期更新这两大数据库，常见故障包括：",
            "listItems": [
              "<strong>ChatGPT / OpenAI 突然打不开</strong>：OpenAI 新增了类似 `chatgpt.com` 或内部验证域名，旧版规则无法匹配，导致流量走默认直连被阻断。",
              "<strong>国内 App 突然被误代理消耗翻墙流量</strong>：国内厂商（如字节跳动、腾讯）新增了部分海外 CDN 域名，旧版 GeoIP 误将其判为境外 IP 绕行海外。",
              "<strong>Netflix 提示版权受限</strong>：未能精准分流到专属解锁节点组。"
            ]
          },
          {
            "title": "二、如何在 Clash Verge Rev 中配置自动静默更新？",
            "content": "只需设置一次即可终身无忧：",
            "listItems": [
              "打开 Clash Verge Rev，进入左侧【设置 (Settings)】。",
              "找到【Mihomo 核心设置】或【外部资源 (Geodata)】设置项。",
              "将更新源切换为国内高速 CDN 镜像源（如 MetaCubeX/meta-rules-dat 镜像）。",
              "开启【自动更新 (Auto Update)】，设置更新周期为【每周 1 次】。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "更新 GeoSite 时下载失败怎么办？",
            "a": "因为 GitHub 存在网络阻断。先开启系统代理连接一个可用节点，再次点击手动更新，即可秒速完成下载。"
          }
        ],
        "summaryTips": "规则库是分流的大脑。每周自动更新一次 GeoData，保证 AI 和流媒体永远分流精准。"
      }
    },
    {
      "id": "clash-parser-yaml-custom-rule",
      "slug": "clash-parser-yaml-custom-rule",
      "question": "如何在 Clash Verge 中使用预处理配置（Parsers / Script）自定义添加个人分流规则？",
      "shortAnswer": "机场更新订阅时会覆盖本地规则。在 Clash Verge 的「预处理扩展脚本 (Script/Parsers)」中添加规则插入代码，每次更新订阅都会自动把个人的公司内网或特定游戏域名插入规则顶部且不被冲掉。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Clash预处理",
        "Parsers脚本",
        "自定义规则",
        "订阅自动合并",
        "配置进阶"
      ],
      "updatedAt": "2026年最新",
      "views": "13,980",
      "detail": {
        "overview": "很多用户想让公司内网系统走直连，或让特定的冷门外服游戏走日本节点。直接在下载下来的 yaml 文件里修改，下次点击「刷新订阅」就会被机场远程配置彻底覆盖。使用预处理脚本是唯一的优雅解法。",
        "sections": [
          {
            "title": "一、预处理脚本 (Parsers) 的工作原理",
            "content": "预处理脚本是一段轻量级的 JavaScript 或 YAML 代码。工作流如下：<br><br><code>从机场下载最新配置 -> 执行本地预处理脚本注入自定义规则 -> 生成最终生效配置并重启内核</code><br>由于脚本常驻于客户端本地，机场服务端更新永远无法覆盖你的私有规则。"
          },
          {
            "title": "二、实战代码：在规则最顶部插入个人分流",
            "content": "在 Clash Verge Rev 中打开【订阅】-> 右键目标订阅 -> 选择【编辑配置扩展/脚本】：",
            "listItems": [
              "<strong>编写规则注入代码</strong>：<br><pre class=\"bg-slate-900 text-sky-300 p-3 rounded-lg text-xs font-mono\">function main(config) {\n  config.rules.unshift(\n    'DOMAIN-SUFFIX,mycompany.com,DIRECT',\n    'DOMAIN-KEYWORD,steamcontent,DIRECT',\n    'DOMAIN-SUFFIX,openai.com,🎯 全球直连'\n  );\n  return config;\n}</pre>",
              "点击保存后，重新右键点击订阅【更新】。",
              "此时打开内核日志，即可看到自定义域名已成功在最高优先级生效。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "unshift 和 push 有什么区别？",
            "a": "Clash 规则是从上往下顺序匹配的。`unshift` 将你的规则插入最前面，确保最高优先级优先匹配；`push` 则是排在最后面，容易被前面的 MATCH 规则拦截。"
          }
        ],
        "summaryTips": "用扩展脚本管理自定义分流，既保留机场全套节点，又享有私人定制分流自由。"
      }
    },
    {
      "id": "linux-ubuntu-headless-clash",
      "slug": "linux-ubuntu-headless-clash",
      "question": "Linux / Ubuntu 无桌面服务器环境下如何运行 Mihomo 并配置后台开机自启系统服务？",
      "shortAnswer": "将 Mihomo 二进制文件拷贝至 /usr/local/bin，配置文件放置于 /etc/mihomo/config.yaml，编写 systemd 服务文件 `mihomo.service` 设置开机自启，搭配 export http_proxy 即可让服务器无人值守高速拉取代码。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Linux代理",
        "Ubuntu服务器",
        "Mihomo无头运行",
        "systemd服务",
        "终端代理"
      ],
      "updatedAt": "2026年最新",
      "views": "16,420",
      "detail": {
        "overview": "在云服务器、深度学习训练服务器或家庭 Linux 迷你主机上，没有安装 GUI 桌面环境。想要让 apt-get、docker pull、git clone 告别龟速卡顿，配置 Headless 运行的 Mihomo 是运维工程师与开发者的必备技能。",
        "sections": [
          {
            "title": "一、一键部署 Mihomo 二进制程序",
            "content": "使用 SSH 连接服务器后执行：",
            "listItems": [
              "下载对应 CPU 架构的 Mihomo 二进制包（如 `mihomo-linux-amd64-v1.x.x.gz`）。",
              "解压并赋予执行权限：<br><code>sudo mv mihomo-linux-amd64 /usr/local/bin/mihomo && sudo chmod +x /usr/local/bin/mihomo</code>",
              "创建配置目录并将你的机场订阅 yaml 拷贝过去：<br><code>sudo mkdir -p /etc/mihomo && sudo cp config.yaml /etc/mihomo/config.yaml</code>"
            ]
          },
          {
            "title": "二、配置 systemd 开机自启服务",
            "content": "创建守护进程单元文件 <code>sudo nano /etc/systemd/system/mihomo.service</code>，填入：",
            "listItems": [
              "<pre class=\"bg-slate-900 text-sky-300 p-3 rounded-lg text-xs font-mono\">[Unit]\nDescription=Mihomo Daemon Service\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nExecStart=/usr/local/bin/mihomo -d /etc/mihomo\nRestart=always\n\n[Install]\nWantedBy=multi-user.target</pre>",
              "重载并启动服务：<br><code>sudo systemctl daemon-reload && sudo systemctl enable --now mihomo</code>",
              "检查状态：<code>sudo systemctl status mihomo</code> 显示 active (running) 即大功告成。"
            ]
          },
          {
            "title": "三、让 Linux 终端环境变量生效",
            "content": "在 <code>~/.bashrc</code> 末尾添加快捷别名：<br><code>alias proxy='export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890'</code><br>终端输入 <code>proxy</code> 即可秒级开启代理，输入 <code>curl cip.cc</code> 查看当前境外出口 IP。"
          }
        ],
        "faqs": [
          {
            "q": "如何远程给 Linux 上的 Mihomo 切换节点？",
            "a": "在 config.yaml 中配置 `external-controller: 0.0.0.0:9090`，在本地电脑浏览器打开 yacd.metacubex.one，填入 Linux 服务器 IP 和端口，即可远程图形化选节点。"
          }
        ],
        "summaryTips": "Linux 下用 systemd 管理 Mihomo 是最稳健的方案，搭配环境变量实现随时随地高速出海。"
      }
    },
    {
      "id": "clash-web-ui-yacd-metacubexd",
      "slug": "clash-web-ui-yacd-metacubexd",
      "question": "如何开启并使用 Yacd 或 MetaCubeXD 网页仪表盘远程控制管理局域网中的 Clash 核心？",
      "shortAnswer": "在配置文件中设置 `external-controller: 0.0.0.0:9090` 和访问密码 `secret`，在局域网内任意手机或电脑浏览器打开 yacd.metacubex.one，填入 IP 与密钥，即可可视化监控实时网速与远程切换节点。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "Web UI",
        "Yacd仪表盘",
        "MetaCubeXD",
        "远程管理",
        "API端口"
      ],
      "updatedAt": "2026年最新",
      "views": "12,940",
      "detail": {
        "overview": "如果你的 Clash 运行在客厅软路由、NAS 虚拟机或没有显示器的 Linux 迷你主机上，利用纯网页端的 Yacd 或 MetaCubeXD 控制台，即可在 iPhone、iPad 或办公电脑上直观查看看板并一键测速切节点。",
        "sections": [
          {
            "title": "一、底层核心 API 参数配置",
            "content": "确保你的 Clash / Mihomo 配置文件（config.yaml）顶部包含以下关键字段：",
            "listItems": [
              "<code>external-controller: 0.0.0.0:9090</code>（绑定到 0.0.0.0 允许局域网外部设备访问，而非仅本机 127.0.0.1）。",
              "<code>secret: 'YourSecretPass123'</code>（设置访问口令，防止局域网内未经授权的设备篡改路由策略）。",
              "<code>external-ui: ui</code>（可选，若下载了本地静态 UI 文件夹，可直接通过 http://路由器IP:9090/ui 打开）。"
            ]
          },
          {
            "title": "二、连接 Web 仪表盘实操",
            "content": "操作非常简单直观：",
            "listItems": [
              "在局域网任意设备浏览器访问 <strong>https://yacd.metacubex.one</strong> 或 <strong>https://metacubex.github.io/metacubexd</strong>。",
              "在弹出的 API 设置框中，填入运行 Clash 的设备内网 IP（如 <code>http://192.168.1.1:9090</code>）和密钥。",
              "点击添加并连接，即可看到绚丽的实时流量柱状图、活跃 TCP 代理连接树以及全部节点策略组。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "网页提示 Failed to connect 控制器连不上？",
            "a": "排查三点：1. Linux/路由器系统防火墙是否开放了 9090 端口；2. 配置文件是否写成了 127.0.0.1:9090；3. 浏览器是否开启了某些拦截内网请求的广告插件。"
          }
        ],
        "summaryTips": "Web UI 让无头设备焕发新生，随时随地在手机浏览器上轻松掌控网络状态。"
      }
    },
    {
      "id": "windows-startup-silent-clash",
      "slug": "windows-startup-silent-clash",
      "question": "Windows 开机如何让 Clash Verge 静默开机自启并自动开启系统代理或 TUN 模式？",
      "shortAnswer": "在 Clash Verge「设置」中依次开启「开机启动」、「静默启动」并安装「服务模式」，勾选「自动开启系统代理/TUN」，即可实现开机不弹窗口、后台完全无感直接翻墙。",
      "category": "⚙️ 客户端安装、订阅导入与配置",
      "categorySlug": "client",
      "tags": [
        "开机自启",
        "静默启动",
        "Clash Verge设置",
        "TUN自动开启",
        "开机无感"
      ],
      "updatedAt": "2026年最新",
      "views": "18,460",
      "detail": {
        "overview": "很多用户每天开机都要手动去点开 Clash 图标，等待加载后再手动打开代理开关，非常繁琐。通过合理配置 Windows 权限与软件设置，开机后网络就是全程就绪的极速状态。",
        "sections": [
          {
            "title": "一、完美静默自启设置清单",
            "content": "打开 Clash Verge Rev 进入【设置】面板，逐项确认以下开关：",
            "listItems": [
              "<strong>开机启动 (Launch at Login)</strong>：开启。注册 Windows 自启动计划任务。",
              "<strong>静默启动 (Silent Start)</strong>：开启。核心要点！开启后启动时窗口直接最小化在任务栏托盘，不在桌面弹出大窗口干扰工作。",
              "<strong>自动设置系统代理 (Auto Set System Proxy)</strong>：开启。程序一旦运行自动激活 Windows Internet 选项代理开关。",
              "<strong>服务模式 (Service Mode)</strong>：点击安装并重启应用。这是 TUN 虚拟网卡能够无 UAC 弹窗免提权自启的核心。"
            ]
          },
          {
            "title": "二、为什么有时开机自启会失效？",
            "content": "若遇到开机后未启动，通常是以下原因拦截：",
            "listItems": [
              "<strong>第三方电脑管家拦截</strong>：360 安全卫士、腾讯电脑管家或火绒可能将自启项提示为「启动项优化」并被用户误点禁用，需在优化软件白名单中放行。",
              "<strong>权限不足</strong>：如果开启了 TUN 模式但未安装服务模式，Windows 会弹出 UAC 提权确认框阻断静默后台加载。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "开启静默启动后怎么唤出控制面板？",
            "a": "鼠标左键双击屏幕右下角托盘区的小猫/小飞船图标，或者右键点击选择「显示控制面板」即可随时唤出主界面。"
          }
        ],
        "summaryTips": "安装服务模式 + 开启静默自启，让科学上网像呼吸一样自然，开机即用。"
      }
    },
    {
      "id": "ssl-handshake-certificate-error",
      "slug": "ssl-handshake-certificate-error",
      "question": "开启 Clash 后访问网页提示 SSL 证书错误（NET::ERR_CERT_AUTHORITY_INVALID）如何彻底解决？",
      "shortAnswer": "90% 的 SSL 证书报错由电脑系统时间误差超过 60 秒引起；其余原因包括开启了第三方中间人 MitM 抓包解密或杀毒软件网络嗅探。核准系统时间、关闭本地抓包解密即可彻底消除警报。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "SSL证书错误",
        "证书无效",
        "系统时间同步",
        "MitM解密",
        "HTTPS报错"
      ],
      "updatedAt": "2026年最新",
      "views": "23,150",
      "detail": {
        "overview": "打开代理后浏览器突然弹出红色警报「您的连接不是私密连接」、「NET::ERR_CERT_AUTHORITY_INVALID」或「SEC_ERROR_UNKNOWN_ISSUER」，所有 HTTPS 网站均无法访问，让许多新手惊慌失措。",
        "sections": [
          {
            "title": "一、排查第 1 步：校准电脑本地时间（最高频元凶）",
            "content": "HTTPS 协议依赖于精准的 TLS 时间戳握手。如果电脑由于主板电池没电或时钟跑偏，时间比真实北京时间慢了几分钟或几天，浏览器会认为网站的 SSL 证书「尚未生效」或「已经过期」，从而直接切断连接。<br><br><strong>解决办法</strong>：进入 Windows【设置 -> 时间和语言 -> 日期和时间】，点击【立即同步】按钮，确保时钟精确到秒。"
          },
          {
            "title": "二、排查第 2 步：检查是否开启了 MitM 中间人解密 / 抓包软件",
            "content": "如果安装了 Fiddler、Charles 等抓包工具，或在配置中误启用了 HTTPS 解密插件：",
            "listItems": [
              "第三方工具在本地伪造根证书对流量进行解密，而浏览器不信任该自签名证书。",
              "关闭抓包软件，并在 Windows 证书管理器（`certmgr.msc`）中清除未知的受信任颁发机构测试证书。"
            ]
          },
          {
            "title": "三、排查第 3 步：卡巴斯基/ESET/杀毒软件网络安全扫描",
            "content": "某些重量级杀毒软件自带「扫描加密连接 (Scan encrypted connections)」功能，实质也是中间人解包。在杀毒软件设置中将 7890 代理端口排除或关闭该功能即可恢复正常。"
          }
        ],
        "faqs": [
          {
            "q": "时间已经同步了，但还是个别小网站报错怎么回事？",
            "a": "个别境外小众个人博客本身站长忘记续期 Let's Encrypt 证书，这属于网站自身问题，换无代理环境下打开同样会报错。"
          }
        ],
        "summaryTips": "遇到证书红屏报错，99% 先去点一下 Windows「立即同步时间」，秒解烦恼。"
      }
    },
    {
      "id": "git-clone-terminal-proxy",
      "slug": "git-clone-terminal-proxy",
      "question": "为什么 Windows CMD / PowerShell / Git Clone 不走 Clash 代理？如何一键配置终端命令行加速？",
      "shortAnswer": "Windows 命令行终端默认完全隔离并忽略系统图形界面的代理设置。在 PowerShell 中运行 `$env:all_proxy=\"http://127.0.0.1:7890\"` 或永久设置 `git config --global http.proxy` 即可秒速拉取 GitHub 代码。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "终端代理",
        "Git加速",
        "PowerShell配置",
        "npm/pip代理",
        "CMD代理"
      ],
      "updatedAt": "2026年最新",
      "views": "25,890",
      "detail": {
        "overview": "开发者最常遇到的困扰：浏览器明明能秒开 GitHub 网页，但在命令行里运行 `git clone`、`npm install`、`pip install` 或 `docker pull` 时，进度条却直接卡死超时。这是因为控制台命令默认不继承系统代理。",
        "sections": [
          {
            "title": "一、一键开启终端会话代理（即开即用）",
            "content": "无需修改系统全局配置，在打开的命令行窗口执行：",
            "listItems": [
              "<strong>PowerShell 用户</strong>：<br><code>$env:http_proxy=\"http://127.0.0.1:7890\"; $env:https_proxy=\"http://127.0.0.1:7890\"</code>",
              "<strong>CMD 经典终端用户</strong>：<br><code>set http_proxy=http://127.0.0.1:7890 && set https_proxy=http://127.0.0.1:7890</code>",
              "测试是否生效：在终端输入 <code>curl ipinfo.io</code>，返回的 IP 变成境外节点地址即代表加速成功。"
            ]
          },
          {
            "title": "二、永久配置 Git 专用加速",
            "content": "如果只需要 Git 仓库克隆加速，直接设置全局 Git 代理：",
            "listItems": [
              "开启代理：<code>git config --global http.proxy http://127.0.0.1:7890</code>",
              "开启加密：<code>git config --global https.proxy http://127.0.0.1:7890</code>",
              "如需关闭取消：<code>git config --global --unset http.proxy</code>"
            ]
          },
          {
            "title": "三、终极一劳永逸解法：开启 TUN 虚拟网卡模式",
            "content": "在 Clash Verge 中安装服务模式并打开【TUN 模式】。TUN 会在底层创建一个虚拟网卡，接管整台电脑的所有网络驱动层流量，此时无需任何命令行配置，所有终端命令天然全部走代理加速。"
          }
        ],
        "faqs": [
          {
            "q": "用 SSH 协议（git@github.com:...）克隆为什么不走 HTTP 代理？",
            "a": "SSH 走的是 22 端口专属协议，不认 HTTP 代理。建议在 `~/.ssh/config` 中配置 `ProxyCommand connect -S 127.0.0.1:7890 %h %p`，或直接改用 HTTPS 协议链接克隆。"
          }
        ],
        "summaryTips": "临时用环境变量，专业用 Git 全局代理，懒人用 TUN 虚拟网卡全盘接管。"
      }
    },
    {
      "id": "whatsapp-voice-video-call-delay",
      "slug": "whatsapp-voice-video-call-delay",
      "question": "WhatsApp 文本能正常发送，但语音/视频通话一直处于呼叫中或黑屏断线怎么办？",
      "shortAnswer": "WhatsApp 实时音视频基于 UDP / WebRTC 协议传输。若机场节点禁用了 UDP 或端口受限就会无法握手呼叫。请在客户端开启 TUN 模式，并切换为标有「全 UDP 支持 / IPLC 专线」的节点。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "WhatsApp通话",
        "WebRTC",
        "UDP转发",
        "STUN穿透",
        "外贸通讯"
      ],
      "updatedAt": "2026年最新",
      "views": "17,640",
      "detail": {
        "overview": "外贸业务员和跨国团队日常沟通中，经常遇到「WhatsApp 聊天发文字、发图片秒回，但一点语音或视频通话就一直显示“正在呼叫 (Calling)”，对方根本接不通」的怪异故障。",
        "sections": [
          {
            "title": "一、文本与通话在网络传输层的本质区别",
            "content": "文本消息使用的是标准的 TCP 协议长连接，只要节点能翻墙，即使质量一般的公网中转也能正常收发。<br><br>但语音通话和视频会议为了追求超低延迟，强制使用基于 UDP 的 WebRTC 协议和 STUN/TURN NAT 打洞技术。许多廉价机场为了节省资源或防止被滥用，在后端默认把 UDP 流量阻断了，直接导致音视频通话瞬间夭折。"
          },
          {
            "title": "二、三大排错与彻底解决实操",
            "content": "按顺序执行以下三步即可恢复通话：",
            "listItems": [
              "<strong>排查 1：开启 Clash Verge TUN 虚拟网卡模式</strong>：普通系统代理只接管浏览器和应用层的 TCP 流量，无法接管操作系统的原生 UDP 包。开启 TUN 模式能让 UDP 流量被完整封装转发。",
              "<strong>排查 2：切换全 UDP 支持的 IPLC 专线节点</strong>：在节点列表里挑选名称中注有「UDP、专线、无审计」的优质专线节点，避开标有「仅TCP」的低配节点。",
              "<strong>排查 3：确保分流规则无遗漏</strong>：确认配置中有包含 `DOMAIN-SUFFIX,whatsapp.net`、`DOMAIN-SUFFIX,whatsapp.com` 且没有被阻断规则拦截。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "iPhone 上小火箭用 WhatsApp 通话需要额外设置吗？",
            "a": "iOS 端小火箭默认通过 NetworkExtension 框架接管全局 IP 流量，自带 UDP 转发。只需确保所选节点在测试中 UDP 为通过状态即可。"
          }
        ],
        "summaryTips": "外贸高频音视频通话，必须选用全 UDP 支持的专线节点配合 TUN 模式。"
      }
    },
    {
      "id": "google-captcha-loop-unusual-traffic",
      "slug": "google-captcha-loop-unusual-traffic",
      "question": "访问 Google 搜索频繁弹出「检测到异常流量」人机验证点不完怎么办？",
      "shortAnswer": "这表明当前节点属于万人合用的低质机房 IP，且同网段内有人在批量爬取谷歌导致该 IP 被风控拉黑。切换为新加坡/日本等原生小众节点，或在分流规则中将 Google 绑定至冷门专线节点即可秒解。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "Google人机验证",
        "异常流量",
        "节点风控",
        "纯净IP",
        "Google分流"
      ],
      "updatedAt": "2026年最新",
      "views": "20,120",
      "detail": {
        "overview": "在 Chrome 中输入关键词回车，页面直接跳转到 `google.com/sorry/index?continue=...`，提示「我们的系统检测到您的计算机网络中存在异常流量」，必须反复点消防栓和红绿灯验证码，极大影响办公效率。",
        "sections": [
          {
            "title": "一、Google 触发异常流量风控的底层机制",
            "content": "Google 对来自机房数据中心（Datacenter）的出口 IP 进行自动化频率监控。如果同一个节点 IP 上有成百上千个用户在同时发起请求，或者有人利用该 IP 编写爬虫脚本高频抓取 Google 搜索结果，Google 安全系统就会判定该 IP 存在机器人攻击行为，强行下发 reCAPTCHA 验证码阻断。"
          },
          {
            "title": "二、彻底摆脱验证码死循环的有效方案",
            "content": "根据自身情况采取以下策略：",
            "listItems": [
              "<strong>避开最拥挤的香港大节点</strong>：香港由于延迟低，90% 的用户都在扎堆使用，IP 污染极重。将默认主力节点切换到新加坡、日本或台湾专线节点，验证码立马消失。",
              "<strong>登录个人 Google 账号</strong>：在 Chrome 浏览器中始终登录已绑手机号的稳定 Gmail 账号。Google 会给予高信誉账户更高的白名单豁免权，极少弹窗。",
              "<strong>使用优质专线机场的原生 IP 节点</strong>：优质机场会花重金采购住宅原生 IP（Residential ISP），Google 会将其识别为正常普通家庭宽带，完全不弹验证码。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "把 IPv6 关掉会对消除验证码有帮助吗？",
            "a": "有的机房 IPv6 网段被滥用得更厉害。在 Clash 中关闭 `ipv6: false` 强制走干净的 IPv4 专线，经常能奇迹般消除验证码。"
          }
        ],
        "summaryTips": "香港万人挤爆易弹验证码，切到新加坡/日本冷门节点，登录 Google 账号即可告别红绿灯。"
      }
    },
    {
      "id": "clash-memory-leak-cpu-high",
      "slug": "clash-memory-leak-cpu-high",
      "question": "Clash Verge / Mihomo 占用 CPU 居高不下或内存占用几个 GB 的原因与排查方法",
      "shortAnswer": "常见原因包括：日志级别误设为 `debug` 导致内存疯狂吞噬、规则集中配置了死循环无限递归、或启用了不兼容的大型 GeoIP 规则。将 Log Level 调为 `error` 并更新核心即可恢复至几十兆轻巧运行。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "内存泄漏",
        "CPU占用高",
        "日志级别",
        "Mihomo优化",
        "客户端卡顿"
      ],
      "updatedAt": "2026年最新",
      "views": "14,320",
      "detail": {
        "overview": "打开 Windows 任务管理器，发现 `clash-verge.exe` 或 `mihomo-windows-amd64.exe` 竟然吞噬了 20%~50% 的 CPU 资源，风扇狂转，甚至占用内存飙升至 2GB~4GB。这通常是由极端不合理的配置或死循环引发的。",
        "sections": [
          {
            "title": "一、高频病因 1：日志级别 (Log Level) 设为了 Debug",
            "content": "很多用户在调试网络时，误将日志级别改为了 `debug` 或 `info` 且忘记改回。在高速下载大文件时，每一秒钟产生成千上万条网络数据包日志，瞬间塞满内存缓冲区，导致 CPU 居高不下。<br><br><strong>对策</strong>：在设置中将日志等级（Log Level）直接调整为 <code>error</code> 或 <code>silent</code>，只在发生严重崩溃时记录，内存瞬间降回 30MB 左右。"
          },
          {
            "title": "二、高频病因 2：规则集 (Rule-Providers) 存在循环重定向",
            "content": "如果自行编写或合并了来自不同上游的 ruleset 规则库，当某个规则把未匹配流量指向某个策略组，而该策略组又递归回规则引擎时，会引发 CPU 核心死循环空转。<br><br><strong>对策</strong>：精简分流规则，更新至官方推荐的标准 ACL4SSR 或 Loyalsoldier 精简规则库。"
          },
          {
            "title": "三、高频病因 3：Mihomo 内核版本过旧存在已知 Bug",
            "content": "在 Clash Verge Rev 的【设置 -> 内核】中，点击【检查更新】，升级到最新的稳定版 Mihomo 核心，享受官方最新的内存垃圾回收（GC）性能优化补丁。"
          }
        ],
        "faqs": [
          {
            "q": "正常的 Clash 运行时内存占用应该是多少？",
            "a": "正常稳定的状态下，Mihomo 核心内存占用通常在 30MB ~ 70MB 之间，CPU 占用率低于 0.5%，完全不影响任何大型游戏和生产力渲染运行。"
          }
        ],
        "summaryTips": "关掉 Debug 冗余日志，升级最新 Mihomo 核心，瞬间告别风扇狂转与内存暴涨。"
      }
    },
    {
      "id": "dns-hijacking-pollution-china",
      "slug": "dns-hijacking-pollution-china",
      "question": "什么是 GFW 的 DNS 污染？Clash 是如何利用 Fake-IP 与 Redir-Host 技术防污染的？",
      "shortAnswer": "DNS 污染是防火墙在公网抢答错误的虚假 IP 地址。Clash Fake-IP 模式给境外域名在本地分配 198.18.x.x 虚构保留 IP，本地程序立即握手连接，真正的域名交给境外专线节点远程解析，彻底粉碎污染。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "DNS污染",
        "Fake-IP",
        "Redir-Host",
        "DNS防劫持",
        "域名解析原理"
      ],
      "updatedAt": "2026年最新",
      "views": "19,230",
      "detail": {
        "overview": "很多人只知道翻墙要买机场，却不知道 GFW 封锁网站的第一道也是最凶猛的防线叫「DNS 缓存污染（DNS Poisoning）」。搞懂 Fake-IP 原理，能让你彻底明白为什么 Clash 能做到毫秒级极速响应。",
        "sections": [
          {
            "title": "一、GFW 是如何实施 DNS 污染投毒的？",
            "content": "当你在浏览器输入 `twitter.com`，电脑向本地运营商 DNS 发起查询。GFW 的入侵检测系统在骨干网旁路监听，一旦识别到敏感域名，抢在真实的海外 DNS 服务器应答之前，伪造一个错误的 IP 地址（例如把推特解析到 127.0.0.1 或无关的虚假 IP）返回给你的电脑。<br><br>电脑拿到错误的 IP 去发起 TCP 握手，自然永远显示「连接超时，打不开网页」。"
          },
          {
            "title": "二、传统 Redir-Host 模式与现代 Fake-IP 模式的交锋",
            "content": "代理工具为了攻克这一问题演进了两种方案：",
            "listItems": [
              "<strong>传统 Redir-Host（真实 IP 模式）</strong>：电脑发起查询后，Clash 拦截并强行通过境外专线去海外询问真实的 IP，拿到真实 IP 再发回给电脑。缺点是每次解析必须等待跨国网络往返，网页初次打开有 1~2 秒的明显停顿感。",
              "<strong>现代 Fake-IP（虚构 IP 模式，推荐）</strong>：电脑发起查询时，Clash 根本不问海外，而是 0.1 毫秒内当场生成一个 `198.18.0.x` 的保留内网假 IP 扔给浏览器，并在本地维护一张字典映射表。浏览器毫无察觉立刻建立连接，Clash 在底层接管数据包，直接把原始域名交给境外专线节点去远端解析。省去了客户端等待 DNS 的过程，体验如丝般顺滑！"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Fake-IP 模式下用 ping 命令测域名，为什么全显示 198.18.x.x？",
            "a": "这是 100% 正常的现象！正是因为返回了 198.18 假 IP，流量才能被本地 Clash 驱动精准捕获并透明转发，这证明 Fake-IP 正在完美发挥防污染作用。"
          }
        ],
        "summaryTips": "Fake-IP 模式不仅杜绝了 DNS 污染，更省去了跨国解析延迟，是现代科学上网的首选模式。"
      }
    },
    {
      "id": "udp-proxy-game-voice-discord",
      "slug": "udp-proxy-game-voice-discord",
      "question": "Discord 语音频道进不去一直处于「RTC Connecting」或无声音掉线怎么办？",
      "shortAnswer": "Discord 语音通话走 UDP 传输。确认在 Clash 策略组中为 Discord 启用了带有 `udp: true` 标识的节点，同时开启 TUN 虚拟网卡模式，确保所有 UDP 语音包不被本地防火墙丢弃。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "Discord语音",
        "RTC Connecting",
        "Discord加速",
        "UDP语音包",
        "游戏开黑"
      ],
      "updatedAt": "2026年最新",
      "views": "18,970",
      "detail": {
        "overview": "国内游戏玩家和 Web3 社区在日常使用 Discord 时，文字聊天、刷帖子、发表情包一切正常，但只要一点进语音频道，状态条就永远卡在黄色的「RTC 连接中 (RTC Connecting)」或红色的「无路由 (No Route)」，死活听不到队友说话。",
        "sections": [
          {
            "title": "一、RTC Connecting 的底层故障成因",
            "content": "Discord 客户端架构分为两部分：<br>1. 文本交互与频道列表走基于 HTTP/Websocket 的 TCP 协议。<br>2. 语音流、屏幕共享走严苛的端到端 WebRTC UDP 协议。<br>由于普通 Windows 系统代理只转发 TCP 流量，语音数据包直接被系统底层丢弃；或者所使用的机场节点未开放 UDP 转发端口（NAT 受限）。"
          },
          {
            "title": "二、手把手排错与彻底修复方案",
            "content": "遵循以下排查流程即可恢复开黑语音：",
            "listItems": [
              "<strong>第 1 步：安装服务模式并开启 TUN 模式</strong>：在 Clash Verge 中安装 Service Mode，开启 TUN 模式开关。只有 TUN 虚拟网卡才能完整接管 Discord 的全部底层 UDP 数据包。",
              "<strong>第 2 步：选择全 UDP 支持的低延迟专线节点</strong>：在节点列表切换至标有「IPLC 专线」或支持 UDP 的新加坡/日本节点，避免使用廉价低配公网节点。",
              "<strong>第 3 步：更改 Discord 客户端内部设置</strong>：进入 Discord【用户设置 -> 语音和视频】，将【音频子系统】从 Standard 改为【Legacy (旧版)】，并将【高质量服务数据包优先级 (QoS)】关闭。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "网页版 Discord 语音能进，为什么桌面客户端进不去？",
            "a": "浏览器自带 WebRTC 代理穿透支持，而独立客户端直接调用 Windows 系统的 Winsock 接口，因此客户端必须依赖 TUN 模式才能把 UDP 语音流导出去。"
          }
        ],
        "summaryTips": "Discord 语音开黑必须靠 TUN 模式配合 UDP 专线节点，两步设置即刻畅聊无阻。"
      }
    },
    {
      "id": "clash-node-yellow-high-ping-meaning",
      "slug": "clash-node-yellow-high-ping-meaning",
      "question": "Clash 节点测速显示的绿色、黄色、红色数字到底代表什么？为什么几百毫秒延迟看 4K 视频却很流畅？",
      "shortAnswer": "测速数值仅代表 HTTP 握手的「首包往返响应延迟」，不代表实际可用带宽吞吐量。美区节点跨太平洋物理光纤距离必然在 150-200ms（黄色），但只要带宽冗余足且丢包率低，看 4K/8K 视频依然满速秒开。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "延迟误区",
        "Ping值解析",
        "带宽吞吐量",
        "首包时间",
        "测速真相"
      ],
      "updatedAt": "2026年最新",
      "views": "16,810",
      "detail": {
        "overview": "很多新手用户打开节点列表，只敢选 20ms 的绿色香港节点，看到 180ms 的黄色美国节点就认为「网速很慢不能用」。这其实是把「延迟 (Latency)」与「带宽吞吐量 (Bandwidth)」混为一谈的典型认知误区。",
        "sections": [
          {
            "title": "一、Clash 客户端测速小圆点的真实原理",
            "content": "当你点击测速按钮时，Clash 发起的是一个极小的 HTTP HEAD 请求（向 Cloudflare 或 Google 测速接口）。<br><br>它测量的是：<code>本地发起请求 -> 国内入口 -> 跨境专线 -> 落地机房 -> 目标服务器 -> 原路返回</code> 的单次往返时间（RTT）。由于光在光纤中的传播速度物理极限约为每秒 20 万公里，中美相隔上万公里，单程物理传播时间就必须耗费 70ms，往返必然在 140ms~200ms 之间，这是宇宙物理学定律，神仙也无法把美国节点做到 20ms。"
          },
          {
            "title": "二、不同业务对「延迟」与「带宽」的敏感度对比",
            "content": "选择节点必须因地制宜：",
            "listItems": [
              "<strong>高延迟敏感型（必须选绿字低 Ping，如港台日 15~50ms）</strong>：外服竞技联机对战（CS2、APEX、Valorant）、跨国实时金融炒币高频交易、Zoom 实时音视频会议。",
              "<strong>高带宽敏感型（黄字 150~200ms 毫无影响）</strong>：YouTube 4K/8K 视频缓冲、Netflix 追剧、Steam 跨国大文件下载。视频播放依赖的是持续的几十兆/秒的管道吞吐量，只要不丢包，200ms 延迟在视频首秒缓冲后就完全没有差别。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "什么情况下延迟数字才真正代表网络卡顿？",
            "a": "当测速出现「Timeout（全红超时）」或者延迟数字剧烈跳动（如上一秒 40ms，下一秒 800ms），表明网络出现了严重丢包与拥塞，此时才会真正造成刷网页断流卡顿。"
          }
        ],
        "summaryTips": "玩游戏炒币选绿色低延迟，看视频追剧只要不超时，黄色高带宽节点一样秒开 4K。"
      }
    },
    {
      "id": "onedrive-icloud-sync-fail-proxy",
      "slug": "onedrive-icloud-sync-fail-proxy",
      "question": "开启代理后 OneDrive、iCloud、网易云音乐或微信电脑版同步变慢甚至连接失败？",
      "shortAnswer": "微软、苹果及国内常用软件在大陆部署了密集的本土 CDN 边缘服务器。如果分流规则不完善误将它们走境外代理，绕道海外不仅极慢还触发国内账号异地风控。需在规则中确保将其指定为 DIRECT（直连）。",
      "category": "🛠️ 故障排查、全红超时与连不上网",
      "categorySlug": "troubleshooting",
      "tags": [
        "分流规则优化",
        "国内直连DIRECT",
        "OneDrive同步",
        "微信断网",
        "分流白名单"
      ],
      "updatedAt": "2026年最新",
      "views": "15,480",
      "detail": {
        "overview": "很多人一开启全局模式或使用了劣质的代理规则，微信收发文件变慢，网易云音乐灰色变多，OneDrive 上传卡在 0%，甚至银行 App 弹出风险提示。这都是因为「分流白名单（DIRECT）」被粗暴篡改所导致的。",
        "sections": [
          {
            "title": "一、为什么国内服务必须坚决走 DIRECT 直连？",
            "content": "国内头部互联网服务（微信、阿里、网易）以及跨国大厂的大陆服务（微软 Office 365 世纪互联、苹果中国区 iCloud 贵州机房），在全国各大省市都自建了距离你家几十公里的边缘机房。<br><br>直连时延迟只有 2~5ms，下载跑满百兆；一旦被代理规则强行抓取绕行到香港或美国节点再兜回来，不仅浪费珍贵的专线流量，还会被国内安全系统判定为「境外高危 IP 异常登录」。"
          },
          {
            "title": "二、三分钟恢复国内软件正常速度实操",
            "content": "排错与修复指南：",
            "listItems": [
              "<strong>切勿常驻 Global（全局模式）</strong>：日常使用必须保持在【Rule（规则分流）】模式，绝不能无脑开启全局代理。",
              "<strong>更新成熟的国内域名直连规则库</strong>：在规则设置中确保引入了 `geosite:cn` 与 `geoip:cn`，并将匹配目标无条件设为 `DIRECT`。",
              "<strong>单独补充自定义直连规则</strong>：如果特定软件（如公司 OA、百度网盘、微信）依然走代理，在预处理脚本中加入：<br><code>DOMAIN-SUFFIX,wechat.com,DIRECT</code><br><code>DOMAIN-SUFFIX,live.com,DIRECT</code>（针对 OneDrive 同步）。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "国内部分大学校园网登录认证打不开怎么办？",
            "a": "高校登录网页一般属于内网私有 IP（如 10.x.x.x 或 192.168.x.x），在 Clash 的「跳过代理 (Bypass)」列表中加入校园网域名和内网网段即可。"
          }
        ],
        "summaryTips": "科学上网的核心精髓是「智能分流」：外网走专线飞驰，内网走本地直连毫秒响应。"
      }
    },
    {
      "id": "claude-ai-account-ban-risk",
      "slug": "claude-ai-account-ban-risk",
      "question": "注册和使用 Claude 3.5 Sonnet / Opus 频繁封号被封禁的底层风控逻辑与节点要求",
      "shortAnswer": "Anthropic 拥有全球最严苛的反欺诈风控体系，对机房数据中心（Datacenter）IP 实行无差别批量拉黑，且严密探测浏览器 WebRTC 真实 IP 泄漏。务必使用纯净原生住宅 IP，并全程保持固定地区不漂移。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "Claude封号",
        "Claude 3.5 Sonnet",
        "Anthropic风控",
        "纯净住宅IP",
        "WebRTC泄漏"
      ],
      "updatedAt": "2026年最新",
      "views": "26,450",
      "detail": {
        "overview": "目前全球 AI 产品中，Anthropic 旗下的 Claude 3.5 Sonnet 编程与写作能力封神，但其账号风控封杀也是最无情的。许多用户刚花 20 美元充值会员，两小时内账号就惨遭封禁（Account Disabled）。",
        "sections": [
          {
            "title": "一、Anthropic 核心风控侦测手段揭秘",
            "content": "Claude 的反作弊系统会全方位收集客户端指纹：",
            "listItems": [
              "<strong>IP ASN 类型审计</strong>：如果你的 IP 归属于 AWS、DigitalOcean、Linode、Cloudflare 等公网机房，直接进入高危风控池，注册即秒封。",
              "<strong>WebRTC 本地真实 IP 泄漏</strong>：浏览器即使开启了系统代理，WebRTC 接口仍然会向网页暴露你本地真实的中国大陆局域网/公网 IP，一抓一个准。",
              "<strong>时区、语言与节点归属地冲突</strong>：如果使用美国节点，但浏览器时区显示为 `Asia/Shanghai`，且系统语言为中文，系统直接标记为虚假代理欺诈。",
              "<strong>节点出口频繁漂移</strong>：上一条对话还在日本，下一条对话突然飘到英国，直接触发异地登录安全冻结。"
            ]
          },
          {
            "title": "二、打造 100% 稳妥不封号的 Claude 运行环境",
            "content": "严格遵循以下防封 Checklist：",
            "listItems": [
              "<strong>选用住宅 ISP 纯净节点</strong>：在专线机场中选择标有「原生双 ISP / 住宅 IP」的专线美国或新加坡节点，Fraud Score 必须低于 15 分。",
              "<strong>关闭浏览器 WebRTC 泄漏</strong>：在 Chrome 安装 `WebRTC Control` 插件，将其开关设为禁用（Disable WebRTC）。",
              "<strong>使用无痕窗口并固定节点</strong>：使用专用浏览器窗口，固定使用同一个节点，严禁频繁切换地区。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "如果不小心被封了，绑定的海外信用卡会受到牵连吗？",
            "a": "被封后绑定的虚拟卡通常也会被 Stripe 标记为风险卡，建议更换新的虚拟卡卡号与邮箱重新注册。"
          }
        ],
        "summaryTips": "用 Claude 绝不能省节点钱，纯净原生住宅 IP + 杜绝 WebRTC 泄漏是唯一长治久安之道。"
      }
    },
    {
      "id": "spotify-family-cross-region",
      "slug": "spotify-family-cross-region",
      "question": "Spotify 跨区换区与加入家庭组提示「您所在的国家/地区不一致」如何解决？",
      "shortAnswer": "Spotify 强制要求家庭组所有成员的主账号个人资料国家必须与车长（主账号）100% 完全一致。连接对应国家的代理节点后，进入 Spotify 网页个人档案中更改国家并保存，再点击家庭组邀请链接即可成功入坑。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "Spotify家庭组",
        "Spotify换区",
        "国家地区不一致",
        "音乐流媒体",
        "Spotify账号"
      ],
      "updatedAt": "2026年最新",
      "views": "17,310",
      "detail": {
        "overview": "Spotify 家庭组（Family Plan）由于性价比极高（人均每月仅几元钱），是全球最热门的音乐合租服务。但在接受车长邀请时，90% 的新手都会卡在报错页面「Looks like you're not in the same country as the plan manager」。",
        "sections": [
          {
            "title": "一、Spotify 判定国家/地区的底层逻辑",
            "content": "Spotify 客户端虽然允许在全球任何地方漫游听歌，但在「账单管理」与「家庭组归属」上实施了严格的属地限制：<br><br>家庭组的主账号如果是菲律宾区（PH），那么所有受邀成员账号的资料国家必须也是 PH；如果你的账号注册在美区（US），直接点击邀请链接系统就会判定跨区违规予以拦截。"
          },
          {
            "title": "二、三分钟手动修改 Spotify 账号国家教程",
            "content": "按照以下步骤操作，100% 成功入组：",
            "listItems": [
              "<strong>第 1 步：连接车长对应国家节点</strong>：询问车长家庭组属于哪个国家（如菲律宾、马来西亚、土耳其），在 Clash 中选择对应的节点并开启代理。",
              "<strong>第 2 步：登录网页端个人中心</strong>：在电脑浏览器打开 <strong>https://www.spotify.com/account/profile/</strong> 并登录你的账号。",
              "<strong>第 3 步：更改国家并保存</strong>：在【Country or region (国家或地区)】下拉菜单中，由于你当前正处于该国代理下，系统会自动出现该国选项。选中该国并点击底部【Save profile (保存资料)】。",
              "<strong>第 4 步：接受邀请并填写统一地址</strong>：重新打开车长发给你的家庭组邀请链接，输入车长提供的同款地址邮编，即可顺利加入！"
            ]
          }
        ],
        "faqs": [
          {
            "q": "为什么我的国家下拉菜单是灰色的无法更改？",
            "a": "如果你的账号当前仍有未到期的单独 Premium 付费订阅，系统禁止换区。必须等待当前单人订阅彻底过期恢复为 Free 免费版后，才能修改国家。"
          }
        ],
        "summaryTips": "换区核心是先连节点改网页资料，国家一致后填相同家庭地址，秒上车听无损好歌。"
      }
    },
    {
      "id": "youtube-premium-family-argentina-india",
      "slug": "youtube-premium-family-argentina-india",
      "question": "YouTube Premium 低价区跨区订阅（乌克兰、尼日利亚、阿根廷）防封与银行卡要求",
      "shortAnswer": "Google 目前对尼日利亚、阿根廷、土耳其等极低价区实施了严格的本地发卡行 BIN 限制和定期 IP 审查。目前最稳妥的折中区为乌克兰或菲律宾，推荐使用双币卡或转为加入信誉良好的合租车队。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "YouTube Premium",
        "跨区低价车",
        "乌克兰区",
        "Google风控",
        "家庭组车位"
      ],
      "updatedAt": "2026年最新",
      "views": "19,820",
      "detail": {
        "overview": "YouTube Premium 能彻底去广告、支持后台息屏播放并赠送 YouTube Music 权益。为了享受每月几块钱的超低资费，国内用户掀起了跨区订阅热潮。但近年来 Google 风控持续收紧，稍有不慎就会被强制退款退订。",
        "sections": [
          {
            "title": "一、Google 对各热门低价区的封锁现状",
            "content": "全球主要低价区的风控严格度盘点：",
            "listItems": [
              "<strong>阿根廷 / 土耳其（已被高度封锁）</strong>：Google 已强制要求必须使用该国本地银行发行的信用卡结算，国内招行、中行等双币卡直接被拒。",
              "<strong>尼日利亚 / 埃及（汇率极低但容易砍单）</strong>：虚拟卡开卡成本高，且经常收到 Google 发送的居住地验证警告信要求在 14 天内提交水电账单证明。",
              "<strong>乌克兰 / 菲律宾（目前最稳妥的白马区）</strong>：资费适中（家庭组人均每月 5~8 元），且广泛兼容国内各大银行发行的普通 Visa/Mastercard 双币借记卡或信用卡，极少发生大规模退订潮。"
            ]
          },
          {
            "title": "二、自建家庭组防翻车的核心原则",
            "content": "想要长期安稳使用，务必牢记：",
            "listItems": [
              "新建一个干净的 Google 小号作为车长，切忌使用绑定了大量重要个人资产的主 Gmail 开车，防止因扣费风控牵连日常办公。",
              "所有上车队员的 Google 账号在此前 12 个月内不能有更换其他家庭组的记录（Google 强制规定 1 年只能换 1 次组）。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "平时看 YouTube 必须一直开着乌克兰节点吗？",
            "a": "完全不需要！付款扣费成功后，平时看视频可以随意使用速度最快的香港、日本、新加坡专线节点，不限速享受 4K 去广告特权。"
          }
        ],
        "summaryTips": "跨区订阅首选乌克兰或加入稳定家庭组合租，付款一次，平时全速畅享 4K 影音。"
      }
    },
    {
      "id": "midjourney-discord-proxy-guide",
      "slug": "midjourney-discord-proxy-guide",
      "question": "国内使用 Midjourney AI 绘图，Discord 客户端与网页端的高清大图代理加速配置",
      "shortAnswer": "Midjourney 依赖 Discord 的 Websocket 长连接与图片 CDN 交互。客户端推荐开启 TUN 虚拟网卡模式，并为 `*.discord.com` 与 `*.discordapp.net` 统一绑定高速日本或美区专线，避免图片加载转圈。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "Midjourney加速",
        "Discord代理",
        "AI绘图",
        "CDN图片加载",
        "Websocket连接"
      ],
      "updatedAt": "2026年最新",
      "views": "15,900",
      "detail": {
        "overview": "国内众多原画师、设计师在日常使用 Midjourney 绘图时，经常遇到「Prompt 提示词发出去毫无反应、生成的 4 宫格预览图永远在转圈、点击 Upscale 高清大图无法下载」的痛点。这主要由 Discord 的图片 CDN 遭遇 GFW 干扰引发。",
        "sections": [
          {
            "title": "一、Midjourney 网络交互的双重通道",
            "content": "Midjourney 寄生在 Discord 平台内，其通信架构分为两截：<br>1. 与机器人交互的控制命令（/imagine）：走 Discord 网关长连接通道。<br>2. 生成的超清图片传输（PNG/WebP 静态资源）：部署在 Cloudflare CDN 与 AWS S3 存储桶（`cdn.discordapp.com` 与 `media.discordapp.net`）。<br>只要图床 CDN 域名有一点丢包，你的 Midjourney 生成结果就会呈现灰块或空白缩略图。"
          },
          {
            "title": "二、专业设计师的专属分流配置优化",
            "content": "通过以下设置保障绘图行云流水：",
            "listItems": [
              "<strong>启用 TUN 模式保障长连接永不掉线</strong>：避免网页版因为浏览器节能休眠切断任务轮询，优先使用 Discord 官方桌面客户端搭配 TUN 虚拟网卡。",
              "<strong>将 Discord CDN 强制分流到日本/美区优质专线</strong>：在分流规则中加入：<br><code>DOMAIN-SUFFIX,discordapp.com,🚀 优质专线</code><br><code>DOMAIN-SUFFIX,discordapp.net,🚀 优质专线</code>",
              "<strong>避免使用香港公网节点加载图床</strong>：香港部分公共 CDN 节点在晚高峰时期受到运营商 QOS 限速严重，切到日本节点秒出大图。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "为什么生成图片的速度有时几秒，有时要等几分钟？",
            "a": "这与网络无关，取决于 Midjourney 官方当前是 Fast Mode（快速模式）还是 Relax Mode（慢速排队模式），以及官方 GPU 服务器集群的全球负载。"
          }
        ],
        "summaryTips": "做 AI 绘图推荐 TUN 模式 + 日本专线节点绑定 Discord CDN，大图秒开、作图快人一步。"
      }
    },
    {
      "id": "hulu-hbo-max-prime-video",
      "slug": "hulu-hbo-max-prime-video",
      "question": "HBO Max (Max) 与 Amazon Prime Video 提示不在服务区或代理检测报错怎么办？",
      "shortAnswer": "Max 和 Prime Video 拥有仅次于 Netflix 的严密 IP 黑名单库，绝大多数常规公网机房 IP 会被直接识别为 VPN 封锁。需选择拥有原生双 ISP 住宅美区节点的专线机场，或通过 DNS 住宅流媒体劫持解锁。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "HBO Max",
        "Prime Video",
        "流媒体解锁",
        "原生美区IP",
        "版权限制"
      ],
      "updatedAt": "2026年最新",
      "views": "17,800",
      "detail": {
        "overview": "许多美剧发烧友为了追《龙之家族》、《最后生还者》或《黑袍纠察队》，购买了 Max（原 HBO Max）或 Amazon Prime Video 会员，但一打开播放器就遭遇当头一棒：提示「Service Area Restriction」或「Your device is connected to the internet using a VPN or proxy service」。",
        "sections": [
          {
            "title": "一、华纳 Max 与亚马逊的严苛风控逻辑",
            "content": "这两大平台的版权合规要求极高，其防翻墙机制比普通视频网站狠毒得多：",
            "listItems": [
              "<strong>Max（华纳兄弟探索）</strong>：不仅封杀机房 IP，还会持续扫描公网 IP 的反向 DNS（PTR）记录与欺诈分值。一旦识别到机房托管商直接断流并清退。",
              "<strong>Amazon Prime Video</strong>：深度集成 AWS 本土安全引擎，对同一出口 IP 的并发播放会话数极其敏感，万人合用的机场节点基本全部沦陷。"
            ]
          },
          {
            "title": "二、完美解锁的针对性实操攻略",
            "content": "想要稳定点播，核心在于节点的纯净度：",
            "listItems": [
              "<strong>必须使用美区「原生双 ISP 住宅 IP」节点</strong>：在专线机场中挑选标注有【美国-原生/流媒体解锁】的独立节点，双 ISP 属性会被流媒体平台判定为真实的美国本地家庭宽带（如 Comcast / AT&T）。",
              "<strong>清除浏览器残留 Cookie 与网站缓存</strong>：在重新连接节点前，务必按 Ctrl+Shift+Delete 清除浏览器的 Max/Prime 历史 Cookie，避免残留的机房探测标识被平台二次核对。",
              "<strong>关闭浏览器定位与 WebRTC</strong>：防止网页通过 HTML5 Geolocation API 获取到真实的物理经纬度。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "电视盒子上的 Max App 总是闪退或黑屏？",
            "a": "检查 Apple TV 或 Android TV 盒子的系统语言是否设置为了英文，并将时区调整为美国东部/太平洋时间，同时关闭盒子的定位权限。"
          }
        ],
        "summaryTips": "看 Max 与 Prime Video 认准双 ISP 原生美区节点，清理 Cookie 无痕畅看 4K 美剧。"
      }
    },
    {
      "id": "ip-pureness-fraud-score-test",
      "slug": "ip-pureness-fraud-score-test",
      "question": "如何自测机场节点的 IP 欺诈度（Fraud Score）与住宅 IP 纯净度？实用检测工具推荐",
      "shortAnswer": "打开浏览器访问 Scamalytics.com 或 ipinfo.io，输入当前节点外网 IP。若 Fraud Score 低于 20 且 Type 显示为 ISP（家庭宽带）即为顶级纯净 IP；若显示 Hosting 且评分高于 50 则属于高风控机房 IP。",
      "category": "🎬 流媒体、ChatGPT 与 AI 平台解锁",
      "categorySlug": "streaming",
      "tags": [
        "IP欺诈度",
        "Scamalytics",
        "IP纯净度检测",
        "原生IP测试",
        "风控检测"
      ],
      "updatedAt": "2026年最新",
      "views": "24,530",
      "detail": {
        "overview": "很多人在注册海外银行、ChatGPT Plus 绑定信用卡或申请 Stripe 时频繁被拒，根本不知道是当前代理节点的 IP 早就被各大风控机构列入了「黑名单」。学会自己检测 IP 欺诈分，是进阶外贸与跨境出海的基本功。",
        "sections": [
          {
            "title": "一、全球顶尖风控机构是如何评估一个 IP 的？",
            "content": "包括 Google、Stripe、Cloudflare、MaxMind 在内的安全厂商，主要通过两大核心维度打分：",
            "listItems": [
              "<strong>ASN 类型（Usage Type）</strong>：ISP（居民住宅家庭宽带，最高信用）> Business（商业写字楼专线，中等信用）> Hosting / Datacenter（云服务器机房，天然被怀疑是机器人代理）。",
              "<strong>欺诈风险分（Fraud Score 0-100）</strong>：根据该 IP 历史上有无垃圾邮件、DDoS 攻击、暴力破解和短时间高频刷单行为评分。0~15 分为极度安全，75 分以上为极度危险。"
            ]
          },
          {
            "title": "二、三大必备免费权威检测网站实操",
            "content": "连接好你的目标节点后，打开以下网址自测：",
            "listItems": [
              "<strong>Scamalytics (scamalytics.com/ip)</strong>：全球最通用的反欺诈数据库。直接展示清晰的风险仪表盘，如果显示绿色并且「Low Risk (0-20分)」，可放心进行敏感金融操作。",
              "<strong>IPinfo.io (ipinfo.io)</strong>：权威查看该 IP 的 ASN 类型，重点确认 `asn.type` 是否为 `isp` 还是 `hosting`。",
              "<strong>BrowserLeaks (browserleaks.com/ip)</strong>：全方位检测 WebRTC 泄漏、DNS 泄漏以及系统时区是否与 IP 物理归属地冲突。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "如果检测出 Fraud Score 是 80 分的高危节点，还能用来干嘛？",
            "a": "高分节点绝不能用于注册账号或银行转账，但用来日常看 YouTube 视频、下载 Steam 游戏或查阅公开技术文档毫无影响，不浪费带宽。"
          }
        ],
        "summaryTips": "做金融支付与 AI 注册前花 10 秒查一下 Scamalytics，低分纯净 IP 保你账号平安。"
      }
    },
    {
      "id": "synology-nas-docker-proxy",
      "slug": "synology-nas-docker-proxy",
      "question": "群晖 Synology NAS 与 Docker 容器（如 Jellyfin, Vaultwarden）如何配置走 Clash 代理加速拉取镜像？",
      "shortAnswer": "在群晖「控制面板 -> 网络 -> 常规 -> 代理服务器」中填入局域网内 PC 的 Clash 代理地址；或在 Docker Compose 配置文件中写入环境变量 `HTTP_PROXY` 与 `HTTPS_PROXY` 即可畅通拉取海外镜像。",
      "category": "🎮 跨设备、软路由与游戏加速",
      "categorySlug": "devices",
      "tags": [
        "群晖NAS",
        "Docker镜像加速",
        "NAS代理",
        "局域网代理",
        "私有云"
      ],
      "updatedAt": "2026年最新",
      "views": "17,120",
      "detail": {
        "overview": "NAS 玩家的头号噩梦：群晖 Container Manager (Docker) 拉取官方镜像总是提示超时失败、套件中心更新列表卡死、或者搭建的 Jellyfin 无法刮削海外电影海报（TheMovieDb 无法连接）。通过配置局域网代理，可以让 NAS 满血出海。",
        "sections": [
          {
            "title": "一、方案 A：为群晖 DSM 系统全局配置局域网代理",
            "content": "前提条件：同局域网内的某台电脑开着 Clash 并勾选了「允许局域网连接 (Allow LAN)」：",
            "listItems": [
              "登录群晖 DSM 后台，进入【控制面板 -> 网络 -> 常规】。",
              "在页面底部勾选【通过代理服务器连接】。",
              "在代理服务器地址中输入运行 Clash 的电脑内网 IP（例如 `192.168.1.50`），端口填 `7890`。",
              "点击应用，此时群晖系统套件更新、NTP 校时即可恢复正常。"
            ]
          },
          {
            "title": "二、方案 B：为 Docker 容器单独注入代理环境变量（推荐）",
            "content": "很多容器（如 TheMovieDb 刮削器、qBittorrent）需要独立代理，可在 `docker-compose.yml` 中添加环境配置：",
            "listItems": [
              "<pre class=\"bg-slate-900 text-sky-300 p-3 rounded-lg text-xs font-mono\">services:\n  jellyfin:\n    image: jellyfin/jellyfin\n    environment:\n      - HTTP_PROXY=http://192.168.1.50:7890\n      - HTTPS_PROXY=http://192.168.1.50:7890\n      - NO_PROXY=localhost,127.0.0.1,192.168.0.0/16</pre>",
              "重新运行 `docker compose up -d`，容器内部出站请求即刻被无缝加速，刮削海报秒级呈现。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "电脑关机后 NAS 的代理不就失效了吗？",
            "a": "是的。因此对于重度 NAS 玩家，更推荐直接在 NAS 内部用 Docker 部署一个常驻运行的轻量级 Mihomo/Clash 容器，充当整个家庭的常开代理网关。"
          }
        ],
        "summaryTips": "局域网 Allow LAN + 环境变量代理，一举攻克群晖 Docker 镜像拉取与海报刮削超时难题。"
      }
    },
    {
      "id": "clash-full-cone-nat-switch",
      "slug": "clash-full-cone-nat-switch",
      "question": "游戏联机 NAT 开放指南：如何开启 Full Cone NAT 实现 NAT Type A / Open 极致流畅联机？",
      "shortAnswer": "在主路由器开启 UPnP 并确认光猫为桥接模式；在 Clash / Mihomo 配置中开启 `udp: true` 并选用 Full Cone 兼容核心。在 Switch 或 PS5 网络测试中即可由严苛的 NAT Type D/C 跃升为完全开放的 NAT Type A/B。",
      "category": "🎮 跨设备、软路由与游戏加速",
      "categorySlug": "devices",
      "tags": [
        "Full Cone NAT",
        "NAT类型优化",
        "Switch联机",
        "PS5联机",
        "NAT Type A"
      ],
      "updatedAt": "2026年最新",
      "views": "19,540",
      "detail": {
        "overview": "主机联机玩家（任天堂 Switch《喷射战士》、PS5《怪物猎人》、Xbox 联机）最怕的就是在房间里匹配不到人，或者进房间 3 分钟就报错提示通讯错误。这绝大多数是由 NAT 严格限制（NAT Type D 或 Symmetric 对称型 NAT）引发的。",
        "sections": [
          {
            "title": "一、四种 NAT 类型的联机兼容性法则",
            "content": "NAT 越开放，玩家之间的 P2P 直连打洞成功率越高：",
            "listItems": [
              "<strong>NAT Type A (Full Cone 完全圆锥型，最佳)</strong>：任何外网主机都能直接向内网打洞，无论跟全球哪个玩家联机都能秒进房间且不掉线。",
              "<strong>NAT Type B (Restricted Cone 受限圆锥型，良好)</strong>：绝大多数主流家庭网络标准状态，联机体验稳定。",
              "<strong>NAT Type C / D (Port Restricted / Symmetric 严苛，极差)</strong>：只能与 Type A 玩家匹配，如果两个玩家都是 Type C/D，系统直接判定无法建立 P2P 握手，联机必然失败。"
            ]
          },
          {
            "title": "二、软路由 / Clash 开启 Full Cone NAT 的关键步骤",
            "content": "彻底打通 NAT 管道实操：",
            "listItems": [
              "<strong>主路由层面</strong>：在家庭路由器后台开启【UPnP】和【NAT-PMP】功能，让主机能动态申请公网端口映射。",
              "<strong>Clash 核心配置层面</strong>：在 `config.yaml` 中配置启用 Full Cone 模式：<br><code>tun:\n  enable: true\n  stack: mixed\n  endpoint-independent-nat: true</code>（Mihomo 新版专属参数，真正实现端点无关的 Full Cone NAT）。",
              "<strong>选择支持 Full Cone 的专线节点</strong>：挑选在节点配置中明确开启了 `udp: true` 的 IPLC 专线节点。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "光猫路由模式会影响 Full Cone 吗？",
            "a": "影响极大！光猫路由 + 主路由会造成「双重 NAT (Double NAT)」，极难实现 Type A。强烈建议拨打 10000/10010 要求客服将光猫改为桥接（Bridge），由主路由负责 PPPoE 拨号。"
          }
        ],
        "summaryTips": "光猫桥接 + 路由器 UPnP + Clash 端点无关 NAT， Switch 瞬间秒变 NAT Type A 开黑超爽。"
      }
    },
    {
      "id": "openwrt-passwall-vs-openclash",
      "slug": "openwrt-passwall-vs-openclash",
      "question": "软路由科学上网插件 PassWall、OpenClash 与 HomeProxy 深度对比：哪个更稳定省 CPU？",
      "shortAnswer": "PassWall 架构轻巧、占用内存极小，是 J1900、硬路由等低算力设备的最佳选择；OpenClash 功能最强大、UI 交互完善且支持复杂策略组，适合 N100 等高性能软路由；HomeProxy 则专为 Sing-box 高效核心而生。",
      "category": "🎮 跨设备、软路由与游戏加速",
      "categorySlug": "devices",
      "tags": [
        "OpenClash",
        "PassWall",
        "HomeProxy",
        "软路由插件对比",
        "低功耗软路由"
      ],
      "updatedAt": "2026年最新",
      "views": "21,800",
      "detail": {
        "overview": "在软路由（OpenWrt / iStoreOS）领域，三大科学上网神级插件形成了三足鼎立之势。很多新手在刷机后不知道该装哪一个，盲目选择可能导致路由器 CPU 满载发热甚至断网死机。",
        "sections": [
          {
            "title": "一、三大主流软路由插件全方位特性横评",
            "content": "根据自身硬件配置和使用需求对号入座：",
            "listItems": [
              "<strong>OpenClash（综合之王，生态最全）</strong>：完整移植了 Clash 核心的所有能力。拥有精美的图形化仪表盘、强大的策略组切换以及自动更新规则，学习成本低。缺点是基于 Lua 编写，在低配路由上启动较慢，内存占用相对较大（约 80MB~150MB）。",
              "<strong>PassWall（经典轻量，低配神仙）</strong>：采用轻量级链式调用逻辑，支持多节点分流与自动容灾切换。对路由器 CPU 与内存极其友好，即使在老旧的 J1900、MT7621 或斐讯 N1 盒子上也能流畅如飞。",
              "<strong>HomeProxy（新一代先锋，专为 Sing-box 打造）</strong>：直接对接 Sing-box 内核，去除了冗余过渡层，网络转发吞吐量极高，跑满千兆 CPU 占用极低，但目前配置细节较多，适合高阶极客玩家。"
            ]
          },
          {
            "title": "二、实用的选型建议指南",
            "content": "根据硬件性能选型绝不会踩雷：",
            "listItems": [
              "<strong>硬件为 N100 / N5105 / J4125 / PC 虚拟机</strong>：性能富余，毫不犹豫首选 <strong>OpenClash</strong>，可视化体验与策略控制无可挑剔。",
              "<strong>硬件为 斐讯 N1 / 红米 AX6000 刷机 / 内存小于 512MB</strong>：坚决选 <strong>PassWall</strong>，保证家庭网络经年累月不重启不卡死。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "一个软路由里可以同时开启 OpenClash 和 PassWall 吗？",
            "a": "千万不可！两个插件都会抢占系统的 iptables / nftables 防火墙重定向链和 DNS 端口，同时开启必定导致路由网络死锁崩溃。"
          }
        ],
        "summaryTips": "性能强上 OpenClash 图形掌控，配置低上 PassWall 极致轻巧，按需选择稳如泰山。"
      }
    },
    {
      "id": "surge-ponte-mac-sdwan",
      "slug": "surge-ponte-mac-sdwan",
      "question": "如何利用 Surge Ponte 或 Tailscale 远程连接家中的代理，在户外享受家庭软路由高速网络？",
      "shortAnswer": "在家中常开的 Mac 或软路由上部署 Surge Ponte / Tailscale，手机安装配套客户端加入同一私有虚拟局域网。出门在外的 5G 网络下即可将默认网关一键借道家中的千兆专线代理，省电且无感。",
      "category": "🎮 跨设备、软路由与游戏加速",
      "categorySlug": "devices",
      "tags": [
        "Surge Ponte",
        "Tailscale虚拟内网",
        "异地组网",
        "远程代理",
        "家庭软路由出海"
      ],
      "updatedAt": "2026年最新",
      "views": "13,670",
      "detail": {
        "overview": "在家里我们花重金配置了顶级软路由和专线代理，全家畅享 4K 追剧。但一旦出门在外连接 5G 移动网络，手机就脱离了家庭网关。借助 SD-WAN 虚拟组网技术，出门在外的设备可以随时随地无感借道家中的网络出海。",
        "sections": [
          {
            "title": "一、方案 A：苹果生态神技 Surge Ponte 原生打洞",
            "content": "如果你有一台常驻家中的 Mac（如 Mac mini 软路由）：",
            "listItems": [
              "在 Mac 端 Surge 打开【Ponte】功能，绑定同一个 iCloud 账户。",
              "Mac 端会自动通过 NAT 打洞并在云端注册家庭网关专属虚拟加密通道。",
              "外出的 iPhone 打开 Surge，在策略组中即可看到「Home Mac」节点，选择该节点，手机所有的外网流量立刻经由家里的专线千兆高速转发，既安全又无需在手机上重复配置节点。"
            ]
          },
          {
            "title": "二、方案 B：全平台通用的 Tailscale 虚拟子网路由（免费推荐）",
            "content": "适用于 Windows、Linux、群晖和软路由环境：",
            "listItems": [
              "在软路由安装 Tailscale 客户端并宣告家庭子网路由：<br><code>tailscale up --advertise-routes=192.168.1.0/24 --advertise-exit-node</code>",
              "在 Tailscale 管理后台点击批准该设备作为【Exit Node (出口节点)】。",
              "在出差的手机或笔记本上打开 Tailscale App，勾选【Use Exit Node -> 家中软路由】。在星巴克或酒店连上公共 WiFi，网络直接穿透回客厅，享受家庭千兆防火墙保护与高速出海。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Tailscale 穿透的速度取决于什么？",
            "a": "取决于你家里家庭宽带的「上行速率 (Upload)」。国内家庭千兆宽带通常拥有 30Mbps~50Mbps 的上行带宽，足以在户外满足 4K 视频点播和网页浏览。"
          }
        ],
        "summaryTips": "利用虚拟组网将家中路由变成私人出海灯塔，户外 5G 无缝借道，安全又省心。"
      }
    },
    {
      "id": "meta-core-snell-hysteria2",
      "slug": "meta-core-snell-hysteria2",
      "question": "新一代 Hysteria 2 与 TUIC 协议相比传统协议在恶劣网络与防丢包方面有多强？",
      "shortAnswer": "Hysteria 2 基于 UDP (QUIC) 深度定制了自适应暴力拥塞控制算法，即使在网络丢包率高达 20%~30% 的极度恶劣跨国公网或晚高峰环境下，仍能主动探测并以极致效率把带宽拉满，是弱网晚高峰对抗断流的神器。",
      "category": "🎮 跨设备、软路由与游戏加速",
      "categorySlug": "devices",
      "tags": [
        "Hysteria 2",
        "TUIC协议",
        "QUIC抗丢包",
        "暴力拥塞控制",
        "晚高峰神器"
      ],
      "updatedAt": "2026年最新",
      "views": "18,220",
      "detail": {
        "overview": "传统协议（如 Shadowsocks、Trojan、VLESS-TLS）全都基于 TCP 传输。TCP 的天生缺陷在于「严格保证按序到达」：只要路上丢了一个数据包，后续所有数据包必须全部原地等待重传，导致晚高峰公网一丢包，网速瞬间从 100M 断崖跌至几 KB。Hysteria 2 彻底打破了这一枷锁。",
        "sections": [
          {
            "title": "一、Hysteria 2 的黑科技：自研拥塞控制算法",
            "content": "Hysteria 2 全面重构了 QUIC 传输层协议：",
            "listItems": [
              "<strong>基于 UDP 协议，无队头阻塞</strong>：数据包独立传输，个别丢包绝不影响其他网页元素或视频流的并行渲染加载。",
              "<strong>自适应 Brutal 拥塞控制</strong>：传统 TCP 遇到丢包会自动减速（以为是网络拥堵），而 GFW 的封锁机制恰恰是「故意制造恶性随机丢包」。Hysteria 2 能敏锐识别丢包类型，在丢包环境中依然敢于全力全速补发重传，直接强行跑满本地物理带宽。"
            ]
          },
          {
            "title": "二、普通用户该如何体验 Hysteria 2 的威力？",
            "content": "使用门槛极低：",
            "listItems": [
              "选择支持 Hysteria 2 协议的优质机场（节点名前通常标有 `Hy2`）。",
              "在电脑端使用内置 Mihomo / Sing-box 最新内核的客户端（如 Clash Verge Rev 最新版）。",
              "在移动 4G/5G 弱网、高铁移动中或偏远公网晚高峰时期连接该节点，你会惊奇地发现原本打不开的网页竟然秒开。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Hysteria 2 这么强，那还有必要买昂贵的 IPLC 专线吗？",
            "a": "Hy2 是在恶劣公网上的「抗造利器」，但仍走公网国际出口，物理延迟无法降低；而 IPLC 专线是「真内网光纤」，天生 0 丢包且超低延迟。两者定位不同：游戏与超低延迟选专线，弱网抗封锁大带宽选 Hy2。"
          }
        ],
        "summaryTips": "晚高峰恶劣网络与公网大丢包环境下，Hysteria 2 是真正力挽狂澜的抗断流神器。"
      }
    },
    {
      "id": "apple-private-relay-vs-clash",
      "slug": "apple-private-relay-vs-clash",
      "question": "苹果 iCloud+ 私密转送（Private Relay）与 Clash 代理可以同时开吗？会不会冲突？",
      "shortAnswer": "两者可以共存，但强烈建议关闭苹果私密转送。因为私密转送会强行使用苹果的 QUIC 双中继节点加密 Safari 浏览器的全部出站流量，导致本地 Clash 无法识别真实访问域名，造成分流失效或网页加载极其缓慢。",
      "category": "🛡️ 隐私安全、协议原理与合规常识",
      "categorySlug": "security",
      "tags": [
        "苹果私密转送",
        "iCloud+ Private Relay",
        "Safari代理冲突",
        "双重代理",
        "苹果生态"
      ],
      "updatedAt": "2026年最新",
      "views": "16,580",
      "detail": {
        "overview": "购买了苹果 iCloud+ 付费服务的 iPhone 和 Mac 用户，系统默认会推荐开启「iCloud 私密转送 (Private Relay)」。很多用户开启后发现 Safari 浏览器打开境外网站慢如蜗牛，甚至无法通过 Clash 策略组切换节点。",
        "sections": [
          {
            "title": "一、苹果私密转送的技术原理与冲突本质",
            "content": "苹果私密转送本质上是一个基于 QUIC 的「双重盲跳 VPN」：<br>1. 你的 Safari 请求首先被加密发送给苹果自建的第 1 入口中继服务器。<br>2. 苹果去除你的 IP 后，再加密转交给第三方合作机房（如 Cloudflare / Akamai / Fastly）的第 2 出口中继服务器发往目标网站。<br><br>当这个过程遇到本地 Clash 代理时，形成了「代理套代理」的死循环。Clash 只能嗅探到你在频繁连接苹果的加密 IP，完全看不到真实的网页域名，导致既有的智能分流规则全部沦为摆设。"
          },
          {
            "title": "二、官方推荐的设置方案",
            "content": "如果你已经在使用成熟的代理工具：",
            "listItems": [
              "<strong>关闭私密转送</strong>：在 iPhone【设置 -> 点击顶部 Apple ID -> iCloud -> 私密转送】，将其开关选择【关闭】。",
              "<strong>让 Clash 独占接管分流</strong>：Clash 本身支持强大的 DNS 劫持防护与分流，关闭私密转送后 Safari 浏览器即可恢复满速秒开，且能完美遵循分流规则。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "国区 Apple ID 会有私密转送吗？",
            "a": "由于法规要求，苹果从未在中国大陆地区的 Apple ID 和网络下开放私密转送功能，仅境外外区 Apple ID 才会出现该设置项。"
          }
        ],
        "summaryTips": "一山不容二虎。既然用了专线 Clash，关闭苹果私密转送能避免双重代理握手减速。"
      }
    },
    {
      "id": "vless-reality-vision-explained",
      "slug": "vless-reality-vision-explained",
      "question": "为什么 VLESS-Reality 成为新一代防封神仙协议？它与传统 TLS 域名伪装有何本质不同？",
      "shortAnswer": "传统 TLS 必须自购域名并申请合法证书，特征容易被识别针对。Reality 协议创新性地「借用」海外大型知名网站（如 Apple、Microsoft、Yahoo）的真实 TLS 握手特征，防火墙无论如何主动探测都无法分辨出是代理还是正常访问大厂官网。",
      "category": "🛡️ 隐私安全、协议原理与合规常识",
      "categorySlug": "security",
      "tags": [
        "VLESS-Reality",
        "TLS伪装区别",
        "抗主动探测",
        "偷证书原理",
        "防封协议"
      ],
      "updatedAt": "2026年最新",
      "views": "21,390",
      "detail": {
        "overview": "在 2024~2026 年的技术演进中，VLESS-Reality 成为了 Xray 团队最为骄傲的发明。它彻底解决了自建节点和高端机场被 GFW 主动嗅探（Active Probing）识别封锁的历史难题。",
        "sections": [
          {
            "title": "一、传统 TLS 伪装的致命软肋：域名与证书暴露",
            "content": "以前的 Trojan 或 V2Ray-TLS，必须自己购买一个域名，并为该域名申请免费的 Let's Encrypt 证书伪装成一个普通博客。但这种模式有两大破绽：<br>1. 你的自购域名刚注册没几天，访问量却异常巨大，特征极度明显。<br>2. GFW 防火墙会向你的服务器 443 端口主动发送垃圾探测包，如果回显内容或证书特征不自然，整机 IP 就会被直接拉黑封禁。"
          },
          {
            "title": "二、Reality 的神来之笔：无缝借壳偷梁换柱",
            "content": "Reality 协议打破常规，完全不再需要自建域名和申请证书：",
            "listItems": [
              "<strong>直接借用合法的全球大厂证书</strong>：配置时将目标指定为 `www.apple.com` 或 `gateway.icloud.com` 等知名合法境外服务。",
              "<strong>绝妙的非信任回落机制</strong>：当客户端携带合法的私钥密钥请求时，节点放行进入内部代理通道；一旦检测到 GFW 发起的恶意主动探测扫描，节点直接把流量原封不动转发给真正的苹果官网机房！GFW 探测到的完全就是 100% 货真价实的苹果官方服务器响应，根本无从下手封杀。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "Clash Verge 能用 Reality 协议节点吗？",
            "a": "只要 Clash Verge Rev 采用的是最新版 Mihomo (Clash.Meta) 内核，就全面原生支持 Reality 节点，导入后直接可用。"
          }
        ],
        "summaryTips": "借大厂真证书防主动探测，VLESS-Reality 是当今公网防封抗审查的天花板之作。"
      }
    },
    {
      "id": "airport-audit-rules-bittorrent",
      "slug": "airport-audit-rules-bittorrent",
      "question": "为什么 99% 的机场都严厉禁止使用 BT / PT / BitTorrent 种子下载？违规会导致什么后果？",
      "shortAnswer": "种子下载会并发成千上万个 P2P 暴力连接撑爆机房路由器，更致命的是境外版权方（DMCA）会向机房发送高额侵权罚单并强行查封没收服务器。机场部署了严格的自动化审计规则，一旦检测到种子流量将直接永久封号且不退款。",
      "category": "🛡️ 隐私安全、协议原理与合规常识",
      "categorySlug": "security",
      "tags": [
        "禁止BT下载",
        "PT下载",
        "机场审计规则",
        "DMCA版权投诉",
        "封号原因"
      ],
      "updatedAt": "2026年最新",
      "views": "20,440",
      "detail": {
        "overview": "很多人在机场使用条款（ToS）中都会看到一条加粗红字：「严禁使用本站节点进行 BT/PT/迅雷/磁力链接下载，违者直接删号封禁」。很多新手不理解为什么自己花了钱买流量却不能自由下载种子。",
        "sections": [
          {
            "title": "一、境外法律红线：毁灭性的 DMCA 版权巨额罚单",
            "content": "欧美对于影视、音乐和商业软件版权的保护极其严格。好莱坞电影制作方和软件厂商在全球骨干网常驻蜜罐监控，只要有 IP 参与了特定热门电影或游戏的种子做种传输：<br><br>版权方在 5 分钟内就会顺着 IP 向机房发出《数字千年版权法案 (DMCA)》侵权通知信。机房收到通知会立即对机场的服务器实施物理断网惩罚，并处以数百至上千美元的重金罚款。如果多次违规，机房会直接清退没收机场的整台服务器与押金！"
          },
          {
            "title": "二、物理层面的网络灾难：P2P 泛洪攻击",
            "content": "即使是下载开源 Linux 镜像等无版权争议的合法 BT：",
            "listItems": [
              "BT 客户端会同时向全球成千上万个对等节点（Peers）发起海量微小 UDP 连接，瞬间耗尽前置入口机房硬件交换机的 NAT 连接数表项。",
              "直接导致该节点上的其他几百名正常办公和看视频的用户网络瞬间瘫痪断网。"
            ]
          },
          {
            "title": "三、正确的种子下载姿势",
            "content": "下载 BT/PT 种子时，务必在 Clash 中将下载软件加入分流直连列表，或者直接关掉代理，使用家庭本地宽带直连下载，既不消耗珍贵专线流量，又保证千兆满速狂飙。"
          }
        ],
        "faqs": [
          {
            "q": "机场是如何知道我在下载 BT 种子的？",
            "a": "机场后端部署了精准的协议特征分析审计系统，能够毫秒级捕获 BitTorrent 握手特征包与已知 DHT 网络的信令交互，自动化执行实时熔断封禁。"
          }
        ],
        "summaryTips": "翻墙节点绝不碰 BT 种子，保护机场服务器稳定，也就是保护自己的账户安全。"
      }
    },
    {
      "id": "fingerprint-browser-anti-detect",
      "slug": "fingerprint-browser-anti-detect",
      "question": "跨境电商与推特/TikTok 多账号运营，防关联指纹浏览器配合机场代理的最佳实践",
      "shortAnswer": "指纹浏览器（如 AdsPower、Hubstudio）能隔离 Canvas、WebGL、时区与 Cookie 环境。配合代理时，严禁使用频繁变动出口 IP 的动态轮询节点；每个账号必须固定绑定单一独立地区的原生节点，保持登录环境终身一致。",
      "category": "🛡️ 隐私安全、协议原理与合规常识",
      "categorySlug": "security",
      "tags": [
        "指纹浏览器",
        "AdsPower",
        "多账号防关联",
        "跨境电商防封",
        "静态独立节点"
      ],
      "updatedAt": "2026年最新",
      "views": "17,790",
      "detail": {
        "overview": "跨境电商亚马逊卖家、TikTok 矩阵引流团队以及推特/Discord 运营者，经常需要在一台电脑上同时管理几十甚至上百个账号。如果操作不当，极易被平台算法判定为同一个人批量操作而遭遇「矩阵连坐封店封号」。",
        "sections": [
          {
            "title": "一、账号被平台关联识别的核心元凶",
            "content": "风控算法追踪账号关联主要依靠两大特征：",
            "listItems": [
              "<strong>硬件与系统指纹环境关联</strong>：相同电脑的 Canvas 绘图特征值、音频声卡上下文、显卡 WebGL 指纹以及本地 Cookie 缓存未彻底隔离。",
              "<strong>网络 IP 与地理位置关联</strong>：多个账号在同一个出口 IP 下登录，或者同一个账号在 10 分钟内由美国洛杉矶跳到日本东京，直接触发异地盗号风控。"
            ]
          },
          {
            "title": "二、指纹浏览器与代理配置的黄金铁律",
            "content": "防关联实操最高准则：",
            "listItems": [
              "<strong>一号一指纹一固定节点</strong>：每个账号在指纹浏览器（AdsPower / Multilogin / Hubstudio）中单独生成一套独一无二的环境档案，并且固定绑定该地区的同一个原生节点。",
              "<strong>严禁开启自动测速切换策略（URL-Test）</strong>：多账号运营最忌讳 IP 漂移，必须在策略组中严格指定单一固定节点，杜绝任何自动跳节点行为。",
              "<strong>时区与语言强制伪装一致</strong>：在指纹浏览器配置中开启【根据 IP 自动匹配时区与语言】，确保节点是洛杉矶，浏览器内部时区自动变成 America/Los_Angeles。"
            ]
          }
        ],
        "faqs": [
          {
            "q": "普通机场的共享节点能用来做亚马逊主账号防关联吗？",
            "a": "绝不建议！亚马逊主店铺极其娇贵，必须购买昂贵的「独享静态住宅原生 IP（Static Residential Proxy）」；普通机场的优质专线节点更适合用于 TikTok 养号引流、推特互动或社媒前台浏览。"
          }
        ],
        "summaryTips": "指纹浏览器隔绝硬件指纹，固定独立专线隔绝网络风险，双重护航确保多账号矩阵安稳长青。"
      }
    }
];

export interface FaqCategoryGroup {
  category: string;
  categorySlug: string;
  icon: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategoryGroup[] = [
  {
    category: "🛫 机场选购、专线原理与避坑",
    categorySlug: "purchase",
    icon: "🛫",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "purchase")
  },
  {
    category: "⚙️ 客户端安装、订阅导入与配置",
    categorySlug: "client",
    icon: "⚙️",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "client")
  },
  {
    category: "🛠️ 故障排查、全红超时与连不上网",
    categorySlug: "troubleshooting",
    icon: "🛠️",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "troubleshooting")
  },
  {
    category: "🎬 流媒体、ChatGPT 与 AI 平台解锁",
    categorySlug: "streaming",
    icon: "🎬",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "streaming")
  },
  {
    category: "🎮 跨设备、软路由与游戏加速",
    categorySlug: "devices",
    icon: "🎮",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "devices")
  },
  {
    category: "🛡️ 隐私安全、协议原理与合规常识",
    categorySlug: "security",
    icon: "🛡️",
    items: FAQ_ITEMS.filter(item => item.categorySlug === "security")
  }
];

export function getFaqBySlug(slug: string): FaqItem | undefined {
  return FAQ_ITEMS.find(item => item.slug === slug);
}

// 兼容旧 FaqSection 简单列表
export const FAQS = FAQ_ITEMS.slice(0, 6).map(item => ({
  q: item.question,
  a: item.shortAnswer,
  slug: item.slug
}));
