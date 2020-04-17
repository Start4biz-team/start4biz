<?php

use app\assets\AppAsset;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\helpers\Html;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
    <html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>

    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<div class="container">
    <header class="main-header">
        <div class="header-up">
            <div class="header-up-left">
                    <span class="header-up-left-adress">
                        Санкт-Петербург, пл. Карла Фаберже, д8
                    </span>
            </div>
            <a href="<?= \yii\helpers\Url::home() ?>" class="header-up-logo-link" title="На главную страницу">
                <img class="header-up-logo" src="/img/pre-logo.png" width="40" height="30" alt="Start4.biz logo" />
            </a>
            <div class="header-up-right">
                <a class="header-up-right-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a>
                <a class="header-up-right-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
            </div>
        </div>
        <div class="header-down">
            <nav class="header-down-left-menu">
                <ul class="header-down-left-menu-list">
                    <li class="header-down-left-menu-item"><a href="/home/about" class="header-down-left-menu-link">О проекте</a></li>
                    <li class="header-down-left-menu-item"><a href="#" class="header-down-left-menu-link">Бизнесу</a></li>
                    <li class="header-down-left-menu-item"><a href="#" class="header-down-left-menu-link">Финансовым организациям</a></li>
                    <li class="header-down-left-menu-item"><a href="/home/contacts" class="header-down-left-menu-link">Контакты</a></li>
                </ul>
            </nav>


            <a class="header-down-lk" href="#">Личный кабинет</a>
            <div class="header-down-right-menu">
                <ul class="header-down-right-menu-list">
                    <li class="header-down-right-menu-item"><a href="#" class="header-down-right-menu-link">Кредиты</a></li>
                    <li class="header-down-right-menu-item"><a href="#" class="header-down-right-menu-link">Эквайринг</a></li>
                    <li class="header-down-right-menu-item"><a href="#" class="header-down-right-menu-link">Овердрафты</a></li>
                    <li class="header-down-right-menu-item"><a href="#" class="header-down-right-menu-link">Лизинг</a></li>
                </ul>
            </div>
        </div>
    </header>
    <main class="content">
        <?= $content ?>
    </main>
    <footer class="main-footer">
        <div class="footer-info">
            <div class="footer-info-left">
                <ul class="footer-info-left-list">
                    <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">О проекте</a></li>
                    <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Финансовым организациям</a></li>
                    <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Бизнесу</a></li>
                    <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Контакты</a></li>
                </ul>
            </div>
            <div class="footer-info-right">
                <ul class="footer-info-right-list">
                    <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Политика конфиденциальности</a></li>
                    <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Пользовательское соглашение</a></li>
                    <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Согласие на обработку персональных данных</a></li>
                    <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Форма обратной связи</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-links">
            <div class="footer-social-links-block">
                <a href="#" class="footer-social-link" title="Мы во вконтакте"><i class="fa fa-vk fa-lg"></i></a>
                <a href="#" class="footer-social-link" title="Наш инстаграмм"><i class="fa fa-instagram fa-lg"></i></a>
                <a href="#" class="footer-social-link" title="Наш канал на youtube"><i class="fa fa-youtube fa-lg"></i></a>
                <a href="#" class="footer-social-link" title="Мы в facebook"><i class="fa fa-facebook-square fa-lg"></i></a>
            </div>
            <div class="footer-contacts">
                <a class="footer-email" href="mailto:info@start4.biz" title="Написать письмо">info@start4.biz</a>
                <a class="footer-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
            </div>
        </div>
    </footer>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>