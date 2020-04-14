<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace app\controllers;

use yii\web\Controller;

/**
 * Description of AppController
 *
 * @author Аркадий
 */
class AppController extends Controller {

    public function beforeAction($action) {
        $this->view->title = \YII::$app->name;
        return parent::beforeAction($action);
    }
}
