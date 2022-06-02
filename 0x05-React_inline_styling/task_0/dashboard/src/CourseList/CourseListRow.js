import React from 'react'
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let tableRow = '';
  let bodyStyle = { backgroundColor: '#f5f5f5ab' };
  let headerStyle = { backgroundColor: '#deb5b545' };
  const style = isHeader ? headerStyle : bodyStyle;

  if (isHeader === true) {
    if (textSecondCell === null) {
      tableRow = (<th colSpan='2' style={style}>{textFirstCell}</th>);
    }
    else if (textSecondCell !== null) {
      tableRow = (<React.Fragment><th style={style}>{textFirstCell}</th><th>{textSecondCell}</th></React.Fragment>);
    }
  } else if (isHeader === false) {
    tableRow = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }

  return (<tr style={style}> {tableRow}</tr >);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow
