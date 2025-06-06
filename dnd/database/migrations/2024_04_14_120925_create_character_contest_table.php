<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('character_contest', function (Blueprint $table) {
        $table->id();
        $table->foreignId('character_id')->constrained()->onDelete('cascade');
        $table->foreignId('contest_id')->constrained()->onDelete('cascade');
        $table->float('hero_hp')->default(20)->unsigned();
        $table->float('enemy_hp')->default(20)->unsigned();
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('character_contest');
    }
};
