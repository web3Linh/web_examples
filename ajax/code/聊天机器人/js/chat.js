$(function () {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()
})

// 为发送按钮绑定鼠标添加事件
$('#btnSend').on('click', function () {
    var text = $('#ipt').val().trim()
    if (text.length <= 0) {
        return $('#ipt').val('')
    }
    // 如果用户输入了聊天内容，则将此内容渲染在dom区域中
    $('.talk_list').append('<li class="right_word"><img src="img/person02.png" /> <span>' + text + '</span></li>')
    // 清空文本框
    $('#ipt').val('')
    // 重置滚动条的位置
    resetui()
    // 发起请求，获取聊天内容
    getMsg()

    // 获取机器人发送回来的消息
    function getMsg(text) {
        $.ajax({
            method: 'GET',
            url: 'http://ajax.frontend.itheima.net:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                console.log(res)
                if (res.message === 'success') {
                    // 接收聊天记录
                    var msg = res.data.info.text
                    $('#talk_list').append('<li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
                    resetui()
                    // 调用getVoice函数，把文本转化为内容
                    getVoice()
                }
            }
        })
    }

    // 把文字转化为语音
    function getVoice(text) {
        $.ajax({
            method: 'GET',
            url: 'http://ajax.frontend.itheima.net:3006/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                if (res.status === 200) {
                    // 播放语音
                    $('#voice').attr('src', res.voiceUrl)
                }
            }
        })
    }

    // 为文本框绑定keyup事件
    $('#ipt').on('keyup',function(e){
        // 查看任意键所代表的符号是什么
        // console.log(e.keyCode)
        if(e.keyCode === 13){
            console.log('用户按下了enter键')
            $('#btnSend').click()
        }
    })
})



