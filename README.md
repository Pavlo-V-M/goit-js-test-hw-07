# goit-js-test-hw-07

<!-- Eng:

// 1. This code imports the array of objects from "gallery-items.js" file into the current js file.

// 2. It uses the querySelector to take access to the <ul class="gallery"></ul> element and stores it in the imagesGallery variable.

// 3. It calls the createGalleryImages function and passes the imported array of objects as an argument. This function creates the markup for each item of the array and returns it as a string.

// 4. Inserts the markup generated by the createGalleryImages function into the imagesGallery element.

// 5. Creates a new SimpleLightbox instance and passes the ".gallery a" selector and an object with two options as arguments. This will allow us to create a lightbox for each image in the gallery.

in this case variables:
const cardsMarkup = createGalleryImages(galleryItems);

imagesGallery.insertAdjacentHTML("beforeend", cardsMarkup);

// The const cardsMarkup variable stores the markup generated by the createGalleryImages function.

// The imagesGallery.insertAdjacentHTML("beforeend", cardsMarkup); code inserts the markup stored in the cardsMarkup variable into the imagesGallery element.

// The lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 }); code creates a new SimpleLightbox instance and passes the ".gallery a" selector and an object with two options as arguments. This will allow us to create a lightbox for each image in the gallery.

<!-- Ukr:

// 1. Цей код імпортує масив об'єктів з файлу "галерея-items.js" у поточний файл JS.

// 2. Він використовує QuerySelector для отримання доступу до елемента <ul class = "Gallery"> </ul> і зберігає його у змінній Imagesgallery.

// 3. Він називає функцію CreateGalleryImages і передає імпортний масив об'єктів як аргумент. Ця функція створює розмітку для кожного елемента масиву і повертає його як рядок.

// 4. Вставляє розмітку, створену функцією CreateGalleryImages, в елемент Gallery.

// 5. Створює новий екземпляр SimplelightBox і передає селектор ". Gallery A" та об'єкт з двома параметрами як аргументи. Це дозволить нам створити Lightbox для кожного зображення в галереї.

У цьому випадку змінні:
const cardmarkup = createGalleryImages (галереїтми);

Imagesgallery.insertAdjacenthtml ("UPENEND", CARTSMARKUP);

// Змінна Const CardMarkup зберігає розмітку, створену функцією CreateGalleryImages.

// Imagesgallery.insertAdjacenthtml ("UPENEND", CARTSMARKUP); Код вставляє розмітку, що зберігається у змінній CardMarkup у елемент ImageGallery.

// Lightbox = новий SimplelightBox (". Код створює новий екземпляр SimplelightBox і передає селектор ". Gallery A" та об'єкт з двома параметрами як аргументи. Це дозволить нам створити Lightbox для кожного зображення в галереї. -->
