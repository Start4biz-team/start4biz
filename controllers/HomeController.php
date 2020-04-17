<?php


namespace app\controllers;


class HomeController extends AppController
{
    public function actionIndex() {
        return $this->render('index');
    }

    public function actionAbout() {
        return $this->render('about');
    }

    public function actionContacts() {
        return $this->render('contacts');
    }
}