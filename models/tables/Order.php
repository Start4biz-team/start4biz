<?php

namespace app\models\tables;

use Yii;

/**
 * This is the model class for table "order".
 *
 * @property int $id
 * @property string $Corporation
 * @property string $requirements
 * @property int|null $status
 * @property string $date
 */
class Order extends \yii\db\ActiveRecord
{
    const SCENARIO_CREATE = 'create';

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'order';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['Corporation', 'requirements'], 'required'],
            [['status'], 'integer'],
            [['date'], 'safe'],
            [['Corporation'], 'string', 'max' => 45],
            [['requirements'], 'string', 'max' => 255],
        ];
    }

    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios['create'] = ['Corporation','requirements','status', 'date'];
        return $scenarios;
    }


    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'Corporation' => 'Corporation',
            'requirements' => 'Requirements',
            'status' => 'Status',
            'date' => 'Date',
        ];
    }
}
