<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body>
        <div>
            <div class="header text-color-ffffff">
                <div class="nav">
                    <h1 class="w6">株式会社reach</h1>
                    <ul class="w3">
                        <li>ホーム</li>
                        <li>事業内容</li>
                        <li>採用情報</li>
                        <li>お問い合わせ</li>
                    </ul>
                </div>
                <p class="w6">一歩も下がらない<br>挑戦者たち</p>
            </div>
            <main>
                {{ $slot }}
            </main>
            <div class="footer">
                <div class="fotter-nav">
                    <h1>株式会社reach</h1>
                    <ul>
                        <li>ホーム</li>
                        <li>事業内容</li>
                        <li>採用情報</li>
                        <li>お問い合わせ</li>
                    </ul>
                </div>
            </div>
        </div>
    </body>
</html>
