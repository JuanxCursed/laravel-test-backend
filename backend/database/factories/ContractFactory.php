<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Contract;
use Faker\Generator as Faker;
const PF = 1;
const PJ = 0;
$factory->define(Contract::class, function (Faker $faker) {
    $type = $faker->boolean;
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'person_type' => $type ? PF : PJ,
        'document' => $type ? $faker->cpf(false) : $faker->cnpj(false),
    ];
});
