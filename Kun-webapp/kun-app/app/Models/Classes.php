<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code',
        'name',
        'description',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'maximum_students' => 'int',
        /**
         * true => opend
         * false => closed
         */
        'status' => 'boolean'
    ];

    protected $attributes = array(
        'maximum_students' => 10,
        'status' => true
    );
}
