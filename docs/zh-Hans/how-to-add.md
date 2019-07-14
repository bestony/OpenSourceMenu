# 如何添加新的数据

## 如果已经有了对应的城市/国家

首先，你需要 Fork 此项目，随后，在你的 Fork 中修改。

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

**需要注意，每个 PR 仅允许提交一个文件，如果需要提交多组数据，请提交不同的 PR**
