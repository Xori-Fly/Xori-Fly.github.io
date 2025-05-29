@echo off
echo Iniciando servidor Jekyll...
bundle exec jekyll serve --incremental --livereload --force_polling
pause
