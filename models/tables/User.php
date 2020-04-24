<?php

namespace app\models\tables;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property int $id
 * @property string $username
 * @property string $useremail
 * @property string $password
 */
class User extends \yii\db\ActiveRecord
{
    const SCENARIO_CREATE = 'create';

     /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['username', 'useremail', 'password'], 'required'],
            [['username'], 'string', 'max' => 32],
            [['useremail'], 'string', 'max' => 56],
            [['password'], 'string', 'max' => 256],
        ];
    }
    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios['create'] = ['username','useremail','password'];
        return $scenarios;
    }



    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'username' => 'Username',
            'useremail' => 'Useremail',
            'password' => 'Password',
        ];
    }
}
