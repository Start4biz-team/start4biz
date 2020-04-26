<?php

namespace app\controllers;

use app\models\tables\Faq;

class FaqController extends \yii\web\Controller
{
    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionCreateFaq()
    {

        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $faq = new Faq();
        $faq->scenario = Faq:: SCENARIO_CREATE;
        $faq->attributes = \yii::$app->request->post();
        if($faq->validate())
        {
            $faq->save();
            return array('status' => true, 'data'=> 'Faq record is successfully updated');
        }
        else
        {
            return array('status'=>false,'data'=>$faq->getErrors());
        }
    }

    public function actionGetFaq()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $faq = Faq::find()->all();
        if(count($faq) > 0 )
        {
            return array('status' => true, 'data'=> $faq);
        }
        else
        {
            return array('status'=>false,'data'=> 'No Faq Found');
        }
    }

    public function actionUpdateFaq()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();

        $faq = Faq::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($faq) > 0)
        {
            $faq->attributes = \yii::$app->request->post();
            $faq->save();
            return array('status' => true, 'data'=> 'Faq record is updated successfully');

        }
        else
        {
            return array('status'=>false,'data'=> 'No Faq Found');
        }
    }

    public function actionDeleteFaq()
    {
        \Yii::$app->response->format = \yii\web\Response:: FORMAT_JSON;
        $attributes = \yii::$app->request->post();
        $faq = Faq::find()->where(['ID' => $attributes['id'] ])->one();
        if(count($faq) > 0 )
        {
            $faq->delete();
            return array('status' => true, 'data'=> 'Faq record is successfully deleted');
        }
        else
        {
            return array('status'=>false,'data'=> 'No Faq Found');
        }
    }


}
