-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 28 2020 г., 19:10
-- Версия сервера: 5.6.41
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bastronva_start4`
--

-- --------------------------------------------------------

--
-- Структура таблицы `company`
--

CREATE TABLE `company` (
  `id` int(9) NOT NULL,
  `Company` varchar(100) NOT NULL,
  `Telephon` int(16) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `inn` int(17) NOT NULL,
  `Type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `faq`
--

CREATE TABLE `faq` (
  `id` int(2) NOT NULL,
  `question` varchar(100) NOT NULL,
  `answer` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `faq`
--

INSERT INTO `faq` (`id`, `question`, `answer`) VALUES
(1, 'Мой вопрос', 'Мой ответ');

-- --------------------------------------------------------

--
-- Структура таблицы `partners`
--

CREATE TABLE `partners` (
  `id` int(2) NOT NULL,
  `Type` varchar(45) NOT NULL,
  `procent` int(3) NOT NULL,
  `lessorcor` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `request_entry`
--

CREATE TABLE `request_entry` (
  `id` int(11) NOT NULL,
  `contact_name` varchar(45) NOT NULL,
  `contact_phone` int(56) NOT NULL,
  `contact_email` varchar(56) NOT NULL,
  `inn` int(56) NOT NULL,
  `request_subject` varchar(255) NOT NULL,
  `subject_purpose` varchar(255) NOT NULL,
  `subject_description` varchar(255) NOT NULL,
  `advance_payment` int(32) NOT NULL,
  `credit_period` int(32) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `request_entry`
--

INSERT INTO `request_entry` (`id`, `contact_name`, `contact_phone`, `contact_email`, `inn`, `request_subject`, `subject_purpose`, `subject_description`, `advance_payment`, `credit_period`, `status`, `date`) VALUES
(1, 'Компания 1', 0, '', 0, '', '', '', 0, 0, 0, '2020-04-23 15:26:33'),
(3, 'Супер Бизнес', 0, '', 0, '', '', '', 0, 0, 0, '2020-04-23 17:24:59');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(32) NOT NULL,
  `useremail` varchar(56) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `username`, `useremail`, `password`) VALUES
(1, 'admin', 'admin@start4.biz', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'user1', 'user1@start4.biz', 'd93591bdf7860e1e4ee2fca799911215'),
(3, '', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `request_entry`
--
ALTER TABLE `request_entry`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `request_entry`
--
ALTER TABLE `request_entry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
