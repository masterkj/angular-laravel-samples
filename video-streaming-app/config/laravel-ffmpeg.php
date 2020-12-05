<?php

return [
    'ffmpeg' => [
        'binaries' => 'ffmpeg',
        'threads'  => 12,
    ],

    'ffprobe' => [
        'binaries' =>  'ffprobe',
    ],

    'timeout' => 3600,

    'enable_logging' => true,

    'set_command_and_error_output_on_exception' => false,
];
