/**
 * Created by tangzhiqiang on 2016/11/17.
 */
(function ($) {
    $.fn.extend({
        tpage: function (options) {
            var self = this;
            var defaults = {
                total_pages: 10, // 总页数，默认为1
                current_page: 1, // 当前页，默认为1
                view_pages: 5, // 需要显示的页数，默认显示为5页
                onClick: function (current) {} // 点击事件绑定
            };
            var opts = $.extend({}, defaults, options);
            // 初始化分页
            var initPage = function (opts) {
                self.empty();
                // 首页
                self.append('<a data-page="1">首页</a>');
                // 上一页
                if (opts.current_page >= 2) {
                    self.append('<a data-page="'+ (opts.current_page-1) +'">上一页</a>');
                }
                
                // 中间页
                var start = opts.current_page - Math.floor(opts.view_pages/2), end = 0;

                if (opts.total_pages >= opts.view_pages) {
                    if ((start <= 0)) start = 1;
                    if (start >= (opts.total_pages - opts.view_pages)) {
                        start = opts.total_pages - opts.view_pages + 1
                    }
                } else start = 1 ;

                opts.total_pages >= opts.view_pages ? end = opts.view_pages : end = opts.total_pages;

                for (var i = 1; i <= end;i ++) {
                    if (opts.current_page == start) {
                        self.append('<a data-page="'+ start +'" class="current">'+ start +'</a>');
                    } else {
                        self.append('<a data-page="'+ start +'">'+ start +'</a>');
                    }
                    start++;
                }
                
                // 下一页
                if (opts.current_page <= (opts.total_pages-1)) {
                    self.append('<a data-page="'+ (opts.current_page+1) +'">下一页</a>');
                }
                // 尾页
                self.append('<a data-page="' + opts.total_pages + '">尾页</a>');
            };
            var bindEvent = function () {
                self.on('click', 'a', function () {
                    initPage({
                        'current_page': Number($(this).attr('data-page')),
                        'total_pages': opts.total_pages,
                        'view_pages': opts.view_pages
                    });
                    opts.onClick($(this).attr('data-page'))
                })
            };
            initPage(opts);
            bindEvent();
        }
    })
})(jQuery);