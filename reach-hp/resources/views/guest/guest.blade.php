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
            <div class="header">
                <div class="company-name">
                    <h1>株式会社reach</h1>
                </div>
                <div class="nav-menu">
                    <ul>
                        <li>ホーム</li>
                        <li>事業内容</li>
                        <li>採用情報</li>
                        <li>お問い合わせ</li>
                    </ul>
                </div>
            </div>
            <main>
                {{ $slot }}
            </main>
        </div>
    </body>
</html>
