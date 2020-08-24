<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\RealState;
use Faker\Generator as Faker;

$factory->define(RealState::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->safeEmail,
        'street' => $faker->streetName,
        'number' => $faker->buildingNumber,
        'complement' => $faker->secondaryAddress,
        'district' => $faker->citySufix,
        'city' => $faker->city,
        'state' => $faker->state,
        'zipCode' => $faker->postCode,
    ];
});
