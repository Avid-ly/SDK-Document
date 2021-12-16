<style type="text/css">
        .imgPreview {
            display: none;
            top: 0;
            left: 0;
            width: 100%; /*容器占满整个屏幕*/
            height: 100%;
            position: fixed;
            background: rgba(0, 0, 0, 0.5);
        }

        .imgPreview img {
            z-index: 100;
            width: 60%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        /*添加鼠标移入图片效果*/
        .img {
            cursor: url("ico/放大镜.png"), auto;
        }
</style>

<script type="text/javascript">
        $(function () {
            $('.img').on('click', function () {
                var src = $(this).attr('src');
                $('.imgPreview img').attr('src', src);
                $('.imgPreview').show()
            });
            $('.imgPreview').on('click', function () {
                $('.imgPreview').hide()
            });
        })
</script>


# 流失分析