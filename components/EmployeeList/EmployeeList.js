import Employee from '../Employee/Employee';
import styles from './EmployeeList.module.css';

const EmployeeList = ({data}) => {
  return (
    <div className={styles.employees}>
      {data.map((employee) => 
        <Employee key={employee.id} data={employee}></Employee>
      )}
    </div>
  )
};

export default EmployeeList;