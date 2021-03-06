<?php
  /**
   * Print book items that are on the same level so we can keep context
   * of pacing through a lesson of instruction.
   *
   * Variables
   * $parent - menu item that is the parent of all these child items
   * $items - an array of menu items, optionally with count and icon defined
   */
  $parent_count = '';
  $parent_icon = '';
  // support for ... with screen readers
  if ($parent['mlid'] == -1) {
    $ptitle = t('Pages nested below the current one.');
  }
  else {
    $ptitle = t('Pages on the same level as @name', array('@name' => $parent['link_title']));
  }
  // support for count on the lowest level parent
  if (isset($parent['_count'])) {
    $parent_count = $parent['_count'] . '. ';
  }
  // support for icon on lowest level parent
  if (isset($parent['_icon'])) {
    $parent_icon = '<div class="book-sibling-parent-icon book-menu-item-' . $parent['mlid'] . ' icon-' . $parent['_icon'] . '-black outline-nav-icon"></div>';
  }

?>
<li class="toolbar-menu-icon book-sibling-parent book-sibling-parent-<?php print $count ?>">
  <a href="#" title="<?php print $ptitle ?>" class="<?php print $parent['_class'] ?>" data-dropdown="book-sibling-children-<?php print $parent['mlid'] ?>" aria-controls="middle-section-buttons" aria-expanded="false">
    <?php if ($parent_icon !== ''): ?><?php print $parent_icon ?><?php endif; ?>
    <div class="book-sibling-parent-text"><?php print $parent_count; ?><?php print $parent['link_title'] ?></div><div class="book-sibling-parent-arrow icon-chevron-down-black off-canvas-toolbar-item-icon"></div>
  </a>
</li>
<div id="book-sibling-children-<?php print $parent['mlid'] ?>" data-dropdown-content class="f-dropdown content book-sibling-children" aria-hidden="true" tabindex="-1">
  <ul>
<?php
  foreach ($items as $item) {
    // look for active trail item
    if ($parent['link_path'] == $item['link_path']) {
      $active = 'book-menu-item-active';
    }
    else {
      $active = '';
    }
    $pre = '';
    // check for icon, we only render these at lowest level
    if (isset($item['_icon'])) {
      $pre = $item['_count'] . '. ' . ' <div class="book-menu-item-' . $item['mlid'] . ' icon-' . $item['_icon'] . '-black outline-nav-icon"></div>';
    }
    $link = '<li class="' . $active . '">' . l($pre . $item['link_title'],
        $item['link_path'],
        array('html' => TRUE,
          'attributes' => array(
            'title' => $item['link_title'],
            'class' => array($active . '-link'),
          )
        )
      ) . '</li>' . "\n";
    print $link;
  }
?>
  </ul>
</div>
