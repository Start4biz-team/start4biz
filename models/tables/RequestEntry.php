<?php

namespace app\models\tables;

use Yii;

/**
 * This is the model class for table "request_entry".
 *
 * @property int $id
 * @property string $contact_name
 * @property int $contact_phone
 * @property string $contact_email
 * @property int $inn
 * @property string $request_subject
 * @property string $subject_purpose
 * @property string $subject_description
 * @property int $advance_payment
 * @property int $credit_period
 * @property int $status
 * @property string $date
 */
class RequestEntry extends \yii\db\ActiveRecord
{

    const SCENARIO_CREATE = 'create';

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'request_entry';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['contact_name', 'contact_phone', 'contact_email', 'inn', 'request_subject', 'subject_purpose', 'subject_description', 'advance_payment', 'credit_period'], 'required'],
            [['contact_phone', 'inn', 'advance_payment', 'credit_period', 'status'], 'integer'],
            [['date'], 'safe'],
            [['contact_name'], 'string', 'max' => 45],
            [['contact_email'], 'string', 'max' => 56],
            [['request_subject', 'subject_purpose', 'subject_description'], 'string', 'max' => 255],
        ];
    }

    public function scenarios()
    {
        $scenarios = parent::scenarios();
        $scenarios['create'] = ['contact_name', 'contact_phone', 'contact_email', 'inn', 'request_subject', 'subject_purpose', 'subject_description', 'advance_payment', 'credit_period', 'status', 'date'];
        return $scenarios;
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'contact_name' => 'Contact Name',
            'contact_phone' => 'Contact Phone',
            'contact_email' => 'Contact Email',
            'inn' => 'Inn',
            'request_subject' => 'Request Subject',
            'subject_purpose' => 'Subject Purpose',
            'subject_description' => 'Subject Description',
            'advance_payment' => 'Advance Payment',
            'credit_period' => 'Credit Period',
            'status' => 'Status',
            'date' => 'Date',
        ];
    }
}
