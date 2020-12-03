<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    use HasFactory;

    protected $attributes = array(
        'maximum_students' => 10,
        'status' => true
    );
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code',
        'name',
        'description',
        'maximum_students',
        'status'
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


    public function students()
    {
        return $this->hasMany(Student::class);
    }
}
