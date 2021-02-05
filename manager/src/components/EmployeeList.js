import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem(employee) {
    return <ListItem employee={employee.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        keyExtractor={(employee, index) => employee.uid || index.toString()}
        renderItem={this.renderItem.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
  });

  return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
