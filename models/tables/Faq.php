<?php

namespace app\models\tables;

use Yii;

/**
 * This is the model class for table "faq".
 *
 * @property int $id
 * @property string $question
 * @property string|null $answer
 */
class Faq extends \yii\db\ActiveRecord
{
    const SCENARIO_CREATE = 'create';


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'faq';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['question'], 'required'],
            [['question', 'answer'], 'string', 'max' => 100],
        ];
    }

    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios['create'] = ['question','answer'];
        return $scenarios;
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'question' => 'Question',
            'answer' => 'Answer',
        ];
    }
}
