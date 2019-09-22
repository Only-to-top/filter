# Multi filter items

<h2>Filter items</h2>

```php
<section class="filter-directory">
    <div class="container">

        <h1 class="title">Каталог камня</h1>

        <h2 class="filter-directory__name">Материал</h2>

        <fieldset data-filter-group="material" class="filter-directory__material">
            <label class="mycheckbox">
                <button type="button" data-filter=".quartz" class="mycheckbox__default">Кварцевый агломерат</button>
            </label>
            <label class="mycheckbox">
                <button type="button" data-filter=".ceramics" class="mycheckbox__default">Керамика</button>
            </label>
            <label class="mycheckbox">
                <button type="button" data-filter=".acrylic" class="mycheckbox__default">Акриловый камень</button>
            </label>
            <label class="mycheckbox">
                <button type="button" data-filter=".stone" class="mycheckbox__default">Натуральный камень</button>
            </label>
        </fieldset>

        <div class="row">
            <div class="col-md-4 col-xl-3">
                <h2 class="filter-directory__name">Производитель</h2>

                <fieldset data-filter-group="manufacturer" class="filter-directory__manufacturer">
                    <button type="button" data-filter=".tristone">Tristone</button>
                    <button type="button" data-filter=".akrilika">Akrilika</button>
                    <button type="button" data-filter=".samsung">Samsung</button>
                    <button type="button" data-filter=".staron">Staron</button>
                    <button type="button" data-filter=".neomarm">Neomarm</button>
                    <button type="button" data-filter=".lg">LG Hi-macs</button>
                    <button type="button" data-filter=".hanex">Hanex</button>
                    <button type="button" data-filter=".grandex">Grandex</button>
                    <button type="button" data-filter=".dupont-montelli">Dupont Montelli</button>
                    <button type="button" data-filter=".dupont-corian">Dupont Corian</button>
                    <button type="button" data-filter=".bienstone">Bienstone</button>
                </fieldset>
            </div>
            <div class="col-md-8 col-xl-9">
                <div id="filter_items" class="filter-items">
                    <p class='filter-fail hidden'>По вашему запросу ничего не найдено</p>

                    <div class="mix tristone quartz">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/1.png');"></div>
                        <div class="filter-items__name">s - 102 <br>Акриловый камень</div>
                    </div>
                    <div class="mix akrilika stone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/2.png');"></div>
                        <div class="filter-items__name">s - 104 <br>Акриловый камень</div>
                    </div>
                    <div class="mix quartz samsung">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/3.png');"></div>
                        <div class="filter-items__name">s - 107 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic staron">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/4.png');"></div>
                        <div class="filter-items__name">s - 110 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/5.png');"></div>
                        <div class="filter-items__name">s - 111 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/6.png');"></div>
                        <div class="filter-items__name">s - 113 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/7.png');"></div>
                        <div class="filter-items__name">s - 117 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/8.png');"></div>
                        <div class="filter-items__name">s - 119 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/9.png');"></div>
                        <div class="filter-items__name">s - 125 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/10.png');"></div>
                        <div class="filter-items__name">s - 201 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/11.png');"></div>
                        <div class="filter-items__name">s - 202 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/12.png');"></div>
                        <div class="filter-items__name">s - 203 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/13.png');"></div>
                        <div class="filter-items__name">s - 204 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/14.png');"></div>
                        <div class="filter-items__name">s - 205 <br>Акриловый камень</div>
                    </div>
                    <div class="mix acrylic tristone">
                        <div class="filter-items__img" style="background-image:url('<?php echo get_template_directory_uri(); ?>/img/catalog/15.png');"></div>
                        <div class="filter-items__name">s - 207 <br>Акриловый камень</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
```
