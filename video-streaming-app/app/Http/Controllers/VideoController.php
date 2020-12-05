<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use FFMpeg;
use FFMpeg\Format\Video\X264;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Video;

class VideoController extends Controller
{

    public function show()
    {
        $video = Video::orderBy('created_at', 'DESC')->first();

        return view('show-video')->with('video', $video);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'title' => 'required',
            'video' => 'required|file|mimetypes:video/mp4,video/mpeg,video/x-matroska',
        ]);
        
        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);
        }

        $video = Video::create([
            'disk'          => 'public',
            'original_name' => $request->video->getClientOriginalName(),
            'path'          => $request->video->store('videos', 'public'),
            'title'         => $request->title,
        ]);


        $lowBitrateFormat  = (new X264)->setKiloBitrate(500);
        $midBitrateFormat  = (new X264)->setKiloBitrate(750);
        $highBitrateFormat = (new X264)->setKiloBitrate(3000);

        // open the uploaded video from the right disk...

        FFMpeg::fromDisk($video->disk)
            ->open($video->path)

            // call the 'exportForHLS' method and specify the disk to which we want to export...
            ->exportForHLS()
            ->toDisk('public')

            // we'll add different formats so the stream will play smoothly
            // with all kinds of internet connections...
            ->addFormat($lowBitrateFormat, function($media) {
                $media->addFilter('scale=640:480');
            })
            ->addFormat($midBitrateFormat, function($media) {
                $media->addFilter('scale=960:720');
            })
            ->addFormat($highBitrateFormat, function($media) {
                $media->addFilter('scale=1920:1200');
            })

            // call the 'save' method with a filename...
            ->save($video->id . '.m3u8');

        // update the database so we know the convertion is done!
        $video->update([
            'converted_for_streaming_at' => Carbon::now(),
        ]);

        if($request->wantsJson()){
            return response()->json([
                'id' => $video->id,
            ], 201);
        }

        return redirect()->back();
    }
}
