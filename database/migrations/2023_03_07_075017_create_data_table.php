<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data', function (Blueprint $table) {
            $table->id();
            $table->text('aim');
            $table->text('method');
            $table->text('tool')->nullable();
            $table->text('result');
            $table->text('memo')->nullable();
            $table->foreignID('study_id')->constrained('studies')->onDelete('cascade');
            $table->foreignID('category_id')->constrained('categories')->onDelete('cascade');
            $table->foreignID('user_id')->constrained('users')->onDelete('cascade')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data');
    }
};
