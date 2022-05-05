set -e

yarn build
printf "打包成功\n"

cd build

git init
git checkout -b build
git add -A
git commit -m 'deploy'
printf "本地提交成功\n"
git push -f git@github.com:webVueBlog/todolist-react.git build

printf "dist目录上传成功\n"