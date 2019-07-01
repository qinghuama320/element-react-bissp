'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _libs = require('../../libs');

var _utils = require('./utils');

var _TableBodyRow = require('./TableBodyRow');

var _TableBodyRow2 = _interopRequireDefault(_TableBodyRow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function (_Component) {
  (0, _inherits3.default)(TableBody, _Component);

  function TableBody() {
    (0, _classCallCheck3.default)(this, TableBody);
    return (0, _possibleConstructorReturn3.default)(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'getKeyOfRow',
    value: function getKeyOfRow(row, index) {
      var rowKey = this.props.rowKey;

      if (rowKey) {
        return (0, _utils.getRowIdentity)(row, rowKey);
      }

      return index;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          RowUpdater = _props.RowUpdater,
          props = (0, _objectWithoutProperties3.default)(_props, ['RowUpdater']);

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
                (0, _extends3.default)({ key: 'rowupdater_' + rowKey, row: row, rowIndex: rowIndex }, props),
                React.createElement(_TableBodyRow2.default, null)
              );
            } else {
              return React.createElement(_TableBodyRow2.default, (0, _extends3.default)({ key: 'rowupdater_' + rowKey, row: row, rowIndex: rowIndex }, props));
            }
          })
        )
      );
    }
  }]);
  return TableBody;
}(_libs.Component);

var _default = TableBody;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TableBody, 'TableBody', 'src/table/TableBody.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/table/TableBody.jsx');
}();

;