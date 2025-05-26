<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<nav class="header__menu">
            <ul class="header__list">
<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;
<?if($arItem["SELECTED"]):?>
                <!-- <li class="header__item"><a class="header__registration header__link" href="<?=$arItem["LINK"]?>"> <?=$arItem["TEXT"]?></a></li><?else:?>
                <li class="header__item"><a class="header__sinin header__link" href="<?=$arItem["LINK"]?>"> <?=$arItem["TEXT"]?></a></li><?else:?>
                <li class="header__item"><a class="header__link" href="<?=$arItem["LINK"]?>" target="_blank"> <?=$arItem["TEXT"]?></a></li><?else:?>
                <li class="header__item"><a class="header__link" href="<?=$arItem["LINK"]?>" target="_blank"> <?=$arItem["TEXT"]?></a></li><?else:?>
                <li class="header__item"><a class="header__link" href="<?=$arItem["LINK"]?>" target="_blank"> <?=$arItem["TEXT"]?></a></li><?else:?>
                <li class="header__item"><a class="header__link" href="<?=$arItem["LINK"]?>" target="_blank"> <?=$arItem["TEXT"]?></a></li> --><?else:?>
<?endforeach?>
            </ul>
            <button class="header__registration header__button">Регистрация</button>
            <button class="header__sinin header__button">Вход</button>
            <button id="eng" class="translate"><img src="<?=SITE_TEMPLATE_PATH?>/images/UK.png" alt="UK flag" width="40" height="30"></button>
            <button id="rus" class="translate"><img src="<?=SITE_TEMPLATE_PATH?>/images/RU.png" alt="RU flag" width="40" height="30"></button>
        </nav>

<ul class="left-menu">

<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;
?>
	<?if($arItem["SELECTED"]):?>
		<li><a href="<?=$arItem["LINK"]?>" class="selected"><?=$arItem["TEXT"]?></a></li>
	<?else:?>
		<li><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
	<?endif?>
	
<?endforeach?>

</ul>
<?endif?>