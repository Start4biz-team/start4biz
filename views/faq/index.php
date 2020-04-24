<?php
/* @var $this yii\web\View */
?>
<div class="form-wrap">
    <div class="profile"><img src="https://html5book.ru/wp-content/uploads/2016/10/profile-image.png">
        <h1>Создать запись Faq</h1>
    </div>
    <form method="post" action="/faq/create-faq">
        <input type="hidden" name="_csrf" value="<?=Yii::$app->request->getCsrfToken()?>" />
        <div>
            <label for="Corporation">Вопрос</label>
            <textarea type="text" name="question" value="" required></textarea>
        </div>
        <div>
            <label for="requirements">Текст запроса</label>
            <textarea type="text" name="answer" value="" required></textarea>
        </div>

        <button type="submit">Сохранить</button>
    </form>
</div>
