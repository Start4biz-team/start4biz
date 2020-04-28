<?php

namespace app\controllers;

use app\models\tables\RequestEntry;

class RequestController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionCreateRequestEntry()
    {

        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $request_entry = new RequestEntry();
        $request_entry->scenario = RequestEntry:: SCENARIO_CREATE;
        $request_entry->attributes = \yii::$app->request->post();
        if($request_entry->validate())
        {
            $request_entry->save();
            return array('status' => true, 'data'=> 'Request Entry record is successfully created');
        }
        else
        {
            return array('status'=>false,'data'=>$request_entry->getErrors());
        }
    }

    public function actionGetRequestEntry()
    {
        if(\Yii::$app->user->isGuest) {
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            return array('status' => false, 'data' => 'Авторизуйтесь для просмотра заявок');
        } else{
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            $request_entry = RequestEntry::find()->all();
            if (count($request_entry) > 0) {
                return array('status' => true, 'data' => $request_entry);
            } else {
                return array('status' => false, 'data' => 'No Request Entry Found');
            }
        }
    }

    public function actionUpdateRequestEntry()
    {
        if(\Yii::$app->user->isGuest) {
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            return array('status' => false, 'data' => 'Авторизуйтесь для редактирования заявок');
        } else{
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            $attributes = \yii::$app->request->post();

            $request_entry = RequestEntry::find()->where(['ID' => $attributes['id']])->one();
            if (count($request_entry) > 0) {
                $request_entry->attributes = \yii::$app->request->post();
                $request_entry->save();
                return array('status' => true, 'data' => 'Request Entry record is updated successfully');

            } else {
                return array('status' => false, 'data' => 'No Request Entry Found');
            }
        }
    }

    public function actionDeleteRequestEntry()
    {
        if(\Yii::$app->user->isGuest) {
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            return array('status' => false, 'data' => 'Авторизуйтесь для удаления заявок');
        } else{
            \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
            $attributes = \yii::$app->request->post();
            $request_entry = RequestEntry::find()->where(['ID' => $attributes['id']])->one();
            if (count($request_entry) > 0) {
                $request_entry->delete();
                return array('status' => true, 'data' => 'Request Entry record is successfully deleted');
            } else {
                return array('status' => false, 'data' => 'No Request Entry Found');
            }
        }
    }

}
