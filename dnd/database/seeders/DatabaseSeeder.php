<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Character;
use App\Models\Place;
use App\Models\Contest;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin3@example.com',
            'password' => bcrypt('password'),
            'admin' => true,
        ]);



        $faker = Faker::create();

        $users = [];
        foreach (range(1, 5) as $index) {
            array_push($users, User::create([
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('password'),
                'admin' => false,
                'email_verified_at' => NULL,
            ]));
        }

        $characters = [];
        foreach (range(1, 5) as $index) {
            $characters[] = Character::create([
                'name' => $faker->name,
                'enemy' => false,
                'defence' => $faker->numberBetween(0, 3),
                'strength' => $faker->numberBetween(0, 5),
                'accuracy' => $faker->numberBetween(0, 5),
                'magic' => $faker->numberBetween(0, 5),
                'user_id' => $users[rand(0, 4)]->id
            ]);
        }

        // add enemies

        foreach (range(1, 3) as $index) {
            $characters[] = Character::create([
                'name' => $faker->name,
                'enemy' => true,
                'defence' => $faker->numberBetween(0, 3),
                'strength' => $faker->numberBetween(0, 5),
                'accuracy' => $faker->numberBetween(0, 5),
                'magic' => $faker->numberBetween(0, 5),
                'user_id' => 1
            ]);
        }

        $places = [];
        foreach (range(1, 3) as $index) {
            array_push($places, Place::create([
                'name' => $faker->city,
                'image' => $faker->imageUrl(),
            ]));
        }

        foreach ($places as $place) {
            $currentPlace = Place::find($place->id);
            $contest = Contest::create([
                'win' => $faker->boolean(50),
                'history' => $faker->paragraph,
                'place_id' => $currentPlace->id,
                'user_id' => $users[rand(0, 4)]->id,
            ]);

            foreach ($characters as $character) {
                $hero_hp = $faker->numberBetween(0, 20);
                $enemy_hp = 20 - $hero_hp;
                $contest->characters()->attach($character->id, ['hero_hp' => $hero_hp, 'enemy_hp' => $enemy_hp]);
            }
        }
    }


}
