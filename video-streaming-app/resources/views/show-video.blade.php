<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet"><!-- https://getbootstrap.com -->
    <link href="https://vjs.zencdn.net/5.19.2/video-js.css" rel="stylesheet">
    <style type="text/css">
        .video-js {
            font-size: 1rem;
        }
    </style>
    <title>Laravel</title>
</head>

<body class="antialiased">
    <form method="POST" action="{{ route('upload-video') }}" enctype="multipart/form-data">
        @csrf
        @method('POST')
        <input type="text" placeholder="enter video title" name="title" />
        <input type="file" name="video" />
        <button type="submit">Submit</button>
    </form>

    @if($video)
    <!-- <source src="/storage/{{ $video->id }}.m3u8" type="application/x-mpegURL"> -->

    <div class="container">
        <div class="my-5 embed-responsive embed-responsive-16by9">
            <video id="video" class="embed-responsive-item video-js vjs-default-skin" width="640" height="360" autoplay controls></video>
        </div>

    </div>
    <script src="https://vjs.zencdn.net/5.19.2/video.js"></script><!-- https://videojs.com -->
    <script src="js/hls.min.js?v=v0.9.1"></script><!-- https://github.com/video-dev/hls.js -->
    <script src="js/videojs5-hlsjs-source-handler.min.js?v=0.3.1"></script><!-- https://github.com/streamroot/videojs-hlsjs-plugin -->
    <script src="js/vjs-quality-picker.js?v=v0.0.2"></script><!-- https://github.com/streamroot/videojs-quality-picker -->
    <script>
        var player = videojs('video');

        player.qualityPickerPlugin();
        
        player.src({
            src: '/storage/{{ $video->id }}.mp4',
            type: 'application/x-mpegURL'
        });

        player.play();
    </script>
    @endif

</body>
<!-- JS code -->
<!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->

</html>