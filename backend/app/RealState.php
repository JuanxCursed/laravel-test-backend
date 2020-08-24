<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RealState extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'email',
        'street',
        'number',
        'complement',
        'district',
        'city',
        'state',
        'zip_code'
    ];

    public function contract(){
        return $this->hasOne(Contract::class, 'real_state_id', 'id');
    }
}
