## 介绍
> [Demo](http://blog.vv13.cn)

back in blog, 用令人舒适的方式进行展示博客，其中包括：
- 最简布局
- 去除留言板(disquz国内用户体验不行)
- 博文摘要
- 标签分类
- 支持RSS订阅

## 安装
首先需要安装一些必要的依赖
```
$ yarn add hexo-render-pug
$ yarn add hexo-renderer-less
$ yarn add hexo-generator-feed
$ yarn add hexo-excerpt
```

使用命令行进入到博客根目录
```
$ git clone https://github.com/vv13/hexo-theme-backinblog.git themes/backinblog
```

进行修改_config.yml中`theme: backinblog`即可。

