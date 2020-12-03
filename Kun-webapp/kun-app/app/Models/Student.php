<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'date_of_birth' => 'date',
        'class_id' => 'int'
    ];

    protected $attributes = array(
        'date_of_birth' => null,
        'class_id' => null
    );


    public function Class()
    {
        return $this->belongsTo(CLasses::class, 'class_id');
    }
}
