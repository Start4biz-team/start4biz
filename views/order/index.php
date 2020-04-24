<?php
/* @var $this yii\web\View */
?>


<div class="form-wrap">
    <div class="profile"><img src="https://html5book.ru/wp-content/uploads/2016/10/profile-image.png">
        <h1>Создание заявки</h1>
    </div>
    <form method="post" action="/order/create-order">
        <input type="hidden" name="_csrf" value="<?=Yii::$app->request->getCsrfToken()?>" />
        <div>
            <label for="Corporation">Название компании</label>
            <input type="text" name="Corporation" value="" required>
        </div>
        <div>
            <label for="requirements">Текст запроса</label>
            <input type="text" name="requirements" value="" required>
        </div>

        <button type="submit">Отправить</button>
    </form>
</div>
