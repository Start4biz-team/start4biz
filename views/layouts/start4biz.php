<?php

use app\assets\AppAsset;
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
                Санкт-Петербург, пл. Карла Фаберже, д8
            </div>
            <div class="header-up-right">
                <a class="header-up-right-email" href="mailto:info@start4.biz">info@start4.biz</a>
                <a class="header-up-right-phone" href="tel:+79111299351" title="Просто позвоните нам!">+7 911 129-93-51</a>
            </div>
        </div>
        <div class="header-down">
            <nav class="header-down-main-menu">
                <ul class="header-down-main-menu-list">
                    <li class="header-down-main-menu-item"><a href="#" class="header-down-main-menu-link">product 1</a></li>
                    <li class="header-down-main-menu-item"><a href="#" class="header-down-main-menu-link">product 2</a></li>
                    <li class="header-down-main-menu-item"><a href="#" class="header-down-main-menu-link">product 3</a></li>
                </ul>
            </nav>
            <a href="<?= \yii\helpers\Url::home() ?>"><img class="header-down-logo" src="img/temp-logo.png" width="40" height="30" alt="Start4.biz logo" /></a>
            <div class="header-down-links">
                <ul class="header-down-links-list">
                    <li class="header-down-links-item"><a href="#" class="header-down-links-link">О проекте</a></li>
                    <li class="header-down-links-item"><a href="#" class="header-down-links-link">Контакты</a></li>
                    <li class="header-down-links-item"><a href="#" class="header-down-links-link">Бизнесу</a></li>
                    <li class="header-down-links-item"><a href="#" class="header-down-links-link">Финансовым организациям</a></li>
                </ul>
            </div>
        </div>
    </header>
    <main class="content">
        <?= $content ?>
    </main>
    <footer class="main-footer">
        <div class="footer-info-left">
            <ul class="footer-info-left-list">
                <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Политика конфиденциальности</a></li>
                <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Пользовательское соглашение</a></li>
                <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Согласие на обработку персональных данных</a></li>
                <li class="footer-info-left-item"><a href="#" class="footer-info-left-link">Форма обратной связи</a></li>
            </ul>
        </div>
        <div class="footer-info-empty"></div>
        <div class="footer-social-links-block">
            <a href="#" class="footer-social-link" title="Мы во вконтакте"><i class="fa fa-vk fa-lg"></i></a>
            <a href="#" class="footer-social-link" title="Наш инстаграмм"><i class="fa fa-instagram fa-lg"></i></a>
            <a href="#" class="footer-social-link" title="Наш канал на youtube"><i class="fa fa-youtube fa-lg"></i></a>
            <a href="#" class="footer-social-link" title="Мы в facebook"><i class="fa fa-facebook-square fa-lg"></i></a>
        </div>
        <div class="footer-info-right">
            <ul class="footer-info-right-list">
                <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">О проекте</a></li>
                <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Контакты</a></li>
                <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Бизнесу</a></li>
                <li class="footer-info-right-item"><a href="#" class="footer-info-right-link">Финансовым организациям</a></li>
            </ul>
        </div>
    </footer>
</div>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>