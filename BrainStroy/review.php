<?php  $conn = mysqli_connect("localhost","mysql","mysql") or die ("Нет соединения: ". mysqli_error());
//    echo "Удачно соединено!";
    mysqli_select_db($conn,"brainstroy");?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Отзывы</title>
                    <!--   ИКОНКА НА ВКЛАДКЕ     -->
<link rel="shortcut icon" href="img/header/brain-icon.png" type="image/png">              
                <!--   Стили     -->
<link rel="stylesheet" href="css/style.css">              
                <!--   Шрифт montserrat   -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital@0;1&display=swap" rel="stylesheet">           
            <!--   Шрифт OpenSans   -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap" rel="stylesheet">         
           <!--   Шрифт Russo   -->
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">         
            <!--   Иконки   -->
<link rel="stylesheet" href="icomoon-v1.0/font.css">
<link rel="stylesheet" href="icomoon-v1.0/ie7/ie7.css">
            <!--Magnific-Popup-->
<!--<link rel="stylesheet" href="libs/Magnific-Popup-master/Magnific-Popup-master/dist/magnific-popup.css">-->
</head>
<body>
<!--  Wrapper  -->
     <div class="wrapper">
<!--   Стрелочка, которая поднимает страницу вверх  -->
     <div id="toTop">
      <div class="arrow">
        <span class="arrow__left"></span>
        <span class="arrow__right"></span>
     </div>
  </div>
<!--  Шапка сайта  -->
      <header class="headerMain headerCalc">
                <div class="container">
                    <div class="headerMain__inner">
                       <div class="headerMain__inner_up">
                            <div class="headerMain__logoBox">
                                <div class="headerMain__icon"><img src="img/header/brain-icon.png" alt="SiteLogo"></div>
                                <div class="headerMain__text">BrainСтрой</div>
                            </div>
                            <div class="headerMain__burger"><span></span></div>
                            <div class="headerMain__tel">
                                <div class="headerMain__telIcon">
                                      <span class="icon-telephone-icon"></span>         
                                </div>
                                <div class="headerMain__numbers">
                                    <p class = "headerMain__numbers-item">+7(383)9237775586</p>
                                    <p class = "headerMain__numbers-item">+7(383)9963805167</p>
                                    <p class = "headerMain__numbers-item">+7(383)9538744676</p>
                                </div>
                            </div>
                            <div class="headerMain__mail">brainstroy@mail.ru</div>
                            <div class="headerMain__button">
                                <a class="headerMain__popup" href="#hiddenFormId">заказать звонок</a>
                            </div>
                        </div>
                        <hr>
                        <div class="headerMain__inner_down">
                            <ul class="headerMain__menu">
                                <li class="headerMain__menu-item"><a href="main.html">Главная</a></li>
                                <li class="headerMain__menu-item"><a href="stocks.html">Акции</a></li>
                                <li class="headerMain__menu-item">
                                <a href="allProjects.html">Проекты домов</a>
                                <ul>
                                        <li><a href="buildedProjects.html">Наши проекты</a></li>
                                    </ul>
                                </li>
                                <li class="headerMain__menu-item"><a href="review.php">Отзывы</a></li>
                                <li class="headerMain__menu-item"><a href="#">Построенные объекты</a></li>
                            </ul>
                            <div class="headerMain__contacts">
                                <div class="headerMain__contacts_icon"><span class="icon-contacts-icon"></span></div>
                                <div class="headerMain__contacts_txt"><a id="toDown" href="#Contacts">Контакты</a></div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>        
<!--   Блок превью с временной акцией     -->
        <section class="preview previewPr previewCalc">
            <div class="container">
               <div class="preview__inner">
                    <div class="preview__left">
                            <div class="preview__left_l">
                                <div class="preview__title">
                                    строительство домов под ключ в Новосибирске
                                </div>
                                <div class="preview__button"><a href="allProjects.html">Проекты</a></div>
                                <div class="preview__button preview__call"><a href="#">Заказать звонок</a></div>
                            </div>
                            <div class="preview__left_r">
                                <div class="preview__pluses">
                                    <div class="preview__pluses_item">
                                        <div class="preview__icon"><span class="icon-people-icon"></span></div>
                                        <div class="preview__text">Более 2000 счастливых людей проживают в домах, построенных нашей компанией</div>
                                    </div>
                                    <div class="preview__pluses_item">
                                        <div class="preview__icon"><span class="icon-key-icon"></span></div>
                                        <div class="preview__text">ПОСТРОИМ ВАШ ДОМ ПОД КЛЮЧ, ПРЕДОСТАВИВ ПОЛНЫЙ КОМПЛЕС УСЛУГ</div>
                                    </div>
                                    <div class="preview__pluses_item">
                                        <div class="preview__icon"><span class="icon-crown-icon"></span></div>
                                        <div class="preview__text">20 лет на рынке!</div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="preview__right">
                        <div class="preview__discount">Акция!</div>
                        <div class="preview__banner">Проект дома <span>бесплатно</span></div>
                        <div class="preview__desc">при заказе строительства дома сделаем проект дома бесплатно!</div>
                        <div class="discount__btn btn__discount"><a class="preview__btn" href="#popupId">Подать заявку</a></div>
                    </div>
                </div>
            </div>
        </section>
<!--     Контентная часть     -->
           <section class="review">
               <div class="container">
                   <div class="review__inner">
                       <div class="review__upper">
                          <div class="review__title">Здесь вы можете оставить отзыв</div>
                           <form class="review__form" id="reviewForm">
                               <input type="text" class="review__input review__input_name" name="reviewName" placeholder="Введите ваше имя">
                               <input type="text" class="review__input review__input_key" name="reviewKey" placeholder="Номер договора">
                               <textarea rows="10" cols="45" class="review__text" name="reviewText" placeholder="Напишите отзыв"></textarea>
                               <input type="submit" name="reviewSubmit" class="review__submit">
                           </form>
                       </div>
                       <div class="review__lower">
                           <div class="review__subtitle">Отзывы</div>
                           <div class="review__block">
                              <?php $sql = "SELECT * FROM отзывы where одобрен = 'да'";
                               $result = mysqli_query($conn,$sql);
                               $reviews = mysqli_fetch_all($result,MYSQLI_ASSOC);
                               foreach($reviews as $review){
                               ?>
                               <div class="review__item">
                                   <div class="review__name"><?php echo $review['имя']; ?></div>
                                   <div class="review__project">проект - <span><?php echo $review['проект']; ?></span></div>
                                   <div class="review__content"><?php echo $review['отзыв']; ?></div>
                               </div>
                               <?php } ?>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
            <footer class="footer footerCalc" id="Contacts">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__upper">
                        <div class="footer__logotype">
                            <div class="footer__logo"><img src="img/header/brain-icon.png" alt=siteLogo></div>
                            <div class="footer__title">BrainСтрой</div>
                        </div>
                        <ul class="footer__menu">
                            <li class="footer__item"><a class="footer__link" href="main.html">Главная</a></li>
                            <li class="footer__item"><a class="footer__link" href="stocks.html">Акции</a></li>
                            <li class="footer__item"><a class="footer__link" href="buildedProjects.html">Проекты домов</a></li>
                            <li class="footer__item"><a class="footer__link" href="#">Отзывы</a></li>
                            <li class="footer__item"><a class="footer__link" href="#">Построенные объкеты</a></li>
                        </ul>
                    </div>
                    <hr>
                    <div class="footer__lower">
                        <div class="footer__mail">brainstroy@mail.ru</div>
                        <div class="footer__info">Сайт носит информационный характер и не является публичной офертой, определяемой положение ГК РФ</div>
                            <div class="footer__tel">
                                <div class="footer__telIcon">
                                      <span class="icon-telephone-icon"></span>         
                                </div>
                                <div class="footer__numbers">
                                    <p class = "footer__numbers-item">+7(383)9237775586</p>
                                    <p class = "footer__numbers-item">+7(383)9963805167</p>
                                    <p class = "footer__numbers-item">+7(383)9538744676</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </footer>            
            <!--  Типа экран загрузки  -->
    <div class="preloader">
    <div class="preloader__text">
    <span class="preloader__animation"></span><br>Подождите<br><small>идет загрузка</small>
    </div>
    </div>
<!--   Вылетающий экран, при нажатии на кнопку по типу заказть звонок     -->
        <div class="popup">
           <h3 class="popup__title">Заказать звонок</h3>
            <form action="" id = "popupId" class="popup__form">
                <input type="text" class="popup__name" name="pName" placeholder="Ваше имя">
                <input type="text" class="popup__tel" placeholder="Ваш номер телефона" name="pTel">
                <input type="submit" class="popup__submit" name="pSubmit" value = "Отправить">
            </form>
        </div>
<!--   Фон этого экрана     -->
        <div class="popup__bg"></div>
        <!--     Окно после отправки формы   -->
    <div class="overlay">
        <div class="overlay__popup">
           <div class="overlay__close"></div>
            <h2 class="overlay__title">Готово!</h2>
        </div>
    </div>
        </div>
<!--   Jquery     -->
    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <!--  Скрипты для кнопок  -->
    <script src="js/buttons.js"></script>
    <!--  Скрипт шапки, загрузочного экрана и некоторых кнопок  -->
    <script src="js/header.js"></script>
<!--  Скрипт калькулятора  -->
    <script src="js/calculator.js"></script>
    <!--  Скрипт для отправки формы  -->
    <script src="js/forms.js"></script>
    <!--  Маски  -->
    <script src="js/jquery.maskedinput.js"></script>
<!--  review.js  -->
<script src="js/review.js"></script>
</body>
</html>