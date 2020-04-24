<?php

namespace app\controllers;

use app\models\tables\Order;

class OrderController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionCreateOrder()
    {

        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $order = new Order();
        $order->scenario = Order:: SCENARIO_CREATE;
        $order->attributes = \yii::$app->request->post();
        if($order->validate())
        {
            $order->save();
            return array('status' => true, 'data'=> 'Order record is successfully updated');
        }
        else
        {
            return array('status'=>false,'data'=>$order->getErrors());
        }
    }

    public function actionGetOrder()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $order = Order::find()->all();
        if(count($order) > 0 )
        {
            return array('status' => true, 'data'=> $order);
        }
        else
        {
            return array('status'=>false,'data'=> 'No Order Found');
        }
    }

    public function actionUpdateOrder()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();

        $order = Order::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($order) > 0)
        {
            $order->attributes = \yii::$app->request->post();
            $order->save();
            return array('status' => true, 'data'=> 'Order record is updated successfully');

        }
        else
        {
            return array('status'=>false,'data'=> 'No Order Found');
        }
    }

    public function actionDeleteOrder()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();
        $order = Order::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($order) > 0 )
        {
            $order->delete();
            return array('status' => true, 'data'=> 'Order record is successfully deleted');
        }
        else
        {
            return array('status'=>false,'data'=> 'No Order Found');
        }
    }



}
