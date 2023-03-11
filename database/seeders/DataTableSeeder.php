<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class DataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('data')->insert([
            'aim' => 'プログラミング技術を身につける。',
            'method' => '①プログラミング言語の学習　②フレームワークの学習　③IDEを利用した開発の学習',
            'tool' => '・AWS ・PHP(Laravel) ・JavaScript(React.js) ・MariaDB',
            'result' => '簡単なアプリケーションが制作できるようになった。',
            'memo' => '設計が大事',
            'study_id' => 1,
            'category_id' => 1,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
