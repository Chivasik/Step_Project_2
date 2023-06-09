Завдання
Зверстати макет сайту в використовуючи три макети: 320px, 768px та 1200px, з використанням препроцесора SCSS та зборкою проєкту за допомогою менеджера задач Gulp. Дедлайн для виконання цього домашнього завдання - 1 тиждень після четвертого заняття даного модуля.

Технічні вимоги до верстки
Вам видається макет сайту в трьох варіантах - 320 пікселів, 768 пікселів та 1200 пікселів.
Верстка повинна бути зроблена з урахуванням принципів адаптивної верстки, тобто всі блоки/колонки повинні змінювати своє взаємне розташування коли роздільна здатність екрану стає занадто малою, щоб вони могли розташовуватися на одній лінії. Загальне правило: "Якщо блоки вже не можуть розташовуватися поруч так, як на декстопній версії, то вони повинні бути такими, як у планшетній/мобільній версії макета".
Для верстки ви маєте використовувати препроцесор SCSS з такими нюансами:
використовуйте найпоширеніші інструменти препроцесорів: змінні, міксини та &;
розділіть css-код вашого проекту на кілька окремих scss-файлів (наприклад, змінні в один файл, міксини - в інший, стилі для шапки сайту - в третій, і т.д.), тобто створіть структуру проєкту і об'єднайте їх за допомогою інструкції @import.
При роздільній здатності екрана 768 пікселів або менше верхнє меню має стати випадаючим при кліку на іконку меню у верхньому правому кутку, як показано на версії макета 320px-dropdown_menu.
Секція з Інстаграм-фото - зверніть увагу, що фото не стають один під одного при зменшенні екрана, а їх стає більше, і на роздільній здатності 768 пікселів у назві секції з'являється другий напис "GOT TO OUR INSTAGRAM PAGE".
Збірка проєкту:
Проект повинен збиратися за допомогою Gulp
У корені проекту має бути дві папки - src та dist, а також файл index.html
Стилі та скрипт в index.html повинні бути підключені з папки dist
Папка src повинна містити всі робочі файли, в яких ви писатимете код (папки scss, js, img)
Вміст папки dist має генеруватися автоматично шляхом конвертації та копіювання файлів, що знаходяться в папці src
Необхідно налаштувати два основні робочі завдання для Gulp:
dev


build
Робоче завдання build повинно включати такі завдання:
очищення папки dist;
компіляція scss файлів у css;
Додавання вендорних префіксів до CSS властивостей для підтримки останніх кількох версій кожного з браузерів;
видалення невикористовуваного CSS-коду;
конкатенація всіх js файлів в один scripts.min.js та його мініфікація;
копіювання мініфікованих підсумкових styles.min.css та scripts.min.js файлів у папку dist;
оптимізація картинок та копіювання їх у папку dist/img;



Робоче завдання dev повинно включати такі завдання:
Запуск сервера та подальше відстеження змін *.js та *.scss файлів у папці src;
При зміні - перезбірка та копіювання об'єднаних та мініфікованих файлів styles.min.css та scripts.min.js в папку dist, перезавантаження вашої html-сторінки.
При збірці проєкту можна використовувати будь-які пакети, але більшість потрібного функціоналу ви знайдете в наступних:
gulp//
gulp-sass//
browser-sync//
gulp-js-minify//
gulp-uglify
gulp-clean-css
gulp-clean
gulp-concat//
gulp-imagemin
gulp-autoprefixer//