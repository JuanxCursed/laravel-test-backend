<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contract extends Model
{
    use SoftDeletes;

    protected $fillable=[
        'full_name',
        'email',
        'person_type',
        'document',
        'real_state_id',
    ];

    public function real_state(){
        return $this->belongsTo(RealState::class, 'real_state_id');
    }
}
