# 数据定义

## 数据目录定义

```
└── community
    ├── cn
    │   ├── beijing
    │   ├── hangzhou
    │   └── shenzhen
    ├── hk
    └── tw
        ├── kaohsiung
        ├── tainan
        └── taipei
```

Data 目录下区分不同的数据类型，比如 *community* 、*company*、*conference* 等。

数据类型的次一级为各国家与地区，国家和地区的格式遵循 [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 规范。

国家与地区的次一级数据为城市级别，所使用名称应为国际通用名称，而非普通的拼音拼写。

城市目录下一级为各项目的具体的 JSON，具体格式定义见下。

其中，数据类型、国家与地区、城市的目录下，各自有一个 `meta.json`，用于定义当前级别数据的基础信息。

## 语言相关的定义

在项目中，必然会涉及到多语言的问题，在多语言的设置中，使用 [RFC5646](https://tools.ietf.org/html/rfc5646) 中所定义的 *Language subtag plus Script subtag* 标签来完成各级数据的定义，如：

- **zh-Hans** ：简体中文
- **zh-Hant **：繁体中文
- **en-US**：美国英文



## Meta.json 定义

meta.json 的内容如下

```json
{
  "id":"beijing",
  "lang":{
		"zh-Hans":"",
    "zh-Hant":"",
    "en-US":""
   },
  "flag":"",
  "longitude":"",
  "latitude":""
}
```



## 数据条目定义

数据条目的内容如下

```json
{
	"id": "unique id",
	"lang": {
		"en-US": {
			"name": "name in different language",
			"description": "description in different language"
		}
	},
	"image": "image of group",
	"homepage": "home page url",
  "logo":"logo url",
	"twitter": null,
	"facebook": null,
	"github": null,
	"meetup": null,
	"googlegroup": null,
	"email": null
}
```

其中，

- **id**: 每个数据条目的唯一 ID，必填项。
- **lang**：该数据条目在不同语言下的信息，必填项。
- **image**：该数据条目的图片，图片应为 16:9 的比例，必填项。
- **homepage**：该数据条目的官网，如果没有官网，则需使用其他项目来填充，如使用 Facebook 主页、Github 主页等链接来替代。必填项。
- **logo**：该数据条目的 Logo ， Logo 应为 PNG 或 JPG 格式，其比例应为 1:1，如无则填 Null
- **twitter**：该数据条目在 Twitter 的地址，如无，则填 Null
- **facebook**: 该数据条目在 Facebook 的地址，如无，则填 Null
- **github**：该数据条目在 Github 的地址，如无，则填 Null
- **meetup**：该数据条目在 Meetup 的地址，如无，则填 Null
- **googlegroup**：该数据条目在 Google Group 的地址，如无，则填 Null
- **email**：该数据条目的对外联系邮箱，如无，则填 Null

## 其他要求

- **meta.json** 中的 id 必须和对应目录的目录名一致，如，*cn* 目录下的 `meta.json` 文件中的 id 应为 `cn`
- 数据条目的文件名必须和其数据的唯一id 一致，如，`moztw.json` 文件中的 ID 应为  `moztw`
