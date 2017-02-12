# T-pagenation
基于jQuery的翻页插件

####调用方式:
```javascript
<div id="article">
    我是内容!!
</div>
<div id="pagenation"></div>

<script>
    var defaults = {
        total_pages: 15, //总页数
        current_page: 1, // 当前页
        view_pages: 5, // 需要显示的分页数
        onClick: function (current) {
            //分页内容
            $('#article').html('我是第'+ current +'页的内容!!!')
        }
    };
    $('#pagenation').tpage(defaults);
</script>
```