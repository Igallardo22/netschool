/*jshint strict:true, browser:true, curly:true, eqeqeq:true, expr:true, forin:true, latedef:true, newcap:true, noarg:true, trailing: true, undef:true, unused:true */
/*global Drupal:true, jQuery: true*/
(function ($, Drupal) {
  "use strict";
  function hideShowTable(tableid, action) {
    var $table = $('#' + tableid);
    $table[action]();
  }

  var dialogs = {};

  /**
   * Wysiwyg plugin button implementation for token_insert plugin.
   */
  Drupal.wysiwyg.plugins.token_insert_wysiwyg = {
    /**
     * Return whether the passed node belongs to this plugin.
     *
     * @param node
     *   The currently focused DOM element in the editor content.
     */
    isNode: function(node) {
      return ($(node).is('img.token_insert_wysiwyg-token_insert_wysiwyg'));
    },

    /**
     * Execute the button.
     *
     * @param data
     *   An object containing data about the current selection:
     *   - format: 'html' when the passed data is HTML content, 'text' when the
     *     passed data is plain-text content.
     *   - node: When 'format' is 'html', the focused DOM element in the editor.
     *   - content: The textual representation of the focused/selected editor
     *     content.
     * @param settings
     *   The plugin settings, as provided in the plugin's PHP include file.
     * @param instanceId
     *   The ID of the current editor instance.
     */
    invoke: function(data, settings, instanceId) {
      Drupal.wysiwyg.plugins.token_insert_wysiwyg.insert_form(data, settings, instanceId);
    },


    insert_form: function (data, settings, instanceId) {
      if (!dialogs[instanceId]) {
        var id = 'token-insert-dialog-' + instanceId;
        var $dialogdiv = $('<div id="' + id + '"></div>').appendTo('body');
        var ajax_settings = {
          url: Drupal.settings.basePath + 'token_insert_wysiwyg/insert/' + instanceId,
          event: 'dialog.token-insert-wysiwyg',
          method: 'html'
        };
        new Drupal.ajax(id, $dialogdiv[0], ajax_settings);
        $dialogdiv.trigger(ajax_settings.event);
      }
      else {
        dialogs[instanceId].dialog("open");
      }
    },

    insertIntoEditor: function (token, editor_id) {
      Drupal.wysiwyg.instances[editor_id].insert(token);
    },

    /**
     * Prepare all plain-text contents of this plugin with HTML representations.
     *
     * Optional; only required for "inline macro tag-processing" plugins.
     *
     * @param content
     *   The plain-text contents of a textarea.
     * @param settings
     *   The plugin settings, as provided in the plugin's PHP include file.
     * @param instanceId
     *   The ID of the current editor instance.
     */
    attach: function(content, settings) {
      content = content.replace(/<!--token_insert_wysiwyg-->/g, this._getPlaceholder(settings));
      // hide the token_insert_text fieldset when wysiwyg is enabled,
      // token_insert_test won't work then, users should use the
      // wysiwyg plugin instead.
      if (typeof Drupal.settings.token_insert !== 'undefined') {
        for (var index in Drupal.settings.token_insert.tables) {
          if (Drupal.settings.token_insert.tables.hasOwnProperty(index)) {
            hideShowTable(index, 'hide');
          }
        }
      }
      return content;
    },

    /**
     * Process all HTML placeholders of this plugin with plain-text contents.
     *
     * Optional; only required for "inline macro tag-processing" plugins.
     *
     * @param content
     *   The HTML content string of the editor.
     * @param settings
     *   The plugin settings, as provided in the plugin's PHP include file.
     * @param instanceId
     *   The ID of the current editor instance.
     */
    detach: function(content) {
      var $content = $('<div>' + content + '</div>');
      // show the token_insert_text fieldset when wysiwyg is disabled
      if (typeof Drupal.settings.token_insert !== 'undefined') {
        for (var index in Drupal.settings.token_insert.tables) {
          if (Drupal.settings.token_insert.tables.hasOwnProperty(index)) {
            hideShowTable(index, 'show');
          }
        }
      }
      return $content.html();
    },

    /**
     * Helper function to return a HTML placeholder.
     *
     * The 'drupal-content' CSS class is required for HTML elements in the editor
     * content that shall not trigger any editor's native buttons (such as the
     * image button for this example placeholder markup).
     */
    _getPlaceholder: function (settings) {
      return '<img src="' + settings.path + '/images/spacer.gif" alt="&lt;--token_insert_wysiwyg-&gt;" title="&lt;--token_insert_wysiwyg--&gt;" class="token_insert_wysiwyg-token_insert_wysiwyg drupal-content" />';
    }
  };

  Drupal.ajax.prototype.commands.tokenInsertTable = function (ajax, response, status) {
    var $dialogdiv = $(response.selector);
    var instanceId = response.instance_id;
    function insertToken (e) {
      e.preventDefault();
      var token = $(this).text();
      Drupal.wysiwyg.plugins.token_insert_wysiwyg.insertIntoEditor(token, instanceId);
    }
    $dialogdiv.find('.token-insert-table').once('token-insert-table', function() {
      $(this).delegate('.token-key a', 'click', insertToken);
    });
    var btns = {};

    btns[Drupal.t('Cancel')] = function () {
      $dialogdiv.dialog('close');
    };

    $dialogdiv.dialog({
      modal: false,
      autoOpen: false,
      closeOnEscape: true,
      resizable: false,
      draggable: true,
      autoresize: true,
      namespace: 'jquery_ui_dialog_default_ns',
      dialogClass: 'jquery_ui_dialog-dialog',
      title: Drupal.t('Insert token'),
      buttons: btns,
      width: 700,
      maxHeight: 450
    });
    $dialogdiv.css({maxHeight: 350});
    dialogs[instanceId] = $dialogdiv;
    $dialogdiv.dialog("open");
  };
})(jQuery, Drupal);
