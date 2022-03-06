const mix = require('laravel-mix');

mix
    .setPublicPath('build')
    .js('src/js/app.js', 'build/js/app.min.js')
    .sass('src/sass/app.scss', 'build/css/app.min.css')
    .options({
        processCssUrls: false
    })
    .sourceMaps(false, 'source-map')
    .disableSuccessNotifications()
    .browserSync({
        server: {
            baseDir: "build"
        },
        files: [
            'build/*'
        ]
    });
