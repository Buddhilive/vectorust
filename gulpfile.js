var gulp = require('gulp');
var del = require('del');

const trash_files = [
    'dist/web/.gitignore',
    'dist/web/vectorust_bg.wasm.d.ts',
    'dist/web/vectorust.d.ts',
    'dist/web/package.json',
    'dist/web/README.md',
    'dist/esm/.gitignore',
    'dist/esm/vectorust_bg.wasm.d.ts',
    'dist/esm/vectorust.d.ts',
    'dist/esm/package.json',
    'dist/esm/README.md',
    'dist/cjs/.gitignore',
    'dist/cjs/vectorust_bg.wasm.d.ts',
    'dist/cjs/vectorust.d.ts',
    'dist/cjs/package.json',
    'dist/cjs/README.md',
];

function clean() {
    return del(trash_files);
}

function create_types() {
    return gulp.src('dist/esm/vectorust.d.ts')
    .pipe(gulp.dest('dist/types/'));
}

function copy_files() {
    return gulp.src([
        'package.json',
        'readme.md',
        'LICENSE'
    ])
    .pipe(gulp.dest('dist/'));
}

exports.default = gulp.series(create_types, clean, copy_files);