const gulp = require('gulp');
const zip = require('gulp-zip');
const clean = require('gulp-clean');
const config = require('./scripts/config');
const dayjs = require('dayjs');

const zipNote = process.argv.slice(4) || ''; //修改备注
let zipName = '';//生成的文件夹名称

//清除zip文件夹
function cleanZip() {
    return gulp.src(`./zip/*.zip`)
        .pipe(clean());
}
//生成文件夹
function createZip() {
    let time = dayjs().format('YYYYMMDDHHmmss');
    zipName = `${config.webSite}-${zipNote}-${config.author}-${time}.zip`;
    return gulp.src(`./dist/**`)
        .pipe(zip(zipName))
        .pipe(gulp.dest(`./zip`));
};
gulp.task('clean', cleanZip);
gulp.task('zip', createZip);
gulp.task('default', gulp.series(['clean', 'zip']))

