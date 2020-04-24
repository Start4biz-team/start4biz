<?php

namespace app\controllers;

use app\models\tables\User;

class UserController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionCreateUser()
    {

        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $user = new User();
        $user->scenario = User:: SCENARIO_CREATE;
        $user->attributes = \yii::$app->request->post();
        if($user->validate())
        {
            $user->save();
            return array('status' => true, 'data'=> 'User record is successfully updated');
        }
        else
        {
            return array('status'=>false,'data'=>$user->getErrors());
        }
    }

    public function actionGetUser()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $user = User::find()->all();
        if(count($user) > 0 )
        {
            return array('status' => true, 'data'=> $user);
        }
        else
        {
            return array('status'=>false,'data'=> 'No User Found');
        }
    }

    public function actionUpdateUser()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();

        $user = User::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($user) > 0)
        {
            $user->attributes = \yii::$app->request->post();
            $user->save();
            return array('status' => true, 'data'=> 'User record is updated successfully');

        }
        else
        {
            return array('status'=>false,'data'=> 'No User Found');
        }
    }

    public function actionDeleteUser()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();
        $user = User::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($user) > 0 )
        {
            $user->delete();
            return array('status' => true, 'data'=> 'User record is successfully deleted');
        }
        else
        {
            return array('status'=>false,'data'=> 'No User Found');
        }
    }












}
