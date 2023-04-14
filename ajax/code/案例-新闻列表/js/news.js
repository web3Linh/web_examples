$(function () {
    // 获取新闻列表的函数
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function (res) {
            if(res.status !== 200){
                return alert('获取数据失败！')
            }
            var htmlstr = template('tpl-news', res)
            $('#news-lists').html(htmlstr)
        })
    }
    getNewsList()
})