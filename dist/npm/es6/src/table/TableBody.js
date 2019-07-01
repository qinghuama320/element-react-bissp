import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import { Component } from '../../libs';
import { getRowIdentity } from "./utils";

import TableBodyRow from "./TableBodyRow";

var TableBody = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableBody.prototype.getKeyOfRow = function getKeyOfRow(row, index) {
    var rowKey = this.props.rowKey;

    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }

    return index;
  };

  TableBody.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        RowUpdater = _props.RowUpdater,
        props = _objectWithoutProperties(_props, ['RowUpdater']);

    return React.createElement(
      'table',
      {
        className: 'el-table__body',
        cellPadding: 0,
        cellSpacing: 0,
        style: this.style({
          borderSpacing: 0,
          border: 0
        })
      },
      React.createElement(
        'colgroup',
        null,
        props.store.columns.map(function (column, index) {
          return React.createElement('col', { width: column.realWidth, style: { width: column.realWidth }, key: index });
        })
      ),
      React.createElement(
        'tbody',
        null,
        props.store.data.map(function (row, rowIndex) {
          var rowKey = _this2.getKeyOfRow(row, rowIndex);
          if (RowUpdater) {
            return React.createElement(
              RowUpdater,
              _extends({ key: 'rowupdater_' + rowKey, row: row, rowIndex: rowIndex }, props),
              React.createElement(TableBodyRow, null)
            );
          } else {
            return React.createElement(TableBodyRow, _extends({ key: 'rowupdater_' + rowKey, row: row, rowIndex: rowIndex }, props));
          }
        })
      )
    );
  };

  return TableBody;
}(Component);

export default TableBody;