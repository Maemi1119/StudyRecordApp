<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class ResearchTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('research')->insert([
            'title' => 'Laravel 公式ドキュメント',
            'body' => 'ご存知かもしれませんが、Laravel8のリリース時から、Laravelは年次リリースに移行しました。以前は、メジャーバージョンを６か月ごとにリリースしていました。この変更はコミュニティのメンテナンスの負担を軽減することと、開発チームが互換性を失う変更を加えることなく、驚くべき強力な新機能を出荷する試みができることを目的としています。そのため、下位互換性を損なうことなく、さまざまな堅牢な機能をLaravel8へ取り入れました。並列テストのサポート、Breezeスターターキットの改善、HTTPクライアントの改善、さらに"has one of many"を含む、新しいEloquentリレーションシップタイプなどです。',
            'link' => 'https://readouble.com/laravel/9.x/ja/releases.html',
            'study_id' => 1,
            'user_id' =>2,
            'category_id' => 2,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('research')->insert([
            'title' => 'Javascript 公式ドキュメント',
            'body' => 'JavaScript (JS) は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です。ウェブページでよく使用されるスクリプト言語として知られ、多くのブラウザー以外の環境、例えば Node.js や Apache CouchDB や Adobe Acrobat などでも使用されています。 JavaScript はプロトタイプベースで、マルチパラダイムで、シングルスレッドで、動的な言語であり、オブジェクト指向、命令型、宣言型（関数プログラミングなど）といったスタイルに対応しています。',
            'link' => 'https://developer.mozilla.org/ja/docs/Web/JavaScript',
            'study_id' => 1,
            'user_id' =>2,
            'category_id' => 3,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('research')->insert([
            'title' => 'React 公式ドキュメント',
            'body' => 'React は当初より、既存のプロジェクトに徐々に追加していけるようなデザインとなっています。たくさん React を使うのでも、少しだけ使うのでも構いません。触りだけやってみるもよし、シンプルな HTML のページにインタラクティブな機能を追加するのに使うもよし、React をフル活用した複雑なアプリを作成するもよし。どのような目的にしても、このページにあるリンクが役に立つでしょう。',
            'link' => 'https://ja.reactjs.org/docs/getting-started.html',
            'study_id' => 1,
            'user_id' =>2,
            'category_id' => 3,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('research')->insert([
            'title' => 'MaterialUI 公式ドキュメント',
            'body' => 'MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.',
            'link' => 'https://ja.reactjs.org/docs/getting-started.html',
            'study_id' => 1,
            'user_id' =>2,
            'category_id' => 3,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
        
        DB::table('research')->insert([
            'title' => 'TailwindCSS 公式ドキュメント',
            'body' => 'Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.',
            'link' => 'https://flowbite.com/',
            'study_id' => 1,
            'user_id' =>2,
            'category_id' => 3,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
        ]);
    }
}
