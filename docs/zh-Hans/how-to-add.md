# 如何添加新的数据

首先，你需要 Fork 此项目，随后，在你 Fork 的项目中修改，并在修改完成后，发起新的 PR。

## 如果已经有了对应的城市/国家

如果你要添加的数据已经有了对应的国家/地区、城市，你可以直接在 `data/国家/城市` 目录下创建对应的数据文件。

数据格式可以参考[数据定义](data-spec.md)，或者，你可以直接复制下面的 JSON，将数据修改为你自己的。

修改时需要注意，**id**需要是唯一的，在创建前请在对应的目录下确认是否已有对应的id。此外，ID 将会用于文件名，如下面的数据对应的文件名就是`shenzhen_gdg.json`

> 对应文件可以在 [shenzhen_gdg.json](https://github.com/bestony/OpenSourceMenu/blob/master/data/community/cn/shenzhen/shenzhen_gdg.json) 查看。

```
{
  "id": "shenzhen_gdg",
  "lang": {
    "en-US": {
      "name": "Shen Zhen Google Developer Group",
      "description": "Shen Zhen Google Developer Group"
    }
  },
  "tags": [
    "GDG"
  ],
  "image": "https://chinagdg.org/wp-content/uploads/2015/07/shenzhen-4-1024x683.jpg",
  "homepage": "https://chinagdg.org/p/gdg-shenzhen/",
  "twitter": null,
  "facebook": null,
  "github": null,
  "meetup": "https://www.meetup.com/GDG-Shenzhen/",
  "googlegroup": "https://groups.google.com/forum/?fromgroups#!forum/shenzhen_gtug",
  "email": null
}
```

在这里涉及到了图片的问题，图片最好是跟随你的 PR 一同提交，图片文件需要放置在 `data/images`，对应的 image 的路径需要填写为 `/data/images/xxx.jpg`，具体可以参考 [MozTw](https://github.com/bestony/OpenSourceMenu/blob/master/data/community/tw/taipei/moztw.json) 的数据及[对应图片](https://github.com/bestony/OpenSourceMenu/blob/master/data/images/moztw.png)。

**需要注意，每个 PR 仅允许提交一组数据，如果需要提交多组数据，请提交不同的 PR**

## 如何没有对应的城市/国家

如果你要添加的数据没有对应的国家、城市数据，你则需要添加对应的目录及 `meta.json` ，以确保数据的正确生成。

首先，你需要在对应的数据分类（如 community ）下创建国家/地区的目录，这里的命名规范可以使用 RFC 3066 （具体的代码可以在 [这里](http://www.i18nguy.com/unicode/language-identifiers.html) 查询），需要注意的是，目录名应为小写，如，中国的 Region Code 为 CN，则目录名为 cn。

在你刚刚创建的目录下，创建一个 `meta.json`，并复制下方 JSON，粘贴进去后，修改数据为你自己的。这里的 ID 需要和目录名一致。longitude 和 latitude 则使用对应国家/地区首都、首府等位置的坐标。 flag 使用 Emoji 中对应国家/地区的旗帜 Emoji 。

```
{
    "id": "cn",
    "lang": {
        "en-US": "China",
        "zh-CN": "中国"
    },
    "longitude": "116.4550781250",
    "latitude": "39.9097362345",
    "flag": "🇨🇳"
}
```

城市的步骤与创建国家相同，不同的是，城市名需要使用国际通用的名称，而非简单的拼音缩写，如拉萨为 *Lhasa* ，而不是 *Lasa*。flag 选择一个能够代表当地特色的即可，经纬度使用对应的城市中心的即可。

当你完成了城市信息的创建后，就可以创建具体的条目了，具体的条目创建请参考上方的说明。

**一个 PR 允许体检 2 组 meta.json  和一组数据的，如果需要提交多个地区，请分不同的 PR 进行**
